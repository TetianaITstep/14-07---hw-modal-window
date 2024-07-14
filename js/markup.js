const profile = {
    name: "Max",
    tag: "maximilian",
    location: "Jamaica",
    // avatar: "https://lumiere-a.akamaihd.net/v1/images/a_avatarpandorapedia_neytiri_16x9_1098_01_0e7d844a.jpeg?region=0%2C0%2C1920%2C1080",
    stats: {
        followers: 14000,
        views: 16800,
        likes: 365,

    }

}

function makeProfileMarkup (userProfile){
    const { name,tag,location, avatar = "https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg", stats: { followers, views,likes}}  =  userProfile  

    return `<div>
    <img src="${avatar}">
    <p>${name}</p>
    <p>Lokation${location}</p>
    <ul>
      <li>Followers${followers}</li>
      <li>Views:${views}</li>
      <li>Likes:${likes}</li>
    
    
    </ul>
    </div>`
}
const markup = makeProfileMarkup(profile);
document.body.insertAdjacentHTML("beforeend", markup)

