function validEmail(str) {
  //your JS code here.
	return str.match(/[a-z][@]/);
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
