const thumbsUp = document.querySelectorAll('.fa-thumbs-up');
Array.from(thumbsUp).forEach(element =>{
    element.addEventListener('click', increaseRating)
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