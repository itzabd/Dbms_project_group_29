// Sample patient data (this would typically come from a server)
const patients = [
    {
        name: "John Doe",
        nid: "12345678901234567890123",
        age: 45,
        address: "1234 Elm Street",
        dob: "1979-01-01",
        gender: "male",
        caretaker: "no",
        caretakerName: "",
        caretakerPhone: "",
        bloodPressure: "no",
        diabetic: "no",
        kidney: "no",
        heart: "no",
        moreInfo: ""
    },
    {
        name: "Jane Smith",
        nid: "98765432109876543210987",
        age: 34,
        address: "5678 Oak Street",
        dob: "1990-02-15",
        gender: "female",
        caretaker: "yes",
        caretakerName: "Jim Smith",
        caretakerPhone: "555-555-5555",
        bloodPressure: "yes",
        diabetic: "no",
        kidney: "no",
        heart: "no",
        moreInfo: "Asthma"
    }
];

// Function to display patients in the table
function displayPatients() {
    const tableBody = document.getElementById('patientTableBody');
    tableBody.innerHTML = '';

    patients.forEach((patient, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
    <td><a href="#" class="patient-link" data-index="${index}">${patient.name}</a></td>
    <td>${patient.nid}</td>
    <td>${patient.age}</td>
    <td>${patient.gender}</td>
    <td><button class="btn btn-primary view-details" data-index="${index}">View Details</button></td>
`;

        tableBody.appendChild(row);
    });

    // Add event listeners for the links and buttons
    document.querySelectorAll('.patient-link').forEach(link => {
        link.addEventListener('click', showPatientDetails);
    });

    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', showPatientDetails);
    });
}

// Function to show patient details in a modal
function showPatientDetails(event) {
    event.preventDefault();
    const index = event.currentTarget.getAttribute('data-index');
    const patient = patients[index];

    const details = `
<p><strong>Name:</strong> ${patient.name}</p>
<p><strong>NID Number:</strong> ${patient.nid}</p>
<p><strong>Age:</strong> ${patient.age}</p>
<p><strong>Address:</strong> ${patient.address}</p>
<p><strong>Date of Birth:</strong> ${patient.dob}</p>
<p><strong>Gender:</strong> ${patient.gender}</p>
<p><strong>Have a caretaker:</strong> ${patient.caretaker}</p>
${patient.caretaker === 'yes' ? `<p><strong>Caretaker Name:</strong> ${patient.caretakerName}</p><p><strong>Caretaker Phone:</strong> ${patient.caretakerPhone}</p>` : ''}
<p><strong>Blood Pressure:</strong> ${patient.bloodPressure}</p>
<p><strong>Diabetic:</strong> ${patient.diabetic}</p>
<p><strong>Kidney Diseases:</strong> ${patient.kidney}</p>
<p><strong>Heart Disease:</strong> ${patient.heart}</p>
<p><strong>More Health-Related Issues:</strong> ${patient.moreInfo}</p>
`;

    document.getElementById('patientDetails').innerHTML = details;
    $('#patientModal').modal('show');
}

// Initialize the patient list on page load
document.addEventListener('DOMContentLoaded', displayPatients);