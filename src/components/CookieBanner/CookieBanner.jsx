// src/components/CookieBanner/CookieBanner.jsx
import React, { useEffect, useState } from "react";
import { Switch } from "antd";
import { X } from "lucide-react";
import { useCookies } from "../../context/CookieContext";
import "./CookieBanner.css";

export default function CookieBanner() {
  const { consent, acceptAll, rejectAll, savePreferences, updateCategory, closeBanner } = useCookies();
  const [isCustomizeOpen, setCustomizeOpen] = useState(false);
  const [draft, setDraft] = useState({ analytics: false, preferences: false, marketing: false });

  useEffect(() => {
    setDraft({
      analytics: !!consent?.analytics,
      preferences: !!consent?.preferences,
      marketing: !!consent?.marketing,
    });
  }, [isCustomizeOpen, consent]);

  if (consent?.seen) return null;

  const onSave = () => {
    savePreferences(draft);
    setCustomizeOpen(false);
  };

  const onAcceptSelected = () => {
    savePreferences(draft);
    setCustomizeOpen(false);
  };

  const options = [
    { label: "Necessary", desc: "Required for security & core functions.", key: "necessary", fixed: true },
    { label: "Analytics", desc: "Helps us understand site usage.", key: "analytics" },
    { label: "Preferences", desc: "Saves theme & language.", key: "preferences" },
    { label: "Marketing", desc: "Used to personalize ads.", key: "marketing" },
  ];

  return (
    <>
      <div className="cb-banner" role="region" aria-label="Cookie banner">
        <div className="cb-banner__content">
          <div className="cb-banner__left">
            <h3 className="cb-title">We use cookies</h3>
            <p className="cb-desc">
              We use essential cookies to make the site work. With your permission we use analytics, preferences and marketing to improve your experience.
            </p>
            <a href="/cookie-policy" className="cb-link">Read our Cookie Policy</a>
          </div>

          <div className="cb-banner__actions" role="group" aria-label="cookie actions">
            <button className="common-button cb-btn--primary cursor-pointer" onClick={acceptAll}>Accept All</button>
            <button className="common-button cb-btn--ghost cursor-pointer" onClick={rejectAll}>Reject All</button>
            <button className="common-button cb-btn--ghost cursor-pointer" onClick={() => setCustomizeOpen(true)}>Customize Cookies</button>
          </div>
        </div>

        <button className="cb-banner__close" onClick={closeBanner} aria-label="Close cookie banner">
          <X size={20} />
        </button>
      </div>

      {isCustomizeOpen && (
        <div className="cb-modal-root" role="dialog" aria-modal="true" aria-label="Customize cookie settings">
          <div className="cb-backdrop" onClick={() => setCustomizeOpen(false)} />

          <div className="cb-modal" role="document">
            <button className="cb-modal__close" onClick={() => setCustomizeOpen(false)} aria-label="Close">
              <X size={20} />
            </button>

            <div className="cb-modal__header">
              <div>
                <h4 className="cb-modal__title">Customize Cookie Settings</h4>
                <p className="cb-modal__subtitle cb-desc">Choose which cookies you allow. You can change this anytime.</p>
              </div>
            </div>

            <div className="cb-modal__body thin-scrollbar" tabIndex={0}>
              {options.map((item) => (
                <div className="cb-option" key={item.key}>
                  <div className="cb-option__text">
                    <div className="cb-option__title">{item.label}</div>
                    <div className="cb-option__desc">{item.desc}</div>
                  </div>

                  <div>
                    {item.fixed ? (
                      <Switch checked size="small" disabled />
                    ) : (
                      <Switch
                        checked={!!draft[item.key]}
                        onChange={(v) => setDraft((d) => ({ ...d, [item.key]: v }))}
                        size="small"
                        aria-label={`${item.label} cookies`}
                      />
                    )}
                  </div>
                </div>
              ))}

              <div className="cb-panel">
                <div className="cb-panel__title">Why we use cookies</div>
                <ul className="cb-list">
                  <li>Necessary cookies enable core functionality and security.</li>
                  <li>Analytics help us understand site usage and improve performance.</li>
                  <li>Preferences remember your settings for a better experience.</li>
                  <li>Marketing helps deliver relevant ads and measure campaigns.</li>
                </ul>
              </div>
            </div>

            <div className="cb-modal__footer">
              <button className="cb-btn cb-btn--ghost cursor-pointer cancel-cookie-btn" onClick={() => setCustomizeOpen(false)}>Cancel</button>
              <button className="common-button cb-btn--ghost cursor-pointer" onClick={onAcceptSelected}>Accept Selected</button>
              <button className="common-button cb-btn--primary cursor-pointer text-wrap" onClick={onSave}>Save Preferences</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
