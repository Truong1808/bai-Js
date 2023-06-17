var arrKetQua = [];
var arrDemSoNguyen = [];

document.getElementById("themSoSo").onclick = function(){
    var nhapSo = document.getElementById("nhapSo").value * 1;
    arrKetQua.push(nhapSo);
    
    document.getElementById('hienThi').innerHTML =  arrKetQua;
}


// Tong so duong


document.getElementById('btnTinhTong').onclick = function(){
    var tong = 0;
    for (var i = 0; i < arrKetQua.length; i++) {
        var e = arrKetQua[i];
        tong += e; 
    }
    document.getElementById('tongSoDuong').innerHTML =  tong;
}

// Dem so duong

document.getElementById('DemSo').onclick = function(){
    var demSo = 0;
    for (var i = 0; i < arrKetQua.length; i++) {
        var e = arrKetQua[i];
        if(e > 0) {
            demSo++
        }
    }
    document.getElementById('demSoDuong').innerHTML =  demSo;
}

// Tim so nho nhat

document.getElementById('soNhoNhat').onclick = function(){
    var soNhoNhat =arrKetQua[0];
    for (var i = 0; i < arrKetQua.length; i++) {
        var e = arrKetQua[i];
        if(e < soNhoNhat) {
            soNhoNhat = e;
        }
    }
    document.getElementById('timSoNhoNhat').innerHTML =  soNhoNhat;
}

// Tim so duong nho nhat

document.getElementById('txtSoDuongNhoNhat').onclick = function(){
    var soDuongNhoNhat =arrKetQua[0];
    for (var i = 0; i < arrKetQua.length; i++) {
        var e = arrKetQua[i];
        if(e > 0 && e < soDuongNhoNhat) {
            soDuongNhoNhat = e;
        }
    }
    document.getElementById('soDuongNhoNhat').innerHTML =  soDuongNhoNhat;
}


// Tim so chan cuoi cung

document.getElementById('txtSoChanCuoiCung').onclick = function(){
    var soChanCuoiCung = 0;
    for (var i = arrKetQua.length; i > 0 ; i--) {
        var e = arrKetQua[i];
        if(e % 2 == 0) {
            soChanCuoiCung = e;
            break;
        }
    }
    document.getElementById('soChanCuoiCung').innerHTML =  soChanCuoiCung;
}

// Doi cho 

document.getElementById('btnDoiCho').onclick = function(){
    var index1 = document.getElementById("nhapSo1").value * 1;
    var index2 = document.getElementById("nhapSo2").value * 1;
    var arrDoiCho = arrKetQua.slice();
    arrDoiCho[index1] ^= arrDoiCho[index2];
    arrDoiCho[index2] ^= arrDoiCho[index1];
    arrDoiCho[index1] ^= arrDoiCho[index2];
    document.getElementById('doiCho').innerHTML =  arrDoiCho;
}

// Sap xep tang dan

document.getElementById('btnSapXep').onclick = function(){
    var arrTangDan = arrKetQua.slice();
    arrTangDan.sort(function(a, b){
        return a - b;
    });
    document.getElementById('sapXepTangDan').innerHTML =  arrTangDan;
}

// Tim so nguyen dau tien

document.getElementById('btnTimSoNguyenTo').onclick = function(){
    var soNguyenToDauTien = 0;
    for(var i = 1; i < arrKetQua.length; i++ ) {
        const e = arrKetQua[i];
        if(e < 2) {
            continue;
        } else if(e != 2 && e % 2 == 0) {
            continue;
        } else {
            for (let j = 2; j <= Math.sqrt(e); j++) {
                if(e % j == 0) {
                    continue;
                }
            }
        }
        soNguyenToDauTien = e;
        break;
    } 
    document.getElementById('timSoNguyenTo').innerHTML =  soNguyenToDauTien == 0 ? "Khong co so nguyen to" : soNguyenToDauTien;
}

// Dem so nguyen

document.getElementById("btnThemSo").onclick = function(){
    var nhapSo = document.getElementById("nhapSoDemSoNguyen").value * 1;
    console.warn(nhapSo)
    arrDemSoNguyen.push(nhapSo);
    document.getElementById('demSoNguyen').innerHTML =  arrDemSoNguyen;
}

document.getElementById('txtDemSoNguyen').onclick = function(){
    var demSoNguyen = 0;
    for (var i = 0; i < arrDemSoNguyen.length; i++) {
        var e = arrDemSoNguyen[i];
        if(Number.isInteger(e)) {
           demSoNguyen++;
        }
    }
    document.getElementById('demSoNguyen2').innerHTML =  demSoNguyen;
}

//So sanh so luong am duong 

document.getElementById('txtSoSanh').onclick = function(){
    var soDuong = 0;
    var soAm = 0;
    for (var i = 0; i < arrKetQua.length; i++) {
        arrKetQua[i] > 0 ? soDuong++ : soAm++
    }
    var ketQua = "";
    if(soAm == soDuong) {
        ketQua = "So am = So duong";
    } else if( soAm > soDuong) {
        ketQua = "So am > So duong";
    } else {
        ketQua = "So am < So duong";
    }
    document.getElementById('soSanhAmDuong').innerHTML =  ketQua;
}