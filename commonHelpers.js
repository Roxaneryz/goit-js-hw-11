(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const u="42454875-eb3549610f297412779ff13b6",d=async n=>{const r=`https://pixabay.com/api/?key=${u}&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`;try{return(await(await fetch(r)).json()).hits}catch(s){return console.error("Error fetching images:",s),[]}};function p(n){const r=document.getElementById("gallery");r.innerHTML=n.map(f).join("")}function f(n){const{webformatURL:r,largeImageURL:s,tags:o,likes:e,views:t,comments:a,downloads:l}=n;return`<li class="card">
    <img
      src="${r}"
      alt="${o}"
    />
    <ul>
      <li><span>Comments</span><span>${a}</span></li>
      <li><span>Views</span><span>${t}</span></li>
      <li><span>Likes</span><span>${e}</span></li>
      <li><span>Download</span><span>${l}</span></li>
    </ul>
  </li>`}const i=document.querySelector("#search-form"),c=document.querySelector(".hide");i.addEventListener("submit",n=>{n.preventDefault();const r=i.elements.input.value;m(),d(r).then(s=>{p(s),h()})});function m(){c.classList.remove("hide")}function h(){c.classList.add("hide")}
//# sourceMappingURL=commonHelpers.js.map
