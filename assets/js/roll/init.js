// Adds 1 die to the respective row of dice clicked, while preventing going over 30.
function addDice(die) {
    if (+$(`input[name = "${die}"]`).val() < 30 ) {
        $(`input[name = "${die}"]`).val(+$(`input[name = "${die}"]`).val() + 1); 
    } else {
        console.log("Can't roll more than 30 dice");
    }
    return false;
}

// Subtracts 1 die to the respective row of dice clicked, while preventing going to negative values.
function subtractDice (die) {
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

// Checks that the dice amount is valid.
function validateDice(die) {
    if (0 <= die.value && die.value <= 30) {
    } else {
        die.value = 0;
        console.log('Wrong amount of dice');
        return false;
    }
}

// Checks that the modifier is valid.
function validateModifier(mod) {
    if (-50 <= mod.value && mod.value <= 50) {
    } else {
        mod.value = 0;
        console.log('Invalid modifier.');
    }
}

// Adds positive modifiers
function addPositiveModifier(number) {
    $("#dice-sum").append(`${number} + `);
    $("#result").html(+$("#result").html() + number);
}

// Adds negative modifiers
function addNegativeModifier(number) {
    $("#dice-sum").append(`(${number}) + `);
    $("#result").html(+$("#result").html() + number);
}

// Appends the value input to the #dice-sum field while adding parentheses to 
// negative modifiers, and adds it to #result.
function addModifiers(number) {
    if (number > 0) {
        addPositiveModifier(number);
    } else if (number < 0) {
        addNegativeModifier(number);
    } else {
    }
    return false;
}

// Colors the dice red if result is the minimum value, green if it is the maximum, 
// and default if none of those cases.
function colorDice(result, max) {
    if (result === 1) {
        $("#dice-sum").append(`<span class="crit-miss">${result}</span> + `);
    } else if (result === max) {
        $("#dice-sum").append(`<span class="crit-hit">${result}</span> + `);
    } else {
        $("#dice-sum").append(`${result} + `);
    }
}

// Rolls a single n-sided die.
function rollDie(sides) {
    result = Math.floor((Math.random() * sides) + 1);
    return result;
}

// Rolls all n-sided die and highlights the text if it rolls the maximum/minimum value,
// appends that to #dice-sum and adds its value to #result.
function rollDice(number, sides) {
    let result = 0;
    for (let n = 0; n < number; n++) {
        result = rollDie(sides);
        colorDice(result, sides);
        // Adds the result so far.
        addResult(result);
    }
    return result;
}

// Advantage or Disadvantage roll.
function rollAdvantageOrDisadvantage() {
    let result = rollDie(20);
    if ($("#advantage-menu").val() === "Advantage") {
        let result2 = rollDie(20);
        result = Math.max(result, result2);
    } else if ($("#advantage-menu").val() === "Disadvantage") {
        let result2 = rollDie(20);
        result = Math.min(result, result2);
    }
    return result;
}

// Clears results and sum-dice.
function clearResults(){
    $("#result").html("");
    $("#dice-sum").html("");
}

// Adds proficiency modifier if proficiency checkbox is ticked. 
function addProficiency() {
    if ($(`input[name = "proficiency"]`).prop("checked")) {
        addModifiers(parseInt(localStorage.prof));
    }
}

// Adds ability modifier whenever applicable.
function addAbilityModifier() {
    if ($("#ability-menu").val() !== "None") {
        let abilityMod = localStorage.getItem(`${$("#ability-menu").val().toLowerCase()}`); 
        addModifiers(parseInt(abilityMod));
    }
}

// Adds other modifier.
function addOtherModifier() {
    addModifiers(parseInt($(`input[name = "modifier"]`).val()));
}

// Adds result to result section.
function addResult(result) {
    $("#result").html(+$("#result").html() + result);
}

// Removes the last '+' in dice-sum.
function clearLastOperator() {
    let final = $("#dice-sum").html().slice(0, -3);
    $("#dice-sum").html(final);  
}

// Shows the result section if hidden.
function showResults(){
    $('#result-section').removeClass('d-none');
}

// Rolls skills.
function skillRoll(skill) {
    // Clears the dice-sum and result fields.
    clearResults();
    // Rolls 1d20
    let result = rollDie(20);
   // Colors the dice roll's text green if it is 20, or red if it is 1.
    colorDice(result, 20);
    // Adds the result so far.
    addResult(result);
    // Adds skill modifiers.
    let skillMod = localStorage.getItem(`${skill}`); 
    addModifiers(parseInt(skillMod));
    // Adds other modifiers.
    addOtherModifier();
    // Clears the last "+" in input.
    clearLastOperator()
    // Shows result section if hidden. 
    showResults();
    // Scrolls to top.
    window.scrollTo({top: 0, behavior: 'smooth'});
    return false;
}

// Rolls 1d20 plus modifiers, also rolls advantage / disadvantage accordingly.
function atkRoll() {
    // Clears the dice-sum and result fields.
    clearResults();
    // Rolls twice for advantage/disadvantage cases and selects the max/min of the rolls respectively.
    let result = rollAdvantageOrDisadvantage();
    // Colors the dice roll's text green if it is 20, or red if it is 1.
    colorDice(result, 20);
    // Adds the result so far.
    addResult(result);
    // Adds proficiency modifier whenever applicable.
    addProficiency();
    // Adds ability modifier whenever applicable.
    addAbilityModifier();
    // Adds attack modifier.
    addModifiers(parseInt(localStorage.getItem('attack-mod')));
    // Adds other modifiers.
    addOtherModifier();
    // Clears the last "+" in input.
    clearLastOperator();
    // Shows result section if hidden. 
    showResults();    
    return false;
}

// Rolls all dice selected, adds ability and other modifiers, adds proficiency modifier.
function freeRoll() {
    // Clears the dice-sum and result fields.
    clearResults();
    // Roll all dice selected in form.
    rollDice(parseInt($(`input[name = "d20"]`).val()), 20);
    rollDice(parseInt($(`input[name = "d12"]`).val()), 12);
    rollDice(parseInt($(`input[name = "d10"]`).val()), 10);
    rollDice(parseInt($(`input[name = "d8"]`).val()), 8);
    rollDice(parseInt($(`input[name = "d6"]`).val()), 6);
    rollDice(parseInt($(`input[name = "d4"]`).val()), 4);
    // Adds proficiency modifier whenever applicable.
    addProficiency();
    // Adds ability modifier whenever applicable.
    addAbilityModifier();
    // Adds damage modifier.
    addModifiers(parseInt(localStorage.getItem('damage-mod')));
    // Adds other modifier.
    addOtherModifier();
    // Clears dice selection
    clearDice();
    // Clears the last "+" in input.
    clearLastOperator();
    // Shows result section if hidden. 
    showResults();  
    return false;
}