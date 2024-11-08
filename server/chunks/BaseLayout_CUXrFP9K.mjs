import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderComponent, m as maybeRenderHead, e as renderHead, f as renderSlot } from './astro/server_BwJvkVnV.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro$4 = createAstro("https://lumirant.top");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/home/runner/work/self-page/self-page/node_modules/astro/components/ViewTransitions.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$3 = createAstro("https://lumirant.top");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { title, description, permalink } = Astro2.props;
  const socialUrl = Astro2.site.href + "assets/social.png";
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/x-icon" href="/favicon.ico"><!-- Primary Meta Tags --><title>', '</title><meta name="title"', '><meta name="description"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', ">", "<!-- This is intentionally inlined to avoid FOUC --><script>\n  const root = document.documentElement\n  const theme = localStorage.getItem('theme')\n  if (\n    theme === 'dark' ||\n    (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)\n  ) {\n    root.classList.add('theme-dark')\n  } else {\n    root.classList.remove('theme-dark')\n  }\n<\/script>"])), title, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(permalink, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(socialUrl, "content"), addAttribute(permalink, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(socialUrl, "content"), renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}));
}, "/home/runner/work/self-page/self-page/src/components/BaseHead.astro", void 0);

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a style="text-decoration: none;" href="/" data-astro-cid-tvrurpns> <!-- <img alt="Blog Logo" src="/assets/logo.webp" width="75" height="50" /> --> <p style="margin: 0;" data-astro-cid-tvrurpns>Lumirant</p> </a>`;
}, "/home/runner/work/self-page/self-page/src/components/Logo.astro", void 0);

/** @returns {void} */

function run(fn) {
	return fn();
}

function blank_object() {
	return Object.create(null);
}

/**
 * @param {Function[]} fns
 * @returns {void}
 */
function run_all(fns) {
	fns.forEach(run);
}

let current_component;

/** @returns {void} */
function set_current_component(component) {
	current_component = component;
}

// general each functions:

function ensure_array_like(array_like_or_iterator) {
	return array_like_or_iterator?.length !== undefined
		? array_like_or_iterator
		: Array.from(array_like_or_iterator);
}

const ATTR_REGEX = /[&"]/g;
const CONTENT_REGEX = /[&<]/g;

/**
 * Note: this method is performance sensitive and has been optimized
 * https://github.com/sveltejs/svelte/pull/5701
 * @param {unknown} value
 * @returns {string}
 */
function escape(value, is_attr = false) {
	const str = String(value);
	const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
	pattern.lastIndex = 0;
	let escaped = '';
	let last = 0;
	while (pattern.test(str)) {
		const i = pattern.lastIndex - 1;
		const ch = str[i];
		escaped += str.substring(last, i) + (ch === '&' ? '&amp;' : ch === '"' ? '&quot;' : '&lt;');
		last = i + 1;
	}
	return escaped + str.substring(last);
}

/** @returns {string} */
function each(items, fn) {
	items = ensure_array_like(items);
	let str = '';
	for (let i = 0; i < items.length; i += 1) {
		str += fn(items[i], i);
	}
	return str;
}

let on_destroy;

/** @returns {{ render: (props?: {}, { $$slots, context }?: { $$slots?: {}; context?: Map<any, any>; }) => { html: any; css: { code: string; map: any; }; head: string; }; $$render: (result: any, props: any, bindings: any, slots: any, context: any) => any; }} */
function create_ssr_component(fn) {
	function $$render(result, props, bindings, slots, context) {
		const parent_component = current_component;
		const $$ = {
			on_destroy,
			context: new Map(context || (parent_component ? parent_component.$$.context : [])),
			// these will be immediately discarded
			on_mount: [],
			before_update: [],
			after_update: [],
			callbacks: blank_object()
		};
		set_current_component({ $$ });
		const html = fn(result, props, bindings, slots);
		set_current_component(parent_component);
		return html;
	}
	return {
		render: (props = {}, { $$slots = {}, context = new Map() } = {}) => {
			on_destroy = [];
			const result = { title: '', head: '', css: new Set() };
			const html = $$render(result, props, {}, $$slots, context);
			run_all(on_destroy);
			return {
				html,
				css: {
					code: Array.from(result.css)
						.map((css) => css.code)
						.join('\n'),
					map: null // TODO
				},
				head: result.title + result.head
			};
		},
		$$render
	};
}

/** @returns {string} */
function add_attribute(name, value, boolean) {
	if (value == null || (boolean)) return '';
	const assignment = `="${escape(value, true)}"`;
	return ` ${name}${assignment}`;
}

/* src/components/ThemeToggleButton.svelte generated by Svelte v4.2.8 */

const ThemeToggleButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const rootEl = typeof document !== 'undefined'
	? document.documentElement
	: null;

	const themes = ['light', 'dark'];
	let theme = '';

	if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
		theme = localStorage.getItem('theme');
	} else if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		theme = 'dark';
	}

	const icons = [
		`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
        clip-rule="evenodd"
      />
    </svg>`,
		`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>`
	];

	{
		if (rootEl && theme === 'light') {
			rootEl.classList.remove('theme-dark');
		} else if (rootEl && theme === 'dark') {
			rootEl.classList.add('theme-dark');
		}
	}

	return `<div class="theme-toggle">${each(themes, (t, i) => {
		return `<label${add_attribute(
			"class",
			[
				theme === t ? 'checked' : '',
				i !== themes.length - 1 ? 'with-right-border' : ''
			].join(' '),
			0
		)}><!-- HTML_TAG_START -->${icons[i]}<!-- HTML_TAG_END --> <input type="radio" name="theme-toggle" ${theme === t ? "checked" : ""}${add_attribute("value", t, 0)}${add_attribute("title", `Use ${t} theme`, 0)}${add_attribute("aria-label", `Use ${t} theme`, 0)}> </label>`;
	})}</div>`;
});

const $$Astro$2 = createAstro("https://lumirant.top");
const $$Nav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Nav;
  var { current = "", classType = "normal-bar" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="navbar-sentinal" data-astro-cid-dmqpwcec></div> <nav${addAttribute(classType, "class")} id="nav" data-astro-cid-dmqpwcec> <a${addAttribute(current === "" ? "selected" : "", "class")} href="/" data-astro-cid-dmqpwcec>首页</a> <a${addAttribute(current === "blog" ? "selected" : "", "class")} href="/blog" data-astro-cid-dmqpwcec>博客</a> <a${addAttribute(current === "about" ? "selected" : "", "class")} href="/about" data-astro-cid-dmqpwcec>关于</a> <div class="theme-toggle-container" data-astro-cid-dmqpwcec> ${renderComponent($$result, "ThemeToggleButton", ThemeToggleButton, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/runner/work/self-page/self-page/src/components/ThemeToggleButton.svelte", "client:component-export": "default", "data-astro-cid-dmqpwcec": true })} </div> </nav>`;
}, "/home/runner/work/self-page/self-page/src/components/Nav.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://lumirant.top");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const { current = "" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<div id="header-sentinal" data-astro-cid-3ef6ksr2></div> <header class="nav-header" data-astro-cid-3ef6ksr2> ', " ", " ", " </header> ", ` <script>
    // \u4EE3\u7801\u7075\u611F\u6765\u6E90\u4E8Eskywt.cn
    //Astro\u5BF9\u4E8Edocument\u7684\u652F\u6301\u4E0D\u592A\u53CB\u597D
    var observer;
    const headerEl = document.querySelector(".nav-header");
    function addNavObserver(navEl,sentinalEl,strict = false) {
      const screenWidth = document.body.clientWidth
      if (!headerEl || !sentinalEl) return;
      observer = new window.IntersectionObserver((e) => {
        var isSticky = false;
        if(strict && !e[0].isIntersectin && e[0].boundingClientRect.top <= 0) isSticky = true;
        else if(!strict && !e[0].isIntersectin && e[0].boundingClientRect.top < 0) isSticky = true;
        else isSticky = false;
        if (isSticky) {
          if(screenWidth > 575) navEl.classList.add("nav-sticky-active");
          else navEl.classList.add("nav-sticky-active");
        } else {
          if(screenWidth > 575) navEl.classList.remove("nav-sticky-active");
          else navEl.classList.remove("nav-sticky-active");
        }
      });
      observer.observe(sentinalEl);
    }
  
    function removeNavObserver() {
      if (observer) observer.disconnect();
      observer = null;
    }
  
    document.addEventListener(
      "astro:page-load",
      () => {
        getWindowInfo();
      },
      { once: false },
    );
  
    document.addEventListener(
      "astro:before-swap",
      () => {
        removeNavObserver();
      },
      { once: false },
    );

    const debounce = (fn, delay) => {
      let timer;
      return function() {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          fn();
        }, delay);
      }
    };
