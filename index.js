const Gpio = require('onoff').Gpio
let led = new Gpio(4, 'out') // GPIO4 (pin #7)

on()

// Turn on LED
function on() {
    led.writeSync(1)
    console.log('ON');
    setTimeout(() => {
        off()
    }, 2000)
}

// Turn off LED
function off() {
    led.writeSync(0)
    console.log('OFF');
    setTimeout(() => {
        on()
    }, 2000)
}
