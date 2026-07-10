import { IRecipeData } from "../types";

const recipeModules = import.meta.glob('../resipes-data/**/*', { eager: true });


// добавить раздел кулинарные лайфхаки
// В фарш добавить ледяную воду - она запечатает жирок, а потом он раскроется 
// Глянцевый блеск соуса: В самый последний момент, когда соус уже снят с огня, бросьте в него маленький кусочек ледяного сливочного масла (около 10 г) и интенсивно вмешайте его венчиком. Этот прием профессиональных шеф-поваров называется «затягиванием» соуса — он придаст красивый глянец и бархатистую текстуру.


// лаваш с рыбкой, твородным сыром и огурчиком
// чебуреки
// сборный со скремблом, вообще надо испраивть раздел с яйцами!
// тост с Утка копченая, хлеб тестовый, авокадо, вяленые томаты, творожный сыр, листья салата
// измнеить сырные пвалочки со скремблом!
// гранд драник на мелкой терке с начинками сверху
// Роти с бананом и сгущенкой
// овсянка с томатами
// бутики с ветчиной и сыром н аточтовом + обвалять в яйцах и пожарить
export const breakfast = {
  sovietSandwiches: recipeModules['../resipes-data/breakfast/soviet-sandwiches.json'],
  milkPorridge: recipeModules['../resipes-data/breakfast/milk-porridge.json'],
  bliny: recipeModules['../resipes-data/breakfast/bliny.json'],
  blinyFilling: recipeModules['../resipes-data/breakfast/bliny-filling.json'],
  croissants: recipeModules['../resipes-data/breakfast/croissants.json'],
  bowl: recipeModules['../resipes-data/breakfast/bowl.json'],
  draniki: recipeModules['../resipes-data/breakfast/draniki.json'],
  eggs: recipeModules['../resipes-data/breakfast/eggs.json'],
  lavashEnvelopes: recipeModules['../resipes-data/breakfast/lavash-envelopes.json'],
  lepeshkaOmlette: recipeModules['../resipes-data/breakfast/lepeshka-omlette.json'], 
  lepeshkaMeet: recipeModules['../resipes-data/breakfast/lepeshka-meet.json'],
  omeletteInOven: recipeModules['../resipes-data/breakfast/omelette-in-oven.json'],
  pancakesCarbonadeChesse: recipeModules['../resipes-data/breakfast/pancakes-carbonade-cheese.json'],
  syrniki: recipeModules['../resipes-data/breakfast/syrniki.json'],
  shaksuka: recipeModules['../resipes-data/breakfast/shaksuka.json'],
  shawarma: recipeModules['../resipes-data/breakfast/shawarma.json'],
  salad: recipeModules['../resipes-data/breakfast/salad.json'],
  gaufres: recipeModules['../resipes-data/breakfast/gaufres.json'],
  fishFingers: recipeModules['../resipes-data/breakfast/fish-fingers.json'],
  tunaSandwiches: recipeModules['../resipes-data/breakfast/tuna-sandwiches.json'],
  chickenCheeseburger: recipeModules['../resipes-data/breakfast/chicken-cheeseburger.json'],
  bruschettaWithPersimmons: recipeModules['../resipes-data/breakfast/bruschetta-with-persimmons.json'],
  scrambleSandwiches: recipeModules['../resipes-data/breakfast/scramble-sandwiches.json'],
};

