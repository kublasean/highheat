const checkbox = document.getElementById('hamburger-checkbox');

checkbox.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
  	document.body.classList.add("dropdown-open");
  } else {
    document.body.classList.remove("dropdown-open");
  }
});