let menu = document.querySelector(`.menu`)
let sidebar = document.querySelector(`.sidebar`)

function openSidebar(){
  sidebar.classList.add(`active`)
}


menu.addEventListener(`click`,openSidebar);


let closeBtn=document.querySelector(`.close_sidebar`)

function closeSidebar(){
  sidebar.classList.remove(`active`)
}

closeBtn.addEventListener(`click`,closeSidebar)