
// const result = document.querySelector('.result');
function calculateAge() {
    // Get the value of the birth date input
    var birthdate = document.getElementById('birthdate').value;
    if (!birthdate) {
        alert("Please enter your birth date");
        return;
    }

    console.log("Birthdate entered:", birthdate);

    // Parse the birth date using split method
    var birthDateParts = birthdate.split("-");
    var birthYear = parseInt(birthDateParts[0], 10);
    var birthMonth = parseInt(birthDateParts[1], 10) - 1; // Months are 0-11 in JavaScript Date
    var birthDay = parseInt(birthDateParts[2], 10);
    var birthDateObj = new Date(birthYear, birthMonth, birthDay);

    console.log("Parsed birth date:", birthDateObj);

    // Check if the date is valid
    if (isNaN(birthDateObj.getTime())) {
        alert("Invalid birth date");
        return;
    }

    var today = new Date();

    // Calculate the age
    var age = today.getFullYear() - birthDateObj.getFullYear();
    var monthDifference = today.getMonth() - birthDateObj.getMonth();
    var dayDifference = today.getDate() - birthDateObj.getDate();

    // Adjust if the birthday hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    console.log("Calculated age:", age);
    // Display the result
    document.getElementById('result').innerText = age;
}