var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax() {

  var result = {
    Telus: {
      totalSales: 0,
      totalTaxes: 0
    },
    Bombardier: {
      totalSales: 0,
      totalTaxes: 0
    }
  }

  companySalesData.forEach(function(company){
    var locationRevenue = 0;
    for (var revenue of company.sales) {
      result[company.name]['totalSales'] += revenue;
      locationRevenue += revenue;
    }
    result[company.name]['totalTaxes'] += (locationRevenue * salesTaxRates[company.province]);
  });

  return result;
}

var taxSummary = calculateSalesTax();
console.log(taxSummary);


// APPROACH:

// Problem: Given provincial tax rates and company sales data, return an object for each company that contains total sales and total taxes

// Inputs: salesData object + taxRates object

// Logic:
// 1. Create objects (Telus and Bombardier with expected keys of output (equal to 0).
// 2. Loop through the companysales data object calculating the total sales for each company/location and total tax
// 3. += to the object.
// 4. return object

// Output: Company objects w/ 2 keys = total sales (Across all regions) + total taxes.

