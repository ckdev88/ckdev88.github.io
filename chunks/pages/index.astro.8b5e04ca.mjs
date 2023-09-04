import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderComponent, e as renderHead, f as renderSlot, m as maybeRenderHead, F as Fragment } from '../astro.3481cb0d.mjs';
import 'html-escaper';
import 'clsx';
import { createClient } from '@supabase/supabase-js';

const $$Astro$q = createAstro();
const $$LanguageRedirect = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$LanguageRedirect;
  const { lang } = Astro2.props;
  let metatag;
  if (lang === "nl") {
    metatag = "0;url=/nl/";
  } else if (lang === "pt") {
    metatag = "0;url=/pt/";
  } else {
    metatag = "0;url=/en/";
  }
  return renderTemplate`<meta http-equiv="refresh"${addAttribute(metatag, "content")}>`;
}, "/home/pedroso/Documents/Coding/portfolio23/src/components/LanguageRedirect.astro", void 0);

const $$Astro$p = createAstro();
const $$LanguageDetect = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$LanguageDetect;
  var timeZoneCityToCountry = {
    Brussels: "Belgium",
    Noronha: "Brazil",
    Belem: "Brazil",
    Fortaleza: "Brazil",
    Recife: "Brazil",
    Araguaina: "Brazil",
    Maceio: "Brazil",
    Bahia: "Brazil",
    Sao_Paulo: "Brazil",
    Campo_Grande: "Brazil",
    Cuiaba: "Brazil",
    Santarem: "Brazil",
    Porto_Velho: "Brazil",
    Boa_Vista: "Brazil",
    Manaus: "Brazil",
    Eirunepe: "Brazil",
    Rio_Branco: "Brazil",
    Cape_Verde: "Cape Verde",
    Bissau: "Guinea-Bissau",
    Maputo: "Mozambique",
    Windhoek: "Namibia",
    Amsterdam: "Netherlands",
    Paramaribo: "Suriname",
    Sao_Tome: "Sao Tome & Principe",
    Dili: "East Timor",
    Johannesburg: "South Africa",
    Luanda: "Angola",
    Aruba: "Aruba",
    Curacao: "Cura\xE7ao",
    Malabo: "Equatorial Guinea",
    Lower_Princes: "St Maarten (Dutch)"
  };
  var userCity;
  var userCountry;
  var userTimeZone;
  var userLanguageCodeShort;
  if (Intl) {
    userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    var tzArr = userTimeZone.split("/");
    tzArr[0];
    userCity = tzArr[tzArr.length - 1];
    userCountry = timeZoneCityToCountry[userCity];
  }
  if (userCountry === void 0)
    userLanguageCodeShort = "en";
  else if (userCountry === "Aruba" || userCountry === "Belgium" || userCountry === "Cura\xE7ao" || userCountry === "Namibia" || userCountry === "Netherlands" || userCountry === "South Africa" || userCountry === "St Maarten (Dutch)" || userCountry === "Suriname") {
    userLanguageCodeShort = "nl";
  } else {
    userLanguageCodeShort = "en";
  }
  return renderTemplate`<html><head>${renderComponent($$result, "LanguageRedirect", $$LanguageRedirect, { "lang": userLanguageCodeShort })}${renderHead()}</head><body></body></html>`;
}, "/home/pedroso/Documents/Coding/portfolio23/src/components/LanguageDetect.astro", void 0);

const $$Astro$o = createAstro();
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$Index$3;
  return renderTemplate`${renderComponent($$result, "LanguageDetect", $$LanguageDetect, {})}`;
}, "/home/pedroso/Documents/Coding/portfolio23/src/pages/index.astro", void 0);

const $$file$3 = "/home/pedroso/Documents/Coding/portfolio23/src/pages/index.astro";
const $$url$3 = "";

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$3,
	file: $$file$3,
	url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const supabaseUrl = "https://ivsravkkfoxmavajbkjj.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2c3JhdmtrZm94bWF2YWpia2pqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMzMzM2MjMsImV4cCI6MjAwODkwOTYyM30.fudpmhTf4c9UspK9W_EnKjqalxzKJVxDUQvTIi_IIBM";
const supabase = createClient(supabaseUrl, supabaseAnonKey);
await supabase.rpc("count_visits", {
  url: "basee"
}).single();

const $$Astro$n = createAstro();
const $$VisitorsSupabase = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$VisitorsSupabase;
  const currentUrl = "adasdaaaa";
  await supabase.rpc("count_visits", {
    url: currentUrl
  }).single();
  return renderTemplate``;
}, "/home/pedroso/Documents/Coding/portfolio23/src/components/VisitorsSupabase.astro", void 0);

const $$Astro$m = createAstro();
const $$Base = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Base;
  const { title, lang } = Astro2.props;
  const logoSrc = "/img/ckdev-logo-light.svg";
  return renderTemplate`<html id="html"${addAttribute(lang, "lang")} data-theme="dark"><head><meta charset="utf-8"><link rel="icon" type="image/svg+xml"${addAttribute(logoSrc, "href")}><link rel="stylesheet" href="../style.css"><meta name="viewport" content="width=device-width"><meta name="description" content="The portfolio of Cors, Front-end web developer."><title>${title}</title><link rel="manifest" href="/manifest.json"><meta name="theme-color" content="#3367D6"><meta property="og:site_name" content="Cors, Front-end web developer."><meta property="og:url" content="https://ckdev88.github.io"><meta property="og:type" content="website"><meta property="og:title" content="Cors | Frontend Developer & Accessibility specialist"><meta property="og:description" content="I believe the web should be as inclusive as possible, which means performance, ease of use and readability should always be prioritized."><meta property="og:image" content="https://ckdev88.github.io/img/ckdev-logo-bright.webp"><meta property="og:url" content="https://ckdev88.github.io">${renderHead()}</head><body><div id="theme-backdrop"></div>${renderSlot($$result, $$slots["default"])}${renderComponent($$result, "Vs", $$VisitorsSupabase, { "currentUrl": "sadfsadfasdf", "testvar": "sdfasdfi", "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/pedroso/Documents/Coding/portfolio23/src/components/VisitorsSupabase.astro", "client:component-export": "default" })}</body></html>`;
}, "/home/pedroso/Documents/Coding/portfolio23/src/layouts/Base.astro", void 0);

