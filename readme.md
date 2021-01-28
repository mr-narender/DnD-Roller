# DnD Roller

![Am I responsive](docs/readme/am-i-responsive.png)

## User Experience (UX)

---

-   ### User stories

    -   #### As a player I need to:

        - Be able to roll dice for attack, damage, and skill rolls.
        - Be able to easily tell if my dice rolls are either the best or the worst.
        - Be able to store my character's stats so I can easily return to it between sessions.
        - Be able to understand the interface if I don't have much experience with DnD.
        - Be able to send feedback back to the developer in case I need anything else readily available in my dice roller.

-   ### Design
    -   #### Colour Scheme
        The main colours used throughout the page are: 
        -   **ghostwhite** for most of the text and button mouseovers.
        -   **#red** for the burger menu title and the button menu borders. 
        -   **#lightgray** for most of the buttons. 
          
        All of these are contrasted with ***black scales*** in the background, most of the interface is designed around an elegant dark mode, while keeping some of the iconic red, the colorful dice often found in shops, and the black dragon scales to further depict the fantasy around the game.

    -   #### Typography
        -   Two main fonts were chosen for this page: 
            -   **"Dalelands Uncial Bold"** for the nav buttons and menus with **"sans-serif"** as a fallback, this was a throwback to fonts used in older Dungeons and Dragons books. 
            -   **"Draconis Regular"** for the rest of the text, with **"sans-serif"** as fallback, this gives the page a stylish fantasy feel while remaining legible enough.
            
    -   #### Imagery
        -   Coloured dice were chosen to break the monotone design and enhance the fun appearance of the tool. 
        -   A blindfolded oracle was introduced as the character that guides users through the tutorial, mimicking an interaction that could be found within the game.

