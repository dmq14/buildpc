var lengthPrd;
var selectedProducts = [];
var selectedMain = [];
var selectedRam = [];
var selectedVga = [];
var selectedSsd = [];
var selectedPsu = [];
var selectedVo = [];
// Load danh sách sản phẩm đã chọn từ Local Storage khi trang web được load
window.onload = function () {
    var storedProducts = localStorage.getItem('selectedProducts');
    var storedMain = localStorage.getItem('selectedMain');
    var storedRam = localStorage.getItem('selectedRam');
    var storedVga = localStorage.getItem('selectedVga');
    var storedSsd = localStorage.getItem('selectedSsd');
    var storedPsu = localStorage.getItem('selectedPsu');
    var storedVo = localStorage.getItem('selectedVo');

    if (storedProducts) {
        selectedProducts = JSON.parse(storedProducts);
        displaySelectedProducts();
    }
    if (storedMain) {
        selectedMain = JSON.parse(storedMain);
        displaySelectedMain();
    }
    if (storedRam) {
        selectedRam = JSON.parse(storedRam);
        displaySelectedRam();
    }
    if (storedVga) {
        selectedVga = JSON.parse(storedVga);
        displaySelectedVga();
    }
    if (storedSsd) {
        selectedSsd = JSON.parse(storedSsd);
        displaySelectedSsd();
    }
    if (storedPsu) {
        selectedPsu = JSON.parse(storedPsu);
        displaySelectedPsu();
    }
    if (storedVo) {
        selectedVo = JSON.parse(storedVo);
        displaySelectedVo();
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


//----------------------------------------------------------------------------------------------------------------


// Thêm sản phẩm Main vào danh sách đã chọn
function addMain(mainId) {
    // Lấy thông tin sản phẩm từ trang
    var mainDiv = document.getElementById('main' + mainId);
    var mainName = mainDiv.querySelector('.name-prdt').textContent;
    var mainPrice = mainDiv.querySelector('.price-prdt').textContent;

    // Lấy đường dẫn hình ảnh
    var mainImage = mainDiv.querySelector('.img-fluid').src;

    // Kiểm tra xem Main đã tồn tại trong danh sách hay chưa
    var existingMainIndex = selectedMain.findIndex(function (selectedMain) {
        return selectedMain.id === mainId;
    });

    // Nếu Main đã tồn tại trong danh sách, thông báo và không thực hiện thêm
    if (existingMainIndex !== -1) {
        window.alert("Main đã chọn rồi!");
        return;
    }

    // Thêm Main mới vào danh sách
    var main = {
        id: mainId,
        name: mainName,
        price: mainPrice,
        image: mainImage
    };
    selectedMain.push(main);

    // Hiển thị danh sách đã chọn và lưu vào Local Storage
    displaySelectedMain();
    localStorage.setItem('selectedMain', JSON.stringify(selectedMain));

    // Tắt modal khi thêm Main
    $('#main').modal('hide');
}

// Hiển thị danh sách Main đã chọn
function displaySelectedMain() {
    var selectedMainList = document.getElementById('selectedMain');
    selectedMainList.innerHTML = ''; // Xóa nội dung cũ
    lengthPrd = selectedMain.length;
    if(lengthPrd >=1){
       buttonmain.style.display = 'none';
   }
    // Hiển thị danh sách đã chọn
    selectedMain.forEach(function (main) {
        var listItem = document.createElement('li');

        // Tạo phần tử hình ảnh
        var image = document.createElement('img');
        image.src = main.image;
        image.alt = main.name;
        image.style.maxWidth = '90px'; // Điều chỉnh kích thước hình ảnh tùy ý
        listItem.appendChild(image);

        // Tạo phần tử đoạn văn thứ nhất
        var paragraph1 = document.createElement('p');
        paragraph1.textContent = main.name;
        paragraph1.className = 'name-prdt';
        listItem.appendChild(paragraph1);

        // Tạo phần tử đoạn văn thứ hai
        var paragraph2 = document.createElement('p');
        paragraph2.textContent = main.price;
        paragraph2.className = 'price-prdt';
        listItem.appendChild(paragraph2);

        // Tạo nút xóa với biểu tượng (icon)
        var deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
        deleteButton.className = 'delete-button';
        deleteButton.onclick = function () {
            deleteMain(main.id);
        };
        listItem.appendChild(deleteButton);

        selectedMainList.appendChild(listItem);
    });
}

// Xóa Main khỏi danh sách đã chọn
function deleteMain(mainId) {
    // Xác nhận xóa Main
    var confirmDelete = window.confirm("Bạn có chắc muốn xóa Main khỏi danh sách?");
    if (confirmDelete) {
        buttonmain.style.display = 'block';
        // Xóa Main khỏi danh sách
        var existingMainIndex = selectedMain.findIndex(function (selectedMain) {
            return selectedMain.id === mainId;
            
        });

        if (existingMainIndex !== -1) {
            selectedMain.splice(existingMainIndex, 1);

            // Hiển thị danh sách đã chọn và lưu vào Local Storage
            displaySelectedMain();
            localStorage.setItem('selectedMain', JSON.stringify(selectedMain));
        }
    }
}

//Ram----------------------------------



function addRam(ramId) {
    // Lấy thông tin sản phẩm từ trang
    var ramDiv = document.getElementById('ram' + ramId);
    var ramName = ramDiv.querySelector('.name-prdt').textContent;
    var ramPrice = ramDiv.querySelector('.price-prdt').textContent;

    // Lấy đường dẫn hình ảnh
    var ramImage = ramDiv.querySelector('.img-fluid').src;

    // Kiểm tra xem RAM đã tồn tại trong danh sách hay chưa
    var existingRamIndex = selectedRam.findIndex(function (selectedRam) {
        return selectedRam.id === ramId;
    });

    // Nếu RAM đã tồn tại trong danh sách, thông báo và không thực hiện thêm
    if (existingRamIndex !== -1) {
        window.alert("RAM đã chọn rồi!");
        return;
    }

    // Thêm RAM mới vào danh sách
    var ram = {
        id: ramId,
        name: ramName,
        price: ramPrice,
        image: ramImage
    };
    selectedRam.push(ram);

    // Hiển thị danh sách đã chọn và lưu vào Local Storage
    displaySelectedRam();
    localStorage.setItem('selectedRam', JSON.stringify(selectedRam));
    
    // Tắt modal khi thêm Main
    $('#ram').modal('hide');
}

function displaySelectedRam() {
    var selectedRamList = document.getElementById('selectedRam');
    selectedRamList.innerHTML = ''; // Xóa nội dung cũ
    lengthPrd = selectedRam.length;
    if(lengthPrd >=1){
       buttonram.style.display = 'none';
   }
    // Hiển thị danh sách đã chọn
    selectedRam.forEach(function (ram) {
        var listItem = document.createElement('li');

        // Tạo phần tử hình ảnh
        var image = document.createElement('img');
        image.src = ram.image;
        image.alt = ram.name;
        image.style.maxWidth = '90px'; // Điều chỉnh kích thước hình ảnh tùy ý
        listItem.appendChild(image);

        // Tạo phần tử đoạn văn thứ nhất
        var paragraph1 = document.createElement('p');
        paragraph1.textContent = ram.name;
        paragraph1.className = 'name-prdt';
        listItem.appendChild(paragraph1);

        // Tạo phần tử đoạn văn thứ hai
        var paragraph2 = document.createElement('p');
        paragraph2.textContent = ram.price;
        paragraph2.className = 'price-prdt';
        listItem.appendChild(paragraph2);

        // Tạo nút xóa với biểu tượng (icon)
        var deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
        deleteButton.className = 'delete-button';
        deleteButton.onclick = function () {
            deleteRam(ram.id);
        };
        listItem.appendChild(deleteButton);

        selectedRamList.appendChild(listItem);
    });
}

function deleteRam(ramId) {
    // Xác nhận xóa RAM
    var confirmDelete = window.confirm("Bạn có chắc muốn xóa RAM khỏi danh sách?");
    if (confirmDelete) {
        // Xóa RAM khỏi danh sách
        buttonram.style.display = 'block';
        var existingRamIndex = selectedRam.findIndex(function (selectedRam) {
            return selectedRam.id === ramId;
        });

        if (existingRamIndex !== -1) {
            selectedRam.splice(existingRamIndex, 1);

            // Hiển thị danh sách đã chọn và lưu vào Local Storage
            displaySelectedRam();
            localStorage.setItem('selectedRam', JSON.stringify(selectedRam));
        }
    }
}

//VGA---------------------------------
function addVga(vgaId) {
    // Lấy thông tin sản phẩm từ trang
    var vgaDiv = document.getElementById('vga' + vgaId);
    var vgaName = vgaDiv.querySelector('.name-prdt').textContent;
    var vgaPrice = vgaDiv.querySelector('.price-prdt').textContent;

    // Lấy đường dẫn hình ảnh
    var vgaImage = vgaDiv.querySelector('.img-fluid').src;

    // Kiểm tra xem VGA đã tồn tại trong danh sách hay chưa
    var existingVgaIndex = selectedVga.findIndex(function (selectedVga) {
        return selectedVga.id === vgaId;
    });

    // Nếu VGA đã tồn tại trong danh sách, thông báo và không thực hiện thêm
    if (existingVgaIndex !== -1) {
        window.alert("VGA đã chọn rồi!");
        return;
    }

    // Thêm VGA mới vào danh sách
    var vga = {
        id: vgaId,
        name: vgaName,
        price: vgaPrice,
        image: vgaImage
    };
    selectedVga.push(vga);

    // Hiển thị danh sách đã chọn và lưu vào Local Storage
    displaySelectedVga();
    localStorage.setItem('selectedVga', JSON.stringify(selectedVga));
        // Tắt modal khi thêm Main
        $('#vga').modal('hide');
}

function displaySelectedVga() {
    var selectedVgaList = document.getElementById('selectedVga');
    selectedVgaList.innerHTML = ''; // Xóa nội dung cũ
    lengthPrd = selectedVga.length;
     if(lengthPrd >=1){
        buttonvga.style.display = 'none';
    }
    // Hiển thị danh sách đã chọn
    selectedVga.forEach(function (vga) {
        var listItem = document.createElement('li');

        // Tạo phần tử hình ảnh
        var image = document.createElement('img');
        image.src = vga.image;
        image.alt = vga.name;
        image.style.maxWidth = '90px'; // Điều chỉnh kích thước hình ảnh tùy ý
        listItem.appendChild(image);

        // Tạo phần tử đoạn văn thứ nhất
        var paragraph1 = document.createElement('p');
        paragraph1.textContent = vga.name;
        paragraph1.className = 'name-prdt';
        listItem.appendChild(paragraph1);

        // Tạo phần tử đoạn văn thứ hai
        var paragraph2 = document.createElement('p');
        paragraph2.textContent = vga.price;
        paragraph2.className = 'price-prdt';
        listItem.appendChild(paragraph2);

        // Tạo nút xóa với biểu tượng (icon)
        var deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
        deleteButton.className = 'delete-button';
        deleteButton.onclick = function () {
            deleteVga(vga.id);
        };
        listItem.appendChild(deleteButton);

        selectedVgaList.appendChild(listItem);
    });
}

function deleteVga(vgaId) {
    // Xác nhận xóa VGA
    var confirmDelete = window.confirm("Bạn có chắc muốn xóa VGA khỏi danh sách?");
    if (confirmDelete) {
        // Xóa VGA khỏi danh sách
        buttonvga.style.display = 'block';
        var existingVgaIndex = selectedVga.findIndex(function (selectedVga) {
            return selectedVga.id === vgaId;
        });

        if (existingVgaIndex !== -1) {
            selectedVga.splice(existingVgaIndex, 1);

            // Hiển thị danh sách đã chọn và lưu vào Local Storage
            displaySelectedVga();
            localStorage.setItem('selectedVga', JSON.stringify(selectedVga));
        }
    }
}

//SSD---------------
function addSsd(ssdId) {
    // Lấy thông tin sản phẩm từ trang
    var ssdDiv = document.getElementById('ssd' + ssdId);
    var ssdName = ssdDiv.querySelector('.name-prdt').textContent;
    var ssdPrice = ssdDiv.querySelector('.price-prdt').textContent;

    // Lấy đường dẫn hình ảnh
    var ssdImage = ssdDiv.querySelector('.img-fluid').src;

    // Kiểm tra xem SSD đã tồn tại trong danh sách hay chưa
    var existingSsdIndex = selectedSsd.findIndex(function (selectedSsd) {
        return selectedSsd.id === ssdId;
    });

    // Nếu SSD đã tồn tại trong danh sách, thông báo và không thực hiện thêm
    if (existingSsdIndex !== -1) {
        window.alert("SSD đã chọn rồi!");
        return;
    }

    // Thêm SSD mới vào danh sách
    var ssd = {
        id: ssdId,
        name: ssdName,
        price: ssdPrice,
        image: ssdImage
    };
    selectedSsd.push(ssd);

    // Hiển thị danh sách đã chọn và lưu vào Local Storage
    displaySelectedSsd();
    localStorage.setItem('selectedSsd', JSON.stringify(selectedSsd));
    $('#ssd').modal('hide');
}

function displaySelectedSsd() {
    var selectedSsdList = document.getElementById('selectedSsd');
    selectedSsdList.innerHTML = ''; // Xóa nội dung cũ
    lengthPrd = selectedSsd.length;
     if(lengthPrd >=1){
        buttonssd.style.display = 'none';
    }
    
    // Hiển thị danh sách đã chọn
    selectedSsd.forEach(function (ssd) {
        var listItem = document.createElement('li');

        // Tạo phần tử hình ảnh
        var image = document.createElement('img');
        image.src = ssd.image;
        image.alt = ssd.name;
        image.style.maxWidth = '90px'; // Điều chỉnh kích thước hình ảnh tùy ý
        listItem.appendChild(image);

        // Tạo phần tử đoạn văn thứ nhất
        var paragraph1 = document.createElement('p');
        paragraph1.textContent = ssd.name;
        paragraph1.className = 'name-prdt';
        listItem.appendChild(paragraph1);

        // Tạo phần tử đoạn văn thứ hai
        var paragraph2 = document.createElement('p');
        paragraph2.textContent = ssd.price;
        paragraph2.className = 'price-prdt';
        listItem.appendChild(paragraph2);

        // Tạo nút xóa với biểu tượng (icon)
        var deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
        deleteButton.className = 'delete-button';
        deleteButton.onclick = function () {
            deleteSsd(ssd.id);
        };
        listItem.appendChild(deleteButton);

        selectedSsdList.appendChild(listItem);
    });
}

function deleteSsd(ssdId) {
    // Xác nhận xóa SSD
    var confirmDelete = window.confirm("Bạn có chắc muốn xóa SSD khỏi danh sách?");
    if (confirmDelete) {
        // Xóa SSD khỏi danh sách
        buttonssd.style.display = 'block';
        var existingSsdIndex = selectedSsd.findIndex(function (selectedSsd) {
            return selectedSsd.id === ssdId;
        });

        if (existingSsdIndex !== -1) {
            selectedSsd.splice(existingSsdIndex, 1);

            // Hiển thị danh sách đã chọn và lưu vào Local Storage
            displaySelectedSsd();
            localStorage.setItem('selectedSsd', JSON.stringify(selectedSsd));
        }
    }
}


//PSU---------------------------------------
function addPsu(psuId) {
    // Lấy thông tin sản phẩm từ trang
    var psuDiv = document.getElementById('psu' + psuId);
    var psuName = psuDiv.querySelector('.name-prdt').textContent;
    var psuPrice = psuDiv.querySelector('.price-prdt').textContent;

    // Lấy đường dẫn hình ảnh
    var psuImage = psuDiv.querySelector('.img-fluid').src;

    // Kiểm tra xem PSU đã tồn tại trong danh sách hay chưa
    var existingPsuIndex = selectedPsu.findIndex(function (selectedPsu) {
        return selectedPsu.id === psuId;
    });

    // Nếu PSU đã tồn tại trong danh sách, thông báo và không thực hiện thêm
    if (existingPsuIndex !== -1) {
        window.alert("PSU đã chọn rồi!");
        return;
    }

    // Thêm PSU mới vào danh sách
    var psu = {
        id: psuId,
        name: psuName,
        price: psuPrice,
        image: psuImage
    };
    selectedPsu.push(psu);

    // Hiển thị danh sách đã chọn và lưu vào Local Storage
    displaySelectedPsu();
    localStorage.setItem('selectedPsu', JSON.stringify(selectedPsu));

    $('#psu').modal('hide');
}

function displaySelectedPsu() {
    var selectedPsuList = document.getElementById('selectedPsu');
    selectedPsuList.innerHTML = ''; // Xóa nội dung cũ
    lengthPrd = selectedPsu.length;
     if(lengthPrd >=1){
        buttonpsu.style.display = 'none';
    }
    // Hiển thị danh sách đã chọn
    selectedPsu.forEach(function (psu) {
        var listItem = document.createElement('li');

        // Tạo phần tử hình ảnh
        var image = document.createElement('img');
        image.src = psu.image;
        image.alt = psu.name;
        image.style.maxWidth = '90px'; // Điều chỉnh kích thước hình ảnh tùy ý
        listItem.appendChild(image);

        // Tạo phần tử đoạn văn thứ nhất
        var paragraph1 = document.createElement('p');
        paragraph1.textContent = psu.name;
        paragraph1.className = 'name-prdt';
        listItem.appendChild(paragraph1);

        // Tạo phần tử đoạn văn thứ hai
        var paragraph2 = document.createElement('p');
        paragraph2.textContent = psu.price;
        paragraph2.className = 'price-prdt';
        listItem.appendChild(paragraph2);

        // Tạo nút xóa với biểu tượng (icon)
        var deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
        deleteButton.className = 'delete-button';
        deleteButton.onclick = function () {
            deletePsu(psu.id);
        };
        listItem.appendChild(deleteButton);

        selectedPsuList.appendChild(listItem);
    });
}

function deletePsu(psuId) {
    // Xác nhận xóa PSU
    var confirmDelete = window.confirm("Bạn có chắc muốn xóa PSU khỏi danh sách?");
    if (confirmDelete) {
        // Xóa PSU khỏi danh sách
        buttonpsu.style.display = 'block';
        var existingPsuIndex = selectedPsu.findIndex(function (selectedPsu) {
            return selectedPsu.id === psuId;
        });

        if (existingPsuIndex !== -1) {
            selectedPsu.splice(existingPsuIndex, 1);

            // Hiển thị danh sách đã chọn và lưu vào Local Storage
            displaySelectedPsu();
            localStorage.setItem('selectedPsu', JSON.stringify(selectedPsu));
        }
    }
}

//CASE--------------------------------------------


function addVo(voId) {
    // Get information about the selected Vo component from the page
    var voDiv = document.getElementById('vo' + voId);
    var voName = voDiv.querySelector('.name-prdt').textContent;
    var voPrice = voDiv.querySelector('.price-prdt').textContent;
    var voImage = voDiv.querySelector('.img-fluid').src;

    // Check if the Vo component is already in the selected list
    var existingVoIndex = selectedVo.findIndex(function (selectedVo) {
        return selectedVo.id === voId;
    });

    // If the Vo component is already in the list, show an alert and do not add it again
    if (existingVoIndex !== -1) {
        window.alert("Vo đã chọn rồi!");
        return;
    }

    // Add the selected Vo component to the list
    var selectedVoComponent = {
        id: voId,
        name: voName,
        price: voPrice,
        image: voImage
    };
    selectedVo.push(selectedVoComponent);

    // Display the selected Vo components and save to Local Storage
    displaySelectedVo();
    localStorage.setItem('selectedVo', JSON.stringify(selectedVo));

    $('#vo').modal('hide');
}

function displaySelectedVo() {
    var selectedVoList = document.getElementById('selectedVo');
    selectedVoList.innerHTML = ''; // Clear the old content
    lengthPrd = selectedVo.length;
     if(lengthPrd >=1){
        buttonvo.style.display = 'none';
    }
    // Display the selected Vo components
    selectedVo.forEach(function (selectedVoComponent) {
        var listItem = document.createElement('li');

        // Create the image element
        var image = document.createElement('img');
        image.src = selectedVoComponent.image;
        image.alt = selectedVoComponent.name;
        image.style.maxWidth = '90px'; // Adjust image size as needed
        listItem.appendChild(image);

        // Create the first paragraph element
        var paragraph1 = document.createElement('p');
        paragraph1.textContent = selectedVoComponent.name;
        paragraph1.className = 'name-prdt';
        listItem.appendChild(paragraph1);

        // Create the second paragraph element
        var paragraph2 = document.createElement('p');
        paragraph2.textContent = selectedVoComponent.price;
        paragraph2.className = 'price-prdt';
        listItem.appendChild(paragraph2);

        // Create the delete button with the trash icon
        var deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
        deleteButton.className = 'delete-button';
        deleteButton.onclick = function () {
            deleteVo(selectedVoComponent.id);
        };
        listItem.appendChild(deleteButton);

        selectedVoList.appendChild(listItem);
    });
}

function deleteVo(voId) {
    // Confirm the deletion of the Vo component
    var confirmDelete = window.confirm("Bạn có chắc muốn xóa Vo khỏi danh sách?");
    if (confirmDelete) {
        // Delete the Vo component from the list
        buttonvo.style.display = 'block';
        var existingVoIndex = selectedVo.findIndex(function (selectedVoComponent) {
            return selectedVoComponent.id === voId;
        });

        if (existingVoIndex !== -1) {
            selectedVo.splice(existingVoIndex, 1);

            // Display the selected Vo components and save to Local Storage
            displaySelectedVo();
            localStorage.setItem('selectedVo', JSON.stringify(selectedVo));
        }
    }
}