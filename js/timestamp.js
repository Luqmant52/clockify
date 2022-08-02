// Time stamp start
let tt
function displayTime() {
  const time = new Date()
  const absoluteTime = time.toString().split(' ')
  document.getElementById('timeStart').innerHTML = absoluteTime[4]
  document.getElementById('btnTime').innerHTML = "Stop"
  document.getElementById('btnTime').setAttribute('onclick', 'endTime()')
  tt = setInterval(t, 1000)

}
function t() {
  const time = new Date()
  const absoluteTime = time.toString().split(' ')
  document.getElementById('time').innerHTML = absoluteTime[4]
}
function endTime() {
  clearInterval(tt)
  const time = new Date()
  const absoluteTime = time.toString().split(' ')
  document.getElementById('timeEnd').innerHTML = absoluteTime[4]
  document.getElementById('btnTime').innerHTML = "Start"
  document.getElementById('btnTime').setAttribute('onclick', 'displayTime()')
}
// Time stamp start

//---------------------------------------------

// Toggle the project button Start
function Show() {
  var x = document.getElementById("hisShow");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
// Toggle the project button End

//---------------------------------------------

// Main Div Working

function saveData() {
  const MainDiv = document.getElementById('main')
  const techName = document.getElementById('tecName').value
  console.log(techName);
  const prjName = document.getElementById('prjName').value
  console.log(prjName);
  const prjDesc = document.getElementById('prjDesc').value
  console.log(prjDesc);
  const timeStart = document.getElementById('timeStart').innerText
  console.log(timeStart);
  const timeEnd = document.getElementById('timeEnd').innerText
  console.log(timeEnd);
  MainDiv.innerHTML += `<div class="mx-8 px-8 py-4 border-2 my-6 bg-white"><div><strong>${techName}</strong></div>
    <div class="flex mx-4 my-2">
        <h1 class="m-2 px-4 py-2"><strong>${prjName}</strong></h1>
        <p class="m-2 px-4 py-2">${prjDesc}</p>
    </div>
    <div class="flex mx-4 my-2">
        <p class="m-2 px-4 py-2">${timeStart}</p>
        <p class="m-2 px-4 py-2">${timeEnd}</p>
    </div>
  </div>`

}