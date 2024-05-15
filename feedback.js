
const scriptURL = 'https://script.google.com/macros/s/AKfycbwdS0KZwIXJp6lz7N2WVRdaJcLogfUDig0wN8VxJufkVMCXaHq6k80XFMNsbzRqGnsA/exec'
const form = document.forms['contact-us-form']
const msg = document.getElementById("contact-us-form-msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
     msg.innerHTML = "Thank you for Feedback!"

     setTimeout(function(){
      msg.innerHTML = ""

     }, 5000)
     form.reset()

    })
    .catch(error => console.error('Error!', error.message))
})
