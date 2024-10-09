// Handle Image Upload Preview
document.getElementById('images').addEventListener('change', function(event) {
    const imagePreviewContainer = document.getElementById('image-preview');
    imagePreviewContainer.innerHTML = ''; // Clear previous preview

    const files = event.target.files;
    if (files) {
        Array.from(files).forEach(file => {
            const reader = new FileReader();
            reader.onload = function(e) {
                const imgElement = document.createElement('img');
                imgElement.src = e.target.result;
                imagePreviewContainer.appendChild(imgElement);
            };
            reader.readAsDataURL(file);
        });
    }
});

// Handle Save as Draft Button
document.querySelector('.save-btn').addEventListener('click', function() {
    alert('Project saved as draft!');
});

// Handle Form Submission (Submit for Approval)
document.getElementById('project-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // You can process the form data here (send to backend, etc.)
    alert('Project submitted for approval!');
});
