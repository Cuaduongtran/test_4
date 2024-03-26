namespace micro:bit_robot{
    //% shim=sendBufferAsm
    export function sendBuffer(buf: Buffer, pin: DigitalPin) {
    }
    
    export enum startbit_ultrasonicPort {
        //% block="Port 1"
        port1 = 0x01,
        //% block="Port 2"
        port2 = 0x02
    }
	
    let echoPin: DigitalPin;
    let trigPin: DigitalPin;
    //% weight=91 blockId=ultrasonic_init  block="Initialize ultrasonic|port %port"
    export function ultrasonic_init(port: startbit_ultrasonicPort) {
        switch (port) {
            case startbit_ultrasonicPort.port1:
                echoPin = DigitalPin.P2;
                trigPin = DigitalPin.P1;
                break;
            case startbit_ultrasonicPort.port2:
                echoPin = DigitalPin.P14;
                trigPin = DigitalPin.P13;
                break;
        }
    }

    //% shim=setBufferMode
    export function setBufferMode(pin: DigitalPin, mode: number) {

    }
    export const BUFFER_MODE_RGB = 1
    export const BUFFER_MODE_RGBW = 2
    export const BUFFER_MODE_RGB_RGB = 3
    export const BUFFER_MODE_AP102 = 4
}
