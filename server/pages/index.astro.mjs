import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BwJvkVnV.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_J7dkzDb7.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://lumirant.top");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const title = "Lumirant - \u5FC3\u6709\u6240\u60F3\uFF0C\u884C\u6709\u6240\u5411";
  const description = "Lumirant\u7684\u4E2A\u4EBA\u535A\u5BA2";
  const permalink = Astro2.site.href;
  const blogSubTitle = "\u5FC3\u6709\u6240\u60F3\uFF0C\u884C\u6709\u6240\u5411\u3002";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "permalink": permalink, "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="home-container" data-astro-cid-j7pv25f6> <div class="home-copy" data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>${blogSubTitle}</h1> <h4 style="font-weight: 200;" data-astro-cid-j7pv25f6>Where the Heart thinks, the action follows.</h4> </div> <div class="hero-image-container" data-astro-cid-j7pv25f6> <picture data-astro-cid-j7pv25f6> <source srcset="/assets/home-illustration.webp" media="(min-width: 600px)" data-astro-cid-j7pv25f6> <img class="hero-image" alt="Illustration of person reading a book" src="/assets/home-illustration-small.webp" width="550" height="466" data-astro-cid-j7pv25f6> </picture> <!-- <p class="caption">
        Illustration by
        <a href="https://icons8.com/illustrations/author/5c07e68d82bcbc0092519bb6" target="_blank" rel="noopener">Icons 8</a>
        from
        <a href="https://icons8.com/illustrations" target="_blank" rel="noopener">Ouch!</a>
      </p> --> </div> </div> ` })} `;
}, "/home/runner/work/self-page/self-page/src/pages/index.astro", void 0);

const $$file = "/home/runner/work/self-page/self-page/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
