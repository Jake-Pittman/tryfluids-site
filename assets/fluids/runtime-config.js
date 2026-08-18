// Runtime API switch for hosted Fluids pages.
// Leave blank for same-origin local/demo use. Set to https://api.tryfluids.com
// when a private compute API is live behind that domain.
const fluidsProductionHost = ["tryfluids.com","www.tryfluids.com"].includes(window.location.hostname);
window.FLUIDS_API_BASE = window.FLUIDS_API_BASE || (fluidsProductionHost ? "https://api.tryfluids.com" : "");
window.FLUIDS_API_MODE = window.FLUIDS_API_MODE || (fluidsProductionHost ? "jobs" : "auto");
window.FLUIDS_ANALYTICS_ENDPOINT = window.FLUIDS_ANALYTICS_ENDPOINT || (
  window.FLUIDS_API_BASE ? `${window.FLUIDS_API_BASE}/api/events` : "/api/events"
);

// Google Workspace delivery for this public support alias is verified.
window.FLUIDS_CONTACT_EMAIL = window.FLUIDS_CONTACT_EMAIL || "support@tryfluids.com";
window.FLUIDS_PUBLIC_WAITLIST_ENDPOINT = window.FLUIDS_PUBLIC_WAITLIST_ENDPOINT || (
  `https://formsubmit.co/ajax/${window.FLUIDS_CONTACT_EMAIL}`
);

// Member features are intentionally off until the cookie-backed member API and
// hosted authentication routes are enabled in the target environment.
window.FLUIDS_FEATURES = Object.assign(
  {
    MEMBER_PORTAL: true,
    REQUIRE_AUTH_FOR_LABS: false,
  },
  window.FLUIDS_FEATURES || {},
);
window.FLUIDS_MEMBER_PORTAL = window.FLUIDS_MEMBER_PORTAL ?? window.FLUIDS_FEATURES.MEMBER_PORTAL;
window.FLUIDS_REQUIRE_AUTH_FOR_LABS = window.FLUIDS_REQUIRE_AUTH_FOR_LABS ?? window.FLUIDS_FEATURES.REQUIRE_AUTH_FOR_LABS;
