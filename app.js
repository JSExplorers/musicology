const togglers = document.querySelectorAll('.toggler-icon');
const collapsibles = document.querySelectorAll('.collapsible');

togglers.forEach((togller) => {
  togller.addEventListener('click', () => {
    collapsibles.forEach((collapsible) => {
      collapsible.classList.toggle('collapsible__expanded');
    });
  });
});
