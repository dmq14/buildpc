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
var selectedChuot = [];
var selectedPhim = [];
var selectedTai = [];
var selectedCpus2 = [];
var selectedMain2 = [];
var selectedRam2 = [];
var selectedVga2 = [];
var selectedSsd2 = [];
var selectedHdd2 = [];
var selectedPsu2 = [];
var selectedVo2 = [];
var selectedTannhiet2 = [];
var selectedManhinh2 = [];
var selectedChuot2 = [];
var selectedPhim2 = [];
var selectedTai2 = [];
var cauhinh = 1;

function printMessage(selectedBtn) {
    if (selectedBtn == 'cauhinh1') {
      cauhinh = 1;
    } else if (selectedBtn == 'cauhinh2') {
      cauhinh = 2;
    }
  }



function exportToPDF() {
    var content = document.getElementById('content');
    var options = {
        top: 0,
        margin: 5, 
        filename: 'BuildPCKV.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait', autoPaging: true  }
    };
      
    html2pdf(content, options);

}
function exportToPDF2() {
    var content = document.getElementById('content2');
    var options = {
        top: 0,
        margin: 5, 
        filename: 'BuildPCKV2.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait', autoPaging: true  }
    };
      
    html2pdf(content, options);

}


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
    var storedTai = localStorage.getItem('selectedTai');
    var storedCpu2 = localStorage.getItem('selectedCpus2');
    var storedMain2 = localStorage.getItem('selectedMain2');
    var storedRam2 = localStorage.getItem('selectedRam2');
    var storedVga2 = localStorage.getItem('selectedVga2');
    var storedSsd2 = localStorage.getItem('selectedSsd2');
    var storedHdd2 = localStorage.getItem('selectedHdd2');
    var storedPsu2 = localStorage.getItem('selectedPsu2');
    var storedVo2 = localStorage.getItem('selectedVo2');
    var storedTannhiet2 = localStorage.getItem('selectedTannhiet2');
    var storedManhinh2 = localStorage.getItem('selectedManhinh2');
    var storedChuot2 = localStorage.getItem('selectedChuot2');
    var storedPhim2 = localStorage.getItem('selectedPhim2');
    var storedTai2 = localStorage.getItem('selectedTai2');
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
    if (storedTai) {
        selectedTai = JSON.parse(storedTai);
        displaySelectedTai();
    }
    // cau hinh 2
    if (storedCpu2) {
        selectedCpus2 = JSON.parse(storedCpu2);
        displaySelectedCpus2();
    }
    if (storedMain2) {
        selectedMain2 = JSON.parse(storedMain2);
        displaySelectedMain2();
    }
    if (storedRam2) {
        selectedRam2 = JSON.parse(storedRam2);
        displaySelectedRam2();
    }
    if (storedVga2) {
        selectedVga2 = JSON.parse(storedVga2);
        displaySelectedVga2();
    }
    if (storedSsd2) {
        selectedSsd2 = JSON.parse(storedSsd2);
        displaySelectedSsd2();
    }
    if (storedHdd2) {
        selectedHdd2 = JSON.parse(storedHdd2);
        displaySelectedHdd2();
    }
    if (storedPsu2) {
        selectedPsu2 = JSON.parse(storedPsu2);
        displaySelectedPsu2();
    }
    if (storedVo2) {
        selectedVo2 = JSON.parse(storedVo2);
        displaySelectedVo2();
    }
    if (storedTannhiet2) {
        selectedTannhiet2 = JSON.parse(storedTannhiet2);
        displaySelectedTannhiet2();
    }
    if (storedManhinh2) {
        selectedManhinh2 = JSON.parse(storedManhinh2);
        displaySelectedManhinh2();
    }
    if (storedChuot2) {
        selectedChuot2 = JSON.parse(storedChuot2);
        displaySelectedChuot2();
    }
    if (storedPhim2) {
        selectedPhim2 = JSON.parse(storedPhim2);
        displaySelectedPhim2();
    }
    if (storedTai2) {
        selectedTai2 = JSON.parse(storedTai2);
        displaySelectedTai2();
    }
    displayTotalSum();
    displayTotalSum2();
  
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
        displaySelectedTai();

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
        localStorage.removeItem('selectedTai');
        
        buttontannhiet.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Chọn sản phẩm';
        buttonmonitor.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Chọn sản phẩm';
        buttonmouse.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Chọn sản phẩm';
        buttonkeyboard.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Chọn sản phẩm';
        buttonpsu.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Chọn sản phẩm';
        buttonvo.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Chọn sản phẩm';
        buttonram.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Chọn sản phẩm';
        buttonmain.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Chọn sản phẩm';
        buttoncpu.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Chọn sản phẩm';
        buttonssd.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Chọn sản phẩm';
        buttonhdd.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Chọn sản phẩm';
        buttonvga.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Chọn sản phẩm';
        buttontai.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Chọn sản phẩm';
        
        location.reload();
    }
}
function deleteAll2() {
    var confirmDelete = window.confirm("Bạn có chắc muốn xóa tất cả các linh kiện đã chọn?");
    if (confirmDelete) {


        displaySelectedTannhiet2();
        displaySelectedManhinh2();
        displaySelectedChuot2();
        displaySelectedPhim2();
        displaySelectedPsu2();
        displaySelectedVo2();
        displaySelectedRam2();
        displaySelectedMain2();
        displaySelectedCpus2();
        displaySelectedSsd2();
        displaySelectedHdd2();
        displaySelectedVga2();
        displaySelectedTai2();

        localStorage.removeItem('selectedTannhiet2');
        localStorage.removeItem('selectedManhinh2');
        localStorage.removeItem('selectedChuot2');
        localStorage.removeItem('selectedPhim2');
        localStorage.removeItem('selectedPsu2');
        localStorage.removeItem('selectedVo2');
        localStorage.removeItem('selectedRam2');
        localStorage.removeItem('selectedMain2');
        localStorage.removeItem('selectedCpus2');
        localStorage.removeItem('selectedSsd2');
        localStorage.removeItem('selectedHdd2');
        localStorage.removeItem('selectedVga2');
        localStorage.removeItem('selectedTai2');
        
        buttontannhiet2.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Chọn sản phẩm';
        buttonmonitor2.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Chọn sản phẩm';
        buttonmouse2.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Chọn sản phẩm';
        buttonkeyboard2.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Chọn sản phẩm';
        buttonpsu2.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Chọn sản phẩm';
        buttonvo2.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Chọn sản phẩm';
        buttonram2.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Chọn sản phẩm';
        buttonmain2.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Chọn sản phẩm';
        buttoncpu2.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Chọn sản phẩm';
        buttonssd2.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Chọn sản phẩm';
        buttonhdd2.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Chọn sản phẩm';
        buttonvga2.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Chọn sản phẩm';
        buttontai2.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Chọn sản phẩm';
        
        location.reload();
    }
}
//CPU----------------------------------------
function addCpu(cpuId) {
    var cpuDiv = document.getElementById('cpu' + cpuId);
    var cpuName = cpuDiv.querySelector('.name-prdt').textContent;
    var cpuPrice = cpuDiv.querySelector('.price-prdt').textContent;
    var cpuImage = cpuDiv.querySelector('.img-fluid').src;

    var existingCpuIndex;

    if (cauhinh == 1) {
        existingCpuIndex = selectedCpus.findIndex(function (selectedCpu) {
            return selectedCpu.id === cpuId;
        });
    } else if (cauhinh == 2) {
        existingCpuIndex = selectedCpus2.findIndex(function (selectedCpu) {
            return selectedCpu.id === cpuId;
        });
    }

    if (existingCpuIndex !== -1) {
        if (cauhinh == 1) {
            selectedCpus[existingCpuIndex].quantity++;
        }else if (cauhinh == 2) {
            selectedCpus2[existingCpuIndex].quantity++;
        }
    } else {
        var cpuComponent = {
            id: cpuId,
            name: cpuName,
            price: cpuPrice,
            image: cpuImage,
            quantity: 1
        };

        if (cauhinh == 1) {
            selectedCpus = [];
            selectedCpus.push(cpuComponent);
        } else if (cauhinh == 2) {
            selectedCpus2 = [];
            selectedCpus2.push(cpuComponent);
        }
    }
    if(cauhinh==1){
    displaySelectedCpus();
    localStorage.setItem('selectedCpus', JSON.stringify(selectedCpus));
    }else if(cauhinh==2){
    displaySelectedCpus2();
    localStorage.setItem('selectedCpus2', JSON.stringify(selectedCpus2));
    }
    displayTotalSum();
    displayTotalSum2();
    $('#cpu').modal('hide');
}

