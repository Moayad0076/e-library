const form = document.querySelector("#contact-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const formMessage = document.querySelector("#form-message");

function showMessage(text, type) {
  formMessage.textContent = text;
  formMessage.className = type;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (name.length < 3) {
    showMessage("الاسم لازم يكون 3 أحرف على الأقل", "error");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    showMessage("البريد الإلكتروني غير صحيح", "error");
    return;
  }

  if (message.length < 10) {
    showMessage("الرسالة لازم تكون 10 أحرف على الأقل", "error");
    return;
  }

  showMessage("شكراً " + name + "، تم إرسال رسالتك بنجاح ✅", "success");
  form.reset();
});
