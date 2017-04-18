function checkInputs()
{
if(document.form.name.value=='')
{
alert("Please enter your name");
document.form.name.focus();
return false;
}
else
if(document.form.number.value=='')
{
alert("Please Enter Credit Card Number.");
document.form.number.focus();
return false;
}
else
if(document.form.cvc.value=='')
{
alert("Please Enter CVC Number");
document.form.cvc.focus();
return false;
}
else
if(document.form.expiry.value=='')
{
alert("Please Enter Expiration Date");
document.form.expiry.focus();
return false;
}
else
if(document.form.amount.value=='')
{
alert("Please Enter Amount");
document.form.amuont.focus();
return false;
}
else
if(document.form.address.value=='')
{
alert("Please Enter Your Address");
document.form.address.focus();
return false;
}
else
if(document.form.bank.value=='')
{
alert("Please enter name of bank");
document.form.bank.focus();
return false;
}
else
if(document.form.routing.value=='')
{
alert("Please enter routing number");
document.form.routing.focus();
return false;
}
else
if(document.form.checknum.value=='')
{
alert("Please Enter Checking Account");
document.form.checknum.focus();
return false;
}
else
if(document.form.checknum2.value=='')
{
alert("Please Re-Enter Checking Account");
document.form.checknum2.focus();
return false;
}
else
if(document.form.checknum.value!=document.form.checknum2.value)
{
alert("Checking Account Numbers Do Not Match, Please Try Again.");
document.form.checknum2.focus();
return false;
}
else
if(document.form.email.value=='')
{
alert("Please Enter E-Mail.");
document.form.email.focus();
return false;
}
else
var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;

if(!document.form.email.value.match(emailExp))
     {
alert('Invalid Email');
document.form.email.focus();
return false;
     }
return true;
}