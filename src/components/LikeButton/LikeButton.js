export const likeButton = () => {
    const likeBtns = document.querySelectorAll('.news__item-like')
    likeBtns.forEach((item) => {
        item.addEventListener('click', function () {
            item.classList.toggle('liked')
        })
    })
}
