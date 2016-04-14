

module.exports = {
    checkForCommand: function( program_name , image_path , callback ){

        var exec = require( 'child_process' ).exec;

        var process_string = program_name;
        process_string += " ";
        process_string += image_path;

        exec( process_string , function exec_callback( error , stdout , stderr ){

            if( error ){
                callback( error , "no_command" );
            }

            if( stderr.indexOf( 'no_command' ) > -1 ){
                callback( error , 'no_command' );
            }

            else if( stderr.indexOf( 'command1' ) > -1 ){
                callback( error , 'command1' );
            }

            else if( stderr.indexOf( 'command2' ) > -1 ){
                callback( error , 'command2' );
            }

            else if( stderr.indexOf( 'command3' ) > -1 ){
                callback( error , 'command3' );
            }

            else{
                callback( error , 'no_command' );
            }
        });
    }
};
