// BuildQuantia analytics configuration.
// Add your real Google Analytics 4 Measurement ID (format G-XXXXXXXXXX) below when ready.
// Tracking remains disabled while this value is empty.
window.BUILDQUANTIA_GA_ID = "";
if (/^G-[A-Z0-9]+$/i.test(window.BUILDQUANTIA_GA_ID)) {
  const s=document.createElement("script");
  s.async=true;
  s.src="https://www.googletagmanager.com/gtag/js?id="+encodeURIComponent(window.BUILDQUANTIA_GA_ID);
  document.head.appendChild(s);
  window.dataLayer=window.dataLayer||[];
  function gtag(){window.dataLayer.push(arguments);}
  window.gtag=gtag;
  gtag("js",new Date());
  gtag("config",window.BUILDQUANTIA_GA_ID);
}