// Menu data structure
var menuLinks = [

  { text: 'about', href: '/about' },

  {
    text: 'catalog', href: '#', subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ]
  },

  {
    text: 'orders', href: '#', subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ]
  },

  {
    text: 'account', href: '#', subLinks: [

      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ]
  },
];

// GETTING STARTED
// Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector("main");

//Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
mainEl.style.backgroundColor = "var(--main-bg)";

//Set the content of mainEl to <h1>DOM Manipulation</h1>
const newH1 = document.createElement("h1");
newH1.textContent = "DOM Manipulation";

mainEl.appendChild(newH1);

//Add a class of flex-ctr to mainEl.
mainEl.classList.add("flex-ctr");

// CREATING A MENU BARe 
// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.querySelector("#top-menu");

//Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = "100%";

// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

//Add a class of flex-around to topMenuEl
topMenuEl.classList.add("flex-around");

// ADDING MENU BUTTONS
// Iterate over the entire menuLinks array and for each "link" object:
// Create an <a> element.
// On the new element, add an href attribute with its value set to the href property of the "link" object.
// Set the new element's content to the value of the text property of the "link" object.
// Append the new element to the topMenuEl element.

// Part 3: Creating Sub Menu

// Select and cache the <nav id="sub-menu"> element
const subMenuEl = document.getElementById("sub-menu");

// Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

// Set the height subMenuEl element to be "100%"
subMenuEl.style.height = "100%";

// Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add("flex-around");

// Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = "absolute";

menuLinks.forEach(link => {
  const a = document.createElement('a');
  a.href = link.href;
  a.textContent = link.text;
  topMenuEl.appendChild(a);
})

// Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
const topMenuLinks = topMenuEl.querySelectorAll("a");

// Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener("click", function (event) {
  event.preventDefault();

  if (event.target.tagName !== "A") return;

  // menu link clicked
   let clickedLinkObj = menuLinks.find(
    link => link.text === event.target.textContent

  console.log(event.target.textContent);

  // remove active from all links FIRST
  topMenuLinks.forEach(link => {
    link.classList.remove("active");
  });

  // then add active to clicked link
  event.target.classList.add("active");
});