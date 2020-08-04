radio.onReceivedValue(function (name, value) {
    if (name == "Voor") {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, value)
        moveMotorZIP.showColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.White))
    } else if (name == "Achter") {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, value)
        moveMotorZIP.showColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Red))
    } else if (name == "Rechts") {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Right, value)
        moveMotorZIP.showColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Blue))
    } else if (name == "Links") {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Left, value)
        moveMotorZIP.showColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Blue))
    } else if (name == "Stop") {
        Kitronik_Move_Motor.stop()
        moveMotorZIP.clear()
        moveMotorZIP.show()
    } else if (name == "Toeter") {
        Kitronik_Move_Motor.beepHorn()
    } else if (name == "Sirene") {
        Kitronik_Move_Motor.soundSiren(Kitronik_Move_Motor.OnOffSelection.On)
        basic.pause(500)
        Kitronik_Move_Motor.soundSiren(Kitronik_Move_Motor.OnOffSelection.Off)
    } else {
        basic.showIcon(IconNames.No)
    }
})
let moveMotorZIP: Kitronik_Move_Motor.MoveMotorZIP = null
radio.setGroup(1)
moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
