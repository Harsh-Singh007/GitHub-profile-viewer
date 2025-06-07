async function getProfile() {
    const username=document.getElementById('username').value.trim();
    const profilediv=document.getElementById('profile');

    if(!username)
    {
        profilediv.innerHTML='<p>Please Enter a GitHub Username';
    }
    try{
        const response=await fetch(`https://api.github.com/users/${username}`);

      if(!response.ok){
        throw new Error("User not allowed");
        
      }
      const data=await response.json();
    //   console.log(data);
    profilediv.innerHTML=`
    <div class="profile-card">
        <img src="${data.avatar_url} ">
         <h1>${data.name}</h2>
         <p>${data.bio}</p>
         <p>${data.location}</p>
         <p><a href="${data.blog}">harsh-singh.com</a></p>
         <p>Total Public Repos ${data.public_repos}</p>
         
         



         </div>`

      

    }
    catch(err){
        console.log("error :",err);
        
    }
    


    
}