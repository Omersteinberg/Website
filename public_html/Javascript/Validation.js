function validation() {
    event.preventDefault()

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    let isValid = true;

    if (name === "") {
        document.getElementById("nameError").innerText = "You did not enter your name";
        document.getElementById("nameError").style.color = "red";
        isValid = false;
    } else {
        document.getElementById("nameError").innerText = "Valid";
        document.getElementById("nameError").style.color = "green";
    }

    if (email === "") {
        document.getElementById("emailError").innerText = "You did not enter your email";
        document.getElementById("emailError").style.color = "red"; // Set to red for error
        isValid = false;
    } else {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            document.getElementById("emailError").innerText = "Must be a correct email address";
            document.getElementById("emailError").style.color = "red";
            isValid = false;
        } else {
            document.getElementById("emailError").innerText = "Valid";
            document.getElementById("emailError").style.color = "green";
        }
    }

    if (phone === "") {
        document.getElementById("phoneError").innerText = "You did not enter a phone number";
        document.getElementById("phoneError").style.color = "red";
        isValid = false;
    } else {
        const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(phone)) {
            const invalid = phone.match(/[^0-9]/);
            if (invalid) {
                document.getElementById("phoneError").innerText = `Contains character: '${invalid[0]}' Numbers only!`;
                document.getElementById("phoneError").style.color = "red";
            } else {
                document.getElementById("phoneError").innerText = "Phone number must be exactly 10 digits";
                document.getElementById("phoneError").style.color = "red";
            }
            isValid = false;
        } else {
            document.getElementById("phoneError").innerText = "Valid";
            document.getElementById("phoneError").style.color = "green";
        }
    }

     // If all fields are valid, allow the form submission to proceed
     //This just simply refreshes the page
     if (isValid) {
        document.querySelector("form").submit();
    }
}