const $$Astro$l = createAstro();
const $$ThemeIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$ThemeIcon;
  return renderTemplate`${maybeRenderHead()}<button aria-label="light" aria-live="polite" id="theme-btn" title="Toggles light & dark"><div class="nav-accessibility-light_mode"><svg id="sun-svg" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="nav-accessibility-light_mode light"><path d="M12.979 9C14.6319 9 15.9843 10.35 15.9843 12C15.9843 13.65 14.6319 15 12.979 15C11.3261 15 9.97368 13.65 9.97368 12C9.97368 10.35 11.3261 9 12.979 9ZM12.979 7C10.2141 7 7.97013 9.24 7.97013 12C7.97013 14.76 10.2141 17 12.979 17C15.7439 17 17.9879 14.76 17.9879 12C17.9879 9.24 15.7439 7 12.979 7ZM2.96125 13H4.9648C5.51578 13 5.96658 12.55 5.96658 12C5.96658 11.45 5.51578 11 4.9648 11H2.96125C2.41027 11 1.95947 11.45 1.95947 12C1.95947 12.55 2.41027 13 2.96125 13ZM20.9932 13H22.9968C23.5478 13 23.9985 12.55 23.9985 12C23.9985 11.45 23.5478 11 22.9968 11H20.9932C20.4422 11 19.9914 11.45 19.9914 12C19.9914 12.55 20.4422 13 20.9932 13ZM11.9772 2V4C11.9772 4.55 12.428 5 12.979 5C13.53 5 13.9808 4.55 13.9808 4V2C13.9808 1.45 13.53 1 12.979 1C12.428 1 11.9772 1.45 11.9772 2ZM11.9772 20V22C11.9772 22.55 12.428 23 12.979 23C13.53 23 13.9808 22.55 13.9808 22V20C13.9808 19.45 13.53 19 12.979 19C12.428 19 11.9772 19.45 11.9772 20ZM6.95834 4.58C6.56764 4.19 5.92651 4.19 5.54583 4.58C5.15514 4.97 5.15514 5.61 5.54583 5.99L6.60771 7.05C6.99841 7.44 7.63954 7.44 8.02022 7.05C8.40089 6.66 8.41091 6.02 8.02022 5.64L6.95834 4.58ZM19.3503 16.95C18.9596 16.56 18.3185 16.56 17.9378 16.95C17.5471 17.34 17.5471 17.98 17.9378 18.36L18.9997 19.42C19.3904 19.81 20.0315 19.81 20.4122 19.42C20.8029 19.03 20.8029 18.39 20.4122 18.01L19.3503 16.95ZM20.4122 5.99C20.8029 5.6 20.8029 4.96 20.4122 4.58C20.0215 4.19 19.3804 4.19 18.9997 4.58L17.9378 5.64C17.5471 6.03 17.5471 6.67 17.9378 7.05C18.3285 7.43 18.9696 7.44 19.3503 7.05L20.4122 5.99ZM8.02022 18.36C8.41091 17.97 8.41091 17.33 8.02022 16.95C7.62953 16.56 6.98839 16.56 6.60771 16.95L5.54583 18.01C5.15514 18.4 5.15514 19.04 5.54583 19.42C5.93652 19.8 6.57766 19.81 6.95834 19.42L8.02022 18.36Z"></path></svg><svg id="moon-svg" width="25" height="24" viewBox="0 0 25 24" fill="red" xmlns="http://www.w3.org/2000/svg" class="nav-accessibility-dark_mode light"><path d="M10.3442 5.51C10.1639 6.15 10.0737 6.82 10.0737 7.5C10.0737 11.58 13.3996 14.9 17.4869 14.9C18.1681 14.9 18.8393 14.81 19.4804 14.63C18.4386 17.19 15.9141 19 12.9789 19C9.11202 19 5.96644 15.86 5.96644 12C5.96644 9.07 7.77966 6.55 10.3442 5.51ZM12.9789 3C8.00005 3 3.96289 7.03 3.96289 12C3.96289 16.97 8.00005 21 12.9789 21C17.9577 21 21.9949 16.97 21.9949 12C21.9949 11.54 21.9548 11.08 21.8947 10.64C20.9129 12.01 19.3101 12.9 17.4869 12.9C14.5016 12.9 12.0773 10.48 12.0773 7.5C12.0773 5.69 12.9689 4.08 14.3413 3.1C13.9005 3.04 13.4397 3 12.9789 3Z"></path></svg></div></button>`;
}, "/home/pedroso/Documents/Coding/portfolio23/src/components/ThemeIcon.astro", void 0);

const languages = {
  nl: "NL",
  //Nederlands
  en: "EN"
  //English
  // pt: "PT", //Português
};
const defaultLang = "en";
const ui = {
  nl: {
    "nav.Hi": "Hoi",
    "nav.Future": "Toekomst",
    "nav.Past": "Projecten",
    "nav.Skills": "Stack",
    "nav.Tools": "Tools",
    "nav.Contact": "Contact",
    "lt.JumpTo": "Spring naar",
    "ui.Accessibility": "Toegankelijkheid",
    "hi-h1": "Hoi, ik ben Cors,",
    "hi-h1-sub": "Front-end web developer.",
    "hi-p": "Meer dan 15 jaar professionele ervaring als front-end ontwikkelaar, werkend aan digitale producten van promotionele websites tot enterprise webshops.",
    "hi-p2": "Gespecialiseerd in front-end ontwikkeling, met toegankelijkheid, performance and gebruikersgemakt als prioriteiten, zodat het eindproduct zo inclusief mogelijk is.",
    "past.head": "Mijn werk, projecten en werkgevers.",
    "past.p": "Een greep uit projecten waaraan ik heb gewerkt, met de daarbij horende vaardigheden.",
    "past-1-h3": "",
    "past-1-h3-sub": "",
    "past-1-p": "Took some time to take on various private projects, while doing some small projects on the side, using a variety of frameworks and techniques.",
    "past-2-h3": "Visma PlusPort",
    "past-2-h3-sub": "2017 - 2021",
    "past-2-p": "Leading a small team responsible for the front-end and accessibility	(WCAG 2.1) of our main product: PlusPort LMS, as well as our own websites and other web services.",
    "past-3-h3": "Clever Strategy",
    "past-3-h3-sub": "2011 - 2017",
    "past-3-p": "Working as front-end developer and campaign manager, specialized in accountable marketing. Directly in contact with many clients, to fine tune the communication in running campaigns, where we made several flows to target and retarget the (potential) customers, to keep them engaged. The campaigns were a mix of physical and virtual, webshops, campaign-websites, e-mails and physical mail."
  },
  en: {
    "nav.Hi": "Hi",
    "nav.Future": "Future",
    "nav.Past": "Projects",
    "nav.Skills": "Stack",
    "nav.Tools": "Tools",
    "nav.Contact": "Contact",
    "lt.JumpTo": "Jump to",
    "ui.Accessibility": "Accessibility",
    "hi-h1": "Hi, my name is Cors,",
    "hi-h1-sub": "Front-end web developer.",
    "hi-p": "More than 15 years of professional experience building products for businesses ranging from simple promotional websites to enterprise webshops.",
    "hi-p2": "Specialized in front-end development, with accessibility, performance and ease of use as priorities, so the end result is as inclusive as possible.",
    "past.head": "Some of my work.",
    "past.p": "Below you can see a selection of some of my employers, jobs, projects	and applied skills."
  },
  pt: {
    "nav.Hi": "Ola",
    "nav.Future": "Futuro",
    "nav.Past": "Projetos",
    "nav.Skills": "Skills",
    "nav.Tools": "Tools",
    "nav.Contact": "Contato",
    "nav.JumpTo": "Saltar para",
    "ui.Accessibility": "Accessibility",
    "hi-h1": "Ola, eu sou Cors,",
    "hi-h1-sub": "Front-end web desenvolvedor.",
    "hi-p": "More than 15 years of professional experience building products for businesses ranging from simple promotional websites to enterprise webshops.",
    "hi-p2": "Specialized in front-end development, with accessibility, performance and ease of use as priorities, so the end result is as inclusive as possible.",
    "past.head": "Some of my work.",
    "past.p": "Below you can see a selection of some of my employers, jobs, projects	and applied skills."
  }
};

