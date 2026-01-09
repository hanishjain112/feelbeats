console.log("welcome to feelbeat");
//initialize the variables
let songIndex = 0;//to check which song is playing
let masterplay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let masterSongName = document.getElementById('masterSongName');
let songItems= Array.from(document.getElementsByClassName('songitem'));

let songs = [
    {songName:"kuch toh hai - Armaan Malik ❤️ " , filepath : "songs/1.mp3" , coverPath:"covers/1.jpg"} ,
    {songName:"Banjaara 💘 " , filepath : "songs/2.mp3" , coverPath:"covers/2.jpg"},
    {songName:"kahani suno 🖤" , filepath : "songs/3.mp3" , coverPath:"covers/3.jpg"},
    {songName:"Pehli Dafa 😊" , filepath : "songs/4.mp3" , coverPath:"covers/4.jpg"},
    {songName:"samjho naa😞" , filepath : "songs/5.mp3" , coverPath:"covers/5.jpg"},
    {songName:"faasle-aditya rikhari✨" , filepath : "songs/6.mp3" , coverPath:"covers/6.jpg"},
    {songName:"Aaj ki Raat 🔥🔥🔥" , filepath : "songs/7.mp3" , coverPath:"covers/7.jpg"},
    {songName:"paaro 💖" , filepath : "songs/8.mp3" , coverPath:"covers/8.jpg"},
    {songName:"main dhoondne ko X let me down slowly 🥹🥹🥹 " , filepath : "songs/9.mp3" , coverPath:"covers/9.jpg"},
    {songName:"Kabiraa 💔" , filepath : "songs/10.mp3" , coverPath:"covers/10.jpg"},
]
songItems.forEach((element,i) => {
    //console.log(element , i); 
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;

    
});

let audioElement = new Audio('songs/1.mp3');
//audioElement.play();
//Handle play/pause click
masterplay.addEventListener('click' , ()=>{
if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;

}
else{
        audioElement.pause();
    masterplay.classList.remove('fa-circle-pause');
    masterplay.classList.add('fa-circle-play');
    gif.style.opacity = 0;
}

})

//listen to events
// from here some doubtsclass="songName"class="songName"class="songName"class="songName"class="songName"class="songName"class="songName"
audioElement.addEventListener('timeupdate' , ()=>{
    
    //update seekbar
   let progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress ;
})

 myProgressBar.addEventListener('change' , ()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration /100;
 })
 const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

  /*const makeAllPlays=()=>{
    element.classList.remove(fa-circle-pause);
    element.classList.add(fa-circle-play);
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{})}*/
 
 
    
  
 Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click' , (e)=>{
   console.log(e.target) ; 
   makeAllPlays();
   
   songIndex = parseInt(e.target.id);
   e.target.classList.remove('fa-circle-play');
   
    e.target.classList.add('fa-circle-pause');
   // audioElement.src = 'songs/${index}.mp3'
     audioElement.src = `songs/${songIndex+1}.mp3`;
  masterSongName.innerText=songs[songIndex].songName; 
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    
    })
    }
 )
 document.getElementById('next').addEventListener('click' , ()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
     songIndex+=1    ; 
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
  masterSongName.innerText=songs[songIndex].songName; 
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    
    
 })
 document.getElementById('previous').addEventListener('click' , ()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
     songIndex-=1    ; 
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;                             
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    
    
 })