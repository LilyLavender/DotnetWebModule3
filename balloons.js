document.addEventListener("DOMContentLoaded", function() {
  // Array of Animate.css attention seeker animations
  const attentionSeekers = [
    "animate__bounce", "animate__flash", "animate__pulse", "animate__rubberBand", 
    "animate__shakeX", "animate__shakeY", "animate__headShake", "animate__swing", 
    "animate__tada", "animate__wobble", "animate__jello", "animate__heartBeat"
  ];

  const randomAnimation = attentionSeekers[Math.floor(Math.random() * attentionSeekers.length)];
  const greeting = document.querySelector('.greeting');
  greeting.classList.add(randomAnimation);

  const elem = document.getElementById('dob');
  const datepicker = new Datepicker(elem, {
    // options
    autohide: true,
    format: 'MM-dd'
  });

  // uncheck all boxes by default (Firefox)
  document.querySelectorAll('.form-check-input').forEach(c => c.checked = false);
  // event listener for check/uncheck
  document.getElementById('checkbox-card').addEventListener('change', function(e){
    if (e.target.classList.contains('form-check-input')) {
      const elem = document.getElementById(e.target.id + 'Img');
      elem.style.visibility = "visible";
      elem.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");
      e.target.checked ?
        elem.classList.add("animate__animated", "animate__bounceInDown") :
        elem.classList.add("animate__animated", "animate__bounceOutUp");
    }
  });

  // Toast pops up if no checkboxes are selected
  document.getElementById('submit').addEventListener('click', function(e){
    let checkboxes = document.querySelectorAll('#checkbox-card input[type="checkbox"]');
    if (!Array.from(checkboxes).some(checkbox => checkbox.checked)) {
      bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).show();
    }
  });

  // Toggler
  document.getElementById('toggler').addEventListener('click', function(e){
    this.checked = false;
    const checkboxes = document.querySelectorAll('#checkbox-card input[type="checkbox"]');
    if (e.target.dataset['toggler'] == 'enable') {
      document.getElementById('toggler-text').innerHTML = 'Disable all';
      checkboxes.forEach(c => {
        c.checked = true;
        const elem = document.getElementById(c.id + 'Img');
        elem.style.visibility = "visible";
        elem.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");
        elem.classList.add("animate__animated", "animate__bounceInDown");
      });
      e.target.dataset['toggler'] = 'disable';
    } else {
      document.getElementById('toggler-text').innerHTML = 'Enable all';
      checkboxes.forEach(c => {
        c.checked = false;
        const elem = document.getElementById(c.id + 'Img');
        elem.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");
        elem.classList.add("animate__animated", "animate__bounceOutUp");
      });
      e.target.dataset['toggler'] = 'enable';
    }
  });

  // Change h1 color
  const h1 = document.getElementsByTagName("h1")[0];
  const blue = document.querySelector(`label[for='blue']`);
  const red = document.querySelector(`label[for='red']`);
  const green = document.querySelector(`label[for='green']`);
  blue.addEventListener("mouseenter", (e) => { h1.style.color = "blue" });
  blue.addEventListener("mouseleave", (e) => { h1.style.color = "slategray" });
  red.addEventListener("mouseenter", (e) => { h1.style.color = "red" });
  red.addEventListener("mouseleave", (e) => { h1.style.color = "slategray" });
  green.addEventListener("mouseenter", (e) => { h1.style.color = "green" });
  green.addEventListener("mouseleave", (e) => { h1.style.color = "slategray" });
});

// Hide toast
document.addEventListener('keydown', function(e) {
  if (e.key === "Escape") {
      bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).hide();
  }
})