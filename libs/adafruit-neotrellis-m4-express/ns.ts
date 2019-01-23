
//% color="#d65cd6"
namespace input {
}

//% color="#F55D3E"
namespace music {

}

//% color="#00b295"
namespace control {

}

//% color="#EF2D56" advanced=false
namespace pins {

}

//% color="#006E90"
namespace serial {

}

//% color="#40bf4a"
namespace loops {

}

namespace light {
    //% whenUsed
    export const pixels = light.createStrip(defaultPin(), 32);

    /**
     * Get the 32 NeoPixel strip
     */
    //% help=light/onboard-strip
    //% blockId="neopixel_onboard_strip" block="onboard strip"
    //% weight=101 blockGap=8
    //% blockSetVariable=strip
    export function onboardStrip(): NeoPixelStrip {
        return pixels;
    }
}