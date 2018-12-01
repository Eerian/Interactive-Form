//start page with name field selected.
const nameField = document.querySelector('#name');
nameField.focus();



/***JOB ROLE SECTION ******/

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

/******T-SHIRT INFO SECTION **********************************************************************/

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
            //if no theme is selected display all colors
        } else if (event.target.value == 'Select Theme') {
            allColorsParentDiv.appendChild(iLoveJSThemeColors[i]);
            allColorsParentDiv.appendChild(jsPunsThemeColors[i]);
        }
    });
}


/***REGISTER FOR ACTIVITIES SECTION ************************************************************/
const allActivities = document.querySelectorAll('.activities input');
const activitiesDiv = document.querySelector('.activities');
//create a div to store total cost of activities
let totalDiv = document.createElement('div');

// Keeps tract of activities costs
let totalCost = 0;

// loop thru all activities inputs and add event listeners to all
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


/***PAYMENT INFO SECTION **************************************************************************/

const allPaymentOptions = document.querySelector('#payment');
const creditCard = document.querySelector('#credit-card');
//select paypal and bitcoin divs
const paypalAndBitcoin = document.querySelectorAll('div p');
const paypal = paypalAndBitcoin[0];
const bitcoin = paypalAndBitcoin[1];

//functions for hiding and showing payment options
const hide = (payment) => payment.style.display = 'none';
const show = (payment) => payment.style.display = 'block';


// Make credit card as default payment selection
allPaymentOptions.selectedIndex = '1';
hide(paypal);
hide(bitcoin);

for (let i = 0; i < allPaymentOptions.length; i++) {
    allPaymentOptions.addEventListener('change', (event) => {
        if (event.target.value == 'credit card') {
            hide(paypal);
            hide(bitcoin);
            show(creditCard);
        } else if (event.target.value == 'paypal') {
            show(paypal);
            hide(bitcoin);
            hide(creditCard);
        } else if (event.target.value == 'bitcoin') {
            show(bitcoin);
            hide(paypal);
            hide(creditCard);
        }
    });
}


/***VALIDATIONS SECTION **************************************************************************/

const submitButton = document.querySelector('button');
const email = document.querySelector('#mail');
//select all children within the Basic Info section
const basicInfoFieldset = document.querySelectorAll('fieldset')[0];
//select all children within the Activities Section
const activitiesFieldset = document.querySelectorAll('fieldset')[2];
// Select email label to insert error message for "name" before it.
//also used to turn email red if needed
const emailLabel = document.querySelectorAll('fieldset :nth-child(4)')[0];
//Select Job Role label to insert error message for "email" before it.
const jobRoleLabel = document.querySelectorAll('fieldset :nth-child(6)')[0];
//select Register for Activities title to insert error message for activities after it.
const regForActivities = document.querySelector('.activities :nth-child(2)');




const styleError = (p) => {
    //styles for the error message.
    p.style.marginTop = "-10px";
    p.style.paddingBottom = "10px";
    p.style.paddingTop = "5px";
    p.style.background = "pink";
    p.style.color = "red";
}

const makeRed = (label) => {
    label.style.color = 'red';
}

//*** */ Validate name
//select Name label to turn red if error
const nameLabel = document.querySelector('label[for=name]');

const checkName = (name) => {
    const nameInput = /^[A-Za-z//]+$/;
    if (nameInput.test(name) == false) {
        //create an error paragraph
        const p = document.createElement('p');
        p.innerText = 'Name must not be left empty and must contain only letters!';
        //styles for the error message.
        //make name and error message red
        makeRed(nameLabel);
        styleError(p);
        //insert error message right on top of email: so it shows under Name:
        basicInfoFieldset.insertBefore(p, emailLabel);
    }
}

//*** */ Validate Email
//select email label to turn red in case of error

const checkEmail = (email) => {
    //regex to accept (letters, numbers, . and _ symbols before @ sign)
    //and to accept (letters, numbers, . and _ symbols after @ sign)
    //then accept (.) then after the (.) accept letters only from 2-4 letters long.
    const emailInput = /^[a-zA-Z0-9._]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,4}$/;
    if (emailInput.test(email) == false) {
        //create an error paragraph
        const p = document.createElement('p');
        p.innerText = 'Email must be in a "name@email.com" format!';

        //styles for the error message
        makeRed(emailLabel);
        styleError(p);

        //insert error message right on top of Job Role: so it shows under Email:
        basicInfoFieldset.insertBefore(p, jobRoleLabel);
    }
}

//*** /Validare if at least one checkBox is checked.

//select Register for Activities label to turn red in case of error.
const regForActivitiesLabel = document.querySelector('.activities legend');

const validateCheckBox = () => {
    for (let i = 0; i < allActivities.length; i++) {
        if (allActivities[i].checked) {
            return true;
        }
    }
    //create error message
    const p = document.createElement('p');
    p.innerText = 'Select at least one activity';
    //styles for the error message.
    makeRed(regForActivitiesLabel);
    styleError(p);

    //insert error message below Register For Activities
    activitiesFieldset.insertBefore(p, regForActivities);
}




//*** */Validate Credit Card
const creditCardNumber = document.querySelector('#cc-num');
const zipcode = document.querySelector('#zip');
const securityCode = document.querySelector('#cvv');

//Select labels to turn red in case of error
const cardNumberLabel = document.querySelector('label[for=cc-num]');
const zipCodeLabel = document.querySelector('label[for=zip]');
const cvvLabel = document.querySelector('label[for=cvv]');
const cardNumberDiv = document.querySelector('#credit-card div');


const checkCreditCard = (card, zip, cvv) => {
    //Accept CC numbers 13 to 16 digits long
    const creditCardInput = /^\d{13,16}$/;
    if (creditCardInput.test(card) == false) {
        //create error message
        const p = document.createElement('p');
        p.innerText = 'Please Enter Credit Card number 13-16 digits long.';

        //styles for error message
        makeRed(cardNumberLabel);
        styleError(p);

        //insert error message on top of Card Number
        creditCard.insertBefore(p, cardNumberDiv);

    }
    //Accept Zipcode 5 digits long
    const zipcodeInput = /^\d{5}$/;
    if (zipcodeInput.test(zip) == false) {
        //create error message
        const p = document.createElement('p');
        p.innerText = 'Zip Code must be 5 digits';

        //styles for error message
        makeRed(zipCodeLabel);
        styleError(p);

        //insert error on top of Zip Code
        creditCard.insertBefore(p, cardNumberDiv);
    }

    //Accept security code 3 digits long
    const securityCodeInput = /^\d{3}$/;
    if (securityCodeInput.test(cvv) == false) {
        //create error message
        const p = document.createElement('p');
        p.innerText = 'CVV Code must be 3 digits';

        //styles for error message
        makeRed(cvvLabel);
        styleError(p);

        //insert error on top of cvv Code
        creditCard.insertBefore(p, cardNumberDiv);
    }

}



// Add eventListener to Submit Button
submitButton.addEventListener('click', (e) => {

    e.preventDefault();

    checkName(nameField.value);
    // checkEmail(email.value);
    // validateCheckBox();
    // if (allPaymentOptions.value == 'credit card') {
    //     checkCreditCard(creditCardNumber.value, zipcode.value, securityCode.value);
    // }

});