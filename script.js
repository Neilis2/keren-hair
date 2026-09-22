document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('booking-form');

  if (!form) {
    return;
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const nombre = (formData.get('nombre') || '').toString().trim();
    const whatsapp = (formData.get('whatsapp') || '').toString().trim();
    const tipoCabello = (formData.get('tipoCabello') || '').toString().trim();
    const largoCabello = (formData.get('largoCabello') || '').toString().trim();
    const estilo = (formData.get('estilo') || '').toString().trim();
    const fecha = (formData.get('fecha') || '').toString().trim();
    const usoFoto = formData.get('usoFoto') === 'on';
    const menor = formData.get('menor') === 'on';

    if (!nombre || !whatsapp || !tipoCabello || !largoCabello || !estilo || !fecha) {
      alert('Por favor, completa todos los campos obligatorios antes de enviar tu reserva.');
      return;
    }

    const date = new Date(fecha);
    const formattedDate = Number.isNaN(date.getTime())
      ? fecha
      : date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });

    const photoStatus = usoFoto ? 'Sí' : 'No';
    const childStatus = menor ? 'Sí' : 'No';

    const lines = [
      'Hola Neilis, quiero reservar un estilo.',
      '',
      `Nombre: ${nombre}`,
      `WhatsApp: ${whatsapp}`,
      `Tipo de cabello: ${tipoCabello}`,
      `Largo de cabello: ${largoCabello}`,
      `Estilo deseado: ${estilo}`,
      `Fecha preferida: ${formattedDate}`,
      `Uso de foto en portafolio: ${photoStatus}`,
      `Reserva para un menor: ${childStatus}`
    ];

    const message = encodeURIComponent(lines.join('\n'));
    const phone = '34600000000';
    const url = `https://wa.me/${phone}?text=${message}`;

    window.open(url, '_blank');
  });
});
