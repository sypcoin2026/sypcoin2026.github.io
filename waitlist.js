/*
 * SYPcoin testnet alert: never claim registration after an unverified request.
 * FormSubmit AJAX may return {success:"false"} with HTTP 200. Compare explicitly.
 */
(() => {
  "use strict";
  const form = document.querySelector(".waitlist-form[data-waitlist-lang]");
  if (!form) return;
  const isEn = form.dataset.waitlistLang === "en";
  const feedback = form.querySelector("[data-waitlist-feedback]");
  const primary = form.querySelector('button[type="submit"]');
  const manual = form.querySelector("[data-waitlist-manual]");
  const wording = isEn ? {
    sending: "Contacting the form service...",
    success: "The form service accepted the request. Delivery to the project mailbox still needs confirmation; no testnet access is available.",
    activation: "The project must activate this form from its mailbox. Your signup is not confirmed. Use the manual email option if needed.",
    error: "We could not confirm delivery. FormSubmit may be unavailable. Your signup is NOT confirmed; use “Send from my email instead” or contact sypcoin@proton.me.",
    manual: "We attempted to open your email application. You must press “Send” yourself. If nothing opens, email sypcoin@proton.me directly. No signup has been recorded automatically."
  } : {
    sending: "Contactando con el servicio de formularios...",
    success: "El servicio ha aceptado la solicitud. La entrega al buzón del proyecto aún debe comprobarse; no supone acceso a la testnet.",
    activation: "El proyecto debe activar primero el formulario desde su buzón. Tu inscripción NO está confirmada. Puedes usar el envío manual.",
    error: "No hemos podido confirmar el envío. FormSubmit puede estar caído. Tu inscripción NO está confirmada; utiliza «Enviar desde mi correo» o escribe a sypcoin@proton.me.",
    manual: "Hemos intentado abrir tu aplicación de correo. Debes pulsar «Enviar» allí. Si no se abre, escribe a sypcoin@proton.me. No se ha registrado ninguna inscripción automáticamente."
  };
  const say = (message, state) => {
    feedback.hidden = false;
    feedback.dataset.state = state;
    feedback.textContent = message;
  };
  const valid = () => {
    if (form.checkValidity()) return true;
    form.reportValidity();
    return false;
  };
  const busy = (value) => {
    primary.disabled = value;
    manual.disabled = value;
  };
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!valid()) return;
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);
    busy(true);
    say(wording.sending, "sending");
    try {
      const endpoint = form.action.replace("https://formsubmit.co/", "https://formsubmit.co/ajax/");
      const payload = Object.fromEntries(new FormData(form).entries());
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal
      });
      const data = await response.json();
      if (response.ok && (data.success === true || data.success === "true")) {
        say(wording.success, "success");
      } else {
        const message = String(data?.message || "").toLowerCase();
        say(message.includes("activat") ? wording.activation : wording.error, "error");
      }
    } catch (_) {
      say(wording.error, "error");
    } finally {
      window.clearTimeout(timeout);
      busy(false);
    }
  });
  manual.addEventListener("click", () => {
    if (!valid()) return;
    const email = String(form.elements.namedItem("email")?.value || "").trim();
    const subject = isEn ? "SYPcoin - public testnet launch alert" : "SYPcoin - aviso de apertura de testnet";
    const body = isEn
      ? "Please send one public SYPcoin testnet launch alert to this address.\nEmail: " + email + "\nConsent: YES, I request only this one notification.\n"
      : "Solicito un unico aviso cuando se abra la testnet publica de SYPcoin.\nCorreo: " + email + "\nConsentimiento: SI, deseo recibir unicamente este aviso.\n";
    say(wording.manual, "sending");
    window.location.href = "mailto:sypcoin@proton.me?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  });
})();