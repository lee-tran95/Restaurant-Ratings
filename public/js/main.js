
const trash = document.querySelectorAll('.fa-trash')

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