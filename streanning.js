let resultat = document.querySelector('.resultat');
let droite = document.querySelector('.arrow');
let slider = document.querySelector('.slider')
let apikey = "6c5b4f0066b10cd4b57cf6b6571c0ade";












fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false`)
.then(res => res.json())
.then(film => {
    let films = film.results
//    console.log(films.results);

   affichage(films)

} );


function affichage(films) {

    for (let i = 0; i < films.length; i++) {
        
    slider.innerHTML+= `
        <div class="card">
        
        <img  class="img-top" src="https://image.tmdb.org/t/p/w500${films[i].backdrop_path || films[i].poster_path}" /> 

        </div>
        `;
    }   
   
    }

