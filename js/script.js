
const overlay = document.getElementById('responseOverlay');
const msgEl = document.getElementById('responseMessage');
const btn = document.getElementById('showMessageBtn');
emailjs.init("fnLYDSnTzPNmIbJDz"); // замініть на ваш з EmailJS → Settings → API Keys

document.getElementById('orderForm').addEventListener('submit', function (e) {
  e.preventDefault();

  emailjs.sendForm('service_ng7apkk', 'template_8tix6xr', this)
    .then(function () {
      const msgEl = document.getElementById('responseMessage');
      msgEl.textContent = 'Замовлення надіслано!';
      msgEl.classList.remove('error');
      msgEl.classList.add('success');
      e.target.reset();
    }, function (error) {
      const msgEl = document.getElementById('responseMessage');
      msgEl.textContent = 'Помилка відправки.';
      msgEl.classList.remove('success');
      msgEl.classList.add('error');
      console.error('EmailJS Error:', error);
    });
});

