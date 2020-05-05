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
    if(isNaN(value)){
        alert("Se ingreso un valor invalido");
        document.Unidades.unid_metro.value= "";
        document.Unidades.unid_pulgada.value= "";
        document.Unidades.unid_pie.value= "";
        document.Unidades.unid_yarda.value="";
    }else if(id=="metro"){
        document.Unidades.unid_pulgada.value= 39.3701*value;
        document.Unidades.unid_pie.value= 3.28084*value;
        document.Unidades.unid_yarda.value=1.09361*value;
    }else if(id=="pulgada") {
        document.Unidades.unid_metro.value = 0.0254*value;
        document.Unidades.unid_pie.value = 0.0833333*value;
        document.Unidades.unid_yarda.value = 0.0277778*value;
    }else if(id=="pie"){
        document.Unidades.unid_metro.value= 0.3084*value;
        document.Unidades.unid_pulgada.value= 12*value;
        document.Unidades.unid_yarda.value=0.3333333*value;
    }else if(id=="yarda"){
        document.Unidades.unid_metro.value= 0.9144*value;
        document.Unidades.unid_pulgada.value= 36*value;
        document.Unidades.unid_pie.value=3*value;
    }
}