import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BwJvkVnV.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CUXrFP9K.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://lumirant.top");
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const title = "\u5173\u4E8E";
  const description = "\u5173\u4E8ELumirant";
  const permalink = `${Astro2.site.href}about`;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "permalink": permalink, "current": "about", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-kh7btl4r> <h1 data-astro-cid-kh7btl4r>关于</h1> <figure class="about-image" data-astro-cid-kh7btl4r> <img src="/assets/about-illustration.webp" alt="Illustration of a notebook" width="250" data-astro-cid-kh7btl4r> </figure> <h3 data-astro-cid-kh7btl4r>关于我</h3> <p data-astro-cid-kh7btl4r>你好，我是Lumirant，简单做个自我介绍吧。</p> <ul data-astro-cid-kh7btl4r> <li data-astro-cid-kh7btl4r>首当其冲的，我是一名在读高中生，将于明年参与高考。</li> <li data-astro-cid-kh7btl4r>自我感觉成绩比较差，只是能摸到本科线，但我正在努力。</li> <li data-astro-cid-kh7btl4r>平时对编程和计算机比较感兴趣，会自己做一些小东西，学习一点技术。</li> <li data-astro-cid-kh7btl4r>不过非常可惜的是我以后的专业方向大概率不会是计算机（丧。</li> <li data-astro-cid-kh7btl4r>爱好涉猎非常广泛，我愿意去尝试一切未知的新东西！</li> <li data-astro-cid-kh7btl4r>平时主要负责后端程序和API相关的开发，不过近期正在尝试转型。</li> <li data-astro-cid-kh7btl4r>曾经做过很多有意思的东西，如果你有兴趣了解，欢迎参观我的<a href="#" data-astro-cid-kh7btl4r>实验室</a>。</li> <li data-astro-cid-kh7btl4r>等毕业后想学一点其他方面的技术，不过那些都是后话啦~</li> <li data-astro-cid-kh7btl4r>是理科生，而且非常的ENFP，欢迎来和我做朋友呀。</li> </ul> <h3 data-astro-cid-kh7btl4r>关于本站</h3> <p data-astro-cid-kh7btl4r>这个网站备案的名字是「生活日记」，我以后也会将它当成朋友圈性质的博客站，分享一些随笔随想、生活日常、技术点滴等等。</p> <p data-astro-cid-kh7btl4r>网站的建立和运营也是屡经波折，不过这次应该会比较稳定（也许？</p> <p data-astro-cid-kh7btl4r>网站目前还在开发中，我想趁着为数不多的空闲时间尽量多的去完善它，以及给它多做一点功能，让它变得更像一个成熟的网站。</p> <p data-astro-cid-kh7btl4r>由于我平时主要是负责后端程序和API的开发，不经常涉及前端，所以需要一段时间来熟悉前端开发，不过这不会太久，因为我本来就会一点。</p> <p data-astro-cid-kh7btl4r>网站最开始是将主页和博客分开部署的，自己写了个简单的SPA落地页，然后再用Typecho搭一个博客网站就完成了,非常的简单。</p> <p data-astro-cid-kh7btl4r>但这次我决定使用一些比较系统性的技术栈，做一个成熟且统合的网站，所以它的前端是使用Astro构建的，它确实是一个非常强大的前端框架，可以把包括落地页、博客在内的很多内容都整合进来，对于一个需求比较多，但逻辑实现和体量上并不复杂的项目来说非常友好，目前我用的还算舒服。</p> <p data-astro-cid-kh7btl4r>至于后端，我打算暂时先采用PHP的Laravel框架进行设计，毕竟它的API和数据库结构并不复杂，并且Laravel成熟的运行机制能更好的保护和监控API状态，效果比较好，等以后如果有了更轻量化的替代品，我可能会再考虑一下。</p> <p data-astro-cid-kh7btl4r>关于域名，这个<code data-astro-cid-kh7btl4r>.top</code>域名是我在2023年注册的，<del data-astro-cid-kh7btl4r>因为没钱买那些比较高级的域名</del>，所以就备案并上线了这个域名，但好在<code data-astro-cid-kh7btl4r>lumirant.cn</code>这个域名已经准备进入备案流程了，也许不用多久，网站就能迁移到新域名上了。（笑</p> <h3 data-astro-cid-kh7btl4r>联系我</h3> <p data-astro-cid-kh7btl4r>因为个人原因，我不会在网络上放出我的个人真实信息。</p> <p data-astro-cid-kh7btl4r>不过你可以通过以下联系方式给我留言：</p> <ul data-astro-cid-kh7btl4r> <li data-astro-cid-kh7btl4r><a href="mailto:hello@protal.email.cn" data-astro-cid-kh7btl4r>Email: hello@protal.email.cn</a></li> <li data-astro-cid-kh7btl4r><a href="https://github.com/Lumirant" data-astro-cid-kh7btl4r>Github@Lumirant</a></li> <li data-astro-cid-kh7btl4r><a href="https://twitter.com/Lumirant" data-astro-cid-kh7btl4r>Twitter@Lumirant</a></li> <li data-astro-cid-kh7btl4r><a href="https://space.bilibili.com/393419480" data-astro-cid-kh7btl4r>BiliBili@拾月上寻</a></li> </ul> </div> ` })} `;
}, "/home/runner/work/self-page/self-page/src/pages/about.astro", void 0);

const $$file = "/home/runner/work/self-page/self-page/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
