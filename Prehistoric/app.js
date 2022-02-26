//Silbury Hill, Avebury
//        https://www.english-heritage.org.uk/siteassets/home/visit/places-to-visit/silbury-hill/silbury-hill-hero.jpg?w=1440&h=612&mode=crop&scale=both&quality=60&anchor=&WebsiteVersion=20211126150055
//        https://cdn.pixabay.com/photo/2018/11/15/16/33/silbury-hill-3817564_960_720.jpg
//        https://www.english-heritage.org.uk/siteassets/home/visit/places-to-visit/silbury-hill/silbury-snow.jpg?w=1440&h=612&mode=crop&scale=both&quality=60&anchor=&WebsiteVersion=20211126150055

//Uffington White Horse

//         https://nt.global.ssl.fastly.net/images/1431736113455-whh-yq3w2924-nt-commission-air.jpg?width=1920&auto=webp&crop=16:7
//         https://nt.global.ssl.fastly.net/images/1431768532670-1101374-nti-chris-lacey-resized.jpg?width=1920&auto=webp&crop=16:7
//         https://images.unsplash.com/photo-1498832229091-4425cea65b29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80

// Stonehenge
//          https://images.unsplash.com/photo-1564308963573-dedc7e72e13f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80
//          https://images.unsplash.com/photo-1559562351-77ae2247f5a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80
//          https://images.unsplash.com/photo-1602711153055-ee5c0a48bc63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1954&q=80

//Skara Brae

//         https://www.northlinkferries.co.uk/wp-content/uploads/2021/11/skara-brae-neolithic-village.jpg
//         https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Skara_Brae_12.jpg/1280px-Skara_Brae_12.jpg
//         https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Skara_Brae_house_1_5.jpg/1280px-Skara_Brae_house_1_5.jpg

//Callanish standing stones

//            https://upload.wikimedia.org/wikipedia/commons/c/c6/Callanish_standing_stones_1.jpg
//            https://www.historicenvironment.scot/media/2120/cal1-000235_o1.jpg?crop=0,0.18285458008504607,0,0.019838545357902158&cropmode=percentage&width=800&height=480&rnd=132723871890000000
//            https://images.unsplash.com/photo-1533410189475-f8ea9fa082ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80

//Grianan of Aileach

//          https://upload.wikimedia.org/wikipedia/commons/0/06/Griahan_of_aileach.jpg
//          https://images.unsplash.com/photo-1603522961978-c030b89999c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80
//          http://www.megalithicireland.com/Donegal/Grianan%20of%20Ailech%20001L.jpg

//Giant’s Ring

//       https://eu-assets.simpleview-europe.com/northernireland/imageresizer/?image=%2Fdmsimgs%2F073EF6FB6FCFE1C5C527391866D0D30337D2604D.jpg&action=ProductDetailImage  
//       https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Northern_Ireland_Belfast_Giants_Ring_001.jpg/1920px-Northern_Ireland_Belfast_Giants_Ring_001.jpg
//       https://www.irishnews.com/picturesarchive/irishnews/irishnews/2017/06/21/122114344-722f23dc-3721-4c6f-a4f0-1b75d58b5ab7.jpg





// =======================================================================
// sources
// ==========================================================================

// nationaltrust
// englishheritage
// wikipedia
// https://www.northlinkferries.co.uk/orkney-blog/skara-brae/
// unsplash
// https://www.historicenvironment.scot/
// http://www.megalithicireland.com/
// https://discovernorthernireland.com/
// https://www.irishnews.com/lifestyle/2017/06/24/news/take-on-nature-small-oases-of-wildlife-flourish-within-belfast-s-city-boundaries-1062913/


// ========================================================================

// const burger = document.getElementById("burger");
// const siteMenu = document.getElementById("siteMenu");
// const links = document.getElementsByClassName('links');

// burger.addEventListener("click", function() {
//   if (siteMenu.style.display === 'block') {
//     siteMenu.style.display = 'none'
//   } else {siteMenu.style.display = 'block'}
// })

// for(let i = 0; i < links.length; i++){
// links[i].addEventListener("click", () => {
//   siteMenu.style.display = 'none';
// });
// }

