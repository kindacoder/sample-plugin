(function () {
  console.log('Plugin loaded'); // Debugging: Check if this logs in the console

  // Create the button
  const button = document.createElement('button');
  button.innerText = 'Open Popup';
  button.style.position = 'fixed';
  button.style.bottom = '20px';
  button.style.right = '20px';
  button.style.padding = '10px 20px';
  button.style.backgroundColor = '#007bff';
  button.style.color = 'white';
  button.style.border = 'none';
  button.style.borderRadius = '5px';
  button.style.cursor = 'pointer';
  button.style.zIndex = '9999';

  // Create the popup
  const popup = document.createElement('div');
  popup.style.position = 'fixed';
  popup.style.top = '50%';
  popup.style.left = '50%';
  popup.style.transform = 'translate(-50%, -50%)';
  popup.style.width = '300px';
  popup.style.padding = '20px';
  popup.style.backgroundColor = 'white';
  popup.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  popup.style.borderRadius = '8px';
  popup.style.textAlign = 'center';
  popup.style.display = 'none';
  popup.style.zIndex = '9999';

  // Add content to the popup
  const message = document.createElement('p');
  message.innerText = 'Hello! This is your popup.';
  popup.appendChild(message);

  const closeButton = document.createElement('button');
  closeButton.innerText = 'Close';
  closeButton.style.marginTop = '10px';
  closeButton.style.padding = '5px 10px';
  closeButton.style.backgroundColor = '#ff4d4f';
  closeButton.style.color = 'white';
  closeButton.style.border = 'none';
  closeButton.style.borderRadius = '5px';
  closeButton.style.cursor = 'pointer';
  popup.appendChild(closeButton);

  // Add event listeners
  button.addEventListener('click', () => {
    popup.style.display = 'block';
  });

  closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  // Add the button and popup to the DOM
  document.body.appendChild(button);
  document.body.appendChild(popup);
})();
