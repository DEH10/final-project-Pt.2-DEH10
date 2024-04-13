// charity_profile.js

document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the "Volunteer Now" button
    var volunteerButton = document.querySelector('#volunteer-button');
    volunteerButton.addEventListener('click', displayVolunteerForm);

    // Add event listener to display additional charity details on hover
    var charityDescription = document.querySelector('#charity-description');
    charityDescription.addEventListener('mouseover', displayAdditionalDetails);
});

// Function to display the volunteer form
function displayVolunteerForm() {
    var volunteerForm = document.querySelector('#volunteer-form');
    volunteerForm.style.display = 'block';
}

// Function to display additional charity details
function displayAdditionalDetails() {
    var additionalDetails = document.createElement('p');
    additionalDetails.textContent = "Founded in 2024, HelpHub has facilitated over $100 million in donations to various causes worldwide.";
    additionalDetails.style.color = 'blue';
    
    var charityDescription = document.querySelector('#charity-description');
    charityDescription.appendChild(additionalDetails);
}
