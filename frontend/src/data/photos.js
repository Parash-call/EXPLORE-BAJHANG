const photos = {
  destinations: {
    'Khaptad National Park': 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&h=500&fit=crop',
    'Khaptad': 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&h=500&fit=crop',
    'Surma Valley': 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=500&fit=crop',
    'Surma': 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=500&fit=crop',
    'Durga Thali': 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=500&fit=crop',
    'Durgathali': 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=500&fit=crop',
    'Durgathali Viewpoint': 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=500&fit=crop',
    'Khaptad Baba Ashram': 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=500&fit=crop',
    'Triveni Dham': 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=500&fit=crop',
    'Api Base Camp': 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=500&fit=crop',
    'Masta Cave': 'https://images.unsplash.com/photo-1520262454473-a1a82276a574?w=800&h=500&fit=crop',
    'Gyaneshwor Temple': 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&h=500&fit=crop',
    'Melauli Lake': 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=500&fit=crop',
    'Satellite Viewpoint': 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=500&fit=crop',
    'Basuling Church': 'https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=800&h=500&fit=crop',
    'Lamabagar Waterfall': 'https://images.unsplash.com/photo-1432405972618-c6b0cfba8952?w=800&h=500&fit=crop',
    'Saipal Viewpoint': 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=500&fit=crop',
    'Traditional Village': 'https://images.unsplash.com/photo-1489494695353-e2f69bbe43e8?w=800&h=500&fit=crop',
    'Khaptad Phatante Lake': 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&h=500&fit=crop',
    'Chhinga Cave': 'https://images.unsplash.com/photo-1520262454473-a1a82276a574?w=800&h=500&fit=crop',
    'Meshamkhola Bridge': 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&h=500&fit=crop',
    'Pandava Cave': 'https://images.unsplash.com/photo-1520262454473-a1a82276a574?w=800&h=500&fit=crop',
    'Sudurpaschim View Tower': 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=500&fit=crop',
    'Surkhet Corridor Trek Start': 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=500&fit=crop',
  },
  types: {
    national_park: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&h=500&fit=crop',
    valley: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=500&fit=crop',
    meadow: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=500&fit=crop',
    religious: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=500&fit=crop',
    base_camp: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=500&fit=crop',
    cave: 'https://images.unsplash.com/photo-1520262454473-a1a82276a574?w=800&h=500&fit=crop',
    temple: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&h=500&fit=crop',
    lake: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=500&fit=crop',
    viewpoint: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=500&fit=crop',
    church: 'https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=800&h=500&fit=crop',
    waterfall: 'https://images.unsplash.com/photo-1432405972618-c6b0cfba8952?w=800&h=500&fit=crop',
    village: 'https://images.unsplash.com/photo-1489494695353-e2f69bbe43e8?w=800&h=500&fit=crop',
    bridge: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&h=500&fit=crop',
    trek_start: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=500&fit=crop',
  },
  hero: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/16-09-01_164250_Nepal_Bajhang_Looking_E_Over_Chainpur_Bazaar.jpg/1280px-16-09-01_164250_Nepal_Bajhang_Looking_E_Over_Chainpur_Bazaar.jpg',
  gallery: [
    { url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&h=600&fit=crop', caption: 'Khaptad National Park', photographer: 'Explore Bajhang' },
    { url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop', caption: 'Durgathali Meadow', photographer: 'Explore Bajhang' },
    { url: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop', caption: 'Khaptad Baba Ashram', photographer: 'Explore Bajhang' },
    { url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=600&fit=crop', caption: 'Surma Valley', photographer: 'Explore Bajhang' },
    { url: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop', caption: 'Trekking Trail', photographer: 'Explore Bajhang' },
    { url: 'https://images.unsplash.com/photo-1432405972618-c6b0cfba8952?w=800&h=600&fit=crop', caption: 'Waterfall', photographer: 'Explore Bajhang' },
    { url: 'https://images.unsplash.com/photo-1489494695353-e2f69bbe43e8?w=800&h=600&fit=crop', caption: 'Traditional Village', photographer: 'Explore Bajhang' },
    { url: 'https://images.unsplash.com/photo-1520262454473-a1a82276a574?w=800&h=600&fit=crop', caption: 'Sacred Cave', photographer: 'Explore Bajhang' },
    { url: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&h=600&fit=crop', caption: 'Suspension Bridge', photographer: 'Explore Bajhang' },
    { url: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&h=600&fit=crop', caption: 'Ancient Temple', photographer: 'Explore Bajhang' },
    { url: 'https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=800&h=600&fit=crop', caption: 'Heritage Building', photographer: 'Explore Bajhang' },
    { url: 'https://images.unsplash.com/photo-1494783367193-149034c05e8f?w=800&h=600&fit=crop', caption: 'Mountain Landscape', photographer: 'Explore Bajhang' },
  ],
  routes: [
    'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=500&fit=crop',
    'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=500&fit=crop',
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=500&fit=crop',
  ],
  hotels: [
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=500&fit=crop',
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=500&fit=crop',
    'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=500&fit=crop',
  ],
  festivals: [
    'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=500&fit=crop',
    'https://images.unsplash.com/photo-1545128485-c4805e3e0473?w=800&h=500&fit=crop',
    'https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800&h=500&fit=crop',
  ],
  guides: [
    'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=500&fit=crop',
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=500&fit=crop',
  ],
};

const normalizePlaceName = (value) => {
  if (!value) return '';
  return String(value)
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/[–—_-]/g, ' ')
    .replace(/[.,()]/g, '')
    .toLowerCase();
};

const destinationAliases = {
  durgathali: 'Durgathali',
  'durga thali': 'Durga Thali',
  khaptad: 'Khaptad',
  surma: 'Surma',
};

const bajhangPhotoSources = {
  khaptadPark: {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Khaptad_Lake_-_Khaptad_National_Park%2C_Nepal.jpg/960px-Khaptad_Lake_-_Khaptad_National_Park%2C_Nepal.jpg',
    alt: 'Khaptad Lake in Khaptad National Park, Nepal',
    credit: 'Anil Bhatta',
    source: 'https://commons.wikimedia.org/wiki/File:Khaptad_Lake_-_Khaptad_National_Park,_Nepal.jpg',
    license: 'CC BY-SA 4.0',
    exact: true,
  },
  ashram: {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Khaptad_Baba_Ashram.jpg/960px-Khaptad_Baba_Ashram.jpg',
    alt: 'Khaptad Baba Ashram in Khaptad National Park',
    credit: 'Dipalmalla',
    source: 'https://commons.wikimedia.org/wiki/File:Khaptad_Baba_Ashram.jpg',
    license: 'CC BY-SA 4.0',
    exact: true,
  },
  surmaLake: {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Surma_Sarobar.jpg/960px-Surma_Sarobar.jpg',
    alt: 'Surma Sarobar, a high-altitude lake in Bajhang',
    credit: 'Janak Bhatta',
    source: 'https://commons.wikimedia.org/wiki/File:Surma_Sarobar.jpg',
    license: 'CC BY-SA 4.0',
    exact: true,
  },
  surmaKunda: {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Surma_Kunda%2C_Bajhang_01.jpg/960px-Surma_Kunda%2C_Bajhang_01.jpg',
    alt: 'Surma Kunda landscape in Surma Rural Municipality, Bajhang',
    credit: 'Cultural beauty of Bajhang',
    source: 'https://commons.wikimedia.org/wiki/File:Surma_Kunda,_Bajhang_01.jpg',
    license: 'CC BY-SA 4.0',
    exact: true,
  },
  chainpur: {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/16-09-01_164250_Nepal_Bajhang_Looking_E_Over_Chainpur_Bazaar.jpg/960px-16-09-01_164250_Nepal_Bajhang_Looking_E_Over_Chainpur_Bazaar.jpg',
    alt: 'View over Chainpur Bazaar and the Seti River in Bajhang',
    credit: 'Awasman',
    source: 'https://commons.wikimedia.org/wiki/File:16-09-01_164250_Nepal_Bajhang_Looking_E_Over_Chainpur_Bazaar.jpg',
    license: 'CC BY-SA 4.0',
    exact: true,
  },
  saipal: {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Mt_Saipal.png/800px-Mt_Saipal.png',
    alt: 'Mount Saipal, 7,031 metres, in the Far Western Himalayas',
    credit: 'SimulationWig',
    source: 'https://commons.wikimedia.org/wiki/File:Mt_Saipal.png',
    license: 'CC BY-SA 4.0',
    exact: true,
  },
  mountains: {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Mountain_ranges_khaptad_national_park.jpg/960px-Mountain_ranges_khaptad_national_park.jpg',
    alt: 'Mountain ranges seen from Bajhang district',
    credit: 'Joyboy420',
    source: 'https://commons.wikimedia.org/wiki/File:Mountain_ranges_khaptad_national_park.jpg',
    license: 'CC BY-SA 4.0',
    exact: false,
  },
  setiRiver: {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Mountain_and_seti.jpg/960px-Mountain_and_seti.jpg',
    alt: 'Seti River and mountain scenery in Bajhang',
    credit: 'Abhishek Thapa Kshetri',
    source: 'https://commons.wikimedia.org/wiki/File:Mountain_and_seti.jpg',
    license: 'CC BY-SA 4.0',
    exact: false,
  },
  bridge: {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Jhulange_Pul.jpg/960px-Jhulange_Pul.jpg',
    alt: 'Suspension bridge over the Seti in Bajhang',
    credit: 'Abhishek Thapa Kshetri',
    source: 'https://commons.wikimedia.org/wiki/File:Jhulange_Pul.jpg',
    license: 'CC BY-SA 4.0',
    exact: false,
  },
  bajhang: {
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/13/Bajhang.jpg',
    alt: 'Mountain and grassland scenery in Bajhang district',
    credit: 'Lakshmi 045',
    source: 'https://commons.wikimedia.org/wiki/File:Bajhang.jpg',
    license: 'CC BY-SA 4.0',
    exact: false,
  },
  badimalika: {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Badimalika_Temple%2C_Bajura%2C_Nepal.jpg/960px-Badimalika_Temple%2C_Bajura%2C_Nepal.jpg',
    alt: 'Badimalika Temple in neighboring Bajura district',
    credit: 'sigdelsanjog',
    source: 'https://commons.wikimedia.org/wiki/File:Badimalika_Temple,_Bajura,_Nepal.jpg',
    license: 'CC BY-SA 4.0',
    exact: true,
  },
  village: {
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c1/USAID_Measuring_Impact_Conservation_Enterprise_Retrospective_%2825423114627%29.jpg/960px-USAID_Measuring_Impact_Conservation_Enterprise_Retrospective_%2825423114627%29.jpg',
    alt: 'Kailas village in Bajhang district',
    credit: 'Jason Houston for USAID Biodiversity & Forestry',
    source: 'https://commons.wikimedia.org/wiki/File:USAID_Measuring_Impact_Conservation_Enterprise_Retrospective_(25423114627).jpg',
    license: 'Public domain',
    exact: false,
  },
};

const destinationPhotoMap = {
  'khaptad national park': bajhangPhotoSources.khaptadPark,
  'khaptad lake': bajhangPhotoSources.khaptadPark,
  khaptad: bajhangPhotoSources.khaptadPark,
  'khaptad baba ashram': bajhangPhotoSources.ashram,
  'surma sarovar lake': bajhangPhotoSources.surmaLake,
  'surma sarobar lake': bajhangPhotoSources.surmaLake,
  'surma sarobar': bajhangPhotoSources.surmaLake,
  'surma kunda valley': bajhangPhotoSources.surmaKunda,
  'durgathali meadow': bajhangPhotoSources.mountains,
  durgathali: bajhangPhotoSources.mountains,
  'durga thali': bajhangPhotoSources.mountains,
  'surma valley': { ...bajhangPhotoSources.surmaKunda, exact: false },
  surma: bajhangPhotoSources.surmaKunda,
  'chainpur city of kings': bajhangPhotoSources.chainpur,
  chainpur: bajhangPhotoSources.chainpur,
  'seti river gorge': bajhangPhotoSources.setiRiver,
  'meshamkhola bridge': bajhangPhotoSources.bridge,
  'badimalika temple': bajhangPhotoSources.badimalika,
  'bannimasta temple': { ...bajhangPhotoSources.bajhang, exact: false },
  'masta cave': { ...bajhangPhotoSources.bajhang, exact: false },
  'khaptad phatante lake': { ...bajhangPhotoSources.khaptadPark, exact: false },
  'triveni dham': { ...bajhangPhotoSources.setiRiver, exact: false },
  'melauli lake': { ...bajhangPhotoSources.surmaLake, exact: false },
  'mount saipal': bajhangPhotoSources.saipal,
  'mount saipal 7031m': bajhangPhotoSources.saipal,
  'mt saipal 7031m': bajhangPhotoSources.saipal,
  saipal: bajhangPhotoSources.saipal,
  'saipal viewpoint': { ...bajhangPhotoSources.saipal, exact: false },
  'api himal': bajhangPhotoSources.mountains,
  'api himal 7132m': bajhangPhotoSources.mountains,
  'api base camp': bajhangPhotoSources.mountains,
  'traditional village': bajhangPhotoSources.village,
  'surkhet corridor trek start': bajhangPhotoSources.mountains,
};

const galleryPhotos = [
  { ...bajhangPhotoSources.khaptadPark, caption: 'Khaptad National Park', photographer: 'Anil Bhatta' },
  { ...bajhangPhotoSources.ashram, caption: 'Khaptad Baba Ashram', photographer: 'Dipalmalla' },
  { ...bajhangPhotoSources.saipal, caption: 'Mount Saipal, 7,031m', photographer: 'SimulationWig' },
  { ...bajhangPhotoSources.surmaLake, caption: 'Surma Sarobar', photographer: 'Janak Bhatta' },
  { ...bajhangPhotoSources.surmaKunda, caption: 'Surma Kunda', photographer: 'Cultural beauty of Bajhang' },
  { ...bajhangPhotoSources.chainpur, caption: 'Chainpur Bazaar and the Seti River', photographer: 'Awasman' },
  { ...bajhangPhotoSources.mountains, caption: 'Mountain ranges seen from Bajhang', photographer: 'Joyboy420' },
  { ...bajhangPhotoSources.bridge, caption: 'Suspension bridge over the Seti', photographer: 'Abhishek Thapa Kshetri' },
  { ...bajhangPhotoSources.badimalika, caption: 'Badimalika Temple, Bajura', photographer: 'sigdelsanjog' },
  { ...bajhangPhotoSources.village, caption: 'Kailas village in Bajhang', photographer: 'Jason Houston for USAID Biodiversity & Forestry' },
];

const regionalPhotoByType = {
  national_park: bajhangPhotoSources.khaptadPark,
  lake: bajhangPhotoSources.surmaLake,
  valley: bajhangPhotoSources.surmaKunda,
  mountain: bajhangPhotoSources.mountains,
  base_camp: bajhangPhotoSources.mountains,
  meadow: bajhangPhotoSources.mountains,
  viewpoint: bajhangPhotoSources.mountains,
  trek_start: bajhangPhotoSources.mountains,
  bridge: bajhangPhotoSources.bridge,
  river: bajhangPhotoSources.setiRiver,
  village: bajhangPhotoSources.village,
  cave: bajhangPhotoSources.bajhang,
  waterfall: bajhangPhotoSources.setiRiver,
  temple: bajhangPhotoSources.bajhang,
  religious: bajhangPhotoSources.bajhang,
  church: bajhangPhotoSources.bajhang,
  heritage: bajhangPhotoSources.chainpur,
  town: bajhangPhotoSources.chainpur,
};

export const getDestinationPhotoInfo = (name, type, image) => {
  const normalizedName = normalizePlaceName(name);
  const aliasName = destinationAliases[normalizedName];
  const namedPhoto = destinationPhotoMap[normalizePlaceName(aliasName || normalizedName)];

  if (namedPhoto) return namedPhoto;
  if (typeof image === 'string' && /^https?:\/\//i.test(image) && !image.includes('images.unsplash.com')) {
    return {
      url: image,
      alt: `${name || 'Bajhang destination'} photo`,
      credit: 'Destination photo source',
      source: image,
      license: 'See source',
      exact: false,
    };
  }

  return regionalPhotoByType[type] || bajhangPhotoSources.bajhang;
};

export const getDestinationPhoto = (name, type, image) => {
  return getDestinationPhotoInfo(name, type, image).url;
};

export const getDestinationPhotoAlt = (name, type, image) => {
  return getDestinationPhotoInfo(name, type, image).alt;
};

export const getDestinationPhotoCredit = (name, type, image) => {
  const photo = getDestinationPhotoInfo(name, type, image);
  const description = photo.exact ? photo.credit : `${photo.credit} · Regional Bajhang image`;
  return { ...photo, description };
};

export const getRoutePhoto = (index) => {
  return photos.routes[index % photos.routes.length];
};

export const getHotelPhoto = (type) => {
  if (type === 'homestay') return photos.hotels[1];
  if (type === 'lodge') return photos.hotels[2];
  return photos.hotels[0];
};

export const getFestivalPhoto = (index) => {
  return photos.festivals[index % photos.festivals.length];
};

export const getGuidePhoto = (index) => {
  return photos.guides[index % photos.guides.length];
};

export const getHeroPhoto = () => bajhangPhotoSources.chainpur.url;
export const getGalleryPhotos = () => galleryPhotos;

export default photos;
