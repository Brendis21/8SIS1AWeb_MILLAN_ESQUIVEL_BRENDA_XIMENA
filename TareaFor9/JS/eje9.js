function calcularPago() {
    var horasTrabajadas = parseFloat(prompt("Introduce las horas trabajadas:"));
    var pagoPorHora = parseFloat(prompt("Introduce el pago por hora:"));

    var horasExtras = 0;
    var pagoHorasNormales = horasTrabajadas * pagoPorHora;
    if (horasTrabajadas > 40) {
      horasExtras = horasTrabajadas - 40;
      pagoHorasNormales = 40 * pagoPorHora;
    }

    var pagoHorasExtras = 0;
    if (horasExtras > 8) {
      pagoHorasExtras = (8 * 2 * pagoPorHora) + ((horasExtras - 8) * 3 * pagoPorHora);
    } else {
      pagoHorasExtras = horasExtras * 2 * pagoPorHora;
    }

    var pagoTotal = pagoHorasNormales + pagoHorasExtras;
    alert("El pago total es: $" + pagoTotal);
  }
  