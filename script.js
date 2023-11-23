var lengthPrd;
var selectedProducts = [];

// Load danh sách sản phẩm đã chọn từ Local Storage khi trang web được load
window.onload = function () {
    var storedProducts = localStorage.getItem('selectedProducts');
    if (storedProducts) {
        selectedProducts = JSON.parse(storedProducts);
        displaySelectedProducts();
    }
};


function addProductToSelectedList(productId) {

    // Lấy thông tin sản phẩm từ trang
    var productDiv = document.getElementById('product' + productId);
    var productName = productDiv.querySelector('.name-prdt').textContent;
    var productPrice = productDiv.querySelector('.price-prdt').textContent;
    
    // Lấy đường dẫn hình ảnh
    var productImage = productDiv.querySelector('.img-fluid').src;

    // Kiểm tra xem sản phẩm đã tồn tại trong danh sách hay chưa
    var existingProductIndex = selectedProducts.findIndex(function (selectedProduct) {
        return selectedProduct.id === productId;
    });

    // Nếu sản phẩm đã tồn tại trong danh sách, thông báo và không thực hiện thêm
    if (existingProductIndex !== -1) {
        window.alert("Sản phẩm đã chọn rồi!");
        return;
    }

    // Thêm sản phẩm mới vào danh sách
    var product = {
        id: productId,
        name: productName,
        price: productPrice,
        image: productImage
    };
    selectedProducts.push(product);

    // Hiển thị danh sách đã chọn và lưu vào Local Storage
    displaySelectedProducts();
    localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));

    // Tắt modal khi thêm sản phẩm
    $('#cpu').modal('hide');
}

function displaySelectedProducts() {
    var selectedProductsList = document.getElementById('selectedProductsList');
    selectedProductsList.innerHTML = ''; // Xóa nội dung cũ
     lengthPrd = selectedProducts.length;
     if(lengthPrd >=1){
        buttoncpu.style.display = 'none';
    }
    // Hiển thị danh sách đã chọn
    selectedProducts.forEach(function (product) {
        var listItem = document.createElement('li');

        // Tạo phần tử hình ảnh
        var image = document.createElement('img');
        image.src = product.image;
        image.alt = product.name;
        image.style.maxWidth = '90px'; // Điều chỉnh kích thước hình ảnh tùy ý
        listItem.appendChild(image);

        // Tạo phần tử đoạn văn thứ nhất
        var paragraph1 = document.createElement('p');
        paragraph1.textContent = product.name;
        paragraph1.className = 'name-prdt';
        listItem.appendChild(paragraph1);

        // Tạo phần tử đoạn văn thứ hai
        var paragraph2 = document.createElement('p');
        paragraph2.textContent = product.price;
        paragraph2.className = 'price-prdt';
        listItem.appendChild(paragraph2);

        // Tạo nút xóa với biểu tượng (icon)
        var deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>'; 
        deleteButton.className = 'delete-button';
        deleteButton.onclick = function() {
            deleteProduct(product.id);
        };
        listItem.appendChild(deleteButton);

        selectedProductsList.appendChild(listItem);
    });
}

function deleteProduct(productId) {
    // Xác nhận xóa sản phẩm
    var confirmDelete = window.confirm("Bạn có chắc muốn xóa sản phẩm khỏi danh sách?");
    if (confirmDelete) {
        // Xóa sản phẩm khỏi danh sách
        var existingProductIndex = selectedProducts.findIndex(function (selectedProduct) {
            return selectedProduct.id === productId;
        });

        if (existingProductIndex !== -1) {
            selectedProducts.splice(existingProductIndex, 1);
            buttoncpu.style.display = 'block';

            // Hiển thị danh sách đã chọn và lưu vào Local Storage
            displaySelectedProducts();
            localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
        }
    }
}