const $$Astro$k = createAstro();
const $$LanguagePicker = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$LanguagePicker;
  const { lang, label } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="nav-accessibility-language"><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.7875 2C7.25773 2 2.77979 6.48 2.77979 12C2.77979 17.52 7.25773 22 12.7875 22C18.3274 22 22.8153 17.52 22.8153 12C22.8153 6.48 18.3274 2 12.7875 2ZM19.7298 8H16.7746C16.454 6.75 15.9932 5.55 15.3921 4.44C17.2354 5.07 18.7681 6.35 19.7298 8ZM12.7975 4.04C13.629 5.24 14.2802 6.57 14.7109 8H10.8842C11.3149 6.57 11.9661 5.24 12.7975 4.04ZM5.0438 14C4.88352 13.36 4.78334 12.69 4.78334 12C4.78334 11.31 4.88352 10.64 5.0438 10H8.4298C8.34966 10.66 8.28956 11.32 8.28956 12C8.28956 12.68 8.34966 13.34 8.4298 14H5.0438ZM5.86526 16H8.8205C9.14106 17.25 9.60188 18.45 10.2029 19.56C8.35968 18.93 6.82696 17.66 5.86526 16ZM8.8205 8H5.86526C6.82696 6.34 8.35968 5.07 10.2029 4.44C9.60188 5.55 9.14106 6.75 8.8205 8ZM12.7975 19.96C11.9661 18.76 11.3149 17.43 10.8842 16H14.7109C14.2802 17.43 13.629 18.76 12.7975 19.96ZM15.1417 14H10.4534C10.3632 13.34 10.2931 12.68 10.2931 12C10.2931 11.32 10.3632 10.65 10.4534 10H15.1417C15.2319 10.65 15.302 11.32 15.302 12C15.302 12.68 15.2319 13.34 15.1417 14ZM15.3921 19.56C15.9932 18.45 16.454 17.25 16.7746 16H19.7298C18.7681 17.65 17.2354 18.93 15.3921 19.56ZM17.1653 14C17.2454 13.34 17.3055 12.68 17.3055 12C17.3055 11.32 17.2454 10.66 17.1653 10H20.5513C20.7116 10.64 20.8118 11.31 20.8118 12C20.8118 12.69 20.7116 13.36 20.5513 14H17.1653Z" fill="white"></path></svg><select id="nav-languages" class="header-button language-select"${addAttribute(lang, "value")}>${Object.entries(languages).map(
    ([code, name]) => code == lang ? renderTemplate`<option${addAttribute(code, "value")} selected>${name}</option>` : renderTemplate`<option${addAttribute(code, "value")}>${name}</option>`
  )}</select></div>`;
}, "/home/pedroso/Documents/Coding/portfolio23/src/components/LanguagePicker.astro", void 0);

function getLangFromUrl(url) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui)
    return lang;
  return defaultLang;
}
function useTranslations(lang) {
  return function t(key) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

const $$Astro$j = createAstro();
const $$HeaderNavAccessibility = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$HeaderNavAccessibility;
  const { lang } = Astro2.props;
  getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<nav id="nav-accessibility" role="navigation"${addAttribute(t("ui.Accessibility"), "aria-label")}>${renderComponent($$result, "ThemeIcon", $$ThemeIcon, {})}${renderComponent($$result, "LanguagePicker", $$LanguagePicker, { "lang": lang })}</nav>`;
}, "/home/pedroso/Documents/Coding/portfolio23/src/components/HeaderNavAccessibility.astro", void 0);

const $$Astro$i = createAstro();
const $$NavItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$NavItem;
  const { title, lang } = Astro2.props;
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<li><a${addAttribute(`/${lang}/#${title}`, "href")}${addAttribute(`${t("lt.JumpTo")} ${title}`, "title")}>${title}</a></li>`;
}, "/home/pedroso/Documents/Coding/portfolio23/src/components/NavItem.astro", void 0);

const $$Astro$h = createAstro();
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Nav;
  getLangFromUrl(Astro2.url);
  const { lang } = Astro2.props;
  const t = useTranslations(lang);
  const logoSrcLight = "../img/ckdev-logo-light.svg";
  return renderTemplate`${maybeRenderHead()}<nav id="nav-top" role="navigation" aria-label="Hoofdmenu"><a href="./" title="Terug naar de homepage" id="homelink"><img${addAttribute(logoSrcLight, "src")} alt="Cors, Front-end developer" height="32" id="homelink-img"></a><ul id="pages">${renderComponent($$result, "NavItem", $$NavItem, { "title": t("nav.Past"), "lang": lang })}${renderComponent($$result, "NavItem", $$NavItem, { "title": t("nav.Skills"), "lang": lang })}${renderComponent($$result, "NavItem", $$NavItem, { "title": t("nav.Contact"), "lang": lang })}</ul></nav>${renderComponent($$result, "HeaderNavAccessibility", $$HeaderNavAccessibility, { "lang": lang })}`;
}, "/home/pedroso/Documents/Coding/portfolio23/src/components/Nav.astro", void 0);

const $$Astro$g = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Header;
  const { lang } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header id="header-page"><div class="scroll-line"></div><div class="container" id="nav-container">${renderComponent($$result, "Nav", $$Nav, { "lang": lang })}</div></header>`;
}, "/home/pedroso/Documents/Coding/portfolio23/src/components/Header.astro", void 0);

const $$Astro$f = createAstro();
const $$SectionHi = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$SectionHi;
  const { lang } = Astro2.props;
  const t = useTranslations(lang);
  const logoSrcLight = "../img/ckdev-logo-light.svg";
  return renderTemplate`${maybeRenderHead()}<section id="section-hi"><span${addAttribute(t("nav.Hi"), "id")} class="section-anchor t-0"></span><div class="container"><div class="grid-item intro"><h1>${t("hi-h1")}<sub>${t("hi-h1-sub")}</sub></h1><p>${t("hi-p")}<br>${t("hi-p2")}</p></div><div class="grid-item logo"><img${addAttribute(logoSrcLight, "src")} alt="Cors, Front-end developer" id="logo-ck-big"></div></div></section>`;
}, "/home/pedroso/Documents/Coding/portfolio23/src/components/SectionHi.astro", void 0);

