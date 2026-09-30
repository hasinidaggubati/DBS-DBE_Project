const API_BASE = "http://localhost:8080";
const T={
en:{home:"Home",crop:"Crop Recommendation",weather:"Weather",tools:"Farmer Tools",smart:"SMART FARMING ASSISTANT",heroTitle:"Better decisions. Better crops. Better farming.",heroText:"AgriSahayak brings crop recommendations, live weather and practical farmer tools into one simple dashboard.",start:"Get Crop Recommendation →",cropCard:"Crop Recommendation",cropDesc:"Use soil and climate inputs to find suitable crops.",weatherCard:"Live Weather",weatherDesc:"Search any city and get current conditions and a 7-day forecast.",toolsCard:"Farmer Tools",toolsDesc:"Quick calculators and practical farming guidance.",tip:"Today's farming tip",cropTitle:"Crop Recommendation",cropSub:"Enter your field conditions and get a ranked recommendation.",fieldInputs:"Field Inputs",recommend:"Recommend Crops",result:"Recommendation",weatherTitle:"Weather Dashboard",weatherSub:"Search a city or use your current location.",toolsTitle:"Farmer Tools",toolsSub:"Simple utilities for everyday farm decisions."},
hi:{home:"होम",crop:"फसल सुझाव",weather:"मौसम",tools:"किसान उपकरण",smart:"स्मार्ट खेती सहायक",heroTitle:"बेहतर निर्णय। बेहतर फसल। बेहतर खेती।",heroText:"एग्रीसहायक फसल सुझाव, लाइव मौसम और उपयोगी किसान उपकरण एक ही डैशबोर्ड में देता है।",start:"फसल सुझाव प्राप्त करें →",cropCard:"फसल सुझाव",cropDesc:"मिट्टी और जलवायु के आधार पर उपयुक्त फसल चुनें।",weatherCard:"लाइव मौसम",weatherDesc:"किसी भी शहर का वर्तमान मौसम और 7-दिन का पूर्वानुमान देखें।",toolsCard:"किसान उपकरण",toolsDesc:"रोज़मर्रा के खेती के लिए उपयोगी कैलकुलेटर।",tip:"आज की खेती की सलाह",cropTitle:"फसल सुझाव",cropSub:"अपने खेत की जानकारी भरें और सुझाव प्राप्त करें।",fieldInputs:"खेत की जानकारी",recommend:"फसल सुझाएँ",result:"सुझाव",weatherTitle:"मौसम डैशबोर्ड",weatherSub:"शहर खोजें या वर्तमान स्थान का उपयोग करें।",toolsTitle:"किसान उपकरण",toolsSub:"रोज़मर्रा के खेती के लिए सरल उपकरण।"},
te:{home:"హోమ్",crop:"పంట సిఫార్సు",weather:"వాతావరణం",tools:"రైతు సాధనాలు",smart:"స్మార్ట్ వ్యవసాయ సహాయకుడు",heroTitle:"మెరుగైన నిర్ణయాలు. మెరుగైన పంటలు. మెరుగైన వ్యవసాయం.",heroText:"AgriSahayak పంట సిఫార్సులు, ప్రత్యక్ష వాతావరణం మరియు రైతు సాధనాలను ఒకే డాష్‌బోర్డ్‌లో అందిస్తుంది.",start:"పంట సిఫార్సు పొందండి →",cropCard:"పంట సిఫార్సు",cropDesc:"నేల మరియు వాతావరణ సమాచారంతో సరైన పంటను ఎంచుకోండి.",weatherCard:"ప్రత్యక్ష వాతావరణం",weatherDesc:"ఏ నగరానికైనా ప్రస్తుత వాతావరణం మరియు 7 రోజుల అంచనాను చూడండి.",toolsCard:"రైతు సాధనాలు",toolsDesc:"రోజువారీ వ్యవసాయానికి ఉపయోగకరమైన కాలిక్యులేటర్లు.",tip:"ఈరోజు వ్యవసాయ సూచన",cropTitle:"పంట సిఫార్సు",cropSub:"మీ పొలం పరిస్థితులను నమోదు చేసి సిఫార్సు పొందండి.",fieldInputs:"పొలం వివరాలు",recommend:"పంటను సిఫార్సు చేయండి",result:"సిఫార్సు",weatherTitle:"వాతావరణ డాష్‌బోర్డ్",weatherSub:"నగరాన్ని వెతకండి లేదా ప్రస్తుత స్థానాన్ని ఉపయోగించండి.",toolsTitle:"రైతు సాధనాలు",toolsSub:"రోజువారీ వ్యవసాయానికి సరళమైన సాధనాలు."},
ta:{home:"முகப்பு",crop:"பயிர் பரிந்துரை",weather:"வானிலை",tools:"விவசாய கருவிகள்",smart:"ஸ்மார்ட் விவசாய உதவியாளர்",heroTitle:"சிறந்த முடிவுகள். சிறந்த பயிர்கள். சிறந்த விவசாயம்.",heroText:"AgriSahayak பயிர் பரிந்துரைகள், நேரடி வானிலை மற்றும் விவசாய கருவிகளை ஒரே டாஷ்போர்டில் வழங்குகிறது.",start:"பயிர் பரிந்துரை பெறுங்கள் →",cropCard:"பயிர் பரிந்துரை",cropDesc:"மண் மற்றும் காலநிலை தகவல்களைப் பயன்படுத்தி பொருத்தமான பயிரை தேர்வு செய்யுங்கள்.",weatherCard:"நேரடி வானிலை",weatherDesc:"எந்த நகரத்திற்கும் தற்போதைய வானிலை மற்றும் 7 நாள் முன்னறிவிப்பைப் பார்க்கலாம்.",toolsCard:"விவசாய கருவிகள்",toolsDesc:"தினசரி விவசாயத்திற்கு விரைவான கணக்கீடுகள்.",tip:"இன்றைய விவசாய குறிப்பு",cropTitle:"பயிர் பரிந்துரை",cropSub:"உங்கள் வயல் நிலைகளை உள்ளிட்டு பரிந்துரையைப் பெறுங்கள்.",fieldInputs:"வயல் தகவல்கள்",recommend:"பயிர்களை பரிந்துரைக்கவும்",result:"பரிந்துரை",weatherTitle:"வானிலை டாஷ்போர்டு",weatherSub:"நகரத்தைத் தேடுங்கள் அல்லது தற்போதைய இருப்பிடத்தைப் பயன்படுத்துங்கள்.",toolsTitle:"விவசாய கருவிகள்",toolsSub:"தினசரி விவசாயத்திற்கு எளிய கருவிகள்."}
};

