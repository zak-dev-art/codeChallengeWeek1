// Function to calculate Gross Salary
function getGrossSalary(basic, benefits){
    return basic + benefits;
}
// Function to calculate NSSF(6% of basic salary, max pensionable = 72,000)
function calculateNSSF(basic) {
    let maxPensionable = 72000;
    let pensionablePay = basic > maxPensionable ? maxPensionable : basic;
    return pensionablePay * 0.06;
}
// Function to calculate SHIF(2.75% of gross salary)
function calculateSHIF(gross) {
    return gross * 0.0275;
}
// Function to calculate Housing Levy(1.5% of gross salary)
function calculateHousingLevy(gross) {
    return gross * 0.015;
}
// Function to calculate PAYE based on taxable income
function calculatePAYE(taxable) {
let paye = 0;

if (taxable <= 24000) {
    paye = taxable * 0.10;
} else if (taxable <= 32333) {
    paye = (24000 * 0.10) + (taxable - 24000) * 0.25;
} else {
    paye = (24000 * 0.10) + (8333 * 0.25) + (taxable - 32333) * 0.30;
}

// Apply personal relief of Ksh 2400
paye -= 2400;
return paye < 0 ? 0 : paye;
}

// Function to format currency
function formatKsh(value) {
return "Ksh " + value.toFixed(2);
}

// Main function
function calculateNetSalary() {
let basic = parseFloat(prompt("Enter Basic Salary (Ksh):"));
let benefits = parseFloat(prompt("Enter Benefits (Ksh):"));

if (isNaN(basic) || isNaN(benefits)) {
    console.log("Invalid input.");
    return;
}

let gross = getGrossSalary(basic, benefits);
let nssf = calculateNSSF(basic);
let shif = calculateSHIF(gross);
let housingLevy = calculateHousingLevy(gross);
let taxableIncome = gross - (nssf + shif + housingLevy);
let paye = calculatePAYE(taxableIncome);

let totalDeductions = nssf + shif + housingLevy + paye;
let netSalary = gross - totalDeductions;
console.log("==== Salary Breakdown ====");
console.log("Gross Salary:      ", formatKsh(gross));
console.log("NSSF Deduction:    ", formatKsh(nssf));
console.log("SHIF Deduction:    ", formatKsh(shif));
console.log("Housing Levy:      ", formatKsh(housingLevy));
console.log("PAYE (Tax):        ", formatKsh(paye));
console.log("----------------------------");
console.log("Total Deductions:  ", formatKsh(totalDeductions));
console.log("Net Salary:        ", formatKsh(netSalary));
}

// Run the calculator
calculateNetSalary();
