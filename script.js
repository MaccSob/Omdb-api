 let api = '426f0157';
const button = document.querySelector('button');
const addbutton = document.querySelector('#add')
const text = document.querySelector('#text');
var boxoffice = document.querySelector('#boxoffice');
var awards = document.querySelector('#awards');
var director = document.querySelector('#director');
var writers = document.querySelector('#writers');
var yeard = document.querySelector('#year');
var title = document.querySelector('#title');




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
        var titty = data['Title']
        awards.innerHTML = `Cast: ${awar}`
        director.innerHTML = `Director: ${dir}`
        writers.innerHTML = `Story by: ${writ}`
        yeard.innerHTML = `Release date: ${year}`
        boxoffice.innerHTML= `Box Office: ${money}`;
        console.log(data);
    })
});


addbutton.addEventListener('click', function(){
    fetch(`http://www.omdbapi.com/?apikey=${api}&t=` + text.value)
    .then(res => res.json())
    .then(data => {
        var money = data['BoxOffice']
        var awar = data['Actors']
        var dir = data['Director']
        var writ = data['Writer']
        var year = data['Year']
        var titty = data['Title']



        const money1 = document.createElement('h3');
        document.body.appendChild(money1)
        money1.innerHTML = ` Title - ${titty}, Main Cast: ${awar}, Directed by: ${dir}, Story by: ${writ}, Release date: ${year},  Box Office: ${money}`;





        console.log(data);
    })
});
