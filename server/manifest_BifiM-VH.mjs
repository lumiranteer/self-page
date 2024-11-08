import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_Bm_G9bIS.mjs';
import 'es-module-lexer';
import { g as decodeKey } from './chunks/astro/server_BwJvkVnV.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/runner/work/self-page/self-page/","adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.2daoxv0f.js"}],"styles":[{"type":"inline","content":".about-image[data-astro-cid-kh7btl4r]{float:right;margin:-3em -7em 2em 2em;max-width:300px}.about-image[data-astro-cid-kh7btl4r] img[data-astro-cid-kh7btl4r]{border-radius:8px;margin-bottom:1.5em}@media (max-width: 1020px){.about-image[data-astro-cid-kh7btl4r]{float:none;margin:0 auto 2em}}\n"},{"type":"external","src":"/_astro/about.W5TpHcIk.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.2daoxv0f.js"}],"styles":[{"type":"inline","content":"div[data-astro-cid-2jiluk5e]{align-items:center;display:flex}img[data-astro-cid-2jiluk5e]{width:100px;height:100px;border-radius:100px;display:block;margin-right:20px}p[data-astro-cid-2jiluk5e]{font-size:1.125rem}header[data-astro-cid-4sn4zg3r]{text-align:center}header[data-astro-cid-4sn4zg3r] h1[data-astro-cid-4sn4zg3r]{margin-bottom:.7em}header[data-astro-cid-4sn4zg3r] p[data-astro-cid-4sn4zg3r]{color:var(--text-secondary);text-transform:uppercase;font-family:var(--font-family-sans);font-weight:600}header[data-astro-cid-4sn4zg3r] hr[data-astro-cid-4sn4zg3r]{min-width:100px;width:30%}\n"},{"type":"external","src":"/_astro/about.W5TpHcIk.css"}],"routeData":{"route":"/blog/[slug]","isIndex":false,"type":"page","pattern":"^\\/blog\\/([^/]+?)\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/blog/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.2daoxv0f.js"}],"styles":[{"type":"inline","content":"h2[data-astro-cid-5tznm7mj],.post-item-footer[data-astro-cid-5tznm7mj]{font-family:var(--font-family-sans);font-weight:700}.post-item-date[data-astro-cid-5tznm7mj]{color:var(--text-secondary);text-align:left;text-transform:uppercase;margin-right:16px}hr[data-astro-cid-5tznm7mj]{margin:60px auto}\n"},{"type":"external","src":"/_astro/about.W5TpHcIk.css"}],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.2daoxv0f.js"}],"styles":[{"type":"inline","content":".home-container[data-astro-cid-nflwlkgk]{align-items:center;display:flex;flex:1;justify-content:center;margin:2em 0;min-height:400px}.home-copy[data-astro-cid-nflwlkgk]{flex:1;padding:0 1em}.home-copy[data-astro-cid-nflwlkgk] h1[data-astro-cid-nflwlkgk]{font-weight:700;margin-bottom:.5em;line-height:1.3}.home-copy[data-astro-cid-nflwlkgk] p[data-astro-cid-nflwlkgk]{font-size:1.4em}.hero-image-container[data-astro-cid-nflwlkgk]{margin:0 1em;text-align:center}.hero-image-container[data-astro-cid-nflwlkgk] picture[data-astro-cid-nflwlkgk]{display:block;min-height:250px}.caption[data-astro-cid-nflwlkgk]{font-size:.8em;font-style:italic;text-align:left}.hero-image[data-astro-cid-nflwlkgk]{width:100%;max-width:550px;margin-bottom:1em}@media (max-width: 1200px){p[data-astro-cid-nflwlkgk]{font-size:1.2em}.hero-image[data-astro-cid-nflwlkgk]{max-width:400px}}@media (max-width: 800px){.home-container[data-astro-cid-nflwlkgk]{flex-direction:column}.home-copy[data-astro-cid-nflwlkgk]{flex:0;padding-bottom:2em;text-align:center}}\n"},{"type":"external","src":"/_astro/about.W5TpHcIk.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://lumirant.top","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/runner/work/self-page/self-page/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/home/runner/work/self-page/self-page/src/pages/blog/[slug].astro",{"propagation":"none","containsHead":true}],["/home/runner/work/self-page/self-page/src/pages/blog/index.astro",{"propagation":"none","containsHead":true}],["/home/runner/work/self-page/self-page/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/node@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"pages/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","/home/runner/work/self-page/self-page/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_BifiM-VH.mjs","/home/runner/work/self-page/self-page/src/components/ThemeToggleButton.svelte":"_astro/ThemeToggleButton.qOkjOh-G.js","@astrojs/svelte/client.js":"_astro/client.ppxVM2Be.js","/astro/hoisted.js?q=0":"_astro/hoisted.2daoxv0f.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/about.W5TpHcIk.css","/favicon.ico","/robots.txt","/_astro/ThemeToggleButton.qOkjOh-G.js","/_astro/client.ppxVM2Be.js","/_astro/hoisted.2daoxv0f.js","/assets/about-illustration.webp","/assets/home-illustration-small.webp","/assets/home-illustration.webp","/assets/logo.webp","/assets/mpsbeian.png","/assets/profile-pic.webp","/assets/social.png","/assets/upyunlogo.png","/assets/blog/casual-life-3d-girl-boy-poses.webp","/assets/blog/casual-life-3d-likes.webp","/assets/blog/casual-life-3d-meditation-crystal.webp","/assets/blog/casual-life-3d-workspace.webp","/assets/fonts/MiSans-Bold.ttf","/assets/fonts/MiSans-Demibold.ttf","/assets/fonts/MiSans-ExtraLight.ttf","/assets/fonts/MiSans-Heavy.ttf","/assets/fonts/MiSans-Light.ttf","/assets/fonts/MiSans-Medium.ttf","/assets/fonts/MiSans-Normal.ttf","/assets/fonts/MiSans-Regular.ttf","/assets/fonts/MiSans-Semibold.ttf","/assets/fonts/MiSans-Thin.ttf","/assets/fonts/OFL.txt","/assets/fonts/u-440qyriQwlOrhSvowK_l5-fCZMdeX3rg.woff2","/assets/fonts/u-4n0qyriQwlOrhSvowK_l52xwNZWMf6hPvhPQ.woff2","/assets/fonts/va9B4kDNxMZdWfMOD5VnLK3eRhf6Xl7Glw.woff2"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"t3U3j1TclNomp7dx/AS09ON9sO0ZYyZRnHW/MJWFVI0=","experimentalEnvGetSecretEnabled":false});

export { manifest };
