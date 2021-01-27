// Initialize stored variables if any.
initAbilityModifiers();
initAbilityScores();
initProficiencyModifier();
initCharacterModifiers();
initSkillLabels();
initSkillInputs();
initSkillCheckboxes();

// Initialize tooltips.
$(document).ready($(function () {
    $('[data-toggle="tooltip"]').tooltip();
}));

// Initialize Ability Modifiers
function initAbilityModifiers() {
    initAbilityScoresMods($('[for="str"]'), (parseInt(localStorage.getItem('str'))));
    initAbilityScoresMods($('[for="dex"]'), (parseInt(localStorage.getItem('dex'))));
    initAbilityScoresMods($('[for="con"]'), (parseInt(localStorage.getItem('con'))));
    initAbilityScoresMods($('[for="int"]'), (parseInt(localStorage.getItem('int'))));
    initAbilityScoresMods($('[for="wis"]'), (parseInt(localStorage.getItem('wis'))));
    initAbilityScoresMods($('[for="cha"]'), (parseInt(localStorage.getItem('cha'))));
}

// Initialize Ability Scores
function initAbilityScores() {
    initInput($('[name="str"]'), (parseInt(localStorage.getItem('str-score'))));
    initInput($('[name="dex"]'), (parseInt(localStorage.getItem('dex-score'))));
    initInput($('[name="con"]'), (parseInt(localStorage.getItem('con-score'))));
    initInput($('[name="int"]'), (parseInt(localStorage.getItem('int-score'))));
    initInput($('[name="wis"]'), (parseInt(localStorage.getItem('wis-score'))));
    initInput($('[name="cha"]'), (parseInt(localStorage.getItem('cha-score'))));
}

function initProficiencyModifier() {
    validateProfMod();
    initLabel($('[for="level"]'), (parseInt(localStorage.getItem('prof'))));
}

// Initialize Character Modifiers
function initCharacterModifiers() {
    initInput($('[name="level"]'), (parseInt(localStorage.getItem('level'))));
    initInput($('[name="attack-mod"]'), (parseInt(localStorage.getItem('attack-mod'))));
    initInput($('[name="damage-mod"]'), (parseInt(localStorage.getItem('damage-mod'))));
}

// Initialize Skills
function initSkillLabels() {
    initLabel($('[for="acrobatics"]'), (parseInt(localStorage.getItem('acrobatics'))));
    initLabel($('[for="animalhandling"]'), (parseInt(localStorage.getItem('animalhandling'))));
    initLabel($('[for="arcana"]'), (parseInt(localStorage.getItem('arcana'))));
    initLabel($('[for="athletics"]'), (parseInt(localStorage.getItem('athletics'))));
    initLabel($('[for="deception"]'), (parseInt(localStorage.getItem('deception'))));
    initLabel($('[for="history"]'), (parseInt(localStorage.getItem('history'))));
    initLabel($('[for="insight"]'), (parseInt(localStorage.getItem('insight'))));
    initLabel($('[for="intimidation"]'), (parseInt(localStorage.getItem('intimidation'))));
    initLabel($('[for="investigation"]'), (parseInt(localStorage.getItem('investigation'))));
    initLabel($('[for="medicine"]'), (parseInt(localStorage.getItem('medicine'))));
    initLabel($('[for="nature"]'), (parseInt(localStorage.getItem('nature'))));
    initLabel($('[for="perception"]'), (parseInt(localStorage.getItem('perception'))));
    initLabel($('[for="performance"]'), (parseInt(localStorage.getItem('performance'))));
    initLabel($('[for="persuasion"]'), (parseInt(localStorage.getItem('persuasion'))));
    initLabel($('[for="religion"]'), (parseInt(localStorage.getItem('religion'))));
    initLabel($('[for="sleightofhand"]'), (parseInt(localStorage.getItem('sleightofhand'))));
    initLabel($('[for="stealth"]'), (parseInt(localStorage.getItem('stealth'))));
    initLabel($('[for="survival"]'), (parseInt(localStorage.getItem('survival'))));
}

