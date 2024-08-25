function calcularkm() {
    let km = parseFloat(document.getElementById("km").value); 
    if (isNaN(km)) {
         error("Por favor, ingrese un número válido.");
   return;
    } else {
          let multiplicar = km*1000;   
          document.getElementById("unidad").textContent = "En  "+km+ "  Kilometros Hay  " + multiplicar+"  Metros";    
    }
  }
  function limpiarFormulariokm() {
    document.getElementById("km").value = " ";
  }
  
  function calcularcm() {
    let metros = parseFloat(document.getElementById("metros").value); 
    if (isNaN(metros)) {
         error("Por favor, ingrese un número válido.");
   return;
    } else {
          let multiplicar = metros *100;   
          document.getElementById("unidad").textContent = "En  "+metros+ "  Metros Hay  " + multiplicar+"  Centimetros";    
    }
  }
  function limpiarFormulariocm() {
    document.getElementById("metros").value = " ";
  }
  
  function calcularft() {
    let ft = parseFloat(document.getElementById("pies").value); 
    if (isNaN(ft)) {
         error("Por favor, ingrese un número válido.");
   return;
    } else {
          let multiplicar = ft *12;   
          document.getElementById("unidad").textContent = "En  "+ft+ "  Pies Hay  " + multiplicar+"  Pulgadas";    
    }
  }
  function limpiarFormularioft() {
    document.getElementById("pies").value = " ";
  }
  
  function calcularyd() {
    let yarda = parseFloat(document.getElementById("yardas").value); 
    if (isNaN(yarda)) {
         error("Por favor, ingrese un número válido.");
   return;
    } else {
          let multiplicar = yarda *36;   
          document.getElementById("unidad").textContent = "En  "+yarda+ "  Yardas Hay  " + multiplicar+"  Pulgadas";    
    }
  }
  function limpiarFormularioyd() {
    document.getElementById("yardas").value = " ";
  }
  
  function error(text) {
    Swal.fire({
        icon: "error",
        title: "Error en la Operacion",
        text: text
    });
  }
  
  
  