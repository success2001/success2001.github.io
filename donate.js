document.getElementById('donationForm').addEventListener('submit', function(event) {
    const donationAmount = document.getElementById('donationAmount').value;

    if (donationAmount < 1) {
        alert("Please enter a valid donation amount.");
        event.preventDefault(); // Prevent form submission if validation fails
    }
});