const tips={
en:["Check soil moisture before irrigation.","Avoid spraying pesticides just before rain.","Record crop observations regularly.","Use the weather forecast to plan field work."],
hi:["सिंचाई से पहले मिट्टी की नमी जाँचें।","बारिश से ठीक पहले कीटनाशक का छिड़काव न करें।","फसल की स्थिति नियमित रूप से दर्ज करें।","खेत के काम की योजना मौसम के अनुसार बनाएं।"],
te:["నీటిపారుదల ముందు నేల తేమను తనిఖీ చేయండి.","వర్షానికి ముందు పురుగుమందులు పిచికారీ చేయవద్దు.","పంట పరిస్థితులను క్రమం తప్పకుండా నమోదు చేయండి.","వాతావరణ అంచనాతో పొలం పనులను ప్లాన్ చేయండి."],
ta:["நீர்ப்பாசனத்திற்கு முன் மண் ஈரப்பதத்தை சரிபார்க்கவும்.","மழைக்கு முன் பூச்சிக்கொல்லி தெளிப்பதை தவிர்க்கவும்.","பயிர் நிலையை தொடர்ந்து பதிவு செய்யவும்.","வானிலை முன்னறிவிப்பின் அடிப்படையில் வயல் பணிகளை திட்டமிடவும்."]
};
let lang="en";

function showPage(id){
 document.querySelectorAll(".page").forEach(x=>x.classList.remove("active-page"));
 document.getElementById(id).classList.add("active-page");
 document.querySelectorAll(".nav").forEach(x=>x.classList.toggle("active",x.dataset.page===id));
 window.scrollTo({top:0,behavior:"smooth"});
}
document.querySelectorAll(".nav").forEach(b=>b.onclick=()=>showPage(b.dataset.page));

