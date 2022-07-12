const thumbsUp = document.querySelectorAll('.fa-thumbs-up');
const thumbsDown = document.querySelectorAll('.fa-thumbs-down')

Array.from(thumbsUp).forEach(element =>{
    element.addEventListener('click', increaseRating)
})
Array.from(thumbsDown).forEach(element =>{
    element.addEventListener('click', decreaseRating)
})
async function increaseRating(){
    const rName = this.parentNode.childNodes[1].innerText
    const rating = Number(this.parentNode.childNodes[3].innerText)
    try{
        const response = await fetch('increaseRating',{
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'restaurantNameS':rName,
                'ratingS':rating
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()


    }catch(err){ console.log(err)}
}

async function decreaseRating(){
    const rName = this.parentNode.childNodes[1].innerText
    const rating = Number(this.parentNode.childNodes[3].innerText)
    try{
        const response = await fetch('decreaseRating',{
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'restaurantNameS':rName,
                'ratingS': rating
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){console.log(err)}
}