let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁", "🫏","🐶","🦓","🐭","🐗","🐷","🐼","🐨","🦧","🦌","🐖","🐪","🦨","🦎","🦦","🐬","🦐","🦑","🐦‍⬛","🪿"]
let stageEl = document.getElementById("stage")

function fight(){
    let randomIndexOne = Math.floor(Math.random() * fighters.length)
    let randomIndexTwo = Math.floor(Math.random() * fighters.length)
    stageEl.textContent = fighters[randomIndexOne] + " VS " + fighters[randomIndexTwo]
}
