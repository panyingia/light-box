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
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
// 按下小圖時 改變大圖的src屬性
thumbs.forEach(function (thumb) {
    thumb.addEventListener('click', function (e) {
        const dataImg = e.target.dataset.img
        galleryImg.setAttribute('src', reviews[dataImg].img)
    })
})
// 滑鼠滑入小圖時 加上filter樣式 
// 滑鼠
thumbs.forEach(function (thumb) {
    thumb.addEventListener('mouseover', addClassHandler)
    thumb.addEventListener('mouseleave', removeClassHadler)
})
function addClassHandler(e) {
    e.currentTarget.classList.add('thumb-filter');
}
function removeClassHadler(e) {
    e.currentTarget.classList.remove('thumb-filter');
}



let currentItem = 0;
nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    galleryImg.setAttribute('src', reviews[currentItem].img)
})
prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1
    }
    galleryImg.setAttribute('src', reviews[currentItem].img)
})