const $$Astro$e = createAstro();
const $$BadgeItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$BadgeItem;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="badge">${title}</li>`;
}, "/home/pedroso/Documents/Coding/portfolio23/src/components/BadgeItem.astro", void 0);

const $$Astro$d = createAstro();
const $$SectionPastItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$SectionPastItem;
  const { name, img, w, h, skills } = Astro2.props;
  const skillsArr = skills.split(",");
  return renderTemplate`${maybeRenderHead()}<div class="grid-item"><img${addAttribute(img, "src")} class="thumbIMG"${addAttribute(name, "alt")}${addAttribute(w, "width")}${addAttribute(h, "height")}><ul class="overlay-badges"><!-- {skillss} -->${skillsArr.map((s) => {
    return renderTemplate`${renderComponent($$result, "BadgeItem", $$BadgeItem, { "title": s })}`;
  })}</ul></div>`;
}, "/home/pedroso/Documents/Coding/portfolio23/src/components/SectionPastItem.astro", void 0);

const $$Astro$c = createAstro();
const $$SectionPastArticle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$SectionPastArticle;
  const { lang, pastId, extraClass } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`past-${pastId}`, "id")}><div class="container"><article${addAttribute(`past-header${pastId}`, "aria-labelledby")}${addAttribute(`grid-container ${extraClass}`, "class")}>${pastId == "1" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<div class="past-article-intro">${lang === "en" ? renderTemplate`<h3>
Self employed<sub>2021 - current</sub></h3><p>
Took some time to take on various private projects, while doing
								some small projects on the side, using a variety of frameworks
								and techniques.
</p>` : renderTemplate`<h3>Freelancer<sub>2021 - huidig</sub></h3><p>Freelancer geworden, zodat ik mijn tijd aan verschillende priv&eacute;-projecten kan werken en tegelijk nieuwe technieken kan ontwikkelen.</p>`}<ul>${renderComponent($$result2, "BadgeItem", $$BadgeItem, { "title": "Vue" })}${renderComponent($$result2, "BadgeItem", $$BadgeItem, { "title": "React" })}${renderComponent($$result2, "BadgeItem", $$BadgeItem, { "title": "PostCSS" })}${renderComponent($$result2, "BadgeItem", $$BadgeItem, { "title": "Figma" })}${renderComponent($$result2, "BadgeItem", $$BadgeItem, { "title": "Python" })}${renderComponent($$result2, "BadgeItem", $$BadgeItem, { "title": "Astro" })}${renderComponent($$result2, "BadgeItem", $$BadgeItem, { "title": "WCAG" })}${renderComponent($$result2, "BadgeItem", $$BadgeItem, { "title": "PHP" })}${renderComponent($$result2, "BadgeItem", $$BadgeItem, { "title": "Supabase" })}</ul></div><aside class="thumbs" aria-hidden="true"><div class="grid-container">${renderComponent($$result2, "SectionPastItem", $$SectionPastItem, { "img": "../img/feeder-supabase-logo.webp", "name": "Feed reader Supabase", "w": "108", "h": "41", "skills": "PHP, Vanilla JS, Supabase" })}${renderComponent($$result2, "SectionPastItem", $$SectionPastItem, { "img": "../img/dagindeling-logo.avif", "name": "Dagindeling", "w": "108", "h": "41", "skills": "Vue,EcmaScript,Firebase" })}${renderComponent($$result2, "SectionPastItem", $$SectionPastItem, { "img": "../img/python-stocks-logo.avif", "name": "Python Stocks", "w": "108", "h": "86", "skills": "Python" })}${renderComponent($$result2, "SectionPastItem", $$SectionPastItem, { "img": "../img/ckdev-logo.svg", "name": "Portfolio", "w": "57", "h": "72", "skills": "Astro,React,Figma,Firebase,PostCSS" })}</div></aside>` })}` : ""}${pastId == 2 ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<div class="past-article-intro">${lang === "en" ? renderTemplate`<h3>
Visma PlusPort<sub>2017 - 2021</sub></h3><p>
Lead developer responsible for the front-end and
								accessibility (WCAG 2.1) of our main product: PlusPort LMS, as
								well as our own websites and other web services.
</p>` : renderTemplate`<h3>
Visma PlusPort<sub>2017 - 2021</sub></h3><p>
Lead developer, verantwoordelijk voor de front-end en toegankelijkheid (WCAG 2.1) van ons hoofdproduct: PlusPort LMS, as
								well as our own websites and other web services.
</p>`}<ul>${renderComponent($$result2, "BadgeItem", $$BadgeItem, { "title": "Bootstrap" })}${renderComponent($$result2, "BadgeItem", $$BadgeItem, { "title": "WCAG" })}${renderComponent($$result2, "BadgeItem", $$BadgeItem, { "title": "React" })}${renderComponent($$result2, "BadgeItem", $$BadgeItem, { "title": "XD" })}${renderComponent($$result2, "BadgeItem", $$BadgeItem, { "title": "ActiveCampaign" })}${renderComponent($$result2, "BadgeItem", $$BadgeItem, { "title": "WordPress" })}${renderComponent($$result2, "BadgeItem", $$BadgeItem, { "title": "PHP" })}</ul></div><aside class="thumbs" aria-hidden="true"><div class="grid-container">${renderComponent($$result2, "SectionPastItem", $$SectionPastItem, { "img": "../img/logo-plusport.svg", "name": "PlusPort", "w": "144", "h": "42", "skills": "React,PHP,Sass,XD,React" })}${renderComponent($$result2, "SectionPastItem", $$SectionPastItem, { "img": "../img/plusport-lms-logo.webp", "name": "PlusPort LMS", "w": "144", "h": "86", "skills": "ActiveCampaign,React,WCAG,Sass,Bootstrap" })}${renderComponent($$result2, "SectionPastItem", $$SectionPastItem, { "img": "../img/logo-plusport-direct.png", "name": "PlusPort Direct", "w": "144", "h": "41", "skills": "ActiveCampaign,WCAG,SEO,Bootstrap" })}${renderComponent($$result2, "SectionPastItem", $$SectionPastItem, { "img": "../img/opleiders-direct-logo.svg", "name": "Opleiders direct", "w": "144", "h": "41", "skills": "EcmaScript,ActiveCampaign" })}</div></aside>` })}` : ""}${pastId == 3 ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<div class="past-article-intro"><h3>
Clever Strategy<sub>2011 - 2017</sub></h3>${lang === "en" ? renderTemplate`<p>
Working as front-end developer and campaign manager, specialized
								in accountable marketing. Directly in contact with many clients,
								to fine tune the communication in running campaigns, where we
								made several flows to target and retarget the (potential)
								customers, to keep them engaged. The campaigns were a mix of
								physical and virtual, webshops, campaign-websites, e-mails and
								physical mail.
</p>` : renderTemplate`<p>
Werkzaam als front-end developer and campaign manager, gespecialiseerd
								in accountable marketing. Direct in contact with klanten
								 om de lopende en nieuwe campagnes te optimaliseren, waarin (potentieel nieuwe) klanten worden benaderd, om de betrokkenheid hoog te houden. The campagnes waren een mix van fysiek, virtueel, webshops, campagnewebsites, e-mails en fysieke mails.
