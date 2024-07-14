
function addingEventListener() {
    // Select the button element by its id
    const button = document.getElementById('button');
  
    // Add event listener for 'click' event
    button.addEventListener('click', function() {
      console.log('Button clicked!'); // Example log message
      // Add your logic here for handling the click event
    });
  }
  
  // Call the function to set up the event listener
  addingEventListener();
  