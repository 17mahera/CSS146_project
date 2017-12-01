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
