// lấy danh sách listCart dưới localStorage
function getListPrice() {
    var totalPrice = document.getElementById("btn-total");
    var total = 0;
    var listCart = document.getElementById("productCart");
    var listPriceCart = JSON.parse(
        localStorage.getItem("listCart")
    );
    console.log(listPriceCart);
    if (listPriceCart.length == "") {
        listCart.innerHTML = "";
        return
    }
    let data = `<tr>
           <td>Ảnh sản phẩm</td>
           <td>Tên sản phẩm</td>
           <td>Đơn giá</td>
           <td>Số lượng</td>
           <td>Thành tiền</td>
           <td>Hành động</td>
           </tr>
       `;
    for (var i = 0; i < listPriceCart.length; i++) {
        data += `<tr>
        <td><img src="${listPriceCart[i].image}"></td>
        <td>${listPriceCart[i].nameProduct}</td>
           <td> ${listPriceCart[i].price}</td>
           <td class="quantityCart">${listPriceCart[i].quantity}</td>
           <td>${listPriceCart[i].price}</td>
           <td class="deleteCart"><button class="btn-danger" onClick="deleteCart(${i})">Xóa</button></td>
           </tr>
       `;
        listCart.innerHTML = data;
        // total += listPriceCart[i].price;
    }
    // totalPrice.value = total;
}
getListPrice();

// xóa khỏi list Cart
function deleteCart(index) {
    var listPriceCart = JSON.parse(
        window.localStorage.getItem("listCart") || "[]"
    );
    listPriceCart.splice(index, 1);
    alert("Bạn muốn xóa khỏi giỏ hàng ?");
    window.localStorage.setItem("listCart", JSON.stringify(listPriceCart));
    getListPrice();
}
// var listCart = document.getElementById("productCart");
// var buttonTotal = document.getElementById("btn-total");
// buttonTotal.addEventListener("click", function () {
//     alert("Cảm ơn quý khách đã mua hàng !");
// });