if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const f=e=>a(e,r),l={module:{uri:r},exports:s,require:f};i[r]=Promise.all(d.map((e=>l[e]||f(e)))).then((e=>(c(...e),s)))}}define(["./workbox-7d6a3f4d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"01/46years.html",revision:"d2678b2aa7160acc27460fe8b2bbb6cd"},{url:"01/EMDLPART1.html",revision:"e41cbebb75238048b1093dee8eca57e6"},{url:"01/FlaskAudio.html",revision:"5783d9683e041f5c63450580e84b2151"},{url:"01/FlaskCaptcha.html",revision:"ffc640797b1ccf87c1cebce445794600"},{url:"01/GUIedRandom.html",revision:"867bc541c96adaadf80437d7d36ac5e5"},{url:"01/GUIedRandom2.html",revision:"91f170277b03c304c37df863d594cb6f"},{url:"01/IdeaOfOblivionOcean.html",revision:"822c389fa212389297b78e3f6e6ca3da"},{url:"01/LinearGod1.html",revision:"7f160fc1e3c98c6afc505145697d8cd4"},{url:"01/Markdown转换器.html",revision:"567228b2c5220a911bc9f07dbd8b19be"},{url:"01/Paranoian.html",revision:"a8b9983978d254b023d22beeaf57b582"},{url:"01/Rubbish.html",revision:"49765979f638d1b2de7becb6ac61d39e"},{url:"01/SameandSane.html",revision:"03670867f7ee2b32a08f3c9e7fe38f56"},{url:"01/ScientificInternet.html",revision:"f99e3fe3a8d6c4e42886da311f297213"},{url:"01/sth.html",revision:"f82e7bb156c5fcacf5f255b51f15bda2"},{url:"01/Technoblade.html",revision:"e4af672ef8565ed5a630c488fe0bb6ec"},{url:"01/The-Grimoire-of-Chuishen-2022摄影集.html",revision:"0809e13ac10139f100092a5edc4999ff"},{url:"01/TheReturn1.html",revision:"bd8e66bcf146f99efe6d0d22fafff47d"},{url:"01/Thirteen.html",revision:"ed1539fb64e29d7e7b8bd926cc6bc21d"},{url:"01/五月廿四日纪.html",revision:"f583d29072a38b47c067aeec7466ad38"},{url:"01/塑料时代：轻盈者.html",revision:"76b11a5c6d7da7a6047fb889faa1d3bc"},{url:"01/安息日.html",revision:"029df9ab8970cf4fcd16dfebb203d813"},{url:"01/寻找深秘.html",revision:"55dd9dc93ce17018cb57787304a38c1b"},{url:"01/我与土土.html",revision:"8c04545ac8a832e7c43029deed7633c7"},{url:"01/游记0-我最近都去干嘛了.html",revision:"68ba10a81062416257114cdcc17b716a"},{url:"01/游记1-黄鹤楼的遗憾.html",revision:"7ce2054b4efd220ae395079b38861a86"},{url:"01/游记2-山城是一片流动的火.html",revision:"65c289113cc4f296fd581c42eb128284"},{url:"01/视音频转换器.html",revision:"20065d4972b4d57c3d32acd71d587905"},{url:"01/谨忆何贾谊君.html",revision:"c73ecb8ce76a6e391bdf3190b752049b"},{url:"01/赝品青铜器的挽歌-1.html",revision:"a69bd118156db4d0c1bb416df8e76ef9"},{url:"01/轻盈者44号上的归途.html",revision:"58ea6e4900c84cee83a8e0bb39de8f90"},{url:"01/飘上月球，不死之烟.html",revision:"d1115ae7cff62ccee45caa2d2ac85937"},{url:"01/黄金时代：失落失眠的黄金之城之夜-1.html",revision:"a7447c45f139d0cfd18841470542efe2"},{url:"01/黄金时代：失落失眠的黄金之城之夜-2.html",revision:"733eb41df79016592eceb7fbff2139e8"},{url:"01/黄金时代：赤金之地.html",revision:"3582d3c4cbfa34819893efa43a8fe9d6"},{url:"404.html",revision:"f8cd5265582f39265a65afbd0820e7cf"},{url:"about/index.html",revision:"f7bab87c77d860d0c3ce82a42b0c6fdd"},{url:"android-chrome-192x192.png",revision:"aadd9d06e7fd3b1994522dc4e1f94a6a"},{url:"android-chrome-512x512.png",revision:"b2a90e8073e6c95fa15434143d9b21f2"},{url:"apple-touch-icon.png",revision:"a3253ead01170f8be233009955eebaae"},{url:"archives/2022/05/index.html",revision:"be4cb0a002e39a2caf388d46a6ffee4a"},{url:"archives/2022/05/page/2/index.html",revision:"0875990ba6a886fd4218d7ce32fb94ee"},{url:"archives/2022/06/index.html",revision:"5ffd8ce0d478f97bfcce146faf190073"},{url:"archives/2022/07/index.html",revision:"653f15d6cde1d751ca196aecf0d33e20"},{url:"archives/2022/08/index.html",revision:"cb8272f63b8ac905efc94c6a0d751548"},{url:"archives/2022/09/index.html",revision:"7b65e634e95b12602f311bc18a460531"},{url:"archives/2022/10/index.html",revision:"1b18df2319d2e59d9034a54c47040240"},{url:"archives/2022/index.html",revision:"9fb1f2c48d6f43f594bd04d7107d4cb4"},{url:"archives/2022/page/2/index.html",revision:"96a07eca751b2031ebd24d9af3d8f5ad"},{url:"archives/2022/page/3/index.html",revision:"2e27c9220bfce0e2179349bd6c004eeb"},{url:"archives/2022/page/4/index.html",revision:"494de9f6d9c41cd5787972efc84f6c0e"},{url:"archives/index.html",revision:"7adb2421ef98356b3923669aa13c46dd"},{url:"archives/page/2/index.html",revision:"91274cb337eb3081494108156f0cbbd7"},{url:"archives/page/3/index.html",revision:"02616a4c9f9e7c191e5d83b4e11ffea2"},{url:"archives/page/4/index.html",revision:"27246802af8387ce347dd9525eb42fc8"},{url:"assets/WAID.jpg",revision:"fa3b6415fce01b01774d5c593620d3ad"},{url:"assets/wallpaper-2311325.jpg",revision:"6f01af8d24d6d2de2564af30c32366b7"},{url:"assets/wallpaper-2572384.jpg",revision:"3637ba36e2daaeaa2bb438f65b0bff9c"},{url:"assets/wallpaper-878514.jpg",revision:"2bf9e4c5bf4f5fec55353a46bd3176c6"},{url:"categories/index.html",revision:"8a9b1f1703822476cce3759c057dd473"},{url:"css/first.css",revision:"5c174f3e9bd8080fa8e97d06a4510d66"},{url:"css/Readme.html",revision:"c1421c18e077ab9a9582161d9197e693"},{url:"css/style.0c223e3e.css",revision:"0c223e3edda48ebdc59bf70efc4c3cb2"},{url:"cyberpunk-city-night-view-4k-8l-2560x1440.jpg",revision:"bada20c3ca95c74ceae1dc52de3dafaf"},{url:"favicon-16x16.png",revision:"fa5719495badfdd19d1940c5df84d494"},{url:"favicon-32x32.png",revision:"addef4752f48ee97e3d4ab6f323afc14"},{url:"friends/index.html",revision:"1cdab5e7c01cc53306f421fa005dba00"},{url:"index.html",revision:"ebd11e1115da948af6a207c30eb40dd8"},{url:"js/app.e546c981.js",revision:"e546c9810bcca25a4143004d88478a0e"},{url:"js/heif-api.js",revision:"b753bccc758b42491f031beb2cf74f2c"},{url:"js/heif-extension.js",revision:"87e7f0bb36d66ac71186d641b73fe076"},{url:"js/hevc-decoder.js",revision:"ab16669cab3fb18240c9a8cbc938c137"},{url:"js/image-provider.js",revision:"dd6b15f221dcbc3970f808dd251b7901"},{url:"js/libde265-ie.js",revision:"0fd0c1ca84a8ff392ed949e231f87608"},{url:"js/libde265-selector.js",revision:"eff46f746b07bf7741f84c55bf0e3c39"},{url:"js/libde265.min.js",revision:"c9cc4063807f81ca1bf754abfbb26827"},{url:"js/plugins/aplayer.dbe5eea9.js",revision:"dbe5eea968969672c52022ed895192a0"},{url:"js/plugins/parallax.8bf0ab10.js",revision:"8bf0ab10d50243ae87016af576642cdc"},{url:"js/plugins/rightMenu.d9437285.js",revision:"d9437285263079b1158df42384235b71"},{url:"js/plugins/rightMenus.cd02aa19.js",revision:"cd02aa1922d4d4eece59e4328c8b9686"},{url:"js/plugins/tags/contributors.aec80453.js",revision:"aec8045335d2753a39a48c34fb019662"},{url:"js/plugins/tags/friends.f372da57.js",revision:"f372da57b83083859f60ce19b736a695"},{url:"js/plugins/tags/sites.76bf19b8.js",revision:"76bf19b80414fbce774acddabf6b1d3e"},{url:"js/search/hexo.0e52f222.js",revision:"0e52f22209d509c1fb48fc490396c1de"},{url:"page/2/index.html",revision:"a8dfdbf99ec53d6032576ea6db3a1179"},{url:"page/3/index.html",revision:"3d25e4879179e2190a0874019e15d531"},{url:"page/4/index.html",revision:"2539b1531df5e173ad6d1a4067be9095"},{url:"page/index.html",revision:"7f0a95349c42d7f7eaea35111e9df27c"},{url:"search.css",revision:"67d5e7e68cd1528c4c7e969b58f967f8"},{url:"tags/Python/index.html",revision:"5437db441e7cee61e74845fb281a5d16"},{url:"tags/写作/index.html",revision:"34b310b7fed98c54c6b8cedc4e36e546"},{url:"tags/存货/index.html",revision:"9d0624a8d92022fa11dc5e0c82f90103"},{url:"tags/摄影/index.html",revision:"a28af9cb74c1e606227a37305cb08707"},{url:"tags/文学/index.html",revision:"12fdcbb0814f45ca0382c63021c01fbe"},{url:"tags/文学/page/2/index.html",revision:"04130ab0e038a3bf39d19f470dadb13c"},{url:"tags/日记八集/index.html",revision:"90806a1d4010814caca714f01a99a155"},{url:"tags/正确的中肯的一针见血的/index.html",revision:"173da933544e8beba4d5701619e79fe0"},{url:"tags/游记/index.html",revision:"21b8bdf3a5fa6f211a433b110973e775"},{url:"tags/特殊/index.html",revision:"ea02c08c6cfd92a8e99ad073e6affe14"},{url:"tags/玄云海/index.html",revision:"f4536e021e53d63a0fd2d72e63ac836a"},{url:"tags/白银树之恋/index.html",revision:"8e9439179713b317a37fa9ede3b2070d"},{url:"tags/编程/index.html",revision:"fc1c9d888f866730a52d8f48e8925810"},{url:"tags/诗/index.html",revision:"369a5c7876611cc64c2693d74bb40f15"},{url:"tags/调研/index.html",revision:"6adfa3d9a905581d8c7c8f03ef6323c8"},{url:"tags/鉴赏/index.html",revision:"7c8fedb8aa963e73a38358b60c22bcdb"},{url:"tags/闲聊/index.html",revision:"5ec9d3b48c7e1b0537b4337e7874c0e4"}],{})}));
//# sourceMappingURL=service-worker.js.map
