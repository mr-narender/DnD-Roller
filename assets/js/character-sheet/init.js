function initCharacter() {
    let character = generateBlankCharacter();
    character = checkForStoredCharacter(character);
    return character;
}

function generateBlankCharacter(){
    let blankCharacter = {
        'str' : 0,
        'dex' : 0,
        'con' : 0,
        'int' : 0,
        'wis' : 0,
        'cha' : 0,
        'prof' : 0,
    };
    return blankCharacter;
}

function checkForStoredCharacter(newCharacter) {
    let storedCharacter = JSON.parse(localStorage.getItem('character'));
    if (storedCharacter) {
        newCharacter = storedCharacter;
    } 
    return newCharacter;
}

function storeCharacterData(property, value){
    character[`${property}`] = value;
    localStorage.setItem('character', JSON.stringify(character));
}

// Initialize tooltips.
$(document).ready($(function () {
    $('[data-toggle="tooltip"]').tooltip();
}));

// Initialize Ability Modifiers
function initAbilityModifiers() {
    initLabel($('[for="str"]'), parseInt(character.str));
    initLabel($('[for="dex"]'), parseInt(character.dex));
    initLabel($('[for="con"]'), parseInt(character.con));
    initLabel($('[for="int"]'), parseInt(character.int));
    initLabel($('[for="wis"]'), parseInt(character.wis));
    initLabel($('[for="cha"]'), parseInt(character.cha));
}

// Initialize Ability Scores
function initAbilityScores() {
    initInput($('[name="str"]'), parseInt(character['str-score']));
    initInput($('[name="dex"]'), parseInt(character['dex-score']));
    initInput($('[name="con"]'), parseInt(character['con-score']));
    initInput($('[name="int"]'), parseInt(character['int-score']));
    initInput($('[name="wis"]'), parseInt(character['wis-score']));
    initInput($('[name="cha"]'), parseInt(character['cha-score']));
}

function initProficiencyModifier() {
    initLabel($('[for="level"]'), parseInt(character.prof));
}

// Initialize Character Modifiers
function initCharacterModifiers() {
    initInput($('[name="level"]'), (parseInt(character.level)));
    initInput($('[name="attack-mod"]'), (parseInt(character['attack-mod'])));
    initInput($('[name="damage-mod"]'), (parseInt(character['damage-mod'])));
}

// Initialize Skills
function initSkillLabels() {
    initLabel($('[for="acrobatics"]'), parseInt(character.acrobatics));
    initLabel($('[for="animalhandling"]'), parseInt(character.animalhandling));
    initLabel($('[for="arcana"]'), parseInt(character.arcana));
    initLabel($('[for="athletics"]'), parseInt(character.athletics));
    initLabel($('[for="deception"]'), parseInt(character.deception));
    initLabel($('[for="history"]'), parseInt(character.history));
    initLabel($('[for="insight"]'), parseInt(character.insight));
    initLabel($('[for="intimidation"]'), parseInt(character.intimidation));
    initLabel($('[for="investigation"]'), parseInt(character.investigation));
    initLabel($('[for="medicine"]'), parseInt(character.medicine));
    initLabel($('[for="nature"]'), parseInt(character.nature));
    initLabel($('[for="perception"]'), parseInt(character.perception));
    initLabel($('[for="performance"]'), parseInt(character.performance));
    initLabel($('[for="persuasion"]'), parseInt(character.persuasion));
    initLabel($('[for="religion"]'), parseInt(character.religion));
    initLabel($('[for="sleightofhand"]'), parseInt(character.sleightofhand));
    initLabel($('[for="stealth"]'), parseInt(character.stealth));
    initLabel($('[for="survival"]'), parseInt(character.survival));
}

function initSkillInputs() {
    initInput($('[name="acrobatics-mod"]'), parseInt(character['acrobatics-mod']));
    initInput($('[name="animalhandling-mod"]'), parseInt(character['animalhandling-mod']));
    initInput($('[name="arcana-mod"]'), parseInt(character['arcana-mod']));
    initInput($('[name="athletics-mod"]'), parseInt(character['athletics-mod']));
    initInput($('[name="deception-mod"]'), parseInt(character['deception-mod']));
    initInput($('[name="history-mod"]'), parseInt(character['history-mod']));
    initInput($('[name="insight-mod"]'), parseInt(character['insight-mod']));
    initInput($('[name="intimidation-mod"]'), parseInt(character['intimidation-mod']));
    initInput($('[name="investigation-mod"]'), parseInt(character['investigation-mod']));
    initInput($('[name="medicine-mod"]'), parseInt(character['medicine-mod']));
    initInput($('[name="nature-mod"]'), parseInt(character['nature-mod']));
    initInput($('[name="perception-mod"]'), parseInt(character['perception-mod']));
    initInput($('[name="performance-mod"]'), parseInt(character['performance-mod']));
    initInput($('[name="persuasion-mod"]'), parseInt(character['persuasion-mod']));
    initInput($('[name="religion-mod"]'), parseInt(character['religion-mod']));
    initInput($('[name="sleightofhand-mod"]'), parseInt(character['sleightofhand-mod']));
    initInput($('[name="stealth-mod"]'), parseInt(character['stealth-mod']));
    initInput($('[name="survival-mod"]'), parseInt(character['survival-mod']));
}