*   ### Wireframes

    -   Mobile Wireframe - [View](https://github.com/JuanBrachoDev/DnD-Roller/tree/master/docs/wireframes/mobile)

    -   Desktop Wireframe - [View](https://github.com/JuanBrachoDev/DnD-Roller/tree/master/docs/wireframes/desktop)

## Features

---

-   ### Menu
       Allows the user to easily navigate from page to page. Showcases a burger menu for smaller devices, while showing a three-button menu for larger ones.

-   ### Attack Roll
       Grants the ability to roll an *attack-roll*, it rolls 1d20 (one twenty-sided die) by default and allows the user to choose different modifiers to add, including *advantage*/*disadvantage* on the roll, which rolls twice and picks the bigger/smaller roll, respectively.

-   ### Free Roll
       Provides the user the means to select and roll any combination of dice that the user needs, and finally add the modifiers required.

-   ### Dice Buttons
       Allows users to add/remove dice, and clear the dice selection with buttons, instead of manually typing a number. 

-   ### Modifiers
       Plenty of the most common modifiers are selectable from the roller page, some fetch information stored in the character sheet page, like the *ability score* modifiers and *proficiency* modifier. A general modifier can be typed in directly from the roller page. As well as the option of *advantage* and *disadvantage* for *attack-rolls*.

-   ### Tutorials
       Both the roller and character sheet pages feature an interactive tutorial that gives unfamiliar users a quick rundown of the page, its parts, and functions.

-   ### Character Sheet
       Gives users a small and simple character sheet where they can store core information about their characters, so modifiers and other calculations are done automatically. The character sheet is stored in ***Local Storage*** so the character's data is saved between different sessions.

-   ### Send Feedback
       Enables users to send a message to the developer in case bugs are found, or any suggestions/ideas surge for the project.

## Technologies Used

---

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries & Programs Used

1. [Bootstrap 4.4.1:](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
    - Bootstrap was used to assist with the responsiveness and styling of the website.
1. [Chrome DevTools:](https://developers.google.com/web/tools/chrome-devtools)
    - Chrome's DevTools were used throughout the project to test the layout and make the necessary adjustments.
1. [Font Space:](https://www.fontspace.com/)
    - Font Space was used to download the 'Dalelands Uncial Bold' and 'Draconis Regular' fonts which are used on all pages.
1. [Font Squirrel:](https://www.fontsquirrel.com/tools/webfont-generator)
    - Font Squirrel was the tool used to transform the downloaded fonts into files that could be added to the project.
1. [Font Awesome:](https://fontawesome.com/)
    - Font Awesome was used to add icons like the ones used in the add/remove buttons, and the tutorial floating action button.
1. [EmailJS:](https://www.emailjs.com/)
    - Service used to enable the email functionality of the Send Feedback page.
1. [Intro.js:](https://introjs.com/)
    - Library used to create the interactive tutorial for the roller and character sheet pages.
1. [Game-Icons:](https://game-icons.net/)
    - Tool used to create the dice logos.
1. [jQuery:](https://jquery.com/)
    - jQuery was used to enhance JavaScript code, providing useful methods and selectors to it.
1. [Git:](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
1. [GitHub:](https://github.com/)
    - GitHub is used to store the project's code after being pushed from Git.
1. [Balsamiq:](https://balsamiq.com/)
    - Balsamiq was used to create the [Mobile](https://github.com/JuanBrachoDev/DnD-Roller/tree/master/docs/wireframes/mobile) and [Desktop](https://github.com/JuanBrachoDev/DnD-Roller/tree/master/docs/wireframes/desktop) wireframes during the design process.
1. [Am I responsive:](http://ami.responsivedesign.is/)
    - Used to efficiently test different responsive layouts and provide the header image in the readme file.
1. [Dillinger:](http://dillinger.io/)
    - Markdown editor used to create the readme file.

## Testing

---
You can access the testing document by clicking [Here](https://github.com/JuanBrachoDev/DnD-Roller/tree/master/docs/readme/testing.md).

## Deployment

---

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [DnD-Roller GitHub Repository](https://github.com/JuanBrachoDev/DnD-Roller)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://juanbrachodev.github.io/DnD-Roller/) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/JuanBrachoDev/DnD-Roller)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/JuanBrachoDev/DnD-Roller)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/JuanBrachoDev/DnD-Roller
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/JuanBrachoDev/DnD-Roller
> Cloning into `DnD-Roller`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## Credits

---

### Code

-   [Bootstrap4](https://getbootstrap.com/docs/4.4/getting-started/introduction/): Bootstrap Library used throughout the project mainly to make the site responsive using the Bootstrap Grid System.
-   [Markdown Guide](https://www.markdownguide.org/): As a guide to create the readme file.
-   [Code Institute](https://codeinstitute.net/): As a general point of reference.
-   [Stack Overflow](https://stackoverflow.com/): As a general point of reference.
-   [W3Schools](https://www.w3schools.com/): As a general point of reference.

### Content

-   [Dungeons & Dragons Dice Roller](https://www.wizards.com/dnd/dice/dice.htm) Inspiration for the project's theme.
-   [Dungeons & Dragons](https://dnd.wizards.com/) All Dungeons and Dragons assets are property of Wizards of the Coast. You may find the Open Game License [Here](https://github.com/JuanBrachoDev/DnD-Roller/tree/master/docs/readme/open-game-license.md).

### Media

-   'Dalelands Uncial Bold' and 'Draconis Regular' fonts: Personal licenses found under [Font Space](https://www.fontspace.com/category/dungeons-and-dragons).
-   DM Image: “Oracle Portrait” (c) by Justin Nichol is licensed under (CC BY-SA 3.0), content found in [OpenGameArt.Org](https://opengameart.org/content/oracle-portrait).
-   Black Scales Background Image: “Black Scales” (c) by Alex Parker is licensed under (CC BY-SA 3.0), content found in [Toptal.com](https://www.toptal.com/designers/subtlepatterns/black-scales/).
-   All Dice Images: “38 Dice icons” (c) by Game-Icons.net is licensed under (CC BY 3.0), content found in [Game-icons.net](https://game-icons.net/tags/dice.html).

### Acknowledgements

-   My Mentor Narender for continuous helpful feedback.