export const desserts = {
  
}
// Пицца с маскарпоне
// пирог с щечками
// ленивый бешбармак
// Куриная грудка с соевым соусом как в пинтересте
// Рыба в духовке с морковью, луком и заправки из яйца, сметаны и сыра 
// картошка бейби со сметаной, петрушкой, грибами(лисичками) и свининой
// нут со свининой тушеной
// щечки в красном вине
// бургеры с карамелизированным луком(с бальзамическим кремом)
// костный мозг и стейк
// бешбармак обычный
export const mains = {
  lagman: recipeModules['../resipes-data/mains/lagman.json'],
  julienneInDough: recipeModules['../resipes-data/mains/julienne-in-dough.json'],
  cutlets: recipeModules['../resipes-data/mains/cutlets.json'],
  cutletsChicken: recipeModules['../resipes-data/mains/cutlets-chicken.json'],
  cutletsKiev: recipeModules['../resipes-data/mains/cutlets-kiev.json'],
  udonWithChicken: recipeModules['../resipes-data/mains/udon-with-chicken.json'],
  ratatouille: recipeModules['../resipes-data/mains/ratatouille.json'],
  mantas: recipeModules['../resipes-data/mains/mantas.json'],
  pelmeni: recipeModules['../resipes-data/mains/pelmeni.json'],
  beefStroganof: recipeModules['../resipes-data/mains/beef-stroganof.json'], 
  pot: recipeModules['../resipes-data/mains/pot.json'],
  chanahi: recipeModules['../resipes-data/mains/chanahi.json'],
  bbqRibs: recipeModules['../resipes-data/mains/bbq-ribs.json'],
  riceWithShrimpAndPineapple: recipeModules['../resipes-data/mains/rice-with-shrimp-and-pineapple.json'],
  kroshkaKartoshka: recipeModules['../resipes-data/mains/kroshka-kartoshka.json'],
  meatWithGratedPotatoes: recipeModules['../resipes-data/mains/meat-with-grated-potatoes.json'],
  dolma: recipeModules['../resipes-data/mains/dolma.json'],
  ragu: recipeModules['../resipes-data/mains/ragu.json'],
  bigus: recipeModules['../resipes-data/mains/bigus.json'],
  curry: recipeModules['../resipes-data/mains/curry.json'],
  sobaWithDuck: recipeModules['../resipes-data/mains/soba-with-duck.json'],
  eggNoodlesWithChicken: recipeModules['../resipes-data/mains/egg-noodles-with-chicken.json'],
  onigiri: recipeModules['../resipes-data/mains/onigiri.json'],
  odjahuri: recipeModules['../resipes-data/mains/odjahuri.json'],
  azu: recipeModules['../resipes-data/mains/azu.json'],
  plov: recipeModules['../resipes-data/mains/plov.json'],
  eggplantParmesan: recipeModules['../resipes-data/mains/eggplant-parmesan.json'],
  stuffed: recipeModules['../resipes-data/mains/stuffed.json'], 
  asianPork: recipeModules['../resipes-data/mains/asian-pork.json'],
  chickenChkmeruli: recipeModules['../resipes-data/mains/chicken-chkmeruli.json'],
}

export const salads = {
  homeSalad: recipeModules['../resipes-data/salads/home-salad.json'],
  greekSalad: recipeModules['../resipes-data/salads/greek-salad.json'],
  tiffanySalad: recipeModules['../resipes-data/salads/tiffany-salad.json'],
  pinappleSalad: recipeModules['../resipes-data/salads/pinapple-salad.json'],
  caesarSalad: recipeModules['../resipes-data/salads/caesar-salad.json'],
  beefSalad: recipeModules['../resipes-data/salads/beef-salad.json'],
  ministerialSalad: recipeModules['../resipes-data/salads/ministerial-salad.json'],
  snowSalad: recipeModules['../resipes-data/salads/snow-salad.json'],
  lusaSalad: recipeModules['../resipes-data/salads/lusa-salad.json'],
  coleSlawSalad: recipeModules['../resipes-data/salads/cole-slaw-salad.json'],
  funchoseSalad: recipeModules['../resipes-data/salads/funchose-salad.json'],
  celerySalad: recipeModules['../resipes-data/salads/celery-salad.json'],
  crabSalad: recipeModules['../resipes-data/salads/crab-salad.json'],
  mangoSalad: recipeModules['../resipes-data/salads/mango-salad.json'],
  bakuSalad: recipeModules['../resipes-data/salads/baku-salad.json'],
  vinegretSalad: recipeModules['../resipes-data/salads/vinegret-salad.json'],
  georgiaSalad: recipeModules['../resipes-data/salads/georgia-salad.json'],
  chickenWaldorfSalad: recipeModules['../resipes-data/salads/chicken-waldorf.json'],
}

