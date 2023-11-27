var lengthPrd;
var selectedCpus = [];
var selectedMain = [];
var selectedRam = [];
var selectedVga = [];
var selectedSsd = [];
var selectedHdd = [];
var selectedPsu = [];
var selectedVo = [];
var selectedTannhiet = [];
var selectedManhinh = [];
var selectedMice = [];
var selectedChuot = [];
var selectedPhim = [];






window.onload = function () {
    var storedCpu = localStorage.getItem('selectedCpus');
    var storedMain = localStorage.getItem('selectedMain');
    var storedRam = localStorage.getItem('selectedRam');
    var storedVga = localStorage.getItem('selectedVga');
    var storedSsd = localStorage.getItem('selectedSsd');
    var storedHdd = localStorage.getItem('selectedHdd');
    var storedPsu = localStorage.getItem('selectedPsu');
    var storedVo = localStorage.getItem('selectedVo');
    var storedTannhiet = localStorage.getItem('selectedTannhiet');
    var storedManhinh = localStorage.getItem('selectedManhinh');
    var storedChuot = localStorage.getItem('selectedChuot');
    var storedPhim = localStorage.getItem('selectedPhim');
    if (storedCpu) {
        selectedCpus = JSON.parse(storedCpu);
        displaySelectedCpus();
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
    if (storedHdd) {
        selectedHdd = JSON.parse(storedHdd);
        displaySelectedHdd();
    }
    if (storedPsu) {
        selectedPsu = JSON.parse(storedPsu);
        displaySelectedPsu();
    }
    if (storedVo) {
        selectedVo = JSON.parse(storedVo);
        displaySelectedVo();
    }
    if (storedTannhiet) {
        selectedTannhiet = JSON.parse(storedTannhiet);
        displaySelectedTannhiet();
    }
    if (storedManhinh) {
        selectedManhinh = JSON.parse(storedManhinh);
        displaySelectedManhinh();
    }
    if (storedChuot) {
        selectedChuot = JSON.parse(storedChuot);
        displaySelectedChuot();
    }
    if (storedPhim) {
        selectedPhim = JSON.parse(storedPhim);
        displaySelectedPhim();
    }
    
    displayTotalSum();
  
};

function deleteAll() {
    var confirmDelete = window.confirm("Bạn có chắc muốn xóa tất cả các linh kiện đã chọn?");
    if (confirmDelete) {


        displaySelectedTannhiet();
        displaySelectedManhinh();
        displaySelectedChuot();
        displaySelectedPhim();
        displaySelectedPsu();
        displaySelectedVo();
        displaySelectedRam();
        displaySelectedMain();
        displaySelectedCpus();
        displaySelectedSsd();
        displaySelectedHdd();
        displaySelectedVga();

        localStorage.removeItem('selectedTannhiet');
        localStorage.removeItem('selectedManhinh');
        localStorage.removeItem('selectedChuot');
        localStorage.removeItem('selectedPhim');
        localStorage.removeItem('selectedPsu');
        localStorage.removeItem('selectedVo');
        localStorage.removeItem('selectedRam');
        localStorage.removeItem('selectedMain');
        localStorage.removeItem('selectedCpus');
        localStorage.removeItem('selectedSsd');
        localStorage.removeItem('selectedHdd');
        localStorage.removeItem('selectedVga');
        
        buttontannhiet.style.display = 'block';
        buttonmonitor.style.display = 'block';
        buttonmouse.style.display = 'block';
        buttonkeyboard.style.display = 'block';
        buttonpsu.style.display = 'block';
        buttonvo.style.display = 'block';
        buttonram.style.display = 'block';
        buttonmain.style.display = 'block';
        buttoncpu.style.display = 'block';
        buttonssd.style.display = 'block';
        buttonhdd.style.display = 'block';
        buttonvga.style.display = 'block';
        
        location.reload();
    }
}
//CPU----------------------------------------
function addCpu(cpuId) {
    var cpuDiv = document.getElementById('cpu' + cpuId);
    var cpuName = cpuDiv.querySelector('.name-prdt').textContent;
    var cpuPrice = cpuDiv.querySelector('.price-prdt').textContent;
    var cpuImage = cpuDiv.querySelector('.img-fluid').src;

    var existingCpuIndex = selectedCpus.findIndex(function (selectedCpu) {
        return selectedCpu.id === cpuId;
    });

    if (existingCpuIndex !== -1) {
        selectedCpus[existingCpuIndex].quantity++;
    } else {
        var cpuComponent = {
            id: cpuId,
            name: cpuName,
            price: cpuPrice,
            image: cpuImage,
            quantity: 1
        };
        selectedCpus.push(cpuComponent);
    }

    displaySelectedCpus();
    localStorage.setItem('selectedCpus', JSON.stringify(selectedCpus));
    displayTotalSum();
    $('#cpu').modal('hide');
}

function displaySelectedCpus() {
    var selectedCpuList = document.getElementById('selectedCpus');
    selectedCpuList.innerHTML = ''; 
    lengthPrd = selectedCpus.length;
    if (lengthPrd >= 1) {
        buttoncpu.style.display = 'none';
    }

    selectedCpus.forEach(function (cpuComponent) {
        var listItem = document.createElement('li');

        var image = document.createElement('img');
        image.src = cpuComponent.image;
        image.alt = cpuComponent.name;
        image.style.maxWidth = '90px'; 
        listItem.appendChild(image);

        var paragraph1 = document.createElement('p');
        paragraph1.textContent = cpuComponent.name;
        paragraph1.className = 'name-prdt';
        listItem.appendChild(paragraph1);

        cpu = parseFloat(cpuComponent.price.replace(/[^\d]/g, ''));
        var quanty = cpu * cpuComponent.quantity;
        var formattedCpu = quanty.toLocaleString( { style: 'currency', currency: 'VND' });
        formattedCpu = formattedCpu.replace('$', '') + 'đ';

        var paragraph2 = document.createElement('p');
        paragraph2.innerHTML = `${formattedCpu}</span>`;
        paragraph2.className = 'price-prdt price-total';
        listItem.appendChild(paragraph2);
        
        var decreaseButton = document.createElement('button');
        decreaseButton.innerHTML = 'Số lượng:  <i class="fa fa-caret-left" aria-hidden="true"></i>';
        decreaseButton.className = 'btn-total';
        decreaseButton.onclick = function () {
            decreaseCpuQuantity(cpuComponent.id);
        };
        listItem.appendChild(decreaseButton);

        var paragraph3 = document.createElement('p');
        paragraph3.innerHTML = `<span id="quantity${cpuComponent.id}">${cpuComponent.quantity}`;
        paragraph3.className = 'd-in-bl';
        listItem.appendChild(paragraph3);
        selectedCpuList.appendChild(listItem);


        var increaseButton = document.createElement('button');
        increaseButton.innerHTML = '<i class="fa fa-caret-right" aria-hidden="true"></i>';
        increaseButton.className = 'btn-total';
        increaseButton.onclick = function () {
            increaseCpuQuantity(cpuComponent.id);
        };
        listItem.appendChild(increaseButton);

        var deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
        deleteButton.className = 'delete-button';
        deleteButton.onclick = function () {
            deleteCpu(cpuComponent.id);
        };
        listItem.appendChild(deleteButton);


    });       
    
}


function increaseCpuQuantity(cpuId) {
    var existingCpuIndex = selectedCpus.findIndex(function (cpuComponent) {
        return cpuComponent.id === cpuId;
    });

    if (existingCpuIndex !== -1) {
        selectedCpus[existingCpuIndex].quantity++;
        displaySelectedCpus();
        localStorage.setItem('selectedCpus', JSON.stringify(selectedCpus));
    }
    displayTotalSum();
}

function decreaseCpuQuantity(cpuId) {
    var existingCpuIndex = selectedCpus.findIndex(function (cpuComponent) {
        return cpuComponent.id === cpuId;
    });

    if (existingCpuIndex !== -1 && selectedCpus[existingCpuIndex].quantity > 1) {
        selectedCpus[existingCpuIndex].quantity--;
        displaySelectedCpus();
        localStorage.setItem('selectedCpus', JSON.stringify(selectedCpus));
    }
    displayTotalSum();
}

function deleteCpu(cpuId) {
    var confirmDelete = window.confirm("Bạn có chắc muốn xóa CPU khỏi danh sách?");
    if (confirmDelete) {
        buttoncpu.style.display = 'block';
        var existingCpuIndex = selectedCpus.findIndex(function (selectedCpu) {
            return selectedCpu.id === cpuId;
        });

        if (existingCpuIndex !== -1) {
            selectedCpus.splice(existingCpuIndex, 1);

            displaySelectedCpus();
            localStorage.setItem('selectedCpus', JSON.stringify(selectedCpus));
        }
    }
    displayTotalSum();
}


//MAIN----------------------------------------


function addMain(mainId) {
    var mainDiv = document.getElementById('main' + mainId);
    var mainName = mainDiv.querySelector('.name-prdt').textContent;
    var mainPrice = mainDiv.querySelector('.price-prdt').textContent;
    var mainImage = mainDiv.querySelector('.img-fluid').src;

    var existingMainIndex = selectedMain.findIndex(function (selectedMain) {
        return selectedMain.id === mainId;
    });

    
    if (existingMainIndex !== -1) {
        selectedMain[existingMainIndex].quantity++;
    } else {
        
        var mainComponent = {
            id: mainId,
            name: mainName,
            price: mainPrice,
            image: mainImage,
            quantity: 1
        };
        selectedMain.push(mainComponent);
    }

    
    displaySelectedMain();
    localStorage.setItem('selectedMain', JSON.stringify(selectedMain));

    displayTotalSum();
    $('#main').modal('hide');
}

function displaySelectedMain() {
    var selectedMainList = document.getElementById('selectedMain');
    selectedMainList.innerHTML = ''; 
    var main1 = 0;
    lengthPrd = selectedMain.length;
    if (lengthPrd >= 1) {
        buttonmain.style.display = 'none';
    }

    
    selectedMain.forEach(function (mainComponent) {
        var listItem = document.createElement('li');

        
        var image = document.createElement('img');
        image.src = mainComponent.image;
        image.alt = mainComponent.name;
        image.style.maxWidth = '90px'; 
        listItem.appendChild(image);

        
        var paragraph1 = document.createElement('p');
        paragraph1.textContent = mainComponent.name;
        paragraph1.className = 'name-prdt';
        listItem.appendChild(paragraph1);

        main = parseFloat(mainComponent.price.replace(/[^\d]/g, ''));
        var quanty = main * mainComponent.quantity;
        var formattedMain = quanty.toLocaleString( { style: 'currency', currency: 'VND' });
        formattedMain = formattedMain.replace('$', '') + 'đ';

        var paragraph2 = document.createElement('p');
        paragraph2.innerHTML = `${formattedMain}</span>`;
        paragraph2.className = 'price-prdt price-total';
        listItem.appendChild(paragraph2);

        
        var decreaseButton = document.createElement('button');
        decreaseButton.innerHTML = 'Số lượng:  <i class="fa fa-caret-left" aria-hidden="true"></i>';
        decreaseButton.className = 'btn-total';
        decreaseButton.onclick = function () {
            decreaseMainQuantity(mainComponent.id);
        };
        listItem.appendChild(decreaseButton);

        
        var paragraph3 = document.createElement('p');
        paragraph3.innerHTML = `<span id="quantity${mainComponent.id}">${mainComponent.quantity}`;
        paragraph3.className = 'd-in-bl';
        listItem.appendChild(paragraph3);






        var increaseButton = document.createElement('button');
        increaseButton.innerHTML = '<i class="fa fa-caret-right" aria-hidden="true"></i>';
        increaseButton.className = 'btn-total';
        increaseButton.onclick = function () {
            increaseMainQuantity(mainComponent.id);
        };
        listItem.appendChild(increaseButton);

        
        var deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
        deleteButton.className = 'delete-button';
        deleteButton.onclick = function () {
            deleteMain(mainComponent.id);
        };
        listItem.appendChild(deleteButton);

        selectedMainList.appendChild(listItem);
    });
}

function increaseMainQuantity(mainId) {
    
    var existingMainIndex = selectedMain.findIndex(function (mainComponent) {
        return mainComponent.id === mainId;
    });

    if (existingMainIndex !== -1) {
        selectedMain[existingMainIndex].quantity++;
        displaySelectedMain();
        localStorage.setItem('selectedMain', JSON.stringify(selectedMain));
    }displayTotalSum();
}

function decreaseMainQuantity(mainId) {
    
    var existingMainIndex = selectedMain.findIndex(function (mainComponent) {
        return mainComponent.id === mainId;
    });

    if (existingMainIndex !== -1 && selectedMain[existingMainIndex].quantity > 1) {
        selectedMain[existingMainIndex].quantity--;
        displaySelectedMain();
        localStorage.setItem('selectedMain', JSON.stringify(selectedMain));
    }displayTotalSum();
}

function deleteMain(mainId) {
    
    var confirmDelete = window.confirm("Bạn có chắc muốn xóa Main khỏi danh sách?");
    if (confirmDelete) {
        buttonmain.style.display = 'block';
        
        var existingMainIndex = selectedMain.findIndex(function (selectedMain) {
            return selectedMain.id === mainId;
        });

        if (existingMainIndex !== -1) {
            selectedMain.splice(existingMainIndex, 1);

            
            displaySelectedMain();
            localStorage.setItem('selectedMain', JSON.stringify(selectedMain));
        }
    }displayTotalSum();
}


//RAM----------------------------------------



function addRam(ramId) {
    
    var ramDiv = document.getElementById('ram' + ramId);
    var ramName = ramDiv.querySelector('.name-prdt').textContent;
    var ramPrice = ramDiv.querySelector('.price-prdt').textContent;
    var ramImage = ramDiv.querySelector('.img-fluid').src;

    
    var existingRamIndex = selectedRam.findIndex(function (selectedRam) {
        return selectedRam.id === ramId;
    });

    
    if (existingRamIndex !== -1) {
        selectedRam[existingRamIndex].quantity++;
    } else {
        
        var ramComponent = {
            id: ramId,
            name: ramName,
            price: ramPrice,
            image: ramImage,
            quantity: 1
        };
        selectedRam.push(ramComponent);
    }

    
    displaySelectedRam();
    localStorage.setItem('selectedRam', JSON.stringify(selectedRam));

    displayTotalSum();
    $('#ram').modal('hide');
}

function displaySelectedRam() {
    var selectedRamList = document.getElementById('selectedRam');
    selectedRamList.innerHTML = ''; 
    lengthPrd = selectedRam.length;
    if (lengthPrd >= 1) {
        buttonram.style.display = 'none';
    }

    
    selectedRam.forEach(function (ramComponent) {
        var listItem = document.createElement('li');

        
        var image = document.createElement('img');
        image.src = ramComponent.image;
        image.alt = ramComponent.name;
        image.style.maxWidth = '90px'; 
        listItem.appendChild(image);

        
        var paragraph1 = document.createElement('p');
        paragraph1.textContent = ramComponent.name;
        paragraph1.className = 'name-prdt';
        listItem.appendChild(paragraph1);

        ram = parseFloat(ramComponent.price.replace(/[^\d]/g, ''));
        var quanty = ram * ramComponent.quantity;
        var formattedRam = quanty.toLocaleString( { style: 'currency', currency: 'VND' });
        formattedRam = formattedRam.replace('$', '') + 'đ';

        var paragraph2 = document.createElement('p');
        paragraph2.innerHTML = `${formattedRam}</span>`;
        paragraph2.className = 'price-prdt price-total';
        listItem.appendChild(paragraph2);

        
        var decreaseButton = document.createElement('button');
        decreaseButton.innerHTML = 'Số lượng:  <i class="fa fa-caret-left" aria-hidden="true"></i>';
        decreaseButton.className = 'btn-total';
        decreaseButton.onclick = function () {
            decreaseRamQuantity(ramComponent.id);
        };
        listItem.appendChild(decreaseButton);
        
        var paragraph3 = document.createElement('p');
        paragraph3.innerHTML = `<span id="quantity${ramComponent.id}">${ramComponent.quantity}`;
        paragraph3.className = 'd-in-bl';
        listItem.appendChild(paragraph3);

        var a = parseFloat(ramComponent.price.replace(/[^\d]/g, ''));
        totalram = a*ramComponent.quantity;

        
        var increaseButton = document.createElement('button');
        increaseButton.innerHTML = '<i class="fa fa-caret-right" aria-hidden="true"></i>';
        increaseButton.className = 'btn-total';
        increaseButton.onclick = function () {
            increaseRamQuantity(ramComponent.id);
        };
        listItem.appendChild(increaseButton);

        
        var deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
        deleteButton.className = 'delete-button';
        deleteButton.onclick = function () {
            deleteRam(ramComponent.id);
        };
        listItem.appendChild(deleteButton);

        selectedRamList.appendChild(listItem);
    });
}

function increaseRamQuantity(ramId) {
    
    var existingRamIndex = selectedRam.findIndex(function (ramComponent) {
        return ramComponent.id === ramId;
    });

    if (existingRamIndex !== -1) {
        selectedRam[existingRamIndex].quantity++;
        displaySelectedRam();
        localStorage.setItem('selectedRam', JSON.stringify(selectedRam));
    }displayTotalSum();
}

function decreaseRamQuantity(ramId) {
    
    var existingRamIndex = selectedRam.findIndex(function (ramComponent) {
        return ramComponent.id === ramId;
    });

    if (existingRamIndex !== -1 && selectedRam[existingRamIndex].quantity > 1) {
        selectedRam[existingRamIndex].quantity--;
        displaySelectedRam();
        localStorage.setItem('selectedRam', JSON.stringify(selectedRam));
    }displayTotalSum();
}

function deleteRam(ramId) {
    
    var confirmDelete = window.confirm("Bạn có chắc muốn xóa RAM khỏi danh sách?");
    if (confirmDelete) {
        
        buttonram.style.display = 'block';
        var existingRamIndex = selectedRam.findIndex(function (selectedRam) {
            return selectedRam.id === ramId;
        });

        if (existingRamIndex !== -1) {
            selectedRam.splice(existingRamIndex, 1);

            
            displaySelectedRam();
            localStorage.setItem('selectedRam', JSON.stringify(selectedRam));
        }
    }displayTotalSum();
}

//VGA----------------------------------------

function addVga(vgaId) {
    
    var vgaDiv = document.getElementById('vga' + vgaId);
    var vgaName = vgaDiv.querySelector('.name-prdt').textContent;
    var vgaPrice = vgaDiv.querySelector('.price-prdt').textContent;
    var vgaImage = vgaDiv.querySelector('.img-fluid').src;

    
    var existingVgaIndex = selectedVga.findIndex(function (selectedVga) {
        return selectedVga.id === vgaId;
    });

    
    if (existingVgaIndex !== -1) {
        selectedVga[existingVgaIndex].quantity++;
    } else {
        
        var vgaComponent = {
            id: vgaId,
            name: vgaName,
            price: vgaPrice,
            image: vgaImage,
            quantity: 1
        };
        selectedVga.push(vgaComponent);
    }

    
    displaySelectedVga();
    localStorage.setItem('selectedVga', JSON.stringify(selectedVga));

    displayTotalSum();
    $('#vga').modal('hide');
}

function displaySelectedVga() {
    var selectedVgaList = document.getElementById('selectedVga');
    selectedVgaList.innerHTML = ''; 
    lengthPrd = selectedVga.length;
    if (lengthPrd >= 1) {
        buttonvga.style.display = 'none';
    }

    
    selectedVga.forEach(function (vgaComponent) {
        var listItem = document.createElement('li');

        
        var image = document.createElement('img');
        image.src = vgaComponent.image;
        image.alt = vgaComponent.name;
        image.style.maxWidth = '90px'; 
        listItem.appendChild(image);

        
        var paragraph1 = document.createElement('p');
        paragraph1.textContent = vgaComponent.name;
        paragraph1.className = 'name-prdt';
        listItem.appendChild(paragraph1);

        vga = parseFloat(vgaComponent.price.replace(/[^\d]/g, ''));
        var quanty = vga * vgaComponent.quantity;
        var formattedVga = quanty.toLocaleString( { style: 'currency', currency: 'VND' });
        formattedVga = formattedVga.replace('$', '') + 'đ';

        var paragraph2 = document.createElement('p');
        paragraph2.innerHTML = `${formattedVga}</span>`;
        paragraph2.className = 'price-prdt price-total';
        listItem.appendChild(paragraph2);

        
        var decreaseButton = document.createElement('button');
        decreaseButton.innerHTML = 'Số lượng:  <i class="fa fa-caret-left" aria-hidden="true"></i>';
        decreaseButton.className = 'btn-total';
        decreaseButton.onclick = function () {
            decreaseVgaQuantity(vgaComponent.id);
        };
        listItem.appendChild(decreaseButton);
        
        var paragraph3 = document.createElement('p');
        paragraph3.innerHTML = `<span id="quantity${vgaComponent.id}">${vgaComponent.quantity}`;
        paragraph3.className = 'd-in-bl';
        listItem.appendChild(paragraph3);

        var a = parseFloat(vgaComponent.price.replace(/[^\d]/g, ''));
        totalvga = a*vgaComponent.quantity;

        var increaseButton = document.createElement('button');
        increaseButton.innerHTML = '<i class="fa fa-caret-right" aria-hidden="true"></i>';
        increaseButton.className = 'btn-total';
        increaseButton.onclick = function () {
            increaseVgaQuantity(vgaComponent.id);
        };
        listItem.appendChild(increaseButton);

        
        var deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
        deleteButton.className = 'delete-button';
        deleteButton.onclick = function () {
            deleteVga(vgaComponent.id);
        };
        listItem.appendChild(deleteButton);

        selectedVgaList.appendChild(listItem);
    });
}

function increaseVgaQuantity(vgaId) {
    
    var existingVgaIndex = selectedVga.findIndex(function (vgaComponent) {
        return vgaComponent.id === vgaId;
    });

    if (existingVgaIndex !== -1) {
        selectedVga[existingVgaIndex].quantity++;
        displaySelectedVga();
        localStorage.setItem('selectedVga', JSON.stringify(selectedVga));
    }displayTotalSum();
}

function decreaseVgaQuantity(vgaId) {
    
    var existingVgaIndex = selectedVga.findIndex(function (vgaComponent) {
        return vgaComponent.id === vgaId;
    });

    if (existingVgaIndex !== -1 && selectedVga[existingVgaIndex].quantity > 1) {
        selectedVga[existingVgaIndex].quantity--;
        displaySelectedVga();
        localStorage.setItem('selectedVga', JSON.stringify(selectedVga));
    }displayTotalSum();
}

function deleteVga(vgaId) {
    
    var confirmDelete = window.confirm("Bạn có chắc muốn xóa VGA khỏi danh sách?");
    if (confirmDelete) {
        
        buttonvga.style.display = 'block';
        var existingVgaIndex = selectedVga.findIndex(function (selectedVga) {
            return selectedVga.id === vgaId;
        });

        if (existingVgaIndex !== -1) {
            selectedVga.splice(existingVgaIndex, 1);

            
            displaySelectedVga();
            localStorage.setItem('selectedVga', JSON.stringify(selectedVga));
        }
    }displayTotalSum();
}

//SSD----------------------------------------
function addSsd(ssdId) {
    
    var ssdDiv = document.getElementById('ssd' + ssdId);
    var ssdName = ssdDiv.querySelector('.name-prdt').textContent;
    var ssdPrice = ssdDiv.querySelector('.price-prdt').textContent;
    var ssdImage = ssdDiv.querySelector('.img-fluid').src;

    
    var existingSsdIndex = selectedSsd.findIndex(function (selectedSsd) {
        return selectedSsd.id === ssdId;
    });

    
    if (existingSsdIndex !== -1) {
        selectedSsd[existingSsdIndex].quantity++;
    } else {
        
        var ssdComponent = {
            id: ssdId,
            name: ssdName,
            price: ssdPrice,
            image: ssdImage,
            quantity: 1
        };
        selectedSsd.push(ssdComponent);
    }

    
    displaySelectedSsd();
    localStorage.setItem('selectedSsd', JSON.stringify(selectedSsd));
    displayTotalSum();
    $('#ssd').modal('hide');
}

function displaySelectedSsd() {
    var selectedSsdList = document.getElementById('selectedSsd');
    selectedSsdList.innerHTML = ''; 
    lengthPrd = selectedSsd.length;
    if (lengthPrd >= 1) {
        buttonssd.style.display = 'none';
    }

    
    selectedSsd.forEach(function (ssdComponent) {
        var listItem = document.createElement('li');

        
        var image = document.createElement('img');
        image.src = ssdComponent.image;
        image.alt = ssdComponent.name;
        image.style.maxWidth = '90px'; 
        listItem.appendChild(image);

        
        var paragraph1 = document.createElement('p');
        paragraph1.textContent = ssdComponent.name;
        paragraph1.className = 'name-prdt';
        listItem.appendChild(paragraph1);

        ssd = parseFloat(ssdComponent.price.replace(/[^\d]/g, ''));
        var quanty = ssd * ssdComponent.quantity;
        var formattedSsd = quanty.toLocaleString( { style: 'currency', currency: 'VND' });
        formattedSsd = formattedSsd.replace('$', '') + 'đ';

        
        var paragraph2 = document.createElement('p');
        paragraph2.innerHTML = `${formattedSsd}</span>`;
        paragraph2.className = 'price-prdt price-total';
        listItem.appendChild(paragraph2);

        
        var decreaseButton = document.createElement('button');
        decreaseButton.innerHTML = 'Số lượng:  <i class="fa fa-caret-left" aria-hidden="true"></i>';
        decreaseButton.className = 'btn-total';
        decreaseButton.onclick = function () {
            decreaseSsdQuantity(ssdComponent.id);
        };
        listItem.appendChild(decreaseButton);
        
        var paragraph3 = document.createElement('p');
        paragraph3.innerHTML = `<span id="quantity${ssdComponent.id}">${ssdComponent.quantity}`;
        paragraph3.className = 'd-in-bl';
        listItem.appendChild(paragraph3);



        var increaseButton = document.createElement('button');
        increaseButton.innerHTML = '<i class="fa fa-caret-right" aria-hidden="true"></i>';
        increaseButton.className = 'btn-total';
        increaseButton.onclick = function () {
            increaseSsdQuantity(ssdComponent.id);
        };
        listItem.appendChild(increaseButton);

        
        var deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
        deleteButton.className = 'delete-button';
        deleteButton.onclick = function () {
            deleteSsd(ssdComponent.id);
        };
        listItem.appendChild(deleteButton);

        selectedSsdList.appendChild(listItem);
    });
}

function increaseSsdQuantity(ssdId) {
    
    var existingSsdIndex = selectedSsd.findIndex(function (ssdComponent) {
        return ssdComponent.id === ssdId;
    });

    if (existingSsdIndex !== -1) {
        selectedSsd[existingSsdIndex].quantity++;
        displaySelectedSsd();
        localStorage.setItem('selectedSsd', JSON.stringify(selectedSsd));
    }displayTotalSum();
}

function decreaseSsdQuantity(ssdId) {
    
    var existingSsdIndex = selectedSsd.findIndex(function (ssdComponent) {
        return ssdComponent.id === ssdId;
    });

    if (existingSsdIndex !== -1 && selectedSsd[existingSsdIndex].quantity > 1) {
        selectedSsd[existingSsdIndex].quantity--;
        displaySelectedSsd();
        localStorage.setItem('selectedSsd', JSON.stringify(selectedSsd));
    }displayTotalSum();
}

function deleteSsd(ssdId) {
    
    var confirmDelete = window.confirm("Bạn có chắc muốn xóa SSD khỏi danh sách?");
    if (confirmDelete) {
        
        buttonssd.style.display = 'block';
        var existingSsdIndex = selectedSsd.findIndex(function (selectedSsd) {
            return selectedSsd.id === ssdId;
        });

        if (existingSsdIndex !== -1) {
            selectedSsd.splice(existingSsdIndex, 1);

            
            displaySelectedSsd();
            localStorage.setItem('selectedSsd', JSON.stringify(selectedSsd));
        }
    }displayTotalSum();
}

//HDD-------------------------------------
function addHdd(hddId) {
    var hddDiv = document.getElementById('hdd' + hddId);
    var hddName = hddDiv.querySelector('.name-prdt').textContent;
    var hddPrice = hddDiv.querySelector('.price-prdt').textContent;
    var hddImage = hddDiv.querySelector('.img-fluid').src;

    var existingHddIndex = selectedHdd.findIndex(function (selectedHdd) {
        return selectedHdd.id === hddId;
    });

    if (existingHddIndex !== -1) {
        selectedHdd[existingHddIndex].quantity++;
    } else {
        var hddComponent = {
            id: hddId,
            name: hddName,
            price: hddPrice,
            image: hddImage,
            quantity: 1
        };
        selectedHdd.push(hddComponent);
    }

    displaySelectedHdd();
    localStorage.setItem('selectedHdd', JSON.stringify(selectedHdd));
    displayTotalSum();
    $('#hdd').modal('hide');
}

function displaySelectedHdd() {
    var selectedHddList = document.getElementById('selectedHdd');
    selectedHddList.innerHTML = '';
    lengthPrd = selectedHdd.length;
    if (lengthPrd >= 1) {
        buttonhdd.style.display = 'none';
    }
    selectedHdd.forEach(function (hddComponent) {
        var listItem = document.createElement('li');
        var image = document.createElement('img');
        image.src = hddComponent.image;
        image.alt = hddComponent.name;
        image.style.maxWidth = '90px';
        listItem.appendChild(image);

        var paragraph1 = document.createElement('p');
        paragraph1.textContent = hddComponent.name;
        paragraph1.className = 'name-prdt';
        listItem.appendChild(paragraph1);

        var hdd = parseFloat(hddComponent.price.replace(/[^\d]/g, ''));
        var quanty = hdd * hddComponent.quantity;
        var formattedHdd = quanty.toLocaleString({ style: 'currency', currency: 'VND' });
        formattedHdd = formattedHdd.replace('$', '') + 'đ';

        var paragraph2 = document.createElement('p');
        paragraph2.innerHTML = `${formattedHdd}</span>`;
        paragraph2.className = 'price-prdt price-total';
        listItem.appendChild(paragraph2);

        var decreaseButton = document.createElement('button');
        decreaseButton.innerHTML = 'Số lượng:  <i class="fa fa-caret-left" aria-hidden="true"></i>';
        decreaseButton.className = 'btn-total';
        decreaseButton.onclick = function () {
            decreaseHddQuantity(hddComponent.id);
        };
        listItem.appendChild(decreaseButton);

        var paragraph3 = document.createElement('p');
        paragraph3.innerHTML = `<span id="quantity${hddComponent.id}">${hddComponent.quantity}`;
        paragraph3.className = 'd-in-bl';
        listItem.appendChild(paragraph3);

        var increaseButton = document.createElement('button');
        increaseButton.innerHTML = '<i class="fa fa-caret-right" aria-hidden="true"></i>';
        increaseButton.className = 'btn-total';
        increaseButton.onclick = function () {
            increaseHddQuantity(hddComponent.id);
        };
        listItem.appendChild(increaseButton);

        var deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
        deleteButton.className = 'delete-button';
        deleteButton.onclick = function () {
            deleteHdd(hddComponent.id);
        };
        listItem.appendChild(deleteButton);

        selectedHddList.appendChild(listItem);
    });
}

function increaseHddQuantity(hddId) {
    var existingHddIndex = selectedHdd.findIndex(function (hddComponent) {
        return hddComponent.id === hddId;
    });

    if (existingHddIndex !== -1) {
        selectedHdd[existingHddIndex].quantity++;
        displaySelectedHdd();
        localStorage.setItem('selectedHdd', JSON.stringify(selectedHdd));
    }
    displayTotalSum();
}

function decreaseHddQuantity(hddId) {
    var existingHddIndex = selectedHdd.findIndex(function (hddComponent) {
        return hddComponent.id === hddId;
    });

    if (existingHddIndex !== -1 && selectedHdd[existingHddIndex].quantity > 1) {
        selectedHdd[existingHddIndex].quantity--;
        displaySelectedHdd();
        localStorage.setItem('selectedHdd', JSON.stringify(selectedHdd));
    }
    displayTotalSum();
}

function deleteHdd(hddId) {
    var confirmDelete = window.confirm("Bạn có chắc muốn xóa HDD khỏi danh sách?");
    buttonhdd.style.display = 'block';
    if (confirmDelete) {
        var existingHddIndex = selectedHdd.findIndex(function (selectedHdd) {
            return selectedHdd.id === hddId;
        });

        if (existingHddIndex !== -1) {
            selectedHdd.splice(existingHddIndex, 1);
            displaySelectedHdd();
            localStorage.setItem('selectedHdd', JSON.stringify(selectedHdd));
        }
    }
    displayTotalSum();
}
//PSU----------------------------------------

function addPsu(psuId) {
    
    var psuDiv = document.getElementById('psu' + psuId);
    var psuName = psuDiv.querySelector('.name-prdt').textContent;
    var psuPrice = psuDiv.querySelector('.price-prdt').textContent;
    var psuImage = psuDiv.querySelector('.img-fluid').src;

    
    var existingPsuIndex = selectedPsu.findIndex(function (selectedPsu) {
        return selectedPsu.id === psuId;
    });

    
    if (existingPsuIndex !== -1) {
        selectedPsu[existingPsuIndex].quantity++;
    } else {
        
        var psuComponent = {
            id: psuId,
            name: psuName,
            price: psuPrice,
            image: psuImage,
            quantity: 1
        };
        selectedPsu.push(psuComponent);
    }

    
    displaySelectedPsu();
    localStorage.setItem('selectedPsu', JSON.stringify(selectedPsu));
    displayTotalSum();
    $('#psu').modal('hide');
}

function displaySelectedPsu() {
    var selectedPsuList = document.getElementById('selectedPsu');
    selectedPsuList.innerHTML = ''; 
    lengthPrd = selectedPsu.length;
    if (lengthPrd >= 1) {
        buttonpsu.style.display = 'none';
    }
    
    selectedPsu.forEach(function (psuComponent) {
        var listItem = document.createElement('li');

        
        var image = document.createElement('img');
        image.src = psuComponent.image;
        image.alt = psuComponent.name;
        image.style.maxWidth = '90px'; 
        listItem.appendChild(image);

        
        var paragraph1 = document.createElement('p');
        paragraph1.textContent = psuComponent.name;
        paragraph1.className = 'name-prdt';
        listItem.appendChild(paragraph1);

        
        psu = parseFloat(psuComponent.price.replace(/[^\d]/g, ''));
        var quanty = psu * psuComponent.quantity;
        var formattedPsu = quanty.toLocaleString( { style: 'currency', currency: 'VND' });
        formattedPsu = formattedPsu.replace('$', '') + 'đ';

        var paragraph2 = document.createElement('p');
        paragraph2.innerHTML = `${formattedPsu}</span>`;
        paragraph2.className = 'price-prdt price-total';
        listItem.appendChild(paragraph2);

        
        var decreaseButton = document.createElement('button');
        decreaseButton.innerHTML = 'Số lượng:  <i class="fa fa-caret-left" aria-hidden="true"></i>';
        decreaseButton.className = 'btn-total';
        decreaseButton.onclick = function () {
            decreasePsuQuantity(psuComponent.id);
        };
        listItem.appendChild(decreaseButton);
        
        var paragraph3 = document.createElement('p');
        paragraph3.innerHTML = `<span id="quantity${psuComponent.id}">${psuComponent.quantity}`;
        paragraph3.className = 'd-in-bl';
        listItem.appendChild(paragraph3);



        var increaseButton = document.createElement('button');
        increaseButton.innerHTML = '<i class="fa fa-caret-right" aria-hidden="true"></i>';
        increaseButton.className = 'btn-total';
        increaseButton.onclick = function () {
            increasePsuQuantity(psuComponent.id);
        };
        listItem.appendChild(increaseButton);
        
        var deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
        deleteButton.className = 'delete-button';
        deleteButton.onclick = function () {
            deletePsu(psuComponent.id);
        };
        listItem.appendChild(deleteButton);

        selectedPsuList.appendChild(listItem);
    });
}

function increasePsuQuantity(psuId) {
    
    var existingPsuIndex = selectedPsu.findIndex(function (psuComponent) {
        return psuComponent.id === psuId;
    });

    if (existingPsuIndex !== -1) {
        selectedPsu[existingPsuIndex].quantity++;
        displaySelectedPsu();
        localStorage.setItem('selectedPsu', JSON.stringify(selectedPsu));
    }displayTotalSum();
}

function decreasePsuQuantity(psuId) {
    
    var existingPsuIndex = selectedPsu.findIndex(function (psuComponent) {
        return psuComponent.id === psuId;
    });

    if (existingPsuIndex !== -1 && selectedPsu[existingPsuIndex].quantity > 1) {
        selectedPsu[existingPsuIndex].quantity--;
        displaySelectedPsu();
        localStorage.setItem('selectedPsu', JSON.stringify(selectedPsu));
    }displayTotalSum();
}
function deletePsu(psuId) {
    var confirmDelete = window.confirm("Bạn có chắc muốn xóa PSU khỏi danh sách?");
    if (confirmDelete) {
        buttonpsu.style.display = 'block';
        var existingPsuIndex = selectedPsu.findIndex(function (selectedPsu) {
            return selectedPsu.id === psuId;
        });

        if (existingPsuIndex !== -1) {
            selectedPsu.splice(existingPsuIndex, 1);

            displaySelectedPsu();
            localStorage.setItem('selectedPsu', JSON.stringify(selectedPsu));
        }
    }displayTotalSum();
}
//CASE----------------------------------------

function addVo(voId) {
    
    var voDiv = document.getElementById('vo' + voId);
    var voName = voDiv.querySelector('.name-prdt').textContent;
    var voPrice = voDiv.querySelector('.price-prdt').textContent;
    var voImage = voDiv.querySelector('.img-fluid').src;

    
    var existingVoIndex = selectedVo.findIndex(function (selectedVo) {
        return selectedVo.id === voId;
    });

    
    if (existingVoIndex !== -1) {
        selectedVo[existingVoIndex].quantity++;
    } else {
        
        var selectedVoComponent = {
            id: voId,
            name: voName,
            price: voPrice,
            image: voImage,
            quantity: 1
        };
        selectedVo.push(selectedVoComponent);
    }

    
    displaySelectedVo();
    localStorage.setItem('selectedVo', JSON.stringify(selectedVo));
    displayTotalSum();
    $('#vo').modal('hide');
}

function displaySelectedVo() {
    var selectedVoList = document.getElementById('selectedVo');
    selectedVoList.innerHTML = ''; 
    lengthPrd = selectedVo.length;
    if(lengthPrd >=1){
       buttonvo.style.display = 'none';
   }
    
    selectedVo.forEach(function (selectedVoComponent) {
        var listItem = document.createElement('li');

        
        var image = document.createElement('img');
        image.src = selectedVoComponent.image;
        image.alt = selectedVoComponent.name;
        image.style.maxWidth = '90px'; 
        listItem.appendChild(image);

        
        var paragraph1 = document.createElement('p');
        paragraph1.textContent = selectedVoComponent.name;
        paragraph1.className = 'name-prdt';
        listItem.appendChild(paragraph1);

        vo = parseFloat(selectedVoComponent.price.replace(/[^\d]/g, ''));
        var quanty = vo * selectedVoComponent.quantity;
        var formattedVo = quanty.toLocaleString( { style: 'currency', currency: 'VND' });
        formattedVo = formattedVo.replace('$', '') + 'đ';
        
        var paragraph2 = document.createElement('p');
        paragraph2.innerHTML = `${formattedVo}</span>`;
        paragraph2.className = 'price-prdt price-total';
        listItem.appendChild(paragraph2);



        
        var decreaseButton = document.createElement('button');
        decreaseButton.innerHTML = 'Số lượng:  <i class="fa fa-caret-left" aria-hidden="true"></i>';
        decreaseButton.className = 'btn-total';
        decreaseButton.onclick = function () {
            decreaseQuantity(selectedVoComponent.id);
        };
        listItem.appendChild(decreaseButton);
                
                var paragraph3 = document.createElement('p');
                paragraph3.innerHTML = `<span id="quantity${selectedVoComponent.id}">${selectedVoComponent.quantity}`;
                paragraph3.className = 'd-in-bl';
                listItem.appendChild(paragraph3);
        
                var a = parseFloat(selectedVoComponent.price.replace(/[^\d]/g, ''));
                totalvo = a*selectedVoComponent.quantity;
        
        var increaseButton = document.createElement('button');
        increaseButton.innerHTML = '<i class="fa fa-caret-right" aria-hidden="true"></i>';
        increaseButton.className = 'btn-total';
        increaseButton.onclick = function () {
            increaseQuantity(selectedVoComponent.id);
        };
        listItem.appendChild(increaseButton);
        
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

function increaseQuantity(voId) {
    
    var existingVoIndex = selectedVo.findIndex(function (selectedVoComponent) {
        return selectedVoComponent.id === voId;
    });

    if (existingVoIndex !== -1) {
        selectedVo[existingVoIndex].quantity++;
        displaySelectedVo();
        localStorage.setItem('selectedVo', JSON.stringify(selectedVo));
    }displayTotalSum();
}

function decreaseQuantity(voId) {
    
    var existingVoIndex = selectedVo.findIndex(function (selectedVoComponent) {
        return selectedVoComponent.id === voId;
    });

    if (existingVoIndex !== -1 && selectedVo[existingVoIndex].quantity > 1) {
        selectedVo[existingVoIndex].quantity--;
        displaySelectedVo();
        localStorage.setItem('selectedVo', JSON.stringify(selectedVo));
    }displayTotalSum();
}

function deleteVo(voId) {
    var confirmDelete = window.confirm("Bạn có chắc muốn xóa Case khỏi danh sách?");
    if (confirmDelete) {
        buttonvo.style.display = 'block';
        var existingVoIndex = selectedVo.findIndex(function (selectedVo) {
            return selectedVo.id === voId;
        });

        if (existingVoIndex !== -1) {
            selectedVo.splice(existingVoIndex, 1);

            displaySelectedVo();
            localStorage.setItem('selectedVo', JSON.stringify(selectedVo));
        }
    }displayTotalSum();
}

//TAN NHIET-------------------------------------------
function addTannhiet(tannhietId) {
    var tannhietDiv = document.getElementById('tannhiet' + tannhietId);
    var tannhietName = tannhietDiv.querySelector('.name-prdt').textContent;
    var tannhietPrice = tannhietDiv.querySelector('.price-prdt').textContent;
    var tannhietImage = tannhietDiv.querySelector('.img-fluid').src;

    var existingTannhietIndex = selectedTannhiet.findIndex(function (selectedTannhiet) {
        return selectedTannhiet.id === tannhietId;
    });

    if (existingTannhietIndex !== -1) {
        selectedTannhiet[existingTannhietIndex].quantity++;
    } else {
        var tannhietComponent = {
            id: tannhietId,
            name: tannhietName,
            price: tannhietPrice,
            image: tannhietImage,
            quantity: 1
        };
        selectedTannhiet.push(tannhietComponent);
    }

    displaySelectedTannhiet();
    localStorage.setItem('selectedTannhiet', JSON.stringify(selectedTannhiet));
    displayTotalSum();
    $('#tannhiet').modal('hide');
}

function displaySelectedTannhiet() {
    var selectedTannhietList = document.getElementById('selectedTannhiet');
    selectedTannhietList.innerHTML = ''; 
    lengthPrd = selectedTannhiet.length;
    if (lengthPrd >= 1) {
        buttontannhiet.style.display = 'none';
    }

    selectedTannhiet.forEach(function (tannhietComponent) {
        var listItem = document.createElement('li');

        var image = document.createElement('img');
        image.src = tannhietComponent.image;
        image.alt = tannhietComponent.name;
        image.style.maxWidth = '90px'; 
        listItem.appendChild(image);

        var paragraph1 = document.createElement('p');
        paragraph1.textContent = tannhietComponent.name;
        paragraph1.className = 'name-prdt';
        listItem.appendChild(paragraph1);

        tannhiet = parseFloat(tannhietComponent.price.replace(/[^\d]/g, ''));
        var quanty = tannhiet * tannhietComponent.quantity;
        var formattedTn = quanty.toLocaleString( { style: 'currency', currency: 'VND' });
        formattedTn = formattedTn.replace('$', '') + 'đ';

        var paragraph2 = document.createElement('p');
        paragraph2.innerHTML = `${formattedTn}</span>`;
        paragraph2.className = 'price-prdt price-total';
        listItem.appendChild(paragraph2);

        var decreaseButton = document.createElement('button');
        decreaseButton.innerHTML = 'Số lượng:  <i class="fa fa-caret-left" aria-hidden="true"></i>';
        decreaseButton.className = 'btn-total';
        decreaseButton.onclick = function () {
            decreaseTannhietQuantity(tannhietComponent.id);
        };
        listItem.appendChild(decreaseButton);

        var paragraph3 = document.createElement('p');
        paragraph3.innerHTML = `<span id="quantity${tannhietComponent.id}">${tannhietComponent.quantity}`;
        paragraph3.className = 'd-in-bl';
        listItem.appendChild(paragraph3);



        var increaseButton = document.createElement('button');
        increaseButton.innerHTML = '<i class="fa fa-caret-right" aria-hidden="true"></i>';
        increaseButton.className = 'btn-total';
        increaseButton.onclick = function () {
            increaseTannhietQuantity(tannhietComponent.id);
        };
        listItem.appendChild(increaseButton);

        var deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
        deleteButton.className = 'delete-button';
        deleteButton.onclick = function () {
            deleteTannhiet(tannhietComponent.id);
        };
        listItem.appendChild(deleteButton);

        selectedTannhietList.appendChild(listItem);
    });
}

function increaseTannhietQuantity(tannhietId) {
    var existingTannhietIndex = selectedTannhiet.findIndex(function (tannhietComponent) {
        return tannhietComponent.id === tannhietId;
    });

    if (existingTannhietIndex !== -1) {
        selectedTannhiet[existingTannhietIndex].quantity++;
        displaySelectedTannhiet();
        localStorage.setItem('selectedTannhiet', JSON.stringify(selectedTannhiet));
    }displayTotalSum();
}

function decreaseTannhietQuantity(tannhietId) {
    var existingTannhietIndex = selectedTannhiet.findIndex(function (tannhietComponent) {
        return tannhietComponent.id === tannhietId;
    });

    if (existingTannhietIndex !== -1 && selectedTannhiet[existingTannhietIndex].quantity > 1) {
        selectedTannhiet[existingTannhietIndex].quantity--;
        displaySelectedTannhiet();
        localStorage.setItem('selectedTannhiet', JSON.stringify(selectedTannhiet));
    }displayTotalSum();
}

function deleteTannhiet(tannhietId) {
    var confirmDelete = window.confirm("Bạn có chắc muốn xóa Tannhiet khỏi danh sách?");
    if (confirmDelete) {
        buttontannhiet.style.display = 'block';
        var existingTannhietIndex = selectedTannhiet.findIndex(function (selectedTannhiet) {
            return selectedTannhiet.id === tannhietId;
        });

        if (existingTannhietIndex !== -1) {
            selectedTannhiet.splice(existingTannhietIndex, 1);

            displaySelectedTannhiet();
            localStorage.setItem('selectedTannhiet', JSON.stringify(selectedTannhiet));
        }
    }displayTotalSum();
}


//MONITTOR-----------------------------------------


function addManhinh(manhinhId) {
    var manhinhDiv = document.getElementById('manhinh' + manhinhId);
    var manhinhName = manhinhDiv.querySelector('.name-prdt').textContent;
    var manhinhPrice = manhinhDiv.querySelector('.price-prdt').textContent;
    var manhinhImage = manhinhDiv.querySelector('.img-fluid').src;

    var existingManhinhIndex = selectedManhinh.findIndex(function (selectedManhinh) {
        return selectedManhinh.id === manhinhId;
    });

    if (existingManhinhIndex !== -1) {
        selectedManhinh[existingManhinhIndex].quantity++;
    } else {
        var manhinhComponent = {
            id: manhinhId,
            name: manhinhName,
            price: manhinhPrice,
            image: manhinhImage,
            quantity: 1
        };
        selectedManhinh.push(manhinhComponent);
    }

    displaySelectedManhinh();
    localStorage.setItem('selectedManhinh', JSON.stringify(selectedManhinh));
    displayTotalSum();
    $('#monitor').modal('hide');
}

function displaySelectedManhinh() {
    var selectedManhinhList = document.getElementById('selectedManhinh');
    selectedManhinhList.innerHTML = '';
    lengthPrd = selectedManhinh.length;
    if (lengthPrd >= 1) {
        buttonmonitor.style.display = 'none';
    }

    selectedManhinh.forEach(function (manhinhComponent) {
        var listItem = document.createElement('li');

        var image = document.createElement('img');
        image.src = manhinhComponent.image;
        image.alt = manhinhComponent.name;
        image.style.maxWidth = '90px'; 
        listItem.appendChild(image);

        var paragraph1 = document.createElement('p');
        paragraph1.textContent = manhinhComponent.name;
        paragraph1.className = 'name-prdt';
        listItem.appendChild(paragraph1);

        manhinh = parseFloat(manhinhComponent.price.replace(/[^\d]/g, ''));
        var quanty = manhinh * manhinhComponent.quantity;
        var formattedMh = quanty.toLocaleString( { style: 'currency', currency: 'VND' });
        formattedMh = formattedMh.replace('$', '') + 'đ';

        var paragraph2 = document.createElement('p');
        paragraph2.innerHTML = `${formattedMh}</span>`;
        paragraph2.className = 'price-prdt price-total';
        listItem.appendChild(paragraph2);

        var decreaseButton = document.createElement('button');
        decreaseButton.innerHTML = 'Số lượng:  <i class="fa fa-caret-left" aria-hidden="true"></i>';
        decreaseButton.className = 'btn-total';
        decreaseButton.onclick = function () {
            decreaseManhinhQuantity(manhinhComponent.id);
        };
        listItem.appendChild(decreaseButton);

        var paragraph3 = document.createElement('p');
        paragraph3.innerHTML = `<span id="quantity${manhinhComponent.id}">${manhinhComponent.quantity}`;
        paragraph3.className = 'd-in-bl';
        listItem.appendChild(paragraph3);



        var increaseButton = document.createElement('button');
        increaseButton.innerHTML = '<i class="fa fa-caret-right" aria-hidden="true"></i>';
        increaseButton.className = 'btn-total';
        increaseButton.onclick = function () {
            increaseManhinhQuantity(manhinhComponent.id);
        };
        listItem.appendChild(increaseButton);

        var deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
        deleteButton.className = 'delete-button';
        deleteButton.onclick = function () {
            deleteManhinh(manhinhComponent.id);
        };
        listItem.appendChild(deleteButton);

        selectedManhinhList.appendChild(listItem);
    });
}

function increaseManhinhQuantity(manhinhId) {
    var existingManhinhIndex = selectedManhinh.findIndex(function (manhinhComponent) {
        return manhinhComponent.id === manhinhId;
    });

    if (existingManhinhIndex !== -1) {
        selectedManhinh[existingManhinhIndex].quantity++;
        displaySelectedManhinh();
        localStorage.setItem('selectedManhinh', JSON.stringify(selectedManhinh));
    }displayTotalSum();
}

function decreaseManhinhQuantity(manhinhId) {
    var existingManhinhIndex = selectedManhinh.findIndex(function (manhinhComponent) {
        return manhinhComponent.id === manhinhId;
    });

    if (existingManhinhIndex !== -1 && selectedManhinh[existingManhinhIndex].quantity > 1) {
        selectedManhinh[existingManhinhIndex].quantity--;
        displaySelectedManhinh();
        localStorage.setItem('selectedManhinh', JSON.stringify(selectedManhinh));
    }displayTotalSum();
}

function deleteManhinh(manhinhId) {
    var confirmDelete = window.confirm("Bạn có chắc muốn xóa Màn hình khỏi danh sách?");
    if (confirmDelete) {
        buttonmonitor.style.display = 'block';
        var existingManhinhIndex = selectedManhinh.findIndex(function (selectedManhinh) {
            return selectedManhinh.id === manhinhId;
        });

        if (existingManhinhIndex !== -1) {
            selectedManhinh.splice(existingManhinhIndex, 1);

            displaySelectedManhinh();
            localStorage.setItem('selectedManhinh', JSON.stringify(selectedManhinh));
        }
    }displayTotalSum();
}

//MOUSE-----------------------------------------
function addChuot(chuotId) {
    var chuotDiv = document.getElementById('chuot' + chuotId);
    var chuotName = chuotDiv.querySelector('.name-prdt').textContent;
    var chuotPrice = chuotDiv.querySelector('.price-prdt').textContent;
    var chuotImage = chuotDiv.querySelector('.img-fluid').src;

    var existingChuotIndex = selectedChuot.findIndex(function (selectedChuot) {
        return selectedChuot.id === chuotId;
    });

    if (existingChuotIndex !== -1) {
        selectedChuot[existingChuotIndex].quantity++;
    } else {
        var chuotComponent = {
            id: chuotId,
            name: chuotName,
            price: chuotPrice,
            image: chuotImage,
            quantity: 1
        };
        selectedChuot.push(chuotComponent);
    }

    displaySelectedChuot();
    localStorage.setItem('selectedChuot', JSON.stringify(selectedChuot));
    displayTotalSum();
     $('#mouse').modal('hide');
}

function displaySelectedChuot() {
    var selectedChuotList = document.getElementById('selectedChuot');
    selectedChuotList.innerHTML = '';
    lengthPrd = selectedChuot.length;
    if (lengthPrd >= 1) {
        buttonmouse.style.display = 'none';
    }

    selectedChuot.forEach(function (chuotComponent) {
        var listItem = document.createElement('li');

        var image = document.createElement('img');
        image.src = chuotComponent.image;
        image.alt = chuotComponent.name;
        image.style.maxWidth = '90px'; 
        listItem.appendChild(image);

        var paragraph1 = document.createElement('p');
        paragraph1.textContent = chuotComponent.name;
        paragraph1.className = 'name-prdt';
        listItem.appendChild(paragraph1);

        chuot = parseFloat(chuotComponent.price.replace(/[^\d]/g, ''));
        var quanty = chuot * chuotComponent.quantity;
        var formattedChuot = quanty.toLocaleString( { style: 'currency', currency: 'VND' });
        formattedChuot = formattedChuot.replace('$', '') + 'đ';

        var paragraph2 = document.createElement('p');
        paragraph2.innerHTML = `${formattedChuot}</span>`;
        paragraph2.className = 'price-prdt price-total';
        listItem.appendChild(paragraph2);

        var decreaseButton = document.createElement('button');
        decreaseButton.innerHTML = 'Số lượng:  <i class="fa fa-caret-left" aria-hidden="true"></i>';
        decreaseButton.className = 'btn-total';
        decreaseButton.onclick = function () {
            decreaseChuotQuantity(chuotComponent.id);
        };
        listItem.appendChild(decreaseButton);

        var paragraph3 = document.createElement('p');
        paragraph3.innerHTML = `<span id="quantity${chuotComponent.id}">${chuotComponent.quantity}`;
        paragraph3.className = 'd-in-bl';
        listItem.appendChild(paragraph3);



        var increaseButton = document.createElement('button');
        increaseButton.innerHTML = '<i class="fa fa-caret-right" aria-hidden="true"></i>';
        increaseButton.className = 'btn-total';
        increaseButton.onclick = function () {
            increaseChuotQuantity(chuotComponent.id);
        };
        listItem.appendChild(increaseButton);

        var deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
        deleteButton.className = 'delete-button';
        deleteButton.onclick = function () {
            deleteChuot(chuotComponent.id);
        };
        listItem.appendChild(deleteButton);

        selectedChuotList.appendChild(listItem);
    });
}

function increaseChuotQuantity(chuotId) {
    var existingChuotIndex = selectedChuot.findIndex(function (chuotComponent) {
        return chuotComponent.id === chuotId;
    });

    if (existingChuotIndex !== -1) {
        selectedChuot[existingChuotIndex].quantity++;
        displaySelectedChuot();
        localStorage.setItem('selectedChuot', JSON.stringify(selectedChuot));
    }displayTotalSum();
}

function decreaseChuotQuantity(chuotId) {
    var existingChuotIndex = selectedChuot.findIndex(function (chuotComponent) {
        return chuotComponent.id === chuotId;
    });

    if (existingChuotIndex !== -1 && selectedChuot[existingChuotIndex].quantity > 1) {
        selectedChuot[existingChuotIndex].quantity--;
        displaySelectedChuot();
        localStorage.setItem('selectedChuot', JSON.stringify(selectedChuot));
    }displayTotalSum();
}

function deleteChuot(chuotId) {
    var confirmDelete = window.confirm("Bạn có chắc muốn xóa Chuột khỏi danh sách?");
    if (confirmDelete) {
        buttonmouse.style.display = 'block';
        var existingChuotIndex = selectedChuot.findIndex(function (selectedChuot) {
            return selectedChuot.id === chuotId;
        });

        if (existingChuotIndex !== -1) {
            selectedChuot.splice(existingChuotIndex, 1);

            displaySelectedChuot();
            localStorage.setItem('selectedChuot', JSON.stringify(selectedChuot));
        }
    }displayTotalSum();
}


//KEYBOARD------------------------------------
function addPhim(phimId) {
    var phimDiv = document.getElementById('phim' + phimId);
    var phimName = phimDiv.querySelector('.name-prdt').textContent;
    var phimPrice = phimDiv.querySelector('.price-prdt').textContent;
    var phimImage = phimDiv.querySelector('.img-fluid').src;

    var existingPhimIndex = selectedPhim.findIndex(function (selectedPhim) {
        return selectedPhim.id === phimId;
    });

    if (existingPhimIndex !== -1) {
        selectedPhim[existingPhimIndex].quantity++;
    } else {
        var phimComponent = {
            id: phimId,
            name: phimName,
            price: phimPrice,
            image: phimImage,
            quantity: 1
        };
        selectedPhim.push(phimComponent);
    }

    displaySelectedPhim();
    localStorage.setItem('selectedPhim', JSON.stringify(selectedPhim));
    displayTotalSum();
     $('#keyboard').modal('hide');
}

function displaySelectedPhim() {
    var selectedPhimList = document.getElementById('selectedPhim');
    selectedPhimList.innerHTML = '';
    lengthPrd = selectedPhim.length;
    if (lengthPrd >= 1) {
        buttonkeyboard.style.display = 'none';
    }

    selectedPhim.forEach(function (phimComponent) {
        var listItem = document.createElement('li');

        var image = document.createElement('img');
        image.src = phimComponent.image;
        image.alt = phimComponent.name;
        image.style.maxWidth = '90px'; 
        listItem.appendChild(image);

        var paragraph1 = document.createElement('p');
        paragraph1.textContent = phimComponent.name;
        paragraph1.className = 'name-prdt';
        listItem.appendChild(paragraph1);

        phim = parseFloat(phimComponent.price.replace(/[^\d]/g, ''));
        var quanty = phim * phimComponent.quantity;
        var formattedPhim = quanty.toLocaleString( { style: 'currency', currency: 'VND' });
        formattedPhim = formattedPhim.replace('$', '') + 'đ';


        var paragraph2 = document.createElement('p');
        paragraph2.innerHTML = `${formattedPhim}</span>`;
        paragraph2.className = 'price-prdt price-total';
        listItem.appendChild(paragraph2);

        var decreaseButton = document.createElement('button');
        decreaseButton.innerHTML = 'Số lượng:  <i class="fa fa-caret-left" aria-hidden="true"></i>';
        decreaseButton.className = 'btn-total';
        decreaseButton.onclick = function () {
            decreasePhimQuantity(phimComponent.id);
        };
        listItem.appendChild(decreaseButton);

        var paragraph3 = document.createElement('p');
        paragraph3.innerHTML = `<span id="quantity${phimComponent.id}">${phimComponent.quantity}`;
        paragraph3.className = 'd-in-bl';
        listItem.appendChild(paragraph3);



        var increaseButton = document.createElement('button');
        increaseButton.innerHTML = '<i class="fa fa-caret-right" aria-hidden="true"></i>';
        increaseButton.className = 'btn-total';
        increaseButton.onclick = function () {
            increasePhimQuantity(phimComponent.id);
        };
        listItem.appendChild(increaseButton);

        var deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
        deleteButton.className = 'delete-button';
        deleteButton.onclick = function () {
            deletePhim(phimComponent.id);
        };
        listItem.appendChild(deleteButton);

        selectedPhimList.appendChild(listItem);
    });
}

function increasePhimQuantity(phimId) {
    var existingPhimIndex = selectedPhim.findIndex(function (phimComponent) {
        return phimComponent.id === phimId;
    });

    if (existingPhimIndex !== -1) {
        selectedPhim[existingPhimIndex].quantity++;
        displaySelectedPhim();
        localStorage.setItem('selectedPhim', JSON.stringify(selectedPhim));
    }displayTotalSum();
}

function decreasePhimQuantity(phimId) {
    var existingPhimIndex = selectedPhim.findIndex(function (phimComponent) {
        return phimComponent.id === phimId;
    });

    if (existingPhimIndex !== -1 && selectedPhim[existingPhimIndex].quantity > 1) {
        selectedPhim[existingPhimIndex].quantity--;
        displaySelectedPhim();
        localStorage.setItem('selectedPhim', JSON.stringify(selectedPhim));
    }displayTotalSum();
}

function deletePhim(phimId) {
    var confirmDelete = window.confirm("Bạn có chắc muốn xóa Phím khỏi danh sách?");
    if (confirmDelete) {
        buttonkeyboard.style.display = 'block';
        var existingPhimIndex = selectedPhim.findIndex(function (selectedPhim) {
            return selectedPhim.id === phimId;
        });

        if (existingPhimIndex !== -1) {
            selectedPhim.splice(existingPhimIndex, 1);

            displaySelectedPhim();
            localStorage.setItem('selectedPhim', JSON.stringify(selectedPhim));
        }
    }displayTotalSum();
}

function displayTotalSum() {
    var totalSum = calculateTotalSum();
    
    var totalSumText = `${totalSum.toLocaleString({ style: 'currency', currency: 'VND' }).replace('$', '')}đ`;

    $('#totalll').text(totalSumText);
}

function calculateTotalSum() {
    var totalCpu = 0;
    var totalMain = 0;
    var totalRam = 0;
    var totalVga = 0;
    var totalSsd = 0;
    var totalHdd = 0;
    var totalPsu = 0;
    var totalVo = 0;
    var totalTamnhiet = 0;
    var totalMh = 0;
    var totalChuot = 0;
    var totalBanphim = 0;

    selectedCpus.forEach(function (cpuComponent) {
        var cpu = parseFloat(cpuComponent.price.replace(/[^\d]/g, ''));
        totalCpu += cpu * cpuComponent.quantity;
    });
    selectedMain.forEach(function (mainComponent) {
        var mainn = parseFloat(mainComponent.price.replace(/[^\d]/g, ''));
        totalMain += mainn * mainComponent.quantity;
    });
    selectedRam.forEach(function (ramComponent) {
        var ram = parseFloat(ramComponent.price.replace(/[^\d]/g, ''));
        totalRam += ram * ramComponent.quantity;
    });
    selectedVga.forEach(function (vgaComponent) {
        var vga = parseFloat(vgaComponent.price.replace(/[^\d]/g, ''));
        totalVga += vga * vgaComponent.quantity;
    });
    selectedSsd.forEach(function (ssdComponent) {
        var ssd = parseFloat(ssdComponent.price.replace(/[^\d]/g, ''));
        totalSsd += ssd * ssdComponent.quantity;
    });
    selectedHdd.forEach(function (hddComponent) {
        var hdd = parseFloat(hddComponent.price.replace(/[^\d]/g, ''));
        totalHdd += hdd * hddComponent.quantity;
    });
    selectedPsu.forEach(function (psuComponent) {
        var ssd = parseFloat(psuComponent.price.replace(/[^\d]/g, ''));
        totalPsu += ssd * psuComponent.quantity;
    });
    selectedVo.forEach(function (voComponent) {
        var vo = parseFloat(voComponent.price.replace(/[^\d]/g, ''));
        totalVo += vo * voComponent.quantity;
    });
    selectedTannhiet.forEach(function (tannhietComponent) {
        var tn = parseFloat(tannhietComponent.price.replace(/[^\d]/g, ''));
        totalTamnhiet += tn * tannhietComponent.quantity;
    });
    selectedManhinh.forEach(function (manhinhComponent) {
        var mh = parseFloat(manhinhComponent.price.replace(/[^\d]/g, ''));
        totalMh += mh * manhinhComponent.quantity;
    });
    selectedChuot.forEach(function (chuotComponent) {
        var chuot = parseFloat(chuotComponent.price.replace(/[^\d]/g, ''));
        totalChuot += chuot * chuotComponent.quantity;
    });
    selectedPhim.forEach(function (phimComponent) {
        var phim = parseFloat(phimComponent.price.replace(/[^\d]/g, ''));
        totalBanphim += phim * phimComponent.quantity;
    });
    var total = totalCpu +totalMain+totalRam+totalVga+totalSsd+totalPsu+totalVo+totalTamnhiet+totalMh+totalChuot+totalBanphim+totalHdd;
    return total;
}

// //expdf------------------
// // Define specialElementHandlers
// var specialElementHandlers = {
//     '#bypassme': function (element, renderer) {
//         return true;
//     }
// };

// // Thêm hàm xử lý sự kiện khi nút được nhấp
// document.getElementById("export").addEventListener("click", function () {
//     exportPDF('content');
// });

// // Hàm xuất PDF
// function exportPDF(id) {
//     var doc = new jsPDF('p', 'pt', 'a4');
//     var source = document.getElementById(id);

//     var margins = {
//         top: 10,
//         bottom: 10,
//         left: 10,
//         width: 10,
//     };

//     doc.fromHTML(
//         source,
//         margins.left,
//         margins.top, {
//             'width': margins.width,
//             'elementHandlers': specialElementHandlers,
//         },
//         function (dispose) {
//             doc.save('CauHinh.pdf');
//         },
//         margins
//     );
// }


//export to exel
function ExportToExcel(type, fn, dl) {
    var elt = document.getElementById('tbl_exporttable_to_xls');
    var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
    return dl ?
      XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }):
      XLSX.writeFile(wb, fn || ('MySheetName.' + (type || 'xlsx')));
 }
