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
<hr>
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

##### or in some cases just another URL
```bash
$ ionic start myApp [URL here]
```

#### How to run and test on devices and emulators

First, cd into `myApp` and add the platform, build it.

 #### To emulate on machine run:
```bash
$ ionic platform add [platform name here]
```
```bash
$ ionic platform add ios
$ ionic build ios
$ ionic emulate ios
```

or just 

```bash
$ ionic platform add ios
$ ionic emulate ios
```

##### Emulate on genymotion emulator

 if you want to run an andriod on a genymotion emulator, have a genymotion android emulator running then replace the 'emulate' command with 'run' like so:


```bash
$ ionic run android
```

#### To run on device and push to the cloud

First upload project to ionic.io

```bash
$ ionic upload
```

It will prompt for you to sign up (it's free). Do it then download there app from the Google Play or iOS App Store then sign in and you'll see your project there 


#### To run in default browser

Run:

```bash
$ ionic serve
```


## How to Start This Project:

First `cd` into the directory you want to add this project and run:

```bash
$ ionic start myApp https://github.com/garrettmac/ionic-starter-sidemenu-tabs-hybrid
$ cd myApp
$ ionic serve
```
or in one step run: 

```bash
$ ionic start myApp https://github.com/garrettmac/ionic-starter-sidemenu-tabs-hybrid && cd $_ && ionic serve
```


### Also Know

if packages are included in projects install then then run by running:

```bash
$ ionic start myApp https://github.com/garrettmac/ionic-starter-sidemenu-tabs-hybrid
$ cd myApp
$ npm install
$ bower install
$ ionic serve
```

Enjoy







