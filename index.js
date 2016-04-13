
var math = require('mathjs');

module.exports = {
    checkForCommand: function( image_path ){
        var random_num = math.random( 1 , 4 );
        var floor_num = math.floor( random_num );

        if( floor_num == 1 ){
            return String("command1");
        }

        else if( floor_num == 2 ){
            return String("command2");
        }

        else if( floor_num == 3 ){
            return String("command2");
        }

        else if( floor_num == 4 ){
            return String("command4");
        }

        else{
            return String("command1");
        }
    }
};
