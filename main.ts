radio.onReceivedNumber(function (receivedNumber) {
    MakrinoApotelesma = receivedNumber
    basic.pause(300)
    if (Apotelesma < MakrinoApotelesma) {
        basic.showIcon(IconNames.Sad)
    }
    if (Apotelesma > MakrinoApotelesma) {
        basic.showIcon(IconNames.Happy)
    }
    if (Apotelesma == MakrinoApotelesma) {
        basic.showIcon(IconNames.Asleep)
    }
})
input.onGesture(Gesture.Shake, function () {
    Apotelesma = randint(0, 3)
    Timi = 1
    basic.showNumber(Apotelesma)
    radio.sendNumber(Apotelesma)
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
})
let Timi = 0
let Apotelesma = 0
let MakrinoApotelesma = 0
radio.setGroup(1)
basic.forever(function () {
	
})
