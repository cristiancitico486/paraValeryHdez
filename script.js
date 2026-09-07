const form = document.getElementById('date-form');
const reply = document.getElementById('reply');

form.addEventListener('submit', async function (event) {
  event.preventDefault();

  const answer = document.getElementById('respuesta').value;
  const day = document.getElementById('dia');
  const selectedDay = day.options[day.selectedIndex].text;
  const submitButton = form.querySelector('button[type="submit"]');

  submitButton.disabled = true;
  submitButton.textContent = 'Enviando...';

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    });

    if (!response.ok) {
      throw new Error('No se pudo enviar la respuesta');
    }

    if (answer === 'si') {
      reply.textContent = `¡Qué felicidad! Te espero ${selectedDay.toLowerCase()} Ya tenemos una celebración pendiente.`;
    } else {
      reply.textContent = 'Tómate tu tiempo. La invitación queda guardada con mucho cariño.';
    }
    form.reset();
  } catch (error) {
    reply.textContent = 'No se pudo enviar. Revisa tu conexión e inténtalo de nuevo.';
    submitButton.disabled = false;
    submitButton.textContent = 'Enviar mi respuesta →';
  }
});
