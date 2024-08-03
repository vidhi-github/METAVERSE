(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()



let popup = document.getElementById('pop-up');

function openPopUp() {
    popup.classList.add("open-pop");
}

function closePopUp() {
    popup.classList.remove("open-pop");
}

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;

    if (!form.checkValidity()) {
        event.stopPropagation();
    } else {
        openPopUp();
        form.reset();
    }
}



