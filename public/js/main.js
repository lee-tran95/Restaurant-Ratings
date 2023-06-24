const showButton = document.getElementById('showDialog')
const cancelButton = document.getElementById('closeDialog')
const dialog = document.getElementById('addRestaurantDialog')
const trash = document.querySelectorAll('.fa-trash')
const menu = document.querySelector('.fa-bars')
const navLinks = document.querySelector('nav')

Array.from(trash).forEach(element =>{
    element.addEventListener('click', deleteRestaurant)
})


async function deleteRestaurant(){
    const restaurantId = this.parentNode.dataset.id
    try{
        const response = await fetch('/restaurant/deleteRestaurant',{
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                '_restaurantId': restaurantId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){console.log(err)}
}

showButton.addEventListener('click', () => {
    dialog.showModal()
})

cancelButton.addEventListener('click', () =>{
    dialog.close()
})

menu.addEventListener('click',() =>{
    navLinks.classList.toggle("active")
})