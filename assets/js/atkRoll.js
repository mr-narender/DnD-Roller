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
        result = Math.min(result1, result2);
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
    addModifiers(parseInt($(`input[name = "modifier"]`).val()));
    return false;
}
