var process = require('child_process');

function curlTemp() {
    var curlCmd = 'curl -u chao:chorespore http://47.101.163.119:6012/static/code/cpufan/temp'
    process.exec(curlCmd, function (err, stdout, stderr) {
        if (err) {
            console.log('get weather api error:' + stderr);
        } else {
            temp = parseInt(stdout / 1000);
            console.log('Temperature:' + temp);
            if (temp > 60) {
                var fanOn = 'sudo ~/code/cpufan/uhubctl/uhubctl -p 2 -a on';
                console.log('Fan On...');
                process.exec(fanOn);
            } else if (temp < 40) {
                var fanOff = 'sudo ~/code/cpufan/uhubctl/uhubctl -p 2 -a off';
                console.log('Fan Off...');
                process.exec(fanOff);
            }
        }
    });
    // console.log('OK!');
}

console.log('Serving the fan switch...');
setInterval(curlTemp, 5000);