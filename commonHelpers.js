import{i,S as f}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="42454875-eb3549610f297412779ff13b6",c=async o=>{const s=`https://pixabay.com/api/?key=${p}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`;try{return(await(await fetch(s)).json()).hits}catch(t){return console.error("Error fetching images:",t),[]}c(query).then(t=>{t.length===0?i.error({title:"Помилка",message:"Вибачте, не знайдено зображень, які відповідають вашому запиту. Будь ласка, спробуйте ще раз!"}):renderGallery(t),hideLoader()}).catch(t=>{i.error({title:"Помилка",message:"Під час отримання зображень виникла помилка. Будь ласка, спробуйте ще раз пізніше."}),console.error("Помилка при отриманні зображень:",t),hideLoader()})};i.show({title:"Hey",message:"What would you like to add?"});const m=new f(".gallery a",{});function h(o){const s=document.getElementById("gallery");s.innerHTML=o.map(y).join(""),m.refresh()}function y(o){const{webformatURL:s,largeImageURL:t,tags:n,likes:e,views:r,comments:a,downloads:u}=o;return`<li class="card">
    <a href=${t} > <img
      src="${s}"
      alt="${n}"
    /> </a>
    <ul class="gallery">
      <li class="li-text"><span>Comments</span><span>${a}</span></li>
      <li class="li-text"><span>Views</span><span>${r}</span></li>
      <li class="li-text"><span>Likes</span><span>${e}</span></li>
      <li class="li-text"><span>Download</span><span>${u}</span></li>
    </ul>
  </li>`}const l=document.querySelector("#search-form"),d=document.querySelector(".hide");l.addEventListener("submit",o=>{o.preventDefault();const s=l.elements.input.value;g(),c(s).then(t=>{h(t),L()})});function g(){d.classList.remove("hide")}function L(){d.classList.add("hide")}
//# sourceMappingURL=commonHelpers.js.map
