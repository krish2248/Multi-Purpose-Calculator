const calculators = {
  bmi: `
    <h2>BMI Calculator</h2>
    <p>The BMI Calculator helps you determine your Body Mass Index (BMI), which is a measure of body fat based on your weight and height. It uses the formula: <strong>BMI = weight (kg) / [height (m)]²</strong>.</p>
    <input type="number" id="bmi-weight" placeholder="Weight (kg)" />
    <input type="number" id="bmi-height" placeholder="Height (cm)" />
    <button onclick="calculateBMI()">Calculate BMI</button>
    <div class="result" id="bmi-result"></div>
  `,
  "normal-math": `
    <h2>Normal Calculator</h2>
    <p>The Normal Calculator allows you to perform basic arithmetic operations like addition, subtraction, multiplication, and division. It also includes advanced functions like square root, percentage, and memory operations.</p>
    <div id="normal-calculator">
      <input type="text" id="calc-display" readonly />
      <div class="keypad">
        <button onclick="appendToDisplay('7')">7</button>
        <button onclick="appendToDisplay('8')">8</button>
        <button onclick="appendToDisplay('9')">9</button>
        <button onclick="appendToDisplay('/')">÷</button>
        <button onclick="appendToDisplay('4')">4</button>
        <button onclick="appendToDisplay('5')">5</button>
        <button onclick="appendToDisplay('6')">6</button>
        <button onclick="appendToDisplay('*')">×</button>
        <button onclick="appendToDisplay('1')">1</button>
        <button onclick="appendToDisplay('2')">2</button>
        <button onclick="appendToDisplay('3')">3</button>
        <button onclick="appendToDisplay('-')">−</button>
        <button onclick="appendToDisplay('0')">0</button>
        <button onclick="appendToDisplay('.')">.</button>
        <button onclick="calculateResult()">=</button>
        <button onclick="appendToDisplay('+')">+</button>
        <button onclick="clearDisplay()">C</button>
        <button onclick="calculateSquareRoot()">√</button>
        <button onclick="calculatePercentage()">%</button>
        <button onclick="memoryClear()">MC</button>
        <button onclick="memoryRecall()">MR</button>
        <button onclick="memoryAdd()">M+</button>
        <button onclick="memorySubtract()">M-</button>
      </div>
    </div>
  `,
  emi: `
    <h2>EMI Calculator</h2>
    <p>The EMI Calculator helps you calculate the Equated Monthly Installment (EMI) for a loan. It uses the formula: <strong>EMI = [P × r × (1 + r)^n] / [(1 + r)^n - 1]</strong>, where P is the loan amount, r is the monthly interest rate, and n is the number of months.</p>
    <input type="number" id="loan-amount" placeholder="Loan Amount" />
    <input type="number" id="interest-rate" placeholder="Annual Interest Rate (%)" />
    <input type="number" id="loan-tenure" placeholder="Tenure (years)" />
    <button onclick="calculateEMI()">Calculate EMI</button>
    <div class="result" id="emi-result"></div>
  `,
  "car-loan": `
    <h2>Car Loan Calculator</h2>
    <input type="number" id="car-price" placeholder="Car Price" />
    <input type="number" id="down-payment" placeholder="Down Payment" />
    <input type="number" id="loan-rate" placeholder="Interest Rate (%)" />
    <input type="number" id="car-tenure" placeholder="Loan Term (years)" />
    <button onclick="calculateCarLoan()">Calculate Car Loan EMI</button>
    <div class="result" id="car-loan-result"></div>
  `,
  "tire-deviation": `
    <h2>Car Tire Deviation</h2>
    <input type="number" id="original-width" placeholder="Original Width (mm)" />
    <input type="number" id="original-aspect" placeholder="Original Aspect Ratio (%)" />
    <input type="number" id="original-diameter" placeholder="Original Rim Diameter (inches)" />
    <input type="number" id="new-width" placeholder="New Width (mm)" />
    <input type="number" id="new-aspect" placeholder="New Aspect Ratio (%)" />
    <input type="number" id="new-diameter" placeholder="New Rim Diameter (inches)" />
    <button onclick="calculateTireDeviation()">Calculate Deviation</button>
    <div class="result" id="tire-result"></div>
  `,
  eta: `
    <h2>ETA Calculator</h2>
    <input type="number" id="distance" placeholder="Distance (km)" />
    <input type="number" id="speed" placeholder="Speed (km/h)" />
    <button onclick="calculateETA()">Calculate ETA</button>
    <div class="result" id="eta-result"></div>
  `,
  "height-weight": `
    <h2>Height to Ideal Weight Ratio</h2>
    <input type="number" id="hw-height" placeholder="Height (cm)" />
    <button onclick="calculateHeightWeight()">Calculate Ideal Weight</button>
    <div class="result" id="hw-result"></div>
  `,
  sip: `
    <h2>SIP Calculator</h2>
    <input type="number" id="sip-amount" placeholder="Monthly Investment (₹)" />
    <input type="number" id="sip-rate" placeholder="Annual Interest Rate (%)" />
    <input type="number" id="sip-tenure" placeholder="Tenure (years)" />
    <button onclick="calculateSIP()">Calculate SIP</button>
    <div class="result" id="sip-result"></div>
  `,
  fd: `
    <h2>FD Calculator</h2>
    <input type="number" id="fd-principal" placeholder="Principal Amount (₹)" />
    <input type="number" id="fd-rate" placeholder="Annual Interest Rate (%)" />
    <input type="number" id="fd-tenure" placeholder="Tenure (years)" />
    <button onclick="calculateFD()">Calculate FD</button>
    <div class="result" id="fd-result"></div>
  `,
  lumpsum: `
    <h2>Lumpsum Calculator</h2>
    <input type="number" id="lumpsum-amount" placeholder="Investment Amount (₹)" />
    <input type="number" id="lumpsum-rate" placeholder="Annual Interest Rate (%)" />
    <input type="number" id="lumpsum-tenure" placeholder="Tenure (years)" />
    <button onclick="calculateLumpsum()">Calculate Lumpsum</button>
    <div class="result" id="lumpsum-result"></div>
  `,
  "fuel-cost": `
    <h2>Car Fuel Cost Calculator</h2>
    <input type="number" id="fuel-distance" placeholder="Distance (km)" />
    <input type="number" id="fuel-efficiency" placeholder="Fuel Efficiency (km/l)" />
    <input type="number" id="fuel-price" placeholder="Fuel Price (₹/l)" />
    <button onclick="calculateFuelCost()">Calculate Fuel Cost</button>
    <div class="result" id="fuel-cost-result"></div>
  `
};