function applyLanguage(){
 lang=document.getElementById("language").value;
 document.querySelectorAll("[data-i18n]").forEach(el=>{const k=el.dataset.i18n;if(T[lang][k])el.textContent=T[lang][k]});
 document.getElementById("dailyTip").textContent=" "+tips[lang][new Date().getDate()%tips[lang].length];
}
document.getElementById("language").addEventListener("change",applyLanguage);
applyLanguage();

document.getElementById("cropForm").addEventListener("submit",async e=>{
 e.preventDefault();
 const f=new FormData(e.target), body=Object.fromEntries(f.entries());
 ["nitrogen","phosphorus","potassium","temperature","rainfall"].forEach(k=>body[k]=Number(body[k]));
 const box=document.getElementById("cropResult"); box.innerHTML="<div class='empty'>Calculating…</div>";
 try{
   const r=await fetch(API_BASE+"/api/crop-recommendation",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)});
   if(!r.ok) throw new Error();
   const d=await r.json(), rec=d.recommendation;
   box.innerHTML=`<div class="crop-main"><div class="crop-name">🌾 ${rec.crop}</div><div class="score">Suitability score: ${rec.score}%</div></div><div class="alts"><b>Other suitable crops</b>${d.alternatives.map(x=>`<div class="alt"><span>${x.crop}</span><strong>${x.score}%</strong></div>`).join("")}</div>`;
 }catch{
   // Offline fallback: the same basic recommendation logic runs in the browser.
   const candidates = localCropRecommendation(body);
   const rec = candidates[0];
   box.innerHTML=`<div class="crop-main"><div class="crop-name">🌾 ${rec.crop}</div><div class="score">Suitability score: ${rec.score}% <span class="pending">(Offline)</span></div></div><div class="alts"><b>Other suitable crops</b>${candidates.slice(1,4).map(x=>`<div class="alt"><span>${x.crop}</span><strong>${x.score}%</strong></div>`).join("")}</div>`;
 }
});

function localCropRecommendation(b){
 const crops=[
  ["Rice",20,35,150,90,80,120], ["Wheat",10,25,80,70,65,90],
  ["Maize",18,32,70,75,55,80], ["Cotton",21,35,60,70,55,85],
  ["Groundnut",20,32,50,65,45,70], ["Millet",22,38,40,60,35,60]
 ];
 const soil=String(b.soil||"loamy").toLowerCase(), n=Number(b.nitrogen), pp=Number(b.phosphorus), k=Number(b.potassium), t=Number(b.temperature), rain=Number(b.rainfall);
 const range=(x,a,z)=>x>=a&&x<=z?1:Math.max(0,1-Math.abs(x-(x<a?a:z))/Math.max(1,z-a));
 return crops.map(c=>{let [crop,t1,t2,r,n1,p1,k1]=c;let score=range(t,t1,t2)*30+range(rain,r,r+120)*30+Math.max(0,1-Math.abs(n-n1)/Math.max(n1,1))*20+Math.max(0,1-Math.abs(pp-p1)/Math.max(p1,1))*10+Math.max(0,1-Math.abs(k-k1)/Math.max(k1,1))*10;if(soil.includes("loam")||soil.includes("alluvial"))score+=8;if(soil.includes("black")&&t>=20&&t<=35)score+=8;if(soil.includes("sandy")&&rain<120)score+=5;return {crop,score:Math.round(Math.min(100,score)*10)/10}}).sort((a,b)=>b.score-a.score);
}

