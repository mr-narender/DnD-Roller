function calculateProf(level) {
    if (1 <= level.value && level.value <= 20) {
        let prof = Math.ceil(1 + 1 / 4 * (level.value));
        // Replaces the text in the input field with its floor value, since ability scores should only be integers.
        $(`input[name = "${level.name}"]`).val(Math.floor(level.value));
        $(`label[for = "${level.name}"]`).html(`Level (+${(prof)})`);
        localStorage.setItem('prof', `${prof}`);
    } else {
        level.value = 1;
        console.log("Invalid Level");
    }
    return false;
}


function calculateAtkDmgMod(mod) {
    if (-50 <= mod.value && mod.value <= 50) {
        localStorage.setItem(`${mod.name}`, `${mod.value}`);
    } else {
        mod.value = 0;
        console.log("Invalid Modifier");
    }
    return false;
}

function calculateSkillMod(input, ability) {
    // Gets the name of the skill from the input name.
    let skill = $(input).attr("name").split("-");
    let sum;
    // Adds the required ability modifier.
    sum = parseInt(localStorage.getItem(ability));
    // Validates the input in modifier and then adds both the modifier and the proficiency if 
    // proficiency checkbox is "checked", or only the modifier if unchecked.
    let mod = parseInt($(`input[name = "${skill[0]}-mod"]`).val());
    if (-50 <= mod && mod <= 50) {
        if ($(`input[name = "${skill[0]}-prof"]`).prop("checked")) {
            sum = sum + mod + parseInt(localStorage.getItem("prof"));
        } else {
            sum = sum + mod;
        }
        // Adds a "+" to the modifier in the label if it is positive.
        if (sum <= 0) {
            $(`label[for = "${skill[0]}"]`).html(`${$(`label[for = "${skill[0]}"]`).attr("title")} (${(sum)})`);
        } else {
            $(`label[for = "${skill[0]}"]`).html(`${$(`label[for = "${skill[0]}"]`).attr("title")} (+${(sum)})`);
        }
        // Stores the value of the modifier in localStorage
        localStorage.setItem(`${skill[0]}`, `${sum}`);
        // Error message in case the input is invalid.
    } else {
        mod.value = 0;
        console.log("Invalid modifier input.")
    }
    return false;
}


function calculateAbilityMod(ability) {
    if (1 <= ability.value && ability.value <= 30) {
        let mod = Math.floor((ability.value - 10) / 2);
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
        ability.value = 1;
        console.log("Invalid Ability Score");
    }
    return false;
}

