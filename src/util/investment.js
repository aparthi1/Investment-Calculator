// This function expects a JS object as an argument
// The object should contain the following properties
// - initialInvestment: The initial investment amount
// - annualInvestment: The amount invested every year
// - expectedReturn: The expected (annual) rate of return
// - duration: The investment duration (time frame)
export function calculateInvestmentResults(

  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
) {
  debugger
  const annualData = [];
  let investmentValue =parseFloat(initialInvestment) ;
  let expectedReturnValue=parseFloat(expectedReturn);
  let annualInvestmentValue=parseFloat(annualInvestment);
  let investedCapital=investmentValue;
    let TotalIntrest = 0;
    let perMonth = 0;
  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturnValue / 100);
     TotalIntrest+=interestEarnedInYear
    investmentValue += interestEarnedInYear + annualInvestmentValue;
      investedCapital += annualInvestmentValue;
      perMonth = investmentValue / 12;
    annualData.push({
      year: i + 1, 
      interest: formatter.format(interestEarnedInYear), 
      valueEndOfYear: formatter.format(investmentValue), 
      annualInvestment: formatter.format(annualInvestmentValue),
      investedCapital: formatter.format(investedCapital), 
        TotalIntrest: formatter.format(TotalIntrest), 
        perMonth: formatter.format(perMonth), 
    });
  }

  return annualData;
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
