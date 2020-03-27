const videoTag = document.querySelector('video')

document.addEventListener('keydown', e => {
    checkLetter(e.key)
})

function checkLetter(usersKey) {
    switch(usersKey) {
        case 'd':
            videoTag.playbackRate += 0.1
            console.log(`Current Playback Rate: ${videoTag.playbackRate.toFixed(2)}`)
            break;
        case 's':
            videoTag.playbackRate -= 0.1
            console.log(`Current Playback Rate: ${videoTag.playbackRate.toFixed(2)}`)
            break;
        case 'r':
            videoTag.playbackRate = 1
            console.log(`Current Playback Rate: ${videoTag.playbackRate.toFixed(2)}`)
    }
}

function createButtons(){
    const speedDownButton = document.createElement('button')
    const speedUpButton = document.createElement('button')
    const buttons = [speedDownButton, speedUpButton]

    const videocontainer = document.querySelector('.video-container')
    const myPersonalVideoControls = document.createElement('div')
    const countSpan = document.createElement('span')
    countSpan.id = 'current-playback-speed'
    let rateTextNode = document.createTextNode(videoTag.playbackRate.toFixed(2))
    countSpan.appendChild(rateTextNode)

    const cssTemplate =`
        border: 0px none;
        padding: 10px;
        margin: 10px;
        color: white;
        background-color: #00cb79;
        border-radius: 4px;
        font-weight: 900;
        cursor: pointer;
        `

    myPersonalVideoControls.classList.add("my-personal-video-controls")

    buttons.forEach(btn => {
        let currentTextNode
        btn.style = cssTemplate;

        if(btn === speedUpButton){
            currentTextNode = document.createTextNode("speed up")
            btn.id = "speed-up"
        } else {
            currentTextNode = document.createTextNode("speed-down")
            btn.id = "speed down"
        }

        btn.appendChild(currentTextNode)
        btn.classList.add("my-speed-control")
        myPersonalVideoControls.appendChild(btn)

        btn.addEventListener("click", e => {
            if(e.target.id === "speed-up"){
                videoTag.playbackRate += 0.1
            } else {
                videoTag.playbackRate -= 0.1
            }

        })
        updateSpeed()
    });

    myPersonalVideoControls.appendChild(countSpan)
    videocontainer.appendChild(myPersonalVideoControls)

    myPersonalVideoControls.style.position = "fixed"
    myPersonalVideoControls.style.top = "70px"
    myPersonalVideoControls.style.left = "10px"

}

function updatespeed(){
    document.getElementById(
        "current-playback-speed"
        ).innerHTML = videoTag.playbackRate.toFixed(2)
}

createButtons()