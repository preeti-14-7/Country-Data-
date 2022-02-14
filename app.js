const container = document.querySelector('#container');
const request =  new XMLHttpRequest();
request.open('GET',"https://restcountries.com/v3.1/name/nepal");
request.send();

request.addEventListener('load',function(){
    const[data] = JSON.parse(this.responseText);
   // console.log(`${data.flags.png}`);
    document.getElementById("name").innerText = `${data.name.common}`;
    document.getElementById("pop").innerText = `${data.population}`;
    let image = document.getElementById("img");
    image.src = `${data.flags.png}` ;
    
})