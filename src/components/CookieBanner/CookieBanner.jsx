import React, { useEffect, useState } from "react";
import { Switch } from "antd";
import { X } from "lucide-react";
import { useCookies } from "../../context/CookieContext";
import "./CookieBanner.css";

export default function CookieBanner() {
  const {
    consent,
    acceptAll,
    rejectAll,
    savePreferences,
    closeBanner,
  } = useCookies();

  const [isCustomizeOpen, setCustomizeOpen] = useState(false);
  const [draft, setDraft] = useState({
    analytics: false,
    preferences: false,
    marketing: false,
  });

  useEffect(() => {
    setDraft({
      analytics: !!consent?.analytics,
      preferences: !!consent?.preferences,
      marketing: !!consent?.marketing,
    });
  }, [isCustomizeOpen, consent]);

  if (consent?.seen) return null;

  const options = [
    { label: "Necessary", desc: "Required for core functionality.", key: "necessary", fixed: true },
    { label: "Analytics", desc: "Helps us improve the website.", key: "analytics" },
    { label: "Preferences", desc: "Remembers your settings.", key: "preferences" },
    { label: "Marketing", desc: "Personalized marketing & ads.", key: "marketing" },
  ];

  return (
    <>
      {/* BANNER */}
      <div className="cb-banner">
        <div className="cb-banner__content">
          <div className="cb-banner__left">
            <h3 className="cb-title">We use cookies</h3>
            <p className="cb-desc">
              Cookies help us improve your experience. You can manage your preferences anytime.
            </p>
            <a href="/cookie-policy" className="cb-link">
              Read Cookie Policy
            </a>
          </div>

          <div className="cb-banner__actions">
            <button className="common-button cb-primary" onClick={acceptAll}>
              Accept All
            </button>
            <button className="common-button cb-ghost" onClick={rejectAll}>
              Reject All
            </button>
            <button
              className="common-button cb-ghost"
              onClick={() => setCustomizeOpen(true)}
            >
              Customize
            </button>
          </div>
        </div>

        <button className="cb-close" onClick={closeBanner}>
          <X size={18} />
        </button>
      </div>

      {/* CUSTOMIZE MODAL */}
      {isCustomizeOpen && (
        <div className="cb-modal-root">
          <div className="cb-backdrop" onClick={() => setCustomizeOpen(false)} />

          <div className="cb-modal">
            <button className="cb-close modal-close" onClick={() => setCustomizeOpen(false)}>
              <X size={18} />
            </button>

            <h4 className="cb-modal-title">Customize Cookies</h4>
            <p className="cb-desc">
              Choose which cookies you want to allow.
            </p>

            <div className="cb-options">
              {options.map((item) => (
                <div key={item.key} className="cb-option">
                  <div>
                    <strong>{item.label}</strong>
                    <p>{item.desc}</p>
                  </div>

                  {item.fixed ? (
                    <Switch checked disabled size="small" />
                  ) : (
                    <Switch
                      size="small"
                      checked={draft[item.key]}
                      onChange={(v) =>
                        setDraft((d) => ({ ...d, [item.key]: v }))
                      }
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="cb-footer">
              <button
                className="common-button cb-ghost cancel-cookie-btn"
                onClick={() => setCustomizeOpen(false)}
              >
                Cancel
              </button>
              <button
                className="common-button cb-primary"
                onClick={() => {
                  savePreferences(draft);
                  setCustomizeOpen(false);
                }}
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
