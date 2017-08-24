let parentToasts = false

function createParentToasts () {
  let container = document.createElement('div')
  container.id = 'simple-toaster'
  document.body.appendChild(container)
  return container
}

export default (type, message, timeout = 5000) => {
  let timer = false
  let maxToasts = 5
  function remove (el) {
    clearTimeout(timer)
    el.classList.remove('active')
    moveToasts()
    setTimeout(() => {
      if (el.parentNode) el.parentNode.removeChild(el)
    }, 1000)
  }
  function moveToasts (type) {
    let activeToasts = parentToasts.getElementsByClassName('active')
    for (let i = 0; i < activeToasts.length; i++) {
      let size = type === 'add' ? i + 1 : i
      activeToasts[i].style.transform = `translateY(calc(-${size}00% - ${size}0px))`
    }
  }
  function removeMaxToast () {
    let activeToasts = parentToasts.getElementsByClassName('active')
    let activeAmount = activeToasts.length
    if (activeAmount > maxToasts) {
      remove(activeToasts[activeAmount - 1])
    }
  }
  function init () {
    let toast = document.createElement('div')
    toast.classList.add('toast', type)
    toast.innerHTML = message
    parentToasts = parentToasts || createParentToasts()
    parentToasts.insertBefore(toast, parentToasts.firstChild)
    moveToasts('add')
    setTimeout(() => {
      toast.classList.add('active')
      removeMaxToast()
      if (timeout) {
        timer = setTimeout(() => {
          remove(toast)
        }, timeout)
      }
    }, 50)
    toast.onclick = ({target}) => {
      remove(target)
    }
  }
  init()
}
