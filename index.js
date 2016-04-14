
var math = require('mathjs');

module.exports = {
    checkForCommand: function( image_path , callback ){
        /*
        var random_num = math.randomInt( 1 , 5 );

        if( random_num == 1 ){
            return String("no_command");
        }

        else if( random_num == 2 ){
            return String("command1");
        }

        else if( random_num == 3 ){
            return String("command2");
        }

        else if( random_num == 4 ){
            return String("command3");
        }

        else{
            return String("no_command");
        }
        */

        var exec = require( 'child_process' ).exec;

        var process_string = './ShapeDetect ';
        process_string += image_path;
        
        exec( process_string , function exec_callback( error , stdout , stderr ){

            if( error ){
                return error;
            }

            if( stderr.indexOf( 'no_command' ) > -1 ){
                return 'no_command';
            }

            else if( stderr.indexOf( 'command1' ) > -1 ){
                return 'command1';
            }

            else if( stderr.indexOf( 'command2' ) > -1 ){
                return 'command2';
            }

            else if( stderr.indexOf( 'command3' ) > -1 ){
                return 'command3';
            }

            else{
                return 'no_command';
            }
        });
    }
};