// Handle calculator selection
document.getElementById("calculator-select").addEventListener("change", function () {
  const selected = this.value;
  document.getElementById("calculator-container").innerHTML = calculators[selected] || "<p>Select a calculator to begin.</p>";
});

// Default to BMI Calculator
document.getElementById("calculator-container").innerHTML = calculators["bmi"];

// Dark/Light Mode Toggle
document.getElementById("theme-toggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    document.body.style.backgroundColor = "#121212";
    document.body.style.color = "#f1f1f1";
  } else {
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#000000";
  }
});

// Light Mode Toggle
document.getElementById('light-mode-toggle').addEventListener('click', function () {
  document.body.classList.toggle('light-mode');
  document.querySelector('.header').classList.toggle('light-mode');
  document.querySelector('.footer').classList.toggle('light-mode');
  document.querySelector('.container').classList.toggle('light-mode');

  // Update button text
  this.textContent = document.body.classList.contains('light-mode') ? 'Dark Mode' : 'Light Mode';
});

// Memory storage for calculator
let memory = 0;

// Normal Calculator Functions
function appendToDisplay(value) {
  const display = document.getElementById("calc-display");
  display.value += value;
}

function calculateResult() {
  const display = document.getElementById("calc-display");
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function clearDisplay() {
  document.getElementById("calc-display").value = "";
}

// Calculate square root
function calculateSquareRoot() {
  const display = document.getElementById("calc-display");
  try {
    display.value = Math.sqrt(eval(display.value)).toFixed(2);
  } catch {
    display.value = "Error";
  }
}

// Calculate percentage
function calculatePercentage() {
  const display = document.getElementById("calc-display");
  try {
    display.value = (eval(display.value) / 100).toFixed(2);
  } catch {
    display.value = "Error";
  }
}

// Memory functions
function memoryClear() {
  memory = 0;
  alert("Memory cleared!");
}

function memoryRecall() {
  const display = document.getElementById("calc-display");
  display.value += memory;
}

function memoryAdd() {
  const display = document.getElementById("calc-display");
  try {
    memory += eval(display.value);
    alert(`Added to memory: ${memory}`);
  } catch {
    alert("Invalid input for memory addition.");
  }
}

function memorySubtract() {
  const display = document.getElementById("calc-display");
  try {
    memory -= eval(display.value);
    alert(`Subtracted from memory: ${memory}`);
  } catch {
    alert("Invalid input for memory subtraction.");
  }
}

function calculateBMI() {
  const weight = parseFloat(document.getElementById("bmi-weight").value);
  const height = parseFloat(document.getElementById("bmi-height").value) / 100;
  if (weight > 0 && height > 0) {
    const bmi = (weight / (height * height)).toFixed(2);
    document.getElementById("bmi-result").innerText = `Your BMI is ${bmi}`;
  } else {
    document.getElementById("bmi-result").innerText = "Please enter valid values.";
  }
}

function calculateEMI() {
  const P = parseFloat(document.getElementById("loan-amount").value);
  const annualRate = parseFloat(document.getElementById("interest-rate").value);
  const tenure = parseInt(document.getElementById("loan-tenure").value);
  if (P > 0 && annualRate > 0 && tenure > 0) {
    const r = annualRate / 12 / 100;
    const n = tenure * 12;
    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    document.getElementById("emi-result").innerText = `Monthly EMI: ₹${emi.toFixed(2)}`;
  } else {
    document.getElementById("emi-result").innerText = "Please enter valid inputs.";
  }
}

function calculateCarLoan() {
  const price = parseFloat(document.getElementById("car-price").value);
  const down = parseFloat(document.getElementById("down-payment").value);
  const rate = parseFloat(document.getElementById("loan-rate").value);
  const term = parseInt(document.getElementById("car-tenure").value);
  const loan = price - down;
  const r = rate / 12 / 100;
  const n = term * 12;
  const emi = (loan * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  document.getElementById("car-loan-result").innerText = `Monthly EMI: ₹${emi.toFixed(2)}`;
}

function calculateTireDeviation() {
  const getDiameter = (w, a, d) => 2 * (w * (a / 100) / 25.4) + d;
  const ow = parseFloat(document.getElementById("original-width").value);
  const oa = parseFloat(document.getElementById("original-aspect").value);
  const od = parseFloat(document.getElementById("original-diameter").value);
  const nw = parseFloat(document.getElementById("new-width").value);
  const na = parseFloat(document.getElementById("new-aspect").value);
  const nd = parseFloat(document.getElementById("new-diameter").value);
  const oTotal = getDiameter(ow, oa, od);
  const nTotal = getDiameter(nw, na, nd);
  const diff = ((nTotal - oTotal) / oTotal) * 100;
  document.getElementById("tire-result").innerText = `Diameter Change: ${diff.toFixed(2)}%`;
}

function calculateETA() {
  const distance = parseFloat(document.getElementById("distance").value);
  const speed = parseFloat(document.getElementById("speed").value);
  if (distance > 0 && speed > 0) {
    const hours = distance / speed;
    const h = Math.floor(hours);
    const m = Math.round((hours - h) * 60);
    document.getElementById("eta-result").innerText = `Estimated Time: ${h} hours ${m} minutes`;
  } else {
    document.getElementById("eta-result").innerText = "Enter valid distance and speed.";
  }
}

function calculateScientific() {
  try {
    const input = document.getElementById("sci-expression").value;
    const result = Function('"use strict";return (' +
      input
        .replace(/sin\(/g, 'Math.sin(Math.PI/180*')
        .replace(/cos\(/g, 'Math.cos(Math.PI/180*')
        .replace(/tan\(/g, 'Math.tan(Math.PI/180*')
        .replace(/log\(/g, 'Math.log10(')
        .replace(/ln\(/g, 'Math.log(') + ')')();
    document.getElementById("sci-result").innerText = `Result: ${result.toFixed(6)}`;
  } catch {
    document.getElementById("sci-result").innerText = "Invalid input.";
  }
}

function calculateHeightWeight() {
  const height = parseFloat(document.getElementById("hw-height").value);
  if (height > 0) {
    const idealWeight = height - 100 - ((height - 100) * 0.1); // Devine formula
    document.getElementById("hw-result").innerText = `Ideal Body Weight: ${idealWeight.toFixed(2)} kg`;
  } else {
    document.getElementById("hw-result").innerText = "Enter valid height.";
  }
}

function calculateCalorieDeficit() {
  const intake = parseFloat(document.getElementById("calories-intake").value);
  const burned = parseFloat(document.getElementById("calories-burned").value);
  if (intake > 0 && burned > 0) {
    const deficit = intake - burned;
    document.getElementById("calorie-deficit-result").innerText = `Calorie Deficit: ${deficit} kcal`;
  } else {
    document.getElementById("calorie-deficit-result").innerText = "Enter valid values.";
  }
}

function calculateSIP() {
  const P = parseFloat(document.getElementById("sip-amount").value);
  const r = parseFloat(document.getElementById("sip-rate").value) / 12 / 100;
  const n = parseInt(document.getElementById("sip-tenure").value) * 12;
  if (P > 0 && r > 0 && n > 0) {
    const amount = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    document.getElementById("sip-result").innerText = `Maturity Amount: ₹${amount.toFixed(2)}`;
  } else {
    document.getElementById("sip-result").innerText = "Enter valid inputs.";
  }
}

function calculateFD() {
  const principal = parseFloat(document.getElementById("fd-principal").value);
  const rate = parseFloat(document.getElementById("fd-rate").value) / 100;
  const tenure = parseInt(document.getElementById("fd-tenure").value);
  if (principal > 0 && rate > 0 && tenure > 0) {
    const maturity = principal * Math.pow(1 + rate, tenure);
    document.getElementById("fd-result").innerText = `Maturity Amount: ₹${maturity.toFixed(2)}`;
  } else {
    document.getElementById("fd-result").innerText = "Enter valid inputs.";
  }
}

function calculateLumpsum() {
  const amount = parseFloat(document.getElementById("lumpsum-amount").value);
  const rate = parseFloat(document.getElementById("lumpsum-rate").value) / 100;
  const tenure = parseInt(document.getElementById("lumpsum-tenure").value);
  if (amount > 0 && rate > 0 && tenure > 0) {
    const maturity = amount * Math.pow(1 + rate, tenure);
    document.getElementById("lumpsum-result").innerText = `Maturity Amount: ₹${maturity.toFixed(2)}`;
  } else {
    document.getElementById("lumpsum-result").innerText = "Enter valid inputs.";
  }
}

function calculateFuelCost() {
  const distance = parseFloat(document.getElementById("fuel-distance").value);
  const efficiency = parseFloat(document.getElementById("fuel-efficiency").value);
  const price = parseFloat(document.getElementById("fuel-price").value);
  if (distance > 0 && efficiency > 0 && price > 0) {
    const cost = (distance / efficiency) * price;
    document.getElementById("fuel-cost-result").innerText = `Fuel Cost: ₹${cost.toFixed(2)}`;
  } else {
    document.getElementById("fuel-cost-result").innerText = "Enter valid inputs.";
  }
}
