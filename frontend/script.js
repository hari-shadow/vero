document.getElementById('startButton').addEventListener('click', function() {
    // Show a loading message
    const statusMessage = document.getElementById('statusMessage');
    statusMessage.textContent = 'Starting the recording...';

    // Make an API call to the backend to start the recording
    fetch('/api/start-record', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ action: 'start' })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            statusMessage.textContent = 'Recording started successfully. Your video will be saved to Google Drive.';
        } else {
            statusMessage.textContent = 'An error occurred: ' + data.message;
        }
    })
    .catch(error => {
        statusMessage.textContent = 'An error occurred: ' + error.message;
    });
});
