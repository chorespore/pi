var process = require('child_process');


function getTemp() {
    var cmd = 'sudo cp /sys/class/thermal/thermal_zone1/temp /home/linaro/code/cpufan/'
    process.exec(cmd)
    // console.log('OK!');
}

console.log('Watching the cpu temperature...');
setInterval(getTemp, 5000);
