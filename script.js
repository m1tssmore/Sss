(function(){
  var PH={
    "tur": "img/istanbul.jpg",
    "egy": "img/egypt.jpg",
    "geo": "img/tbilisi.jpg",
    "uae": "img/dubai.jpg",
    "tha": "img/phi-phi.jpg",
    "jap": "img/tokyo.jpg",
    "vie": "img/ho-chi-minh.jpg"
  };
  var AL={"tur": "Стамбул: мечеть над бухтой Золотой Рог и паромы", "egy": "Верблюд на песке перед пирамидами в Египте", "geo": "Старый Тбилиси на закате: крепость и разноцветные дома", "uae": "Небоскрёбы Дубая вечером и круизный лайнер", "tha": "Лодка на бирюзовой воде у скал острова Пхи-Пхи", "jap": "Вечерняя улица Акихабары в Токио с яркими вывесками", "vie": "Хошимин с высоты: река, мосты и небоскрёбы"};
  function art(k){return '<img class="ph" src="'+PH[k]+'" alt="'+AL[k]+'" loading="lazy">'}
  document.getElementById("pano").innerHTML='<img class="ph hero-ph" src="'+PH.egy+'" alt="'+AL.egy+'">';

  var T=[
    {k:"tur",n:"Турция",r:"w",h:"Стамбул и Каппадокия: мечети, пролив и полёт на шаре",d:7,p:295000,m:[3,4,10,11],dep:"18 ноября, 2 и 16 декабря",inc:"Перелёт, отели в Стамбуле и в скальном доме в Каппадокии, перелёт между городами, трансферы, завтраки, страховка.",no:"Полёт на воздушном шаре (от 70 000 ₸)."},
    {k:"geo",n:"Грузия",r:"w",h:"Тбилиси, Казбеги и винные деревни",d:8,p:310000,m:[4,5,6,8,9,10],dep:"5 и 19 мая, 2 июня",inc:"Перелёт, отель в старом городе, поездка в Казбеги с гидом, завтраки.",no:"Обеды, дегустации в погребах."},
    {k:"egy",n:"Египет",r:"w",h:"Хургада: море, рифы и тёплая вода в ноябре",d:7,p:340000,m:[1,2,3,4,5,9,10,11,12],dep:"каждый вторник",inc:"Перелёт, всё включено, трансфер, страховка.",no:"Экскурсии в Луксор и на острова."},
    {k:"uae",n:"ОАЭ",r:"w",h:"Дубай и пустыня, а между ними пляж",d:6,p:390000,m:[10,11,12,1,2,3,4],dep:"15 и 29 ноября, 13 декабря",inc:"Перелёт, отель у метро, сафари по пескам, завтраки.",no:"Вход на смотровые площадки, обеды."},
    {k:"tha",n:"Таиланд",r:"a",h:"Пхукет и Пхи-Пхи, остров без машин",d:10,p:480000,m:[11,12,1,2,3],dep:"20 ноября, 4 и 18 декабря",inc:"Перелёт, вилла у моря, лодка на Пхи-Пхи, завтраки.",no:"Сборы национальных парков, аренда скутера."},
    {k:"vie",n:"Вьетнам",r:"a",h:"Хошимин и Нячанг: большой город и пляж",d:10,p:520000,m:[11,12,1,2,3,4],dep:"22 ноября, 9 и 27 декабря",inc:"Перелёт, отели в Хошимине и у пляжа в Нячанге, трансферы, завтраки.",no:"Визовые расходы и питание в городе."},
    {k:"jap",n:"Япония",r:"a",h:"Токио, Киото и скоростной поезд между ними",d:9,p:1150000,m:[3,4,5,10,11],dep:"1 и 15 апреля, 21 октября",inc:"Перелёт, отели, проездной JR на 7 дней, русскоязычный гид.",no:"Обеды и ужины, храмы с платным входом."}
  ];
  var MO=["","январе","феврале","марте","апреле","мае","июне","июле","августе","сентябре","октябре","ноябре","декабре"];
  var now=new Date().getMonth()+1,flt="all";
  function money(n){return String(n).replace(/\B(?=(\d{3})+(?!\d))/g," ")+" ₸"}
  function days(d){var w=d%10===1&&d!==11?"день":(d%10>=2&&d%10<=4&&(d<12||d>14))?"дня":"дней";return d+" "+w}
  function by(n){return T.filter(function(t){return t.n===n})[0]}

  // Главная: три сезонных тура разного размера
  var F=["Таиланд","Вьетнам","ОАЭ"];
  document.getElementById("feat").innerHTML=F.map(function(n,i){
    var t=by(n);
    return '<a href="#tury" class="'+(i===0?"a":"")+'">'+art(t.k)+'<div class="nm">'+t.n+'</div><p>'+t.h+'. <b>от '+money(t.p)+'</b></p></a>';
  }).join("");

  function draw(){
    var l=T.filter(function(t){return flt==="all"||(flt==="now"&&t.m.indexOf(now)>-1)||(flt==="cheap"&&t.p<400000)||(flt==="asia"&&t.r==="a")});
    document.getElementById("count").textContent=flt==="now"?"В "+MO[now]+" в сезон: "+l.length:"Найдено: "+l.length;
    document.getElementById("list").innerHTML=l.length?l.map(function(t){
      return '<details><summary>'+art(t.k)+
      '<div><div class="nm">'+t.n+'</div><div class="how">'+t.h+'</div></div>'+
      '<div class="pr">от '+money(t.p)+'<small>'+days(t.d)+'</small></div></summary>'+
      '<div class="more"><div><h3>Вылеты из Алматы и Астаны</h3><p>'+t.dep+'</p><h3>Входит</h3><p>'+t.inc+'</p><h3>Не входит</h3><p>'+t.no+'</p></div>'+
      '<form data-n="'+t.n+'"><b>Заявка на '+t.n+'</b><label>Имя<input name="a" required autocomplete="given-name"></label>'+
      '<label>Телефон<input name="b" type="tel" required autocomplete="tel"></label><button class="btn">Перезвоните мне</button><div class="ok" aria-live="polite"></div></form></div></details>';
    }).join(""):'<div class="empty">Под этот фильтр сейчас ничего нет. Переключите на «Все».</div>';
  }
  document.querySelectorAll(".filters button").forEach(function(b){
    b.onclick=function(){
      flt=b.dataset.f;
      document.querySelectorAll(".filters button").forEach(function(x){x.setAttribute("aria-pressed",x===b)});
      draw();
    };
  });
  document.addEventListener("submit",function(e){
    e.preventDefault();
    var f=e.target,name=f.elements.a.value.trim();
    f.querySelector(".ok").textContent=name+", заявка на «"+f.dataset.n+"» принята. Менеджер позвонит в течение часа.";
    f.querySelector(".btn").disabled=true;
  });

  // Две страницы: переключение по #glavnaya и #tury
  function route(){
    var p=location.hash==="#tury"?"tury":"glavnaya";
    ["glavnaya","tury"].forEach(function(x){
      document.getElementById("p-"+x).hidden=x!==p;
      var a=document.getElementById("n-"+x);
      if(x===p)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current");
    });
    window.scrollTo(0,0);
  }
  window.addEventListener("hashchange",route);
  draw();route();
})();
