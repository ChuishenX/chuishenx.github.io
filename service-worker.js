if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,a)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let c={};const l=e=>s(e,d),n={module:{uri:d},exports:c,require:l};i[d]=Promise.all(r.map((e=>n[e]||l(e)))).then((e=>(a(...e),c)))}}define(["./workbox-7d6a3f4d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/05/14/FlaskCaptcha/index.html",revision:"624d33eb9d2a89a385c89fed0fe01b33"},{url:"2022/05/14/TheReturn/index.html",revision:"4480f3e7ba0f37bb360d7dadc703da0e"},{url:"2022/05/14/Thirteen/index.html",revision:"e27448725b17a88c72b5748b59c93329"},{url:"404.html",revision:"ae9f6d4e85daf291449be4605c8cf565"},{url:"about/index.html",revision:"2e2a638d51dda344684449b27d5aee12"},{url:"archives/2022/05/index.html",revision:"99defb03239e435a320f2baac0862207"},{url:"archives/2022/index.html",revision:"1e3839590afa09873eb55ca18c8f93fc"},{url:"archives/index.html",revision:"392b015b70a66cf9ef11826d2471381c"},{url:"assets/wallpaper-2311325.jpg",revision:"6f01af8d24d6d2de2564af30c32366b7"},{url:"assets/wallpaper-2572384.jpg",revision:"3637ba36e2daaeaa2bb438f65b0bff9c"},{url:"assets/wallpaper-878514.jpg",revision:"2bf9e4c5bf4f5fec55353a46bd3176c6"},{url:"blog/categories/index.html",revision:"68df5484721899ab352651904e4cc2e0"},{url:"blog/tags/index.html",revision:"cb43dd6e2c3475cd9d7e1c60626e1557"},{url:"css/first.css",revision:"701b9c96f8fd324bbf79747a61d5276f"},{url:"css/Readme.html",revision:"c1421c18e077ab9a9582161d9197e693"},{url:"css/style.f6b8a5be.css",revision:"f6b8a5be686dd45d13a1d5c86969d2c0"},{url:"draw/index.html",revision:"067b9b7efaa47f83c5557092d90c2527"},{url:"friends/index.html",revision:"b524735457735aabb6709090103e4d1c"},{url:"index.html",revision:"4a3cf9973e45a802a53c25209431d59e"},{url:"js/app.fda82528.js",revision:"fda82528cd9405a52fcd5cd5e2db9d8b"},{url:"js/plugins/aplayer.js",revision:"dbe5eea968969672c52022ed895192a0"},{url:"js/plugins/parallax.8bf0ab10.js",revision:"8bf0ab10d50243ae87016af576642cdc"},{url:"js/plugins/rightMenu.d9437285.js",revision:"d9437285263079b1158df42384235b71"},{url:"js/plugins/rightMenus.cd02aa19.js",revision:"cd02aa1922d4d4eece59e4328c8b9686"},{url:"js/plugins/tags/contributors.aec80453.js",revision:"aec8045335d2753a39a48c34fb019662"},{url:"js/plugins/tags/friends.f372da57.js",revision:"f372da57b83083859f60ce19b736a695"},{url:"js/plugins/tags/sites.76bf19b8.js",revision:"76bf19b80414fbce774acddabf6b1d3e"},{url:"js/search/hexo.0e52f222.js",revision:"0e52f22209d509c1fb48fc490396c1de"},{url:"page/index.html",revision:"297b25c176133c254d52c3b0560bdc0d"},{url:"projects/index.html",revision:"01b300fab08554d57b88761164e59014"},{url:"tags/index.html",revision:"8fd182d52a07f83bc2ef4095e02a4197"},{url:"tags/Python-编程/index.html",revision:"28c00e7562c30b7e98e1a33c88523396"},{url:"tags/小说/index.html",revision:"4e77e47c45a0914b9eca4ead093a839b"}],{})}));
//# sourceMappingURL=service-worker.js.map
