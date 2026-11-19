'use strict';
// جميع الألعاب قابلة للتعديل هنا؛ القائمة تجمع الألعاب المذكورة في محادثات ومجلدات المحل.
// توافر لعبة بعينها على أي جهاز يجب تأكيده من إدارة المحل.
const GAMES=[
 ['PUBG Mobile','online','🔥','باتل رويال · محاكي','#e4b64f'],['Valorant','online','🎯','تصويب تكتيكي','#f05a8e'],['Fortnite','online','⚡','باتل رويال وبناء','#8c7bfd'],['League of Legends','online','🪄','MOBA وتعاون','#52b5e8'],['Roblox','online','🧱','عوالم وألعاب متنوعة','#82ddf7'],['Counter-Strike','online','🔫','منافسات وتصويب','#e8b95e'],['CrossFire','online','🎯','أكشن أونلاين','#ed7c9c'],['Minecraft','online','⛏️','بناء ومغامرة','#70c785'],['GTA V','story','🌆','مغامرات ومودات','#f18c92'],['GTA IV','story','🚕','عالم مفتوح ومهمات ليبرتي سيتي — اسأل عن توافرها','#94b5ea'],['Red Dead Redemption 2','story','🤠','عالم مفتوح وقصة','#e28d59'],['God of War','story','🪓','أكشن ومغامرات','#7bb9ff'],['Marvel’s Spider-Man','story','🕷️','أكشن وعالم مفتوح','#ec646d'],['Marvel’s Spider-Man: Miles Morales','story','🕸️','أكشن ومغامرات','#e45d85'],['Far Cry 5','story','🏞️','مغامرات عالم مفتوح','#a5bc8c'],['Assassin’s Creed IV: Black Flag','story','🏴‍☠️','قراصنة ومغامرة','#69a3bf'],['Assassin’s Creed III','story','⚔️','أكشن وقصة','#d49a8b'],['Tomb Raider','story','🏹','استكشاف وألغاز','#92b3c4'],['Rise of the Tomb Raider','story','🧭','مغامرات','#bc9e84'],['Shadow of the Tomb Raider','story','🌴','استكشاف','#87b491'],['Batman: Arkham Vengeance','story','🦇','أكشن بطل خارق','#8790d2'],['Max Payne','story','🕶️','أكشن كلاسيكي','#bbb2b3'],['Metal Gear Solid V','story','🛰️','تسلل وأكشن','#99a2ab'],['Resident Evil 3','story','🧟','رعب وبقاء','#a9bd9e'],['The House of the Dead','action','👻','رعب وتصويب','#bd87b0'],['BLUR','racing','🏎️','سباقات وتحديات مع أصحابك','#b683ff'],['Need for Speed','racing','🏁','سباقات وسرعة','#5fd4ea'],['CarX Street','racing','🚘','سباقات الشوارع','#ff9b68'],['Just Cause 3','action','💥','أكشن وعالم مفتوح','#f0af80'],['Just Cause 4','action','🌪️','أكشن ومغامرة','#96b5f2'],['Call of Duty','action','🪖','تصويب وحرب','#c8b59d'],['World War Z','action','🧟','أكشن تعاوني','#98bc91'],['Plants vs. Zombies','action','🌻','استراتيجية ومرح','#83c583'],['Plants vs. Zombies 2','action','🌱','دفاع واستراتيجية','#92ca70'],['Stronghold Crusader','action','🏰','استراتيجية','#e5b477'],['GTA Vice City','story','🌴','عالم مفتوح كلاسيكي','#ec9cae'],['GTA San Andreas','story','🚲','مغامرات كلاسيكية','#d2bb77'],['Shank 2','action','🥊','أكشن جانبي','#e49b8a'],['Tekken 3','action','🥋','قتال','#a08adc'],['Metal Slug X','action','🚀','أكشن كلاسيكي','#f3bb67'],['Chicken Invaders','action','🐔','أركيد ممتع','#efc46f'],['Hitman 2','story','🎩','تسلل ومهمات','#b8b5c8']
];
const PRODUCTS=[
 {name:'NVIDIA RTX 3060 Ti',detail:'8GB GDDR6 · مستعمل · التجربة متاحة',price:19000,icon:'⚡',tone:'#b182ff'},
 {name:'NVIDIA RTX 3060',detail:'12GB GDDR6 · مستعمل · التجربة متاحة',price:15000,icon:'💎',tone:'#74abff'},
 {name:'NVIDIA GTX 1060',detail:'3GB GDDR5 · مستعمل · التجربة متاحة',price:4200,icon:'🎮',tone:'#a5afff'},
 {name:'AMD RX 580',detail:'4GB GDDR5 · مستعمل · التجربة متاحة',price:2300,icon:'🔥',tone:'#fa7b8c'},
 {name:'DDR4 RAM 8GB / 3200MHz',detail:'عدد 2 قطعة حسب آخر إعلان · تأكد من الماركة',price:3000,icon:'▤',tone:'#6bdfff'},
 {name:'Crucial DDR4 RAM 8GB / 2666MHz',detail:'عدد 2 قطعة حسب آخر إعلان',price:2600,icon:'▤',tone:'#bc8cf9'}
];
const label={online:'أونلاين',story:'قصة وتختيم',racing:'سباقات',action:'أكشن ومتنوعة'};
// كل الصور محلية داخل assets؛ مفيش روابط صور خارجية معرضة للاختفاء.
// لو لعبة ملهاش صورة مستقلة بنعرض صورة فنية للتصنيف بدل الإيموجي.
const GAME_ART={
 'PUBG Mobile':'pubg','Valorant':'valorant','Fortnite':'fortnite','League of Legends':'league',
 'Roblox':'roblox','Counter-Strike':'counterstrike','GTA V':'gtav',
 'Red Dead Redemption 2':'rdr2','God of War':'godwar','Marvel’s Spider-Man':'spiderman',
 'Marvel’s Spider-Man: Miles Morales':'spiderman','BLUR':'blur',
 'Need for Speed':'nfs','CrossFire':'counterstrike','CarX Street':'blur',
 'GTA Vice City':'gtav','GTA San Andreas':'gtav','World War Z':'battlefield',
 'Call of Duty':'battlefield','Battlefield':'battlefield',
};
const artFor=(n,c)=>'/assets/games/'+(GAME_ART[n]||'theme-'+c)+'.webp';
const grid=document.getElementById('gamesGrid');let currentCategory='all';
function escapeHtml(str){return String(str).replace(/[&<>"']/g,s=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));}
function renderGames(){
 const q=(document.getElementById('gameSearch').value||'').trim().toLowerCase();
 const items=GAMES.filter(([n,c])=>(currentCategory==='all'||c===currentCategory)&&n.toLowerCase().includes(q));
 if(!items.length){grid.innerHTML='<div class="empty-games">اللعبة مش ظاهرة في القائمة؟ ابعت اسمها وإحنا هنشوف إمكانية توفيرها 🎮</div>';return;}
 grid.innerHTML=items.map(([n,c,icon,desc,color])=>`<article class="game-card game-card-art" style="--accent:${color}">
   <div class="game-cover"><img src="${artFor(n,c)}" alt="تصميم بصري للعبة ${escapeHtml(n)}" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='/assets/games/theme-${c}.webp'"><span class="game-category">${label[c]}</span></div>
   <div class="game-description"><h3>${escapeHtml(n)}</h3><p>${escapeHtml(desc)}</p><button aria-label="استفسار عن ${escapeHtml(n)}" data-game="${escapeHtml(n)}">استفسر عن اللعبة <span aria-hidden="true">↗</span></button></div>
 </article>`).join('');
}
renderGames();
document.getElementById('gameSearch').addEventListener('input',renderGames);
document.getElementById('filters').addEventListener('click',e=>{const b=e.target.closest('[data-category]');if(!b)return;currentCategory=b.dataset.category;document.querySelectorAll('.filter').forEach(x=>x.classList.toggle('active',x===b));renderGames()});
grid.addEventListener('click',e=>{const b=e.target.closest('[data-game]');if(!b)return;const msg=`أهلاً بركات نت، عايز أستفسر عن لعبة ${b.dataset.game} وهل متاحة للحجز واللعب عندكم؟`;window.open('https://wa.me/201043554348?text='+encodeURIComponent(msg),'_blank','noopener')});
const PRODUCT_ART={
 'NVIDIA RTX 3060 Ti':'rtx3060ti','NVIDIA RTX 3060':'rtx3060',
 'NVIDIA GTX 1060':'gtx1060','AMD RX 580':'rx580',
 'DDR4 RAM 8GB / 3200MHz':'ram3200','Crucial DDR4 RAM 8GB / 2666MHz':'ram2666'
};
const productGrid=document.getElementById('productsGrid');
productGrid.innerHTML=PRODUCTS.map(p=>`<article class="product-card product-card-art" style="--tone:${p.tone}">
  <div class="product-photo"><img src="/assets/products/${PRODUCT_ART[p.name]}.webp" loading="lazy" decoding="async" alt="صورة توضيحية ${escapeHtml(p.name)}"><span>صور توضيحية</span></div>
  <div class="product-body"><h4>${escapeHtml(p.name)}</h4><div class="product-meta">${escapeHtml(p.detail)}</div><div class="product-bottom"><span class="product-price">${p.price.toLocaleString('en-US')} <small>جنيه</small></span><a href="https://wa.me/201043554348?text=${encodeURIComponent('أهلاً بركات نت، عايز أستفسر عن سعر وتوفر '+p.name+' بسعر '+p.price+' جنيه')}" target="_blank" rel="noopener">استفسر ↗</a></div></div>
</article>`).join('');
const menu=document.getElementById('nav'),menuBtn=document.getElementById('menuBtn');menuBtn.addEventListener('click',()=>{const isOpen=menu.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(isOpen));menuBtn.textContent=isOpen?'✕':'☰'});menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');menuBtn.setAttribute('aria-expanded','false');menuBtn.textContent='☰'}));
const topBtn=document.getElementById('topBtn');window.addEventListener('scroll',()=>topBtn.classList.toggle('show',window.scrollY>500),{passive:true});topBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));document.getElementById('year').textContent=new Date().getFullYear();
const dateInput=document.querySelector('input[name="date"]');const localNow=new Date();const y=localNow.getFullYear(),m=String(localNow.getMonth()+1).padStart(2,'0'),d=String(localNow.getDate()).padStart(2,'0');dateInput.min=`${y}-${m}-${d}`;
document.getElementById('bookingForm').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.currentTarget);const name=String(f.get('name')||'').trim(),count=Number(f.get('count'));if(!name||!Number.isInteger(count)||count<1||count>20){alert('من فضلك اكتب الاسم وعدد الأجهزة بشكل صحيح.');return;}const msg=['أهلاً بركات نت 👑','حابب أعمل طلب من الموقع:','الاسم: '+name,'نوع الطلب: '+f.get('type'),'عدد الأجهزة / الأشخاص: '+count,f.get('date')?'التاريخ المقترح: '+f.get('date'):'',f.get('time')?'الوقت المقترح: '+f.get('time'):'',f.get('details')?'التفاصيل: '+String(f.get('details')).trim():'','من فضلك أكدوا التوفر والسعر والحجز.'].filter(Boolean).join('\n');window.open('https://wa.me/201043554348?text='+encodeURIComponent(msg),'_blank','noopener,noreferrer')});
