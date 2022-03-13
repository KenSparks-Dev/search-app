// fetch('https://api.github.com/users/kensparks-dev').then(res => console.log(res)).then(data => {
//   // document.getElementById('name').innerHTML = data.name
//   console.log(data)
// }).console.log('ERROR')

async function getUser(email){
  let userData = await fetch(`https://api.github.com/users/${email}`).then(res => res.json())
  console.log(userData)
  //name
  document.getElementById("name").innerHTML = userData.login;
 //public repos
 document.getElementById("repos").innerHTML = userData.public_repos;
 //followers
 document.getElementById("followers").innerHTML = userData.followers;
 //following
 document.getElementById("following").innerHTML = userData.following;
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


getUser('kensparks-dev')