</p>`}<ul>${renderComponent($$result2, "BadgeItem", $$BadgeItem, { "title": "JavaScript" })}${renderComponent($$result2, "BadgeItem", $$BadgeItem, { "title": "Bootstrap" })}${renderComponent($$result2, "BadgeItem", $$BadgeItem, { "title": "Photoshop" })}${renderComponent($$result2, "BadgeItem", $$BadgeItem, { "title": "WordPress" })}${renderComponent($$result2, "BadgeItem", $$BadgeItem, { "title": "Clang / Deploytec" })}${renderComponent($$result2, "BadgeItem", $$BadgeItem, { "title": "Selligent" })}${renderComponent($$result2, "BadgeItem", $$BadgeItem, { "title": "Smarty" })}</ul></div><aside class="thumbs" aria-hidden="true"><div class="grid-container">${renderComponent($$result2, "SectionPastItem", $$SectionPastItem, { "img": "../img/kruidvat-logo.svg", "name": "Kruidvat", "w": "144", "h": "66", "skills": "Deploytec,Smarty" })}${renderComponent($$result2, "SectionPastItem", $$SectionPastItem, { "img": "../img/hema-logo.svg", "name": "HEMA", "w": "96", "h": "96", "skills": "E-mail marketing,Selligent,Smarty" })}${renderComponent($$result2, "SectionPastItem", $$SectionPastItem, { "img": "../img/bruynzeel-keukens-logo.png", "name": "Bruynzeel Keukens", "w": "144", "h": "144", "skills": "E-mail marketing,Smarty,Photoshop" })}${renderComponent($$result2, "SectionPastItem", $$SectionPastItem, { "img": "../img/lucardi-logo.webp", "name": "Lucardi", "w": "144", "h": "43", "skills": "E-mail marketing,Deploytec,Smarty" })}${renderComponent($$result2, "SectionPastItem", $$SectionPastItem, { "img": "../img/optitrade-logo.svg", "name": "Optitrade", "w": "144", "h": "43", "skills": "WordPress,Photoshop,Deploytec,Smarty,Bootstrap" })}${renderComponent($$result2, "SectionPastItem", $$SectionPastItem, { "img": "../img/total-logo.png", "name": "Total", "w": "144", "h": "144", "skills": "E-mail marketing,Deploytec,Smarty" })}</div></aside>` })}` : ""}${pastId == "4" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<div class="past-article-intro"><h3>
Fair Products Plaza <sub>2011 - 2016</sub></h3>${lang === "en" ? renderTemplate`<p>
Co-founded and created a webshop to sell fair products. Which
								meant all products were completely fair trade, organic, free of
								animal testing and environment friendly, really, not the
								greenwashed versions of it.
<br>
Sadly we had to pull the plug on the project in 2016.
</p>` : renderTemplate`<p>
Webshop Fair Product Plaza co-opgericht en gecre&euml;erd, om hiermee daadwerkelijk eerlijke producten te verkopen. 
								Alle producten waren compleet fair trade, organic, diertestvrij en milieuvriendelijk. Maar dan &eacute;cht, niet de greenwashed versie die we nu vaak zien.
<br>
Helaas hebben we dit project in 2016 moeten stopzetten.
</p>`}<ul>${renderComponent($$result2, "BadgeItem", $$BadgeItem, { "title": "Magento" })}${renderComponent($$result2, "BadgeItem", $$BadgeItem, { "title": "SEO" })}${renderComponent($$result2, "BadgeItem", $$BadgeItem, { "title": "Mailchimp" })}${renderComponent($$result2, "BadgeItem", $$BadgeItem, { "title": "JavaScript" })}${renderComponent($$result2, "BadgeItem", $$BadgeItem, { "title": "PHP" })}${renderComponent($$result2, "BadgeItem", $$BadgeItem, { "title": "MySQL" })}</ul></div><aside class="thumbs" aria-hidden="true"><div class="grid-container">${renderComponent($$result2, "SectionPastItem", $$SectionPastItem, { "img": "../img/fairpp-logo.avif", "name": "Fair Products Plaza", "w": "120", "h": "120", "skills": "Magento,PHP,MySQL,Photoshop,Mailchimp" })}</div></aside>` })}` : ""}${pastId == "5" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<div class="past-article-intro"><h3>
Lined <sub>2006 - 2011</sub></h3>${lang === "en" ? renderTemplate`<p>
Worked on TroubleFree software in the first year, this is a
								backoffice administration system. After that, I designed tens
								and developed close to a hundred websites for clients and
								maintained many, often applying the latest SEO techniques.
</p>` : renderTemplate`<p>
Het eerste jaar aan TroubleFree Software gewerkt, een software pakket dat in Microsoft Visual Basic en Access was gemaakt, omgezet naar PHP en MySQL. Hier werd mijn liefde voor front-end duidelijk. Na het eerste jaar heb ik tientallen website ontworpen ruim honderd websites ontwikkeld en tientallen onderhouden, meestal om de SEO te optimaliseren door middel van best practices.
</p>`}<ul>${renderComponent($$result2, "BadgeItem", $$BadgeItem, { "title": "PHP" })}${renderComponent($$result2, "BadgeItem", $$BadgeItem, { "title": "MySQL" })}${renderComponent($$result2, "BadgeItem", $$BadgeItem, { "title": "SEO" })}${renderComponent($$result2, "BadgeItem", $$BadgeItem, { "title": "Photoshop" })}${renderComponent($$result2, "BadgeItem", $$BadgeItem, { "title": "JavaScript" })}${renderComponent($$result2, "BadgeItem", $$BadgeItem, { "title": "Visual Basic" })}</ul></div><aside class="thumbs" aria-hidden="true"><div class="grid-container">${renderComponent($$result2, "SectionPastItem", $$SectionPastItem, { "img": "../img/lined-logo.svg", "name": "Lined", "w": "144", "h": "144", "skills": "PHP,HTML,CSS,MySQL,Photoshop,Illustrator,CSS,SEO" })}${renderComponent($$result2, "SectionPastItem", $$SectionPastItem, { "img": "../img/troublefree-logo.svg", "name": "Total", "w": "144", "h": "144", "skills": "PHP,MySQL,CSS,Visual Basic,JavaScript" })}</div></aside>` })}` : ""}</article></div></div>`;
}, "/home/pedroso/Documents/Coding/portfolio23/src/components/SectionPastArticle.astro", void 0);

