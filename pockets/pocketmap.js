/* Pocket map: tap a pocket, see what it is, go deeper.
   Markup: <div class="pm" data-area="studio-city" data-root="../" data-pages=""></div>
   Data:   pockets/<area>.js sets window.POCKETMAP[area] */
(function(){
  var LEAFLET_JS="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
  var LEAFLET_CSS="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
  function esc(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
  function loadLeaflet(cb){
    if(window.L) return cb();
    var l=document.createElement("link");l.rel="stylesheet";l.href=LEAFLET_CSS;document.head.appendChild(l);
    var s=document.createElement("script");s.src=LEAFLET_JS;s.onload=cb;document.head.appendChild(s);
  }
  function init(root){
    var key=root.getAttribute("data-area"), data=(window.POCKETMAP||{})[key];
    if(!data) return;
    var base=root.getAttribute("data-root")||"../", pages=root.getAttribute("data-pages")||"";
    var P=data.pockets, n=P.length, withPage=P.filter(function(p){return p.page}).length;
    root.innerHTML=
      '<div class="pm-head"><p class="pm-eyebrow">Free pocket map</p>'+
      '<h2>Which '+esc(data.area)+' pocket do you live in?</h2>'+
      '<p>Tap any pocket to open its guide, its history and my video on it. Or pick a name below.</p>'+
      (withPage?'<div class="pm-legend"><span><i class="k1"></i>Full pocket guide</span><span><i class="k2"></i>Guide sent on request</span></div>':'')+
      '</div><div class="pm-body"><div class="pm-map" role="application" aria-label="Map of '+esc(data.area)+' pockets"></div>'+
      '<aside class="pm-panel" aria-live="polite"><p class="pm-kicker">'+esc(data.area)+'</p>'+
      '<h3>Pick a pocket</h3><p class="pm-empty">Tap your pocket on the map to open its guide and video.</p>'+
      '<div class="pm-btns"><a class="pm-btn primary" href="'+base+'free-pocket-analysis.html">What is my home worth?</a></div></aside></div>'+
      '<div class="pm-list"><h3>Every pocket on the map</h3><div class="pm-chips"></div></div>'+
      '<p class="pm-disclaim">There is no official list of pockets. Names follow the neighborhood map neighbors use on Nextdoor, and borders are approximate, so your street may sit a block either way. Not for school, tax or legal purposes.</p>';
    var mapEl=root.querySelector(".pm-map"), panel=root.querySelector(".pm-panel"), chips=root.querySelector(".pm-chips");
    loadLeaflet(function(){
      var map=L.map(mapEl,{scrollWheelZoom:false,zoomSnap:.25,dragging:!L.Browser.mobile});
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:18,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map);
      var layers={}, all=L.featureGroup().addTo(map), current=null;
      function style(p,state){
        var has=!!p.page||withPage===0;
        if(state==="on") return {color:"#0D0B0A",weight:3,fillColor:"#C9A96E",fillOpacity:.55,dashArray:null};
        if(state==="hover") return {color:"#0D0B0A",weight:2,fillColor:"#8B6F52",fillOpacity:has?.5:.3,dashArray:has?null:"4 3"};
        return {color:has?"#0D0B0A":"#8B6F52",weight:has?1.3:1.2,fillColor:"#8B6F52",fillOpacity:has?.28:.08,dashArray:has?null:"4 3"};
      }
      P.forEach(function(p){
        var lyr=L.polygon(p.polys,style(p)).addTo(all);
        lyr.bindTooltip(p.name,{sticky:true,className:"pm-tip",direction:"top"});
        lyr.on("mouseover",function(){if(current!==p.id) lyr.setStyle(style(p,"hover"))});
        lyr.on("mouseout",function(){if(current!==p.id) lyr.setStyle(style(p))});
        lyr.on("click",function(){go(p.id,false)});
        layers[p.id]={p:p,l:lyr};
        var c=document.createElement("button");c.type="button";c.className="pm-chip"+(p.page||withPage===0?"":" soon");c.textContent=p.name;c.setAttribute("data-id",p.id);
        c.onclick=function(){go(p.id,true)};chips.appendChild(c);
      });
      map.fitBounds(all.getBounds(),{padding:[12,12]});
      function go(id,fly){
        var o=layers[id]; if(!o) return;
        if(o.p.page){ select(id,false); location.href=pages+o.p.page; return; }
        select(id,fly);
      }
      function select(id,fly){
        var o=layers[id]; if(!o) return;
        if(current&&layers[current]) layers[current].l.setStyle(style(layers[current].p));
        current=id; o.l.setStyle(style(o.p,"on")); o.l.bringToFront();
        if(fly) map.flyToBounds(o.l.getBounds(),{padding:[40,40],maxZoom:16,duration:.6});
        [].forEach.call(chips.children,function(ch){ch.classList.toggle("on",ch.getAttribute("data-id")===id)});
        var p=o.p, h='<p class="pm-kicker">'+esc(data.area)+' pocket</p><h3>'+esc(p.name)+'</h3>';
        if(p.price) h+='<p class="pm-price">Homes here run '+esc(p.price)+'</p>';
        h+= p.blurb?'<p class="pm-blurb">'+esc(p.blurb)+'</p>':'<p class="pm-blurb">I have the full rundown on '+esc(p.name)+', what homes sell for, the streets people want, and what is coming up. Tell me where to send it and I will get it to you personally.</p>';
        h+='<div class="pm-btns">';
        if(p.page) h+='<a class="pm-btn" href="'+pages+esc(p.page)+'">Read the '+esc(p.name)+' guide</a>';
        if(p.video) h+='<a class="pm-btn" href="https://www.tiktok.com/@cup.of.equity.la/video/'+esc(p.video)+'" target="_blank" rel="noopener">Watch the video</a>';
        if(!p.page) h+='<a class="pm-btn primary" href="'+base+'free-pocket-analysis.html?pocket='+encodeURIComponent(p.name+(data.area?', '+data.area:''))+'&want=guide">Send me the '+esc(p.name)+' guide</a>';
        h+='<a class="pm-btn'+(p.page?' primary':'')+'" href="'+base+'free-pocket-analysis.html?pocket='+encodeURIComponent(p.name+(data.area?', '+data.area:''))+'">I live here. What is my home worth?</a></div>';
        h+='<p class="pm-note">Borders are approximate.</p>';
        panel.innerHTML=h;
        try{var u=new URL(location.href);u.searchParams.set("p",id);history.replaceState(null,"",u)}catch(e){}
        if(fly&&window.innerWidth<860) panel.scrollIntoView({behavior:"smooth",block:"nearest"});
      }
      try{var q=new URL(location.href).searchParams.get("p"); if(q&&layers[q]) select(q,true)}catch(e){}
    });
  }
  function boot(){[].forEach.call(document.querySelectorAll(".pm[data-area]"),init)}
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",boot); else boot();
})();
