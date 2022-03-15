async function getUser(email){
  let response = await fetch(`https://api.github.com/users/${email}`)
  let userData = await response.json()
  console.log(userData)
  //name
  document.getElementById("name").innerHTML = userData.login
  //handle
  document.getElementById("handle").innerHTML = `<span>@</span>${userData.login}`
 //public repos
 document.getElementById("repos").innerHTML = `<p class="statistics__title">Repos</p> ${userData.public_repos}`;
 //followers
 document.getElementById("followers").innerHTML = `<p class="statistics__title">Followers</p> ${userData.followers}`;
 //following
 document.getElementById("following").innerHTML = `<p class="statistics__title">Following</p> ${userData.following}`;
 //location
 document.getElementById("location").innerHTML = userData.location;
 //blog
 document.getElementById("blog").innerHTML = userData.blog;
 //bio
 document.getElementById("bio").innerHTML = userData.bio;
 //twitter
 document.getElementById("twitter").innerHTML = userData.twitter_username;
 //avatar
 document.getElementById("avatar").src = userData.avatar_url;
  //date joined
  let date = new Date(userData.created_at).toDateString()
 document.getElementById("date").innerHTML = `Joined ${date}`
}


getUser('max')