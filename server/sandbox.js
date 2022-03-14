/* eslint-disable no-console, no-process-exit */
const { contains } = require('cheerio/lib/static');
const dedicatedbrand = require('./sources/dedicatedbrand');
const montlimardbrand = require('./sources/Montlimart');
const adresseparisbrand = require('./sources/AdresseParis');
globalThis.liste_products = [];

async function sandbox (eshop, eshop2) {
  try {
    if(eshop == 'https://www.dedicatedbrand.com/en/men/all-men#page=10'){
      let dedicated_products = [];
      console.log(`🕵️‍♀️  browsing ${eshop} source`);
      let products = await dedicatedbrand.scrape(eshop);
      dedicated_products = products; 
      //console.log(dedicated_products);
      console.log('done');
      this.liste_products = dedicated_products;
      console.log('LISTE ',this.liste_products);

    }
    if(eshop2 == 'https://www.montlimart.com/toute-la-collection.html'){
      let montlimart_products = [];
      console.log(`🕵️‍♀️  browsing ${eshop2} source`);

      let products = await montlimardbrand.scrape(eshop2);
      montlimart_products = products; 
      console.log('done');
      //console.log(montlimart_products);
      console.log('done');
      this.liste_products.push(montlimart_products);
      console.log('LISTE2 ',this.liste_products);
      process.exit(0);
    }/*
    else{
      let adresseparis_products = [];
      console.log(`🕵️‍♀️  browsing ${eshop} source`);

      let products = await adresseparisbrand.scrape(eshop);
      adresseparis_products = products; 
      console.log(adresseparis_products);
      console.log('done');
      process.exit(0);      
    }*/
  } catch (e) {
    console.error(e); 
    process.exit(1);
  }
}
//const [,, eshop] = process.argv;

sandbox('https://www.dedicatedbrand.com/en/men/all-men#page=10','https://www.montlimart.com/toute-la-collection.html');
//sandbox('https://www.montlimart.com/toute-la-collection.html');
//sandbox('https://adresse.paris/630-toute-la-collection');

// PB AVEC LES ID A REVOIR

// lien de mongodb atlas
// https://cloud.mongodb.com/v2/6227773b8c9a17106aacd209#metrics/replicaSet/62277ea229a6fc16dddd6b66/explorer/fashion-sample/products/find

// lien tuto mongoDB atlas
// https://www.thepolyglotdeveloper.com/2018/09/developing-restful-api-nodejs-mongodb-atlas/

// pour la prochaine fois : Modifier les ids pour qu'ils soient uniques
// inserer les nouveaux produits dans mongodb atlas
// faire les 2 dernieres des 3 fcts du point 5