// баклажаны с творожным сыром и чесноком внутри
// самса
// пирожки
export const snacks = {
  bakedPeppers: recipeModules['../resipes-data/snacks/baked-peppers.json'],
  roastedChickpeas: recipeModules['../resipes-data/snacks/roasted-chickpeas.json'],
  sausagesInDough: recipeModules['../resipes-data/snacks/sausages-in-dough.json'],
  smoothie: recipeModules['../resipes-data/snacks/smoothie.json'],
}


// чакапули https://amrestogroup.ru/grill-vino-and-khachapuri/menu/supi/chakapuli_d
// сырный суп с грибами - https://eda.rambler.ru/recepty/supy/syrnyy-sup-s-gribami-175462
export const soups = {
  borsch: recipeModules['../resipes-data/soups/borsch.json'],
  shchi: recipeModules['../resipes-data/soups/shchi.json'],
  solyanka: recipeModules['../resipes-data/soups/solyanka.json'],
  chickenSoup: recipeModules['../resipes-data/soups/chicken-soup.json'],
  tomYam: recipeModules['../resipes-data/soups/tom-yam.json'],
  peaSoup: recipeModules['../resipes-data/soups/pea-soup.json'],
  pickle: recipeModules['../resipes-data/soups/pickle.json'],
  dushbara: recipeModules['../resipes-data/soups/dushbara.json'],
  cheeseChicken: recipeModules['../resipes-data/soups/cheese-chicken.json'],
  spicyAvocadoSoup: recipeModules['../resipes-data/soups/spicy-avocado-soup.json'],
  pumpkinWithCurryAndShrimp: recipeModules['../resipes-data/soups/pumpkin-with-curry-and-shrimp.json'],
  ministroneWithPesto: recipeModules['../resipes-data/soups/ministrone-with-pesto.json'],
  finnishUha: recipeModules['../resipes-data/soups/finnish-uha.json'],
  okroshka: recipeModules['../resipes-data/soups/okroshka.json'],  
  chakapuli: recipeModules['../resipes-data/soups/chakapuli.json'],
  mushroom: recipeModules['../resipes-data/soups/mushroom.json'],
  cheeseMashroom: recipeModules['../resipes-data/soups/cheese-mushroom.json'],
}

export const pastas = {
  carbonara: recipeModules['../resipes-data/pastas/carbonara.json'],
  bolognese: recipeModules['../resipes-data/pastas/bolognese.json'],
  lasagne: recipeModules['../resipes-data/pastas/lasagne.json'],
  orzoWithShrimp: recipeModules['../resipes-data/pastas/orzo-with-shrimp.json'],
  pestoWithSmokedChicken: recipeModules['../resipes-data/pastas/pesto-with-smoked-chicken.json'],
  russian: recipeModules['../resipes-data/pastas/russian.json'],
  tomatoWithMeatballs: recipeModules['../resipes-data/pastas/tomato-with-meatballs.json'],
  macAndCheese: recipeModules['../resipes-data/pastas/mac-and-cheese.json'],
  broccoliAndTrout: recipeModules['../resipes-data/pastas/broccoli-and-trout.json'],
};


// бигмак
// цезарь
// квасный
// Чесночный соус(Майонез, молотый чеснок, сливки, соль, сахар, сорбиновая кислота), соус унаги, соус шрирача, перечная смесь шичими
export const sauces = {
  tartar: recipeModules['../resipes-data/sauces/tartar.json'],
}


export const recipes = {
  ...breakfast,
  ...desserts,
  ...mains,
  ...pastas,
  ...salads, 
  ...snacks,
  ...soups,
  ...sauces,
};


export const getRecipe= (name: string) => {
  return recipes[name as keyof typeof recipes] as IRecipeData;
};



// добавить клевые сайты 
// https://кухня.рф
// https://cooklikemary.ru/recipe
// https://dolcevitablog.ru
