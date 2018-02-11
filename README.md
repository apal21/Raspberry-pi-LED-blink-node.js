## How to install latest Node.js in Raspberry Pi (Raspbian OS)?
  1. Go to https://nodejs.org and look for the current version of node.js. At this moment, for me version `9.5.0` is the current version.
  2. Open Terminal and Type
     * `curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -`
     * _**Note:**_ in future if you see the current version 10.x.x then in the URL above replace setup_9.x with `setup_10.x`
     * `sudo apt-get install nodejs`
     * `sudo apt-get install npm`
     * `sudo npm i -g npm`
     * In order for some npm packages to work (such as those that require building from source), you will need to install the build-essentials package.
     * `sudo apt-get install build-essential`
     
## How to run this code?
### Method 1 (from git):
  * To install git on your Raspberry Pi, open terminal and Type:  
     * `sudo apt-get install git-core` 
  * `git clone https://github.com/apal21/Raspberry-pi-LED-blink-node.js`
  * `cd Raspberry-pi-LED-blink-node.js`
  * `npm install`
  * `node index.js` or `npm run test`
  
### Method 2 (Using NPM):
  * `mkdir LED-blinking && cd LED-blinking`
  * `npm init --yes`
  * `nano index.js` and paste the content of this repo's index.js file.
  * `npm install onoff`
  * `node index.js`

## Setup GPIO
  1. In this code, I've used GPIO4 (pin #7)
  2. Change this according to your requirements.
