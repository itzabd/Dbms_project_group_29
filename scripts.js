// Function to calculate the time remaining for campaigns
function calculateTimeRemaining() {
    const rows = document.querySelectorAll('.campaign-list tbody tr');

    rows.forEach(row => {
        const startDate = new Date(row.querySelector('.start-date').innerText);
        const endDate = new Date(row.querySelector('.end-date').innerText);
        const now = new Date();

        let timeRemaining = '';

        if (now < startDate) {
            timeRemaining = `${Math.ceil((startDate - now) / (1000 * 60 * 60 * 24))} days until start`;
        } else if (now > endDate) {
            timeRemaining = 'Ended';
        } else {
            timeRemaining = `${Math.ceil((endDate - now) / (1000 * 60 * 60 * 24))} days remaining`;
        }

        row.querySelector('.time-remaining').innerText = timeRemaining;
    });
}

// Function to handle form submission
function handleFormSubmission() {
    const form = document.querySelector('.campaign-form form');
    form.addEventListener('submit', event => {
        event.preventDefault();

        const campaignName = document.getElementById('campaign-name').value;
        const campaignDescription = document.getElementById('campaign-description').value;
        const campaignStart = document.getElementById('campaign-start').value;
        const campaignEnd = document.getElementById('campaign-end').value;

        // Perform validation or send data to the server
        // For example, you can log the form data to the console
        console.log({
            campaignName,
            campaignDescription,
            campaignStart,
            campaignEnd
        });

        // Clear form after submission
        form.reset();

        // Optionally, you can add the new campaign to the campaign list dynamically
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${campaignName}</td>
            <td>${campaignDescription}</td>
            <td class="start-date">${campaignStart}</td>
            <td class="end-date">${campaignEnd}</td>
            <td>Upcoming</td>
            <td class="time-remaining"></td>
        `;
        document.querySelector('.campaign-list tbody').appendChild(newRow);
        calculateTimeRemaining(); // Recalculate time remaining for the new campaign
    });
}

// Initialize functions on page load
document.addEventListener('DOMContentLoaded', () => {
    calculateTimeRemaining();
    handleFormSubmission();
});
