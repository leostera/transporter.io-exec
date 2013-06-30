var util  = require('util')
  , spawn = require('child_process').spawn;

module.exports = {
  publish: function (data, socket) {

    cmd = spawn(data.message, data.options);

    cmd.stdout.on('data', function (out) {
      console.log(out.toString());
    });

    cmd.stderr.on('data', function (out) {
      console.error(out.toString());
    });

    cmd.on('exit', function (code) {
      console.info('child process exit code',code);
      //socket.send(code);
    });
  }
};