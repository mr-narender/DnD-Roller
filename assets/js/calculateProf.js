function calculateProf(level) {
    if (1 <= level.value && level.value <= 20) {
        let prof = Math.ceil(1 + 1/4*(level.value));
        // Replaces the text in the input field with its floor value, since ability scores should only be integers.
        $(`input[name = "${level.name}"]`).val(Math.floor(level.value)); 
        $(`label[for = "${level.name}"]`).html(`Level (+${(prof)})`);
    } else {
        console.log("Invalid Level");
    }
    return false;
}