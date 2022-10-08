"use strict";

// DARK MODE TOGGLE FUNCTION
function darkModeBody(){
    var darkModeBody = document.body;
    var darkModeHeader = document.getElementById("header");
    var darkModeFooter = document.getElementById("footer");
    var darkModeGame = document.getElementById("game");

    darkModeBody.classList.toggle("darkBody");
    darkModeHeader.classList.toggle("darkHeader");
    darkModeFooter.classList.toggle("darkFooter");
    darkModeGame.classList.toggle("darkGameText");
}

// PRODUCT DISPLAY FUNCTIONS
function georgeDisplay() {
    document.getElementById("displayImage").src = "images/faith.jpg";
    document.getElementById("displayHeading").innerHTML= "<h3>Faith <span class=\"artistName\">George Michael</span></h3>";
    document.getElementById("displayInfo").innerHTML= "<p>Throwback to October 30th, 1987 when George Michael, released his first studio album, <span class=\"stylizedText\">Faith</span>, since departing from the pop-duo <span class=\"stylizedText\">Wham!</span> and becoming a solo act. The debut album would go on to sell over 25 million copies internationally, solidifying it as one of the best selling albums of all time.<br><span class=\"grayText\">Genres : Pop / Pop-rock / Soul</span></p>"
}
function mariahDisplay() {
    document.getElementById("displayImage").src = "images/butterfly.jpg";
    document.getElementById("displayHeading").innerHTML= "<h3>Butterfly <span class=\"artistName\">Mariah Carey</span></h3>";
    document.getElementById("displayInfo").innerHTML= "<p>Throwback to September 10, 1997 when Mariah Carey, released her sixth studio album, <span class=\"stylizedText\">Butterfly</span>, fresh on the heels of her divorce from Sony Music executive, Tommy Mottola. The album features Mariah's signature breathy vocals and poetic ballads, but experiments with more of an R&B / Hip-hop soundscape.<br><span class=\"grayText\">Genres : Pop / R&B / Hip-Hop</span></p>"
}
function amyDisplay() {
    document.getElementById("displayImage").src = "images/frank.jpg";
    document.getElementById("displayHeading").innerHTML= "<h3>Frank <span class=\"artistName\">Amy Winehouse</span></h3>";
    document.getElementById("displayInfo").innerHTML= "<p>Throwback to October 20, 2003 when Amy Winehouse, released her first studio album, <span class=\"stylizedText\">Frank</span>. The album is often overshadowed by Amy's more commericially successful sophmore album, <span class=\"stylizedText\">Back to Black</span>, but it's chock-full of many hidden gems that give her later hits a run for their money.<br><span class=\"grayText\">Genres : Jazz / R&B / Soul</span></p>"
}

// GAME FUNCTION
function guessingGame() {
    var userNumber = document.getElementById("gameNumber").value;
    var randomNumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    var output = "";
    var gameMessage = document.getElementById("gameMessage");

    if (userNumber == randomNumber){
        output =`<p><span class="boldText">Your Number:</span> ${userNumber}<br><span class="boldText">Winning Number:</span> ${randomNumber} <br><span class="stylizedText">You win 10% OFF!</span><br><p>`;
        gameMessage.innerHTML = output;
    }else {
        output =`<p><span class="boldText">Your Number:</span> ${userNumber}<br><span class="boldText">Winning Number:</span> ${randomNumber} <br><span class="stylizedText">Sorry, guess again.</span><br><p>`;
        gameMessage.innerHTML = output;
    }
}

//FORM VALIDATION
function validateForm(){
    var firstNameInput = document.getElementById("firstName");
    var firstNameError = document.getElementById("firstNameError");

    var lastNameInput = document.getElementById("lastName");
    var lastNameError = document.getElementById("lastNameError");
    
    var emailInput = document.getElementById("email");
    var emailError = document.getElementById("emailError");
    
    var phoneNumInput = document.getElementById("phoneNumber");
    var phoneNumError = document.getElementById("phoneNumberError");

    var preferEmail = document.getElementById("preferEmail");
    var preferPhone = document.getElementById("preferPhone");
    var methodError = document.getElementById("methodError");

    var messageInput = document.getElementById("message");
    var messageError = document.getElementById("messageError");

    var validMessage = document.getElementById("validSubmitMessage");


    var form = document.getElementById("form");

    //PREVENT PAGE FROM SUBMITTING IF ERRORS ARE PRESENT
    form.addEventListener("submit", (e) => {
        let formData = {};
        let output = "";
        let formIsValid = true;
        
        if (firstNameInput.value === "" || firstNameInput.value.length === 0) {
            firstNameError.innerHTML="<p class=\"orangeText\">First name is required</p>";
            formIsValid = false;
        }else{
            firstNameError.innerHTML="<p class=\"orangeText\"></p>";
        }

        if (lastNameInput.value === "" || lastNameInput.value.length === 0) {
            lastNameError.innerHTML="<p class=\"orangeText\">Last name is required</p>";
            formIsValid = false;
        }else{
            lastNameError.innerHTML="<p class=\"orangeText\"></p>";
        }

        if (preferEmail.checked == false && preferPhone.checked == false){
            methodError.innerHTML="<p class=\"orangeText\">Selection is required</p>";
            formIsValid = false;
        }else{
            methodError.innerHTML="<p class=\"orangeText\"></p>";
        }

        if (preferEmail.checked == true && emailInput.value === ""){
            emailError.innerHTML="<p class=\"orangeText\">You prefer email, hence this field is required</p>";
            formIsValid = false;
        }else{
            emailError.innerHTML="<p class=\"orangeText\"></p>";
        }

        if (preferPhone.checked == true && phoneNumInput.value === ""){
            phoneNumError.innerHTML="<p class=\"orangeText\">You prefer phone, hence this field is required</p>";
            formIsValid = false;
        }else{
            phoneNumError.innerHTML="<p class=\"orangeText\"></p>";
        }

        if (messageInput.value === "") {
            messageError.innerHTML="<p class=\"orangeText\">You forgot to leave us a message</p>";
            formIsValid = false;
        }else{
            messageError.innerHTML="<p class=\"orangeText\"></p>";
        }

        e.preventDefault();


        //IF FORM IS VALID STORE INPUTS INTO OBJECT (formData) AND DISPLAY THANK YOU MESSAGE / FORM DATA
        if (formIsValid) {

            formData = {
                firstName: firstNameInput.value,
                lastName: lastNameInput.value,
                preferEmailMethod: preferEmail.checked,
                preferPhoneMethod: preferPhone.checked,
                email: emailInput.value,
                phoneNumber: phoneNumInput.value,
                message: messageInput.value
            };

            output = `<p class=\"orangeText\">Thank you for your submission!<br> First Name: ${formData.firstName}<br> Last Name: ${formData.lastName}<br> Prefers Email: ${formData.preferEmailMethod}<br> Prefers Phone: ${formData.preferPhoneMethod}<br> Email: ${formData.email}<br> Phone Number: ${formData.phoneNumber}<br> Message: ${formData.message}<br></p>`;

            firstNameError.remove();
            lastNameError.remove();
            methodError.remove();
            emailError.remove();
            phoneNumError.remove();
            messageError.remove();

            validMessage.innerHTML = output;
            form.reset();
        }

    })

}

