console.log("Welcome to Spotify");
//Initialize the variable
let songIndex=0;
let audioElement=new Audio('Songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));//piche class bnadi songItem k naam ki hr ek song pe

let songs=[//songs ka array bna dia
    {songName:"Love-Yourself Justin-Bieber",filePath:"Songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Pehli-Dafa",filePath:"Songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"Kya-Mujhe-Payar-Hai",filePath:"Songs/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"Mann-Mera",filePath:"Songs/4.mp3",coverPath:"covers/8.jpg"},
    {songName:"Hasrte Baar-Baar Yaar",filePath:"Songs/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"Salamat",filePath:"Songs/6.mp3",coverPath:"covers/6.jpg"},
    {songName:"Tera-Bina-Jag-Me",filePath:"Songs/7.mp3",coverPath:"covers/7.jpg"},
    {songName:"Tum-Mile",filePath:"Songs/8.mp3",coverPath:"covers/8.jpg"},

]
songItems.forEach((element,i)=>{//ek ek kr k song ate rahege loop me  and play hoge
    
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
//handle play/pause Listener
masterPlay.addEventListener('click',() => {//kisi ne masterPlay ko click kia
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;//gif chle jb song play ho tb
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
//listen to Events
//sare event listen myProgressBar me hoge
audioElement.addEventListener('timeupdate',()=>{//audio me mna timeUpdate ko listen krna hai
     console.log("timeupdate");

     //update seekbar
     //Mathematical works
     progress=parseInt((audioElement.currentTime/audioElement.duration)*100);//means kitne % chla hai
     console.log(progress);
     myProgressBar.value=progress;
 })

 myProgressBar.addEventListener('change',()=>{//means ab hum apne progressBar ko age piche kr payege
 audioElement.currentTime=myProgressBar.value*audioElement.duration/100;//that is a formula to takes current time

})

const makeAllPlays=()=>{//ek time pe ek he click ho baki bnd ho jaye

    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
        })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
element.addEventListener('click',(e)=>{//inpe koi b click krta hai then used callBack used
    makeAllPlays();//call function
    
    songIndex=parseInt(e.target.id);

e.target.classList.remove('fa-play-circle');
e.target.classList.add('fa-pause-circle');
audioElement.src=`songs/${songIndex+1}.mp3`;//dollar k paas bactick
masterSongName.innerText=songs[songIndex].songName;
audioElement.currentTime=0;
audioElement.play();

masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
})


})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;//dollar k paas bactick
    masterSongName.innerText=songs[songIndex].songName;//song ka naam chnge hota rahega sath k sath
audioElement.currentTime=0;
audioElement.play();

masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;//dollar k paas bactick
    masterSongName.innerText=songs[songIndex].songName;
audioElement.currentTime=0;
audioElement.play();

masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
})
