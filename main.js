// pin generate event handler
document.getElementById('pin-btn').addEventListener('click', function () {
    const pin = getPin();
    document.getElementById('pin-show').value = pin;
});



// pin generate function
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
};




//calculator event handler with calculator input field
document.getElementById('input-in').addEventListener('click', function (event) {
    const inputIn = event.target.innerText;
    const inputShow = document.getElementById('input-show');
    if (isNaN(inputIn)) {
        if (inputIn == 'C') {
            inputShow.value = '';
        }
    }
    else {
        inputShow.value = inputShow.value + inputIn;
    }
});




// pin submit
document.getElementById('pin-submit-btn').addEventListener('click', function () {
    const pinShow = document.getElementById('pin-show').value;
    const inputShow = document.getElementById('input-show');
    // এইখানে ইনপুট ফিল্ড বা ইনপুট শো এর ভ্যালু আলাদাভাবে বের করা হইছে যাতে কাজ শেষে ইনপুট ফিল্ড ক্লিয়ার করা যায়। একই লাইনে ভ্যালু বের করে নিলে কাজ শেষে ইনপুট ফিল্ড ক্লিয়ার করা যায় না।
    const inputShowValue = inputShow.value;
    if (pinShow == inputShowValue) {
        document.getElementById('matche').style.display = 'block';
        document.getElementById('not-matche').style.display = 'none';
        inputShow.value = '';
    }
    else {
        document.getElementById('not-matche').style.display = 'block';
        document.getElementById('matche').style.display = 'none';
        inputShow.value = '';
    }
});