
let input = document.getElementById('inputField');
let cardDiv = document.getElementById(`sectionNews`);


const searchNews =async () => {
    cardDiv.innerHTML = ""
    const API_KEY = `
https://newsapi.org/v2/everything?q=${input.value}&from=2024-11-10&sortBy=publishedAt&apiKey=fa47f17262f4488488e3aa7f348d17c4`
    fetch(API_KEY)
    .then((res) => res.json())
    .then((data) =>{
        console.log(data);
        data.articles.map((e, i) => {
            // console.log(e);
           cardDiv.innerHTML += `<div class="card" style="width: 18rem;">
                <img src=${e.urlToImage} class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${e.title}</h5>
                <p class="card-text">${e.description}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>`;

                input.value = "";

          });
        
    }).catch((err) =>{
        console.log(err.message);
        
    })

}


