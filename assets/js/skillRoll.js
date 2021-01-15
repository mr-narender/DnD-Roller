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