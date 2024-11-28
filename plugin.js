(function () {
  // Create the plugin container
  const pluginContainer = document.createElement('div');
  pluginContainer.id = 'simple-plugin-container';
  pluginContainer.style.position = 'fixed';
  pluginContainer.style.bottom = '20px';
  pluginContainer.style.right = '20px';
  pluginContainer.style.zIndex = '9999';

  // Create the button to trigger the popup
  const button = document.createElement('button');
  button.innerText = 'Open Popup';
  button.style.padding = '10px 20px';
  button.style.backgroundColor = '#007bff';
  button.style.color = 'white';
  button.style.border = 'none';
  button.style.borderRadius = '5px';
  button.style.cursor = 'pointer';

  // Create the popup
  const popup = document.createElement('div');
  popup.id = 'plugin-popup';
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

  // Add content to the popup
  const popupContent = document.createElement('p');
  popupContent.innerText = 'Hello! This is your popup.';
  popup.appendChild(popupContent);

  // Close button for the popup
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

  // Append elements to the container
  pluginContainer.appendChild(button);
  document.body.appendChild(pluginContainer);
  document.body.appendChild(popup);
})();
