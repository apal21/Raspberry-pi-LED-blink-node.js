const Gpio = require('onoff').Gpio
let led = new Gpio(4, 'out')

led.writeSync(1)

on()

function on() {
    led.writeSync(1)
    console.log('ON');
    setTimeout(() => {
        off()
    }, 2000)
}

function off() {
    led.writeSync(0)
    console.log('OFF');
    setTimeout(() => {
        on()
    }, 2000)
}
