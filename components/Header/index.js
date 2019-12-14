// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headerContainer = document.querySelector(".header-container")




function Header() {
    const header = document.createElement('div');
    const date = document.createElement('span');
    const title = document.createElement('h1');
    const temp = document.createElement('span');

    console.log(Header)

    header.appendChild(date);
    header.appendChild(title);
    header.appendChild(temp);

    header.classList.add("header");
    title.classList.add("h1");
    date.classList.add("span");
    temp.classList.add("span");

    date.textContent = 'MARCH 28, 2019';
    title.textContent = 'Lambda Times';
    temp.textContent = '98°';

    return header
    
}

headerContainer.appendChild(Header())

