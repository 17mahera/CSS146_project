window.onload = () => {
  document.getElementById('uploadImg').style.display= "none";
  var broboken = document.getElementById('hob');
  broboken.addEventListener("mouseover", function (e) {

    // changes Hoboken to Broboken

    broboken.innerHTML="Broboken";
    broboken.style.color="pink";
});
  broboken.addEventListener("mouseout", function (e) {

    // changes Broboken to Hoboken

    broboken.innerHTML="Hoboken";
    broboken.style.color="white";
});
};

function submitIt()
{
  var landmarkname= document.getElementById('landmark-name').value;
  var landmarkreason= document.getElementById('landmark-reason').value;
  var landmarkimg= document.createElement("img");

  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();
  
  reader.addEventListener("load", function () {
    landmarkimg.src = reader.result;
  }, false);
  
  if (file) {
    reader.readAsDataURL(file);
  }
  else landmarkimg.src="./Image-Resources/no-image.png";
  
  addDirectlyToTheDamnList(landmarkname,landmarkreason, landmarkimg);
}
function addDirectlyToTheDamnList(landmarkname,landmarkreason, landmarkimg)
{

  var parentDiv= document.createElement("div");
  var nametext= document.createElement("p");
  nametext.innerHTML=landmarkname;
  var linktext= document.createElement("a");
  linktext.alt=landmarkname;
  linktext.href="placeholder";
  linktext.appendChild(landmarkimg);
  parentDiv.appendChild(nametext);
  parentDiv.appendChild(linktext);

  var theBigList= document.getElementById('imagelist');

  theBigList.appendChild(parentDiv);
  window.scrollTo(0,document.body.scrollHeight);  
};

function resetForm(){
  document.getElementById("addForm").reset();
}
function clickUpload(){
  document.getElementById("uploadImg").click();
}
function updateText(){
  document.getElementById("betterFile").textContent =  document.querySelector('input[type=file]').files[0].name;
}
