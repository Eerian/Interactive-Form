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


const allActivities = document.querySelectorAll('.activities input');
const activitiesDiv = document.querySelector('.activities');
//create a div to store total cost of activities
let totalDiv = document.createElement('div');

//keeps tract of activities costs
let totalCost = 0;

//loop thru all activities inputs and add event listeners to all
for (let i = 0; i < allActivities.length; i++) {
    allActivities[i].addEventListener('change', (event) => {
        //create a isChecked variable to check it against activity checkboxes
        const isChecked = event.target.checked;
        //if the first checkbox is clicked and isChecked add 200 to cost.
        if (event.target == allActivities[0] && isChecked) {
            totalCost += 200;
            //if the first one is unchecked remove 200 from cost
        } else if (event.target == allActivities[0] && !isChecked) {
            totalCost -= 200;
            //if the second checkbox is clicked and isChecked add 100 to cost
        } else if (event.target == allActivities[1] && isChecked) {
            totalCost += 100;
            //disable the 4th checkbox because of time conflict and turn it gray
            allActivities[3].disabled = true;
            allActivities[3].parentNode.style.color = "gray";
            //if the second checkbox is unchecked enable the 4th checkbox and remove 100 from cost.
        } else if (event.target == allActivities[1] && !isChecked) {
            totalCost -= 100;
            allActivities[3].disabled = false;
            allActivities[3].parentNode.style.color = "";
            //THE REST OF THE STATEMENTS FOLLOW THE SAME IDEA AS ABOVE.    
        } else if (event.target == allActivities[2] && isChecked) {
            totalCost += 100;
            allActivities[4].disabled = true;
            allActivities[4].parentNode.style.color = "gray";
        } else if (event.target == allActivities[2] && !isChecked) {
            totalCost -= 100;
            allActivities[4].disabled = false;
            allActivities[4].parentNode.style.color = "";
        } else if (event.target == allActivities[3] && isChecked) {
            totalCost += 100;
            allActivities[1].disabled = true;
            allActivities[1].parentNode.style.color = "gray";
        } else if (event.target == allActivities[3] && !isChecked) {
            totalCost -= 100;
            allActivities[1].disabled = false;
            allActivities[1].parentNode.style.color = "";
        } else if (event.target == allActivities[4] && isChecked) {
            totalCost += 100;
            allActivities[2].disabled = true;
            allActivities[2].parentNode.style.color = "gray";
        } else if (event.target == allActivities[4] && !isChecked) {
            totalCost -= 100;
            allActivities[2].disabled = false;
            allActivities[2].parentNode.style.color = "";
        } else if (event.target == allActivities[5] && isChecked) {
            totalCost += 100;
        } else if (event.target == allActivities[5] && !isChecked) {
            totalCost -= 100;
        } else if (event.target == allActivities[6] && isChecked) {
            totalCost += 100;
        } else if (event.target == allActivities[6] && !isChecked) {
            totalCost -= 100;
        }
        //update total cost based on selections above
        totalDiv.textContent = "Total: " + totalCost;
        //append the totalCost to the DIV created at the bottom of the activities list.
        activitiesDiv.appendChild(totalDiv);
    });

}





















// const mainConference = document.querySelector('input[name="all"]');
// const jsFrameworks = document.querySelector('input[name="js-frameworks"]');
// const jsLibraries = document.querySelector('input[name="js-libs"]');
// const expressWorkshop = document.querySelector('input[name="express"]');
// const nodeWorkshop = document.querySelector('input[name="node"]');
// const buildTools = document.querySelector('input[name="build-tools"]');
// const npmWorkshop = document.querySelector('input[name="npm"]');