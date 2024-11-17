import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from '../chunks/astro/server_BwJvkVnV.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DLDRCmBG.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://lumirant.top");
const $$FirstScreen = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FirstScreen;
  const { blogSubTitle = "" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<div class="home-container" id="first-screen" data-astro-cid-nflwlkgk> <div class="home-copy" data-astro-cid-nflwlkgk> <h1 data-astro-cid-nflwlkgk>', `</h1> <h4 style="font-weight: 200;" data-astro-cid-nflwlkgk>Where the Heart thinks, the action follows.</h4> <div class="mouse-hint" data-astro-cid-nflwlkgk> <!--?xml version="1.0" encoding="UTF-8"?--><svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-nflwlkgk><path fill-rule="evenodd" clip-rule="evenodd" d="M24 16H12V32C12 38.6274 17.3726 44 24 44C30.6274 44 36 38.6274 36 32V16H24Z" fill="none" stroke="#777" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-nflwlkgk></path><path d="M36 16C36 9.37258 30.6274 4 24 4V16H36Z" stroke="#777" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-nflwlkgk></path><path d="M24 4C17.3726 4 12 9.37258 12 16H24V4Z" stroke="#777" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-nflwlkgk></path></svg> <span data-astro-cid-nflwlkgk>\u6EDA\u52A8\u9F20\u6807\u6EDA\u8F6E\u4EE5\u7EE7\u7EED\u6D4F\u89C8</span> </div> </div> <div class="hero-image-container" data-astro-cid-nflwlkgk> <picture data-astro-cid-nflwlkgk> <source srcset="/assets/home-illustration.webp" media="(min-width: 600px)" data-astro-cid-nflwlkgk> <img class="hero-image" alt="Illustration of person reading a book" src="/assets/home-illustration-small.webp" width="550" height="466" data-astro-cid-nflwlkgk> </picture> <!-- <p class="caption">
        Illustration by
        <a href="https://icons8.com/illustrations/author/5c07e68d82bcbc0092519bb6" target="_blank" rel="noopener">Icons 8</a>
        from
        <a href="https://icons8.com/illustrations" target="_blank" rel="noopener">Ouch!</a>
      </p> --> </div> </div> <script>
    function adjustFirstScreenHeight() {
      const headerNode = window.getComputedStyle(document.getElementById('nav-header'));
      const stickyNavNode = window.getComputedStyle(document.getElementById('sticky-bar'));
      const firstScreenNode = document.getElementById('first-screen');
      const headerHeight = parseFloat(headerNode.height.slice(0, headerNode.height.length - 2));
      const stickyNavHeight = parseFloat(stickyNavNode.height.slice(0, stickyNavNode.height.length - 2));
      if(stickyNavNode.display == 'none') computeHeight = headerHeight;
      else computeHeight = headerHeight + stickyNavHeight;
      firstScreenNode.setAttribute("style", "height: " + (window.innerHeight - computeHeight) + 'px');
      console.log(window.innerHeight - computeHeight,firstScreenNode)
    }
    
    window.addEventListener('resize', adjustFirstScreenHeight);
    window.addEventListener('load', adjustFirstScreenHeight);
<\/script> `])), maybeRenderHead(), blogSubTitle);
}, "/home/runner/work/self-page/self-page/src/components/Index/FirstScreen.astro", void 0);

const $$SecondScreen = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="second-screen-container" data-astro-cid-vohvmg2a> <div class="second-screen" data-astro-cid-vohvmg2a> <div class="title" data-astro-cid-vohvmg2a> <h1 data-astro-cid-vohvmg2a>Hi，我是Lumirant</h1> </div> <div class="self-introduce" data-astro-cid-vohvmg2a> <p data-astro-cid-vohvmg2a>欢迎来到我的个人主页！</p> <p data-astro-cid-vohvmg2a>在一切身份介绍的开始前，我首先是一名高中生。</p> <p data-astro-cid-vohvmg2a>有很多网名，最常用的是「Lumirant」和「蓝海潮生」。</p> <p data-astro-cid-vohvmg2a>我2006年在深圳南山出生，从小在深圳长大。</p> <p data-astro-cid-vohvmg2a>大部分时间都待在广东省内，偶尔去外地旅旅游。</p> <p data-astro-cid-vohvmg2a>理科生，但是理科并不好……</p> <p data-astro-cid-vohvmg2a>是<a href="https://baike.baidu.com/item/%E7%AB%9E%E9%80%89%E8%80%85%E5%9E%8B%E4%BA%BA%E6%A0%BC/60185931" data-astro-cid-vohvmg2a>「ENFP竞选者」</a>人格，欢迎和我交朋友！</p> <p data-astro-cid-vohvmg2a>平时除了学习外，业余时间喜欢研究一点自己喜欢的东西。</p> <p data-astro-cid-vohvmg2a>我天生对计算机具有满腔热忱，很早就一直在自学各种技术。</p> <p data-astro-cid-vohvmg2a>喜欢研究新东西，或者也可以称我是<span data-astro-cid-vohvmg2a>「Self Hoster」</span>？</p> <p data-astro-cid-vohvmg2a>平时也会捣鼓一些自己感兴趣的东西，或者自己做点小东西。</p> <p data-astro-cid-vohvmg2a>有时间的话，欢迎参观我的<a href="#" data-astro-cid-vohvmg2a>实验室</a>！</p> <p data-astro-cid-vohvmg2a>原本想考计算机专业，结果选科没选对，高考报不了。（丧</p> <p data-astro-cid-vohvmg2a>（不过就计算机行业的现状来看，我估计也不会报了hhh）</p> <p data-astro-cid-vohvmg2a>平时有空会写写博客，也欢迎关注我的公众号「蓝海潮生」·</p> <p data-astro-cid-vohvmg2a>总之，希望你在这个网站收获好情绪！</p> <p data-astro-cid-vohvmg2a></p> </div> </div> </div> `;
}, "/home/runner/work/self-page/self-page/src/components/Index/SecondScreen.astro", void 0);

const $$Astro = createAstro("https://lumirant.top");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const title = "Lumirant - \u5FC3\u6709\u6240\u60F3\uFF0C\u884C\u6709\u6240\u5411";
  const description = "Lumirant\u7684\u4E2A\u4EBA\u535A\u5BA2";
  const permalink = Astro2.site.href;
  const blogSubTitle = "\u5FC3\u6709\u6240\u60F3\uFF0C\u884C\u6709\u6240\u5411\u3002";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "permalink": permalink, "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FirstScreen", $$FirstScreen, { "blogSubTitle": blogSubTitle, "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "SecondScreen", $$SecondScreen, { "data-astro-cid-j7pv25f6": true })} ` })} <style>
  .layout {
    scroll-snap-type: x mandatory;
  }
</style> `;
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