const weatherText={
en:{humidity:"Humidity",feels:"Feels like",rain:"Precipitation",wind:"Wind",high:"High",low:"Low"},
hi:{humidity:"नमी",feels:"महसूस",rain:"वर्षा",wind:"हवा",high:"अधिकतम",low:"न्यूनतम"},
te:{humidity:"తేమ",feels:"అనుభూతి",rain:"వర్షపాతం",wind:"గాలి",high:"గరిష్ఠ",low:"కనిష్ఠ"},
ta:{humidity:"ஈரப்பதம்",feels:"உணரப்படும்",rain:"மழைப்பொழிவு",wind:"காற்று",high:"அதிகபட்சம்",low:"குறைந்தபட்சம்"}
};
function weatherIcon(code){if(code===0)return"☀️";if(code<=3)return"🌤️";if(code<=48)return"🌫️";if(code<=67)return"🌧️";if(code<=77)return"🌨️";return"⛈️"}
async function loadWeather(lat,lon,name){
 const status=document.getElementById("weatherStatus");status.innerHTML="<div class='notice'>Loading live weather…</div>";
 try{
   const r=await fetch(`${API_BASE}/api/weather?latitude=${lat}&longitude=${lon}`);if(!r.ok)throw new Error();
   const d=await r.json(),c=d.current,dy=d.daily,t=weatherText[lang];
   const days=dy.time.map((date,i)=>`<div class="day"><b>${new Date(date).toLocaleDateString(undefined,{weekday:"short"})}</b><div>${weatherIcon(dy.weather_code[i])}</div><div>${Math.round(dy.temperature_2m_max[i])}° / ${Math.round(dy.temperature_2m_min[i])}°</div></div>`).join("");
   document.getElementById("weatherResult").innerHTML=`<div class="weather-card"><h3>📍 ${name||"Selected location"}</h3><div class="weather-now"><div class="weather-icon">${weatherIcon(c.weather_code)}</div><div><div class="temp">${Math.round(c.temperature_2m)}°C</div><div>${t.feels}: ${Math.round(c.apparent_temperature)}°C</div></div></div><div class="weather-meta"><div class="metric"><small>${t.humidity}</small><b>${c.relative_humidity_2m}%</b></div><div class="metric"><small>${t.rain}</small><b>${c.precipitation} mm</b></div><div class="metric"><small>${t.wind}</small><b>${Math.round(c.wind_speed_10m)} km/h</b></div><div class="metric"><small>${t.feels}</small><b>${Math.round(c.apparent_temperature)}°C</b></div></div><h3>7-day forecast</h3><div class="forecast">${days}</div></div>`;
   status.innerHTML="";
 }catch{status.innerHTML="<div class='notice'>Weather service could not be reached. Check your internet connection and try again.</div>"}
}
async function searchCity(){
 const city=document.getElementById("city").value.trim();if(!city)return;
 const s=document.getElementById("weatherStatus");s.innerHTML="<div class='notice'>Finding location…</div>";
 try{
   const r=await fetch(`${API_BASE}/api/geocode?city=${encodeURIComponent(city)}`),d=await r.json();
   if(!d.results?.length)throw new Error();
   const x=d.results[0];loadWeather(x.latitude,x.longitude,[x.name,x.admin1,x.country].filter(Boolean).join(", "));
 }catch{s.innerHTML="<div class='notice'>City not found. Try another city name.</div>"}
}
document.getElementById("searchWeather").onclick=searchCity;
document.getElementById("city").addEventListener("keydown",e=>{if(e.key==="Enter")searchCity()});
document.getElementById("useLocation").onclick=()=>{
 if(!navigator.geolocation){alert("Geolocation is not supported by this browser.");return}
 document.getElementById("weatherStatus").innerHTML="<div class='notice'>Getting your location…</div>";
 navigator.geolocation.getCurrentPosition(p=>loadWeather(p.coords.latitude,p.coords.longitude,"Current location"),()=>document.getElementById("weatherStatus").innerHTML="<div class='notice'>Location permission was not granted.</div>");
};

function calcWater(){const a=Number(document.getElementById("area").value),d=Number(document.getElementById("depth").value);const liters=a*d*4046.856/1000;document.getElementById("waterOut").textContent=`Estimated water: ${Math.round(liters).toLocaleString()} L`;}
function calcFert(){const f=Number(document.getElementById("fert").value),n=Number(document.getElementById("apps").value);document.getElementById("fertOut").textContent=`About ${(f/n).toFixed(1)} kg per application`;}
document.querySelectorAll(".checks input").forEach(x=>x.onchange=()=>{const n=document.querySelectorAll(".checks input:checked").length;document.getElementById("checkOut").textContent=`${n} / 5 completed`;});

