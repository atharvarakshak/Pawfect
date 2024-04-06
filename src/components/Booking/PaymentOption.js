document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('toggleButton');
  
    button.addEventListener('click', function() {
      if (button.classList.contains('green')) {
        // If the button already has the 'green' class, remove it
        button.classList.remove('green');
      } else {
        // If the button doesn't have the 'green' class, add it
        button.classList.add('green');
      }
    });
  });