const $$Astro$b = createAstro();
const $$SectionPast = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$SectionPast;
  const { lang } = Astro2.props;
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<section id="section-past"><span${addAttribute(t("nav.Past"), "id")} class="section-anchor"></span><div class="intro"><div class="container"><h2>${t("past.head")}</h2><p>${t("past.p")}</p></div></div>${renderComponent($$result, "SectionPastArticle", $$SectionPastArticle, { "pastId": "1", "lang": lang, "extraClass": "reverse" })}${renderComponent($$result, "SectionPastArticle", $$SectionPastArticle, { "pastId": "2", "lang": lang, "extraClass": "" })}${renderComponent($$result, "SectionPastArticle", $$SectionPastArticle, { "pastId": "3", "lang": lang, "extraClass": "reverse" })}${renderComponent($$result, "SectionPastArticle", $$SectionPastArticle, { "pastId": "4", "lang": lang, "extraClass": "" })}${renderComponent($$result, "SectionPastArticle", $$SectionPastArticle, { "pastId": "5", "lang": lang, "extraClass": "reverse" })}</section>`;
}, "/home/pedroso/Documents/Coding/portfolio23/src/components/SectionPast.astro", void 0);

const $$Astro$a = createAstro();
const $$SkilltreeCat = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$SkilltreeCat;
  const { img, heading, name, w, h } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h3 class="tool-item-wrapper"><div class="tool-item"><img${addAttribute(img, "src")}${addAttribute(heading, "alt")}${addAttribute(w, "width")}${addAttribute(h, "height")}></div></h3>`;
}, "/home/pedroso/Documents/Coding/portfolio23/src/components/SkilltreeCat.astro", void 0);

const $$Astro$9 = createAstro();
const $$SkilltreeItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$SkilltreeItem;
  const { skill } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li${addAttribute(`level-3 ${skill}`, "class")}>${skill}</li>`;
}, "/home/pedroso/Documents/Coding/portfolio23/src/components/SkilltreeItem.astro", void 0);

const $$Astro$8 = createAstro();
const $$ToolsItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ToolsItem;
  const { name, img, w, h } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="tool-item-wrapper"><div class="tool-item"><img${addAttribute(img, "src")}${addAttribute(name, "alt")}${addAttribute(w, "width")}${addAttribute(h, "height")}></div></div>`;
}, "/home/pedroso/Documents/Coding/portfolio23/src/components/ToolsItem.astro", void 0);

const $$Astro$7 = createAstro();
const $$Tools = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Tools;
  return renderTemplate`${maybeRenderHead()}<div id="Tools"><div class="tools-grid" id="tools-html">${renderComponent($$result, "ToolsItem", $$ToolsItem, { "img": "../img/photoshop-logo.svg", "name": "Photoshop", "h": "54", "w": "62" })}${renderComponent($$result, "ToolsItem", $$ToolsItem, { "img": "../img/html5-shield.svg", "name": "HTML 5", "w": "57", "h": "54" })}${renderComponent($$result, "ToolsItem", $$ToolsItem, { "img": "../img/figma-logo.svg", "name": "Figma", "w": "54", "h": "43" })}${renderComponent($$result, "ToolsItem", $$ToolsItem, { "img": "../img/xd-logo.svg", "name": "Adobe XD", "w": "54", "h": "54" })}${renderComponent($$result, "ToolsItem", $$ToolsItem, { "img": "../img/w3c-logo.svg", "name": "W3C Validator", "w": "54", "h": "43" })}${renderComponent($$result, "ToolsItem", $$ToolsItem, { "img": "../img/wcag2.1AA-v-logo.svg", "name": "WCAG 2.1", "w": "54", "h": "23" })}${renderComponent($$result, "ToolsItem", $$ToolsItem, { "img": "../img/astro-logo.svg", "name": "Astro", "w": "51", "h": "54" })}${renderComponent($$result, "ToolsItem", $$ToolsItem, { "img": "../img/github-logo.svg", "name": "Github", "w": "54", "h": "54" })}${renderComponent($$result, "ToolsItem", $$ToolsItem, { "img": "../img/wordpress-logo.webp", "name": "WordPress", "w": "54", "h": "54" })}${renderComponent($$result, "ToolsItem", $$ToolsItem, { "img": "../img/Bootstrap.svg", "name": "Bootstrap", "w": "54", "h": "54" })}${renderComponent($$result, "ToolsItem", $$ToolsItem, { "img": "../img/litmus-logo.svg", "name": "Litmus", "w": "54", "h": "24" })}${renderComponent($$result, "ToolsItem", $$ToolsItem, { "img": "../img/smarty-logo.webp", "name": "Smarty", "w": "54", "h": "23" })}${renderComponent($$result, "ToolsItem", $$ToolsItem, { "img": "../img/mailchimp-logo.svg", "name": "Mailchimp", "w": "56", "h": "54" })}${renderComponent($$result, "ToolsItem", $$ToolsItem, { "img": "../img/deployteq-logo.svg", "name": "Deployteq", "w": "54", "h": "13" })}${renderComponent($$result, "ToolsItem", $$ToolsItem, { "img": "../img/activecampaign-logo.svg", "name": "ActiveCampaign", "w": "42", "h": "54" })}</div><div class="tools-grid hidden" id="tools-css">${renderComponent($$result, "ToolsItem", $$ToolsItem, { "img": "../img/Bootstrap.svg", "name": "Bootstrap", "w": "54", "h": "54" })}${renderComponent($$result, "ToolsItem", $$ToolsItem, { "img": "../img/css3-logo.svg", "name": "CSS 3", "w": "54", "h": "54" })}${renderComponent($$result, "ToolsItem", $$ToolsItem, { "img": "../img/github-logo.svg", "name": "Github", "w": "54", "h": "54" })}${renderComponent($$result, "ToolsItem", $$ToolsItem, { "img": "../img/sass-logo.svg", "name": "Sass", "w": "54", "h": "48" })}${renderComponent($$result, "ToolsItem", $$ToolsItem, { "img": "../img/postcss-logo.svg", "name": "Post CSS", "w": "54", "h": "54" })}${renderComponent($$result, "ToolsItem", $$ToolsItem, { "img": "../img/tailwind-css-logo.svg", "name": "Tailwind CSS", "w": "54", "h": "54" })}</div><div class="tools-grid hidden" id="tools-javascript">${renderComponent($$result, "ToolsItem", $$ToolsItem, { "img": "../img/es6-logo.webp", "name": "EcmaScript", "w": "54", "h": "54" })}${renderComponent($$result, "ToolsItem", $$ToolsItem, { "img": "../img/javascript-logo.svg", "name": "Javascript", "w": "56", "h": "54" })}${renderComponent($$result, "ToolsItem", $$ToolsItem, { "img": "../img/typescript-logo.svg", "name": "TypeScript", "w": "54", "h": "54" })}${renderComponent($$result, "ToolsItem", $$ToolsItem, { "img": "../img/astro-logo.svg", "name": "Astro", "w": "51", "h": "54" })}${renderComponent($$result, "ToolsItem", $$ToolsItem, { "img": "../img/nodejs-logo.svg", "name": "Node", "w": "54", "h": "39" })}${renderComponent($$result, "ToolsItem", $$ToolsItem, { "img": "../img/reactjs-logo.svg", "name": "React", "w": "54", "h": "57" })}${renderComponent($$result, "ToolsItem", $$ToolsItem, { "img": "../img/vuejs-logo.svg", "name": "Vue JS", "w": "54", "h": "55" })}</div><!-- <div class="tools-grid hidden" id="tools-workflow"> --><!-- 	<ToolsItem img="../img/es6-logo.webp" name="EcmaScript" w="54" h="54" /> --><!-- 	<ToolsItem --><!-- 		img="../img/javascript-logo.svg" --><!-- 		name="Javascript" --><!-- 		w="56" --><!-- 		h="54" --><!-- 	/> --><!-- 	<ToolsItem --><!-- 		img="../img/typescript-logo.svg" --><!-- 		name="TypeScript" --><!-- 		w="54" --><!-- 		h="54" --><!-- 	/> --><!-- 	<ToolsItem img="../img/webpack-logo.svg" name="WebPack" w="57" h="54" /> --><!-- 	<ToolsItem img="../img/vite-logo.svg" name="Vite" w="51" h="54" /> --><!-- 	<ToolsItem img="../img/gulp-logo.svg" name="Gulp" w="29" h="54" /> --><!-- 	<ToolsItem img="../img/reactjs-logo.svg" name="React" w="54" h="57" /> --><!-- 	<ToolsItem img="../img/vuejs-logo.svg" name="Vue JS" w="54" h="55" /> --><!-- 	<ToolsItem img="../img/supabase-logo.png" name="Supabase" w="54" h="55" /> --><!-- </div> --><!-- <div class="tools-grid hidden" id="tools-database-backend"> --><!-- 	<ToolsItem img="../img/es6-logo.webp" name="EcmaScript" w="54" h="54" /> --><!-- 	<ToolsItem --><!-- 		img="../img/javascript-logo.svg" --><!-- 		name="Javascript" --><!-- 		w="56" --><!-- 		h="54" --><!-- 	/> --><!-- 	<ToolsItem --><!-- 		img="../img/typescript-logo.svg" --><!-- 		name="TypeScript" --><!-- 		w="54" --><!-- 		h="54" --><!-- 	/> --><!-- 	<ToolsItem img="../img/supabase-logo.png" name="Supabase" w="54" h="55" /> --><!-- 	<ToolsItem img="../img/firebase-logo.svg" name="Astro" w="51" h="54" /> --><!-- 	<ToolsItem img="../img/nodejs-logo.svg" name="Node" w="54" h="39" /> --><!-- 	<ToolsItem img="../img/reactjs-logo.svg" name="React" w="54" h="57" /> --><!-- 	<ToolsItem img="../img/vuejs-logo.svg" name="Vue JS" w="54" h="55" /> --><!-- </div> --></div>`;
}, "/home/pedroso/Documents/Coding/portfolio23/src/components/Tools.astro", void 0);

