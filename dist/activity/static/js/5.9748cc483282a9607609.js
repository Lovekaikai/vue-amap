webpackJsonp([5],{YR6I:function(t,e){},mJHr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("PJh5"),i=a.n(s),l=a("GQaK"),o=a("oyxo"),n={metaInfo:{title:"签到列表"},props:{probeType:{type:Number,default:1},click:{type:Boolean,default:!0},scrollX:{type:Boolean,default:!1},listenScroll:{type:Boolean,default:!0},pullup:{type:Boolean,default:!0},pulldown:{type:Boolean,default:!0},beforeScroll:{type:Boolean,default:!1},refreshDelay:{type:Number,default:20}},data:function(){return{logo:'this.src="'+a("bzac")+'"',obj:{act_id:"",type:0,page_size:15,page:1},data:[],info:{},count:0}},created:function(){this.obj.act_id=this.$route.params.id,this.loadData()},mounted:function(){document.documentElement.scrollTop=0,document.body.scrollTop=0},methods:{loadData:function(){var t=this;this.$toast.loading({duration:1e3}),o.b.post("/index.php?app=activity&m=act&cmd=116",{data:this.obj}).then(function(e){if(0===e.errcode){for(var a in t.totalPage=Math.ceil((Number(e.info.count)+t.obj.page_size-1)/t.obj.page_size),t.info=e.info,1===t.obj.page?t.data=e.info.data:t.data=t.data.concat(e.info.data),t.data)t.data[a].sign_time_f=i.a.unix(Number(t.data[a].sign_time)).format("YYYY-MM-DD HH:mm:ss");t.count=t.data.length,t.scroll||(t.scroll=new l.a(t.$refs.wrapper,{probeType:t.probeType,click:t.click,scrollX:t.scrollX,mouseWheel:{speed:20,invert:!1,easeTime:300}}),t.pullup&&t.scroll.on("scrollEnd",function(){t.scroll.y<=t.scroll.maxScrollY+50&&(t.obj.page++,t.obj.page<t.totalPage&&t.loadData())}),t.pulldown&&t.scroll.on("touchEnd",function(e){e.y>50&&(t.obj.page=1,t.loadData())}))}})},signed:function(t){var e=this,a={act_id:this.obj.act_id,type:3,location:{lat:"",lng:""},is_outside:this.obj.is_outside,enroll_id:t.enroll_id};o.b.post("/index.php?app=activity&m=act&cmd=114",{data:a}).then(function(t){0===t.errcode&&(weui.alert("签到成功"),e.loadData())})}}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"activityDetail"},[a("div",{staticClass:"weui-panel weui-panel_access sign_people"},[a("div",{staticClass:"left"},[t._v("签到人数")]),t._v(" "),a("div",{staticClass:"right"},[t._v(t._s(t.count||0)+"/"+t._s(t.info.count)+"人")])]),t._v(" "),a("div",{ref:"wrapper",staticClass:"wrapper"},[a("ul",{staticClass:"content"},[t._l(t.data,function(e,s){return 0===Number(t.info.is_outside_act)?a("li",{key:s},[a("div",{staticClass:"weui-panel__bd"},[a("div",{staticClass:"weui-media-box weui-media-box_small-appmsg"},[a("div",{staticClass:"weui-cells"},[a("a",{staticClass:"weui-cell weui-cell_access",attrs:{href:"javascript:;"}},[a("div",{staticClass:"weui-cell__hd"},[a("img",{attrs:{onerror:t.logo,src:e.enroll_pic_url}})]),t._v(" "),a("div",{staticClass:"weui-cell__bd weui-cell_primary"},[a("p",[t._v(t._s(e.enroll_name))]),t._v(" "),a("p",[t._v(t._s(e.phone))])]),t._v(" "),Number(e.sign_state)?a("span",{staticClass:"weui-cell__ft enroll_time"},[t._v("\n                  "+t._s(e.sign_time_f)+"\n                ")]):t._e(),t._v(" "),Number(e.sign_state)?t._e():a("span",{staticClass:"weui-cell__ft btn"},[t._v("\n                  未签到\n                ")])])])])])]):t._e()}),t._v(" "),t._l(t.data,function(e,s){return 1===Number(t.info.is_outside_act)?a("li",{key:s},[a("div",{staticClass:"weui-panel__bd"},[a("div",{staticClass:"weui-media-box weui-media-box_small-appmsg"},[a("div",{staticClass:"weui-cells"},[a("a",{staticClass:"weui-cell weui-cell_access",attrs:{href:"javascript:;"}},[a("div",{staticClass:"weui-cell__hd"},[a("img",{attrs:{onerror:t.logo,src:e.enroll_pic_url}})]),t._v(" "),a("div",{staticClass:"weui-cell__bd weui-cell_primary"},[a("p",[t._v(t._s(e.enroll_name))]),t._v(" "),a("p",[t._v(t._s(e.phone))])]),t._v(" "),Number(e.sign_state)?a("span",{staticClass:"weui-cell__ft enroll_time"},[t._v("\n                  "+t._s(e.sign_time)+"\n                ")]):t._e(),t._v(" "),Number(e.sign_state)?t._e():a("span",{staticClass:"weui-cell__ft btn"},[a("wv-button",{attrs:{type:"warn",mini:!0},on:{click:function(a){t.signed(e)}}},[t._v("签到")])],1)])])])])]):t._e()})],2),t._v(" "),0===Number(t.info.count)?a("div",{attrs:{id:"rec-list"}},[t._m(0),t._v(" "),a("div",{attrs:{id:"comment-list-wrap"}})]):t._e()])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"comment-list"}},[e("div",{staticClass:"has-no-record"},[e("img",{attrs:{src:"data:image/png;base64,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"}}),this._v(" "),e("span",[this._v("暂时没有内容")])])])}]};var r=a("VU/8")(n,c,!1,function(t){a("YR6I")},"data-v-3d68b816",null);e.default=r.exports}});