const contentBox = document.getElementsByClassName('content-box')
const label = document.getElementsByClassName('label')
//console.log(label[1].parentNode.classList)

for (let i = 0; i < label.length; i++) {
  label[i].addEventListener('click', function () {
    for (j = 0; j < label.length; j++) {
      //to let only one question open at the time
      if (j != i) {
        label[j].parentNode.classList.remove('active')
      }
    }
    this.parentNode.classList.toggle('active')
  })
}
