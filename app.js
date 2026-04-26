window.onload = function () {
    
    const paletteSize = document.getElementById("palette-size"); 
    const generateBtn = document.getElementById("generate-btn");
    const paletteContainer = document.getElementById("palette-container");
    const colorFormat = document.getElementById("color-format");

    

    generateBtn.addEventListener("click", () => {
        let selectedSize = Number(paletteSize.value);
        let selectedFormat = colorFormat.value;
        paletteContainer.innerHTML = "";

        for (let i = 0; i < selectedSize; i++) {
            const color = hslGenerator();
            const card = document.createElement("div");
            card.classList.add("card")
            paletteContainer.appendChild(card)
            card.style.backgroundColor = color;
        }
    });
    
}


//Random number  generator for HSL values
const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Random HSL generator
const hslGenerator = () => {
    const hue = getRandomNumber(0, 360);
    const saturation = getRandomNumber(0, 100);
    const lightness = getRandomNumber(0, 100);
    return `hsl(${hue} ${saturation}% ${lightness}%)`;
};


// Random HEX generator
const hexValues = "0123456789ABCDEF";
const hexGenerator = (values) => {
    let hex = "#";
    for (let i = 0; i < 6; i++) {
        hex += values[Math.floor(Math.random() * values.length)]
    }
    return hex;
};