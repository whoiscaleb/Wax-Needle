const mongoose = require("mongoose")
const product = require('./models/products.js');
const Products = require("./models/products.js");
require('dotenv').config();
mongoose.connect(process.env.DATABASE_URL);


// Database Connection Error/Success
// Define callback functions for various events
const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));


const productArr = [
  {
    name: 'Jordan 1 x Union LA',
    description: 'Lights, Cameras, Action! Nike has officially gone Hollywood and released the Jordan 1 Retro High Union Los Angeles Black Toe. This unique Jordan 1 comes with a white leather upper with a red accent, black Nike "Swoosh", cream midsole, and red sole.',
    img: 'https://i.ebayimg.com/images/g/ckMAAOSwv-xb8FLT/s-l1600.jpg',
    price: 190,
    qty: 82
  }, 
  {
    name: 'Air Force One Low 07',
    description: "The Nike Air Force 1 Low White 2007 features an all-white leather upper with a perforated toe box and Swoosh overlays. A Nike heel embroidery and white sole completes the design.",
    img: 'https://m.media-amazon.com/images/I/81uiWMk9dnL._AC_UL1500_.jpg',
    price: 110,
    qty: 17
  }, {
    name: 'Staple Pigeon Nike SB Dunk',
    description: 'Kung Fu Panda would probably lose his mind after seeing the Nike SB Dunk Low Staple Panda Pigeon. This Nike SB comes in a white upper with black accents, white Nike "Swoosh", black midsole and translucent sole. ',
    img: 'https://images.stockx.com/images/Nike-SB-Dunk-Low-Panda-Pigeon-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1607048105',
    price: 850,
    qty: 8
  },   {
      name: 'Nike Air Max 1 OG 86',
      description: 'The Air Max 1 ‘86 Big Bubble released as Nikes premier Air Max Day release in 2023. The sneakers are constructed using grey nubuck, white mesh and red suede across the uppers and a large air unit on the midsole. Nike used Sport Red branding on the tongue and heel of the sneaker.',
      img: 'https://media.endclothing.com/end-features/f_auto,q_auto:eco,w_1520/prodfeatures/df24a3c2-2246-452e-9b64-2bf9a8457f28_DQ3989-100_launches_hero_landscape_1.png?auto=compress,format',
      price: 150,
      qty: 110
    }, {
      name: 'New Balance 550',
      description: "The New Balance 550 White Green features a smooth white leather upper with a grey suede toe wrap and green detailing. From there, a New Balance Basketball woven tongue label and matching sole completes the design.",
      img: 'https://www.lesitedelasneaker.com/wp-content/images/2023/01/new-balance-550-beige-nightwatch-green-bb550vtc-banner.jpg',
      price: 110,
      qty: 17
    }, {
      name: 'Adidas Ultra Boost White Multi Color',
      description: 'This Ultra Boost 4 is categorized under adidas running shoes. Its upper part is made of woven Primeknit that is complemented with multicolored yarns. An Ultra Boost branding can be seen on the back right side of the right shoe, with a similar branding spotted on the back left side of the left shoe. A white midsole sits on a black outsole to complete the look of this sneaker.',
      img: 'https://images.stockx.com/images/adidas-Ultra-Boost-4-White-Multi-Color-White-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1610084262',
      price: 180,
      qty: 8
    },
];
  const seedDB = async () => {
    await Products.deleteMany({});
    await Products.insertMany(productArr);
  };

  seedDB().then(() => {
    mongoose.connection.close();
  });


