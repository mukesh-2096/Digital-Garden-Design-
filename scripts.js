// Function to handle Sign In form submission and redirect
function handleSignIn(event) {
    event.preventDefault(); // Prevent actual form submission

    // Set login state in localStorage
    localStorage.setItem("isLoggedIn", "true");

    // Redirect to Home Page
    window.location.href = "index.html";
}

// Function to handle Sign Up form submission and redirect
function handleSignUp(event) {
    event.preventDefault(); // Prevent actual form submission

    // Validate Password and Confirm Password
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    // Set login state in localStorage
    localStorage.setItem("isLoggedIn", "true");

    // Redirect to Home Page
    window.location.href = "index.html";
}

// Function to update navigation menu based on login state
function updateNavigation() {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    // Select navigation elements
    const signInLink = document.querySelector("#signInLink");
    const signUpLink = document.querySelector("#signUpLink");
    const logoutLink = document.querySelector("#logoutLink");

    if (isLoggedIn) {
        // Hide Sign In and Sign Up links
        if (signInLink) signInLink.style.display = "none";
        if (signUpLink) signUpLink.style.display = "none";

        // Show the "Log Out" link
        if (logoutLink) logoutLink.style.display = "block";
    } else {
        // Ensure "Log Out" is hidden if not logged in
        if (logoutLink) logoutLink.style.display = "none";

        // Show Sign In and Sign Up links
        if (signInLink) signInLink.style.display = "block";
        if (signUpLink) signUpLink.style.display = "block";
    }
}

// Function to handle log out
function handleLogout() {
    // Clear login state
    localStorage.removeItem("isLoggedIn");

    // Redirect to Home Page
    window.location.href = "index.html";
}

// Function to handle Customize form submission and show selected options
document.getElementById("customizeForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission

    // Gather form data
    const gardenSize = document.getElementById("gardenSize").value;
    const plantTypes = document.getElementById("plantTypes").value;
    const features = [];
    document.querySelectorAll('input[name="features"]:checked').forEach((checkbox) => {
        features.push(checkbox.value);
    });
    const designStyle = document.getElementById("designStyle").value;

    // Show a message with the selected options
    alert(`Your garden design preferences:\n\nSize: ${gardenSize}\nPlant Types: ${plantTypes}\nFeatures: ${features.join(", ")}\nDesign Style: ${designStyle}`);

    // Optionally, store this data in localStorage or send it to a backend
});


 // JavaScript function to handle form submission in contact page
 function handleSubmit(event) {
    event.preventDefault(); // Prevent actual form submission

    // Display success message
    const successMessage = document.getElementById("successMessage");
    successMessage.style.display = "block";

    // Optionally, clear the form fields
    document.getElementById("contactForm").reset();
}