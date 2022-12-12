// tạo lớp sản phẩm
function Product(image, nameProduct, price, quantity) {
    this.image = image;
    this.nameProduct = nameProduct;
    this.price = price;
    this.quantity = quantity;
}

// Khởi tạo các đối tượng sản phẩm
let newProduct1 = new Product(
    "/assets/list1.jpg",
    "Antaram",
    6000000,
    1
);
let newProduct2 = new Product(
    "/assets/list3.jpg",
    "Kaytlyn",
    4500000,
    1
);
let newProduct3 = new Product(
    "/assets/list2.jpg",
    "Esperanza",
    5600000,
    1
);
let newProduct4 = new Product(
    "/assets/list4.jpg",
    "Yaretzi",
    4000000,
    1
);
let newProduct5 = new Product(
    "/assets/list8.jpg",
    "Bambalina",
    3800000,
    1
);
let newProduct6 = new Product(
    "/assets/list6.jpg",
    "Pandora",
    5200000,
    1
);
let newProduct7 = new Product(
    "/assets/list7.jpg",
    "Cheryl",
    5500000,
    1
);
let newProduct8 = new Product(
    "/assets/list5.jpg",
    "Meadow",
    4900000,
    1
);
// push các sản phẩm vảo mảng rồi lưu xuống localStorage
var arrayProduct = [];
arrayProduct.push(newProduct1);
arrayProduct.push(newProduct2);
arrayProduct.push(newProduct3);
arrayProduct.push(newProduct4);
arrayProduct.push(newProduct5);
arrayProduct.push(newProduct6);
arrayProduct.push(newProduct7);
arrayProduct.push(newProduct8);
console.log(arrayProduct);

// Lấy danh sách listProduct dưới localStorage
let listProduct;
function getListProduct() {
    localStorage.setItem("listProduct",JSON.stringify(arrayProduct))
     listProduct = JSON.parse(localStorage.getItem("listProduct"));
    var productList = document.getElementById("listProduct");
    // Hiển thị các card đổ từ dữ liệu
    let data = "";
    for (var i = 0; i < listProduct.length; i++) {
        let item = ` <div class="productItem"> 
                        <div> <img src="${listProduct[i].image}"></div>
                        <div class="nameProduct"><p>${listProduct[i].nameProduct}</p></div>
                        <div class="priceProduct">
                            <div><p>đ${listProduct[i].price}</p></div> 
                            <div class="iconDetail">
                                <i class="fa-solid fa-cart-shopping iconCart" onClick="addProductCart(${i})"></i>
                                <i class="fa-regular fa-heart favorite" onClick="addFavorite(${i})"></i>
                            </div>
                        </div>
                    </div>`;
        data += item;
    }
    productList.innerHTML = data;
}
getListProduct();

// Mục giỏ hàng
function addProductCart(indexProduct) {
    // check xem listcart có trong localStoge k?
    var checkcart = localStorage.getItem("listCart");
    if (checkcart == null) {
        // k tồn tại tạo ra mảng trống
        var listCart = []
    }
    else {
        // đẩy dữ liệu từ local ra mảng
        var listCart = JSON.parse(window.localStorage.getItem("listCart"))
    }
    // push dữ liệu mới vào mảng đồng thời đẩy lên local Stoge
    listCart.push(arrayProduct[indexProduct]);
    window.localStorage.setItem("listCart", JSON.stringify(listCart));
    alert(" Đã thêm vào giỏ hàng !");

}

// Mục yêu thích
function addFavorite(index) {
    // đổi màu trái tim
    var favorite = document.getElementsByClassName("favorite");
    favorite[index].style.color = "red";

    // check local có dữ liệu k
    var checkfavorite = localStorage.getItem("listFavorite");
    if (checkfavorite == null) {
        // nếu k tạo ra mảng mới
        var listFavorite = []
    }
    else {
        // đẩy dữ liệu từ local ra mảng
        var listFavorite = JSON.parse(window.localStorage.getItem("listFavorite"))
    }
    // push dữ liệu mới vào mảng
    listFavorite.push(listProduct[index]);
    window.localStorage.setItem("listFavorite", JSON.stringify(listFavorite));
    alert("Thêm thêm vào yêu thích !");
}



