var img = document.querySelector("#cover")
var file = document.querySelector(".waifuname")
var tags = document.querySelector("#descição")

const fetchWaifu = () => {
    const images = `https://api.waifu.im/random/?is_nsfw=true&orientation=PORTRAIT&many=true&full=false`
    


    fetch(images)
    .then(response => response.json())
    .then (corpo => {

        let waifu
        let filedawaifu
        

        waifu = (corpo.images[Math.floor(Math.random() * 30)])
        filedawaifu = waifu.file

        img.setAttribute('src',waifu.url)
        file.innerHTML = filedawaifu
    })
    

}







