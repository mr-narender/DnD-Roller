// Resets the inputs for the number of dice to roll back to "0".
function clearDice() {
    $(`input[name = "d20"]`).val(0);
    $(`input[name = "d12"]`).val(0);
    $(`input[name = "d10"]`).val(0);
    $(`input[name = "d8"]`).val(0);
    $(`input[name = "d6"]`).val(0);
    $(`input[name = "d4"]`).val(0);
    return false;
}