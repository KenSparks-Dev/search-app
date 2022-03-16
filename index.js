async function getUser(userName) {
	let response = await fetch(`https://api.github.com/users/${userName}`);
	let userData = await response.json();
	console.log(userData)
	//name
	let name = (userData.name == null ? document.getElementById('name').innerHTML = 'User Name' : document.getElementById('name').innerHTML = userData.name);

	//handle
	let handle = (userData.login == null ? document.getElementById('handle').innerHTML = '@handle' : document.getElementById('handle').innerHTML = userData.login);

	let handleLink = (userData.html_url == null ? document.getElementById('handle').href = '#' : document.getElementById('handle').href = userData.html_url);

	//date joined
	let joinDate = new Date(userData.created_at).toDateString();
	let date = (userData.created_at == null ? document.getElementById('date').innerHTML = 'Date Joined ' : document.getElementById('date').innerHTML = `Joined ${joinDate}`);

	//public repos
	let repos = (userData.public_repos == null ? document.getElementById('repos').innerHTML = `<p class="statistics__title">Repos</p> 0` : document.getElementById('repos').innerHTML = `<p class="statistics__title">Repos</p> ${userData.public_repos}` );

	//followers
	let followers = (userData.followers == null ? document.getElementById('followers').innerHTML = `<p class="statistics__title">Followers</p> 0` : document.getElementById('followers').innerHTML = `<p class="statistics__title">Followers</p> ${userData.followers}`);

	//following
	let following = (userData.following == null ? document.getElementById('following').innerHTML = `<p class="statistics__title">Following</p> 0` : document.getElementById('following').innerHTML = `<p class="statistics__title">Following</p> ${userData.following}`);

	//location
	let location = (document.getElementById('location').innerHTML = userData.location == null ? 'Location Unknown' : document.getElementById('location').innerHTML = userData.location);

	//blog
	let blog = (userData.blog == null || '""' ? document.getElementById('blog').innerHTML = 'Blog' : document.getElementById('blog').innerHTML = userData.blog);

	let blogLink = (userData.blog == null ? document.getElementById('blog-link').href = '#' : document.getElementById('blog-link').href = userData.blog);
	console.log(blogLink)
	//bio
	let bio = (userData.bio == null ? document.getElementById('bio').innerHTML = 'Bio' : document.getElementById('bio').innerHTML = userData.bio);

	//twitter
	let twitter = (userData.twitter_username == null ? document.getElementById('twitter').innerHTML = 'Not Available' : document.getElementById('twitter').innerHTML = userData.twitter_username);
	//company
	let company = (userData.company == null ? document.getElementById('company').innerHTML = 'Not Available' : document.getElementById('company').innerHTML = userData.company);

	// let companyLink = (userData.company == null || !userData.company.includes('.com', '.org', '.io', '.net') ? document.getElementById('company-link').href = '#' : document.getElementById('company-link').href = userData.company);

	//avatar
	let avatar =(document.getElementById('avatar').src = userData.avatar_url == null ? document.getElementById('avatar').src = `./assets/avatar.jpeg` : document.getElementById('avatar').src = userData.avatar_url);
}


let inputValue = document.getElementById('search').value;
getUser();

// LightMode / DarkMode

//General Colors
const white = '#ffffff';
const black = '#000000';
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
let input = document.getElementById('search');
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
	input.style.color = black;
	input.classList.remove('search-section__input');
	input.classList.add('search-section__input-light');
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
	followers.style.color = '#000';
	following.style.color = '#000';
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
	input.style.color = white;
	input.classList.remove('search-section__input-light');
	input.classList.add('search-section__input');
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
