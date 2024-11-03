import { a as createComponent, r as renderTemplate, m as maybeRenderHead, c as createAstro, d as renderComponent, u as unescapeHTML } from '../../chunks/astro/server_BwJvkVnV.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_J7dkzDb7.mjs';
import 'clsx';
/* empty css                                     */
import { marked } from 'marked';
export { renderers } from '../../renderers.mjs';

const $$Bio = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div data-astro-cid-2jiluk5e> <p data-astro-cid-2jiluk5e>
Posted By <strong data-astro-cid-2jiluk5e>Lumiant</strong>.
</p> </div> `;
}, "/home/runner/work/self-page/self-page/src/components/Bio.astro", void 0);

function getPostData(post) {
  return {
    slug: post.split("/").pop().split(".").shift()
  };
}

const $$Astro = createAstro("https://lumirant.top");
const prerender = false;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = getPostData(Astro2.params.slug);
  var uri; {
    var uri = process.env.PUBLIC_API_URI + "getPostContent?alias=" + slug;
  }
  const contentData = (await fetch(uri).then((res) => res.json())).data;
  const content = marked.parse(contentData.content);
  const permalink = `${Astro2.site.href}blog/${slug}`;
  return renderTemplate`<!-- <BaseLayout title={title} description={description} permalink={permalink} current="blog">

  <header>
    <p>{publishDate}</p>
    <h1>{title}</h1>
    <hr />
  </header>
  <div class="container">
    <article class="content">
      <Content />
    </article>
    <hr />
    <Bio />
  </div>
</BaseLayout> -->${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": contentData.head_info.title, "description": contentData.head_info.description, "permalink": permalink, "current": "blog", "data-astro-cid-4sn4zg3r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header data-astro-cid-4sn4zg3r> <p data-astro-cid-4sn4zg3r>${contentData.head_info.publishDate}</p> <h1 data-astro-cid-4sn4zg3r>${contentData.head_info.title}</h1> <hr data-astro-cid-4sn4zg3r> </header> <div class="container" data-astro-cid-4sn4zg3r> <article class="content" data-astro-cid-4sn4zg3r>${unescapeHTML(content)}</article> <hr data-astro-cid-4sn4zg3r> ${renderComponent($$result2, "Bio", $$Bio, { "data-astro-cid-4sn4zg3r": true })} </div> ` })} `;
}, "/home/runner/work/self-page/self-page/src/pages/blog/[slug].astro", void 0);
const $$file = "/home/runner/work/self-page/self-page/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
