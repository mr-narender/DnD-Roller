function rollTutorial() {
    let tutorial = introJs();
    tutorial.setOptions({
        steps: [{
            intro: 'Hail adventurer, I am the DM. It seems like you need a helping hand.<br><img style="width: 120px; height: 100px;" src="assets/images/dm.png" alt="DM">'
        }, {
            element: document.getElementsByClassName('step-1')[0],
            intro: "This is a 20 sided die, we call it a <b>'d20'</b>.",
            position: 'bottom-middle-aligned'
        }, {
            element: document.getElementsByClassName('step-2')[0],
            intro: "You can roll <b>d20</b>s by typing the total of dice in the box to the left. The amount can be 0 (for no dice) up to 30.",
            position: 'bottom-middle-aligned'
        }, {
            element: document.getElementsByClassName('step-3')[0],
            intro: "Or you can add a die by clicking the add button.",
            position: 'bottom-middle-aligned'
        }, {
            element: document.getElementsByClassName('step-4')[0],
            intro: "And remove any extra dice with the remove button."
        }, {
            intro: "There are many types of dice, from top to bottom they are d20, d12, d10, d8, d6 and d4. Feel free to mix and match any combination of these."
        }, {
            element: document.getElementsByClassName('step-5')[0],
            intro: "This is a general modifier, use this whenever you get a brief bonus (or penalty) to one of your rolls, it will be added to the end result. It accepts numbers between -50 and 50."
        }, {
            element: document.getElementsByClassName('step-6')[0],
            intro: "By ticking the <b>Proficiency</b> box it will add the level proficiency modifier."
        }, {
            element: document.getElementsByClassName('step-7')[0],
            intro: "This is the <b>Advantage/Disadvantage</b> option, it affects attack rolls.<br><br> Advantage rolls two d20s and selects the highest.<br><br> Disadvantage rolls two d20s and selects the lowest."
        }, {
            element: document.getElementsByClassName('step-8')[0],
            intro: "The <b>Ability Score Modifier</b> of your choice is added to attack and free rolls."
        }, {
            element: document.getElementsByClassName('step-9')[0],
            intro: "By clicking the <b>Skills</b> button you can select any of the skills and automatically roll with it's respective modifiers."
        }, {
            element: document.getElementsByClassName('step-10')[0],
            intro: "The <b>ATK Roll</b> button rolls a single d20 with any of the modifiers and options selected."
        }, {
            element: document.getElementsByClassName('step-11')[0],
            intro: "The <b>Clear Dice</b> button resets all dice selection back to 0."
        }, {
            element: document.getElementsByClassName('step-12')[0],
            intro: "The <b>Free Roll</b> allows you to roll the dice previously selected, plus any of the options selected except for Advantage / Disadvantage."
        }, {
            element: document.getElementsByClassName('step-13')[0],
            intro: "The result section shows each dice rolled and any modifiers selected, and it shows the sum below."
        }, {
            intro: 'This journey is only the start of the real one, keep your allies close and your dice closer, adventurer.<br> <img style="width: 120px; height: 100px;" src="/assets/images/dm.png" alt="DM">'
        }]
    });
    tutorial.start();
}


function characterSheetTutorial() {
    let tutorial = introJs();
    tutorial.setOptions({
        steps: [{
            intro: 'Greetings adventurer, I am the DM. I will guide you through this quest.<br> <img style="width: 120px; height: 100px;" src="assets/images/dm.png" alt="DM">'
        }, {
            element: document.getElementsByClassName('step-1')[0],
            intro: "These is one of your <b>Ability Scores</b> for your character, they accept any value from 1 to 30, once clicked off the field they will show the modifier next to their labels."
        }, {
            element: document.getElementsByClassName('step-2')[0],
            intro: "This will calculate your <b>Proficiency Modifier</b> based on your Level, Level ranges from 1 to 20, and it will also show the modifier once clicked off."
        }, {
            element: document.getElementsByClassName('step-3')[0],
            intro: "This is your <b>Attack Roll Modifier</b>, it is reserved for more permanent bonuses like the ones coming from magic weapons or feats, the modifier can be between -50 and 50. It is added to <b>ATK Rolls</b>."
        }, {
            element: document.getElementsByClassName('step-4')[0],
            intro: "This is your <b>Damage Roll Modifier</b>, works similarly to the previous modifier, but it is added to <b>Free Rolls</b> instead."
        }, {
            element: document.getElementsByClassName('step-5')[0],
            intro: "This is one of your <b>Skills</b>, they will update their modifiers once their fields are changed."
        }, {
            element: document.getElementsByClassName('step-6')[0],
            intro: "The left box determines if you are <b>Proficient</b> in that skill (ticked) or not (unticked)."
        }, {
            element: document.getElementsByClassName('step-7')[0],
            intro: "The right one allows you to input any penalty or bonus to each skill, this number can be anywhere between -50 and 50."
        }, {
            intro: 'This is it, adventurer. Once your character is set up you are ready to explore the brand new world laid around you. Best of luck, and may your rolls be plenty.<br> <img style="width: 120px; height: 100px;" src="/assets/images/dm.png" alt="DM">'
        }]
    });
    tutorial.start();
}


