let countelement = document.querySelector("#count");
let minusBtn = document.querySelector("#minus-btn");
let count = 0;

function updateDisplay() {
    // 1. Aapka appendChild aur createTextNode logic
    countelement.textContent = "";
    countelement.appendChild(document.createTextNode(count));

    // 2. Bouncing animation ko har click par re-trigger karna
    countelement.classList.remove("bounce");
    void countelement.offsetWidth; // Browser ko animation reset karne ka signal
    countelement.classList.add("bounce");

    // 3. Color feedback aur Minus button disable state
    if (count > 0) {
        countelement.classList.add("active-count");
        minusBtn.disabled = false;
    } else {
        countelement.classList.remove("active-count");
        minusBtn.disabled = true;
    }
}

function addbtn() {
    count++;
    updateDisplay();
}

function lessbtn() {
    if (count > 0) {
        count--;
        updateDisplay();
    }
}

function reset() {
    if (count !== 0) {
        count = 0;
        updateDisplay();
    }
}
