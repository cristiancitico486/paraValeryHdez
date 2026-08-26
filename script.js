document.getElementById('confirmar').addEventListener('click', function () {
  this.textContent = '¡Asistencia confirmada!';
  this.disabled = true;
  document.getElementById('reply').textContent = 'La fiesta te está esperando, Valery.';
});
