function rollTutorial() {
    let tutorial = introJs();
    tutorial.setOptions({
        steps: [{
            intro: 'Hail adventurer, I am the DM. It seems like you need a helping hand.<br><img style="width: 120px; height: 100px;" src="/assets/images/dm.png" alt="DM">'
        }, {
            element: document.getElementsByClassName('step-1')[0],
            intro: "This is a 20 sided die, we call it a <b>'d20'</b>.",
            position: 'bottom-middle-aligned'
        }, {
            element: document.getElementsByClassName('step-2')[0],
            intro: "You can roll up to 50 <b>d20</b>s by typing the amount in the box to the left. The amount can be 0 (for no dice) up to 30.",
            position: 'bottom-middle-aligned'
        }, {
            element: document.getElementsByClassName('step-3')[0],
            intro: "Or you can add a die by clicking the add button.",
            position: 'bottom-middle-aligned'
        }, {
            element: document.getElementsByClassName('step-4')[0],
            intro: "And remove any extra dice with the remove button."
        }, {
            intro: "There are many tipe of dice, from top to bottom they are d20, d12, d10, d8, d6 and d4. Feel free to mix and match any combination of these."
        }, {
            element: document.getElementsByClassName('step-5')[0],
            intro: "This is a general modifier, use this whenever you get a brief bonus (or penalty) to one of your rolls, it will be added to the end result. It accepts numbers between -50 and 50."
        }, {
            element: document.getElementsByClassName('step-6')[0],
            intro: "By ticking the <b>Proficiency</b> box it will add the level proficiency modifier."
        }, {
            element: document.getElementsByClassName('step-7')[0],
            intro: "This is the <b>Advantage/Disadvantage</b> option, it affects attack rolls. Advantage rolls two d20s and selects the highest. Disadvantage rolls two d20s and selects the lowest."
        }, {
            element: document.getElementsByClassName('step-8')[0],
            intro: "The <b>Ability Score Modifier</b> of your choice is added to attack and free rolls."
        }, {
            element: document.getElementsByClassName('step-9')[0],
            intro: "By clicking the <b>Skills</b> button you can select any of the skills and automatically roll with it's respective modifiers."
        },  {
            element: document.getElementsByClassName('step-10')[0],
            intro: "The <b>ATK Roll</b> button rolls a single d20 with any of the modifiers and options selected."
        }, {
            element: document.getElementsByClassName('step-11')[0],
            intro: "The <b>Clear Dice</b> button resets all dice selection back to 0."
        }, {
            element: document.getElementsByClassName('step-12')[0],
            intro: "The <b>Free Roll</b> allows you to roll the dice previously selected, plus any of the options selected except for Advantage / Disadvantage."
        },  {
            element: document.getElementsByClassName('step-13')[0],
            intro: "The result section shows each dice rolled and any modifiers selected, and it shows the sum below."
        },{
            intro: 'This journey is only the start of the real one, keep your allies close and your dice closer, adventurer.<br> <img style="width: 120px; height: 100px;" src="/assets/images/dm.png" alt="DM">'
        }]
    });
    tutorial.start();
}


