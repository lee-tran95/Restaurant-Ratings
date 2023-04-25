const thumbsUp = document.querySelectorAll('.fa-thumbs-up');
const thumbsDown = document.querySelectorAll('.fa-thumbs-down')
const trash = document.querySelectorAll('.fa-trash')

Array.from(thumbsUp).forEach(element =>{
    element.addEventListener('click', increaseVote)
})
Array.from(thumbsDown).forEach(element =>{
    element.addEventListener('click', decreaseVote)
})
Array.from(trash).forEach(element =>{
    element.addEventListener('click', deleteRestaurant)
})

async function increaseVote(){
    const restaurantId = this.parentNode.dataset.id
    try{
        const response = await fetch('/poll/increaseVote',{
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                '_restaurantId':restaurantId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){ console.log(err)}
}

async function decreaseVote(){
    const restaurantId = this.parentNode.dataset.id
    try{
        const response = await fetch('/poll/decreaseVote',{
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                '_restaurantId':restaurantId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){console.log(err)}
}

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