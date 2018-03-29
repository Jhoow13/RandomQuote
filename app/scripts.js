let randomColor = () => {
  let random = Math.floor(Math.random() * 2) + 1;

  if (random == 2) {
    let colors = ['#0088ff', '#cd0a20', '#444444', '#002050', '#64a70b'];
    let color = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = color;
    document.body.style.color = color;
    document.querySelectorAll('.btn').forEach((itemBtn) => {
      itemBtn.style.backgroundColor = color
      itemBtn.style.color = "white";
    });

  } else {
    let colors = ['#f47721', '#ff6c5f', '#00c6d7', '#969696', '#5f99cf'];
    let color = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = color;
    document.body.style.color = color;
    document.querySelector('.btn').style.backgroundColor = color;

    document.querySelectorAll('.btn').forEach((itemBtn) => {;
      itemBtn.style.backgroundColor = color
      itemBtn.style.color = "black";
    });
  }
}

let getQuote = () => {
  fetch("https://favqs.com/api/qotd")
    .then((response) => {
      response.json()
        .then((data) => {
          document.querySelector('#quote').innerHTML = `"${data.quote.body}"`
          document.querySelector('#author').innerHTML = `- ${data.quote.author}`;
          document.querySelector('.loader').style.display = 'none'
          document.querySelector("#tweet-button").href = `https://twitter.com/intent/tweet?hashtags=quotes&text=${data.quote.body} - ${data.quote.author}`;
        })
    });
}

randomColor();
getQuote();
