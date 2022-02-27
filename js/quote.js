const loadQuote = async () => {
    const res = await fetch ('https://api.kanye.rest/');
    const data = await res.json();
    showQuote(data);
}

const showQuote = (data) => {
    document.getElementById('quote').innerHTML= `<h2>${data.quote}`;
}

