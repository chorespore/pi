var fs = require('fs');

// Enable the GPIO 154
fs.writeFileSync('/sys/class/gpio/export', 154);

// Set it to output
fs.writeFileSync('/sys/class/gpio/gpio154/direction', 'out');

// Turn on the LED
fs.writeFileSync('/sys/class/gpio/gpio154/value', 0);

// Wait 1 second then turn it off