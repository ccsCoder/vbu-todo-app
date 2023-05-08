const appHeader = document.querySelector('header > h1')

function addNewListItem(text) {
  const newLi = document.createElement('li')
  
  const checkbox = document.createElement('input')
  checkbox.setAttribute('type', 'checkbox')
  
  newLi.append(checkbox)

  const textSpan = document.createElement('span')
  textSpan.innerText = text

  // <div class="actions">
  //         <button class="dialog-button action-button" data-action="edit">edit</button>
  //         <button class="dialog-button action-button" data-action="delete">x</button>
  //       </div>

  const actionsDiv = document.createElement('div')
  actionsDiv.classList.add('actions')

  actionsDiv.innerHTML = '<button class="dialog-button action-button" data-action="edit">edit</button><button class="dialog-button action-button" data-action="delete">x</button>'

  newLi.append(textSpan)
  newLi.append(actionsDiv)
  document.querySelector('#todo-list').append(newLi)
}

document.querySelector('#dialog').addEventListener('click', function(event) {
  if (event.target.classList.contains('submit')) {
    const todoText = document.querySelector('#dialog input[type="text"]').value.trim()
    if (todoText === '') {
      alert('Please enter somethign in todo text')
    } else {
      addNewListItem(todoText)
      toggleDialog(false)
    }
  } else if (event.target.classList.contains('cancel')) {
    toggleDialog(false)
  }
})

function toggleDialog(show) {
  document.querySelector('.curtain').style.display = show ? 'block' : 'none'
  document.querySelector('#dialog').style.display = show ? 'block' : 'none'
  if(show) {
    document.querySelector('#dialog input[type="text"]').value = ''
  }
}


document.querySelector('.fab').addEventListener('click', function(event) {
  toggleDialog(true)
})


// document.querySelector('ul input[type="checkbox"]').addEventListener('change',
//   function (event) {
//     console.log(this)
//     if (event.target.checked) {
//       this.parentNode.classList.add('completed')
//     } else {
//       this.parentNode.classList.remove('completed')
//     }
//   })


document.querySelector('#todo-list').addEventListener('click', function(e) {
  if (e.target.classList.contains('action-button')) {
    console.log(e.target.dataset)
    if (e.target.dataset.action === 'edit') {
      const text = e.target.parentNode.parentNode.querySelector('span')
      text.setAttribute('contenteditable', "")
      text.focus()

    } else if (e.target.dataset.action === 'delete') {
      e.target.parentNode.parentNode.remove()
    }
  }
})

// document.querySelector('#todo-list').addEventListener('mouseout', function(e) {
//   if (e.target.tagName === 'LI') {
//     this.querySelector('.actions').style.visibility = 'hidden'
//   }
// })

