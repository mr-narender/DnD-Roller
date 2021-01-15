// Rolls all dice selected, adds ability and other modifiers, adds proficiency modifier.
function dmgRoll() {
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