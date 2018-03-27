function MenuChoice()
{
    if (document.getElementById("menu").value =="Customer Data")
    {
        document.getElementById("section1").style.visibility = "visible";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "hidden";
    }
    else if (document.getElementById("menu").value =="Order History")
    {
        document.getElementById("section2").style.visibility = "visible";
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "hidden";
    }
    else if (document.getElementById("menu").value =="Order List")
    {
        document.getElementById("section3").style.visibility = "visible";
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "hidden";
    }
    else 
    {
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "hidden";
    }
    
}


function GetCustomers()
{
   var objRequest = new XMLHttpRequest(); //Create AJAX request object

   //Create URL and Query string
   var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/getAllCustomers";

   //Checks that the object has returned data
   objRequest.onreadystatechange = function()
   {
      if (objRequest.readyState == 4 && objRequest.status == 200)
      {
        var output1 = JSON.parse(objRequest.responseText);
        GenerateOutput1(output1);
      }
   }

   //Initiate the server request
   objRequest.open("GET", url, true);
   objRequest.send();
}

function GenerateOutput1(result1)
{
 var count = 0;
 var displaycustomers = "<table><tr><th>Company Name</th><th>Customer ID</th><th>City</th></tr>";


 //Loop to extract data from the response object
 for (count = 0; count < result1.GetAllCustomersResult.length; count++)
 {
 displaycustomers += "<tr><td>" + result1.GetAllCustomersResult[count].CompanyName + "</td><td>" + result1.GetAllCustomersResult[count].CustomerID  + "</td><td>" + result1.GetAllCustomersResult[count].City + "</td></tr>";

 }
 displaycustomers += "</table>";
 document.getElementById("customerdisplay").innerHTML = displaycustomers;

}


function GetHistory()
{
   var objRequest = new XMLHttpRequest(); //Create AJAX request object

   //Create URL and Query string
   var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/getCustomerOrderHistory/";
   url += document.getElementById("2custid").value;

   //Checks that the object has returned data
   objRequest.onreadystatechange = function()
   {
      if (objRequest.readyState == 4 && objRequest.status == 200)
      {
        var output2 = JSON.parse(objRequest.responseText);
        GenerateOutput2(output2);
      }
   }

   //Initiate the server request
   objRequest.open("GET", url, true);
   objRequest.send();
}

function GenerateOutput2(result2)
{
 var count = 0;
 var displayhistory = "<table><tr><th>Product Name</th><th>Total Product Quantity Ordered</th></tr>";

 //Loop to extract data from the response object
 for (count = 0; count < result2.length; count++)
 {
 
 displayhistory += "<tr><td>" + result2[count].ProductName + "</td><td>" + result2[count].Total + "</td></tr>";
 }
 displayhistory += "</table>";
 document.getElementById("historydisplay").innerHTML = displayhistory;
}

function GetOrders()
{
   var objRequest = new XMLHttpRequest(); //Create AJAX request object

   //Create URL and Query string
   var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/getOrdersForCustomer/";
   url += document.getElementById("3custid").value;

   //Checks that the object has returned data
   objRequest.onreadystatechange = function()
   {
      if (objRequest.readyState == 4 && objRequest.status == 200)
      {
        var output3 = JSON.parse(objRequest.responseText);
        GenerateOutput3(output3);
      }
   }

   //Initiate the server request
   objRequest.open("GET", url, true);
   objRequest.send();
}

function GenerateOutput3(result3)
{
 var count = 0;
 var displayorders = "<table><tr><th>Order Date</th><th>Order ID</th><th>Shipping Address</th><th>Shipping City</th><th>Shipping Name</th><th>Shipping Postal Code</th><th>Shipped Date</th></tr>";


 //Loop to extract data from the response object
 for (count = 0; count < result3.GetOrdersForCustomerResult.length; count++)
 {
 displayorders += "<tr><td>" + result3.GetOrdersForCustomerResult[count].OrderDate + "</td><td>" + result3.GetOrdersForCustomerResult[count].OrderID + "</td><td>" + result3.GetOrdersForCustomerResult[count].ShipAddress + "</td><td>" + result3.GetOrdersForCustomerResult[count].ShipCity + "</td><td>" + result3.GetOrdersForCustomerResult[count].ShipName + "</td></tr>";

 }
 displayorders += "</table>";
 document.getElementById("orderdisplay").innerHTML = displayorders;

}

