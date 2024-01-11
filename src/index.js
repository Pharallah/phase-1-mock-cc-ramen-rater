// write your code here 

//Write a DOMContentLoaded event listener that triggers a GET fetch request, extract images, append to div #ramen-menu

//Click on an image and see info about that ramen that displays inside the #ramen-detail div


//Add form functionality to create a new ramen based on the user input and append it to the #ramen-menu div



document.addEventListener("DOMContentLoaded", loadRamen)

const ramenMenu = document.querySelector('#ramen-menu')
const ramenDetail = document.querySelector('#ramen-detail')
const ramenURL = "http://localhost:3000/ramens"

function loadRamen() {
    fetch(ramenURL)
    .then(res => res.json())
    .then(ramenDishes => {
        const form = document.querySelector('#new-ramen')

        form.addEventListener('submit', (e) => {
            e.preventDefault()
            const newName = document.querySelector('#new-name').value
            const newRestaurant = document.querySelector('#new-restaurant').value
            const newImage = document.querySelector('#new-image').value
            const newRating = document.querySelector('#new-rating').value
            parseInt(newRating)
            const newComment = document.querySelector('#new-comment').value
                    
            const newRamen = {
                name: newName,
                restaurant: newRestaurant,
                image: newImage,
                rating: newRating,
                comment: newComment,
                id: `${newName}`
            }
            renderRamen(newRamen)
        })
        
        ramenDishes.forEach(ramen => renderRamen(ramen))
    })
}

function renderRamen(ramen) {
    const img = document.createElement('img');
    img.src = ramen.image
    ramenMenu.appendChild(img)

    img.addEventListener('click', () => {
        const img = document.querySelector('.detail-image')
        const name = document.querySelector('.name')
        const restaurant = document.querySelector('.restaurant')
        const rating = document.querySelector('#rating-display')
        const comment = document.querySelector('#comment-display')
        
        img.src = ramen.image
        name.innerText = ramen.name
        restaurant.innerText = ramen.restaurant
        rating.innerText = ramen.rating
        comment.innerText = ramen.comment
            
        ramenDetail.append(img, name, restaurant)
    })
}