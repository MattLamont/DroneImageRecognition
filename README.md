# DroneImageRecognition

##Download and Install
1. Navigate to your node project's root directory.
2. type in `sudo npm install git://github.com/MattLamont/DroneImageRecognition.git`
3. Now you have a copy of my node module in "node_modules"

##Usage Example
```
//This is how we include my node module
var DroneImageRecognition = require( 'DroneImageRecognition' );



//Since Node.js runs ansynchronously, we need to create a callback. This is the callback that will
//run when the 'checkForCommand' function finishes. When my function finishes, it will call this callback
//and pass in: 1. any error it got and 2. the command it found
var my_callback = function( error , command ){

    //if there was an error; print it out
    if( error ){
        console.log( 'Error: ' + error );
        return;
    }

    //otherwise, we can do something. Here we just print the command.
    console.log( 'Command: ' + command );
};



//This is the function that runs the command recognition. It takes 3 arguments:
//      1. the programs name
//      2. the path to the image you want to check for a command
//      3. a callback (like the one we defined up top)
DroneImageRecognition.checkForCommand( './build/RecognizeCommand' , 'res/command2_real.jpg' , my_callback );
```

##Returned Information
As you can see from the callback that we created, running the `checkForCommand` function will always return an error string and a command string. The command string will always take the form of: `command1` , `command2` , `command3` , or `no_command`. If everything is successful, you will get back one of the strings just mentioned and the error will be empty. If not, you can find the error descritpion in the error string and `no_command` will be returned as the command.
