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

  var result = {};

  companySalesData.forEach((company) => {
    var transientRevenue = 0;
    for (var revenue of company.sales) {
      (!result[company.name]) ? result[company.name] = {totalSales: revenue, totalTaxes: 0} : result[company.name].totalSales += revenue;
      transientRevenue += revenue;
    }
  result[company.name]['totalTaxes'] += (transientRevenue * salesTaxRates[company.province]);
  });
  return result;
}

var taxSummary = calculateSalesTax();
console.log(taxSummary);