const getWindowInfo = () => {
	const windowInfo = {
		width: window.innerWidth,
		hight: window.innerHeight
	}
  if(windowInfo.width > 575) {
    let isSwiftPage = headerEl.getBoundingClientRect().x
    var newHeaderEL;
    if(isSwiftPage <= 0) newHeaderEL = document.querySelector(".nav-header");
    else newHeaderEL = headerEl;
    newHeaderEL.classList.add("sticky-bar","header-sticky");
    removeNavObserver();
    addNavObserver(newHeaderEL,document.querySelector("#header-sentinal"));
  }
  else{
    document.querySelector(".nav-header").classList.remove("sticky-bar","header-sticky");
    removeNavObserver();
    addNavObserver(document.querySelector(".sticky-bar"),document.querySelector("#navbar-sentinal"));
  }
};
const cancalDebounce = debounce(getWindowInfo, 500);

window.addEventListener('resize', cancalDebounce);
  <\/script>`])), maybeRenderHead(), renderComponent($$result, "Logo", $$Logo, { "data-astro-cid-3ef6ksr2": true }), renderComponent($$result, "Nav", $$Nav, { "current": current, "data-astro-cid-3ef6ksr2": true }), renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "fallback": "animate", "data-astro-cid-3ef6ksr2": true }), renderComponent($$result, "Nav", $$Nav, { "current": current, "classType": "sticky-bar", "data-astro-cid-3ef6ksr2": true }));
}, "/home/runner/work/self-page/self-page/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte> <span data-astro-cid-sz7xmlte>
&copy; 2023 - ${(/* @__PURE__ */ new Date()).getFullYear()} Lumirant.top All Right Reserved<br data-astro-cid-sz7xmlte> <div class="beian" data-astro-cid-sz7xmlte> <div style="display: flex;align-items: flex-start;gap: 3px;" data-astro-cid-sz7xmlte> <img src="../../assets/mpsbeian.png" style="width: 16px;" data-astro-cid-sz7xmlte><a href="https://beian.mps.gov.cn/#/query/webSearch?code=44030002005026" rel="noreferrer" target="_blank" data-astro-cid-sz7xmlte>粤公网安备44030002005026</a> </div> <a href="http://beian.miit.gov.cn" data-astro-cid-sz7xmlte>粤ICP备2024313822号</a> </div> </span> </footer> `;
}, "/home/runner/work/self-page/self-page/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://lumirant.top");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description, permalink, current } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-37fxchfa> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "permalink": permalink, "data-astro-cid-37fxchfa": true })}${renderHead()}</head> <body data-astro-cid-37fxchfa> <div class="layout" data-astro-cid-37fxchfa> ${renderComponent($$result, "Header", $$Header, { "current": current, "data-astro-cid-37fxchfa": true })} <main data-astro-cid-37fxchfa> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-37fxchfa": true })} </div> </body></html>`;
}, "/home/runner/work/self-page/self-page/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
