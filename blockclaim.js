const { spawn } = require('child_process');

module.exports = {
    test_function(args) {
        console.log("exported function");
        if(args.length > 0) {   
            spawn('py', args);
        }
    }
}