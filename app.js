window.onload = function () {
    
    const paletteSize = document.getElementById("palette-size"); 
    const generateBtn = document.getElementById("generate-btn");
    const paletteContainer = document.getElementById("palette-container");
    const colorFormat = document.getElementById("color-format");

    

    generateBtn.addEventListener("click", () => {
        let selectedSize = Number(paletteSize.value);
        let selectedFormat = colorFormat.value;
        paletteContainer.innerHTML = "";

        if (selectedFormat === 'hsl') {
            for (let i = 0; i < selectedSize; i++) {
                const color = hslGenerator();
                const card = document.createElement("div");
                card.classList.add("card")
                paletteContainer.appendChild(card)
                card.style.backgroundColor = color;
            }
        }

        else {
            for (let i = 0; i < selectedSize; i++) {
                const color = hexGenerator(hexValues);
                const card = document.createElement("div");
                card.classList.add("card")
                paletteContainer.appendChild(card)
                card.style.backgroundColor = color;

                const codeContainer = document.createElement("div");
                const codeValue = color;
                codeContainer.classList.add("code-container");
                card.appendChild(codeContainer);

                const code = document.createElement("p");
                code.innerText = codeValue;
                code.classList.add("hex-code")
                codeContainer.appendChild(code);
            }
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