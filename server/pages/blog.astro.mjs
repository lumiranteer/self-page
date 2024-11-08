import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_BwJvkVnV.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CUXrFP9K.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://lumirant.top");
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const title = "Blog";
  const description = "Latest articles.";
  const permalink = `${Astro2.site.href}blog`;
  var uri; {
    var uri = process.env.PUBLIC_API_URI;
  }
  const data = (await fetch(uri + "getPostsList").then(
    (response) => response.json()
  )).data;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "permalink": permalink, "current": "blog", "data-astro-cid-5tznm7mj": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-5tznm7mj> <h1 data-astro-cid-5tznm7mj>博客</h1> ${data.map((post, index) => {
    const updatedTime = post.updated_at;
    const timeString = new Date(updatedTime * 1e3).toISOString();
    const dateString = timeString.split("T");
    const HoursString = dateString[1].split(".");
    const time = (/* @__PURE__ */ new Date(dateString[0] + " " + HoursString[0])).getTime();
    const now = Date.now();
    const diff = now - time;
    const minute = 60 * 1e3;
    const hour = 60 * minute;
    const day = 24 * hour;
    const diffYears = Math.floor(diff / (365 * day));
    const diffMonths = Math.floor(diff % (365 * day) / (30 * day));
    const diffDays = Math.floor(diff % (30 * day) / day);
    const diffHours = Math.floor(diff % day / hour);
    const diffMinutes = Math.floor(diff % hour / minute);
    const diffStr = diffYears > 0 ? `${diffYears}年前` : diffMonths > 0 ? `${diffMonths}个月前` : diffDays > 0 ? `${diffDays}天前` : diffHours > 0 ? `${diffHours}小时前` : diffMinutes > 0 ? `${diffMinutes}分钟前` : "刚刚";
    const href = `/blog/${post.alias}`;
    return renderTemplate`<div data-astro-cid-5tznm7mj> ${index !== 0 && renderTemplate`<hr data-astro-cid-5tznm7mj>`} <div class="post-item" data-astro-cid-5tznm7mj> <h2 data-astro-cid-5tznm7mj> <a${addAttribute(href, "href")} data-astro-cid-5tznm7mj>${post.title}</a> </h2> <p data-astro-cid-5tznm7mj>${post.introduce}</p> <div class="post-item-footer" data-astro-cid-5tznm7mj> <span class="post-item-date" data-astro-cid-5tznm7mj>— 最后更新： ${diffStr}</span> </div> </div> </div>`;
  })} </div> ` })} `;
}, "/home/runner/work/self-page/self-page/src/pages/blog/index.astro", void 0);
const $$file = "/home/runner/work/self-page/self-page/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
