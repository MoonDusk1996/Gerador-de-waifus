var img = document.querySelector("#cover")
var file = document.querySelector(".waifuname")
var tags = document.querySelector("#descição")

var podemudar = true
var podeparar = false





function fetchWaifu() {
    if(podemudar == true){
        const images = `https://api.waifu.im/random/?is_nsfw=true&orientation=PORTRAIT&many=true&full=false`
    
        fetch(images)
        .then(response => response.json())
        .then (corpo => {
            let waifu
            let filedawaifu
            
            waifu = (corpo.images[Math.floor(Math.random() * 30)])
            img.setAttribute('src',waifu.url)

            filedawaifu = waifu.file
            file.innerHTML = filedawaifu
    
            
            
        })
    }
    else{
        console.log(document.querySelector("#contadortrinta").disabled)
    }
}
    
   


function startTime (duration, display,){
    var timer = duration, minutes, seconds;

        tempo = setInterval(function() {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10)

        display.textContent = seconds


        if (--timer <= 0){ // o que acontece quando o tempo acaba
            timer = duration
            podemudar = true
            fetchWaifu()
            podemudar = false
        }
        
    }, 1000);
    




    

    
}


function fetchdedez(){
    fetchWaifu()
    document.querySelector("#contadortrinta").disabled = "true"
    document.querySelector("#contadordez").disabled = "true"

    podemudar = false

    var duration =  10; //tempo
    display = document.querySelector("#contadordez")
    
    

    startTime(duration, display)
    
    podeParar()


}

function fetchdetrinta(){
    fetchWaifu()
    document.querySelector("#contadortrinta").disabled = "true"
    document.querySelector("#contadordez").disabled = "true"
    podemudar = false

    var duration =  30; //tempo
    podeParar()
    display =  document.querySelector("#contadortrinta")
    startTime(duration, display)

    

}

function podeParar(){
    document.getElementById("btnparar").style.display = "block"
    document.getElementById("btngerar").style.display = "none"
    
}


function parar(){
    console.log("parou")


    document.getElementById('contadordez').removeAttribute("disabled");
    document.getElementById('contadortrinta').removeAttribute("disabled");

    document.getElementById("contadordez").innerText = "10 segundos"
    document.getElementById("contadortrinta").innerText = "30 segundos"


    document.getElementById("btnparar").style.display = "none"
    document.getElementById("btngerar").style.display = "block"

    clearInterval(tempo)
  
}










