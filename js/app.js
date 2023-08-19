const totalIngresos=() =>{
    var totalIngreso=0;
    for (let ingreso in ingresos) {
        totalIngreso=totalIngreso+ingresos[ingreso];
    }
    return totalIngreso;
};

let ingresos={
    quincena:9000,
    venta:400
};

const totalEgresos=() =>{
    var totalEgreso=0;
    for ( let egreso in egresos){
    totalEgreso=totalEgreso+egresos[egreso];
}
return totalEgreso;
}

let egresos={
    renta:900,
    ropa:400
};

const formatoMoneda=(presupuesto) =>{
    return presupuesto.toLocaleString("mx",{
        style: "currency",
        currency: "MXN",
    });
};

const formatoPorcentaje=(porcentajeEgreso) =>{
    return porcentajeEgreso.toLocaleString("mx",{
        style: "percent",
        maximunFractionDigits:2,
    });
};

const cargarcabecero=() =>{
    var presupuesto=totalIngresos()-totalEgresos();
    var porcentajeEgreso=totalEgresos()/totalIngresos();
    var presupuestoMoneda=formatoMoneda(presupuesto);
    var egresoPorcentuado=formatoPorcentaje(porcentajeEgreso);
   console.log("presupuesto: ",presupuestoMoneda);
   console.log("porcentaje de egreso: ",egresoPorcentuado);
   console.log("total de ingresos: ",totalIngresos());
   console.log("total de egresos: ",totalEgresos());
};

cargarcabecero();