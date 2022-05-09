let button=document.getElementById('check')
  button.onclick = function validate () {
    let visible=document.getElementById('alert')
    let telNumber=document.getElementById('telNumberInput').value
    let regExp=/^(8|\+7)\(?\d{3}\)? ?\d{3}[ -]?\d{2}[ -]?\d{2}$/
    if (regExp.test(telNumber)) {
      visible.setAttribute('hidden', 'hidden')
      alert ('OK')
    } else {
      visible.removeAttribute('hidden', 'hidden')
    }
  }
