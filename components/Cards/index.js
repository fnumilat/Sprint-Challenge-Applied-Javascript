// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector('.cards-container')

function bootstrap(obj) {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imageContainer = document.createElement('div');
    const authorsImage = document.createElement('img');
    const authorsName = document.createElement('span');

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imageContainer);
    imageContainer.appendChild(authorsImage);
    author.appendChild(authorsName);

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imageContainer.classList.add('img-container');
    authorsImage.classList.add('img');
    authorsName.classList.add('span');

    headline.textContent = obj.headline;
    authorsName.textContent = obj.authorName;
    authorsImage.src = obj.authorPhoto;

    return card
    
}

function javascript(obj) {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imageContainer = document.createElement('div');
    const authorsImage = document.createElement('img');
    const authorsName = document.createElement('span');

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imageContainer);
    imageContainer.appendChild(authorsImage);
    author.appendChild(authorsName);

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imageContainer.classList.add('img-container');
    authorsImage.classList.add('img');
    authorsName.classList.add('span');

    headline.textContent = obj.headline;
    authorsName.textContent = obj.authorName;
    authorsImage.src = obj.authorPhoto;

    return card
    
}

function jquery(obj) {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imageContainer = document.createElement('div');
    const authorsImage = document.createElement('img');
    const authorsName = document.createElement('span');

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imageContainer);
    imageContainer.appendChild(authorsImage);
    author.appendChild(authorsName);

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imageContainer.classList.add('img-container');
    authorsImage.classList.add('img');
    authorsName.classList.add('span');

    headline.textContent = obj.headline;
    authorsName.textContent = obj.authorName;
    authorsImage.src = obj.authorPhoto;

    return card
    
}

function node(obj) {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imageContainer = document.createElement('div');
    const authorsImage = document.createElement('img');
    const authorsName = document.createElement('span');

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imageContainer);
    imageContainer.appendChild(authorsImage);
    author.appendChild(authorsName);

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imageContainer.classList.add('img-container');
    authorsImage.classList.add('img');
    authorsName.classList.add('span');

    headline.textContent = obj.headline;
    authorsName.textContent = obj.authorName;
    authorsImage.src = obj.authorPhoto;

    return card
    
}

function technology(obj) {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imageContainer = document.createElement('div');
    const authorsImage = document.createElement('img');
    const authorsName = document.createElement('span');

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imageContainer);
    imageContainer.appendChild(authorsImage);
    author.appendChild(authorsName);

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imageContainer.classList.add('img-container');
    authorsImage.classList.add('img');
    authorsName.classList.add('span');

    headline.textContent = obj.headline;
    authorsName.textContent = obj.authorName;
    authorsImage.src = obj.authorPhoto;

    return card
    
}

getMyData = () => {
    axios
        .get("https://lambda-times-backend.herokuapp.com/articles")
        .then((res) => {
            const articlesData = (res.data)

            console.log(articlesData)

            res.data.articles.bootstrap.forEach((array) => {
                cardsContainer.appendChild(bootstrap(array))
            });

            res.data.articles.javascript.forEach((array) => {
                cardsContainer.appendChild(javascript(array))
            });

            res.data.articles.jquery.forEach((array) => {
                cardsContainer.appendChild(jquery(array))
            });

            res.data.articles.node.forEach((array) => {
                cardsContainer.appendChild(node(array))
            });

            res.data.articles.technology.forEach((array) => {
                cardsContainer.appendChild(technology(array))
            });
            
        })
        .catch((err) => {
            console.log(`You hit me mistaken`, err)
        })
    }
    getMyData()