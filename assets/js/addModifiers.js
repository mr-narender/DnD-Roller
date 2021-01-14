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