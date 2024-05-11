import{s as c,i as n}from"./assets/vendor-1d1bb5a2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function l(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=l(e);fetch(e.href,s)}})();const u=document.querySelector(".loader");function d(o){const t="42869495-3eaffa1d7f59c13a6a9af4ac7",l=o.value,r=`https://pixabay.com/api/?key=${t}&q=${l}&orientation=horizontal&safesearch=true`;if(p(),l!=="")return fetch(r).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function p(){u.classList.add("is-open")}function m(o){const t=document.querySelector(".gallery"),l=o.map(r=>`<li class="gallery-list-item">
        <a class="gallery-link" href="${r.largeImageURL}">
            <img class="gallery-list-item-img" src="${r.webformatURL}" alt="${r.tags}"/>        
        </a>
            <div class="text-wrapper">
                <div class="item-text-wrapper">
                    <p class ="gallery-list-item-text-1">Likes</p>
                    <p class ="gallery-list-item-text">${r.likes}</p>
                </div>
                <div class="item-text-wrapper">
                    <p class ="gallery-list-item-text-1">Views</p>
                    <p class ="gallery-list-item-text">${r.views}</p>
                </div>
                <div class="item-text-wrapper">
                    <p class ="gallery-list-item-text-1">Comments</p>
                    <p class ="gallery-list-item-text">${r.comments}</p>
                </div>
                <div class="item-text-wrapper">
                    <p class ="gallery-list-item-text-1">Downloads </p>
                    <p class ="gallery-list-item-text">${r.downloads}</p>
                </div>
            </div>
            
      </li>`).join("");t.insertAdjacentHTML("beforeend",l)}const i=document.querySelector(".form"),f=document.querySelector(".loader"),y=document.querySelector(".search-input");document.querySelector(".start-btn");const g=document.querySelector(".gallery"),h=new c(".gallery a",{});i.addEventListener("submit",o=>{g.innerHTML="",o.preventDefault(),d(y).then(({hits:t})=>{t.length===0&&n.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"}),m(t),h.refresh(),f.classList.remove("is-open")}).catch(t=>console.log(t)),i.reset()});
//# sourceMappingURL=commonHelpers.js.map
