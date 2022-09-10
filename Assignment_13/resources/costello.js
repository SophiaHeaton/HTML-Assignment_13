function calculateOrder() {
  var x = document.forms["myForm"]["pastatype"].value;
  var y = document.forms["myForm"]["sauce"].value;
  var z = document.forms[0]["extras"];
  var t = 0;

  var i;
  for (i = 0; i < z.length; i++) {
    if (z[i].checked) {
      t = t + parseInt(z[i].value);
    }
  }

  var total = parseInt(x) + parseInt(y) + parseInt(t);
  total = total/100;
  total = total.toFixed(2);

  document.getElementById("totalcost").innerHTML = "$" + total;
}
// TODO:  Calculate order and display it

function validateAndSubmitForm() {
  var x = document.forms["myForm"]["pastatype"].value;
  var y = document.forms["myForm"]["client_name"].value;
  var z = document.forms["myForm"]["captcha_name"].value;

  if (x == "") {
    document.getElementById("pastaLabel").innerHTML = "Required Field!";
  }
  else {
    document.getElementById("pastaLabel").innerHTML = "";
  }

  if (y == "") {
    document.getElementById("nameLabel").innerHTML = "Required Field!";
  }
  else {
    document.getElementById("nameLabel").innerHTML = "";
  }

  if (z == "" || z !="asdf") {
    if (z == "") {
      document.getElementById("captchaLabel").innerHTML = "Required Field!";
    }
    else {
      document.getElementById("captchaLabel").innerHTML = "Incorrect Captcha!";
    }

  }
  else {
    document.getElementById("captchaLabel").innerHTML = "";
  }

  if (x == "" || y == "" || z == "" || z !="asdf") {
    return false;
  }
  return true;
}
// TODO: Validate form and display validation errors if any
// otherwise submit form
// for the form to actually submit, change from return false to return true: