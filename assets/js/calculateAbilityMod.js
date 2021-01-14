function calculateAbilityMod(ability) {
    if (1 <= ability.value && ability.value <= 30) {
        let mod = Math.floor((ability.value - 10)/2);
        // Replaces the text in the input field with its floor value, since ability scores should only be integers.
        $(`input[name = "${ability.name}"]`).val(Math.floor(ability.value)); 
        // Adds the modifier to localStorage.
        localStorage.setItem(`${ability.name}`, `${mod}`);
        // Checks if 1 <= mod to add "+" to the string on positive modifiers.
        if (1 <= mod) {
            $(`label[for = "${ability.name}"]`).html(`${ability.name.toUpperCase()} (+${(mod)})`);
        } else {
            $(`label[for = "${ability.name}"]`).html(`${ability.name.toUpperCase()} (${(mod)})`);
        }
    } else {
        console.log("Invalid Ability Score");
    }
    return false;
}