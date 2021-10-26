// Create a registration system
var objPeople = [
	{
		exampleInputCardNumber: '1234',
		exempleInputPin: '12345678'
	},
	{
		exampleInputCardNumber: 'matt',
		exempleInputPin: 'password88'
	},
	{
		exampleInputCardNumber: 'chris',
		exempleInputPin: 'password3'
	}
]
// login functionality
function login() {
	// retreive data from username and store in username variable
	var exampleInputCardNumber = document.getElementById('exampleInputCardNumber').value
	// retreive data from password and store in password variable
	var exempleInputPin = document.getElementById('exempleInputPin').value

	// loop through all the user pbjects and confrim if the username and password are correct
	for(var i = 0; i < objPeople.length; i++) {
		// check to 
		if(exampleInputCardNumber == objPeople[i].exampleInputCardNumber && exempleInputPin== objPeople[i].exempleInputPin) {
			console.log(exampleInputCardNumber + ' is logged in!!!')
			window.location = "D:\\repo\\FrontEnd_Bancomat\\pagini\\menuPage.html";
			alert("Login was successful");
			// stop the statement if result is found true - this was a return in the video, break is best practice here
			break
		} else {
			// error if username and password don't match
			console.log('incorrect card number or pin')
			alert("incorrect card number or pin was successful");
		}
    }
} 
// register functionality
function registerUser() {
    // store new users username
	var registerCardNumber = document.getElementById('newCardNumber').value
	// store new users password
	var registerPin = document.getElementById('newPin').value
	// store new user data in an object
	var newCardNumber = {
	 exampleInputCardNumber: registerCardNumber,
	 exempleInputPin: registerPin
    }
    // loop throught people array to see if the username is taken, or password to short
    for(var i = 0; i < objPeople.length; i++) {
	 // check if new username is equal to any already created usernames
     if(registerUser == objPeople[i].exampleInputCardNumber) {
	      // alert user that the username is take
	      alert('That card number is alreat in user, please choose another')
	       // stop the statement if result is found true
	     break
         // check if new password is 8 characters or more
	    } 
	 else if (registerPin.length < 8) {
	        // alert user that the password is to short
	     alert('That is to short, include 8 or more characters')
	     // stop the statement if result is found true
	     break
	    }
	}
	alert('Register sucesfful')
	window.location = "D:\\repo\\FrontEnd_Bancomat\\pagini\\menuPage.html";
	// push new object to the people array
	objPeople.push(newCardNumber)
	// console the updated people array
	console.log(objPeople)	
	}