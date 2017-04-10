var products = ["Blue Man ($15)", "Red Man ($20)", "Green Man ($25)", "Yellow Man ($30)"];  //creates an array for products, overwrites code on "orders" page, but info is still displayed in a table
var labels = document.getElementsByTagName("label");
function processProducts(){
  for (var i = 0; i < 4; i++){
    labels[i].innerHTML = products[i];
  }
}

if (window.addEventListener){
  window.addEventListener("load", processProducts, false);
} else if (window.attachEvent) {
  window.attachEvent("onload", processProducts);
}


//function to add values of selected check boxes and display total
function calcTotal(){
  var itemTotal = 0;
  var salesTaxRate = .06;        //stores the curent sales tax               
  var items = document.getElementsByTagName("input");
  
  for (var i=0; i<4; i++){
     if(items[i].checked){
        itemTotal += Number(items[i].value);
      }                
    }
    itemTotal *= 1 + salesTaxRate;
    document.getElementById("total").innerHTML = "Your order total is $" + itemTotal.toFixed(2);  //use toFixed(2) to show 2 decimal places in total
  } 

  
  document.getElementById("sButton").addEventListener("click", calcTotal, false);