let tempSitesData = ''; 

class Sites {
  constructor(id, name, location, img1, img2, img3, discription) {
    this.id = id;
    this.name = name;
    this.location = location;
    this.img1 = img1;
    this.img2 = img2;
    this.img3 = img3;
    this.discription = discription;

    
  
	this.createContainer = function() { 
    tempSitesData +=	 `
  <div class='container'>
    <div class='photoFrame'>
      <img  class='img1' src='${this.img1}' alt='photo of ${this.name}'>
      <img class='img2' src='${this.img2}' alt='photo of ${this.name}'>
        <img class='img3' src='${this.img3}' alt='photo of ${this.name}'>
      </div>
      <h6>Location: ${this.location}</h6>
      <h1>${this.id}.${this.name}</h1>
      <h3>${this.discription}</h3>
  </div>`;
  document.getElementById("sitesCaontainer").innerHTML = tempSitesData;
	}
	this.createContainer(); 
  }
}


let site1 = new Sites(1, 'Silbury Hill, Avebury', 'Silbury Hill, A4, West Kennet, Marlborough SN8 1QH', 'https://www.english-heritage.org.uk/siteassets/home/visit/places-to-visit/silbury-hill/silbury-hill-hero.jpg?w=1440&h=612&mode=crop&scale=both&quality=60&anchor=&WebsiteVersion=20211126150055', 'https://cdn.pixabay.com/photo/2018/11/15/16/33/silbury-hill-3817564_960_720.jpg', 'https://www.english-heritage.org.uk/siteassets/home/visit/places-to-visit/silbury-hill/silbury-snow.jpg?w=1440&h=612&mode=crop&scale=both&quality=60&anchor=&WebsiteVersion=20211126150055', 'The largest artificial mound in Europe, mysterious Silbury Hill compares in height and volume to the roughly contemporary Egyptian pyramids. Probably completed in around 2400 BC, it apparently contains no burial. Though clearly important in itself, its purpose and significance remain unknown.Silbury Hill is part of the Avebury World Heritage Site, and a Site of Special Scientific Interest.');
let site2 = new Sites(2, 'Uffington White Horse', 'Uffington White Horse, Faringdon SN7 7QJ', 'https://nt.global.ssl.fastly.net/images/1431736113455-whh-yq3w2924-nt-commission-air.jpg?width=1920&auto=webp&crop=16:7', 'https://nt.global.ssl.fastly.net/images/1431768532670-1101374-nti-chris-lacey-resized.jpg?width=1920&auto=webp&crop=16:7', 'https://images.unsplash.com/photo-1498832229091-4425cea65b29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 'The Uffington White Horse is a prehistoric hill figure, 110 m (360 ft) long, formed from deep trenches filled with crushed white chalk. The figure is situated on the upper slopes of White Horse Hill in the English civil parish of Uffington (in the ceremonial county of Oxfordshire and historic county of Berkshire), some 16 km (10 mi) east of Swindon, 8 km (5.0 mi) south of the town of Faringdon and a similar distance west of the town of Wantage; or 2.5 km (1.6 mi) south of Uffington. The hill forms a part of the scarp of the Berkshire Downs and overlooks the Vale of White Horse to the north. The best views of the figure are obtained from the air, or from directly across the Vale, particularly around the villages of Great Coxwell, Longcot and Fernham. The site is owned and managed by the National Trust and is a scheduled monument. The Guardian stated in 2003 that "for more than 3,000 years, the Uffington White Horse has been jealously guarded as a masterpiece of minimalist art". The Uffington Horse is by far the oldest of the white horse figures in Britain and is of an entirely different design from the others inspired by it.')
let site3 = new Sites(3, 'Stonehenge', 'Stonehenge, Salisbury SP4 7DE', 'https://images.unsplash.com/photo-1564308963573-dedc7e72e13f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 'https://images.unsplash.com/photo-1559562351-77ae2247f5a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80', 'https://images.unsplash.com/photo-1602711153055-ee5c0a48bc63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1954&q=80', 'Stonehenge is perhaps the world’s most famous prehistoric monument. It was built in several stages: the first monument was an early henge monument, built about 5,000 years ago, and the unique stone circle was erected in the late Neolithic period about 2500 BC. In the early Bronze Age many burial mounds were built nearby.Today, together with Avebury, Stonehenge forms the heart of a World Heritage Site, with a unique concentration of prehistoric monuments.The earliest structures known in the immediate area are four or five pits, three of which appear to have held large pine ‘totem-pole like’ posts erected in the Mesolithic period, between 8500 and 7000 BC.[1] It is not known how these posts relate to the later monument of Stonehenge.At this time, when much of the rest of southern England was largely covered by woodland, the chalk downland in the area of Stonehenge may have been an unusually open landscape. It is possible that this is why it became the site of an early Neolithic monument complex.This complex included the causewayed enclosure at Robin Hood’s Ball, two cursus monuments or rectangular earthworks (the Greater, or Stonehenge, and Lesser Cursus), and several long barrows, all dating from the centuries around 3500 BC. The presence of these monuments probably influenced the later location of Stonehenge.');
let site4 = new Sites(4, 'Skara Brae', 'Skara Brae, Sandwick, Stromness KW16 3LR', 'https://www.northlinkferries.co.uk/wp-content/uploads/2021/11/skara-brae-neolithic-village.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Skara_Brae_12.jpg/1280px-Skara_Brae_12.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Skara_Brae_house_1_5.jpg/1280px-Skara_Brae_house_1_5.jpg', 'Skara Brae is a stone-built Neolithic settlement, located on the Bay of Skaill on the west coast of Mainland, the largest island in the Orkney archipelago of Scotland. Consisting of ten clustered houses, made of flagstones, in earthen dams that provided support for the walls; the houses included stone hearths, beds, and cupboards. A primitive sewer system, with "toilets" and drains in each house, carried effluent to the ocean. (Water was used to flush waste into a drain.)he site was occupied from roughly 3180 BC to about 2500 BC and is Europe most complete Neolithic village. Skara Brae gained UNESCO World Heritage Site status as one of four sites making up "The Heart of Neolithic Orkney".a Older than Stonehenge and the Great Pyramids of Giza, it has been called the "Scottish Pompeii" because of its excellent preservation. Care of the site is the responsibility of Historic Scotland which works with partners in managing the site: Orkney Islands Council, NatureScot (Scottish Natural Heritage), and the Royal Society for the Protection of Birds.');
let site5 = new Sites(5, 'Callanish standing stones', 'Calanais Standing Stones, 12m west of Stornoway off the A859 Isle of Lewis HS2 9DY', 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Callanish_standing_stones_1.jpg', 'https://www.historicenvironment.scot/media/2120/cal1-000235_o1.jpg?crop=0,0.18285458008504607,0,0.019838545357902158&cropmode=percentage&width=800&height=480&rnd=132723871890000000', 'https://images.unsplash.com/photo-1533410189475-f8ea9fa082ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 'The Callanish Stones (or "Callanish I": Scottish Gaelic: Clachan Chalanais or Tursachan Chalanais) are an arrangement of standing stones placed in a cruciform pattern with a central stone circle. They were erected in the late Neolithic era, and were a focus for ritual activity during the Bronze Age. They are near the village of Callanish (Gaelic: Calanais) on the west coast of Lewis in the Outer Hebrides, Scotland.The Callanish Stones consist of a stone circle of thirteen stones with a monolith near the middle. Five rows of standing stones connect to this circle. Two long rows of stones running almost parallel to each other from the stone circle to the north-northeast form a kind of avenue. In addition, there are shorter rows of stones to the west-southwest, south and east-northeast. The stones are all of the same rock type, namely the local Lewisian gneiss. Within the stone circle is a chambered tomb to the east of the central stone.');
let site6 = new Sites(6, 'Grianan of Aileach', 'Grianan of Aileach, Carrowreagh, Co. Donegal, Irlandia', 'https://upload.wikimedia.org/wikipedia/commons/0/06/Griahan_of_aileach.jpg', 'https://images.unsplash.com/photo-1603522961978-c030b89999c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80', 'http://www.megalithicireland.com/Donegal/Grianan%20of%20Ailech%20001L.jpg', 'Grianán of Aileach is probably the best known monument in Inishowen, County Donegal. Situated on a hilltop 250m above sea level the view from the stone fort of Aileach is breathtaking.The Stone Fort of Grianán of Aileach sits on a hilltop in Inishowen County Donegal. 250m above sea level, the stone fort was probably first built on an earthen rath.The view from Aileach is breathtaking. The glistening waters of Lough Foyle and Lough Swilly are clear, as is the form of the entire peninsula. A windy and exposed place, Grianán has been a silent witness to the history of Ireland.The origins of the Grianán of Aileach fort are dated back to 1700 BC. It is linked to the Tuatha de Danann who invaded Ireland before the Celts and built stone forts on top of strategic hills. They worshipped Dagda (the Good God) and he too is associated with the origins of Aileach. It was he who ordered the building of a stone fort to act as a burial monument to his dead son.The round fort is built largely without mortar. The interior has three terraces and wooden structures were built against the terraces to provide accommodation. The outline of Bronze Age or Iron Age ramparts can be seen below the fort. Legend states that the giants of Inishowen are lying sleeping but when the sacred sword is removed they will spring to life reclaiming their ancient lands.Mr Walter Bernard of Derry restored the stone fort or cashel in the 1870s. It is the centrepiece of the site, 23m in internal diameter with walls measuring 5m in height and approximately 4m in thickness. The dry stone walls contain two passages within them as well as terraces along their interior which would have allowed access to their summit');
let site7 = new Sites(7, 'Giant\'s Ring', 'Giant\'s Ring, Belfast BT8 8LE', 'https://eu-assets.simpleview-europe.com/northernireland/imageresizer/?image=%2Fdmsimgs%2F073EF6FB6FCFE1C5C527391866D0D30337D2604D.jpg&action=ProductDetailImage', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Northern_Ireland_Belfast_Giants_Ring_001.jpg/1920px-Northern_Ireland_Belfast_Giants_Ring_001.jpg', 'https://www.irishnews.com/picturesarchive/irishnews/irishnews/2017/06/21/122114344-722f23dc-3721-4c6f-a4f0-1b75d58b5ab7.jpg', 'The Giant\'s Ring is a henge monument at Ballynahatty, near Shaw\'s Bridge, Belfast, Northern Ireland. It was originally preserved by Viscount Dungannon. The inscribed stone tablet on the wall surrounding the site which details Viscount Dungannon\'s interest was carved by Belfast stonecarver Charles A Thompson about c.1919.The site is a State Care Historic Monument and has ASAI (Area of Significant Archaeological Interest) status. The site consists of a circular enclosure, 180 m (590 ft) in diameter and 2.8 hectares (6.9 acres) in area, surrounded by a circular earthwork bank 3.5 m (11 ft) high. At least three of the five irregularly spaced gaps in the bank are intentional and possibly original. East of the centre of the enclosure is a small passage tomb with a vestigial passage facing west. There were reports of other tombs outside the enclosure, but there is no trace of these.The Giant\'s Ring dates from the Neolithic period and was built around 2700BC, meaning that it predates the Egyptian pyramids. The site has had some sort of public use throughout its history. It is near the Shaw\'s Bridge crossing of the River Lagan, a point which has been used as a crossing of the river since at least the Stone Age.[5] The original purpose of the monument was most likely as a meeting place or as a memorial to the dead. Archaeologist Michael J. O\'Kelly believed that the Giant\'s Ring, like hundreds of other passage tombs built in Ireland during the Neolithic period, such as Newgrange, showed evidence for a religion which venerated the dead as one of its core principles. He believed that this "cult of the dead" was just one particular form of European Neolithic religion, and that other megalithic monuments displayed evidence for different religious beliefs which were solar, rather than death-orientated. In the 18th century the site was used for horse racing. A ritual site adjacent to the henge was excavated in the early 1990s by Barrie Hartwell of the Queen\'s University of Belfast.');
