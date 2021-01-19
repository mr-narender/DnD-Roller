function validateForm(input) {
    if ($(input).hasClass("number-of-dice")) {
        if (0 <= input.value && input.value <= 30) {
            
        } else {
            input.value = 0;
            console.log('Wrong amount of dice');
        }
    }
    if ($(input).hasClass("modifier")) {
       if (-50 <= input.value && input.value <= 50) {
            
        } else {
            input.value = 0;
            console.log('Wrong amount of dice');
        } 
    }
    return false;
}