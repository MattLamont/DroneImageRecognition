
var math = require('mathjs');

module.exports = {
    checkForCommand: function( image_path ){
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
    }
};
