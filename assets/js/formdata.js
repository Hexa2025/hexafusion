const scriptURL = 'https://script.google.com/macros/s/AKfycbzMXTPZ3p5oKHrR-bgl-fy98C_lllng1YvfSGH_VfZN3Xp4bSWtTqG16Uem_6-gCyyB/exec'

const form = document.forms['hexa-fushion-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
}) 