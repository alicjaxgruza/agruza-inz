var map = L.map('map').setView([52.231756665541724, 19.16096834322524], 7);
var drzewo = L.icon({
    iconUrl: './ikony/drzewo.svg',
    iconSize: [70,70]
});
var zuraw = L.icon({
    iconUrl: './ikony/zuraw.svg',
    iconSize: [70,70]
});
var wieza = L.icon({
    iconUrl: './ikony/wieza.svg',
    iconSize: [70,70]
});
var wiatrak = L.icon({
    iconUrl: './ikony/wiatrak.svg',
    iconSize: [70,70]
});
var grod = L.icon({
    iconUrl: './ikony/grod.svg',
    iconSize: [70,70]
});
var wianek = L.icon({
    iconUrl: './ikony/wianek.svg',
    iconSize: [70,70]
});
var novigrad = L.icon({
    iconUrl: './ikony/novigrad_k.svg',
    iconSize: [70,70]
});
var mlyn = L.icon({
    iconUrl: './ikony/mlyn.svg',
    iconSize: [70,70]
});
var zalipie = L.icon({
    iconUrl: './ikony/zalipie.svg',
    iconSize: [70,70]
});

var click = L.icon({
    iconUrl: './ikony/click.svg',
    iconSize: [10,10]
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

function style_gdansk (feature) {
    return {
        weight: 2,
        opacity: 1,
        color: 'black',
        fill: 'url(./ikony/novigrad.svg)',
        fillOpacity: 0.9,
       
    }   
};

let currentImageIndex = 0;

function showImage(index, id) {
    var gallery = document.getElementById(id);
    if (gallery) {
        var images = gallery.querySelectorAll('img');
        var containerWidth = gallery.parentElement.offsetWidth;
        if (index < 0) index = images.length - 1; 
        if (index >= images.length) index = 0;
        currentImageIndex = index;
        gallery.style.transform = `translateX(-${index * containerWidth}px)`;
    }
}

function prevImage(id) {
    showImage(currentImageIndex - 1, id);
}

function nextImage(id) {
    showImage(currentImageIndex + 1, id);
};

function openSecondPopup(marker, contentIndex){
    let markerLatLng = JSON.parse(marker);
    var content = tablica[contentIndex];
    L.popup({
        maxWidth: 400,
        maxHeight: 300,
        closeOnClick: true
    })
    .setLatLng(markerLatLng)
    .setContent(content)
    .openOn(map);
};


var gdansk = L.geoJson(gdansk, {style: style_gdansk}).addTo(map)
.bindPopup(`<div class="popup">
    Wolne miasto Gdańsk - Wolne miasto Novigrad
    <div class="wrapper">
        <div id="gallery9" class="gallery">
            <img src="./zrzuty_ekranu/novigrad.jpg"
                 class="img-gallery">
            <img src="./zrzuty_ekranu/novigrad.png"
                 class="img-gallery">
        </div>
        <button onclick="prevImage('gallery9')" class="preview" >◀</button>
        <button onclick="nextImage('gallery9')" class="next" >▶</button>
    </div>        
        <button class="button1" onclick="openSecondPopup('[54.354568753801416, 18.658818163030844]', 8);">
        Więcej informacji
        </button>
    </div>
`).on('popupclose', () => {currentImageIndex=0});

const gdansk2 = (`<h2>Informacje</h2>
                <img src="./ikony/novigrad2.svg" class="center"><br>
    <div class="popup2">   
        <div class="informacje">
            <p>Novigrad w świecie Wiedźmina jest największym miastem Północy, strategicznie położonym na zachodzie kontynentu przy otwartych wodach, co czyni je miastem portowym. Jest to strategiczne miejsce jeśli chodzi o handel czy podróże. W grze, aby kontynuować dalszy rozwój fabuły, musimy udać się na wyspy Skellige i to właśnie w Novigradzie rozpoczyna się nasza podróż statkiem. <br><br>
                Samą nazwą nawiązuje on do Wolnego miasta Gdańsk, czyli państwa-miasta istniejącego w okresie międzywojennym na terenie ówczesnego Gdańska. Tak jak Novigrad, na północy pełniło ono funkcję miasta portowego i było ważnym punktem strategicznym i handlowym. Największe podobieństwo między lokalizacjami widać na deptaku Długie Pobrzeże, czyli terenie Starego Portu nad Motławą, która widać, że była mocną inspiracją w powstaniu największego miasta królestw Północy w świecie Wiedźmina. Inspirację widać również w obiektach Wielkiego Młyna i Żurawia. 
            </p>
        </div>
        <div class="informacje2">
            <p><b>województwo:</b>pomorskie<br><br>
                <b>adres:</b>
                Stare Miasto, 80-833 Gdańsk <br><br>
                <b>bilety:</b> 
                wstęp bezpłatny<br><br>
                <b>źródło zdjęcia:</b> <br>
                <a href="https://www.worldisbeautiful.eu/en/gallery/42-gdansk-from-the-sky/1977-footbridge-to-the-granary-island.php">https://www.worldisbeautiful.eu/en/gallery/42-gdansk-from-the-sky/1977-footbridge-to-the-granary-island.php</a>

            </p>
        </div>
    </div>
`);
    

var grod = L.marker([52.788642382569556, 17.743927861262833], {icon: grod}).addTo(map)
.bindPopup(`
    <div class="popup">
    Gród w Biskupinie - kasztel Wrońce w Velen
    <div class="wrapper">
        <div id="gallery" class="gallery">
            <img src="./zrzuty_ekranu/grod2.jpg"
                 class="img-gallery">
            <img src="./zrzuty_ekranu/grod.png"
                 class="img-gallery">
                
        </div>
        <button onclick="prevImage('gallery')" class="preview" >◀</button>
        <button onclick="nextImage('gallery')" class="next" >▶</button>
    </div>
        <button class="button1" onclick="openSecondPopup('[52.788642382569556, 17.743927861262833]', 0);">
         Więcej informacji
        </button>
    </div>
`).on('popupclose', () => {currentImageIndex=0});

const grod2 = (`<h2>Informacje</h2>
                <img src="./ikony/kasztel.svg" class="center"><br>
    <div class="popup2">   
        <div class="informacje">
            <p>Kasztel Wrońce w Velen jest jedną z kluczowych lokalizacji w celu kontynuowania głównego wątku fabularnego w grze. Z miejscem powiązane jest również parę zadań pobocznych. Miejsce posiada niesamowity nostalgiczny klimat i questy z nim związane zmuszają nas do wyborów, które stanowczo mogą wpłynąć na dalszy rozwój wydarzeń. <br><br>
                Gród w Biskupinie jest archeologicznym odkryciem sprzed 2 Wojny Światowej. Badania wykazały, że powstał w VII wieku przed naszą erą, czyli liczy ponad 2700 lat. Na podstawie odkryć miasto zostało zrekonstruowane. 
            </p>
        </div>
        <div class="informacje2">
            <p><b>województwo:</b> kujawsko-pomorskie<br><br>
                <b>adres:</b>
                Biskupin 3, 88-410 Biskupin <br><br>
                <b>bilety:</b> 
                normalny - 26 zł<br>
                ulgowy - 17 zł<br><br>
                <b>strona internetowa:</b> <br> <a href="https://biskupin.pl/">https://biskupin.pl/</a><br><br>
                <b>źródło zdjęcia:</b> <br>
                <a href="https://ewaway.pl/biskupin-polska-najciekawsze-wycieczki.html">https://ewaway.pl/biskupin-polska-najciekawsze-wycieczki.html</a>

            </p>
        </div>
    </div>
`);



var zuraw = L.marker([54.35060680087273, 18.657484991327365], {icon: zuraw}).addTo(map)
.bindPopup(`
    <div class="popup">
    Żuraw w Gdańsku - żuraw w Novigradzie
    <div class="wrapper">
        <div id="gallery2" class="gallery">
                <img src="./zrzuty_ekranu/zuraw2.jpg" 
                 class="img-gallery">
                <img src="./zrzuty_ekranu/zuraw.png" 
                 class="img-gallery">
        </div>
        <button onclick="prevImage('gallery2')" class="preview" >◀</button>
        <button onclick="nextImage('gallery2')" class="next" >▶</button>
    </div>
        <button class="button1" onclick="openSecondPopup('[54.35060680087273, 18.657484991327365]', 1); ">Więcej informacji</button>

    </div>
`).on('popupclose', () => {currentImageIndex=0});

const zuraw2 = (`<h2>Informacje</h2>
    <img src="./ikony/mlyn2.svg" class="center"><br>
<div class="popup2">   
    <div class="informacje">
        <p>Obiekt w grze komputerowej był jedynie częścią miasta portowego Novigrad, które samo w sobie byłoinspirowane Starym Portem w Gdańsku. <br><br>
        Żuraw w Gdańsku pochodzi z połowy XV wieku, jest najstarszą i największą taką budowlą w Europie. Przez setki lat pełnił dwie funkcję - bramy miejskiej i dźwigu portowego. W tej samej okolicy można też odwiedzić 2 inne obiekty znajdujące się obok, czyli Wielki Młyn oraz deptak Długie Pobrzeże, które również mają swoje odniesienie w Wiedźminie
        </p>
    </div>
    <div class="informacje2">
        <p><b>województwo:</b> pomorskie<br><br>
            <b>adres:</b>
            Szeroka 67/68, 80-835 Gdańsk <br><br>
            <b>bilety:</b> 
            normalny - 23 zł<br>
            ulgowy - 17 zł<br>
            bezpłatne zwiedzanie - środa<br><br>
            <b>strona internetowa:</b><br> <a href="https://nmm.pl/zuraw/">https://nmm.pl/zuraw/</a>
                 <b>źródło zdjęcia:</b> <br>
                <a href="https://pl.m.wikipedia.org/wiki/Plik:D%C5%82ugie_Pobrze%C5%BCe_in_Gda%C5%84sk_(Mot%C5%82awa).jpg">https://pl.m.wikipedia.org/wiki/Plik:D%C5%82ugie_Pobrze%C5%BCe_in_Gda%C5%84sk_(Mot%C5%82awa).jpg</a>

        </p>
    </div>
</div>
`);

var dworek = L.marker([50.0884747747369, 19.878550979509363], {icon: wianek}).addTo(map)
    .bindPopup(`
        <div class="popup"> 
        Rydlówka w Bronowicach - dworek we wsi Bronovitz
    <div class="wrapper">
      <div id="gallery3" class="gallery">
            <img src="./zrzuty_ekranu/dworek2.jpg" 
                 class="img-gallery">
            <img src="./zrzuty_ekranu/dworek.png" 
                 class="img-gallery">
        </div>
        <button onclick="prevImage('gallery3')" class="preview" >◀</button>
        <button onclick="nextImage('gallery3')" class="next" >▶</button>
    </div>
        <button class="button1" onclick="openSecondPopup('[50.0884747747369, 19.878550979509363]', 2)">Więcej informacji</button>

    </div>
    `).on('popupclose', () => {currentImageIndex=0});
const dworek2 = (`<h2>Informacje</h2>
        <img src="./ikony/bronovitz.svg" class="center"><br>
    <div class="popup2">   
        <div class="informacje">
            <p> Budynek we wsi Bronovitz służył jako sala weselna w dodatku Serce z Kamienia. Razem z Shani wybieramy się tam na “słowiańskie” wesele z wiankami, zabawami i tańcami. Przez sam wybór lokalizacji widać mocną inspirację krakowską Rydlówką. <br><br>
            Dworek w Bronowicach został zbudowany pod koniec XIX wieku. W 1900 roku odbyło się tam wesele Lucjana Rydla z Jadwigą Mikołajczykówną, które było inspiracją dla Wyspiańskiego do napisania dramatu pod nazwą “Wesele”. Od 2018 roku Rydlówka jest oddziałem Muzeum Historycznego Miasta Kraków.
            </p>
        </div>
        <div class="informacje2">
            <p><b>województwo:</b> małopolskie<br><br>
               <b>adres:</b> Włodzimierza Tetmajera 28,<br>
                31-352 Kraków<br><br>
                <b>bilety:</b> normalny - 20 zł<br>
                ulgowy - 15 zł<br>
                bezpłatne zwiedzanie - wtorek<br><br>
                <b>strona internetowa: </b> <br>
                <a href="https://muzeumkrakowa.pl/oddzialy/rydlowka">https://muzeumkrakowa.pl/oddzialy/rydlowka</a><br><br>
                <b>źródło zdjęcia:</b> <br>
                <a href="https://pl.wikipedia.org/wiki/Rydl%C3%B3wka#/media/Plik:Rydl%C3%B3wka,_Bronowice_Ma%C5%82e,_2022_09.jpg">https://pl.wikipedia.org/wiki/Rydl%C3%B3wka#/media/Plik:Rydl%C3%B3wka,_Bronowice_Ma%C5%82e,_2022_09.jpg   </a>
            </p>
        </div>
    </div>
`)
   

var zalipie = L.marker([50.23705978654675, 20.86020334158246], {icon: zalipie}).addTo(map)
    .bindPopup(`
<div class="popup">
Domy w Zalipiu - domy w okolicy Bramy Chwały
    <div class="wrapper">
       <div id="gallery4" class="gallery">
            <img src="./zrzuty_ekranu/zalipie2.jpg" 
                 class="img-gallery">
            <img src="./zrzuty_ekranu/zalipie.png" 
                 class="img-gallery">
        </div>
        <button onclick="prevImage('gallery4')" class="preview" >◀</button>
        <button onclick="nextImage('gallery4')" class="next" >▶</button>
    </div>
        <button class="button1" onclick="openSecondPopup('[50.23705978654675, 20.86020334158246]', 3)">Więcej informacji</button>

    </div>
    `).on('popupclose', () => {currentImageIndex=0});
const zalipie2 = (`<h2>Informacje</h2>
        <img src="./ikony/brama.svg" class="center"><br>
        <div class="popup2">   
            <div class="informacje">
             <p>W Wiedźminie również istnieje wieś Zalipie, jednak podobieństwo do rzeczywistej miejscowości nie istnieje. Jednakże, kolorowe domy możemy znaleźć przy Bramie Chwały obok Novigradu.  <br><br>
                Zalipie w Polsce znane jest jako malowana wieś. Tradycja malunków ma ponad 100 lat. Najpopularniejszymi budynkami w miejscowości są Dom Malarek oraz zagroda Felicji Curyłowej. Zagroda jest jednocześnie filią tarnowskiego Muzeum Etnograficznego.
                </p>
            </div>
            <div class="informacje2">
             <p><b>województwo:</b> małopolskie<br><br>
                <b>adres:</b>
                Zalipie 128A, 33-263 Zalipie <br><br>
                <b>bilety:</b> 
                normalny - 12 zł<br>
                ulgowy - 9 zł<br>
                bezpłatne zwiedzanie - czwartek<br><br>
                <b>strona internetowa:<br> </b><a href="https://muzeum.tarnow.pl/zwiedzanie/oddzialy/zagroda-curylowej-w-zalipiu/">https://muzeum.tarnow.pl/zwiedzanie/oddzialy/zagroda-curylowej-w-zalipiu/</a><br><br>
                 <b>źródło zdjęcia:</b> <br>
                <a href="https://krytykakulinarna.com/tag/zapilie-malowana-wies/">https://krytykakulinarna.com/tag/zapilie-malowana-wies/</a>

             </p>
            </div>
        </div>
`)   

var drzewo = L.marker([52.30934610973942, 20.425477953863673], {icon: drzewo}).addTo(map)
.bindPopup(`
<div class="popup">
Dąb Powstańców k. Bielin - drzewo wisielców
    <div class="wrapper">
        <div id="gallery5" class="gallery">
            <img src="./zrzuty_ekranu/drzewo2.jpg" 
                 class="img-gallery">
            <img src="./zrzuty_ekranu/drzewo.png" 
                 class="img-gallery">
        </div>
        <button onclick="prevImage('gallery5')" class="preview" >◀</button>
        <button onclick="nextImage('gallery5')" class="next" >▶</button>
    </div>
        <button class="button1" onclick="openSecondPopup('[52.30934610973942, 20.425477953863673]', 4)">Więcej informacji</button>

    </div>
`).on('popupclose', () => {currentImageIndex=0});
const drzewo2 = (`<h2>Informacje</h2>
    <img src="./ikony/dab.svg" class="center"><br>
    <div class="popup2">   
        <div class="informacje">
            <p>Drzewo wisielców znajduję się niedaleko wsi Jaworniki. W trakcie III Wojny Północnej było używane jako szubienica przez wojska nilfgaardzkie. Z tego miejsca rozpoczyna się wątek fabularny w Velen. <br><br>
            Dąb powstańców 1863 roku w Kampinoskim Parku Narodowym według legend pełniło taką samą rolę. W okresie powstania styczniowego kozacy wieszali tam pojmanych powstańców. Do dębu najprostsza droga, to kierowanie się zielonym szlakiem rowerowym.
            </p>
        </div>
        <div class="informacje2">
            <p><b>województwo:</b> mazowieckie<br><br>
                <b>adres:</b>
                Zielony - południowy szlak leśny k. wsi Bieliny, 05-085 Bieliny <br><br>
                <b>bilety:</b>wstęp bezpłatny 
                <br><br>
                <b>strona internetowa:</b> <br> <a href="https://kampn.gov.pl/">https://kampn.gov.pl/</a><br><br>
                 <b>źródło zdjęcia:</b> <br>
                <a href="https://proszewycieczki.wordpress.com/2021/05/06/puszcza-kampinoska-dab-szubienica-powstancow-styczniowych/">https://proszewycieczki.wordpress.com/2021/05/06/puszcza-kampinoska-dab-szubienica-powstancow-styczniowych/</a>

            </p>
        </div>
    </div>
`);
    
var wieza = L.marker([52.6722795814379, 18.32751278016916], {icon: wieza}).addTo(map)
 .bindPopup(`
<div class="popup">
Mysia wieża w Kruszwicy - mysia wieża w Kłomnicy
    <div class="wrapper">
        <div id="gallery6" class="gallery">
            <img src="./zrzuty_ekranu/wieza.jpg" 
                 class="img-gallery">
            <img src="./zrzuty_ekranu/wieza.png" 
                 class="img-gallery">
        </div>
        <button onclick="prevImage('gallery6')" class="preview" >◀</button>
        <button onclick="nextImage('gallery6')" class="next" >▶</button>
    </div>
        <button class="button1" onclick="openSecondPopup('[52.6722795814379, 18.32751278016916]', 5)">Więcej informacji</button>

    </div>
    `).on('popupclose', () => {currentImageIndex=0});
const wieza2 = (`<h2>Informacje</h2>
        <img src="./ikony/klomnica.svg" class="center"><br>
        <div class="popup2">   
            <div class="informacje">
                <p>Mysia wieża była położona na przeklętej wyspie Kłomnicy, która była dotknięta klątwa. Powiązana była ona z Catrioną, czyli wielką zarazą przenoszoną przez gryzonie. Geralt w grze pomaga odczarować wyspę. 
                Z powodu klątwy na jej terenie istniała silna magiczna aura, która umożliwiała Guślarzowi odprawienie Dziadów, co jej kolejnym nawiązaniem do polskiej kultury i dramatów Mickiewicza. 
                <br><br>
                “Prawdziwa” mysia wieża znajduje się na wyspie Kruszwica. Powiązana jest z nią legenda o władcy Popielu, który po nieudolnych rządach i przekrętach, na koniec swojego życia został pożarty w wieży przez myszy. 
                </p>
            </div>
            <div class="informacje2">
                <p><b>województwo:</b> kujawsko-pomorskie<br><br>
                <b>adres:</b> Podzamcze, <br>
                88-150 Kruszwica<br><br>
                <b>bilety:</b> normalny - 14 zł<br>
                ulgowy - 12 zł<br><br>
                <b>strona internetowa: </b><br><a href="http://www.pttk-kruszwica.pl/zabytki/">http://www.pttk-kruszwica.pl/zabytki/</a><br><br>
                  <b>źródło zdjęcia:</b> <br>
                <a href="https://www.polskieszlaki.pl/mysia-wieza-w-kruszwicy.htm">https://www.polskieszlaki.pl/mysia-wieza-w-kruszwicy.htm</a>

                </p>
            </div>
        </div>
    `);
 
var wiatrak = L.marker([52.13747531279867, 19.869337246026404], {icon: wiatrak}).addTo(map)
    .bindPopup(`
<div class="popup">
Wiatrak w Maurzycach - młyn tancerzy
    <div class="wrapper">
        <div id="gallery7" class="gallery">
            <img src="./zrzuty_ekranu/wiatrak.jpg" 
                 class="img-gallery">
            <img src="./zrzuty_ekranu/wiatrak.png" 
                 class="img-gallery">
        </div>
        <button onclick="prevImage('gallery7')" class="preview" >◀</button>
        <button onclick="nextImage('gallery7')" class="next" >▶</button>
    </div>
        <button class="button1" onclick="openSecondPopup('[52.13747531279867, 19.869337246026404]', 6)">Więcej informacji</button>

    </div>
    `).on('popupclose', () => {currentImageIndex=0});
 const wiatrak2 = (`<h2>Informacje</h2>
        <img src="./ikony/wiatrak2.svg" class="center"><br>
        <div class="popup2">   
            <div class="informacje">
                <p>W grze nazwany jest jako młyn tancerzy. Znajduję się w północnej części Velen. Nie jest powiązany z żadnymi questami, w Wiedźminie pełni rolę bardziej ozdobną.
                 <br><br>
                    Jego wygląd zainspirowany został na podstawie wiatraka “koźlaka” w Maurzycach, znajdującego się na terenie Skansenu Ziemi Łowickiej. Na terenie skansenu znajdują się oprócz tego ponad 40 budynków datowanych na XIX-XX wiek. 
                </p>
            </div>
            <div class="informacje2">
                <p><b>województwo:</b> łódzkie<br><br>
                <b>adres:</b> 
                99-440 Maurzyce<br><br>
                <b>bilety:</b> normalny - 18 zł<br>
                ulgowy - 13 zł<br><br>
                <b>strona internetowa: </b><br><a href="http://muzeumlowicz.pl/skansen_w_maurzycach/">http://muzeumlowicz.pl/skansen_w_maurzycach/</a><br><br>
                                    <b>źródło zdjęcia:</b> <br>
                <a href="https://lodz.wyborcza.pl/lodz/7,35136,28492303,wycieczki-rowerowe-po-lodzi-i-okolicy-gdzie-wybrac-sie-z-dziecmi.html">https://lodz.wyborcza.pl/lodz/7,35136,28492303,wycieczki-rowerowe-po-lodzi-i-okolicy-gdzie-wybrac-sie-z-dziecmi.html</a>

                </p>
            </div>
        </div>
    `);  

var mlyn = L.marker([54.354181734071375, 18.649924988291417], {icon:mlyn}).addTo(map)
    .bindPopup(`
    <div class="popup">
    Wielki młyn w Gdańsku - młyn w Novigradzie
    <div class="wrapper">
        <div id="gallery8" class="gallery">
            <img src="./zrzuty_ekranu/mlyn.jpg" 
                 class="img-gallery">
            <img src="./zrzuty_ekranu/mlyn.png" 
                 class="img-gallery">
        </div>
        <button onclick="prevImage('gallery8')" class="preview" >◀</button>
        <button onclick="nextImage('gallery8')" class="next">▶</button>
    </div>
        <button class="button1" onclick="openSecondPopup('[54.354181734071375, 18.649924988291417]', 7)">Więcej informacji</button>

    </div>`).on('popupclose', () => {currentImageIndex=0});
    const mlyn2 = (`<h2>Informacje</h2>
        <img src="./ikony/mlyn2.svg" class="center"><br>
        <div class="popup2">   
            <div class="informacje">
                <p>Obiekt w grze komputerowej był jedynie częścią miasta portowego Novigrad, które samo w sobie było inspirowane Starym Portem w Gdańsku. <br><br>
                Wielki młyn powstał w XIV wieku. Pełnił swoją funkcję aż do II Wojny Światowej. Po niej został odbudowany(20% zostało zniszczone) i wykorzystywano na cele handlowe, wystawy, dyskoteki, następnie jako centrum handlowe. Od 2020 roku znajduję się tam Muzeum Bursztynu.                </p>
            </div>
            <div class="informacje2">
                <p><b>województwo:</b> pomorskie<br><br>
                    <b>adres:</b>
                    Wielkie Młyny 16, 80-849 Gdańsk <br><br>
                    <b>bilety:</b> 
                    normalny - 35 zł<br>
                    ulgowy - 25 zł<br>
                    bezpłatne zwiedzanie - poniedziałek <br><br>
                    <b>strona internetowa:</b> <br><a href="https://muzeumgdansk.pl/oddzialy-muzeum/muzeum-bursztynu/">https://muzeumgdansk.pl/oddzialy-muzeum/muzeum-bursztynu/</a><br><br>
                    <b>źródło zdjęcia:</b> <br>
                <a href="https://poznajekraje.pl/2022/06/23/co-zobaczyc-w-gdansku-zwiedzanie-najpiekniejszego-miasta-w-polsce/">https://poznajekraje.pl/2022/06/23/co-zobaczyc-w-gdansku-zwiedzanie-najpiekniejszego-miasta-w-polsce/</a>
                </p>
            </div>
        </div>
    `);
const tablica = [
    grod2,
    zuraw2,
    dworek2,
    zalipie2,
    drzewo2,
    wieza2,
    wiatrak2,
    mlyn2,
    gdansk2

];

basemapUrl= 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
var basemap = new L.TileLayer(basemapUrl, {minZoom: 4, maxZoom: 18});
var miniMap = new L.Control.MiniMap(basemap, { toggleDisplay: true, position: 'bottomright' }).addTo(map);
L.control.scale().addTo(map);

function zoomToMarker(marker) {
    map.flyTo(marker.getLatLng(), 15, {duration : 3})
    marker.openPopup();
};

function zoomToPolygon(polygon) {
    map.flyTo([54.354568753801416, 18.658818163030844], 13, {duration : 3})
    polygon.openPopup();
};

document.getElementById('mlyn').addEventListener('click', function() {
    zoomToMarker(mlyn);
});

document.getElementById('drzewo').addEventListener('click', function() {
    zoomToMarker(drzewo);
});

document.getElementById('grod').addEventListener('click', function() {
    zoomToMarker(grod);
});

document.getElementById('zalipie').addEventListener('click', function() {
    zoomToMarker(zalipie);

});

document.getElementById('zuraw').addEventListener('click', function() {
    zoomToMarker(zuraw);

});

document.getElementById('wieza').addEventListener('click', function() {
    zoomToMarker(wieza);

});

document.getElementById('wiatrak').addEventListener('click', function() {
    zoomToMarker(wiatrak);

});

document.getElementById('dworek').addEventListener('click', function() {
    zoomToMarker(dworek);

});

document.getElementById('gdansk').addEventListener('click', function() {
    zoomToPolygon(gdansk);
});