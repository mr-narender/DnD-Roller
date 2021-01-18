function calculateAtkDmgMod(mod) {
    if (-50 <= mod.value && mod.value <= 50) {
        localStorage.setItem(`${mod.name}`, `${mod.value}`);
    } else {
        console.log("Invalid Modifier");
    }
    return false;
}