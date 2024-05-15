
const scriptURL = 'https://script.google.com/macros/s/AKfycbx9UwRoietkTHs_-CBbUjMMA67lNP_od5_isFb8RM8TEjWuqEUeYyNyqmjJjxSvh5VB/exec'
const form = document.forms['Newsletter']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
     msg.innerHTML = "Thank you for Subscribing!"

     setTimeout(function(){
      msg.innerHTML = ""

     }, 5000)
     form.reset()

    })
    .catch(error => console.error('Error!', error.message))
})
