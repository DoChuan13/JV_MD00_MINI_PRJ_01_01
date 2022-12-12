function BookProduct(id, img, type, name, price, quantity) {
    this.id = id;
    this.img = img;
    this.type = type;
    this.name = name;
    this.price = price;
}


let listProductFull = [];
listProductFull[0] = new BookProduct(1, '/Java Full Stack/Project/Mini_Project_01/assets/images/book/book1.jpg', 'Type 1', 'Murdering Last Year', 80);
listProductFull[1] = new BookProduct(2, '/Java Full Stack/Project/Mini_Project_01/assets/images/book/book2.jpg', 'Type 2', 'About The First Night', 70);
listProductFull[2] = new BookProduct(3, '/Java Full Stack/Project/Mini_Project_01/assets/images/book/book3.jpg', 'Type 3', 'Food Poison', 60);
listProductFull[3] = new BookProduct(4, '/Java Full Stack/Project/Mini_Project_01/assets/images/book/book4.jpg', 'Type 4', 'Graphic Design School', 50);
listProductFull[4] = new BookProduct(5, '/Java Full Stack/Project/Mini_Project_01/assets/images/book/book5.jpg', 'Type 5', 'Black Night', 40);
listProductFull[5] = new BookProduct(6, '/Java Full Stack/Project/Mini_Project_01/assets/images/book/book6.jpg', 'Type 6', 'Open The Sky', 50);
listProductFull[6] = new BookProduct(7, '/Java Full Stack/Project/Mini_Project_01/assets/images/book/book7.jpg', 'Type 7', 'The Big Book Of Science', 60);
listProductFull[7] = new BookProduct(8, '/Java Full Stack/Project/Mini_Project_01/assets/images/book/book8.jpg', 'Type 8', 'The New Science Of Everything', 70);

localStorage.setItem('listProduct', JSON.stringify(listProductFull));

let listProduct = JSON.parse(localStorage.getItem('listProduct'));
function drawlistProduct(listProduct) {
    let listbook = document.querySelector('.listbook');
    let product_data = '';
    for (let i = 0; i < listProduct.length; i++) {
        product_data += `<div class="bookdetail">
                            <div class="favorite_cart">
                                <p class="add_favorite">Add to Favorite</p>
                                <p class="add_cart">Add to Cart</p>
                            </div>
                            <img src="${listProduct[i].img}" alt="">
                            <div class="bookprice">
                                <p>${listProduct[i].type}</p>
                                <h2>${listProduct[i].name}</h2>
                                <p>${listProduct[i].price}</p>
                            </div>
                        </div>`
    }
    listbook.innerHTML = product_data;
}
drawlistProduct(listProduct);


let favorite = document.querySelectorAll(".add_favorite");
let cart = document.querySelectorAll(".add_cart");


let checkFavorite = localStorage.getItem('favorite');
let favoriteArr;
if (checkFavorite == null) {
    favoriteArr = [];
}
else {
    favoriteArr = JSON.parse(localStorage.getItem('favorite'));
}

for (let i = 0; i < favorite.length; i++) {
    favorite[i].addEventListener('click', function () {
        let flag = true;
        let position = 0;
        for (let j = 0; j < favoriteArr.length; j++) {
            if (this.parentNode.parentNode.childNodes[3].src == favoriteArr[j].img) {
                flag = false;
                position = j;
                break;
            }
        }
        if (flag == false) {
            favoriteArr.splice(position, 1);
            favorite[i].style.color = 'blue'
            alert(("Sản phẩm đã xóa khỏi danh mục yêu thích"));
        }
        else {
            favoriteArr.push({
                img: this.parentNode.parentNode.childNodes[3].src,
                type: this.parentNode.parentNode.childNodes[5].childNodes[1].innerText,
                name: this.parentNode.parentNode.childNodes[5].childNodes[3].innerText,
                price: this.parentNode.parentNode.childNodes[5].childNodes[5].innerText
            })
            favorite[i].style.color = 'red'
            alert(("Đã thêm vào danh mục yêu thích"));
        }
        localStorage.setItem('favorite', JSON.stringify(favoriteArr));
    })
}


let checkCart = localStorage.getItem('cart');
let cartArr;
if (checkCart == null) {
    cartArr = [];
}
else {
    cartArr = JSON.parse(localStorage.getItem('cart'));
}

for (let i = 0; i < cart.length; i++) {
    cart[i].addEventListener('click', function () {
        let flag = true;
        let position = 0;
        for (let j = 0; j < cartArr.length; j++) {
            if (this.parentNode.parentNode.childNodes[3].src == cartArr[j].img) {
                flag = false;
                position = j;
                break;
            }
        }
        let quantity = 1;
        if (flag == false) {
            cartArr[position].quantity++;
            alert(("Đã thêm số lượng cho sản phẩm"));
        }
        else {
            cartArr.push({
                img: this.parentNode.parentNode.childNodes[3].src,
                type: this.parentNode.parentNode.childNodes[5].childNodes[1].innerText,
                name: this.parentNode.parentNode.childNodes[5].childNodes[3].innerText,
                price: this.parentNode.parentNode.childNodes[5].childNodes[5].innerText,
                quantity: quantity++
            })
            alert(("Đã thêm vào giỏ hàng"));
        }

        //////B3: Chuyển mảng thành chuỗi bằng JSON.stringify và lưu vào localStorage
        localStorage.setItem('cart', JSON.stringify(cartArr));
        ////// console.log(localStorage);
    })
}

// localStorage.clear();

let user = document.querySelector(".user");
let visible = document.querySelector('.user_bar');
user.addEventListener('click', function () {
    let setting = visible.style.visibility === 'hidden' ? 'visible' : 'hidden';
    visible.style.visibility = setting;
})



let search = document.querySelector("#input_search");
search.addEventListener('input', function () {
    let listbook = document.querySelector('.listbook');
    let listProduct = JSON.parse(localStorage.getItem('listProduct'));
    let product_data = '';
    let searchArr = []

    for (let i = 0; i < listProduct.length; i++) {
        if (listProduct[i].name.toUpperCase().indexOf(search.value.toUpperCase()) != -1) {
            searchArr.push(listProduct[i]);
        }
    }

    drawlistProduct(searchArr)
})

