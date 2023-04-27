import axios from "axios";

function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }
    axios.get('https://icanhazdadjoke.com', config)
    .then((res)=> {
        document.getElementById('joke').innerHTML = res.data.joke
        
    })
    console.log(config);
    console.log(config.axios);
}

export default generateJoke;