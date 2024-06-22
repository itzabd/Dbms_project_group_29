document.addEventListener('DOMContentLoaded', function() {
    // Attach the event listener to the dynamically added form
    const form = document.getElementById('vaccineForm');
    const tableBody = document.getElementById('vaccineTableBody');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const patientName = document.getElementById('patientName').value;
        const vaccineName = document.getElementById('vaccineName').value;
        const doseNumber = document.getElementById('doseNumber').value;
        const timeDate = document.getElementById('timeDate').value;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${patientName}</td>
            <td>${vaccineName}</td>
            <td>${doseNumber}</td>
            <td>${new Date(timeDate).toLocaleString()}</td>
        `;

        tableBody.appendChild(row);

        form.reset();
    });
});
