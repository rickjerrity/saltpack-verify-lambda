# Saltpack Verify AWS Lambda

This is an [AWS Lambda](https://aws.amazon.com/lambda/) NodeJS project that verifies [Saltpack](https://saltpack.org/) messages, returning the verified message and the user it was signed by, or an error if there was one.

[Example webpage calling this lambda](https://blackhole.dev/saltpack-verify)

## Installation

Follow the instructions in the `README.md` file inside of the `keybase` directory to get started.

Once you have the proper files/directories created and in place, deployment is as simple as zipping all the files/directories in this repo, and uploading to an AWS Lambda endpoint.

I recommend extending the memory of the Lambda to at least 384 MB, preferably 512 MB, as well as extending the timeout to around a minute. The Keybase executable can eat up some RAM and take longer on bigger messages, especially after a cold start.

## Usage

Once you have the Lambda endpoint setup, simply `POST` to it using `Content-Type` of `application/json`, and a body of the message you're trying to verify.

Example

```
POST https://abcd1234.execute-api.us-west-2.amazonaws.com/default/saltpackVerifyLambda HTTP/1.1
Content-Type: application/json

BEGIN KEYBASE SALTPACK SIGNED MESSAGE. kXR7VktZdyH7rvq v5weRa0zkFyr6YL d3W8OHdrkfXresG pb2HM2IGZNEwDU1 TcXTRZKvzcTgcJi PSIn2v0Fqlnl0Nv kCCWYtpVTaoFtip H5DjK1EgAXRIJXe SBu9GkFsbSQYELa MF2tPIAhEjU0vMT 9MoG1N7VUhNOCVk sDn82EPYlZqTa6c 4cQv9maKt5wdAnM sDWE5fOA. END KEYBASE SALTPACK SIGNED MESSAGE.
```
