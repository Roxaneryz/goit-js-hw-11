(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const u="42454875-eb3549610f297412779ff13b6",d=async r=>{const s=`https://pixabay.com/api/?key=${u}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`;try{return(await(await fetch(s)).json()).hits}catch(n){return console.error("Error fetching images:",n),[]}};function p(r){const s=document.getElementById("gallery");s.innerHTML=r.map(f).join("")}function f(r){const{webformatURL:s,largeImageURL:n,tags:o,likes:e,views:t,comments:a,downloads:l}=r;return`<li class="card">
    <img
      src="${s}"
      alt="${o}"
    />
    <ul class="gallery">
      <li class="li-text"><span>Comments</span><span>${a}</span></li>
      <li class="li-text"><span>Views</span><span>${t}</span></li>
      <li class="li-text"><span>Likes</span><span>${e}</span></li>
      <li class="li-text"><span>Download</span><span>${l}</span></li>
    </ul>
  </li>`}const i=document.querySelector("#search-form"),c=document.querySelector(".hide");i.addEventListener("submit",r=>{r.preventDefault();const s=i.elements.input.value;m(),d(s).then(n=>{p(n),y()})});function m(){c.classList.remove("hide")}function y(){c.classList.add("hide")}
//# sourceMappingURL=commonHelpers.js.map
