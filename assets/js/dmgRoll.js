// Rolls all dice selected, adds ability and other modifiers, adds proficiency modifier.
function dmgRoll() {
    // Clears the dice-sum and result fields.
    $("#result").html("");
    $("#dice-sum").html("");
    // Roll all dice selected in form.
    roll20(parseInt($(`input[name = "d20"]`).val()));
    roll12(parseInt($(`input[name = "d12"]`).val()));
    roll10(parseInt($(`input[name = "d10"]`).val()));
    roll8(parseInt($(`input[name = "d8"]`).val()));
    roll6(parseInt($(`input[name = "d6"]`).val()));
    roll4(parseInt($(`input[name = "d4"]`).val()));
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
    //clearDice();
    return false;
}