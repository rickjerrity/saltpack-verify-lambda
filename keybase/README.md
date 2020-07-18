This directory is where you will place a copy of the Keybase core executable, and a clone of your Keybase `.config` directory, that is generated after an initial run. As of right now, the repo and instructions for downloading the core Go source can be found [here](https://github.com/keybase/client/tree/master/go). I believe after starting the service and/or running a command in `--standalone` mode, a `.config` directory should be generated in your home.

The contents of this directory should like something like this when you are done:

```
- keybase
- .config
  - autostart
    - keybase_autostart.desktop
  - keybase
    - autostart_created
    - config.json
    - device_clone.json
    - gui_config.json
    - keybased.info
    - keybased.pid
    - keybased.sock
```

*Note* - I don't believe every file is necessary that is inside of the `.config` directory, but that was the simplest solution when I was working on this. I believe the main file needed is `keybased.sock`. Feel free to play with the files you place in here, but I suggest starting with the entire `.config` directory to get up and running.
