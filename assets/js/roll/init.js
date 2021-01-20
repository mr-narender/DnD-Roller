// Adds 1 die to the respective row of dice clicked, while preventing going over 30.
function addDice(die) {
    if (+$(`input[name = "${die}"]`).val() < 30 ) {
        $(`input[name = "${die}"]`).val(+$(`input[name = "${die}"]`).val() + 1); 
    } else {
        console.log("Can't roll negative dice");
    }
    return false;
}

// Subtracts 1 die to the respective row of dice clicked, while preventing going to negative values.
function substractDice (die) {
    if (0 < +$(`input[name = "${die}"]`).val()) {
        $(`input[name = "${die}"]`).val(+$(`input[name = "${die}"]`).val() - 1); 
    } else {
        console.log("Can't roll negative dice");
    }
    return false;
}

// Resets the inputs for the number of dice to roll back to "0".
function clearDice() {
    $(`input[name = "d20"]`).val(0);
    $(`input[name = "d12"]`).val(0);
    $(`input[name = "d10"]`).val(0);
    $(`input[name = "d8"]`).val(0);
    $(`input[name = "d6"]`).val(0);
    $(`input[name = "d4"]`).val(0);
    return false;
}

// Assures the input fields only accept valid values.
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

// Appends the value input to the #dice-sum field while adding parentheses to 
// negative modifiers, and adds it to #result.
function addModifiers(number) {
    if (number > 0) {
        $("#dice-sum").append(`${number} + `);
        $("#result").html(+$("#result").html() + number);
    } else if (number < 0) {
        $("#dice-sum").append(`(${number}) + `);
        $("#result").html(+$("#result").html() + number);
    } else {
    }
    return false;
}

// Rolls a n-sided die and highlights the text if it rolls the maximum/minimum value,
// appends that to #dice-sum and adds its value to #result.
function rollDice(number, sides) {
    let result = 0;
    for (let n = 0; n < number; n++) {
        result = Math.floor((Math.random() * sides) + 1);
        if (result === 1) {
            $("#dice-sum").append(`<span class="crit-miss">${result}</span> + `);
        } else if (result === sides) {
            $("#dice-sum").append(`<span class="crit-hit">${result}</span> + `);
        } else {
            $("#dice-sum").append(`${result} + `);
        }
        $("#result").html(+$("#result").html() + result);
    }
    return result;
}

// Rolls skills.
function skillRoll(skill) {
    // Clears the dice-sum and result fields.
    $("#result").html("");
    $("#dice-sum").html("");
    // Rolls 1d20
    let result = Math.floor((Math.random() * 20) + 1);
   // Colors the dice roll's text green if it is 20, or red if it is 1.
    if (result === 1) {
            $("#dice-sum").append(`<span class="crit-miss">${result}</span> + `);
        } else if (result === 20) {
            $("#dice-sum").append(`<span class="crit-hit">${result}</span> + `);
        } else {
            $("#dice-sum").append(`${result} + `);
    }
    $("#result").html(+$("#result").html() + result);
    // Adds skill modifiers.
    let skillMod = localStorage.getItem(`${skill}`); 
    addModifiers(parseInt(skillMod));
    // Adds other modifiers.
    addModifiers(parseInt($(`input[name = "modifier"]`).val()));
    // Clears the last "+" in input.
    let final = $("#dice-sum").html().slice(0, -3);
    $("#dice-sum").html(final);  
    return false;
}

// Rolls 1d20 plus modifiers, also rolls advantage / disadvantage accordingly.
function atkRoll() {
    // Clears the dice-sum and result fields.
    $("#result").html("");
    $("#dice-sum").html("");
    // Rolls twice for advantage/disadvantage cases and selects the max/min of the rolls respectively.
    let result = Math.floor((Math.random() * 20) + 1);
    if ($("#advantage-menu").val() === "Advantage") {
        let result2 = Math.floor((Math.random() * 20) + 1);
        result = Math.max(result, result2);
    } else if ($("#advantage-menu").val() === "Disadvantage") {
        let result2 = Math.floor((Math.random() * 20) + 1);
        result = Math.min(result, result2);
    } else {
    }
    // Colors the dice roll's text green if it is 20, or red if it is 1.
    if (result === 1) {
            $("#dice-sum").append(`<span class="crit-miss">${result}</span> + `);
        } else if (result === 20) {
            $("#dice-sum").append(`<span class="crit-hit">${result}</span> + `);
        } else {
            $("#dice-sum").append(`${result} + `);
        }
        $("#result").html(+$("#result").html() + result);
    // Adds ability modifiers whenever applicable.
    if ($("#ability-menu").val() === "None") {
    } else {
        let abilityMod = localStorage.getItem(`${$("#ability-menu").val().toLowerCase()}`); 
        addModifiers(parseInt(abilityMod));
    }
    // Adds other modifiers.
    addModifiers(parseInt(localStorage.getItem('attack-mod')));
    addModifiers(parseInt($(`input[name = "modifier"]`).val()));
    // Clears the last "+" in input.
    let final = $("#dice-sum").html().slice(0, -3);
    $("#dice-sum").html(final);    
    return false;
}

// Rolls all dice selected, adds ability and other modifiers, adds proficiency modifier.
function freeRoll() {
    // Clears the dice-sum and result fields.
    $("#result").html("");
    $("#dice-sum").html("");
    // Roll all dice selected in form.
    rollDice(parseInt($(`input[name = "d20"]`).val()), 20);
    rollDice(parseInt($(`input[name = "d12"]`).val()), 12);
    rollDice(parseInt($(`input[name = "d10"]`).val()), 10);
    rollDice(parseInt($(`input[name = "d8"]`).val()), 8);
    rollDice(parseInt($(`input[name = "d6"]`).val()), 6);
    rollDice(parseInt($(`input[name = "d4"]`).val()), 4);
    // Adds ability modifiers whenever applicable.
    if ($("#ability-menu").val() !== "None") {
        let abilityMod = localStorage.getItem(`${$("#ability-menu").val().toLowerCase()}`); 
        addModifiers(parseInt(abilityMod));
    }
    // Adds other modifiers.
    addModifiers(parseInt(localStorage.getItem('damage-mod')));
    addModifiers(parseInt($(`input[name = "modifier"]`).val()));
    // Adds level modifier
    if ($(`input[name = "proficiency"]`).prop("checked")) {
        addModifiers(parseInt(localStorage.prof));
    }
    clearDice();
    // Clears the last "+" in input.
    let final = $("#dice-sum").html().slice(0, -3);
    $("#dice-sum").html(final);  
    return false;
}