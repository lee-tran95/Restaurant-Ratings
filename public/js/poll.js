const thumbsUp = document.querySelectorAll('.fa-thumbs-up');
const thumbsDown = document.querySelectorAll('.fa-thumbs-down')
const reset = document.getElementById('reset-button')

Array.from(thumbsUp).forEach(element =>{
    element.addEventListener('click', increaseVote)
})
Array.from(thumbsDown).forEach(element =>{
    element.addEventListener('click', decreaseVote)
})

reset.addEventListener('click', resetVotes)

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

async function resetVotes(){
    const userId = window.location.pathname.substring(6)
    try{
        const response = await fetch('/poll/resetVote',{
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                '_userId':userId
            })
        })
        const data= await response.json()
        console.log(data)
        location.reload()
    }catch(err){console.log(err)}
}