/* ---------- Authentication + offline-first crop storage ---------- */
const SESSION_KEY="agri_current_farmer";
const QUEUE_KEY="agri_offline_queue";
const LOCAL_RECORDS_KEY="agri_local_crop_records";

function currentFarmer(){try{return JSON.parse(localStorage.getItem(SESSION_KEY)||"null")}catch{return null}}
function queue(){try{return JSON.parse(localStorage.getItem(QUEUE_KEY)||"[]")}catch{return []}}
function localRecords(){try{return JSON.parse(localStorage.getItem(LOCAL_RECORDS_KEY)||"[]")}catch{return []}}
function setQueue(x){localStorage.setItem(QUEUE_KEY,JSON.stringify(x))}
function setLocalRecords(x){localStorage.setItem(LOCAL_RECORDS_KEY,JSON.stringify(x))}
function uid(){return "local-"+Date.now()+"-"+Math.random().toString(36).slice(2,8)}

function setOnlineBadge(){
 const el=document.getElementById("connectionBadge");
 el.className="connection "+(navigator.onLine?"online":"offline");
 el.textContent=navigator.onLine?"● Online":"● Offline";
}
function openApp(){
 document.getElementById("loginOverlay").style.display="none";
 const f=currentFarmer();
 document.getElementById("farmerName").textContent=f?`👨‍🌾 ${f.name}`:"Offline Farmer";
 refreshHistory();
 syncOffline();
}
function showAuthMsg(id,msg){document.getElementById(id).textContent=msg}
document.getElementById("loginTab").onclick=()=>{
 document.getElementById("loginTab").classList.add("active");document.getElementById("registerTab").classList.remove("active");
 document.getElementById("loginForm").classList.remove("hidden");document.getElementById("registerForm").classList.add("hidden");
};
document.getElementById("registerTab").onclick=()=>{
 document.getElementById("registerTab").classList.add("active");document.getElementById("loginTab").classList.remove("active");
 document.getElementById("registerForm").classList.remove("hidden");document.getElementById("loginForm").classList.add("hidden");
};

function migrateOfflineRecordsToFarmer(farmer){
 const records=localRecords().filter(x=>x.farmerId==="offline-local");
 if(!records.length)return;
 const updated=localRecords().map(x=>x.farmerId==="offline-local"?{...x,farmerId:farmer.id,synced:false}:x);
 setLocalRecords(updated);
 let q=queue();
 for(const r of records) q.push({...r,farmerId:farmer.id});
 setQueue(q);
}

