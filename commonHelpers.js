import{i as l,S as f}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="42454875-eb3549610f297412779ff13b6";function p(o){const s=`https://pixabay.com/api/?key=${m}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(s).then(r=>{if(!r.ok)throw new Error("");return r.json()}).then(r=>r.hits.length>0?r.hits:(l.error({position:"center",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),[])).catch(r=>(l.error({position:"center",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),[]))}const d=new f(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function h(o){const s=document.getElementById("gallery");s.innerHTML=o.map(y).join(""),d.refresh()}function y(o){const{webformatURL:s,largeImageURL:r,tags:i,likes:e,views:t,comments:n,downloads:u}=o;return`<li class="card">
    <a href=${r} > <img
      src="${s}"
      alt="${i}"
    /> </a>
    <ul class="gallery">
      <li class="li-text"><span>Comments</span><span>${n}</span></li>
      <li class="li-text"><span>Views</span><span>${t}</span></li>
      <li class="li-text"><span>Likes</span><span>${e}</span></li>
      <li class="li-text"><span>Download</span><span>${u}</span></li>
    </ul>
  </li>`}const a=document.querySelector("#search-form"),c=document.querySelector(".hide");a.addEventListener("submit",o=>{o.preventDefault();const s=a.elements.input.value;g(),p(s).then(r=>{h(r),L(),b()})});function g(){c.classList.remove("hide")}function L(){c.classList.add("hide")}function b(){a.reset()}
//# sourceMappingURL=commonHelpers.js.map
