var strongerThan = document.getElementById("stronger-than");
var coolerThan = document.getElementById("cooler-than");
var smarterThan = document.getElementById("smarter-than");
var fasterThan = document.getElementById("faster-than");
var img = document.getElementById("img");
var message = document.getElementById("message");
var msgImg = document.getElementById("msg-img");
var fathersDay = document.getElementById("fathers-day");
var imgBtn = document.getElementById("img-btn");
var ourPic = document.getElementById("us");
var aravPic = document.getElementById("arav");
var shiShi = document.getElementById("shi-shi")
var backBtn = document.getElementById("back-btn");

aravPic.style.display="none";
shiShi.style.display="none";
backBtn.style.display="none";


imgBtn.addEventListener('click', function(){
strongerThan.style.display="none";
coolerThan.style.display="none";
smarterThan.style.display="none";
fasterThan.style.display="none";
ourPic.style.display="none";
fathersDay.style.display="none";
backBtn.style.display="block";
message.innerHTML = "Dearest dadda, You mean the world to us! Thank you for being the BESTEST dad! Happy fathers day !!! lots of love and slobbery kisses from Aru baba and Shi shi Moo"
msgImg.appendChild(imageElem);

 })

strongerThan.addEventListener('click', function(){
strongerThan.style.display="none";
coolerThan.style.display="none";
smarterThan.style.display="none";
fasterThan.style.display="none";
img.style.display="none";
ourPic.style.display="none";
fathersDay.style.display="none";
backBtn.style.display="block";
message.innerHTML = "...  STRONGER THAN SUPERMAN!"
var imageElem = document.createElement('img');
imageElem.classList.add('MsgImg')
imageElem.src = "https://i.pinimg.com/originals/92/41/67/9241672c0a569bcb36b470f449b26f6e.jpg";
msgImg.appendChild(imageElem);
})

coolerThan.addEventListener('click', function(){
strongerThan.style.display="none";
coolerThan.style.display="none";
smarterThan.style.display="none";
fasterThan.style.display="none";
img.style.display="none";
ourPic.style.display="none";
fathersDay.style.display="none";
backBtn.style.display="block";
message.innerHTML = "...  COOLER THAN BATMAN!"
var imageElem = document.createElement('img');
imageElem.classList.add('MsgImg')
imageElem.src = "https://entertainment.time.com/wp-content/uploads/sites/3/2012/07/batmobile-bat-pod.jpg";
msgImg.appendChild(imageElem);
})

smarterThan.addEventListener('click', function(){
strongerThan.style.display="none";
coolerThan.style.display="none";
smarterThan.style.display="none";
fasterThan.style.display="none";
img.style.display="none";
ourPic.style.display="none";
fathersDay.style.display="none";
backBtn.style.display="block";
message.innerHTML = "...  SMARTER THAN IRONMAN!"
var imageElem = document.createElement('img');
imageElem.classList.add('MsgImg')
imageElem.src = "https://penntoday.upenn.edu/sites/default/files/2019-07/Iron-man_2008.jpg";
msgImg.appendChild(imageElem);
})

fasterThan.addEventListener('click', function(){
strongerThan.style.display="none";
coolerThan.style.display="none";
smarterThan.style.display="none";
fasterThan.style.display="none";
img.style.display="none";
ourPic.style.display="none";
fathersDay.style.display="none";
backBtn.style.display="block";
message.innerHTML = "...  FASTER THAN FLASH!"
var imageElem = document.createElement('img');
imageElem.classList.add('MsgImg')
imageElem.src = "https://images.hdqwalls.com/wallpapers/flash-running-fast-s4.jpg";
msgImg.appendChild(imageElem);
})

fathersDay.addEventListener('click', function dad(){
strongerThan.style.display="none";
coolerThan.style.display="none";
smarterThan.style.display="none";
fasterThan.style.display="none";
ourPic.style.display="none";
fathersDay.style.display="none";
backBtn.style.display="block";
message.innerHTML = "Dearest dadda, You mean the world to us! Thank you for being the BESTEST dad! Happy fathers day !!! lots of love and slobbery kisses from Aru baba and Shi shi Moo"
 })

 ourPic.addEventListener('click', function dad(){
strongerThan.style.display="none";
coolerThan.style.display="none";
smarterThan.style.display="none";
fasterThan.style.display="none";
img.style.display="none";
aravPic.style.display="block";
shiShi.style.display="block";
ourPic.style.display="none";
fathersDay.style.display="none";
backBtn.style.display="block";
message.innerHTML = "Dearest dadda, You mean the world to us! Thank you for being the BESTEST dad! Happy fathers day !!! lots of love and slobbery kisses from Aru baba and Shi shi Moo"
     })

backBtn.addEventListener('click',function(){

location.reload();
})