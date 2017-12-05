window.onload = () => {
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
  //var = document.getElementById('').value;
  addDirectlyToTheDamnList(landmarkname,landmarkreason);
}
function addDirectlyToTheDamnList(landmarkname,landmarkreason)
{

  var parentDiv= document.createElement("div");
  var nametext= document.createElement("p");
  nametext.innerHTML=landmarkname;
  var linktext= document.createElement("a");
  linktext.alt=landmarkname;
  linktext.href="placeholder";
  var imgtext= document.createElement("img");
  imgtext.src="./Image-Resources/no-image.png";
  linktext.appendChild(imgtext);
  parentDiv.appendChild(nametext);
  parentDiv.appendChild(linktext);

  var theBigList= document.getElementById('imagelist');

  theBigList.appendChild(parentDiv);

}
