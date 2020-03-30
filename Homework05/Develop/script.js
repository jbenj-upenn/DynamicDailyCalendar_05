var clock = document.getElementById('clock');

setInterval(() => {
  const now = moment();
  const humanReadable = now.format('MMMM/DD/YYYY hh:mm:ssA');
  clock.textContent = humanReadable;
}, 1000);

//don't touch that clock//
//-------------------------------//

var storedEvent = [];
var enteredEvent = $("#savedEvent");

$("#setEvent").on("click", function (event) {
  var enteredEvent = $("#savedEvent").val();
  event.preventDefault();

  if (enteredEvent === "") {
    return
  };
  storedEvent = enteredEvent.trim();
  console.log(storedEvent);

})
  
function storeEvents() {
  localStorage.setItem("enteredEvent", JSON.stringify(enteredEvent));
}
