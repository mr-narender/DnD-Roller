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
            intro: 'This is it, adventurer. Once your character is set up you are ready to explore the brand new world laid around you. Best of luck, and may your rolls be plenty.<br> <img style="width: 120px; height: 100px;" src="assets/images/dm.png" alt="DM">'
        }]
    });
    tutorial.start();
}


