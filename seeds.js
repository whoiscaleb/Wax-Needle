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
    name: 'Rubber Soul by The Beatles',
    description: 'Rubber Soul is the sixth studio album by the English rock band the Beatles. It was released on 3 December 1965 in the United Kingdom, on the Parlophone label, accompanied by the non-album double A-side single Day Tripper.'
    ,img: 'https://i.discogs.com/XO-Barxecgb47E1_XVm2WYDRfgwPzxEgJV9JmEmNLKo/rs:fit/g:sm/q:90/h:593/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM5MzYx/Ny0xNTc3NjQyNTc5/LTgwMDQuanBlZw.jpeg',
    price: 45,
    qty: 376
  }, 
  {
    name: 'Igor by Tyler The Creator',
    description: "Vinyl LP pressing in gatefold jacket. 2019 release. Igor is the fifth studio album by rapper Tyler, The Creator. Produced entirely by Tyler, the album follows the 2017 release of Flower Boy. It features guest appearances from Playboi Carti, Lil Uzi Vert, Solange, Kanye West, and Jerrod Carmichael, along with backing vocals from Santigold, Jessy Wilson, La Roux, Ceelo Green, Charlie Wilson, Slowthai, and Pharrell, among others.",
    img: 'https://target.scene7.com/is/image/Target/GUEST_f31582c0-bf02-4543-9cc7-41b86430a92e?wid=488&hei=488&fmt=pjpeg',
    price: 84,
    qty: 17
  }, {
    name: 'The Blueprint by Jay-Z',
    description: 'The sixth studio album by American rapper Jay-Z, released on September 11, 2001, through Roc-A-Fella Records and Def Jam Recordings. The Blueprint features soul-based sampling and production handled primarily by Kanye West, Just Blaze, and Bink, as well as Timbaland, Trackmasters, and Eminem, who also contributes the only guest feature on the album.',
    img: 'https://upload.wikimedia.org/wikipedia/en/2/2c/The_Blueprint.png',
    price: 850,
    qty: 8
  },   {
      name: 'Songs in The Key of Life by Stevie Wonder',
      description: 'Songs in the Key of Life is the eighteenth studio album by American singer, songwriter and musician Stevie Wonder. A double album, it was released on September 28, 1976, by Tamla Records, a division of Motown. It was recorded primarily at Crystal Sound studio in Hollywood, with some sessions recorded at the Record Plant in Hollywood, the Record Plant in Sausalito, and The Hit Factory in New York City; final mixing was conducted at Crystal Sound. The album has been regarded by music journalists as the culmination of his classic period of releases.',
      img: 'https://upload.wikimedia.org/wikipedia/en/e/e2/Songs_in_the_key_of_life.jpg',
      price: 85,
      qty: 110
    }, {
      name: 'Blonde by Frank Ocean',
      description: "Blonde is the second studio album by the enigmatic Frank Ocean. The album was released on August 20, 2016, following a four-year hiatus after the release of channel ORANGE. In The Guardian review of the album, reviewer Tim Jonze called Blonde, “one of the most intriguing and contrary records ever made.” It is considered to be one of the greatest R&B/pop albums of all time.",
      img: 'https://upload.wikimedia.org/wikipedia/en/a/a0/Blonde_-_Frank_Ocean.jpeg',
      price: 500,
      qty: 2
    }, {
      name: 'Hiatus Kaiyote',
      description: 'Mood Valiant is the third studio album by Australian neo-soul quartet Hiatus Kaiyote, released in 2021 on Brainfeeder. The album peaked at number 4 on the ARIA charts. At the 2021 ARIA Music Awards, the album was nominated for Best Soul/R&B Release.',
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


