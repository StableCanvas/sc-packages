if (typeof window.__sc_ns__ !== "object") {
  throw new Error("stable canvas namespace is unavailable");
}

export const SDCSystem = window.__sc_ns__.SDCSystem;
export const SDCExtension = window.__sc_ns__.SDCExtension;
export const Disposable = window.__sc_ns__.Disposable;

if (!SDCSystem) {
  throw new Error("SDCSystem is not available on your browser");
}
if (!SDCExtension) {
  throw new Error("SDCExtension is not available on your browser");
}
