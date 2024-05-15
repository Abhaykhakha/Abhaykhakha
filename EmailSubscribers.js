
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzgDaG37H6_Cz2n465dfrDoCpL8WweOrWs1SQIy_uaBVifPUZZ1iW2FdDFy3_At66jbYA/exec'
  const form = document.forms['submit-to-google-sheet']
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
