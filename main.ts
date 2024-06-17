input.onGesture(Gesture.ScreenDown, function () {
    if (comm == 0) {
        comm = 1
    } else {
        comm = 0
    }
    basic.pause(5000)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "reset") {
        input.calibrateCompass()
    }
})
function update () {
    Wirelessout = state
    radio.sendNumber(Wirelessout)
}
let state = 0
let Wirelessout = 0
let comm = 0
radio.setGroup(89)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.clearScreen()
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P2)) {
        state = 0
        update()
        basic.clearScreen()
    } else {
        if (input.buttonIsPressed(Button.A)) {
            state = 1
            update()
            basic.showArrow(ArrowNames.West)
        } else {
            if (input.buttonIsPressed(Button.B)) {
                state = 2
                update()
                basic.showArrow(ArrowNames.East)
            } else {
                if (input.logoIsPressed()) {
                    state = 3
                    update()
                    basic.showLeds(`
                        # . # . #
                        . # # # .
                        # # # # #
                        . # # # .
                        # . # . #
                        `)
                }
            }
        }
    }
})
basic.forever(function () {
    if (state == 0 && comm == 0) {
        if (input.compassHeading() > 344 || input.compassHeading() < 15) {
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . . . .
                . . . . .
                `)
        }
        if (input.compassHeading() > 14 && input.compassHeading() < 45) {
            basic.showLeds(`
                . # . . .
                . # # . .
                . . # . .
                . . . . .
                . . . . .
                `)
        }
        if (input.compassHeading() > 44 && input.compassHeading() < 75) {
            basic.showLeds(`
                . . . . .
                # # . . .
                . # # . .
                . . . . .
                . . . . .
                `)
        }
        if (input.compassHeading() > 74 && input.compassHeading() < 105) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # . .
                . . . . .
                . . . . .
                `)
        }
        if (input.compassHeading() > 104 && input.compassHeading() < 135) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . # # . .
                # # . . .
                . . . . .
                `)
        }
        if (input.compassHeading() > 134 && input.compassHeading() < 165) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . # # . .
                . # . . .
                `)
        }
        if (input.compassHeading() > 164 && input.compassHeading() < 195) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . # . .
                . . # . .
                `)
        }
        if (input.compassHeading() > 194 && input.compassHeading() < 225) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . # # .
                . . . # .
                `)
        }
        if (input.compassHeading() > 224 && input.compassHeading() < 255) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # # .
                . . . # #
                . . . . .
                `)
        }
        if (input.compassHeading() > 254 && input.compassHeading() < 285) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # # #
                . . . . .
                . . . . .
                `)
        }
        if (input.compassHeading() > 284 && input.compassHeading() < 315) {
            basic.showLeds(`
                . . . . .
                . . . # #
                . . # # .
                . . . . .
                . . . . .
                `)
        }
        if (input.compassHeading() > 314 && input.compassHeading() < 345) {
            basic.showLeds(`
                . . . # .
                . . # # .
                . . # . .
                . . . . .
                . . . . .
                `)
        }
    }
})
