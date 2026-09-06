/**
 * Interactive Temperature Converter
 * OASIS INFOBYTE SIP — Web Development & Designing
 * Level 1 - Task 3: Temperature Converter Website
 * Pure Vanilla JavaScript (Zero external dependencies)
 */

document.addEventListener('DOMContentLoaded', function () {
  // DOM Elements
  var tempInput = document.getElementById('tempInput');
  var unitSelect = document.getElementById('unitSelect');
  var convertBtn = document.getElementById('convertBtn');
  var resetBtn = document.getElementById('resetBtn');
  var errorBox = document.getElementById('errorBox');
  var resultsContainer = document.getElementById('resultsContainer');
  var resultBox1 = document.getElementById('resultBox1');
  var resultBox2 = document.getElementById('resultBox2');
  var unitLabel1 = document.getElementById('unitLabel1');
  var unitLabel2 = document.getElementById('unitLabel2');
  var valueDisplay1 = document.getElementById('valueDisplay1');
  var valueDisplay2 = document.getElementById('valueDisplay2');
  var formulaNote1 = document.getElementById('formulaNote1');
  var formulaNote2 = document.getElementById('formulaNote2');

  // Absolute zero constants in respective units
  var ABSOLUTE_ZERO = {
    celsius: -273.15,
    fahrenheit: -459.67,
    kelvin: 0
  };

  /**
   * Clears error states and hides error box
   */
  function clearError() {
    errorBox.textContent = '';
    errorBox.classList.remove('active');
    tempInput.classList.remove('input-error-state');
  }

  /**
   * Displays a user-friendly error message
   * @param {string} message 
   */
  function showError(message) {
    errorBox.textContent = message;
    errorBox.classList.add('active');
    tempInput.classList.add('input-error-state');
    resultsContainer.classList.remove('active');
    tempInput.focus();
  }

  /**
   * Formats numbers to clean decimal representation
   * @param {number} num 
   * @returns {string}
   */
  function formatNumber(num) {
    // If it's effectively an integer, return without trailing zeroes, else round to 2 decimals
    var rounded = Math.round(num * 100) / 100;
    return rounded.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
  }

  /**
   * Validates and performs the temperature conversion
   */
  function performConversion() {
    clearError();

    var rawInput = tempInput.value.trim();
    var selectedUnit = unitSelect.value;

    // 1. Check for empty input
    if (rawInput === '') {
      showError('Please enter a temperature value before clicking Convert.');
      return;
    }

    // 2. Check for non-numeric input
    var numericValue = Number(rawInput);
    if (isNaN(numericValue) || isNaN(parseFloat(rawInput))) {
      showError('Invalid input: Please enter a valid numerical temperature.');
      return;
    }

    // 3. Absolute Zero Validation
    if (selectedUnit === 'celsius' && numericValue < ABSOLUTE_ZERO.celsius) {
      showError('Physical Limit Violation: Temperature cannot be below Absolute Zero (-273.15 °C).');
      return;
    }
    if (selectedUnit === 'fahrenheit' && numericValue < ABSOLUTE_ZERO.fahrenheit) {
      showError('Physical Limit Violation: Temperature cannot be below Absolute Zero (-459.67 °F).');
      return;
    }
    if (selectedUnit === 'kelvin' && numericValue < ABSOLUTE_ZERO.kelvin) {
      showError('Physical Limit Violation: Kelvin temperature cannot be negative (Absolute Zero is 0 K).');
      return;
    }

    // 4. Perform Accurate Calculations
    var conv1 = { unit: '', value: 0, formula: '' };
    var conv2 = { unit: '', value: 0, formula: '' };

    if (selectedUnit === 'celsius') {
      // Convert to Fahrenheit: (C * 9/5) + 32
      var f = (numericValue * 9 / 5) + 32;
      // Convert to Kelvin: C + 273.15
      var k = numericValue + 273.15;

      conv1 = {
        unit: 'Fahrenheit (°F)',
        value: f,
        formula: '(' + numericValue + ' °C × 9/5) + 32'
      };
      conv2 = {
        unit: 'Kelvin (K)',
        value: k,
        formula: numericValue + ' °C + 273.15'
      };
    } else if (selectedUnit === 'fahrenheit') {
      // Convert to Celsius: (F - 32) * 5/9
      var c = (numericValue - 32) * 5 / 9;
      // Convert to Kelvin: (F - 32) * 5/9 + 273.15
      var kFromF = ((numericValue - 32) * 5 / 9) + 273.15;

      conv1 = {
        unit: 'Celsius (°C)',
        value: c,
        formula: '(' + numericValue + ' °F − 32) × 5/9'
      };
      conv2 = {
        unit: 'Kelvin (K)',
        value: kFromF,
        formula: '((' + numericValue + ' °F − 32) × 5/9) + 273.15'
      };
    } else if (selectedUnit === 'kelvin') {
      // Convert to Celsius: K - 273.15
      var cFromK = numericValue - 273.15;
      // Convert to Fahrenheit: (K - 273.15) * 9/5 + 32
      var fFromK = ((numericValue - 273.15) * 9 / 5) + 32;

      conv1 = {
        unit: 'Celsius (°C)',
        value: cFromK,
        formula: numericValue + ' K − 273.15'
      };
      conv2 = {
        unit: 'Fahrenheit (°F)',
        value: fFromK,
        formula: '((' + numericValue + ' K − 273.15) × 9/5) + 32'
      };
    }

    // 5. Render Results with Unit Labels
    unitLabel1.textContent = conv1.unit;
    valueDisplay1.textContent = formatNumber(conv1.value);
    formulaNote1.textContent = conv1.formula;

    unitLabel2.textContent = conv2.unit;
    valueDisplay2.textContent = formatNumber(conv2.value);
    formulaNote2.textContent = conv2.formula;

    resultsContainer.classList.add('active');
  }

  /**
   * Resets converter to default initial state
   */
  function resetConverter() {
    tempInput.value = '';
    unitSelect.value = 'celsius';
    clearError();
    resultsContainer.classList.remove('active');
    tempInput.focus();
  }

  // Event Listeners
  convertBtn.addEventListener('click', performConversion);
  resetBtn.addEventListener('click', resetConverter);

  // Convert on Enter key press
  tempInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      performConversion();
    }
  });

  // Clear errors dynamically on user input
  tempInput.addEventListener('input', function () {
    if (errorBox.classList.contains('active')) {
      clearError();
    }
  });

  // Focus input automatically on load
  tempInput.focus();
});
