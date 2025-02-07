
function showimage() {
const time = document.getElementById('time')
const dayImage = document.getElementById('day-image')
const nightImage = document.getElementById('night-image')
dayImage.style.display = 'none';
nightImage.style.display = 'none'
    const newDate = new Date()
    const hours =  String (newDate.getHours())
    const minutes = String (newDate.getMinutes())
    const seconds = String (newDate.getSeconds())
    const currentTime = hours+':'+minutes+':'+seconds
    time.innerHTML = currentTime
    // console.log(currentTime)
    console.log(hours+':'+minutes+':'+seconds)
    if(hours > 6 && hours < 18 ){
        dayImage.style.display = 'block'
    }
    else{
        nightImage.style.display = 'block'
    
    }
}
showimage()
setInterval(currentTime,1000)