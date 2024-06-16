 let api = '426f0157';
const button = document.querySelector('button');
const text = document.querySelector('#text');
var boxoffice = document.querySelector('#boxoffice');
var awards = document.querySelector('#awards');
var director = document.querySelector('#director');
var writers = document.querySelector('#writers');
var yeard = document.querySelector('#year');





  // http://www.omdbapi.com/?apikey=[426f0157]&


  button.addEventListener('click', function(){
    fetch(`http://www.omdbapi.com/?apikey=${api}&t=` + text.value)
    .then(res => res.json())
    .then(data => {
        var money = data['BoxOffice']
        var awar = data['Actors']
        var dir = data['Director']
        var writ = data['Writer']
        var year = data['Year']

        boxoffice.innerHTML= `Box Office: ${money}`;
        awards.innerHTML = `Cast: ${awar}`
        director.innerHTML = `Director: ${dir}`
        writers.innerHTML = `Story by: ${writ}`
        yeard.innerHTML = `Release date: ${year}`
        console.log(data);
    })
});