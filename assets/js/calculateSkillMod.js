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