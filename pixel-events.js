(function(){'use strict';
if(window.LINA_PIXELS_CONNECTED)return;window.LINA_PIXELS_CONNECTED=true;
let offerViewed=false;const clicks=new Set();
function send(event,params){try{if(typeof window.fbq==='function')window.fbq('track',event,params)}catch{}try{if(window.ttq&&typeof window.ttq.track==='function')window.ttq.track(event,params)}catch{}}
function process(detail){if(detail.event==='screen_view'&&detail.screen==='offer'&&!offerViewed){offerViewed=true;send('ViewContent',{content_name:'Pack de Natal Lina Criativa BR',content_type:'product_group',currency:'BRL'})}
if(detail.event==='checkout_click'&&['basico','completo'].includes(detail.plan)){const now=Date.now(),key=detail.plan;if(clicks.has(key))return;clicks.add(key);setTimeout(()=>clicks.delete(key),1500);const full=key==='completo';send('InitiateCheckout',{content_name:full?'Pack de Natal Completo':'Mini Bíblia de Natal',content_type:'product',content_ids:[full?'lina-natal-br-completo':'lina-natal-br-basico'],currency:'BRL',value:full?19.9:14.9,num_items:1});}}
// The app can render before this deferred script: process only already queued
// commercial events and then observe new ones. Never send individual answers.
for(const item of window.LINA_QUIZ_EVENTS||[])process(item);
window.addEventListener('lina:quiz',e=>process(e.detail||{}));
})();
