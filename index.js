async function getUser(email) {
	let response = await fetch(`https://api.github.com/users/${email}`);
	let userData = await response.json();
	//name
	document.getElementById('name').innerHTML = userData.login;
	//handle
	document.getElementById('handle').innerHTML = `<span>@</span>${userData.login}`;
	//public repos
	document.getElementById('repos').innerHTML = `<p class="statistics__title">Repos</p> ${userData.public_repos}`;
	//followers
	document.getElementById('followers').innerHTML = `<p class="statistics__title">Followers</p> ${userData.followers}`;
	//following
	document.getElementById('following').innerHTML = `<p class="statistics__title">Following</p> ${userData.following}`;
	//location
	document.getElementById('location').innerHTML = userData.location;
	//blog
	document.getElementById('blog').innerHTML = userData.blog;
	//bio
	document.getElementById('bio').innerHTML = userData.bio;
	//twitter
	document.getElementById('twitter').innerHTML = userData.twitter_username;
	//avatar
	document.getElementById('avatar').src = userData.avatar_url;
	//date joined
	let date = new Date(userData.created_at).toDateString();
	document.getElementById('date').innerHTML = `Joined ${date}`;
}

getUser('kensparks-dev');

// LightMode / DarkMode

//General Colors
const white = '#ffffff';
const black = '#000000'
const dodgerBlue = ' #0079FF';
// Light Mode Colors
const slateGray = '#697c9a';
const sanMarino = '#4B6A9B';
const licorice = '#2B3442';
const ghostWhite = '#f6f8ff';
const whiteTwo = '#fefefe';
// Dark Mode Colors
const midnightExpressDark = '#141D2F';
const midnightExpress = '#1E2A47';

let lightMode = document.getElementById('lightswitch');
let darkMode = document.getElementById('darkswitch');
let body = document.querySelector('body');
let pTags = document.getElementsByTagName('p');
let liTags = document.getElementsByTagName('li');
let headerTitle = document.getElementById('header-title');
let searchSection = document.getElementById('search-section');
let input = document.getElementsByTagName('input');
let user = document.getElementById('user');
let userName = document.getElementById('name');
let statistics = document.getElementById('statistics');
let liLinks = document.getElementsByClassName('contact-link');
let dateText = document.getElementById('date');
let bio = document.getElementById('bio');
let repos = document.getElementById('repos');
let followers = document.getElementById('followers');
let following = document.getElementById('following');

lightMode.addEventListener('click', lightModeSwitch);
darkMode.addEventListener('click', darkModeSwitch);

function lightModeSwitch() {
	body.style.background = ghostWhite;
	lightMode.style.display = 'none';
	darkMode.style.color = slateGray;
	darkMode.style.display = 'flex';
	headerTitle.style.color = licorice;
	user.style.background = whiteTwo;
	userName.style.color = midnightExpressDark;
	dateText.style.color = licorice;
  bio.style.color = licorice;
	searchSection.style.background = whiteTwo;
	statistics.style.background = ghostWhite;
  // input.classList.add('light-mode-placeholder::placeholder');
	for (pTag of pTags) {
		pTag.style.color = sanMarino;
	}
	for (liTag of liTags) {
		liTag.style.color = sanMarino;
	}
  for (liLink of liLinks) {
		liLink.style.color = sanMarino;
	}
  repos.style.color = '#000';
  followers.style.color = '#000'
  following.style.color = '#000'
}

function darkModeSwitch() {
	body.style.background = midnightExpressDark;
	lightMode.style.display = 'flex';
	darkMode.style.display = 'none';
	headerTitle.style.color = white;
	user.style.background = midnightExpress;
	userName.style.color = white;
	dateText.style.color = white;
  bio.style.color = white;
	searchSection.style.background = midnightExpress;
	statistics.style.background = midnightExpressDark;
	for (pTag of pTags) {
    pTag.style.color = white;
	}
	for (liTag of liTags) {
    liTag.style.color = white;
	}
  for (liLink of liLinks) {
    liLink.style.color = white;
	}
 
}