document.getElementById("registerForm").onsubmit=async e=>{
 e.preventDefault(); const body={name:regName.value.trim(),phone:regPhone.value.trim(),password:regPassword.value};
 if(!navigator.onLine){showAuthMsg("regMsg","Internet is required to create your registered account. Use Continue offline for local entries.");return}
 try{
  const r=await fetch(API_BASE+"/api/farmer/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)});
  const d=await r.json(); if(!d.success)throw new Error(d.message);
  localStorage.setItem(SESSION_KEY,JSON.stringify(d.farmer)); migrateOfflineRecordsToFarmer(d.farmer); openApp();
 }catch(err){showAuthMsg("regMsg",err.message||"Registration failed.");}
};

document.getElementById("loginForm").onsubmit=async e=>{
 e.preventDefault(); const phone=loginPhone.value.trim(),password=loginPassword.value;
 if(!navigator.onLine){showAuthMsg("loginMsg","You are offline. Use Continue offline to work with locally saved data.");return}
 try{
  const r=await fetch(API_BASE+"/api/farmer/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({phone,password})});
  const d=await r.json(); if(!d.success)throw new Error(d.message);
  localStorage.setItem(SESSION_KEY,JSON.stringify(d.farmer)); migrateOfflineRecordsToFarmer(d.farmer); openApp();
 }catch(err){showAuthMsg("loginMsg",err.message||"Login failed.");}
};
document.getElementById("offlineMode").onclick=()=>{
 let f=currentFarmer();
 if(!f){f={id:"offline-local",name:"Offline Farmer",phone:"",offline:true};localStorage.setItem(SESSION_KEY,JSON.stringify(f))}
 openApp();
};
document.getElementById("logoutBtn").onclick=()=>{localStorage.removeItem(SESSION_KEY);location.reload()};
window.addEventListener("online",()=>{setOnlineBadge(); const f=currentFarmer(); if(f?.offline && queue().length){ document.getElementById("loginOverlay").style.display="flex"; showAuthMsg("loginMsg","Internet is back. Login/register to sync your offline crop records."); } else syncOffline();});
window.addEventListener("offline",setOnlineBadge);
setOnlineBadge();

async function syncOffline(){
 const f=currentFarmer(); if(!f||!navigator.onLine||f.offline)return;
 let q=queue(); if(!q.length)return;
 const remaining=[];
 for(const item of q){
  try{
   const r=await fetch(`${API_BASE}/api/farmer/${encodeURIComponent(f.id)}/crops`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(item)});
   const d=await r.json(); if(!d.success)throw new Error();
   const lr=localRecords(); const i=lr.findIndex(x=>x.id===item.id); if(i>=0)lr[i]={...item,...d.record,synced:true}; setLocalRecords(lr);
  }catch{remaining.push(item)}
 }
 setQueue(remaining); refreshHistory();
}

document.getElementById("saveCrop").onclick=async()=>{
 const f=currentFarmer(); if(!f){alert("Please login or continue offline first.");return}
 const fd=new FormData(document.getElementById("cropForm"));
 const rec={id:uid(),farmerId:f.id,crop:document.querySelector("#cropResult .crop-name")?.textContent?.replace("🌾 ","")||"Unknown",soil:fd.get("soil"),nitrogen:Number(fd.get("nitrogen")),phosphorus:Number(fd.get("phosphorus")),potassium:Number(fd.get("potassium")),temperature:Number(fd.get("temperature")),rainfall:Number(fd.get("rainfall")),createdAt:new Date().toISOString(),synced:false};
 if(rec.crop==="Unknown"){document.getElementById("saveStatus").textContent="Get a recommendation first.";return}
 let lr=localRecords();lr.unshift(rec);setLocalRecords(lr);
 if(navigator.onLine&&!f.offline){
  try{
   const r=await fetch(`${API_BASE}/api/farmer/${encodeURIComponent(f.id)}/crops`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(rec)});
   const d=await r.json(); if(!d.success)throw new Error();
   rec.synced=true; lr[0]=rec;setLocalRecords(lr);
   document.getElementById("saveStatus").textContent="✓ Saved to your account";
  }catch{
   let q=queue();q.push(rec);setQueue(q);document.getElementById("saveStatus").textContent="✓ Saved offline; will sync automatically";
  }
 }else{
  let q=queue();q.push(rec);setQueue(q);document.getElementById("saveStatus").textContent="✓ Saved offline; will sync when online";
 }
 refreshHistory();
};

async function refreshHistory(){
 const f=currentFarmer(); const box=document.getElementById("cropHistory"); if(!f){box.innerHTML="<div class='empty'>Login to view your saved crop records.</div>";return}
 let records=localRecords().filter(x=>x.farmerId===f.id);
 if(navigator.onLine&&!f.offline){
  try{
   const r=await fetch(`${API_BASE}/api/farmer/${encodeURIComponent(f.id)}/crops`);const d=await r.json();
   if(d.success){const local=records.filter(x=>!x.synced); records=[...d.records,...local];}
  }catch{}
 }
 if(!records.length){box.innerHTML="<div class='empty'>No saved crop data yet. Run a recommendation and save it.</div>";return}
 box.innerHTML=records.map(x=>`<div class="history-item"><b>🌾 ${x.crop}</b><span>Soil: ${x.soil}</span><span>NPK: ${x.nitrogen}/${x.phosphorus}/${x.potassium}</span><span>${new Date(x.createdAt).toLocaleDateString()}</span><span class="${x.synced?'synced':'pending'}">${x.synced?'✓ Synced':'⏳ Pending sync'}</span></div>`).join("");
}
document.getElementById("refreshHistory").onclick=refreshHistory;

// On a fresh installation, require login once. If a previous local session exists, resume it.
if(currentFarmer()) openApp();
else document.getElementById("loginOverlay").style.display="flex";
