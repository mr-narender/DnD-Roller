// Adds 1 die to the respective row of dice clicked, while preventing going to negative values.
function substractDice (die) {
    if (0 < +$(`input[name = "${die}"]`).val()) {
        $(`input[name = "${die}"]`).val(+$(`input[name = "${die}"]`).val() - 1); 
    } else {
        console.log("Can't roll negative dice");
    }
    return false;
}