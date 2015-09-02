# ionic-starter-sidemenu-tabs-hybrid

This is an addon to the two ionic starter templates [sidemenu](https://github.com/driftyco/ionic-starter-sidemenu) and [tabs](https://github.com/driftyco/ionic-starter-tabs) for the [Ionic Framework](http://ionicframework.com/).

## How to use this template

*This template does not work on its own*. It is missing the Ionic library, and AngularJS.

To use this, either create a new ionic project using the ionic node.js utility, or copy and paste this into an existing Cordova project and download a release of Ionic separately.

### Prerequisites:

First make sure you have the CLI tools for ionic and cordova installed globally on your computer using 

```bash
$ sudo npm install -g ionic cordova
```

#### How to Start a Project:

To start any ionic project you must use the `ionic start` command, followed by what you what to call your local folder, then lastly, what project you what to start or load into your local project. This is specified by:

##### The name of one of ionic's starters.

```bash
$ ionic start myApp tabs
$ ionic start myApp sidemenu
$ ionic start myApp map
```

##### A codepen.io Pen's URL 
```bash
$ ionic start myApp http://codepen.io/[pen url here]
```

##### or in somecases just another URL
```bash
$ ionic start myApp tabs
```

#### How to run and test on devices and emulators

First, cd into `myApp` and add the platform, build it, then emulate it by running these:

```bash
$ ionic platform add ios
$ ionic build ios
$ ionic emulate ios
```

Substitute ios for android if not on a Mac, but if you can, the ios development toolchain is a lot easier to work with until you need to do anything custom to Android.

#### How to Start THIS Project:

```bash
$ ionic start myApp https://github.com/garrettmac/ionic-starter-sidemenu-tabs-hybrid
```



