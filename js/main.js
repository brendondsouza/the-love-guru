
document.querySelector('button').addEventListener('click', getFood)

function getFood(){
  let first = document.querySelector('#one').value.toLowerCase()
  let second = document.querySelector('#two').value.toLowerCase() 

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com',
      'X-RapidAPI-Key': '5c4fc07fd4msh7315cb232744d50p1a82f2jsne5e9215de426'
    }
  };
  
  fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${first}&fname=${second}`, options)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      console.log(response.percentage)
      document.querySelector('h2').innerText = response.percentage
      document.querySelector('.verdict').innerText = response.result
    })
    .catch(err => console.error(err));






  // // const options = {
  // //   method: 'GET',
  // //   headers: {
  // //     'X-RapidAPI-Host': 'currencyconverter.p.rapidapi.com',
  // //     'X-RapidAPI-Key': '5c4fc07fd4msh7315cb232744d50p1a82f2jsne5e9215de426'
  // //   }
  // // };
  
  // fetch('https://currencyconverter.p.rapidapi.com/availablecurrencies')
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));





// fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + choice)
// .then(res => res.json()) // parse response as JSON
// .then(data => {
//   console.log(data.meals[0])
//   document.querySelector('h2').innerText = data.meals[0].strMeal
//   document.querySelector('img').src = data.meals[0].strMealThumb
//   document.querySelector('.recipe').innerText = data.meals[0].strInstructions

// })
// .catch(err => {
//     console.log(`error ${err}`)
// });


}