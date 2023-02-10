'use strict';

const btn = document.querySelector('button');
const countriesContainer = document.querySelector('.countries');
const flag = document.querySelector('.country__img');
const input=document.querySelector('input')
const errormsg=document.querySelector('h1')

///////////////////////////////////////

const getCountry=(counrty)=>{
    


fetch(`https://restcountries.com/v3.1/name/${counrty}`)
.then(response=> response.json())
.then(
    json=>{
        if(!json.message){
        const [data] = json;
        const name = data.name.common;
        const flag=data.flags.png
        const population=(data.population/1000000).toFixed(2)
        const [currency]=Object.keys(data.currencies)
        const [language]=Object.values(data.languages)
     
        const html = `  <article class="country">
          <img class="country__img" src="${flag}" />
          <div class="country__data">
            <h3 class="country__name">COUNTRY: ${name}</h3>
            <h4 class="country__region">REGION: ${data.region}</h4>
            <p class="country__row"><span>👫</span>POP people: ${population}M</p>
            <p class="country__row"><span>🗣️</span>LANG: ${language}</p>
            <p class="country__row"><span>💰</span>CUR: ${currency}</p>
          </div>
        </article>`;
        countriesContainer.innerHTML=html
        countriesContainer.style.opacity=1
        console.log(json.message)
}

else  errormsg.textContent='No country found!'

})

}




btn.addEventListener('click',(e)=>{ e.preventDefault()
    getCountry(input.value)
})
