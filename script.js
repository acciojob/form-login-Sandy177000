const form = document.getElementById("form1");

function getFormvalue() {
  let x = document.forms["form1"]["fname"].value;
  let y = document.forms["form1"]["lname"].value;
  alert(x+" "+y);  
}


