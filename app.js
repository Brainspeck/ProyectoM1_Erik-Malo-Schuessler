window.onload = function () {
    const paletteSize = document.getElementById("palette-size");
    const generateBtn = document.getElementById("generate-btn");
    const paletteContainer = document.getElementById("palette-container");
    const colorFormat = document.getElementById("color-format");

    generateBtn.addEventListener("click", () => {
        let selectedSize = Number(paletteSize.value);
        let selectedFormat = colorFormat.value;
        paletteContainer.innerHTML = "";

        //te selected format is HSL
        if (selectedFormat === "hsl") {
            for (let i = 0; i < selectedSize; i++) {
                const color = hslGenerator();

                const card = document.createElement("div");
                card.classList.add("card");
                paletteContainer.appendChild(card);
                card.style.backgroundColor = color.hsl;

                const codeContainer = document.createElement("div");
                codeContainer.classList.add("code-container");
                card.appendChild(codeContainer);

                const code = document.createElement("p");
                code.innerText = hslToHex(color.hue, color.saturation, color.lightness);
                code.classList.add("hex-code");
                codeContainer.appendChild(code);
            }
        }

        // the selected format is HEX
        else {
            for (let i = 0; i < selectedSize; i++) {
                const color = hexGenerator(hexValues);
                const card = document.createElement("div");
                card.classList.add("card");
                paletteContainer.appendChild(card);
                card.style.backgroundColor = color;

                const codeContainer = document.createElement("div");
                const codeValue = color;
                codeContainer.classList.add("code-container");
                card.appendChild(codeContainer);

                const code = document.createElement("p");
                code.innerText = codeValue;
                code.classList.add("hex-code");
                codeContainer.appendChild(code);
            }
        }
    });
};

//Random number  generator for HSL values
const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Random HSL generator
const hslGenerator = () => {
    const hue = getRandomNumber(0, 360);
    const saturation = getRandomNumber(0, 100);
    const lightness = getRandomNumber(0, 100);

    let color = {
        hue: hue,
        saturation: saturation,
        lightness: lightness,
        hsl: `hsl(${hue} ${saturation}% ${lightness}%)`,
    };
    return color;
};

// Random HEX generator
const hexValues = "0123456789ABCDEF";
const hexGenerator = (values) => {
    let hex = "#";
    for (let i = 0; i < 6; i++) {
        hex += values[Math.floor(Math.random() * values.length)];
    }
    return hex;
};

const hslToRgb = (hue, saturation, lightness) => {
    const s = saturation / 100;
    const l = lightness / 100;

    const c = (1 - Math.abs(2 * l - 1)) * s;
    const h = hue / 60;
    const x = c * (1 - Math.abs((h % 2) - 1));

    let r = 0;
    let g = 0;
    let b = 0;

    if (h >= 0 && h < 1) {
        r = c;
        g = x;
        b = 0;
    } else if (h >= 1 && h < 2) {
        r = x;
        g = c;
        b = 0;
    } else if (h >= 2 && h < 3) {
        r = 0;
        g = c;
        b = x;
    } else if (h >= 3 && h < 4) {
        r = 0;
        g = x;
        b = c;
    } else if (h >= 4 && h < 5) {
        r = x;
        g = 0;
        b = c;
    } else if (h >= 5 && h <= 6) {
        r = c;
        g = 0;
        b = x;
    }

    const m = l - c / 2;

    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return { r, g, b };
};

const rgbToHex = (r, g, b) => {
    const red = r.toString(16).padStart(2, "0");
    const green = g.toString(16).padStart(2, "0");
    const blue = b.toString(16).padStart(2, "0");

    return `#${red}${green}${blue}`.toUpperCase();
};

const hslToHex = (hue, saturation, lightness) => {
    const rgb = hslToRgb(hue, saturation, lightness);

    return rgbToHex(rgb.r, rgb.g, rgb.b);
};
