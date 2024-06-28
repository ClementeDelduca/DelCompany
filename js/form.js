document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Perform form validation (can be expanded as needed)
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (name && email && message) {
        // Normally, here you would send the form data to the server
        // For demonstration purposes, we will just display a success message
        document.getElementById('form-response').textContent = 'Message sent successfully!';
        
        // Reset form
        document.getElementById('contact-form').reset();
    } else {
        document.getElementById('form-response').textContent = 'Please fill out all fields.';
        document.getElementById('form-response').style.color = 'red';
    }
});