function displaySelectedCpus() {
    var selectedCpuList = document.getElementById('selectedCpus');
    selectedCpuList.innerHTML = ''; 
    lengthPrd = selectedCpus.length;
    if (lengthPrd >= 1) {
        buttoncpu.innerHTML = '<i class="fa fa-pencil-square-o" aria-hidden="true"></i> Chọn lại';
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
        decreaseButton.innerHTML = ' Số lượng:  <i class="fa fa-caret-left" aria-hidden="true"></i>';
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

function displaySelectedCpus2() {
    var selectedCpuList = document.getElementById('selectedCpus2');
    selectedCpuList.innerHTML = ''; 
    lengthPrd = selectedCpus2.length;
    if (lengthPrd >= 1) {
        buttoncpu2.innerHTML = '<i class="fa fa-pencil-square-o" aria-hidden="true"></i> Chọn lại';
    }
    selectedCpus2.forEach(function (cpuComponent) {
    
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
        decreaseButton.innerHTML = ' Số lượng:  <i class="fa fa-caret-left" aria-hidden="true"></i>';
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
    if(cauhinh==1){
        var existingCpuIndex = selectedCpus.findIndex(function (cpuComponent) {
            return cpuComponent.id === cpuId;
        });
    
        if (existingCpuIndex !== -1) {
            selectedCpus[existingCpuIndex].quantity++;
            displaySelectedCpus();
            localStorage.setItem('selectedCpus', JSON.stringify(selectedCpus));
        }
        displayTotalSum();
    }else if(cauhinh ==2){
        var existingCpuIndex = selectedCpus2.findIndex(function (cpuComponent) {
            return cpuComponent.id === cpuId;
        });
    
        if (existingCpuIndex !== -1) {
            selectedCpus2[existingCpuIndex].quantity++;
            displaySelectedCpus2();
            localStorage.setItem('selectedCpus2', JSON.stringify(selectedCpus2));
        }
        displayTotalSum2();
    }

}

function decreaseCpuQuantity(cpuId) {
    if(cauhinh==1){
        var existingCpuIndex = selectedCpus.findIndex(function (cpuComponent) {
            return cpuComponent.id === cpuId;
        });
    
        if (existingCpuIndex !== -1 && selectedCpus[existingCpuIndex].quantity > 1) {
            selectedCpus[existingCpuIndex].quantity--;
            displaySelectedCpus();
            localStorage.setItem('selectedCpus', JSON.stringify(selectedCpus));
        }
        displayTotalSum();
    }else if(cauhinh ==2){
        var existingCpuIndex = selectedCpus2.findIndex(function (cpuComponent) {
            return cpuComponent.id === cpuId;
        });
    
        if (existingCpuIndex !== -1 && selectedCpus2[existingCpuIndex].quantity > 1) {
            selectedCpus2[existingCpuIndex].quantity--;
            displaySelectedCpus2();
            localStorage.setItem('selectedCpus2', JSON.stringify(selectedCpus2));
        }
        displayTotalSum2();
    }

}

function deleteCpu(cpuId) {
    var confirmDelete = window.confirm("Bạn có chắc muốn xóa CPU khỏi danh sách?");
    if (confirmDelete) {
        if(cauhinh==1){
        buttoncpu.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Chọn sản phẩm';

            var existingCpuIndex = selectedCpus.findIndex(function (selectedCpu) {
                return selectedCpu.id === cpuId;
            });
    
            if (existingCpuIndex !== -1) {
                selectedCpus.splice(existingCpuIndex, 1);
    
                displaySelectedCpus();
                localStorage.setItem('selectedCpus', JSON.stringify(selectedCpus));
            }
        }else if(cauhinh ==2){
            buttoncpu2.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Chọn sádsadản phẩm';

            var existingCpuIndex = selectedCpus2.findIndex(function (selectedCpu2) {
                return selectedCpu2.id === cpuId;
            });
    
            if (existingCpuIndex !== -1) {
                selectedCpus2.splice(existingCpuIndex, 1);
    
                displaySelectedCpus2();
                localStorage.setItem('selectedCpus2', JSON.stringify(selectedCpus2));
            }
        }

    }
    displayTotalSum();
    displayTotalSum2();
}


//MAIN----------------------------------------


function addMain(mainId) {
    var mainDiv = document.getElementById('main' + mainId);
    var mainName = mainDiv.querySelector('.name-prdt').textContent;
    var mainPrice = mainDiv.querySelector('.price-prdt').textContent;
    var mainImage = mainDiv.querySelector('.img-fluid').src;

    var existingMainIndex;
    if (cauhinh == 1) {
        existingMainIndex = selectedMain.findIndex(function (selectedMain) {
            return selectedMain.id === mainId;
        });
    } else if (cauhinh == 2) {
        existingMainIndex = selectedMain2.findIndex(function (selectedMain) {
            return selectedMain.id === mainId;
        });
    }
    
    if (existingMainIndex !== -1) {
        if (cauhinh == 1) {
            selectedMain[existingMainIndex].quantity++;

        }else if (cauhinh == 2) {
            selectedMain2[existingMainIndex].quantity++;

        }
    } else {
        var mainComponent = {
            id: mainId,
            name: mainName,
            price: mainPrice,
            image: mainImage,
            quantity: 1
        };
        if (cauhinh == 1) {
            selectedMain = [];
            selectedMain.push(mainComponent);
        } else if (cauhinh == 2) {
            selectedMain2 = [];
            selectedMain2.push(mainComponent);
        }
    }

    if(cauhinh==1){
        displaySelectedMain();
        localStorage.setItem('selectedMain', JSON.stringify(selectedMain));
        }else if(cauhinh==2){
        displaySelectedMain2();
        localStorage.setItem('selectedMain2', JSON.stringify(selectedMain2));
        }


    displayTotalSum();
    displayTotalSum2();
    $('#main').modal('hide');
}

function displaySelectedMain() {
    var selectedMainList = document.getElementById('selectedMain');
    selectedMainList.innerHTML = ''; 
    var main1 = 0;
    lengthPrd = selectedMain.length;
    if (lengthPrd >= 1) {
        buttonmain.innerHTML = '<i class="fa fa-pencil-square-o" aria-hidden="true"></i> Chọn lại';
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
        decreaseButton.innerHTML = ' Số lượng:  <i class="fa fa-caret-left" aria-hidden="true"></i>';
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
function displaySelectedMain2() {
    var selectedMainList = document.getElementById('selectedMain2');
    selectedMainList.innerHTML = ''; 
    var main1 = 0;
    lengthPrd = selectedMain2.length;
    if (lengthPrd >= 1) {
        buttonmain2.innerHTML = '<i class="fa fa-pencil-square-o" aria-hidden="true"></i> Chọn lại';
    }

    
    selectedMain2.forEach(function (mainComponent) {
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
        decreaseButton.innerHTML = ' Số lượng:  <i class="fa fa-caret-left" aria-hidden="true"></i>';
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
    

    if(cauhinh==1){
        var existingMainIndex = selectedMain.findIndex(function (mainComponent) {
            return mainComponent.id === mainId;
        });
    
        if (existingMainIndex !== -1) {
            selectedMain[existingMainIndex].quantity++;
            displaySelectedMain();
            localStorage.setItem('selectedMain', JSON.stringify(selectedMain));
        }displayTotalSum();
    }else if(cauhinh ==2){
        var existingMainIndex = selectedMain2.findIndex(function (mainComponent) {
            return mainComponent.id === mainId;
        });
    
        if (existingMainIndex !== -1) {
            selectedMain2[existingMainIndex].quantity++;
            displaySelectedMain2();
            localStorage.setItem('selectedMain2', JSON.stringify(selectedMain2));
        }displayTotalSum2();
    }
}

function decreaseMainQuantity(mainId) {
    if(cauhinh==1){
        var existingMainIndex = selectedMain.findIndex(function (mainComponent) {
            return mainComponent.id === mainId;
        });
    
        if (existingMainIndex !== -1 && selectedMain[existingMainIndex].quantity > 1) {
            selectedMain[existingMainIndex].quantity--;
            displaySelectedMain();
            localStorage.setItem('selectedMain', JSON.stringify(selectedMain));
        }displayTotalSum();
    }else if(cauhinh ==2){
        var existingMainIndex = selectedMain2.findIndex(function (mainComponent) {
            return mainComponent.id === mainId;
        });
    
        if (existingMainIndex !== -1 && selectedMain2[existingMainIndex].quantity > 1) {
            selectedMain2[existingMainIndex].quantity--;
            displaySelectedMain2();
            localStorage.setItem('selectedMain2', JSON.stringify(selectedMain2));
        }displayTotalSum2();
    }

}

function deleteMain(mainId) {
    
    var confirmDelete = window.confirm("Bạn có chắc muốn xóa Main khỏi danh sách?");
    if (confirmDelete) {
        if(cauhinh==1){
            buttonmain.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Chọn sản phẩm';
        
        
            var existingMainIndex = selectedMain.findIndex(function (selectedMain) {
                return selectedMain.id === mainId;
            });
    
            if (existingMainIndex !== -1) {
                selectedMain.splice(existingMainIndex, 1);
    
                
                displaySelectedMain();
                localStorage.setItem('selectedMain', JSON.stringify(selectedMain));
            }
        }else if(cauhinh ==2){
            buttonmain2.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Chọn sản phẩm';
        
        
            var existingMainIndex = selectedMain2.findIndex(function (selectedMain2) {
                return selectedMain2.id === mainId;
            });
    
            if (existingMainIndex !== -1) {
                selectedMain2.splice(existingMainIndex, 1);
    
                
                displaySelectedMain2();
                localStorage.setItem('selectedMain2', JSON.stringify(selectedMain2));
            }
        }

    }displayTotalSum();
    displayTotalSum2();
}


//RAM----------------------------------------



function addRam(ramId) {
    
    var ramDiv = document.getElementById('ram' + ramId);
    var ramName = ramDiv.querySelector('.name-prdt').textContent;
    var ramPrice = ramDiv.querySelector('.price-prdt').textContent;
    var ramImage = ramDiv.querySelector('.img-fluid').src;

    
    var existingRamIndex;
    if (cauhinh == 1) {
        existingRamIndex = selectedRam.findIndex(function (selectedRam) {
            return selectedRam.id === ramId;
        });
    } else if (cauhinh == 2) {
        existingRamIndex = selectedRam2.findIndex(function (selectedRam) {
            return selectedRam.id === mainId;
        });
    }
    
    if (existingRamIndex !== -1) {
        if (cauhinh == 1) {
            selectedRam[existingRamIndex].quantity++;
        }else if (cauhinh == 2) {
            selectedRam2[existingRamIndex].quantity++;
        }
    } else {
        
        var ramComponent = {
            id: ramId,
            name: ramName,
            price: ramPrice,
            image: ramImage,
            quantity: 1
        };
        if (cauhinh == 1) {
            selectedRam = [];
            selectedRam.push(ramComponent);
        } else if (cauhinh == 2) {
            selectedRam2 = [];
            selectedRam2.push(ramComponent);
        }
    }
    if(cauhinh==1){
        displaySelectedRam();
        localStorage.setItem('selectedRam', JSON.stringify(selectedRam));
        }else if(cauhinh==2){
            displaySelectedRam2();
            localStorage.setItem('selectedRam2', JSON.stringify(selectedRam2));
        }
    


    displayTotalSum();
    displayTotalSum2();
    $('#ram').modal('hide');
}

function displaySelectedRam() {
    var selectedRamList = document.getElementById('selectedRam');
    selectedRamList.innerHTML = ''; 
    lengthPrd = selectedRam.length;
    if (lengthPrd >= 1) {
        buttonram.innerHTML = '<i class="fa fa-pencil-square-o" aria-hidden="true"></i> Chọn lại';
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
        decreaseButton.innerHTML = ' Số lượng:  <i class="fa fa-caret-left" aria-hidden="true"></i>';
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
function displaySelectedRam2() {
    var selectedRamList = document.getElementById('selectedRam2');
    selectedRamList.innerHTML = ''; 
    lengthPrd = selectedRam2.length;
    if (lengthPrd >= 1) {
        buttonram2.innerHTML = '<i class="fa fa-pencil-square-o" aria-hidden="true"></i> Chọn lại';
    }

    
    selectedRam2.forEach(function (ramComponent) {
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
        decreaseButton.innerHTML = ' Số lượng:  <i class="fa fa-caret-left" aria-hidden="true"></i>';
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
    if(cauhinh==1){
        var existingRamIndex = selectedRam.findIndex(function (ramComponent) {
            return ramComponent.id === ramId;
        });
    
        if (existingRamIndex !== -1) {
            selectedRam[existingRamIndex].quantity++;
            displaySelectedRam();
            localStorage.setItem('selectedRam', JSON.stringify(selectedRam));
        }displayTotalSum();
    }else if(cauhinh ==2){
        var existingRamIndex = selectedRam2.findIndex(function (ramComponent) {
            return ramComponent.id === ramId;
        });
    
        if (existingRamIndex !== -1) {
            selectedRam2[existingRamIndex].quantity++;
            displaySelectedRam2();
            localStorage.setItem('selectedRam2', JSON.stringify(selectedRam2));
        }displayTotalSum2();
    }

}

function decreaseRamQuantity(ramId) {
    if(cauhinh==1){
        var existingRamIndex = selectedRam.findIndex(function (ramComponent) {
            return ramComponent.id === ramId;
        });
    
        if (existingRamIndex !== -1 && selectedRam[existingRamIndex].quantity > 1) {
            selectedRam[existingRamIndex].quantity--;
            displaySelectedRam();
            localStorage.setItem('selectedRam', JSON.stringify(selectedRam));
        }displayTotalSum();
    }else if(cauhinh ==2){
        var existingRamIndex = selectedRam2.findIndex(function (ramComponent) {
            return ramComponent.id === ramId;
        });
    
        if (existingRamIndex !== -1 && selectedRam2[existingRamIndex].quantity > 1) {
            selectedRam2[existingRamIndex].quantity--;
            displaySelectedRam2();
            localStorage.setItem('selectedRam2', JSON.stringify(selectedRam2));
        }displayTotalSum2();
    }

}

function deleteRam(ramId) {
    
    var confirmDelete = window.confirm("Bạn có chắc muốn xóa RAM khỏi danh sách?");
    if (confirmDelete) {
        if(cauhinh==1){
            buttonram.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Chọn sản phẩm';
            var existingRamIndex = selectedRam.findIndex(function (selectedRam) {
                return selectedRam.id === ramId;
            });
    
            if (existingRamIndex !== -1) {
                selectedRam.splice(existingRamIndex, 1);
    
                
                displaySelectedRam();
                localStorage.setItem('selectedRam', JSON.stringify(selectedRam));
            }
        }else if(cauhinh ==2){
            buttonram2.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Chọn sản phẩm';
            var existingRamIndex = selectedRam2.findIndex(function (selectedRam) {
                return selectedRam.id === ramId;
            });
    
            if (existingRamIndex !== -1) {
                selectedRam2.splice(existingRamIndex, 1);
    
                
                displaySelectedRam2();
                localStorage.setItem('selectedRam2', JSON.stringify(selectedRam2));
            }
        }

    }displayTotalSum();displayTotalSum2();
}

//VGA----------------------------------------

function addVga(vgaId) {
    
    var vgaDiv = document.getElementById('vga' + vgaId);
    var vgaName = vgaDiv.querySelector('.name-prdt').textContent;
    var vgaPrice = vgaDiv.querySelector('.price-prdt').textContent;
    var vgaImage = vgaDiv.querySelector('.img-fluid').src;

    

    var existingVgaIndex;
    if (cauhinh == 1) {
        existingVgaIndex = selectedVga.findIndex(function (selectedVga) {
            return selectedVga.id === vgaId;
        });
    } else if (cauhinh == 2) {
        existingVgaIndex = selectedVga2.findIndex(function (selectedVga) {
            return selectedVga.id === vgaId;
        });
    }
    if (existingVgaIndex !== -1) {
        
        if (cauhinh == 1) {
            selectedVga[existingVgaIndex].quantity++;

        }else if (cauhinh == 2) {
            selectedVga2[existingVgaIndex].quantity++;

        }
    } else {
        
        var vgaComponent = {
            id: vgaId,
            name: vgaName,
            price: vgaPrice,
            image: vgaImage,
            quantity: 1
        };
        
        if (cauhinh == 1) {
            selectedVga = [];
            selectedVga.push(vgaComponent);
        } else if (cauhinh == 2) {
            selectedVga2 = [];
            selectedVga2.push(vgaComponent);
        }
    }
    if(cauhinh==1){
    
        displaySelectedVga();
        localStorage.setItem('selectedVga', JSON.stringify(selectedVga));
        }else if(cauhinh==2){
        displaySelectedVga2();
        localStorage.setItem('selectedVga2', JSON.stringify(selectedVga2));
        }


    displayTotalSum();displayTotalSum2();
    $('#vga').modal('hide');
}

function displaySelectedVga() {
    var selectedVgaList = document.getElementById('selectedVga');
    selectedVgaList.innerHTML = ''; 
    lengthPrd = selectedVga.length;
    if (lengthPrd >= 1) {
        buttonvga.innerHTML = '<i class="fa fa-pencil-square-o" aria-hidden="true"></i> Chọn lại';
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
        decreaseButton.innerHTML = ' Số lượng:  <i class="fa fa-caret-left" aria-hidden="true"></i>';
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
function displaySelectedVga2() {
    var selectedVgaList = document.getElementById('selectedVga2');
    selectedVgaList.innerHTML = ''; 
    lengthPrd = selectedVga2.length;
    if (lengthPrd >= 1) {
        buttonvga2.innerHTML = '<i class="fa fa-pencil-square-o" aria-hidden="true"></i> Chọn lại';
    }

    
    selectedVga2.forEach(function (vgaComponent) {
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
        decreaseButton.innerHTML = ' Số lượng:  <i class="fa fa-caret-left" aria-hidden="true"></i>';
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
    if(cauhinh==1){
        var existingVgaIndex = selectedVga.findIndex(function (vgaComponent) {
            return vgaComponent.id === vgaId;
        });
    
        if (existingVgaIndex !== -1) {
            selectedVga[existingVgaIndex].quantity++;
            displaySelectedVga();
            localStorage.setItem('selectedVga', JSON.stringify(selectedVga));
        }displayTotalSum();
    }else if(cauhinh ==2){
        var existingVgaIndex = selectedVga2.findIndex(function (vgaComponent) {
            return vgaComponent.id === vgaId;
        });
    
        if (existingVgaIndex !== -1) {
            selectedVga2[existingVgaIndex].quantity++;
            displaySelectedVga2();
            localStorage.setItem('selectedVga2', JSON.stringify(selectedVga2));
        }displayTotalSum2();
    }

}

function decreaseVgaQuantity(vgaId) {
    if(cauhinh==1){
        var existingVgaIndex = selectedVga.findIndex(function (vgaComponent) {
            return vgaComponent.id === vgaId;
        });
    
        if (existingVgaIndex !== -1 && selectedVga[existingVgaIndex].quantity > 1) {
            selectedVga[existingVgaIndex].quantity--;
            displaySelectedVga();
            localStorage.setItem('selectedVga', JSON.stringify(selectedVga));
        }displayTotalSum();
    }else if(cauhinh ==2){
        var existingVgaIndex = selectedVga2.findIndex(function (vgaComponent) {
            return vgaComponent.id === vgaId;
        });
    
        if (existingVgaIndex !== -1 && selectedVga2[existingVgaIndex].quantity > 1) {
            selectedVga2[existingVgaIndex].quantity--;
            displaySelectedVga2();
            localStorage.setItem('selectedVga2', JSON.stringify(selectedVga2));
        }displayTotalSum2();
    }

}

function deleteVga(vgaId) {
    
    var confirmDelete = window.confirm("Bạn có chắc muốn xóa VGA khỏi danh sách?");
    if (confirmDelete) {
        if(cauhinh==1){
            buttonvga.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Chọn sản phẩm';
            var existingVgaIndex = selectedVga.findIndex(function (selectedVga) {
                return selectedVga.id === vgaId;
            });
    
            if (existingVgaIndex !== -1) {
                selectedVga.splice(existingVgaIndex, 1);
    
                
                displaySelectedVga();
                localStorage.setItem('selectedVga', JSON.stringify(selectedVga));
            }
        }else if(cauhinh ==2){
            buttonvga2.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Chọn sản phẩm';
            var existingVgaIndex = selectedVga2.findIndex(function (selectedVga) {
                return selectedVga.id === vgaId;
            });
    
            if (existingVgaIndex !== -1) {
                selectedVga2.splice(existingVgaIndex, 1);
                displaySelectedVga2();
                localStorage.setItem('selectedVga2', JSON.stringify(selectedVga2));
            }
        }

    }displayTotalSum();displayTotalSum2();
}

//SSD----------------------------------------
function addSsd(ssdId) {
    
    var ssdDiv = document.getElementById('ssd' + ssdId);
    var ssdName = ssdDiv.querySelector('.name-prdt').textContent;
    var ssdPrice = ssdDiv.querySelector('.price-prdt').textContent;
    var ssdImage = ssdDiv.querySelector('.img-fluid').src;

    
    var existingSsdIndex;
    if (cauhinh == 1) {
        existingSsdIndex =  selectedSsd.findIndex(function (selectedSsd) {
            return selectedSsd.id === ssdId;
        });
    } else if (cauhinh == 2) {
        existingSsdIndex =  selectedSsd2.findIndex(function (selectedSsd) {
            return selectedSsd.id === ssdId;
        });
    }
    if (existingSsdIndex !== -1) {
        if (cauhinh == 1) {
            selectedSsd[existingSsdIndex].quantity++;
        }else if (cauhinh == 2) {
            selectedSsd2[existingSsdIndex].quantity++;
        }
    } else {
        var ssdComponent = {
            id: ssdId,
            name: ssdName,
            price: ssdPrice,
            image: ssdImage,
            quantity: 1
        };
        if (cauhinh == 1) {
            selectedSsd = [];
            selectedSsd.push(ssdComponent);
        } else if (cauhinh == 2) {
            selectedSsd2 = [];
            selectedSsd2.push(ssdComponent);
        }
        
    }
    if(cauhinh==1){
        displaySelectedSsd();
        localStorage.setItem('selectedSsd', JSON.stringify(selectedSsd));
        }else if(cauhinh==2){
            displaySelectedSsd2();
            localStorage.setItem('selectedSsd2', JSON.stringify(selectedSsd2));
        }
    

    displayTotalSum();displayTotalSum2();
    $('#ssd').modal('hide');
}

function displaySelectedSsd() {
    var selectedSsdList = document.getElementById('selectedSsd');
    selectedSsdList.innerHTML = ''; 
    lengthPrd = selectedSsd.length;
    if (lengthPrd >= 1) {
        buttonssd.innerHTML = '<i class="fa fa-pencil-square-o" aria-hidden="true"></i> Chọn lại';
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
        decreaseButton.innerHTML = ' Số lượng:  <i class="fa fa-caret-left" aria-hidden="true"></i>';
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
function displaySelectedSsd2() {
    var selectedSsdList = document.getElementById('selectedSsd2');
    selectedSsdList.innerHTML = ''; 
    lengthPrd = selectedSsd2.length;
    if (lengthPrd >= 1) {
        buttonssd2.innerHTML = '<i class="fa fa-pencil-square-o" aria-hidden="true"></i> Chọn lại';
    }

    
    selectedSsd2.forEach(function (ssdComponent) {
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
        decreaseButton.innerHTML = ' Số lượng:  <i class="fa fa-caret-left" aria-hidden="true"></i>';
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
    if(cauhinh==1){
        var existingSsdIndex = selectedSsd.findIndex(function (ssdComponent) {
            return ssdComponent.id === ssdId;
        });
    
        if (existingSsdIndex !== -1) {
            selectedSsd[existingSsdIndex].quantity++;
            displaySelectedSsd();
            localStorage.setItem('selectedSsd', JSON.stringify(selectedSsd));
        }displayTotalSum();
    }else if(cauhinh ==2){
        var existingSsdIndex = selectedSsd2.findIndex(function (ssdComponent) {
            return ssdComponent.id === ssdId;
        });
    
        if (existingSsdIndex !== -1) {
            selectedSsd2[existingSsdIndex].quantity++;
            displaySelectedSsd2();
            localStorage.setItem('selectedSsd2', JSON.stringify(selectedSsd2));
        }displayTotalSum2();
    }

}

function decreaseSsdQuantity(ssdId) {
    if(cauhinh==1){
        var existingSsdIndex = selectedSsd.findIndex(function (ssdComponent) {
            return ssdComponent.id === ssdId;
        });
    
        if (existingSsdIndex !== -1 && selectedSsd[existingSsdIndex].quantity > 1) {
            selectedSsd[existingSsdIndex].quantity--;
            displaySelectedSsd();
            localStorage.setItem('selectedSsd', JSON.stringify(selectedSsd));
        }displayTotalSum();
    }else if(cauhinh ==2){
        var existingSsdIndex = selectedSsd2.findIndex(function (ssdComponent) {
            return ssdComponent.id === ssdId;
        });
    
        if (existingSsdIndex !== -1 && selectedSsd2[existingSsdIndex].quantity > 1) {
            selectedSsd2[existingSsdIndex].quantity--;
            displaySelectedSsd2();
            localStorage.setItem('selectedSsd2', JSON.stringify(selectedSsd2));
        }displayTotalSum2();
    }

}

function deleteSsd(ssdId) {
    
    var confirmDelete = window.confirm("Bạn có chắc muốn xóa SSD khỏi danh sách?");
    if (confirmDelete) {
        if(cauhinh==1){
            buttonssd.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Chọn sản phẩm';
            var existingSsdIndex = selectedSsd.findIndex(function (selectedSsd) {
                return selectedSsd.id === ssdId;
            });
    
            if (existingSsdIndex !== -1) {
                selectedSsd.splice(existingSsdIndex, 1);
    
                
                displaySelectedSsd();
                localStorage.setItem('selectedSsd', JSON.stringify(selectedSsd));
            }
        }else if(cauhinh ==2){
            buttonssd2.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Chọn sản phẩm';
            var existingSsdIndex = selectedSsd2.findIndex(function (selectedSsd) {
                return selectedSsd.id === ssdId;
            });
    
            if (existingSsdIndex !== -1) {
                selectedSsd2.splice(existingSsdIndex, 1);
    
                
                displaySelectedSsd2();
                localStorage.setItem('selectedSsd2', JSON.stringify(selectedSsd2));
            }
        }

    }displayTotalSum();displayTotalSum2();
}

//HDD-------------------------------------
function addHdd(hddId) {
    var hddDiv = document.getElementById('hdd' + hddId);
    var hddName = hddDiv.querySelector('.name-prdt').textContent;
    var hddPrice = hddDiv.querySelector('.price-prdt').textContent;
    var hddImage = hddDiv.querySelector('.img-fluid').src;

    var existingHddIndex;
    if (cauhinh == 1) {
        existingHddIndex = selectedHdd.findIndex(function (selectedHdd) {
            return selectedHdd.id === hddId;
        });
    } else if (cauhinh == 2) {
        existingHddIndex = selectedHdd2.findIndex(function (selectedHdd) {
            return selectedHdd.id === hddId;
        });
    }
    if (existingHddIndex !== -1) {
        if(cauhinh==1){
            selectedHdd[existingHddIndex].quantity++;
        }else if(cauhinh ==2){
            selectedHdd2[existingHddIndex].quantity++;
        }
    } else {
        
        var hddComponent = {
            id: hddId,
            name: hddName,
            price: hddPrice,
            image: hddImage,
            quantity: 1
        };
        
        if (cauhinh == 1) {
            selectedHdd = [];
            selectedHdd.push(hddComponent);
        } else if (cauhinh == 2) {
            selectedHdd2 = [];
            selectedHdd2.push(hddComponent);
        }
    }
    if(cauhinh==1){
        displaySelectedHdd();
        localStorage.setItem('selectedHdd', JSON.stringify(selectedHdd));
    }else if(cauhinh==2){
        displaySelectedHdd2();
        localStorage.setItem('selectedHdd2', JSON.stringify(selectedHdd2));
    }

    displayTotalSum();displayTotalSum2();
    $('#hdd').modal('hide');
}

function displaySelectedHdd() {
    var selectedHddList = document.getElementById('selectedHdd');
    selectedHddList.innerHTML = '';
    lengthPrd = selectedHdd.length;
    if (lengthPrd >= 1) {
        buttonhdd.innerHTML = '<i class="fa fa-pencil-square-o" aria-hidden="true"></i> Chọn lại';
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
        decreaseButton.innerHTML = ' Số lượng:  <i class="fa fa-caret-left" aria-hidden="true"></i>';
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
function displaySelectedHdd2() {
    var selectedHddList = document.getElementById('selectedHdd2');
    selectedHddList.innerHTML = '';
    lengthPrd = selectedHdd2.length;
    if (lengthPrd >= 1) {
        buttonhdd2.innerHTML = '<i class="fa fa-pencil-square-o" aria-hidden="true"></i> Chọn lại';
    }
    selectedHdd2.forEach(function (hddComponent) {
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
        decreaseButton.innerHTML = ' Số lượng:  <i class="fa fa-caret-left" aria-hidden="true"></i>';
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
    if(cauhinh==1){
        var existingHddIndex = selectedHdd.findIndex(function (hddComponent) {
            return hddComponent.id === hddId;
        });
    
        if (existingHddIndex !== -1) {
            selectedHdd[existingHddIndex].quantity++;
            displaySelectedHdd();
            localStorage.setItem('selectedHdd', JSON.stringify(selectedHdd));
        }
        displayTotalSum();
    }else if(cauhinh ==2){
        var existingHddIndex = selectedHdd2.findIndex(function (hddComponent) {
            return hddComponent.id === hddId;
        });
    
        if (existingHddIndex !== -1) {
            selectedHdd2[existingHddIndex].quantity++;
            displaySelectedHdd2();
            localStorage.setItem('selectedHdd2', JSON.stringify(selectedHdd2));
        }
        displayTotalSum2();
    }

}

function decreaseHddQuantity(hddId) {
    if(cauhinh==1){
        var existingHddIndex = selectedHdd.findIndex(function (hddComponent) {
            return hddComponent.id === hddId;
        });
    
        if (existingHddIndex !== -1 && selectedHdd[existingHddIndex].quantity > 1) {
            selectedHdd[existingHddIndex].quantity--;
            displaySelectedHdd();
            localStorage.setItem('selectedHdd', JSON.stringify(selectedHdd));
        }
        displayTotalSum();
    }else if(cauhinh ==2){
        var existingHddIndex = selectedHdd2.findIndex(function (hddComponent) {
            return hddComponent.id === hddId;
        });
    
        if (existingHddIndex !== -1 && selectedHdd2[existingHddIndex].quantity > 1) {
            selectedHdd2[existingHddIndex].quantity--;
            displaySelectedHdd2();
            localStorage.setItem('selectedHdd2', JSON.stringify(selectedHdd2));
        }
        displayTotalSum2();
    }

}

function deleteHdd(hddId) {
    var confirmDelete = window.confirm("Bạn có chắc muốn xóa HDD khỏi danh sách?");
    if (confirmDelete) {
        if(cauhinh==1){
            buttonhdd.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Chọn sản phẩm';
            var existingHddIndex = selectedHdd.findIndex(function (selectedHdd) {
                return selectedHdd.id === hddId;
            });
    
            if (existingHddIndex !== -1) {
                selectedHdd.splice(existingHddIndex, 1);
                displaySelectedHdd();
                localStorage.setItem('selectedHdd', JSON.stringify(selectedHdd));
            }
        }else if(cauhinh ==2){
            buttonhdd2.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Chọn sản phẩm';
            var existingHddIndex = selectedHdd2.findIndex(function (selectedHdd) {
                return selectedHdd.id === hddId;
            });
    
            if (existingHddIndex !== -1) {
                selectedHdd2.splice(existingHddIndex, 1);
                displaySelectedHdd2();
                localStorage.setItem('selectedHdd2', JSON.stringify(selectedHdd2));
            }
        }

    }
    displayTotalSum();displayTotalSum2();
}
//PSU----------------------------------------

function addPsu(psuId) {
    
    var psuDiv = document.getElementById('psu' + psuId);
    var psuName = psuDiv.querySelector('.name-prdt').textContent;
    var psuPrice = psuDiv.querySelector('.price-prdt').textContent;
    var psuImage = psuDiv.querySelector('.img-fluid').src;

    var existingPsuIndex;
    if (cauhinh == 1) {
        existingPsuIndex = selectedPsu.findIndex(function (selectedPsu) {
            return selectedPsu.id === psuId;
        });
    } else if (cauhinh == 2) {
        existingPsuIndex = selectedPsu2.findIndex(function (selectedPsu) {
            return selectedPsu.id === psuId;
        });
    }
    
    if (existingPsuIndex !== -1) {
        if(cauhinh==1){
            selectedPsu[existingPsuIndex].quantity++;
        }else if(cauhinh ==2){
            selectedPsu2[existingPsuIndex].quantity++;
        }
        
    } else {
        var psuComponent = {
            id: psuId,
            name: psuName,
            price: psuPrice,
            image: psuImage,
            quantity: 1
        };
        
        if (cauhinh == 1) {
            selectedPsu = [];
            selectedPsu.push(psuComponent);
        } else if (cauhinh == 2) {
            selectedPsu2 = [];
            selectedPsu2.push(psuComponent);
        }
    }

    if(cauhinh==1){
        displaySelectedPsu();
        localStorage.setItem('selectedPsu', JSON.stringify(selectedPsu));
    }else if(cauhinh==2){
        displaySelectedPsu2();
        localStorage.setItem('selectedPsu2', JSON.stringify(selectedPsu2));
    }

    displayTotalSum();displayTotalSum2();
    $('#psu').modal('hide');
}

function displaySelectedPsu() {
    var selectedPsuList = document.getElementById('selectedPsu');
    selectedPsuList.innerHTML = ''; 
    lengthPrd = selectedPsu.length;
    if (lengthPrd >= 1) {
        buttonpsu.innerHTML = '<i class="fa fa-pencil-square-o" aria-hidden="true"></i> Chọn lại';
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
        decreaseButton.innerHTML = ' Số lượng:  <i class="fa fa-caret-left" aria-hidden="true"></i>';
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
function displaySelectedPsu2() {
    var selectedPsuList = document.getElementById('selectedPsu2');
    selectedPsuList.innerHTML = ''; 
    lengthPrd = selectedPsu2.length;
    if (lengthPrd >= 1) {
        buttonpsu2.innerHTML = '<i class="fa fa-pencil-square-o" aria-hidden="true"></i> Chọn lại';
    }
    
    selectedPsu2.forEach(function (psuComponent) {
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
        decreaseButton.innerHTML = ' Số lượng:  <i class="fa fa-caret-left" aria-hidden="true"></i>';
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
    if(cauhinh==1){
        var existingPsuIndex = selectedPsu.findIndex(function (psuComponent) {
            return psuComponent.id === psuId;
        });
    
        if (existingPsuIndex !== -1) {
            selectedPsu[existingPsuIndex].quantity++;
            displaySelectedPsu();
            localStorage.setItem('selectedPsu', JSON.stringify(selectedPsu));
        }displayTotalSum();
    }else if(cauhinh ==2){
        var existingPsuIndex = selectedPsu2.findIndex(function (psuComponent) {
            return psuComponent.id === psuId;
        });
    
        if (existingPsuIndex !== -1) {
            selectedPsu2[existingPsuIndex].quantity++;
            displaySelectedPsu2();
            localStorage.setItem('selectedPsu2', JSON.stringify(selectedPsu2));
        }displayTotalSum2();
    }

}

function decreasePsuQuantity(psuId) {
    if(cauhinh==1){
        var existingPsuIndex = selectedPsu.findIndex(function (psuComponent) {
            return psuComponent.id === psuId;
        });
    
        if (existingPsuIndex !== -1 && selectedPsu[existingPsuIndex].quantity > 1) {
            selectedPsu[existingPsuIndex].quantity--;
            displaySelectedPsu();
            localStorage.setItem('selectedPsu', JSON.stringify(selectedPsu));
        }displayTotalSum();
    }else if(cauhinh ==2){
        var existingPsuIndex = selectedPsu2.findIndex(function (psuComponent) {
            return psuComponent.id === psuId;
        });
    
        if (existingPsuIndex !== -1 && selectedPs2u[existingPsuIndex].quantity > 1) {
            selectedPsu2[existingPsuIndex].quantity--;
            displaySelectedPsu2();
            localStorage.setItem('selectedPsu2', JSON.stringify(selectedPsu2));
        }displayTotalSum2();
    }

}
function deletePsu(psuId) {
    var confirmDelete = window.confirm("Bạn có chắc muốn xóa PSU khỏi danh sách?");
    if (confirmDelete) {
        if(cauhinh==1){
            buttonpsu.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Chọn sản phẩm';
            var existingPsuIndex = selectedPsu.findIndex(function (selectedPsu) {
                return selectedPsu.id === psuId;
            });
    
            if (existingPsuIndex !== -1) {
                selectedPsu.splice(existingPsuIndex, 1);
    
                displaySelectedPsu();
                localStorage.setItem('selectedPsu', JSON.stringify(selectedPsu));
            }
        }else if(cauhinh ==2){
            buttonpsu2.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Chọn sản phẩm';
            var existingPsuIndex = selectedPsu2.findIndex(function (selectedPsu) {
                return selectedPsu.id === psuId;
            });
    
            if (existingPsuIndex !== -1) {
                selectedPsu2.splice(existingPsuIndex, 1);
    
                displaySelectedPsu2();
                localStorage.setItem('selectedPsu2', JSON.stringify(selectedPsu2));
            }
        }

    }displayTotalSum();displayTotalSum2();
}
//CASE----------------------------------------

function addVo(voId) {
    
    var voDiv = document.getElementById('vo' + voId);
    var voName = voDiv.querySelector('.name-prdt').textContent;
    var voPrice = voDiv.querySelector('.price-prdt').textContent;
    var voImage = voDiv.querySelector('.img-fluid').src;

    
    var existingVoIndex;
    if (cauhinh == 1) {
        existingVoIndex = selectedVo.findIndex(function (selectedVo) {
            return selectedVo.id === voId;
        });
    } else if (cauhinh == 2) {
        existingVoIndex = selectedVo2.findIndex(function (selectedVo) {
            return selectedVo.id === voId;
        });
    }
    
    if (existingVoIndex !== -1) {
        if(cauhinh==1){
            selectedVo[existingVoIndex].quantity++;
        }else if(cauhinh ==2){
            selectedVo2[existingVoIndex].quantity++;
        }
    } else {
        var selectedVoComponent = {
            id: voId,
            name: voName,
            price: voPrice,
            image: voImage,
            quantity: 1
        };
        if(cauhinh==1){
            selectedVo = [];
            selectedVo.push(selectedVoComponent);
        }else if(cauhinh ==2){
            selectedVo2 = [];
            selectedVo2.push(selectedVoComponent);
        }
    }

    if(cauhinh==1){
        displaySelectedVo();
        localStorage.setItem('selectedVo', JSON.stringify(selectedVo));
    }else if(cauhinh ==2){
        displaySelectedVo2();
        localStorage.setItem('selectedVo2', JSON.stringify(selectedVo2));
    }

    displayTotalSum();displayTotalSum2();
    $('#vo').modal('hide');
}

function displaySelectedVo() {
    var selectedVoList = document.getElementById('selectedVo');
    selectedVoList.innerHTML = ''; 
    lengthPrd = selectedVo.length;
    if(lengthPrd >=1){
       buttonvo.innerHTML = '<i class="fa fa-pencil-square-o" aria-hidden="true"></i> Chọn lại';
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
        decreaseButton.innerHTML = ' Số lượng:  <i class="fa fa-caret-left" aria-hidden="true"></i>';
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
function displaySelectedVo2() {
    var selectedVoList = document.getElementById('selectedVo2');
    selectedVoList.innerHTML = ''; 
    lengthPrd = selectedVo2.length;
    if(lengthPrd >=1){
       buttonvo2.innerHTML = '<i class="fa fa-pencil-square-o" aria-hidden="true"></i> Chọn lại';
   }
    
    selectedVo2.forEach(function (selectedVoComponent) {
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
        decreaseButton.innerHTML = ' Số lượng:  <i class="fa fa-caret-left" aria-hidden="true"></i>';
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
    if(cauhinh==1){
        var existingVoIndex = selectedVo.findIndex(function (selectedVoComponent) {
            return selectedVoComponent.id === voId;
        });
    
        if (existingVoIndex !== -1) {
            selectedVo[existingVoIndex].quantity++;
            displaySelectedVo();
            localStorage.setItem('selectedVo', JSON.stringify(selectedVo));
        }displayTotalSum();
    }else if(cauhinh ==2){
        var existingVoIndex = selectedVo2.findIndex(function (selectedVoComponent) {
            return selectedVoComponent.id === voId;
        });
    
        if (existingVoIndex !== -1) {
            selectedVo2[existingVoIndex].quantity++;
            displaySelectedVo2();
            localStorage.setItem('selectedVo2', JSON.stringify(selectedVo2));
        }displayTotalSum2();
    }

}

function decreaseQuantity(voId) {
    if(cauhinh==1){
        var existingVoIndex = selectedVo.findIndex(function (selectedVoComponent) {
            return selectedVoComponent.id === voId;
        });
    
        if (existingVoIndex !== -1 && selectedVo[existingVoIndex].quantity > 1) {
            selectedVo[existingVoIndex].quantity--;
            displaySelectedVo();
            localStorage.setItem('selectedVo', JSON.stringify(selectedVo));
        }displayTotalSum();
    }else if(cauhinh ==2){
        var existingVoIndex = selectedVo2.findIndex(function (selectedVoComponent) {
            return selectedVoComponent.id === voId;
        });
    
        if (existingVoIndex !== -1 && selectedVo2[existingVoIndex].quantity > 1) {
            selectedVo2[existingVoIndex].quantity--;
            displaySelectedVo2();
            localStorage.setItem('selectedVo2', JSON.stringify(selectedVo2));
        }displayTotalSum2();
    }

}

function deleteVo(voId) {
    var confirmDelete = window.confirm("Bạn có chắc muốn xóa Case khỏi danh sách?");
    if (confirmDelete) {
        if(cauhinh==1){
            buttonvo.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Chọn sản phẩm';
            var existingVoIndex = selectedVo.findIndex(function (selectedVo) {
                return selectedVo.id === voId;
            });
            if (existingVoIndex !== -1) {
                selectedVo.splice(existingVoIndex, 1);
                displaySelectedVo();
                localStorage.setItem('selectedVo', JSON.stringify(selectedVo));
            }
        }else if(cauhinh ==2){
            buttonvo2.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Chọn sản phẩm';
            var existingVoIndex = selectedVo2.findIndex(function (selectedVo) {
                return selectedVo.id === voId;
            });
            if (existingVoIndex !== -1) {
                selectedVo2.splice(existingVoIndex, 1);
                displaySelectedVo2();
                localStorage.setItem('selectedVo2', JSON.stringify(selectedVo2));
            }
        }
    }displayTotalSum();displayTotalSum2();
}

//TAN NHIET-------------------------------------------
function addTannhiet(tannhietId) {
    var tannhietDiv = document.getElementById('tannhiet' + tannhietId);
    var tannhietName = tannhietDiv.querySelector('.name-prdt').textContent;
    var tannhietPrice = tannhietDiv.querySelector('.price-prdt').textContent;
    var tannhietImage = tannhietDiv.querySelector('.img-fluid').src;

    var existingTannhietIndex;
    if (cauhinh == 1) {
        existingTannhietIndex = selectedTannhiet.findIndex(function (selectedTannhiet) {
            return selectedTannhiet.id === tannhietId;
        });
    } else if (cauhinh == 2) {
        existingTannhietIndex = selectedTannhiet2.findIndex(function (selectedTannhiet) {
            return selectedTannhiet.id === tannhietId;
        });
    }
    if (existingTannhietIndex !== -1) {
        if(cauhinh==1){
            selectedTannhiet[existingTannhietIndex].quantity++;
        }else if(cauhinh ==2){
            selectedTannhiet2[existingTannhietIndex].quantity++;
        }
    } else {
        
        var tannhietComponent = {
            id: tannhietId,
            name: tannhietName,
            price: tannhietPrice,
            image: tannhietImage,
            quantity: 1
        };
        if(cauhinh==1){
            selectedTannhiet = [];
            selectedTannhiet.push(tannhietComponent);
        }else if(cauhinh ==2){
            selectedTannhiet2 = [];
            selectedTannhiet2.push(tannhietComponent);
        }
        
    }
    if(cauhinh==1){
        displaySelectedTannhiet();
        localStorage.setItem('selectedTannhiet', JSON.stringify(selectedTannhiet));
    }else if(cauhinh ==2){
        displaySelectedTannhiet2();
        localStorage.setItem('selectedTannhiet2', JSON.stringify(selectedTannhiet2));
    }

    displayTotalSum();displayTotalSum2();
    $('#tannhiet').modal('hide');
}

function displaySelectedTannhiet() {
    var selectedTannhietList = document.getElementById('selectedTannhiet');
    selectedTannhietList.innerHTML = ''; 
    lengthPrd = selectedTannhiet.length;
    if (lengthPrd >= 1) {
        buttontannhiet.innerHTML = '<i class="fa fa-pencil-square-o" aria-hidden="true"></i> Chọn lại';
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
        decreaseButton.innerHTML = ' Số lượng:  <i class="fa fa-caret-left" aria-hidden="true"></i>';
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
function displaySelectedTannhiet2() {
    var selectedTannhietList = document.getElementById('selectedTannhiet2');
    selectedTannhietList.innerHTML = ''; 
    lengthPrd = selectedTannhiet2.length;
    if (lengthPrd >= 1) {
        buttontannhiet2.innerHTML = '<i class="fa fa-pencil-square-o" aria-hidden="true"></i> Chọn lại';
    }

    selectedTannhiet2.forEach(function (tannhietComponent) {
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
        decreaseButton.innerHTML = ' Số lượng:  <i class="fa fa-caret-left" aria-hidden="true"></i>';
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
    if(cauhinh==1){
        var existingTannhietIndex = selectedTannhiet.findIndex(function (tannhietComponent) {
            return tannhietComponent.id === tannhietId;
        });
    
        if (existingTannhietIndex !== -1) {
            selectedTannhiet[existingTannhietIndex].quantity++;
            displaySelectedTannhiet();
            localStorage.setItem('selectedTannhiet', JSON.stringify(selectedTannhiet));
        }displayTotalSum();
    }else if(cauhinh ==2){
        var existingTannhietIndex = selectedTannhiet2.findIndex(function (tannhietComponent) {
            return tannhietComponent.id === tannhietId;
        });
    
        if (existingTannhietIndex !== -1) {
            selectedTannhiet2[existingTannhietIndex].quantity++;
            displaySelectedTannhiet2();
            localStorage.setItem('selectedTannhiet2', JSON.stringify(selectedTannhiet2));
        }displayTotalSum2();
    }

}

function decreaseTannhietQuantity(tannhietId) {
    if(cauhinh==1){
        var existingTannhietIndex = selectedTannhiet.findIndex(function (tannhietComponent) {
            return tannhietComponent.id === tannhietId;
        });
    
        if (existingTannhietIndex !== -1 && selectedTannhiet[existingTannhietIndex].quantity > 1) {
            selectedTannhiet[existingTannhietIndex].quantity--;
            displaySelectedTannhiet();
            localStorage.setItem('selectedTannhiet', JSON.stringify(selectedTannhiet));
        }displayTotalSum();
    }else if(cauhinh ==2){
        var existingTannhietIndex = selectedTannhiet2.findIndex(function (tannhietComponent) {
            return tannhietComponent.id === tannhietId;
        });
    
        if (existingTannhietIndex !== -1 && selectedTannhiet2[existingTannhietIndex].quantity > 1) {
            selectedTannhiet2[existingTannhietIndex].quantity--;
            displaySelectedTannhiet2();
            localStorage.setItem('selectedTannhiet2', JSON.stringify(selectedTannhiet2));
        }displayTotalSum2();
    }

}

function deleteTannhiet(tannhietId) {
    var confirmDelete = window.confirm("Bạn có chắc muốn xóa Tản nhiệt khỏi danh sách?");
    if (confirmDelete) {
        if(cauhinh==1){
            buttontannhiet.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Chọn sản phẩm';
            var existingTannhietIndex = selectedTannhiet.findIndex(function (selectedTannhiet) {
                return selectedTannhiet.id === tannhietId;
            });
    
            if (existingTannhietIndex !== -1) {
                selectedTannhiet.splice(existingTannhietIndex, 1);
    
                displaySelectedTannhiet();
                localStorage.setItem('selectedTannhiet', JSON.stringify(selectedTannhiet));
            }
        }else if(cauhinh ==2){
            buttontannhiet2.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Chọn sản phẩm';
            var existingTannhietIndex = selectedTannhiet2.findIndex(function (selectedTannhiet) {
                return selectedTannhiet.id === tannhietId;
            });
    
            if (existingTannhietIndex !== -1) {
                selectedTannhiet2.splice(existingTannhietIndex, 1);
    
                displaySelectedTannhiet2();
                localStorage.setItem('selectedTannhiet2', JSON.stringify(selectedTannhiet2));
            }
        }

    }displayTotalSum();displayTotalSum2();
}


//MONITTOR-----------------------------------------


function addManhinh(manhinhId) {
    var manhinhDiv = document.getElementById('manhinh' + manhinhId);
    var manhinhName = manhinhDiv.querySelector('.name-prdt').textContent;
    var manhinhPrice = manhinhDiv.querySelector('.price-prdt').textContent;
    var manhinhImage = manhinhDiv.querySelector('.img-fluid').src;

    var existingManhinhIndex;
    if (cauhinh == 1) {
        existingManhinhIndex = selectedManhinh.findIndex(function (selectedManhinh) {
            return selectedManhinh.id === manhinhId;
        });
    } else if (cauhinh == 2) {
        existingManhinhIndex = selectedManhinh2.findIndex(function (selectedManhinh) {
            return selectedManhinh.id === manhinhId;
        });
    }
    if (existingManhinhIndex !== -1) {
        if(cauhinh==1){
            selectedManhinh[existingManhinhIndex].quantity++;
        }else if(cauhinh ==2){
            selectedManhinh2[existingManhinhIndex].quantity++;
        }
        
    } else {
        
        var manhinhComponent = {
            id: manhinhId,
            name: manhinhName,
            price: manhinhPrice,
            image: manhinhImage,
            quantity: 1
        };
        
        if(cauhinh==1){
            selectedManhinh = [];
            selectedManhinh.push(manhinhComponent);
        }else if(cauhinh ==2){
            selectedManhinh2 = [];
            selectedManhinh2.push(manhinhComponent);
        }
    }
    if(cauhinh==1){
        displaySelectedManhinh();
        localStorage.setItem('selectedManhinh', JSON.stringify(selectedManhinh));
    }else if(cauhinh ==2){
        displaySelectedManhinh2();
        localStorage.setItem('selectedManhinh2', JSON.stringify(selectedManhinh2));
    }

    displayTotalSum();displayTotalSum2();
    $('#monitor').modal('hide');
}

function displaySelectedManhinh() {
    var selectedManhinhList = document.getElementById('selectedManhinh');
    selectedManhinhList.innerHTML = '';
    lengthPrd = selectedManhinh.length;
    if (lengthPrd >= 1) {
        buttonmonitor.innerHTML = '<i class="fa fa-pencil-square-o" aria-hidden="true"></i> Chọn lại';
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
        decreaseButton.innerHTML = ' Số lượng:  <i class="fa fa-caret-left" aria-hidden="true"></i>';
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
function displaySelectedManhinh2() {
    var selectedManhinhList = document.getElementById('selectedManhinh2');
    selectedManhinhList.innerHTML = '';
    lengthPrd = selectedManhinh2.length;
    if (lengthPrd >= 1) {
        buttonmonitor2.innerHTML = '<i class="fa fa-pencil-square-o" aria-hidden="true"></i> Chọn lại';
    }

    selectedManhinh2.forEach(function (manhinhComponent) {
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
        decreaseButton.innerHTML = ' Số lượng:  <i class="fa fa-caret-left" aria-hidden="true"></i>';
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
    if(cauhinh==1){
        var existingManhinhIndex = selectedManhinh.findIndex(function (manhinhComponent) {
            return manhinhComponent.id === manhinhId;
        });
    
        if (existingManhinhIndex !== -1) {
            selectedManhinh[existingManhinhIndex].quantity++;
            displaySelectedManhinh();
            localStorage.setItem('selectedManhinh', JSON.stringify(selectedManhinh));
        }displayTotalSum();
    }else if(cauhinh ==2){
        var existingManhinhIndex = selectedManhinh2.findIndex(function (manhinhComponent) {
            return manhinhComponent.id === manhinhId;
        });
    
        if (existingManhinhIndex !== -1) {
            selectedManhinh2[existingManhinhIndex].quantity++;
            displaySelectedManhinh2();
            localStorage.setItem('selectedManhinh2', JSON.stringify(selectedManhinh2));
        }displayTotalSum2();
    }

}

function decreaseManhinhQuantity(manhinhId) {
    if(cauhinh==1){
        var existingManhinhIndex = selectedManhinh.findIndex(function (manhinhComponent) {
            return manhinhComponent.id === manhinhId;
        });
    
        if (existingManhinhIndex !== -1 && selectedManhinh[existingManhinhIndex].quantity > 1) {
            selectedManhinh[existingManhinhIndex].quantity--;
            displaySelectedManhinh();
            localStorage.setItem('selectedManhinh', JSON.stringify(selectedManhinh));
        }displayTotalSum();
    }else if(cauhinh ==2){
        var existingManhinhIndex = selectedManhinh2.findIndex(function (manhinhComponent) {
            return manhinhComponent.id === manhinhId;
        });
    
        if (existingManhinhIndex !== -1 && selectedManhinh2[existingManhinhIndex].quantity > 1) {
            selectedManhinh2[existingManhinhIndex].quantity--;
            displaySelectedManhinh2();
            localStorage.setItem('selectedManhinh2', JSON.stringify(selectedManhinh2));
        }displayTotalSum2();
    }

}

function deleteManhinh(manhinhId) {
    var confirmDelete = window.confirm("Bạn có chắc muốn xóa Màn hình khỏi danh sách?");
    if (confirmDelete) {
        if(cauhinh==1){
            buttonmonitor.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Chọn sản phẩm';
            var existingManhinhIndex = selectedManhinh.findIndex(function (selectedManhinh) {
                return selectedManhinh.id === manhinhId;
            });
    
            if (existingManhinhIndex !== -1) {
                selectedManhinh.splice(existingManhinhIndex, 1);
    
                displaySelectedManhinh();
                localStorage.setItem('selectedManhinh', JSON.stringify(selectedManhinh));
            }
        }else if(cauhinh ==2){
            buttonmonitor2.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Chọn sản phẩm';
            var existingManhinhIndex = selectedManhinh2.findIndex(function (selectedManhinh) {
                return selectedManhinh.id === manhinhId;
            });
    
            if (existingManhinhIndex !== -1) {
                selectedManhinh2.splice(existingManhinhIndex, 1);
    
                displaySelectedManhinh2();
                localStorage.setItem('selectedManhinh2', JSON.stringify(selectedManhinh2));
            }
        }

    }displayTotalSum();displayTotalSum2();
}

//MOUSE-----------------------------------------
function addChuot(chuotId) {
    var chuotDiv = document.getElementById('chuot' + chuotId);
    var chuotName = chuotDiv.querySelector('.name-prdt').textContent;
    var chuotPrice = chuotDiv.querySelector('.price-prdt').textContent;
    var chuotImage = chuotDiv.querySelector('.img-fluid').src;


    var existingChuotIndex;
    if (cauhinh == 1) {
        existingChuotIndex = selectedChuot.findIndex(function (selectedChuot) {
            return selectedChuot.id === chuotId;
        });
    } else if (cauhinh == 2) {
        existingChuotIndex = selectedChuot2.findIndex(function (selectedChuot) {
            return selectedChuot.id === chuotId;
        });
    }
    if (existingChuotIndex !== -1) {
        if(cauhinh==1){
            selectedChuot[existingChuotIndex].quantity++;
        }else if(cauhinh ==2){
            selectedChuot2[existingChuotIndex].quantity++;
        }
        
    } else {
        
        var chuotComponent = {
            id: chuotId,
            name: chuotName,
            price: chuotPrice,
            image: chuotImage,
            quantity: 1
        };
        
        if(cauhinh==1){
            selectedChuot = [];
            selectedChuot.push(chuotComponent);
        }else if(cauhinh ==2){
            selectedChuot2 = [];
            selectedChuot2.push(chuotComponent);
        }
    }
    if(cauhinh==1){
        displaySelectedChuot();
        localStorage.setItem('selectedChuot', JSON.stringify(selectedChuot));
    }else if(cauhinh ==2){
        displaySelectedChuot2();
        localStorage.setItem('selectedChuot2', JSON.stringify(selectedChuot2));
    }

    displayTotalSum();displayTotalSum2();
     $('#mouse').modal('hide');
}

function displaySelectedChuot() {
    var selectedChuotList = document.getElementById('selectedChuot');
    selectedChuotList.innerHTML = '';
    lengthPrd = selectedChuot.length;
    if (lengthPrd >= 1) {
        buttonmouse.innerHTML = '<i class="fa fa-pencil-square-o" aria-hidden="true"></i> Chọn lại';
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
        decreaseButton.innerHTML = ' Số lượng:  <i class="fa fa-caret-left" aria-hidden="true"></i>';
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
function displaySelectedChuot2() {
    var selectedChuotList = document.getElementById('selectedChuot2');
    selectedChuotList.innerHTML = '';
    lengthPrd = selectedChuot2.length;
    if (lengthPrd >= 1) {
        buttonmouse2.innerHTML = '<i class="fa fa-pencil-square-o" aria-hidden="true"></i> Chọn lại';
    }

    selectedChuot2.forEach(function (chuotComponent) {
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
        decreaseButton.innerHTML = ' Số lượng:  <i class="fa fa-caret-left" aria-hidden="true"></i>';
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
    if(cauhinh==1){
        var existingChuotIndex = selectedChuot.findIndex(function (chuotComponent) {
            return chuotComponent.id === chuotId;
        });
    
        if (existingChuotIndex !== -1) {
            selectedChuot[existingChuotIndex].quantity++;
            displaySelectedChuot();
            localStorage.setItem('selectedChuot', JSON.stringify(selectedChuot));
        }displayTotalSum();
    }else if(cauhinh ==2){
        var existingChuotIndex = selectedChuot2.findIndex(function (chuotComponent) {
            return chuotComponent.id === chuotId;
        });
    
        if (existingChuotIndex !== -1) {
            selectedChuot2[existingChuotIndex].quantity++;
            displaySelectedChuot2();
            localStorage.setItem('selectedChuot2', JSON.stringify(selectedChuot2));
        }displayTotalSum2();
    }

}

function decreaseChuotQuantity(chuotId) {
    if(cauhinh==1){
        var existingChuotIndex = selectedChuot.findIndex(function (chuotComponent) {
            return chuotComponent.id === chuotId;
        });
    
        if (existingChuotIndex !== -1 && selectedChuot[existingChuotIndex].quantity > 1) {
            selectedChuot[existingChuotIndex].quantity--;
            displaySelectedChuot();
            localStorage.setItem('selectedChuot', JSON.stringify(selectedChuot));
        }displayTotalSum();
    }else if(cauhinh ==2){
        var existingChuotIndex = selectedChuot2.findIndex(function (chuotComponent) {
            return chuotComponent.id === chuotId;
        });
    
        if (existingChuotIndex !== -1 && selectedChuot2[existingChuotIndex].quantity > 1) {
            selectedChuot2[existingChuotIndex].quantity--;
            displaySelectedChuot2();
            localStorage.setItem('selectedChuot2', JSON.stringify(selectedChuot2));
        }displayTotalSum2();
    }

}

function deleteChuot(chuotId) {
    var confirmDelete = window.confirm("Bạn có chắc muốn xóa Chuột khỏi danh sách?");
    if (confirmDelete) {
        if(cauhinh==1){
            buttonmouse.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Chọn sản phẩm';
            var existingChuotIndex = selectedChuot.findIndex(function (selectedChuot) {
                return selectedChuot.id === chuotId;
            });
    
            if (existingChuotIndex !== -1) {
                selectedChuot.splice(existingChuotIndex, 1);
    
                displaySelectedChuot();
                localStorage.setItem('selectedChuot', JSON.stringify(selectedChuot));
            }
        }else if(cauhinh ==2){
            buttonmouse2.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Chọn sản phẩm';
            var existingChuotIndex = selectedChuot2.findIndex(function (selectedChuot) {
                return selectedChuot.id === chuotId;
            });
    
            if (existingChuotIndex !== -1) {
                selectedChuot2.splice(existingChuotIndex, 1);
    
                displaySelectedChuot2();
                localStorage.setItem('selectedChuot2', JSON.stringify(selectedChuot2));
            }
        }

    }displayTotalSum();displayTotalSum2();
}


//KEYBOARD------------------------------------
function addPhim(phimId) {
    var phimDiv = document.getElementById('phim' + phimId);
    var phimName = phimDiv.querySelector('.name-prdt').textContent;
    var phimPrice = phimDiv.querySelector('.price-prdt').textContent;
    var phimImage = phimDiv.querySelector('.img-fluid').src;

    var existingPhimIndex;
    if (cauhinh == 1) {
        existingPhimIndex = selectedPhim.findIndex(function (selectedPhim) {
            return selectedPhim.id === phimId;
        });
    } else if (cauhinh == 2) {
        existingPhimIndex = selectedPhim2.findIndex(function (selectedPhim) {
            return selectedPhim.id === phimId;
        });
    }
    if (existingPhimIndex !== -1) {
        if(cauhinh==1){
            selectedPhim[existingPhimIndex].quantity++;
        }else if(cauhinh ==2){
            selectedPhim2[existingPhimIndex].quantity++;
        }
        
    } else {
        
        var phimComponent = {
            id: phimId,
            name: phimName,
            price: phimPrice,
            image: phimImage,
            quantity: 1
        };
        
        if(cauhinh==1){
            selectedPhim = [];
            selectedPhim.push(phimComponent);
        }else if(cauhinh ==2){
            selectedPhim2 = [];
            selectedPhim2.push(phimComponent);
        }
    }
    if(cauhinh==1){
        displaySelectedPhim();
        localStorage.setItem('selectedPhim', JSON.stringify(selectedPhim));
    }else if(cauhinh ==2){
        displaySelectedPhim2();
        localStorage.setItem('selectedPhim2', JSON.stringify(selectedPhim2));
    }

    displayTotalSum();displayTotalSum2();
     $('#keyboard').modal('hide');
}

function displaySelectedPhim() {
    var selectedPhimList = document.getElementById('selectedPhim');
    selectedPhimList.innerHTML = '';
    lengthPrd = selectedPhim.length;
    if (lengthPrd >= 1) {
        buttonkeyboard.innerHTML = '<i class="fa fa-pencil-square-o" aria-hidden="true"></i> Chọn lại';
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
        decreaseButton.innerHTML = ' Số lượng:  <i class="fa fa-caret-left" aria-hidden="true"></i>';
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
function displaySelectedPhim2() {
    var selectedPhimList = document.getElementById('selectedPhim2');
    selectedPhimList.innerHTML = '';
    lengthPrd = selectedPhim2.length;
    if (lengthPrd >= 1) {
        buttonkeyboard2.innerHTML = '<i class="fa fa-pencil-square-o" aria-hidden="true"></i> Chọn lại';
    }

    selectedPhim2.forEach(function (phimComponent) {
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
        decreaseButton.innerHTML = ' Số lượng:  <i class="fa fa-caret-left" aria-hidden="true"></i>';
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
    if(cauhinh==1){
        var existingPhimIndex = selectedPhim.findIndex(function (phimComponent) {
            return phimComponent.id === phimId;
        });
    
        if (existingPhimIndex !== -1) {
            selectedPhim[existingPhimIndex].quantity++;
            displaySelectedPhim();
            localStorage.setItem('selectedPhim', JSON.stringify(selectedPhim));
        }displayTotalSum();
    }else if(cauhinh ==2){
        var existingPhimIndex = selectedPhim2.findIndex(function (phimComponent) {
            return phimComponent.id === phimId;
        });
    
        if (existingPhimIndex !== -1) {
            selectedPhim2[existingPhimIndex].quantity++;
            displaySelectedPhim2();
            localStorage.setItem('selectedPhim2', JSON.stringify(selectedPhim2));
        }displayTotalSum2();
    }

}

function decreasePhimQuantity(phimId) {
    if(cauhinh==1){
        var existingPhimIndex = selectedPhim.findIndex(function (phimComponent) {
            return phimComponent.id === phimId;
        });
    
        if (existingPhimIndex !== -1 && selectedPhim[existingPhimIndex].quantity > 1) {
            selectedPhim[existingPhimIndex].quantity--;
            displaySelectedPhim();
            localStorage.setItem('selectedPhim', JSON.stringify(selectedPhim));
        }displayTotalSum();
    }else if(cauhinh ==2){
        var existingPhimIndex = selectedPhim2.findIndex(function (phimComponent) {
            return phimComponent.id === phimId;
        });
    
        if (existingPhimIndex !== -1 && selectedPhim2[existingPhimIndex].quantity > 1) {
            selectedPhim2[existingPhimIndex].quantity--;
            displaySelectedPhim2();
            localStorage.setItem('selectedPhim2', JSON.stringify(selectedPhim2));
        }displayTotalSum2();
    }

}

function deletePhim(phimId) {
    var confirmDelete = window.confirm("Bạn có chắc muốn xóa Phím khỏi danh sách?");
    if (confirmDelete) {
        if(cauhinh==1){
            buttonkeyboard.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Chọn sản phẩm';
            var existingPhimIndex = selectedPhim.findIndex(function (selectedPhim) {
                return selectedPhim.id === phimId;
            });
    
            if (existingPhimIndex !== -1) {
                selectedPhim.splice(existingPhimIndex, 1);
    
                displaySelectedPhim();
                localStorage.setItem('selectedPhim', JSON.stringify(selectedPhim));
            }
        }else if(cauhinh ==2){
            buttonkeyboard2.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Chọn sản phẩm';
            var existingPhimIndex = selectedPhim2.findIndex(function (selectedPhim) {
                return selectedPhim.id === phimId;
            });
    
            if (existingPhimIndex !== -1) {
                selectedPhim2.splice(existingPhimIndex, 1);
    
                displaySelectedPhim2();
                localStorage.setItem('selectedPhim2', JSON.stringify(selectedPhim2));
            }
        }

    }displayTotalSum();displayTotalSum2();
}
///tai nghe-------------
function addTai(taiId) {
    var taiDiv = document.getElementById('tai' + taiId);
    var taiName = taiDiv.querySelector('.name-prdt').textContent;
    var taiPrice = taiDiv.querySelector('.price-prdt').textContent;
    var taiImage = taiDiv.querySelector('.img-fluid').src;

    var existingTaiIndex;
    if (cauhinh == 1) {
        existingTaiIndex = selectedTai.findIndex(function (selectedTai) {
            return selectedTai.id === taiId;
        });
    } else if (cauhinh == 2) {
        existingTaiIndex = selectedTai2.findIndex(function (selectedTai) {
            return selectedTai.id === taiId;
        });
    }
    if (existingTaiIndex !== -1) {
        if(cauhinh==1){
            selectedTai[existingTaiIndex].quantity++;
        }else if(cauhinh ==2){
            selectedTai2[existingTaiIndex].quantity++;
        }
    } else {
        
        var taiComponent = {
            id: taiId,
            name: taiName,
            price: taiPrice,
            image: taiImage,
            quantity: 1
        };
        
        if(cauhinh==1){
            selectedTai = [];
            selectedTai.push(taiComponent);
        }else if(cauhinh ==2){
            selectedTai2 = [];
            selectedTai2.push(taiComponent);
        }
    }
    if(cauhinh==1){
        displaySelectedTai();
        localStorage.setItem('selectedTai', JSON.stringify(selectedTai));
    }else if(cauhinh ==2){
        displaySelectedTai2();
        localStorage.setItem('selectedTai2', JSON.stringify(selectedTai2));
    }

    displayTotalSum();displayTotalSum2();
    $('#tai').modal('hide'); 
}

function displaySelectedTai() {
    var selectedTaiList = document.getElementById('selectedTai');
    selectedTaiList.innerHTML = '';
    lengthPrd = selectedTai.length;
     if(lengthPrd >=1){
        buttontai.innerHTML = '<i class="fa fa-pencil-square-o" aria-hidden="true"></i> Chọn lại';
    }
    selectedTai.forEach(function (taiComponent) {
        var listItem = document.createElement('li');
        var image = document.createElement('img');
        image.src = taiComponent.image;
        image.alt = taiComponent.name;
        image.style.maxWidth = '90px';
        listItem.appendChild(image);

        var paragraph1 = document.createElement('p');
        paragraph1.textContent = taiComponent.name;
        paragraph1.className = 'name-prdt';
        listItem.appendChild(paragraph1);

        var tai = parseFloat(taiComponent.price.replace(/[^\d]/g, ''));
        var quanty = tai * taiComponent.quantity;
        var formattedTai = quanty.toLocaleString({ style: 'currency', currency: 'VND' });
        formattedTai = formattedTai.replace('$', '') + 'đ';

        var paragraph2 = document.createElement('p');
        paragraph2.innerHTML = `${formattedTai}</span>`;
        paragraph2.className = 'price-prdt price-total';
        listItem.appendChild(paragraph2);

        var decreaseButton = document.createElement('button');
        decreaseButton.innerHTML = 'Số lượng:  <i class="fa fa-caret-left" aria-hidden="true"></i>';
        decreaseButton.className = 'btn-total';
        decreaseButton.onclick = function () {
            decreaseTaiQuantity(taiComponent.id);
        };
        listItem.appendChild(decreaseButton);

        var paragraph3 = document.createElement('p');
        paragraph3.innerHTML = `<span id="quantity${taiComponent.id}">${taiComponent.quantity}`;
        paragraph3.className = 'd-in-bl';
        listItem.appendChild(paragraph3);

        var increaseButton = document.createElement('button');
        increaseButton.innerHTML = '<i class="fa fa-caret-right" aria-hidden="true"></i>';
        increaseButton.className = 'btn-total';
        increaseButton.onclick = function () {
            increaseTaiQuantity(taiComponent.id);
        };
        listItem.appendChild(increaseButton);

        var deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
        deleteButton.className = 'delete-button';
        deleteButton.onclick = function () {
            deleteTai(taiComponent.id);
        };
        listItem.appendChild(deleteButton);

        selectedTaiList.appendChild(listItem);
    });
}
function displaySelectedTai2() {
    var selectedTaiList = document.getElementById('selectedTai2');
    selectedTaiList.innerHTML = '';
    lengthPrd = selectedTai2.length;
     if(lengthPrd >=1){
        buttontai2.innerHTML = '<i class="fa fa-pencil-square-o" aria-hidden="true"></i> Chọn lại';
    }
    selectedTai2.forEach(function (taiComponent) {
        var listItem = document.createElement('li');
        var image = document.createElement('img');
        image.src = taiComponent.image;
        image.alt = taiComponent.name;
        image.style.maxWidth = '90px';
        listItem.appendChild(image);

        var paragraph1 = document.createElement('p');
        paragraph1.textContent = taiComponent.name;
        paragraph1.className = 'name-prdt';
        listItem.appendChild(paragraph1);

        var tai = parseFloat(taiComponent.price.replace(/[^\d]/g, ''));
        var quanty = tai * taiComponent.quantity;
        var formattedTai = quanty.toLocaleString({ style: 'currency', currency: 'VND' });
        formattedTai = formattedTai.replace('$', '') + 'đ';

        var paragraph2 = document.createElement('p');
        paragraph2.innerHTML = `${formattedTai}</span>`;
        paragraph2.className = 'price-prdt price-total';
        listItem.appendChild(paragraph2);

        var decreaseButton = document.createElement('button');
        decreaseButton.innerHTML = 'Số lượng:  <i class="fa fa-caret-left" aria-hidden="true"></i>';
        decreaseButton.className = 'btn-total';
        decreaseButton.onclick = function () {
            decreaseTaiQuantity(taiComponent.id);
        };
        listItem.appendChild(decreaseButton);

        var paragraph3 = document.createElement('p');
        paragraph3.innerHTML = `<span id="quantity${taiComponent.id}">${taiComponent.quantity}`;
        paragraph3.className = 'd-in-bl';
        listItem.appendChild(paragraph3);

        var increaseButton = document.createElement('button');
        increaseButton.innerHTML = '<i class="fa fa-caret-right" aria-hidden="true"></i>';
        increaseButton.className = 'btn-total';
        increaseButton.onclick = function () {
            increaseTaiQuantity(taiComponent.id);
        };
        listItem.appendChild(increaseButton);

        var deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
        deleteButton.className = 'delete-button';
        deleteButton.onclick = function () {
            deleteTai(taiComponent.id);
        };
        listItem.appendChild(deleteButton);

        selectedTaiList.appendChild(listItem);
    });
}
function increaseTaiQuantity(taiId) {
    if(cauhinh==1){
        var existingTaiIndex = selectedTai.findIndex(function (taiComponent) {
            return taiComponent.id === taiId;
        });
    
        if (existingTaiIndex !== -1) {
            selectedTai[existingTaiIndex].quantity++;
            displaySelectedTai();
            localStorage.setItem('selectedTai', JSON.stringify(selectedTai));
        }
        displayTotalSum();
    }else if(cauhinh ==2){
        var existingTaiIndex = selectedTai2.findIndex(function (taiComponent) {
            return taiComponent.id === taiId;
        });
    
        if (existingTaiIndex !== -1) {
            selectedTai2[existingTaiIndex].quantity++;
            displaySelectedTai2();
            localStorage.setItem('selectedTai2', JSON.stringify(selectedTai2));
        }
        displayTotalSum2();
    }

}

function decreaseTaiQuantity(taiId) {
    if(cauhinh==1){
        var existingTaiIndex = selectedTai.findIndex(function (taiComponent) {
            return taiComponent.id === taiId;
        });
    
        if (existingTaiIndex !== -1 && selectedTai[existingTaiIndex].quantity > 1) {
            selectedTai[existingTaiIndex].quantity--;
            displaySelectedTai();
            localStorage.setItem('selectedTai', JSON.stringify(selectedTai));
        }
        displayTotalSum();
    }else if(cauhinh ==2){
        var existingTaiIndex = selectedTai2.findIndex(function (taiComponent) {
            return taiComponent.id === taiId;
        });
    
        if (existingTaiIndex !== -1 && selectedTai2[existingTaiIndex].quantity > 1) {
            selectedTai2[existingTaiIndex].quantity--;
            displaySelectedTai2();
            localStorage.setItem('selectedTai2', JSON.stringify(selectedTai2));
        }
        displayTotalSum2();
    }

}

function deleteTai(taiId) {
    var confirmDelete = window.confirm("Bạn có chắc muốn xóa tai nghe khỏi danh sách?");
    if (confirmDelete) {
        if(cauhinh==1){
            buttontai.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Chọn sản phẩm';
            var existingTaiIndex = selectedTai.findIndex(function (selectedTai) {
                return selectedTai.id === taiId;
            });
    
            if (existingTaiIndex !== -1) {
                selectedTai.splice(existingTaiIndex, 1);
                displaySelectedTai();
                localStorage.setItem('selectedTai', JSON.stringify(selectedTai));
            }
        }else if(cauhinh ==2){
            buttontai2.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i> Chọn sản phẩm';
            var existingTaiIndex = selectedTai2.findIndex(function (selectedTai) {
                return selectedTai.id === taiId;
            });
    
            if (existingTaiIndex !== -1) {
                selectedTai2.splice(existingTaiIndex, 1);
                displaySelectedTai2();
                localStorage.setItem('selectedTai2', JSON.stringify(selectedTai2));
            }
        }
    }
    displayTotalSum();displayTotalSum2();
}
//------------------
function displayTotalSum() {
    var totalSum = calculateTotalSum();
    
    var totalSumText = `${totalSum.toLocaleString({ style: 'currency', currency: 'VND' }).replace('$', '')}đ`;

    $('#total-prdt').text(totalSumText);
    $('#total-prdtl').text(totalSumText);
}
function displayTotalSum2() {
    var totalSum = calculateTotalSum2();
    
    var totalSumText = `${totalSum.toLocaleString({ style: 'currency', currency: 'VND' }).replace('$', '')}đ`;

    $('#total-prdt2').text(totalSumText);
    $('#total-prdtl2').text(totalSumText);
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
    var totalTai = 0;

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
    selectedTai.forEach(function (taiComponent) {
        var tai = parseFloat(taiComponent.price.replace(/[^\d]/g, ''));
        totalTai += tai * taiComponent.quantity;
    });
    var total = totalCpu +totalMain+totalRam+totalVga+totalSsd+totalPsu+totalVo+totalTamnhiet+totalMh+totalChuot+totalBanphim+totalHdd+totalTai;
    return total;
}
function calculateTotalSum2() {
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
    var totalTai = 0;

    selectedCpus2.forEach(function (cpuComponent) {
        var cpu = parseFloat(cpuComponent.price.replace(/[^\d]/g, ''));
        totalCpu += cpu * cpuComponent.quantity;
        console.log(totalCpu);
    });
    selectedMain2.forEach(function (mainComponent) {
        var mainn = parseFloat(mainComponent.price.replace(/[^\d]/g, ''));
        totalMain += mainn * mainComponent.quantity;
    });
    selectedRam2.forEach(function (ramComponent) {
        var ram = parseFloat(ramComponent.price.replace(/[^\d]/g, ''));
        totalRam += ram * ramComponent.quantity;
    });
    selectedVga2.forEach(function (vgaComponent) {
        var vga = parseFloat(vgaComponent.price.replace(/[^\d]/g, ''));
        totalVga += vga * vgaComponent.quantity;
    });
    selectedSsd2.forEach(function (ssdComponent) {
        var ssd = parseFloat(ssdComponent.price.replace(/[^\d]/g, ''));
        totalSsd += ssd * ssdComponent.quantity;
    });
    selectedHdd2.forEach(function (hddComponent) {
        var hdd = parseFloat(hddComponent.price.replace(/[^\d]/g, ''));
        totalHdd += hdd * hddComponent.quantity;
    });
    selectedPsu2.forEach(function (psuComponent) {
        var ssd = parseFloat(psuComponent.price.replace(/[^\d]/g, ''));
        totalPsu += ssd * psuComponent.quantity;
    });
    selectedVo2.forEach(function (voComponent) {
        var vo = parseFloat(voComponent.price.replace(/[^\d]/g, ''));
        totalVo += vo * voComponent.quantity;
    });
    selectedTannhiet2.forEach(function (tannhietComponent) {
        var tn = parseFloat(tannhietComponent.price.replace(/[^\d]/g, ''));
        totalTamnhiet += tn * tannhietComponent.quantity;
    });
    selectedManhinh2.forEach(function (manhinhComponent) {
        var mh = parseFloat(manhinhComponent.price.replace(/[^\d]/g, ''));
        totalMh += mh * manhinhComponent.quantity;
    });
    selectedChuot2.forEach(function (chuotComponent) {
        var chuot = parseFloat(chuotComponent.price.replace(/[^\d]/g, ''));
        totalChuot += chuot * chuotComponent.quantity;
    });
    selectedPhim2.forEach(function (phimComponent) {
        var phim = parseFloat(phimComponent.price.replace(/[^\d]/g, ''));
        totalBanphim += phim * phimComponent.quantity;
    });
    selectedTai2.forEach(function (taiComponent) {
        var tai = parseFloat(taiComponent.price.replace(/[^\d]/g, ''));
        totalTai += tai * taiComponent.quantity;
    });
    var total2 = totalCpu +totalMain+totalRam+totalVga+totalSsd+totalPsu+totalVo+totalTamnhiet+totalMh+totalChuot+totalBanphim+totalHdd+totalTai;
    return total2;
}


