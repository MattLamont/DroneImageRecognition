# DroneImageRecognition

##Download and Install
1. Navigate to your node project's root directory.
2. type in `sudo npm install git://github.com/MattLamont/DroneImageRecognition.git`
3. Now you have a copy of my node module in "node_modules"
4. next type in: `sudo npm install mathjs`
5. This a math module used for random number generation.

##Usage Example
`var DroneImageRecognition = require( 'DroneImageRecognition' );`
` `
`var img_path = "res/sample_image";`
`var command = DroneImageRecognition.checkForCommand( img_path );`
`console.log( command );`

##Explanation
1. First we import the module and call it "DroneImageRecognition"
2. Next we make a string variable called "img_path". This variable should provide a path to an image taken by the drone.
3. We call the "checkForCommand" function which returns a string "command".
4. Note: Right now the function just randomely returns the strings: "command1" , "command2" , "command3" , or "no_command"
