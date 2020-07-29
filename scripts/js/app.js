document.querySelector(
  'input'
).addEventListener('focus', function() {
  document.querySelector('main').innerHTML += 'input was focused'
})
