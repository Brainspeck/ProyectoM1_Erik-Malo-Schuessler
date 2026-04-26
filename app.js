window.onload = function () {
    
    const paletteSize = document.getElementById("palette-size");
    const generateBtn = document.getElementById("generate-btn");
    const paletteContainer = document.getElementById("palette-container");
    
    //Random HSL generator
    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + 1;
    }
    const hue = getRandomNumber(0, 360);
    const saturation = getRandomNumber(0, 100);
    const lightness = getRandomNumber(0, 100);
    let hslColor = `hsl(${hue} ${saturation}% ${lightness}%)`;
    
    // Random HEX generator
    const hexValues = "0123456789ABCDEF";
    const getHexColor = (values) => {
        let hex = "#";
        for (let i = 0; i < 6; i++) {
            hex += values[Math.floor(Math.random() * values.length)]
        }
        return hex;
    };
}
