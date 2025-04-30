const button = document.getElementById('animateBtn');
const themePicker = document.getElementById('themePicker');

// Apply stored theme on page load
window.onload = function () {
  const storedColor = localStorage.getItem('btnColor');
  if (storedColor) {
    button.style.backgroundColor = storedColor;
    themePicker.value = storedColor;
  } else {
    // Default color if nothing in localStorage
    button.style.backgroundColor = '#3498db';
  }
};

// Store user-selected color and apply it to button
themePicker.addEventListener('change', () => {
  const selectedColor = themePicker.value;
  button.style.backgroundColor = selectedColor;
  localStorage.setItem('btnColor', selectedColor);
});

// Animate button on click
button.addEventListener('click', () => {
  button.classList.add('animate');

  // Remove animation class after it's done
  setTimeout(() => {
    button.classList.remove('animate');
  }, 500);
});
