

let tempSitesData = ''; 


class Sites {
  constructor(id, name, location, img1, img2, img3, discription, locForWeather) {
    this.id = id;
    this.name = name;
    this.location = location;
    this.img1 = img1;
    this.img2 = img2;
    this.img3 = img3;
    this.discription = discription;
    this.locForWeather = locForWeather;

    

    // ====Weather========Weather========Weather========Weather====


    const keyAPI = '4e5df4075d9195ca31e1b3452e71b178';
    let loc = this.locForWeather;

    let passInString = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${keyAPI}&units=metric`;
    // console.log(passInString);
    
    let responseData = {};
    let weatherDiscription = '';
    let iconWeather = '';
    let temp = '';
    let wind = '';
    
    fetch(passInString)
      .then((res) => res.json())
      .then((data) => (responseData = data))
      .then(() => {
        // this.createContainer(); 
        // console.log(responseData);
        weatherDiscription += `The current weather:  ${responseData.weather[0].description}.`;
        temp += `Temp: ${responseData.main.temp.toFixed(0)} °C`
        let mphWind = responseData.wind.speed * 2.23693629;
        wind += `Wind: ${mphWind.toFixed(1)} mph`
        iconWeather += `<img src="https://openweathermap.org/img/wn/${responseData.weather[0].icon}.png" alt="The weather icon" width="70" height="60">`


        // weatherDiscription[j].innerHTML = 'The current weather: ' + responseData.weather[0].description + '. ';
        // iconWeather[j].innerHTML = `<img src="https://openweathermap.org/img/wn/${responseData.weather[0].icon}.png" alt="The weather icon" width="70" height="60">`
        // temp[j].innerHTML = 'Temp: ' + responseData.main.temp.toFixed(0) + '°C';
        // let mphWind = responseData.wind.speed * 2.23693629;
        // wind[j].innerHTML = 'Wind: ' + mphWind.toFixed(1) + ' mph'
        // console.log(wind[j]);
      })

    
    





  // =====  INNER HTML  ===== =====  INNER HTML  ===== =====  INNER HTML  ===== 
  
this.createContainer = function() { 
    setTimeout(() => {
    tempSitesData +=	 `
  <div class='container'>
  <h1>${this.id}.${this.name}</h1>
    <div class='photoFrame'>
        <img class='img1' style="display:block;" src='${this.img1}' alt='photo of ${this.name}'>
        <img class='img2' style="display:none;" src='${this.img2}' alt='photo of ${this.name}'>
        <img class='img3' style="display:none;" src='${this.img3}' alt='photo of ${this.name}'>
        <i class="fa-solid fa-angles-left"></i>
          <i class="fa-solid fa-angles-right"></i>
      </div>
      <div class='weather'>
      <span class='weatherDiscription'>${weatherDiscription}</span>
      <span class='temp'>${temp}</span>
      <span class='wind'>${wind}</span>
      <span class='iconWeather'>${iconWeather}</span>
    </div>
      <h6>Location: ${this.location}</h6>
      <h3>${this.discription}</h3>
  </div>`;
  document.getElementById("sitesCaontainer").innerHTML = tempSitesData;
	}, 500)
}
	this.createContainer(); 

  }

  
}


let site1 = new Sites(1, 'Wroxeter Roman City', 'Wroxeter Roman City, Wroxeter, Shrewsbury SY5 6PJ', 'https://www.english-heritage.org.uk/siteassets/home/visit/places-to-visit/wroxeter-roman-city/wroxeter-carousel-1.jpg?w=1440&h=612&mode=crop&scale=both&quality=60&anchor=&WebsiteVersion=20211126150055', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Wroxeter_baths%2C_2010.jpg/1280px-Wroxeter_baths%2C_2010.jpg', 'https://www.visitshropshire.co.uk/wp-content/uploads/2020/09/Wroxeter-2.jpg', `Roman Wroxeter, near the end of the Watling Street Roman road that ran across England from Dubris (Dover), was a key frontier position lying on the bank of the Severn river whose valley penetrated deep into Wales, and also on a route to the south leading to the Wye valley.Archaeology has shown that the site of the later city first was established about AD 55 as a frontier post for a Thracian legionary cohort located at a fort near the Severn river crossing. A few years later a legionary fortress (castrum) was built within the site of the later city for the Legio XIV Gemina during their invasion of Wales.The local British tribe of the Cornovii had their original capital (also thought to have been named *Uiroconion) at the hillfort on the Wrekin. When the Cornovii were eventually subdued their capital was moved to Wroxeter and given its Roman name.This legion XIV Gemina was later replaced by the Legio XX Valeria Victrix which in turn relocated to Chester around AD 88. As the military abandoned the fortress the site was taken over by the Cornovians' civilian settlement.The name of the settlement, meaning "Viroconium of the Cornovians", preserves a native Brittonic name that has been reconstructed as *Uiroconion ("[the city] of *Uirokū"), where *Uiro-ku (lit. "man"-"wolf") is believed to have been a masculine given name meaning "werewolf".Viroconium prospered over the next century, with the construction of many public buildings, including thermae and a colonnaded forum. At its peak, it is thought to have been the 4th-largest settlement in Roman Britain, with a population of more than 15,000.
The Roman city is first documented in Ptolemy's 2nd century Geography as one of the cities of the Cornovii tribe, along with Chester (Deva Victrix).
Following the Roman withdrawal from Britain around AD 410, the Cornovians seem to have divided into Pengwern and Powys. The minor Magonsæte sub-kingdom also emerged in the area in the interlude between Powysian and Mercian rule. Viroconium may have served as the early post-Roman capital of Powys prior to its removal to Mathrafal sometime before 717, following famine and plague in the area. The city has been variously identified with the Cair Urnarc and Cair Guricon which appeared in the 9th-century History of the Britons's list of the 28 cities of Britain.`, 'Wroxeter,GB');
let site2 = new Sites(2, 'Verulamium Theatre', 'Roman Theatre of Verulamium, Bluehouse Hill, St Albans AL3 6AE', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/RomanTheatreVerulamium-PS1.jpg/1280px-RomanTheatreVerulamium-PS1.jpg', 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Teatro_de_Clunia_01.JPG', 'https://www.gorhamburyestate.co.uk/var/ezdemo_site/storage/images/_aliases/billboard_large/media/images/new-billboards/roman-theatre/585-3-eng-GB/Roman-theatre.jpg', `The Roman theatre at St Albans, Hertfordshire, England is an excavated site within the Roman walled city of Verulamium. Although there are other Roman theatres in Britain (for example at Camulodunum), the one at Verulamium is claimed to be the only example of its kind, being a theatre with a stage rather than an amphitheatre. The theatre differs from the typical Roman theatre in being built on a site that is only slightly sloping, and in its plan (although there are theatres with similar plans in Northern Gaul).Where a natural slope was available, Roman theatres tended to make use of it, as in this Spanish example, the Theatre of Clunia Sulpicia
The theatre was built in about 140AD. Urban life continued in Verulamium into the 5th century. However, by that time the theatre had fallen into disuse. It was used as a rubbish dump in the 4th century. It was excavated in the 19th century, and again in the 1930s by Kathleen Kenyon.`, 'St Albans,GB');
let site3 = new Sites(3, 'Richborough Roman Fort', 'Richborough Roman Fort and Amphitheatre, Richborough Rd, Sandwich CT13 9JW', 'https://www.english-heritage.org.uk/siteassets/home/visit/places-to-visit/richborough-fort-and-ampitheatre/richborough-hero.jpg?w=1440&h=612&mode=crop&scale=both&quality=60&anchor=&WebsiteVersion=20211126150055', 'https://www.english-heritage.org.uk/siteassets/home/visit/places-to-visit/richborough-fort-and-ampitheatre/richborough-hero-two.jpg?w=1440&h=612&mode=crop&scale=both&quality=60&anchor=&WebsiteVersion=20211126150055', 'https://www.english-heritage.org.uk/siteassets/home/visit/places-to-visit/richborough-fort-and-ampitheatre/history/richborough-roman-fort-aerial-1.jpg?w=1440&h=612&mode=crop&scale=both&quality=60&anchor=NoFocus&WebsiteVersion=20211126150055', 'Evocatively sited amid the East Kent marshes, Richborough is perhaps the most symbolically important of all Roman sites in Britain, witnessing both the beginning and almost the end of Roman rule here. Explore the huge stone walls which mark the site of this Saxon Shore fortress, the rolling defensive ditches and impressive foundations showing the scale of this once bustling Roman settlement.', 'Sandwich,GB');
let site4 = new Sites(4, 'Roman Town House', 'Roman Town House, County Hall, Colliton Pk, Dorchester DT1 1XJ', 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_822,q_80,w_1220/https://swtdmsmedia.newmindmedia.com/wsimgs/roman_townhouse_1877557460.jpg', 'https://upload.wikimedia.org/wikipedia/commons/0/00/Roman_villa%2C_Dorchester_-_geograph.org.uk_-_473451.jpg', 'https://www.dorsetcouncil.gov.uk/documents/35024/137441/Roman_Town_House_February_2021.jpg/b69e3de8-7d4c-84b4-6a94-11453f2d2d42?t=1618332159970&download=true', `The Roman Town House in Dorchester is a Roman ruin within Colliton Park, Dorchester, Dorset. Dorset County Council acquired Colliton Park in 1933 as the site for the construction of County Hall. The Town House was discovered in 1937/38 during an archaeological investigation carried out by the Dorset Natural History and Archaeological Society prior to the construction of the new building. Plans for County Hall were modified so that the Town House could be retained on site.The Town House is a scheduled ancient monument and a Grade I listed building. It is bounded on the north and west sides by North Walk and West Walk which are also scheduled monuments having the remains of the Roman ramparts of the town just below surface level.The Town House has two principal ranges of rooms. The South Range comprising rooms 1–7 survives in the plan form of flint and stone walls on the grass covered site. The West Range comprising rooms 8–18 was mosaic floored. This range was re-excavated and provided with a steel and glass cover building with a stone tiled roof all perched on the original foundations between 1996 and 1999.`, 'Dorchester,GB');
let site5 = new Sites(5, 'Welwyn Roman Baths', 'Welwyn Roman Baths, Welwyn By Pass Rd, Welwyn AL6 9FG', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Welwyn_Roman_baths_01.jpg/1280px-Welwyn_Roman_baths_01.jpg', 'https://dynamic-media-cdn.tripadvisor.com/media/photo-s/02/c7/1d/eb/welwyn-roman-baths.jpg?w=600&h=-1&s=1', 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/a9/34/e7/caption.jpg?w=1200&h=-1&s=1', `The Welwyn Roman Baths are a Roman ruin preserved under the A1(M) just north of modern-day Welwyn Garden City, Hertfordshire, England. The baths were a small part of the Dicket Mead villa, which was originally built in the 3rd century AD.The village of Welwyn has been described as being the site of a Romano-British settlement, where a Roman road crossed the river Mimram. There was another Roman villa near Welwyn on the Lockleys estate.The full extent of the Dicket Mead villa was never fully excavated prior to the construction of the motorway, but the baths were only one of at least four buildings in total. The complex was probably part of a farm. It has been speculated that it might have been at least in part the equivalent of a hotel, lying as it does near Roman roads.The ruins were uncovered in 1960 by local archaeologist Tony Rook, and the baths were gradually uncovered over the following 10 years by excavation. Shortly after the excavation was completed, the Ministry of Transport announced the route of a new motorway, straight over the top of the excavation.`, 'Welwyn,GB');
let site6 = new Sites(6, `Hadrian's Wall`, `Hadrian's Wall, Brampton CA8 7DD`, 'https://www.english-heritage.org.uk/siteassets/home/visit/places-to-visit/hadrians-wall/history/hadrians-wall-1.jpg?w=1440&h=612&mode=crop&scale=both&quality=60&anchor=NoFocus&WebsiteVersion=20211126150055', 'https://www.english-heritage.org.uk/siteassets/home/visit/places-to-visit/hadrians-wall/history/hadrians-wall-housesteads-aerial.jpg?w=1440&mode=none&scale=downscale&quality=60&anchor=&WebsiteVersion=20211126150055', 'https://www.english-heritage.org.uk/siteassets/home/visit/places-to-visit/hadrians-wall/history/hadrians-wall-snow.jpg?w=1440&mode=none&scale=downscale&quality=60&anchor=&WebsiteVersion=20211126150055', `Hadrian’s Wall, continuous Roman defensive barrier that guarded the northwestern frontier of the province of Britain from barbarian invaders. The wall extended from coast to coast across the width of northern Britain; it ran for 73 miles (118 km) from Wallsend (Segedunum) on the River Tyne in the east to Bowness on the Solway Firth in the west. The original plan was to construct a stone wall 10 Roman feet wide (a Roman foot is slightly larger than a standard foot) and at least 12 feet high for the eastern sector and a turf rampart 20 Roman feet wide at the base for the western sector; both were fronted by a ditch, except where the crags rendered this superfluous. At every 1/3 Roman mile there was a tower, and at every mile a fortlet (milefortlet, or milecastle) containing a gate through the wall, presumably surmounted by a tower, and one or two barrack-blocks. Before this scheme was completed, forts were built on the wall line at roughly 7-mile intervals and an earthwork, known as the vallum, dug behind the wall and the forts. Probably at this stage the stone wall was narrowed from 10 Roman feet wide to about 8 feet. The fortlets, towers, and forts continued for at least 26 miles (42 km) beyond Bowness southward down the Cumbrian coast.`, 'Gilsland,GB');
let site7 = new Sites(7, `Roman Baths (Bath)`, 'The Roman Baths, Abbey Churchyard, Bath BA1 1LZ', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Ba%C3%B1os_Romanos%2C_Bath%2C_Inglaterra%2C_2014-08-12%2C_DD_26.JPG/1280px-Ba%C3%B1os_Romanos%2C_Bath%2C_Inglaterra%2C_2014-08-12%2C_DD_26.JPG', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Circular_Roman_Bath%2C_Bath%2C_c1900.jpg/1280px-Circular_Roman_Bath%2C_Bath%2C_c1900.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Roman_Baths_in_Bath_Spa%2C_England_-_July_2006.jpg/1024px-Roman_Baths_in_Bath_Spa%2C_England_-_July_2006.jpg', `The Roman Baths are well-preserved thermae in the city of Bath, Somerset, England. A temple was constructed on the site between 60-70AD in the first few decades of Roman Britain. Its presence led to the development of the small Roman urban settlement known as Aquae Sulis around the site. The Roman baths—designed for public bathing—were used until the end of Roman rule in Britain in the 5th Century AD. According to the Anglo-Saxon Chronicle, the original Roman baths were in ruins a century later. The area around the natural springs was redeveloped several times during the Early and Late Middle Ages.The Roman Baths are preserved in four main features: the Sacred Spring, the Roman Temple, the Roman Bath House, and a museum which holds artefacts from Aquae Sulis. However, all buildings at street level date from the 19th century. It is a major tourist attraction in the UK, and together with the Grand Pump Room, receives more than 1.3 million visitors annually. Visitors can tour the baths and museum but cannot enter the water.`, 'Bath,GB');



setTimeout(() => {

const img1 = document.querySelectorAll('.img1');
const img2 = document.querySelectorAll('.img2');
const img3 = document.querySelectorAll('.img3');
const leftIcon = document.querySelectorAll('.fa-angles-left');
const rightIcon = document.querySelectorAll('.fa-angles-right');



for (let i = 0; i < img1.length; i++) {
  leftIcon[i].addEventListener('click', function() {
    if (img1[i].style.display === 'block'){
    img1[i].style.display = 'none';
    img3[i].style.display = 'block'
    }else if (img3[i].style.display === 'block'){
      img3[i].style.display = 'none';
    img2[i].style.display = 'block'
    }else if (img2[i].style.display === 'block'){
      img2[i].style.display = 'none';
    img1[i].style.display = 'block'
    }
  })
}




for (let i = 0; i < img1.length; i++) {
  rightIcon[i].addEventListener('click', function() {
    if (img1[i].style.display === 'block'){
    img1[i].style.display = 'none';
    img2[i].style.display = 'block'
    }else if (img2[i].style.display === 'block'){
      img2[i].style.display = 'none';
    img3[i].style.display = 'block'
    }else if (img3[i].style.display === 'block'){
      img3[i].style.display = 'none';
    img1[i].style.display = 'block'
  }
})
}




}, 500);



