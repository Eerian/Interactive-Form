//start page with name field selected.
const nameField = document.querySelector('#name');
nameField.focus();

//hide input field when the option "other" is selected in job role.
const otherTitle = document.querySelector('#other-title');
otherTitle.style.display = 'none';


//select and loop through all job titles 
let allTitles = document.querySelectorAll('#title');

for (let i = 0; i < allTitles.length; i++) {
    allTitles[i].addEventListener('change', (event) => {
        //show input field if job title "other" is selected in job role.
        if (event.target.value == 'other') {
            otherTitle.style.display = '';
        } else {
            otherTitle.style.display = 'none';
        }
    });
}


//select design themes
const designs = document.querySelectorAll('#design');
//select all colors
const colors = document.querySelectorAll('#color');
//select the parent div of all colors 
const allColorsParentDiv = document.querySelector('#colors-js-puns select');
//select the colors for IloveJS theme
const iLoveJSThemeColors = document.querySelectorAll('#color option:nth-child(n+4)');
//select the colors for JS Puns theme
const jsPunsThemeColors = document.querySelectorAll('#color option:nth-child(-n+3)');

//loop through design themes
for (let i = 0; i < designs.length; i++) {
    designs[i].addEventListener('change', (event) => {
        //if the theme selected is JS PUNS, loop thru ILoveJS colors and remove them.
        //then add JS PUNS colors.
        if (event.target.value == 'js puns') {
            for (let i = 0; i < iLoveJSThemeColors.length; i++) {
                allColorsParentDiv.removeChild(iLoveJSThemeColors[i]);
                allColorsParentDiv.appendChild(jsPunsThemeColors[i]);
            }
            //or if theme selected is ILoveJS loop thru the JS PUNS colors and remove them
            //then add the ILoveJS colors.   
        } else if (event.target.value == 'heart js') {
            for (let i = 0; i < jsPunsThemeColors.length; i++) {
                allColorsParentDiv.removeChild(jsPunsThemeColors[i]);
                allColorsParentDiv.appendChild(iLoveJSThemeColors[i]);
            }
        }
    });
}


// const allActivities = document.querySelectorAll('.activities input');
// console.log(allActivities);

// // allActivities.addEventListener('change', (event) => {
// //     const isChecked = event.target.checked;
// //     if (isChecked) {
// //         for (let i = 0; i < allActivities.length; i++) {

// //         }
// //     } else {

// //     }

// // });