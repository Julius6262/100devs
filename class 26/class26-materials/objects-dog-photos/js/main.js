const URL = "https://dog.ceo/api/breeds/image/random";
fetch(URL)
    .then(res => res.json())
    .then(data => {
        let imgURL = data.message;
        // Set the image URL as the src of the img element inside the callback
        document.querySelector('img').src = imgURL;
    })
    .catch(err => {
        console.log(`error ${err}`);
    });


