// Runtime API switch for hosted Fluids pages.
// Leave blank for same-origin local/demo use. Set to https://api.tryfluids.com
// when a private compute API is live behind that domain.
const fluidsProductionHost = ["tryfluids.com","www.tryfluids.com"].includes(window.location.hostname);
window.FLUIDS_API_BASE = window.FLUIDS_API_BASE || (fluidsProductionHost ? "https://i2ysjjtc22rddl-8888.proxy.runpod.net" : "");
window.FLUIDS_API_MODE = window.FLUIDS_API_MODE || (fluidsProductionHost ? "jobs" : "auto");
window.FLUIDS_ANALYTICS_ENDPOINT = window.FLUIDS_ANALYTICS_ENDPOINT || (
  window.FLUIDS_API_BASE ? `${window.FLUIDS_API_BASE}/api/events` : "/api/events"
);
