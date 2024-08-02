let postsData =
   [
     {id: 1,author: 'John', content: 'My first Post!',likes: 10, comments: ['Great post!', 'Nice photo!'],image: 'https://files.codingninjas.in/image2-28694.jpg'}, 
     {id: 2,author: 'Tina', content: 'Horse Riding #newexperience!',likes: 10, comments: ['Great post!', 'Nice photo!'],image: 'https://images6.alphacoders.com/345/345448.jpg'},
     {id: 3,author: 'Tony', content: 'WOW!',likes: 10, comments: ['Great post!', 'Nice photo!'],image: 'http://files.all-free-download.com/downloadfiles/wallpapers/1920_1080/beautiful_flowers_wallpaper_flowers_nature_1304.jpg'},
     {id: 4,author: 'Ben', content: 'Kashmir!!',likes: 10, comments: ['Great post!', 'Nice photo!'],image: 'http://honeymoonbug.com/blog/wp-content/uploads/2017/07/gulmarg1-min.jpg'},
     {id: 5,author: 'David', content: 'Monsoon!!',likes: 10, comments: ['Great post!', 'Nice photo!'],image: 'https://images.news18.com/ibnlive/uploads/2021/06/1624371970_monsoon-rainy.jpg'},

]


//creating div
// let ind = 1;
const likedPosts = new Set();

function renderPosts() {

const posts = document.getElementById('posts');
posts.innerHTML = '';

postsData.forEach((curr)=>{
const {id,author,content,likes,comments,image} = curr;
    
const post = document.createElement("div");
post.className = "post";

posts.appendChild(post);

// heding creation
const h3 = document.createElement("h3");
post.appendChild(h3);
h3.textContent = author;

// image creation 
const img = document.createElement("img");
post.appendChild(img);
img.src = image;

// paragraph contain content of post

const contentP = document.createElement("p");
post.appendChild(contentP);
contentP.className = "pclass"
contentP.textContent = content;

//create class container

const commentcontainer = document.createElement("div");
post.appendChild(commentcontainer);
commentcontainer.className = "comments-container";
commentcontainer.style.display = "none";

//postfooter div

const postFooter = document.createElement("div");
postFooter.className  = "post-footer";
post.appendChild(postFooter);
postFooter.textContent = `Likes: ${curr.likes} Comments: ${curr.comments.length}`;

//like button
 
const likebtn = document.createElement("button");
likebtn.textContent = "Like";
post.appendChild(likebtn);
likebtn.className = "like-btn";


//eventlistener of likebutton

likebtn.addEventListener('click', ()=>{
    if(!likedPosts.has(id)){
    curr.likes++;
    likedPosts.add(id);
    likebtn.style.backgroundColor = "red";
    postFooter.textContent = `Likes: ${curr.likes} Comments: ${curr.comments.length}`;
    }
    else{
        curr.likes--;
        likedPosts.delete(id);
        likebtn.style.backgroundColor = "white";
        postFooter.textContent = `Likes: ${curr.likes} Comments: ${curr.comments.length}`;

    }
})



//input tag

const inputtype = document.createElement("input");
inputtype.type = "text";
inputtype.placeholder = "Write comment here....."
inputtype.className = "commentinput";
post.appendChild(inputtype);

//comment input



//comment button

const commbtn = document.createElement("button");
commbtn.textContent = "Comm";
post.appendChild(commbtn);
commbtn.className = "comment-button";

//comment button add eventlistener
commbtn.addEventListener('click',()=>{
    const newcomment = inputtype.value;
    if(newcomment.trim()!=""){
    curr.comments.push(newcomment); 
    postFooter.textContent = `Likes: ${curr.likes} Comments: ${curr.comments.length}`;
    inputtype.value="";

    const newcomments = document.createElement("p");
    newcomments.textContent = newcomment;
    commentcontainer.appendChild(newcomments);
    
    }
})


//creating p for each comments 

comments.forEach(curr=>{
    let commentcontent = document.createElement("p");
    commentcontent.textContent = curr;
    commentcontainer.appendChild(commentcontent);
})
postFooter.addEventListener('click',()=>{
    if(commentcontainer.style.display ==="block"){
        commentcontainer.style.display ="none";
    }
    else{
       commentcontainer.style.display ="block"; 
    }
})
});

}
// function addNewPost(){
//     const postinput = document.getElementById("postInput");
//     // const ptaken = document.createElement("p");
//     // ptaken.classList = "pclass";
//     // ptaken.textContent = postinput.value;
//     // document.querySelector(".post").appendChild(ptaken);

//     let imgurl='';
//     const imageinput = document.getElementById("imageInput");
//     if(imageinput.files.length>0){
//         const file = imageinput.files[0];
//         imgurl = URL.createObjectURL(file);
//     }
   
//     const newObj = {
//      id:postsData.length+1,author:"You",content:postinput.value,likes:0,comments:[],image:imgurl,
//     }
//     postsData.push(newObj);
//     imageinput.value='';
//     renderPosts();

// }
// const postbtn = document.querySelector(".submit-button");
// postbtn.addEventListener('click',(event)=>{
//     event.preventDefault();
//     addNewPost();
// })

function addNewPost(){
    const postinput = document.querySelector("#postInput");
    const imageinput = document.querySelector("#imageInput");
    let imageurl='';
    if(imageinput.files.length>0){
     const file = imageinput.files[0];
     imageurl = URL.createObjectURL(file);
    }    
    const newObj = {
        id:postsData.length+1,
        author:"You",
        content:postinput.value,
        likes:0,
        comments:[],
        image:imageurl,
    };
    imageinput.value = "";
    postinput.value="";
    postsData.push(newObj);
    renderPosts();
}
const submitbtn = document.querySelector(".submit-button");
submitbtn.addEventListener('click',(event)=>{
    event.preventDefault();
    addNewPost();
})

renderPosts();