let sonido = 0
basic.forever(function () {
    sonido = input.soundLevel()
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    if (sonido > 100) {
        maqueen.motorStop(maqueen.Motors.All)
        basic.pause(2000)
    }
})
