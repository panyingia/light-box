const reviews = [
    {
        img: "./images/image-product-1.jpg"
    },
    {
        img: "./images/image-product-2.jpg"
    },
    {
        img: "./images/image-product-3.jpg"
    },
    {
        img: "./images/image-product-4.jpg"
    }
]
// const gallery = document.getElementById('gallery')
const galleryImg = document.getElementById('gallery-img')
const thumbs = document.querySelectorAll('.thumb')
thumbs.forEach(function (thumb) {
    thumb.addEventListener('click', function (e) {
        const dataImg = e.target.dataset.img
        galleryImg.setAttribute('src', reviews[dataImg].img)
    })
})