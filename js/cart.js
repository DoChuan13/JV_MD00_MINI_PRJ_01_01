function cartDraw() {
    let cartArr = JSON.parse(localStorage.getItem("cart"));
    let list = document.querySelector("div.listbook");
    let data = ''
    if (cartArr == null) {
        list.innerHTML = "Danh mục giỏ hàng trống"
    }
    else {
        ////B2: In mảng ra Html
        data += `<table>
                    <tr>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                        <th>Total Amount</th>
                    </tr>`
        for (let i = 0; i < cartArr.length; i++) {
            data += `<tr>
                        <td><img src="${cartArr[i].img}" alt=""></td>
                        <td>${cartArr[i].name}</td>
                        <td>${cartArr[i].type}</td>
                        <td>${cartArr[i].price}</td>
                        <td><input type="number" value="${cartArr[i].quantity}" class="quantity_cart"></td>
                        <td>Remove</td>
                        <td>${cartArr[i].quantity * cartArr[i].price}</td>
                    </tr>`
        }
        data += `<tr>
                    <td colspan="6">Tổng</td>
                    <td id="sum_price"></td>
                </tr>`
        data += `</table>`
        list.innerHTML = data;
    }
}
cartDraw();

let user = document.querySelector(".user");
let visible = document.querySelector('.user_bar');
user.addEventListener('click', function () {
    let visibility = visible.style.visibility === 'hidden' ? 'visible' : 'hidden';
    visible.style.visibility = visibility;
})


//Clear Cart
let clear_favorite = document.querySelector('.clear_cart');
clear_favorite.addEventListener('click', function () {
    if (confirm("Bạn có chắc chắn muốn xóa tất cả")) {
        localStorage.removeItem('cart');
        cartDraw();
    }
})

//Sum Price
function sumPrice() {
    let sum_price = document.querySelector("#sum_price");
    let sum = 0;
    let cartArr = JSON.parse(localStorage.getItem("cart"));
    for (let i = 0; i < cartArr.length; i++) {
        sum += cartArr[i].price * cartArr[i].quantity;
    }
    // console.log(sum_price.innerHTML);
    sum_price.innerHTML = sum;
}

sumPrice();

function changeQ() {
    let changeQuantity = document.querySelectorAll(".quantity_cart")
    for (let i = 0; i < changeQuantity.length; i++) {
        changeQuantity[i].addEventListener('change', function () {
            let cartArr = JSON.parse(localStorage.getItem("cart"));
            // console.log("1111");
            cartArr[i].quantity = changeQuantity[i].value;
            localStorage.setItem('cart', JSON.stringify(cartArr));
            cartDraw();
            changeQ();
            sumPrice()
        })
    }
}
changeQ();