function initSkillCheckboxes() {
    initCheckbox($('[name="acrobatics-prof"]'), character['acrobatics-prof']);
    initCheckbox($('[name="animalhandling-prof"]'), character['animalhandling-prof']);
    initCheckbox($('[name="arcana-prof"]'), character['arcana-prof']);
    initCheckbox($('[name="athletics-prof"]'), character['athletics-prof']);
    initCheckbox($('[name="deception-prof"]'), character['deception-prof']);
    initCheckbox($('[name="history-prof"]'), character['history-prof']);
    initCheckbox($('[name="insight-prof"]'), character['insight-prof']);
    initCheckbox($('[name="intimidation-prof"]'), character['intimidation-prof']);
    initCheckbox($('[name="investigation-prof"]'), character['investigation-prof']);
    initCheckbox($('[name="medicine-prof"]'), character['medicine-prof']);
    initCheckbox($('[name="nature-prof"]'), character['nature-prof']);
    initCheckbox($('[name="perception-prof"]'), character['perception-prof']);
    initCheckbox($('[name="performance-prof"]'), character['performance-prof']);
    initCheckbox($('[name="persuasion-prof"]'), character['persuasion-prof']);
    initCheckbox($('[name="religion-prof"]'), character['religion-prof']);
    initCheckbox($('[name="sleightofhand-prof"]'), character['sleightofhand-prof']);
    initCheckbox($('[name="stealth-prof"]'), character['stealth-prof']);
    initCheckbox($('[name="survival-prof"]'), character['survival-prof']);
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

// Calculates the Ability Scores Modifiers.
function calculateAbilityMod(ability) {
    if (1 <= ability.value && ability.value <= 30) {
        // Replaces the text in the input field with its floor value, since ability scores should only be integers.
        inputToInteger($(`input[name = "${ability.name}"]`));
        let mod = abilityScoreToMod(ability.value);
        // Adds the modifier and score to localStorage.
        storeCharacterData(`${ability.name}`, `${mod}`);
        storeCharacterData(`${ability.name}-score`, `${ability.value}`);
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
        storeCharacterData(`${mod.name}`, `${mod.value}`);
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
        let prof = levelToProf(level.value);
        $(`label[for = "${level.name}"]`).html(`Level (+${(prof)})`);
        storeCharacterData('prof', `${prof}`);
        storeCharacterData('level', `${level.value}`);
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
    sum = parseInt(character[`${ability}`]);
    // Replaces the text in the input field with its floor value, since modifiers should only be integers.
    inputToInteger($(`input[name = "${skill[0]}-mod"]`));
    // Validates the input in modifier and then adds both the modifier and the proficiency if 
    // proficiency checkbox is "checked", or only the modifier if unchecked.
    let mod = validateSkillMod(skill[0]);
    if ($(`input[name = "${skill[0]}-prof"]`).prop("checked")) {
        sum = sum + mod + parseInt(character.prof);
        storeCharacterData(`${skill[0]}-prof`, 'checked');
        storeCharacterData(`${skill[0]}-mod`, `${mod}`);
    } else {
        sum = sum + mod;
        storeCharacterData(`${skill[0]}-prof`, 'unchecked');
        storeCharacterData(`${skill[0]}-mod`, `${mod}`);
    }
    // Adds a "+" to the modifier in the label if it is positive.
    if (sum <= 0) {
        $(`label[for = "${skill[0]}"]`).html(`${$(`label[for = "${skill[0]}"]`).attr("title")} (${(sum)})`);     
    } else {
        $(`label[for = "${skill[0]}"]`).html(`${$(`label[for = "${skill[0]}"]`).attr("title")} (+${(sum)})`); 
    }
    // Stores the value of the modifier in localStorage
    storeCharacterData(`${skill[0]}`, `${sum}`);
    acknowledgeTick($(`input[name = "${$(input).attr("name")}"]`)); 
    return false;
}

// Initialize stored variables if any.
let character = initCharacter();
initAbilityModifiers();
initAbilityScores();
initProficiencyModifier();
initCharacterModifiers();
initSkillLabels();
initSkillInputs();
initSkillCheckboxes();