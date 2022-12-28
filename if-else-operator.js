// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different // numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.

function saleHotdogs(n){
  var money = 0;
  if (n < 5 ) {
    money = n * 100
  }
  else if ( n >= 5 && n < 10 ) {
    money = n * 95
  }
  else if ( n >= 10 )  {
   money = n * 90 
  }
  return money
}
