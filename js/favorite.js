////B1: Chuyển giá trị localStorage trở lại thành mảng bằng parse
// console.log(favoriteArr);
function favoriteDraw() {
    let favoriteArr = JSON.parse(localStorage.getItem("favorite"));
    let list = document.querySelector("div.listbook");
    let data = '';
    if (favoriteArr.length == 0) {
        list.innerHTML = "Danh mục yêu thích trống"
    }
    else {
        ////B2: In mảng ra Html
        for (let i = 0; i < favoriteArr.length; i++) {
            data += `<div class="bookdetail">
                            <img src="${favoriteArr[i].img}" alt="">
                        <div class="bookprice">
                                <p>${favoriteArr[i].type}</p>
                                <h2>${favoriteArr[i].name}</h2>
                                <div class="remove_favorite">
                                    <p>${favoriteArr[i].price}</p>
                                    <button class="remove_btn">Remove</button>
                                </div>
                        </div>
                    </div>`
        }
        list.innerHTML = data;
    }
}
favoriteDraw();


let user = document.querySelector(".user");
let visible = document.querySelector('.user_bar');
user.addEventListener('click', function () {
    let visibility = visible.style.visibility === 'hidden' ? 'visible' : 'hidden';
    visible.style.visibility = visibility;
})

let clear_favorite = document.querySelector('.clear_favorite');
clear_favorite.addEventListener('click', function () {
    localStorage.removeItem('favorite');
    favoriteDraw();
})




function removeFavorite() {
    let remove_btn = document.querySelectorAll('button.remove_btn');
    for (let i = 0; i < remove_btn.length; i++) {
        remove_btn[i].addEventListener('click', function () {
            if (confirm("Bạn có chắc chắn muốn xóa khỏi yêu thích?")) {
                let favoriteArr = JSON.parse(localStorage.getItem("favorite"));
                favoriteArr.splice(i, 1);
                localStorage.setItem('favorite', JSON.stringify(favoriteArr));
                favoriteDraw();
                removeFavorite();
            }
        })
    }
}
removeFavorite();