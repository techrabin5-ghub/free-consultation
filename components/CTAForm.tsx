"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";

const ROOT_CLASS = "ff-6a157113cbe18ff75560ffb4";
const FORM_ID = "6a157113cbe18ff75560ffb4";

export default function CTAForm() {
  const redirectedRef = useRef(false);

  useEffect(() => {
    const root = document.querySelector<HTMLElement>(`.${ROOT_CLASS}`);
    if (!root) {
      return;
    }

    const moveCaptchaAboveButton = () => {
      const content = root.querySelector<HTMLElement>('[data-ff-el="content"]');
      const footer = root.querySelector<HTMLElement>('[data-ff-el="footer"]');
      const captcha = root.querySelector<HTMLElement>(".fd-form-captcha");

      if (!content || !footer || !captcha) {
        return;
      }

      if (footer.previousElementSibling !== captcha) {
        content.insertBefore(captcha, footer);
      }
    };

    const handleSuccess = () => {
      if (redirectedRef.current) {
        return;
      }

      if (root.getAttribute("data-ff-stage") === "success") {
        redirectedRef.current = true;
        window.setTimeout(() => {
          window.location.assign("/thanks");
        }, 5000);
      }
    };

    moveCaptchaAboveButton();
    handleSuccess();

    const observer = new MutationObserver(() => {
      moveCaptchaAboveButton();
      handleSuccess();
    });

    observer.observe(root, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["data-ff-stage"],
    });

    const fields = Array.from(root.querySelectorAll<HTMLInputElement>(`.${ROOT_CLASS}__control`));

    const showError = (field: HTMLInputElement) => {
      const group = field.closest(".fd-form-group");
      if (!group) {
        return;
      }

      let feedback = group.querySelector<HTMLElement>(".flodesk-inline-error");
      if (!feedback) {
        feedback = document.createElement("div");
        feedback.className = "flodesk-inline-error";
        group.appendChild(feedback);
      }

      if (!field.checkValidity()) {
        feedback.textContent =
          field.validity.valueMissing ? "This field is required" : "Please enter a valid value";
        group.classList.add("fd-has-error");
      } else {
        feedback.textContent = "";
        group.classList.remove("fd-has-error");
      }
    };

    const clearError = (field: HTMLInputElement) => {
      const group = field.closest(".fd-form-group");
      if (!group) {
        return;
      }

      const feedback = group.querySelector<HTMLElement>(".flodesk-inline-error");
      if (field.checkValidity()) {
        if (feedback) {
          feedback.textContent = "";
        }
        group.classList.remove("fd-has-error");
      }
    };

    const invalidHandlers = fields.map((field) => {
      const onInvalid = (event: Event) => {
        event.preventDefault();
        showError(field);
      };
      const onInput = () => clearError(field);
      const onBlur = () => showError(field);

      field.addEventListener("invalid", onInvalid);
      field.addEventListener("input", onInput);
      field.addEventListener("blur", onBlur);

      return { field, onInvalid, onInput, onBlur };
    });

    return () => {
      observer.disconnect();
      invalidHandlers.forEach(({ field, onInvalid, onInput, onBlur }) => {
        field.removeEventListener("invalid", onInvalid);
        field.removeEventListener("input", onInput);
        field.removeEventListener("blur", onBlur);
      });
    };
  }, []);

  return (
    <section id="lead-form" className="px-6 py-18 sm:px-8 lg:px-12">
      <link rel="preload" href="https://assets.flodesk.com/flodesk-sans.css" as="style" />
      <link rel="stylesheet" href="https://assets.flodesk.com/flodesk-sans.css" />

      <Script id="flodesk-universal-loader" strategy="afterInteractive">
        {`(function(w, d, t, h, s, n) {
  w.FlodeskObject = n;
  var fn = function() {
    (w[n].q = w[n].q || []).push(arguments);
  };
  w[n] = w[n] || fn;
  var f = d.getElementsByTagName(t)[0];
  var v = '?v=' + Math.floor(new Date().getTime() / (120 * 1000)) * 60;
  var sm = d.createElement(t);
  sm.async = true;
  sm.type = 'module';
  sm.src = h + s + '.mjs' + v;
  f.parentNode.insertBefore(sm, f);
  var sn = d.createElement(t);
  sn.async = true;
  sn.noModule = true;
  sn.src = h + s + '.js' + v;
  f.parentNode.insertBefore(sn, f);
})(window, document, 'script', 'https://assets.flodesk.com', '/universal', 'fd');`}
      </Script>

      <Script id="flodesk-form-handle" strategy="afterInteractive">
        {`window.fd('form:handle', {
  formId: '${FORM_ID}',
  rootEl: '.${ROOT_CLASS}',
});`}
      </Script>

      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">
            Final step
          </p>
          <h2 className="font-display mt-4 text-4xl leading-tight text-[var(--primary-ink)] sm:text-5xl">
            Book Your FREE 1:1 Consultation Call
          </h2>
          <p className="mt-4 text-base leading-8 text-[var(--foreground-soft)]">
            Fill up the form below and we&apos;ll contact you with the next steps.
          </p>
        </div>

        <div className="flodesk-shell mt-10 rounded-[2.6rem] border border-white/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,251,255,0.98))] p-4 shadow-[var(--shadow-strong)] sm:p-6 lg:p-8">
          <div
            className={ROOT_CLASS}
            data-ff-el="root"
            data-ff-version="3"
            data-ff-type="inline"
            data-ff-name="inlineNoImage"
            data-ff-stage="default"
          >
            <div
              data-ff-el="config"
              data-ff-config="eyJ0cmlnZ2VyIjp7Im1vZGUiOiJpbW1lZGlhdGVseSIsInZhbHVlIjowfSwib25TdWNjZXNzIjp7Im1vZGUiOiJtZXNzYWdlIiwibWVzc2FnZSI6IjxkaXYgZGF0YS1wYXJhZ3JhcGg9XCJ0cnVlXCI+VGhhbmsgeW91IGZvciBzdWJzY3JpYmluZyE8L2Rpdj4iLCJyZWRpcmVjdFVybCI6Imh0dHBzOi8vZnJlZS1jb25zdWx0YXRpb24ucmFpcmFiaW4uY29tLm5wL3RoYW5rcyJ9LCJjb2kiOmZhbHNlLCJzaG93Rm9yUmV0dXJuVmlzaXRvcnMiOnRydWUsIm5vdGlmaWNhdGlvbiI6ZmFsc2UsImdkcHIiOnsiYWNjZXB0c01hcmtldGluZyI6ZmFsc2UsInByaXZhY3lQb2xpY3kiOnsiZW5hYmxlZCI6ZmFsc2UsIm1hbmRhdG9yeSI6ZmFsc2V9fSwidHJhY2tpbmdDb25maWciOnsibWV0YVBpeGVsSWQiOiIiLCJjb29raWVCYW5uZXJFbmFibGVkIjpmYWxzZSwiZ29vZ2xlQW5hbHl0aWNzSWQiOiIifX0="
              style={{ display: "none" }}
            />

            <div className={`${ROOT_CLASS}__container`}>
              <div className={`${ROOT_CLASS}__wrapper`}>
                <form
                  className={`${ROOT_CLASS}__form`}
                  action={`https://form.flodesk.com/forms/${FORM_ID}/submit`}
                  method="post"
                  data-ff-el="form"
                >
                  <div className={`${ROOT_CLASS}__content fd-form-content`} data-ff-el="content">
                    <div className={`${ROOT_CLASS}__fields flodesk-grid`} data-ff-el="fields">
                      <div className={`${ROOT_CLASS}__field fd-form-group`}>
                        <label
                          htmlFor={`${ROOT_CLASS}-firstName`}
                          className={`${ROOT_CLASS}__label fd-form-label`}
                        >
                          <div>
                            <div>Full Name *</div>
                          </div>
                        </label>
                        <input
                          id={`${ROOT_CLASS}-firstName`}
                          className={`${ROOT_CLASS}__control fd-form-control`}
                          type="text"
                          maxLength={255}
                          name="firstName"
                          placeholder="Full name"
                          data-ff-tab="firstName::email"
                          required
                        />
                      </div>

                      <div className={`${ROOT_CLASS}__field fd-form-group`}>
                        <label
                          htmlFor={`${ROOT_CLASS}-email`}
                          className={`${ROOT_CLASS}__label fd-form-label`}
                        >
                          <div>
                            <div>Email *</div>
                          </div>
                        </label>
                        <input
                          id={`${ROOT_CLASS}-email`}
                          className={`${ROOT_CLASS}__control fd-form-control`}
                          type="text"
                          maxLength={255}
                          name="email"
                          placeholder="Email address"
                          data-ff-tab="email:firstName:fields.businessName"
                          required
                        />
                      </div>

                      <div className={`${ROOT_CLASS}__field fd-form-group`}>
                        <label
                          htmlFor={`${ROOT_CLASS}-SblvkmMwMo`}
                          className={`${ROOT_CLASS}__label fd-form-label`}
                        >
                          <div>
                            <div>Business Name *</div>
                          </div>
                        </label>
                        <input
                          id={`${ROOT_CLASS}-SblvkmMwMo`}
                          className={`${ROOT_CLASS}__control fd-form-control`}
                          type="text"
                          maxLength={255}
                          name="fields.businessName"
                          placeholder="Business Name"
                          data-ff-tab="fields.businessName:email:fields.whatsappNumber"
                          required
                        />
                      </div>

                      <div className={`${ROOT_CLASS}__field fd-form-group`}>
                        <label
                          htmlFor={`${ROOT_CLASS}-YYbCCEa7l7`}
                          className={`${ROOT_CLASS}__label fd-form-label`}
                        >
                          <div>
                            <div>WhatsApp Number *</div>
                          </div>
                        </label>
                        <input
                          id={`${ROOT_CLASS}-YYbCCEa7l7`}
                          className={`${ROOT_CLASS}__control fd-form-control`}
                          type="text"
                          maxLength={255}
                          name="fields.whatsappNumber"
                          placeholder="WhatsApp Number"
                          data-ff-tab="fields.whatsappNumber:fields.businessName:fields.websiteOrFacebookPageLink"
                          required
                        />
                      </div>

                      <div className={`${ROOT_CLASS}__field fd-form-group`}>
                        <label
                          htmlFor={`${ROOT_CLASS}-y3Lzd1se0S`}
                          className={`${ROOT_CLASS}__label fd-form-label`}
                        >
                          <div>
                            <div>Website or Facebook Page link</div>
                          </div>
                        </label>
                        <input
                          id={`${ROOT_CLASS}-y3Lzd1se0S`}
                          className={`${ROOT_CLASS}__control fd-form-control`}
                          type="text"
                          maxLength={255}
                          name="fields.websiteOrFacebookPageLink"
                          placeholder="Website or Facebook Page link"
                          data-ff-tab="fields.websiteOrFacebookPageLink:fields.whatsappNumber:fields.messageForUs"
                        />
                      </div>

                      <div className={`${ROOT_CLASS}__field fd-form-group flodesk-full`}>
                        <label
                          htmlFor={`${ROOT_CLASS}-pP1oedpgI5`}
                          className={`${ROOT_CLASS}__label fd-form-label`}
                        >
                          <div>
                            <div>Message for Us *</div>
                          </div>
                        </label>
                        <input
                          id={`${ROOT_CLASS}-pP1oedpgI5`}
                          className={`${ROOT_CLASS}__control fd-form-control`}
                          type="text"
                          maxLength={255}
                          name="fields.messageForUs"
                          placeholder="Message for Us"
                          data-ff-tab="fields.messageForUs:fields.websiteOrFacebookPageLink:submit"
                          required
                        />
                      </div>

                      <input
                        type="text"
                        maxLength={255}
                        name="confirm_email_address"
                        style={{ display: "none" }}
                      />
                    </div>

                    <div className={`${ROOT_CLASS}__footer`} data-ff-el="footer">
                      <button
                        type="submit"
                        className={`${ROOT_CLASS}__button fd-btn`}
                        data-ff-el="submit"
                        data-ff-tab="submit"
                      >
                        <div>
                          <span data-draw-element="editable">Book Free Consultation Call</span>
                        </div>
                      </button>
                    </div>
                  </div>

                  <div className={`${ROOT_CLASS}__success fd-form-success`} data-ff-el="success" />

                  <div className={`${ROOT_CLASS}__error fd-form-error`} data-ff-el="error" />
                </form>
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-[var(--foreground-soft)]">
            We respect your privacy. No spam.
          </p>
        </div>
      </div>
    </section>
  );
}
