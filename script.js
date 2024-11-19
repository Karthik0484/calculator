// script.js

// Basic Arithmetic
function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;
  
    if (isNaN(num1) || isNaN(num2)) {
      result = "Please enter valid numbers.";
    } else {
      switch (operation) {
        case 'add':
          result = num1 + num2;
          break;
        case 'subtract':
          result = num1 - num2;
          break;
        case 'multiply':
          result = num1 * num2;
          break;
        case 'divide':
          result = num1 / num2;
          break;
      }
    }
    document.getElementById('basic-result').innerText = `Result: ${result}`;
  }
  
  // Loan Calculator
  function calculateLoan() {
    const amount = parseFloat(document.getElementById('loan-amount').value);
    const interest = parseFloat(document.getElementById('loan-interest').value) / 100 / 12;
    const years = parseFloat(document.getElementById('loan-years').value) * 12;
  
    if (isNaN(amount) || isNaN(interest) || isNaN(years)) {
      document.getElementById('loan-result').innerText = "Please enter valid inputs.";
      return;
    }
  
    const monthlyPayment = (amount * interest) / (1 - Math.pow(1 + interest, -years));
    document.getElementById('loan-result').innerText = `Monthly Payment: ${monthlyPayment.toFixed(2)}`;
  }
  
  // Savings Calculator
  function calculateSavings() {
    const principal = parseFloat(document.getElementById('savings-amount').value);
    const rate = parseFloat(document.getElementById('savings-rate').value) / 100;
    const years = parseFloat(document.getElementById('savings-years').value);
  
    if (isNaN(principal) || isNaN(rate) || isNaN(years)) {
      document.getElementById('savings-result').innerText = "Please enter valid inputs.";
      return;
    }
  
    const futureValue = principal * Math.pow(1 + rate, years);
    document.getElementById('savings-result').innerText = `Future Value: ${futureValue.toFixed(2)}`;
  }
  
// script.js

// Function to fetch and convert USD to INR
async function convertCurrency() {
    const usd = parseFloat(document.getElementById('currency-amount').value);
  
    if (isNaN(usd)) {
      document.getElementById('currency-result').innerText = "Please enter a valid amount.";
      return;
    }
  
    try {
      // Fetch exchange rate from a currency API
      const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
      const data = await response.json();
  
      // Extract the INR exchange rate
      const conversionRate = data.rates.INR;
      const inr = usd * conversionRate;
  
      // Display the converted amount
      document.getElementById('currency-result').innerText = `Converted Amount: ₹${inr.toFixed(2)}`;
    } catch (error) {
      document.getElementById('currency-result').innerText = "Error fetching exchange rates. Try again later.";
      console.error("Currency conversion error:", error);
    }
  }