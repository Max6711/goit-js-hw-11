import{S as u,i as l}from"./assets/vendor-0fc460d7.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();const f=document.querySelector(".list");let m;const h=r=>{const i=r.hits.map(e=>`
            <li class="item-list">
                <a href="${e.largeImageURL}" class="item-list-link">
                    <img class="item-list-img" src="${e.webformatURL}" alt="${e.tags}">
                </a>
                <div class='markup-info'>
                    <div class="item-list-info-text">
                        <h3 class="item-list-title">Likes</h3>
                        <p class="item-list-text">${e.likes}</p>
                    </div>
                    <div class="item-list-info-text">
                        <h3 class="item-list-title">Views</h3>
                        <p class="item-list-text">${e.views}</p>
                    </div>
                    <div class="item-list-info-text">
                        <h3 class="item-list-title">Comments</h3>
                        <p class="item-list-text">${e.comments}</p>
                    </div>
                    <div class="item-list-info-text">
                        <h3 class="item-list-title">Downloads</h3>
                        <p class="item-list-text">${e.downloads}</p>
                    </div>
                </div>
            </li>
        `).join("");f.innerHTML=i,m=new u(".item-list-link",{captionsData:"alt",captionDelay:250,overlayOpacity:.8}),m.refresh()},p="43813609-98f1a5b8a61f7cd1a2ca10379",y="https://pixabay.com/api/",g=(r="cat")=>{const i=new URLSearchParams({key:p,q:r,orientation:"horizontal"});return fetch(`${y}?${i.toString()}`).then(e=>{if(!e.ok)throw new Error(`Error ${e.status}: ${e.statusText}`);return e.json()})},L=document.querySelector(".js-search-form"),n=document.querySelector(".js-gallery"),d=document.querySelector(".js-loader");let c;function v(r){r.preventDefault();const i=r.target.elements.searchKeyword.value.trim();if(i===""){n.innerHTML="",r.target.reset(),l.show({message:"Input field cannot be empty",position:"topRight",timeout:2e3,color:"red"});return}n.innerHTML="",d.classList.remove("is-hidden"),g(i).then(e=>{if(console.log("Received data:",e),!e.hits||e.hits.length===0){l.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3,color:"red"}),n.innerHTML="";return}h(e),c&&c.destroy(),c=new u(".js-gallery a",{captionDelay:250})}).catch(e=>{console.error("Error fetching photos:",e),l.show({message:"An error occurred while fetching photos",position:"topRight",timeout:2e3,color:"red"})}).finally(()=>{r.target.reset(),d.classList.add("is-hidden")})}L.addEventListener("submit",v);
//# sourceMappingURL=commonHelpers.js.map
