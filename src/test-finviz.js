var finviz = require('finviz');
 
finviz.getStockData("MSFT")
  .then(data => console.log(JSON.stringify(data, null, 2)))
  .catch(err => console.error(err.stack ? err.stack : err));
 