const $$Astro$6 = createAstro();
const $$Skilltree = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Skilltree;
  const { lang } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="intro"><div class="container"><h2>Skill stack</h2>${lang == "en" ? renderTemplate`<p>
Over the years, many skills have come and partially gone, these are
					the ones that stayed.
</p>` : renderTemplate`<p>
Door de jaren heen zijn vele technieken gekomen en gegaan, deze zijn
					gebleven.
</p>`}</div></div><div id="skilltree-wrapper" class="skills-container"><ul id="skilltree" class="grid-item"><li id="st-html" class="li-level-1 active"><h3 class="tool-item-wrapper"><div class="tool-item"><img src="../img/html5-shield.svg" alt="HTML 5" width="102" height="115"></div></h3><ul class="ul-level-2"><li class="fundamentals li-level-2"><h4>Fundamentals</h4><ul class="ul-level-3">${renderComponent($$result, "SkilltreeItem", $$SkilltreeItem, { "skill": "Semantic HTML" })}${renderComponent($$result, "SkilltreeItem", $$SkilltreeItem, { "skill": "Accessibility" })}${renderComponent($$result, "SkilltreeItem", $$SkilltreeItem, { "skill": "Organic SEO" })}</ul></li><li class="preprocessors li-level-2"><h4>Processors</h4><ul class="ul-level-3">${renderComponent($$result, "SkilltreeItem", $$SkilltreeItem, { "skill": "htmx" })}${renderComponent($$result, "SkilltreeItem", $$SkilltreeItem, { "skill": "PHP" })}</ul></li><li class="email li-level-2"><h4>E-mail</h4><ul class="ul-level-3">${renderComponent($$result, "SkilltreeItem", $$SkilltreeItem, { "skill": "Responsive" })}${renderComponent($$result, "SkilltreeItem", $$SkilltreeItem, { "skill": "Deliverability" })}${renderComponent($$result, "SkilltreeItem", $$SkilltreeItem, { "skill": "Journeys" })}</ul></li></ul><svg version="1.1" xmlns="http://www.w3.org/2000/svg" class="arrow-guide"><path d="M 0 0 L 0 12 L 9 6 z" stroke="colourname" fill="url(#fill)"></path></svg></li><li id="st-css" class="li-level-1">${renderComponent($$result, "SkilltreeCat", $$SkilltreeCat, { "img": "../img/css3-shield.svg", "heading": "CSS", "name": "CSS 3", "classname": "large", "w": "89", "h": "100" })}<ul class="ul-level-2"><li class="fundamentals li-level-2"><h4>Fundamentals</h4><ul class="ul-level-3">${renderComponent($$result, "SkilltreeItem", $$SkilltreeItem, { "skill": "CSS 3", "className": "pg-95" })}${renderComponent($$result, "SkilltreeItem", $$SkilltreeItem, { "skill": "Responsive" })}</ul></li><li class="preprocessors li-level-2"><h4>Processors</h4><ul class="ul-level-3">${renderComponent($$result, "SkilltreeItem", $$SkilltreeItem, { "skill": "SASS" })}${renderComponent($$result, "SkilltreeItem", $$SkilltreeItem, { "skill": "PostCSS" })}</ul></li><li class="frameworks li-level-2"><h4>Frameworks</h4><ul class="ul-level-3">${renderComponent($$result, "SkilltreeItem", $$SkilltreeItem, { "skill": "Bootstrap" })}${renderComponent($$result, "SkilltreeItem", $$SkilltreeItem, { "skill": "Semantic-UI" })}${renderComponent($$result, "SkilltreeItem", $$SkilltreeItem, { "skill": "Tailwind" })}</ul></li></ul><svg version="1.1" xmlns="http://www.w3.org/2000/svg" class="arrow-guide"><path d="M 0 0 L 0 12 L 9 6 z" stroke="colourname" fill="url(#fill)"></path></svg></li><li id="st-javascript" class="li-level-1">${renderComponent($$result, "SkilltreeCat", $$SkilltreeCat, { "img": "../img/javascript-logo.svg", "heading": "JavaScript", "name": "JavaScript", "classname": "large", "w": "89", "h": "100" })}<ul class="ul-level-2"><li class="fundamentals li-level-2"><h4>Fundamentals</h4><ul class="ul-level-3">${renderComponent($$result, "SkilltreeItem", $$SkilltreeItem, { "skill": "EcmaScript" })}${renderComponent($$result, "SkilltreeItem", $$SkilltreeItem, { "skill": "TypeScript" })}</ul></li><li class="task-runners li-level-2"><h4>Bundlers</h4><ul class="ul-level-3">${renderComponent($$result, "SkilltreeItem", $$SkilltreeItem, { "skill": "Vite" })}${renderComponent($$result, "SkilltreeItem", $$SkilltreeItem, { "skill": "WebPack" })}${renderComponent($$result, "SkilltreeItem", $$SkilltreeItem, { "skill": "Gulp" })}</ul></li><li class="framework li-level-2"><h4>Frameworks</h4><ul class="ul-level-3">${renderComponent($$result, "SkilltreeItem", $$SkilltreeItem, { "skill": "Astro" })}${renderComponent($$result, "SkilltreeItem", $$SkilltreeItem, { "skill": "Vue" })}${renderComponent($$result, "SkilltreeItem", $$SkilltreeItem, { "skill": "React" })}</ul></li></ul><svg version="1.1" xmlns="http://www.w3.org/2000/svg" class="arrow-guide"><path d="M 0 0 L 0 12 L 9 6 z" stroke="colourname" fill="url(#fill)"></path></svg></li><!-- <li id="st-workflow" class="li-level-1"> --><!-- 	<SkilltreeCat --><!-- 		img="" --><!-- 		heading="Workflow" --><!-- 		name="Workflow" --><!-- 		classname="large" --><!-- 		w="89" --><!-- 		h="100" --><!-- 	/> --><!-- 	<ul class="ul-level-2"> --><!-- 		<li class="task-runners li-level-2"></li> --><!-- 		<li class="framework li-level-2"> --><!-- 			<h4>Back end platforms</h4> --><!-- 			<ul class="ul-level-3"> --><!-- 				<SkilltreeItem skill="Supabase" /> --><!-- 				<SkilltreeItem skill="Firebase" /> --><!-- 			</ul> --><!-- 		</li> --><!-- 	</ul> --><!-- 	<svg version="1.1" xmlns="http://www.w3.org/2000/svg" class="arrow-guide"> --><!-- 		<path d="M 0 0 L 0 12 L 9 6 z" stroke="colourname" fill="url(#fill)" --><!-- 		></path> --><!-- 	</svg> --><!-- </li> --></ul><div class="grid-item tools">${renderComponent($$result, "Tools", $$Tools, { "lang": lang })}</div></div>`;
}, "/home/pedroso/Documents/Coding/portfolio23/src/components/Skilltree.astro", void 0);

const $$Astro$5 = createAstro();
const $$SectionSkills = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SectionSkills;
  const { lang } = Astro2.props;
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<section id="section-skills"><span${addAttribute(t("nav.Skills"), "id")} class="section-anchor"></span><div class="container">${renderComponent($$result, "Skilltree", $$Skilltree, { "lang": lang })}</div></section>`;
}, "/home/pedroso/Documents/Coding/portfolio23/src/components/SectionSkills.astro", void 0);

