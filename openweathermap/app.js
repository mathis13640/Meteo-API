let search = document.querySelector('#keyword');
const button = document.querySelector('#bouton');
const liste = document.querySelector('#list');
const body = document.querySelector('body');
button.addEventListener('click', (event)=>{
    event.preventDefault();
    let recherche = search.value;
    liste.innerHTML = "";
    let url = 'http://api.openweathermap.org/data/2.5/weather?q='+recherche+'&units=metric&appid=bfe0f70e0b20b22795cd09a72dc6dc9a&lang=fr';

    
    fetch(url)
    .then(response => response.json())
    .then( (data) => {
                liste.insertAdjacentHTML('beforeend', `
                   <li>
                      <p>${data.main.temp}</p>
                   </li>`);

   if(data.main.temp <= 0){
           body.style.backgroundImage = "url('hiver.jpg')"         }

         else if (data.main.temp < 20){
            body.style.backgroundImage = "url('printemps.jpg')";
        }

        else if (data.main.temp > 20){
            body.style.backgroundImage = "url('été.jpg')";

        }
            
                });
                search.value = "";

           
        });

        