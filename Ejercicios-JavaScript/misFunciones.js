/**
 * Created by Agus on 6/5/2017.
 */

/**
 * Conversión de Unidades de metros, yardas, pies y pulgadas
 * @method CambiarUnidades
 * @param {string} id - El id de los inputs de metros, yardas, pies y pulgas.
 * @param {number} valor - El valor de los inputs de matros, yardas, pies y pulgadas.
 * @return
 */
function CambioUnidades(id, value) {
    if (isNaN(value)) {
        alert("Se ingreso un valor invalido");
        document.Unidades.unid_metro.value = "";
        document.Unidades.unid_pulgada.value = "";
        document.Unidades.unid_pie.value = "";
        document.Unidades.unid_yarda.value = "";
    } else if (id == "metro") {
        document.Unidades.unid_pulgada.value = 39.3701 * value;
        document.Unidades.unid_pie.value = 3.28084 * value;
        document.Unidades.unid_yarda.value = 1.09361 * value;
    } else if (id == "pulgada") {
        document.Unidades.unid_metro.value = 0.0254 * value;
        document.Unidades.unid_pie.value = 0.0833333 * value;
        document.Unidades.unid_yarda.value = 0.0277778 * value;
    } else if (id == "pie") {
        document.Unidades.unid_metro.value = 0.3084 * value;
        document.Unidades.unid_pulgada.value = 12 * value;
        document.Unidades.unid_yarda.value = 0.3333333 * value;
    } else if (id == "yarda") {
        document.Unidades.unid_metro.value = 0.9144 * value;
        document.Unidades.unid_pulgada.value = 36 * value;
        document.Unidades.unid_pie.value = 3 * value;
    }
}

function ConvertirGaR(id) {
    var gra, rad;
    if (id == "grados") {
        grad = document.getElementById(elementid = "grados").value;
        rad = (grad * Math.PI) / 180;
    } else if (id == "radianes") {
        rad = document.getElementById(elementid = "radianes").value;
        grad = (rad * 180) / Math.PI;
    }
    document.getElementById(elementid = "grados").value = grad;
    document.getElementById(elementid = "radianes").value = rad;
}

function mostrar_ocultar(valorMO) {
    if (valorMO == "val_mostrar") {
        document.getElementById(elementid = "divMO").style.display = 'block';
    } else if (valorMO == "val_ocultar") {
        document.getElementById(elementid = "divMO").style.display = 'none';
    }
}

function calcular_suma() {
    var nums1, nums2;
    nums1= Number(document.getElementsByName(elementName="sum_num1")[0].value);
    nums2= document.getElementsByName(elementName="sum_num2")[0].value;
    document.getElementsByName(elementName="sum_total")[0].value=nums1+Number(nums2);
}
function calcular_resta() {
    var numr1, numr2;
    numr1= Number(document.getElementsByName(elementName="res_num1")[0].value);
    numr2= document.getElementsByName(elementName="res_num2")[0].value;
    document.getElementsByName(elementName="res_total")[0].value=numr1-Number(numr2);
}
function calcular_multiplicacion() {
    var numm1, numm2;
    numm1= Number(document.getElementsByName(elementName="mul_num1")[0].value);
    numm2= document.getElementsByName(elementName="mul_num2")[0].value;
    document.getElementsByName(elementName="mul_total")[0].value=numm1*Number(numm2);
}
function calcular_division() {
    var numd1, numd2;
    numd1= Number(document.getElementsByName(elementName="div_num1")[0].value);
    numd2= document.getElementsByName(elementName="div_num2")[0].value;
    document.getElementsByName(elementName="div_total")[0].value=numd1/Number(numd2);
}