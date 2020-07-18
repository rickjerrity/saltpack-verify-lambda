const util = require('util');
const exec = util.promisify(require('child_process').exec);

// fix Lambda path so we can use local executables
process.env['PATH'] = process.env['PATH'] + ':' + process.env['LAMBDA_TASK_ROOT'];

async function setupKeybase() {
  await exec('mkdir -p /tmp/keybaseDir/');
  await exec('cp -Rn keybase/. /tmp/keybaseDir');
  await exec('chmod +x /tmp/keybaseDir/keybase');
}

async function verifyMessage(message) {
  const { stdout, stderr } = await exec(`./keybase --standalone verify -m "${message}"`, {
    cwd: '/tmp/keybaseDir/',
  });

  // split the highlighted BS off the username
  return {
    message: stdout,
    user: stderr.split('[1m')[1].split('[22m')[0],
  };
}

async function handler(event) {
  let response = {
    headers: {
      'Content-Type': 'application/json',
    },
    statusCode: 200,
    body: '',
  };

  if (event.body) {
    let message = event.body;
    let result = [];

    try {
      await setupKeybase();

      result = await verifyMessage(message);
    } catch (ex) {
      console.error(ex);

      result = { error: ex };
    }

    response.body = JSON.stringify(result);
  }

  return response;
}

exports.handler = handler;