function initSkillInputs() {
    initInput($('[name="acrobatics-mod"]'), (parseInt(localStorage.getItem('acrobatics-mod'))));
    initInput($('[name="animalhandling-mod"]'), (parseInt(localStorage.getItem('animalhandling-mod'))));
    initInput($('[name="arcana-mod"]'), (parseInt(localStorage.getItem('arcana-mod'))));
    initInput($('[name="athletics-mod"]'), (parseInt(localStorage.getItem('athletics-mod'))));
    initInput($('[name="deception-mod"]'), (parseInt(localStorage.getItem('deception-mod'))));
    initInput($('[name="history-mod"]'), (parseInt(localStorage.getItem('history-mod'))));
    initInput($('[name="insight-mod"]'), (parseInt(localStorage.getItem('insight-mod'))));
    initInput($('[name="intimidation-mod"]'), (parseInt(localStorage.getItem('intimidation-mod'))));
    initInput($('[name="investigation-mod"]'), (parseInt(localStorage.getItem('investigation-mod'))));
    initInput($('[name="medicine-mod"]'), (parseInt(localStorage.getItem('medicine-mod'))));
    initInput($('[name="nature-mod"]'), (parseInt(localStorage.getItem('nature-mod'))));
    initInput($('[name="perception-mod"]'), (parseInt(localStorage.getItem('perception-mod'))));
    initInput($('[name="performance-mod"]'), (parseInt(localStorage.getItem('performance-mod'))));
    initInput($('[name="persuasion-mod"]'), (parseInt(localStorage.getItem('persuasion-mod'))));
    initInput($('[name="religion-mod"]'), (parseInt(localStorage.getItem('religion-mod'))));
    initInput($('[name="sleightofhand-mod"]'), (parseInt(localStorage.getItem('sleightofhand-mod'))));
    initInput($('[name="stealth-mod"]'), (parseInt(localStorage.getItem('stealth-mod'))));
    initInput($('[name="survival-mod"]'), (parseInt(localStorage.getItem('survival-mod'))));
}

function initSkillCheckboxes() {
    initCheckbox($('[name="acrobatics-prof"]'), localStorage.getItem('acrobatics-prof'));
    initCheckbox($('[name="animalhandling-prof"]'), localStorage.getItem('animalhandling-prof'));
    initCheckbox($('[name="arcana-prof"]'), localStorage.getItem('arcana-prof'));
    initCheckbox($('[name="athletics-prof"]'), localStorage.getItem('athletics-prof'));
    initCheckbox($('[name="deception-prof"]'), localStorage.getItem('deception-prof'));
    initCheckbox($('[name="history-prof"]'), localStorage.getItem('history-prof'));
    initCheckbox($('[name="insight-prof"]'), localStorage.getItem('insight-prof'));
    initCheckbox($('[name="intimidation-prof"]'), localStorage.getItem('intimidation-prof'));
    initCheckbox($('[name="investigation-prof"]'), localStorage.getItem('investigation-prof'));
    initCheckbox($('[name="medicine-prof"]'), localStorage.getItem('medicine-prof'));
    initCheckbox($('[name="nature-prof"]'), localStorage.getItem('nature-prof'));
    initCheckbox($('[name="perception-prof"]'), localStorage.getItem('perception-prof'));
    initCheckbox($('[name="performance-prof"]'), localStorage.getItem('performance-prof'));
    initCheckbox($('[name="persuasion-prof"]'), localStorage.getItem('persuasion-prof'));
    initCheckbox($('[name="religion-prof"]'), localStorage.getItem('religion-prof'));
    initCheckbox($('[name="sleightofhand-prof"]'), localStorage.getItem('sleightofhand-prof'));
    initCheckbox($('[name="stealth-prof"]'), localStorage.getItem('stealth-prof'));
    initCheckbox($('[name="survival-prof"]'), localStorage.getItem('survival-prof'));
}

// Initializes a single label.
function initLabel(label, number) {
    if (number){
        if (number < 1) {
            $(label).append(` (${number})`);
        } else {
            $(label).append(` (+${number})`);
        }
    }
}
    
// Initializes a single checkbox.
function initCheckbox(checkbox, status) {
    if (status === 'checked') {
        $(checkbox).prop('checked', true);
    }
    return false;
}

// Initializes a single text input.
function initInput(input, number) {
    if (number) {
        $(input).val(number);
    }
    return false;
}


// Initializes scores modifiers so they don't throw an error while 
// calculating if none have been stored
function initAbilityScoresMods(label, score) {
    if (score) {
        initLabel(label, score);
    } else {
        localStorage.setItem(`${label.prop('for')}`, '0')
    }
}


// Briefly shows a tick to the user whenever a value is stored successfully.
function acknowledgeTick(input) {
    input.tooltip('show');
    setTimeout(function() {
        input.tooltip('hide');
    }, 1000);
    return false;
}

// Ensures only integers are input.
function inputToInteger(input) {
    $(input).val(Math.floor(input.val())); 
}

// Ability score to ability score modifier formula 
function abilityScoreToMod(score) {
    let mod = Math.floor((score - 10)/2);
    return mod;
}

// Level to proficiency modifier formula
function levelToProf(level) {
    let prof = Math.ceil(1 + 1/4*(level));
    return prof;
}

