let mailto = "";

function mail(form) {
    let request = form.request.value;
    let name = form.name.value;
    let email = form.emailAddress.value;
    let phone = form.phoneNumber.value;

    let street = form.streetAddress.value;
    let city = form.city.value;
    let state = form.state.value;
    let zip = form.zip.value;
    let message = form.message.value;

    mailto = "mailto:jrt6787@gmail.com?subject=Customer Web Request&body=";
    if (name.length > 0) {
        mailto += "Hi my name is " + name + ", ";
    }

    mailto += "%0D%0A%0D%0AReason for Request: " + request;

    if (email.length > 0) {
        mailto += "%0D%0AEmail: " + email;
    }

    if (phone.length > 0) {
        mailto += "%0D%0APhone: " + phone;
    }

    mailto += "%0D%0A";

    if (street.length > 0) {
        mailto += "%0D%0AStreet: " + street;
    }

    if (city.length > 0) {
        mailto += "%0D%0ACity: " + city;
    }
    if (state.length > 0) {
        mailto += "%0D%0AState: " + state;
    }
    if (zip.length > 0) {
        mailto += "%0D%0AZip Code: " + zip;
    }
    if (message.length > 0) {
        mailto += "%0D%0A%0D%0AMessage or Comment: " + message;
    }

    // Set the mailto body/subject to button to be ready to send
    document.getElementById('send').href = str;
}

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("emailAddress").value;
    let phone = document.getElementById("phoneNumber").value;
    let failure = false;

    if (name.length === 0) {
        failure = true;
        alert("Please include your name as part of the request.")
    }

    else if (email.length === 0 && phone.length === 0) {
        failure = true;
        alert("Please provide at least one method of contact (phone or email address).")
    }

    if (failure === false) {
        window.location.assign(mailto)
    }
}