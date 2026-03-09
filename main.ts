let genap = 0
let ganjil = 1
basic.forever(function () {
    for (let index = 0; index < 2; index++) {
        while (genap <= 10) {
            basic.showNumber(genap)
            basic.pause(500)
            genap += 2
        }
        genap = 0
    }
    for (let index = 0; index < 2; index++) {
        while (ganjil <= 10) {
            basic.showNumber(ganjil)
            basic.pause(500)
            ganjil += 2
        }
        ganjil = 1
    }
    basic.clearScreen()
    basic.showString("Vanessa X2/35")
})