const $$Astro$4 = createAstro();
const $$SectionContact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SectionContact;
  const { lang } = Astro2.props;
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<section id="section-contact"><span${addAttribute(t("nav.Contact"), "id")} class="section-anchor"></span><div class="container">${lang == "en" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<h2>Get in touch?</h2><p>
You can e-mail me at:
<a href="mailto:ckdev88@outlook.com">ckdev88@outlook.com</a>.
</p>` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<h2>Contact opnemen?</h2><p>
Je kan me een mailtje sturen op:
<a href="mailto:ckdev88@outlook.com">ckdev88@outlook.com</a>.
</p>` })}`}</div></section>`;
}, "/home/pedroso/Documents/Coding/portfolio23/src/components/SectionContact.astro", void 0);

const $$Astro$3 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer id="page-footer"><div class="container">&copy; Cors, Frontend Developer 2023</div></footer>`;
}, "/home/pedroso/Documents/Coding/portfolio23/src/components/Footer.astro", void 0);

const $$Astro$2 = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  const lang = "en";
  const currentUrl = Astro2.request.url + "EN";
  await supabase.rpc("count_visits", {
    url: currentUrl
  }).single();
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, { "title": "Cors, Front-end Developer.", "lang": lang }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div id="container">${renderComponent($$result2, "Header", $$Header, { "lang": lang })}<main>${renderComponent($$result2, "SectionHi", $$SectionHi, { "lang": lang })}${renderComponent($$result2, "SectionPast", $$SectionPast, { "lang": lang })}${renderComponent($$result2, "SectionSkills", $$SectionSkills, { "lang": lang })}${renderComponent($$result2, "SectionContact", $$SectionContact, { "lang": lang })}</main>${renderComponent($$result2, "Footer", $$Footer, {})}</div>` })}`;
}, "/home/pedroso/Documents/Coding/portfolio23/src/pages/en/index.astro", void 0);

const $$file$2 = "/home/pedroso/Documents/Coding/portfolio23/src/pages/en/index.astro";
const $$url$2 = "/en";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$2,
	file: $$file$2,
	url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const lang = "nl";
  const currentUrl = Astro2.request.url + "NL";
  await supabase.rpc("count_visits", {
    url: currentUrl
  }).single();
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, { "title": "Cors, Front-end Developer.", "lang": lang }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div id="container">${renderComponent($$result2, "Header", $$Header, { "lang": lang })}<main>${renderComponent($$result2, "SectionHi", $$SectionHi, { "lang": lang })}${renderComponent($$result2, "SectionPast", $$SectionPast, { "lang": lang })}${renderComponent($$result2, "SectionSkills", $$SectionSkills, { "lang": lang })}${renderComponent($$result2, "SectionContact", $$SectionContact, { "lang": lang })}</main>${renderComponent($$result2, "Footer", $$Footer, {})}</div>` })}`;
}, "/home/pedroso/Documents/Coding/portfolio23/src/pages/nl/index.astro", void 0);

const $$file$1 = "/home/pedroso/Documents/Coding/portfolio23/src/pages/nl/index.astro";
const $$url$1 = "/nl";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const lang = "pt";
  const currentUrl = Astro2.request.url;
  await supabase.rpc("count_visits", {
    url: currentUrl
  }).single();
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, { "title": "Cors, Front-end Developer.", "lang": lang }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div id="container">${renderComponent($$result2, "Header", $$Header, { "lang": lang })}<main>${renderComponent($$result2, "SectionHi", $$SectionHi, { "lang": lang })}${renderComponent($$result2, "SectionPast", $$SectionPast, { "lang": lang })}${renderComponent($$result2, "SectionSkills", $$SectionSkills, { "lang": lang })}${renderComponent($$result2, "SectionContact", $$SectionContact, { "lang": lang })}</main>${renderComponent($$result2, "Footer", $$Footer, {})}</div>` })}`;
}, "/home/pedroso/Documents/Coding/portfolio23/src/pages/pt/index.astro", void 0);

const $$file = "/home/pedroso/Documents/Coding/portfolio23/src/pages/pt/index.astro";
const $$url = "/pt";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$2 as a, index$1 as b, index as c, index$3 as i };
