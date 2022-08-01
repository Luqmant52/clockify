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

function Show() {
    var x = document.getElementById("hisShow");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }