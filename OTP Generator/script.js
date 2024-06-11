const input = document.getElementById("input");
const btn = document.querySelector(".generate-btn");
const copy = document.querySelector(".copy-btn");

function generateOTP(){
    
    const otpLength = 6;
    // Generate a random numeric OTP with exactly 6 digits
    const otp = Math.floor(100000 + Math.random() * 900000);
    input.value = otp;

}


function copyOTP(){
    input.select();
    input.setSelectionRange(0, 999);
    // navigator.clipboard.writeText(inputEl.value);
    document.execCommand("copy");

    // Alert the copied text
    alert("Copied the text: " + input.value);
}