// Validates text inputs in skill.
function validateSkillMod(skill) {
    let mod = parseInt($(`input[name = "${skill}-mod"]`).val());
    if (-50 <= mod && mod <= 50) {
    } else {
        console.log('Invalid Skill Modifier.');
        mod = 0;
        $(`input[name = "${skill}-mod"]`).val(mod);
    }
    return mod;    
}

// Ensures a valid prof modifier is stored for calculations.
function validateProfMod(skill) {
    let prof = localStorage.getItem('prof');
    if (prof) {
    } else {
        localStorage.setItem('prof', '0');
    }
}

// Calculates the Ability Scores Modifiers.
function calculateAbilityMod(ability) {
    if (1 <= ability.value && ability.value <= 30) {
        // Replaces the text in the input field with its floor value, since ability scores should only be integers.
        inputToInteger($(`input[name = "${ability.name}"]`));
        let mod = abilityScoreToMod(ability.value);
        // Adds the modifier and score to localStorage.
        localStorage.setItem(`${ability.name}`, `${mod}`);
        localStorage.setItem(`${ability.name}-score`, `${ability.value}`);
        // Checks if 1 <= mod to add "+" to the string on positive modifiers.
        if (1 <= mod) {
            $(`label[for = "${ability.name}"]`).html(`${ability.name.toUpperCase()} (+${(mod)})`);
        } else {
            $(`label[for = "${ability.name}"]`).html(`${ability.name.toUpperCase()} (${(mod)})`);
        }
        acknowledgeTick($(`input[name = "${ability.name}"]`));
    } else {
        ability.value = 1;
        console.log("Invalid Ability Score");
    }
    return false;
}

// Calculates the Attack and Damage modifiers.
function calculateAtkDmgMod(mod) {
    // Replaces the text in the input field with its floor value, since modifiers should only be integers.
    inputToInteger(($(`input[name = "${mod.name}"]`)));
    // Validates the input in modifier and stores it if valid.
    if (-50 <= mod.value && mod.value <= 50) {
        localStorage.setItem(`${mod.name}`, `${mod.value}`);
        acknowledgeTick($(`input[name = "${mod.name}"]`));
    } else {
        mod.value = 0;
        console.log("Invalid Modifier");
    }
    return false;
}

// Calculates the proficiency using the value of Level.
function calculateProf(level) {
    if (1 <= level.value && level.value <= 20) {
        // Replaces the text in the input field with its floor value, since modifiers should only be integers.
        inputToInteger($(`input[name = "${level.name}"]`));
        prof = levelToProf(level.value);
        $(`label[for = "${level.name}"]`).html(`Level (+${(prof)})`);
        localStorage.setItem('prof', `${prof}`);
        localStorage.setItem('level', `${level.value}`);
        acknowledgeTick($(`input[name = "${level.name}"]`));
    } else {
        level.value = 1;
        console.log("Invalid Level");
    }
    return false;
}

// Calculates each skill modifier.
function calculateSkillMod(input, ability) {
    // Gets the name of the skill from the input name.
    let skill = $(input).attr("name").split("-");
    let sum;
    // Adds the required ability modifier.
    sum = parseInt(localStorage.getItem(ability));
    console.log(sum);
    // Replaces the text in the input field with its floor value, since modifiers should only be integers.
    inputToInteger($(`input[name = "${skill[0]}-mod"]`));
    // Validates the input in modifier and then adds both the modifier and the proficiency if 
    // proficiency checkbox is "checked", or only the modifier if unchecked.
    let mod = validateSkillMod(skill[0]);
    if ($(`input[name = "${skill[0]}-prof"]`).prop("checked")) {
        sum = sum + mod + parseInt(localStorage.getItem("prof"));
        localStorage.setItem(`${skill[0]}-prof`, 'checked');
        localStorage.setItem(`${skill[0]}-mod`, `${mod}`);
    } else {
        sum = sum + mod;
        localStorage.setItem(`${skill[0]}-prof`, 'unchecked');
        localStorage.setItem(`${skill[0]}-mod`, `${mod}`);
    }
    // Adds a "+" to the modifier in the label if it is positive.
    if (sum <= 0) {
        $(`label[for = "${skill[0]}"]`).html(`${$(`label[for = "${skill[0]}"]`).attr("title")} (${(sum)})`);     
    } else {
        $(`label[for = "${skill[0]}"]`).html(`${$(`label[for = "${skill[0]}"]`).attr("title")} (+${(sum)})`); 
    }
    // Stores the value of the modifier in localStorage
    localStorage.setItem(`${skill[0]}`, `${sum}`);
    acknowledgeTick($(`input[name = "${$(input).attr("name")}"]`)); 
    return false;
}