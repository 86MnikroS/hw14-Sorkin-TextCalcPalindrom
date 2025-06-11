const text = document.getElementById("text");
const text1 = document.getElementById("text1");

document.getElementById("btn1").onclick = () => {
    text.style.fontSize = "15px";
};

document.getElementById("btn2").onclick = () => {
    text.style.fontSize = "25px";
};

document.getElementById("btn3").onclick = () => {
    text.style.fontSize = "35px";
};
document.getElementById("btn4").onclick = () => {
    text.style.color = "red";
};

document.getElementById("btn5").onclick = () => {
    text.style.color = "green";
};

document.getElementById("btn6").onclick = () => {
    text.style.color = "blue";
};

document.getElementById("btn7").addEventListener("click", function () {
    const sizeInput = document.querySelector(".text-size-in").value.trim();
    if (sizeInput) {
        text1.style.fontSize = sizeInput + "px";
    }
});

document.getElementById("btn8").addEventListener("click", function () {
    const colorInput = document.querySelector(".text-color-in").value.trim();
    if (colorInput) {
        text1.style.color = colorInput;
    }
});

document.getElementById("clearText").addEventListener("click", () => {
    document.querySelector(".text-size-in").value = "";
    document.querySelector(".text-color-in").value = "";
});

document.querySelector(".row:nth-child(1) button").addEventListener("click", () => {
    const a = parseFloat(document.querySelector(".row:nth-child(1) .num1").value);
    const b = parseFloat(document.querySelector(".row:nth-child(1) .num2").value);
    document.querySelector(".row:nth-child(1) .result").textContent = a + b;
});

document.querySelector(".row:nth-child(2) button").addEventListener("click", () => {
    const a = parseFloat(document.querySelector(".row:nth-child(2) .num1").value);
    const b = parseFloat(document.querySelector(".row:nth-child(2) .num2").value);
    document.querySelector(".row:nth-child(2) .result").textContent = a - b;
});

document.querySelector(".row:nth-child(3) button").addEventListener("click", () => {
    const a = parseFloat(document.querySelector(".row:nth-child(3) .num1").value);
    const b = parseFloat(document.querySelector(".row:nth-child(3) .num2").value);
    document.querySelector(".row:nth-child(3) .result").textContent = a * b;
});

document.querySelector(".row:nth-child(4) button").addEventListener("click", () => {
    const a = parseFloat(document.querySelector(".row:nth-child(4) .num1").value);
    const b = parseFloat(document.querySelector(".row:nth-child(4) .num2").value);
    document.querySelector(".row:nth-child(4) .result").textContent = b !== 0 ? (a / b).toFixed(2) : '∞';
});

document.getElementById("clearAll").addEventListener("click", () => {
    document.querySelectorAll(".calculator input").forEach(input => input.value = "");
    document.querySelectorAll(".calculator .result").forEach(res => res.textContent = "0");
});
document.getElementById("checkPalindrome").addEventListener("click", function () {
    const input = document.getElementById("wordInput").value;
    const word = input.toLowerCase();
    let reversed = "";

    for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i];
    }
    const result = document.getElementById("palindromeResult");

    if (word === reversed && word !== "") {
        result.textContent = "✅ It's a palindrome!";
    } else {
        result.textContent = "❌ Not a palindrome.";
    }
});


