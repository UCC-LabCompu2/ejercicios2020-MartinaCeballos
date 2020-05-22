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
    var metro, pie, yarda, pulgada;
    if(value.includes(",")){
        value=value.replace(",",".");
    }
    if(isNaN(value)){
        alert("Se ingreso un valor invalido");
        metro= "";
        pulgada= "";
        pie= "";
        yarda="";
    }else if(id=="metro"){
        pulgada= 39.3701*value;
        pie= 3.28084*value;
        yarda=1.09361*value;
        metro=value;
    }else if(id=="pulgada") {
        metro = 0.0254*value;
        pie = 0.0833333*value;
        yarda = 0.0277778*value;
        pulgada=value;
    }else if(id=="pie"){
        metro= 0.3084*value;
        pulgada= 12*value;
        yarda=0.3333333*value;
        pie=value;
    }else if(id=="yarda"){
        metro= 0.9144*value;
        pulgada= 36*value;
        pie=3*value;
        yarda=value;
    }
    document.Unidades.unid_metro.value= Math.round(metro*100)/100;
    document.Unidades.unid_pulgada.value= Math.round(pulgada*100)/100;
    document.Unidades.unid_pie.value=Math.round(pie*100)/100;
    document.Unidades.unid_yarda.value=Math.round(yarda*100)/100;
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
    document.getElementsByName(elementName="sum_total")[0].innerHTML=nums1+Number(nums2);
}
function calcular_resta() {
    var numr1, numr2;
    numr1= Number(document.getElementsByName(elementName="res_num1")[0].value);
    numr2= document.getElementsByName(elementName="res_num2")[0].value;
    document.getElementsByName(elementName="res_total")[0].innerHTML=numr1-Number(numr2);
}
function calcular_multiplicacion() {
    var numm1, numm2;
    numm1= Number(document.getElementsByName(elementName="mul_num1")[0].value);
    numm2= document.getElementsByName(elementName="mul_num2")[0].value;
    document.getElementsByName(elementName="mul_total")[0].innerHTML=numm1*Number(numm2);
}
function calcular_division() {
    var numd1, numd2;
    numd1= Number(document.getElementsByName(elementName="div_num1")[0].value);
    numd2= document.getElementsByName(elementName="div_num2")[0].value;
    document.getElementsByName(elementName="div_total")[0].innerHTML=numd1/Number(numd2);
}
function Cargarweb(){
    var cant,uni, urlcomp;
    cant =document.getElementById(elementid= "distancia").value;
    uni =document.getElementsByName(elementName="unidades")[0].value;

    urlcomp="segundaWeb.html"+"#"+cant +"#"+uni;
    window.open(urlcomp);

}
function CargarResultado(){
    var urlcomp, cant, uni;
    urlcomp=window.location.href.split(separator="/")[5];
    cant=urlcomp.split(separator="#")[1];
    uni=urlcomp.split(separator="#")[2];
    document.getElementById(elementid="dist").value= cant + " "+ uni;
}

function DibujarCirculoCuadrado () {
    var canvas= document.getElementById(elementid="myCanvas");
    var ctx= canvas.getContext("2d");

    var xMax = canvas.width;
    var yMax = canvas.height;
    var margen = 5;
    ctx.fillStyle = "#62a0ff";
    ctx.fillRect(x=0+margen, y=yMax-40-margen, w=40, h=40);

    ctx.arc(x=xMax/2, y=yMax/2, radius=20, starAngle=0, endAngle=2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#aa2ba9";
    ctx.fill();
}