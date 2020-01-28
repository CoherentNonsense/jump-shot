class Input {
    constructor(sendInput) {
        this.xAxis = 0
        this.yAxis = 0
        this.isJoystickDown = false
        this.sendInput = sendInput
    }

    handleJoyStickDown(e) {
        this.isJoystickDown = true
        this.xAxis = (e.pageX - window.innerWidth / 2) / 200
        this.yAxis = (e.pageY - 300) / 200
        this.sendInput()
        $("#joystick-dial").css({
            display: "block",
            top: e.pageY,
            left: e.pageX
        })
    }

    handleJoyStickUp(e) {
        this.isJoystickDown = false
        $("#joystick-dial").css("display", "none")
    }

    handleJoyStick(e) {
        if (this.isJoystickDown) {
            this.xAxis = (e.pageX - window.innerWidth / 2) / 200
            this.yAxis = (300 - e.pageY) / 200
            if (this.xAxis > 1) {
                this.xAxis = 1
            } else if (this.xAxis < -1) {
                this.xAxis = -1
            }
            if (this.yAxis > 1) {
                this.yAxis = 1
            } else if (this.yAxis < -1) {
                this.yAxis = -1
            }
            this.sendInput()
            $("#joystick-dial").css({
                top: e.pageY,
                left: e.pageX
            })
        }
    }
}