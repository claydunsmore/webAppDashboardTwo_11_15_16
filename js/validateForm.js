/**
 * Created by User on 10/30/2016.
 */

function validateMessage(){
    var user = document.myForm.userID.value;
    var messageOne = document.myForm.messageOne.value;


    if (user === null || user === "") {
        alert("Please enter valid user identification into user field.");
        return false;

    }
    else if (messageOne === null || messageOne === "") {
        alert("Please enter data into message field.");
        return false;
    }
    else {
        alert("Thank you for your response.");
        return true;
       }
 }


