fetch ('https://restcountries.com/v2/all')
    .then (res => res.json())
    .then (data => showCountries(data))


const showCountries = countries => {
    const countriesWrapper = document.getElementById('countries-wrapper');
    countries.forEach(country => {
        const container = document.createElement('div');
        container.classList.add('country');
        container.innerHTML = `<img style="width:50px; margin-bottom:10px" src= ${country.flag}>`;
        const countryName = document.createElement('h3');
        countryName.innerText = `${country.name}`;
        container.appendChild(countryName);
        const capital = document.createElement('h5');
        capital.innerText = `${country.capital}`;
        container.appendChild(capital);
        const language = document.createElement('p');
        language.innerText = `Language: ${country.languages[0].name}`;
        container.appendChild(language);
        const currency = document.createElement('p');
        const curren = ()=> {
            let cu = '';
            if(country.currencies){
                cu = country?.currencies[0].name;
            } 
            return cu;
        }
        currency.innerText = `Currency: ${curren()}`;
        container.appendChild(currency);


        
        

        
        countriesWrapper.appendChild(container);
    })
    
    
}


// <h6>Capital: ${country.capital}</h6>
            // <p><strong>Language:</strong> ${country.languages.ben}</p>
            // <p><strong>Currency:</strong> ${country.currencies[0]}</p>
            // <p><strong>Population:</strong> ${country.population}</p>