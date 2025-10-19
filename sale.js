//CLICK EN BOTON "CALCULAR" PARA EJECUTAR FUNCION
document.getElementById("calcular").addEventListener("click", function () {
  // document.getElementById("calcular"): trae al elemento calcular del HTML
  // .addEventListener("click", function() {...}) Con un CLICK ejecuta la funcion

  // VALORES DEL FORMULARIO
  const precio = parseFloat(document.getElementById("producto").value);
  // document.getElementById("producto"): trae al elemento producto del HTML
  // toma su valor (value) y lo convierte de texto a número decimal con parseFloat().
  const cantidad = parseInt(document.getElementById("cantidad").value);
  // Busca el campo con id="cantidad" (el input de tipo number),
  // convierte la cant en un nro entero con parseInt().

  const promo = document.getElementById("promo").value;
  // Busca el <select> de promo y guarda la opción 

  // CALCULOS

  let totalSinDescuento = precio * cantidad;
  // Multiplica el precio unitario por la cantidad ingresada

  let descuento = 0;
  // Creamos una variable que almacenará el monto descontado que inicie en 0

  //ACE DEPEDENE QUE PROMO SE ELIGE 
  if (promo === "2x50" && cantidad >= 2) {
    //  "2x50" y se seleccions por lo menos 2 cosas
    descuento = precio * 0.5;
    // se aplica un 50% de descuento sobre el precio de un producto.

  } else if (promo === "3x2" && cantidad >= 3) {
    //  "3x2" y hay x los menos 3 productos
    descuento = precio;
  // se descuenta el valor de un producto (uno gratis)

  } else if (promo === "10porciento" && totalSinDescuento > 30000) {
    //  "10porciento" y el total supera los $30.000
    descuento = totalSinDescuento * 0.1;
    // se aplica un 10% de descuento
  }

  // CALCULO DE $$ FINAL
  const totalFinal = totalSinDescuento - descuento;
  // al TOTAL le resta el DESCUENTO

  // RESULTADO 
  // .textContent cambia el parrafo del HTML
  document.getElementById("sinDescuento").textContent =
    `Total sin descuento: $${totalSinDescuento.toLocaleString()}`;
  // TOTAL SIN DESC.
  // .toLocaleString() separadores de miles (30000 → 30.000).

  document.getElementById("descuento").textContent =
    `Descuento aplicado: $${descuento.toLocaleString()}`;
  // SOLO EL DESC.

  document.getElementById("totalFinal").textContent =
    `Total final: $${totalFinal.toLocaleString()}`;
  // TOTAL FINAL
});
