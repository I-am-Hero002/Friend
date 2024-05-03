function codechange() {

let show = document.getElementById("playground")
let htmlcode = document.getElementById('html')
  
  show.contentDocument.body.innerHTML = htmlcode.value
}