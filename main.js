const label = document.getElementsByClassName('label')

for (let i = 0; i < label.length; i++) {
  label[i].addEventListener('click', function () {
    for (j = 0; j < label.length; j++) {
      //show only one answer at the time
      if (j != i) {
        label[j].parentNode.classList.remove('active')
      }
    }
    this.parentNode.classList.toggle('active')
  })
}
