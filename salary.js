// Function to calculate PAYE (income tax)
function calculatePAYE(grossSalary) {
    let tax = 0;

// Tax 35% on income above 800,000
if (grossSalary > 800000) {
    tax += (grossSalary - 800000) * 0.35;
    grossSalary = 800000;
    }
// Tax 32.5% on income between 500,001 and 800,000
if (grossSalary > 500000) {
    tax += (grossSalary - 500000) * 0.325;
    grossSalary = 500000;
    }
    // Tax 30% on income between 32,334 and 500,000
if (grossSalary > 32333) {
    tax += (grossSalary - 32333) * 0.30;
     grossSalary = 32333;
    }
// Tax 25% on income between 24,001 and 32,333
if (grossSalary > 24000) {
    tax += (grossSalary - 24000) * 0.25;
    grossSalary = 24000;
    }
// Tax 10% on income up to 24,000
    tax += grossSalary * 0.10;
// Subtract personal relief (KSh 2,400)
    return (tax - 2400);
}

// Function to calculate NSSF (6% of basic salary, maxed at KSh 8,000)
function calculateNSSF(basicSalary) {
const maxNSSF = 8000;
const pensionable = (basicSalary,maxNSSF);
    return pensionable * 0.06; 
}
// Function to calculate SHIF (2.75% of gross salary)
  function calculateSHIF(grossSalary) {
    return grossSalary * 0.0275;
}
// Main function to calculate net salary
function calculateNetSalary(basicSalary,benefits) {

// Step 1: Calculate gross salary
 const grossSalary=basicSalary+benefits;

// Step 2: Calculate deductions
  const paye = calculatePAYE(grossSalary);
  const shif = calculateSHIF(grossSalary);
 const nssf = calculateNSSF(basicSalary);

// Step 3: Subtract deductions to get net salary
 const netSalary = grossSalary - (paye + shif + nssf);

const basicSalary = 70000;
const benefits = 10000;

const result = calculateNetSalary(basicSalary,benefits);

    return {
        grossSalary,
        netSalary
    };
}

calculateNetSalary(basicSalary,benefits);