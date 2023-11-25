document.querySelector('#btn-change').addEventListener('click', () => {
  const randomNumber = Math.floor(Math.random() * (10 - 1) + 1) // This will return a random number between 1 and 10. Use randomNumber for your dynamic id
  console.log(randomNumber)
})
