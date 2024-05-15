
const scriptURL = 'https://script.google.com/macros/s/AKfycbz6sSksMLPxgNLEwYmD3j3d9nS6sDDBcH0u2QtWBfwv6ZZzpZsah3vPjpfkrdbCxZxjKw/exec'
const form = document.forms['contact-us-form']
const msg = document.getElementById("contact-us-form-msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
     msg.innerHTML = "Thank you for Contact Us!"

     setTimeout(function(){
      msg.innerHTML = ""

     }, 5000)
     form.reset()

    })
    .catch(error => console.error('Error!', error.message))
})
