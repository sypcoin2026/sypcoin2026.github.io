/*
 * SYPcoin public testnet launch alert.
 * Web3Forms acceptance is not proof of inbox delivery or email ownership.
 */
(() => {
  "use strict";
  const form = document.querySelector(".waitlist-form[data-waitlist-lang]");
  if (!form) return;
  const isEn = form.dataset.waitlistLang === "en";
  const feedback = form.querySelector("[data-waitlist-feedback]");
  const submit = form.querySelector('button[type="submit"]');
  const manual = form.querySelector("[data-waitlist-manual]");
  const copy = isEn ? {
    sending: "Sending your request to Web3Forms...",
    success: "Web3Forms accepted the request. Delivery to the project mailbox must still be checked. Email ownership and testnet access are not confirmed.",
    error: "Web3Forms could not confirm your request. Your signup is NOT confirmed. Please try later or use the manual email option.",
    limit: "Too many requests. Your signup is NOT confirmed. Please try later or email us directly.",
    manual: "We tried to open your email application. You must press Send there. If nothing opens, write to sypcoin@proton.me. No signup has been recorded automatically."
  } : {
    sending: "Enviando la solicitud a Web3Forms...",
    success: "Web3Forms ha aceptado la solicitud. Falta comprobar su llegada al correo del proyecto. Esto no verifica la titularidad del email ni concede acceso a la testnet.",
    error: "Web3Forms no ha confirmado tu solicitud. Tu inscripción NO está confirmada. Prueba más tarde o usa el envío manual.",
    limit: "Se han limitado temporalmente las solicitudes. Tu inscripción NO está confirmada. Prueba más tarde o envía desde tu correo.",
    manual: "Hemos intentado abrir tu aplicación de correo. Debes pulsar Enviar allí. Si no se abre, escribe a sypcoin@proton.me. No se ha registrado ninguna inscripción automáticamente."
  };
  function show(message, state) {
    if (!feedback) return;
    feedback.hidden = false;
    feedback.dataset.state = state;
    feedback.textContent = message;
  }
  function checkForm() {
    if (form.checkValidity()) return true;
    form.reportValidity();
    return false;
  }
  function setBusy(value) {
    if (submit) submit.disabled = value;
    if (manual) manual.disabled = value;
  }
  form.addEventListener("submit", async event => {
    event.preventDefault();
    if (!checkForm()) return;
    if (form.elements.namedItem("botcheck")?.checked) {
      show(copy.error, "error");
      return;
    }
    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), 15000);
    setBusy(true);
    show(copy.sending, "sending");
    try {
      const payload = Object.fromEntries(new FormData(form).entries());
      const response = await fetch(form.action, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal
      });
      const result = await response.json();
      if (response.ok && result.success === true) {
        show(copy.success, "success");
      } else {
        show(response.status === 429 ? copy.limit : copy.error, "error");
      }
    } catch (_) {
      show(copy.error, "error");
    } finally {
      window.clearTimeout(timer);
      setBusy(false);
    }
  });
  manual?.addEventListener("click", () => {
    if (!checkForm()) return;
    const email = String(form.elements.namedItem("email")?.value || "").trim();
    const subject = isEn ? "SYPcoin - public testnet launch alert" : "SYPcoin - aviso de apertura de testnet";
    const body = isEn
      ? "Please send one public SYPcoin testnet launch alert to this address.\nEmail: " + email + "\nConsent: YES, I request only this one notification.\n"
      : "Solicito un unico aviso cuando se abra la testnet publica de SYPcoin.\nCorreo: " + email + "\nConsentimiento: SI, deseo recibir unicamente este aviso.\n";
    show(copy.manual, "sending");
    window.location.href = "mailto:sypcoin@proton.me?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  });
})();