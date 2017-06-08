//A global array that stores static data for map loading

const TILE_SIZE = 32;

GLOBAL_MAP_DATA = [
   {
       // 0
       //This is the overworld object
       
       //TILEMAP FILES
       mapKey: 'oworld', //key for tilemap
       setKey: 'oworld-tile',
   },
   {
       // 1
       //Kevn1 map definition
       //TILEMAP FILES
       mapKey: 'kevn1-map',
       setKey: 'forest-tile', //key for tilemap
       
       bgKey: 'kevn-bg',
       
       music: 'oworld-song'
   },
   {
       // 2
       //Kevn2 map definition
       //TILEMAP FILES
       mapKey: 'kevn2-map',
       setKey: 'forest-tile', //key for tilemap
       
       bgKey: 'kevn-bg',
       
       music: 'oworld-song'
   },
   {
       // 3
       //Hatu map definition
       //TILEMAP FILES
       mapKey: 'hatu1-map',
       setKey: 'mountain-tile', //key for tilemap
       
       bgKey: 'hatu-bg',
       
       music: 'oworld-song'
   },
   {
       // 4
       //Xanxiz map definition
       //TILEMAP FILES
       mapKey: 'xanxik1-map',
       setKey: 'forest-tile', //key for tilemap
       
       bgKey: 'xanzik-bg',
       
       music: 'oworld-song'
   },
   {
       // 5
       //ice map definition
       //TILEMAP FILES
       mapKey: 'ice1-map',
       setKey: 'ice-tile', //key for tilemap
       
       bgKey: 'hatu-bg',
       
       music: 'oworld-song'
   },
   {
       // 6
       //forestbattle1 map definition
       //TILEMAP FILES
       mapKey: 'forestbattle',
       setKey: 'forest-tile', //key for tilemap
       
       bgKey: 'kevn-bg',
       
       music: 'battle-song'
   },
   {
       // 7
       //hero sanctuary map
       mapKey: 'herosanctuary',
       setKey: 'forest-tile',
       
       bgKey: 'kevn-bg',
       
       music: 'title-song'
   },
   {
       // 8
       //Boss fight
       mapKey: 'boss-battle',
       setKey: 'mountain-tile',
       
       bgKey: 'boss-bg',
       
       music: 'gameover-song'
   },
   {
      // 9
      //forestbattle2
      mapKey: 'forestbattle2',
      setKey: 'forest-tile',
      
      bgKey: 'kevn-bg',
      
      music: 'battle-song'
   }
]

const O_WORLD = 0;
const KEVN_1 = 1;
const HATU_1 = 2;
const HATU_2 = 3;
const XANZIK_1 = 4;
const ICE_1 = 5;
const FORESTBATTLE_1 = 6;
const HERO_SANCTUARY = 7;
const BOSS_FIGHT = 8;
const FORESTBATTLE_2 = 9;
