(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b07a82f"],{"11c1":function(t,e,i){var s=i("c437"),a=i("c64e"),r=a;r.v1=s,r.v4=a,t.exports=r},1929:function(t,e,i){"use strict";i("ea6b")},2366:function(t,e){for(var i=[],s=0;s<256;++s)i[s]=(s+256).toString(16).substr(1);function a(t,e){var s=e||0,a=i;return[a[t[s++]],a[t[s++]],a[t[s++]],a[t[s++]],"-",a[t[s++]],a[t[s++]],"-",a[t[s++]],a[t[s++]],"-",a[t[s++]],a[t[s++]],"-",a[t[s++]],a[t[s++]],a[t[s++]],a[t[s++]],a[t[s++]],a[t[s++]]].join("")}t.exports=a},"3e24":function(t,e,i){t.exports=i.p+"img/minus.c60e5638.svg"},"8c6e":function(t,e,i){"use strict";i.r(e);i("14d9");var s=function(){var t=this,e=t._self._c;return e("section",{staticClass:"container",attrs:{id:"section-container"}},[t.cartList.length?e("div",{staticClass:"shopping-cart-info"},[t._m(0),e("div",{staticClass:"item-container"},[e("div",{staticClass:"content"},[t._m(1),t._l(t.cartList,(function(s){return e("div",{key:s.id,staticClass:"item"},[e("div",{staticClass:"image",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.linkToDetail(s.id)}}},[e("img",{staticClass:"photo",attrs:{src:s.image,alt:""}})]),e("div",{staticClass:"description"},[e("h4",{staticClass:"desc desc-title",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.linkToDetail(s.id)}}},[t._v(" "+t._s(s.name)+" ")]),e("h6",{staticClass:"desc"},[e("span",{staticClass:"delivery-title"},[t._v("到貨日")]),t._v(" "+t._s(s.deliveryDate)+" ")])]),e("div",{staticClass:"quantity"},[e("button",{staticClass:"btn minus-btn",attrs:{type:"button",name:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.reduceProductQty(s.id)}}},[e("img",{attrs:{src:i("3e24"),alt:""}})]),e("input",{directives:[{name:"model",rawName:"v-model",value:s.buyQty,expression:"list.buyQty"}],attrs:{type:"text",name:"quatity"},domProps:{value:s.buyQty},on:{keyup:function(e){return e.stopPropagation(),e.preventDefault(),t.productQtyCheck(s.id)},input:function(e){e.target.composing||t.$set(s,"buyQty",e.target.value)}}}),e("button",{staticClass:"btn plus-btn",attrs:{type:"button",name:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.addProductQty(s.id)}}},[e("img",{attrs:{src:i("eb38"),alt:""}})])]),e("div",{staticClass:"price-content"},[e("h4",{staticClass:"mobile-price"},[t._v("小計：")]),e("h4",[t._v("$")]),e("h4",{staticClass:"price"},[t._v(" "+t._s(t._f("dollorsFormat")(s.buyQty*s.price,s.buyQty*s.price))+" ")])]),e("div",{staticClass:"trash"},[e("button",{staticClass:"btn trash-btn",attrs:{type:"button",name:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.deleteCartList(s.id)}}},[e("img",{attrs:{src:i("af22"),alt:""}})])])])}))],2),e("div",{staticClass:"amount"},[e("h4",[t._v("合計： $")]),e("h4",[t._v(" "+t._s(t._f("dollorsFormat")(t.checkOutList.totalAmount,t.checkOutList.totalAmount))+" ")])])]),e("div",{staticClass:"oder-container"},[e("div",{staticClass:"content delivery-content"},[t._m(2),e("div",{staticClass:"form-content"},[e("div",{staticClass:"form"},[e("label",{staticClass:"form-order-info",attrs:{for:"name"}},[e("h4",{staticClass:"name"},[t._v("訂購人姓名：")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.checkOutList.name,expression:"checkOutList.name"}],attrs:{id:"order-name",type:"text",placeholder:"請輸入訂購人姓名"},domProps:{value:t.checkOutList.name},on:{input:function(e){e.target.composing||t.$set(t.checkOutList,"name",e.target.value)}}})])]),e("div",{staticClass:"form"},[e("label",{staticClass:"form-order-info",attrs:{for:"phone"}},[e("h4",{staticClass:"phone"},[t._v("手機號碼：")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.checkOutList.phone,expression:"checkOutList.phone"}],attrs:{id:"order-phone",type:"text",placeholder:"請輸入手機號碼"},domProps:{value:t.checkOutList.phone},on:{input:function(e){e.target.composing||t.$set(t.checkOutList,"phone",e.target.value)}}})])])])])]),e("div",{staticClass:"delivery-container"},[e("div",{staticClass:"content delivery-content"},[t._m(3),e("div",{staticClass:"delivery-methods-content"},[e("div",{staticClass:"delivery"},[e("label",{staticClass:"form-delivery",attrs:{for:"sike","data-id":"1"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.checkOutList.delivery,expression:"checkOutList.delivery"}],attrs:{value:"sike",type:"radio",name:"shipping",id:"sike"},domProps:{checked:t._q(t.checkOutList.delivery,"sike")},on:{change:function(e){return t.$set(t.checkOutList,"delivery","sike")}}}),t._m(4)])]),e("div",{staticClass:"delivery"},[e("label",{staticClass:"form-delivery",attrs:{for:"chitu","data-id":"2"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.checkOutList.delivery,expression:"checkOutList.delivery"}],attrs:{value:"chitu",type:"radio",name:"shipping",id:"chitu"},domProps:{checked:t._q(t.checkOutList.delivery,"chitu")},on:{change:function(e){return t.$set(t.checkOutList,"delivery","chitu")}}}),t._m(5)])])])])]),e("div",{staticClass:"terms-container"},[e("div",{staticClass:"content terms-content"},[t._m(6),e("div",{staticClass:"terms-text-container"},[t._m(7),e("div",{staticClass:"terms-check-container"},[e("label",{attrs:{for:"terms-check"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.checkOutList.agree,expression:"checkOutList.agree"}],attrs:{id:"terms-check",type:"checkbox"},domProps:{checked:Array.isArray(t.checkOutList.agree)?t._i(t.checkOutList.agree,null)>-1:t.checkOutList.agree},on:{change:function(e){var i=t.checkOutList.agree,s=e.target,a=!!s.checked;if(Array.isArray(i)){var r=null,n=t._i(i,r);s.checked?n<0&&t.$set(t.checkOutList,"agree",i.concat([r])):n>-1&&t.$set(t.checkOutList,"agree",i.slice(0,n).concat(i.slice(n+1)))}else t.$set(t.checkOutList,"agree",a)}}}),e("h4",[t._v("我已詳細閱讀以上內容，並同意接受內容所有規定")])])])])])]),e("div",{staticClass:"step-button-container"},[e("button",{staticClass:"step-button btn-back",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.$router.push("/index")}}},[t._v(" 繼續選購 ")]),e("button",{staticClass:"step-button btn-next",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.nextStep.apply(null,arguments)}}},[t._v(" 確認送出 ")])])]):e("div",{staticClass:"shopping-cart-non"},[e("div",{staticClass:"content delivery-content"},[t._m(8),e("div",{staticClass:"form-content cart-non"},[e("img",{staticClass:"logo",attrs:{src:i("9811"),alt:""}}),e("h4",[t._v("購物車目前是空的")]),e("h5",[t._v("您可以回到商品頁面選購商品唷！")]),e("button",{staticClass:"back",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.backToShop.apply(null,arguments)}}},[e("u",[t._v("回到商品頁面")])])])])])])},a=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"title"},[e("h3",[t._v("我的購物車")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"title"},[e("h4",[t._v("商品明細")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"title"},[e("h4",[t._v("訂購人資訊")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"title"},[e("h4",[t._v("取貨門市")])])},function(){var t=this,e=t._self._c;return e("h4",{staticClass:"address"},[t._v(" 汐止門市："),e("br"),t._v(" 新北市汐止區大同路二段999號"),e("br"),t._v(" (近汐止國小)"),e("br"),t._v(" tel：02-12345678 ")])},function(){var t=this,e=t._self._c;return e("h4",{staticClass:"address"},[t._v(" 七堵門市："),e("br"),t._v(" 基隆市七堵區東新街999號"),e("br"),t._v(" (近基隆商工)"),e("br"),t._v(" tel：02-12345678 ")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"title"},[e("h4",[t._v("注意事項")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-content"},[e("p",[t._v(" 由於門市空間及食品效期有限，請大家多多配合："),e("br"),t._v(" 冷藏、蛋糕類商品，請到貨2日內取貨！"),e("br"),t._v(" 冷凍、常溫類商品，請到貨5日內取貨！"),e("br"),t._v(" 如有特殊狀況請聯繫我們，好讓我們有時間處裡。 ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"title"},[e("h4",[t._v("我的購物車")])])}],r=i("2fa3"),n=i("ac0d"),c=i("11c1"),o=i("2f62"),u={mixins:[n["a"]],data(){return{cartList:[],checkOutList:{orderId:-1,items:{},name:"",phone:"",delivery:"",agree:!1,totalAmount:0},orderList:[]}},created(){this.getCartList(),this.accountTotalAmount(),this.getOrderList()},methods:{...Object(o["b"])(["updateCart"]),getCartList(){this.cartList=JSON.parse(localStorage.getItem("shopping-cart"))||[],this.checkOutList.items=JSON.parse(localStorage.getItem("shopping-cart"))||[]},getOrderList(){this.orderList=JSON.parse(localStorage.getItem("order-list"))||[]},addProductQty(t){const e=this.cartList.findIndex(e=>e.id===t);e>=0&&(this.cartList[e].buyQty+=1),this.accountTotalAmount(),this.updateCartList()},reduceProductQty(t){const e=this.cartList.findIndex(e=>e.id===t);1!==this.cartList[e].buyQty?(e>=0&&(this.cartList[e].buyQty-=1),this.accountTotalAmount(),this.updateCartList()):r["a"].fire({icon:"error",title:"數量不得少於1"})},productQtyCheck(t){const e=this.cartList.findIndex(e=>e.id===t);this.cartList[e].buyQty<1&&(r["a"].fire({icon:"error",title:"數量不得少於1"}),this.cartList[e].buyQty=1),this.accountTotalAmount(),this.updateCartList()},deleteCartList(t){const e=window.confirm("確定要將此商品從購物車移除嗎？");!0===e&&(this.cartList=this.cartList.filter(e=>e.id!==t),localStorage.setItem("shopping-cart",JSON.stringify(this.cartList)),r["a"].fire({icon:"success",title:"商品已從購物車移除"}),this.accountTotalAmount(),this.updateCartList(),this.updateCart(!0))},updateCartList(){localStorage.setItem("shopping-cart",JSON.stringify(this.cartList)),this.checkOutList.items=JSON.parse(localStorage.getItem("shopping-cart"))||[]},accountTotalAmount(){this.checkOutList.totalAmount=0,this.cartList.forEach(t=>{this.checkOutList.totalAmount+=t.price*t.buyQty})},linkToDetail(t){this.$router.push("/item/"+t)},backToShop(){this.$router.push("/index")},nextStep(){if(!this.checkOutList.name)return void r["a"].fire({icon:"warning",title:"訂購人姓名不可空白"});if(!this.checkOutList.phone)return void r["a"].fire({icon:"warning",title:"手機號碼不可空白"});if(10!==this.checkOutList.phone.length)return void r["a"].fire({icon:"warning",title:"手機號碼請填正確(10碼)"});if(!this.checkOutList.delivery)return void r["a"].fire({icon:"warning",title:"請選擇取貨門市"});!1===this.checkOutList.agree&&r["a"].fire({icon:"warning",title:"請閱讀注意事項並勾選同意"}),this.checkOutList.items.length&&(this.checkOutList.orderId=Object(c["v4"])());const t=window.confirm("請確認填寫資訊是否皆正確！");!0===t&&(this.orderList.push(this.checkOutList),localStorage.setItem("order-list",JSON.stringify(this.orderList)),localStorage.removeItem("shopping-cart"),this.checkOutList={},this.orderList=[],this.updateCart(!0),this.$router.push("/shopping/checkout"))}}},l=u,d=(i("1929"),i("2877")),h=Object(d["a"])(l,s,a,!1,null,"08d19dec",null);e["default"]=h.exports},af22:function(t,e,i){t.exports=i.p+"img/trash.9b0f64a3.svg"},c437:function(t,e,i){var s,a,r=i("e1f4"),n=i("2366"),c=0,o=0;function u(t,e,i){var u=e&&i||0,l=e||[];t=t||{};var d=t.node||s,h=void 0!==t.clockseq?t.clockseq:a;if(null==d||null==h){var v=r();null==d&&(d=s=[1|v[0],v[1],v[2],v[3],v[4],v[5]]),null==h&&(h=a=16383&(v[6]<<8|v[7]))}var p=void 0!==t.msecs?t.msecs:(new Date).getTime(),m=void 0!==t.nsecs?t.nsecs:o+1,f=p-c+(m-o)/1e4;if(f<0&&void 0===t.clockseq&&(h=h+1&16383),(f<0||p>c)&&void 0===t.nsecs&&(m=0),m>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");c=p,o=m,a=h,p+=122192928e5;var g=(1e4*(268435455&p)+m)%4294967296;l[u++]=g>>>24&255,l[u++]=g>>>16&255,l[u++]=g>>>8&255,l[u++]=255&g;var y=p/4294967296*1e4&268435455;l[u++]=y>>>8&255,l[u++]=255&y,l[u++]=y>>>24&15|16,l[u++]=y>>>16&255,l[u++]=h>>>8|128,l[u++]=255&h;for(var k=0;k<6;++k)l[u+k]=d[k];return e||n(l)}t.exports=u},c64e:function(t,e,i){var s=i("e1f4"),a=i("2366");function r(t,e,i){var r=e&&i||0;"string"==typeof t&&(e="binary"===t?new Array(16):null,t=null),t=t||{};var n=t.random||(t.rng||s)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,e)for(var c=0;c<16;++c)e[r+c]=n[c];return e||a(n)}t.exports=r},e1f4:function(t,e){var i="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(i){var s=new Uint8Array(16);t.exports=function(){return i(s),s}}else{var a=new Array(16);t.exports=function(){for(var t,e=0;e<16;e++)0===(3&e)&&(t=4294967296*Math.random()),a[e]=t>>>((3&e)<<3)&255;return a}}},ea6b:function(t,e,i){},eb38:function(t,e,i){t.exports=i.p+"img/plus.fd92fc1c.svg"}}]);
//# sourceMappingURL=chunk-5b07a82f.fd19f320.js.map