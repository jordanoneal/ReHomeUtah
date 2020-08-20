const mongoose = require("mongoose");
const { Services, IServicesModel } = require("../models/services");

mongoose.connect("//heroku_g72p4k6q:9qe50o7ci3lp8bob9igam6fphn@ds115214.mlab.com:15214/heroku_g72p4k6q" || "mongodb://localhost/rehomeutah", { useNewUrlParser: true });

const ServicesSeed = [
  {
    serviceName: "MLS Listing",
    explanation: "Your home will show up on over 100 listing websites (including Zillow, Trulia and Redfin).",
    pricing: {
      Included: {
        description:
          "This service is included in the base price of two percent (2%) of the sale of the home.",
        price: "(Included in 2% Base Price)",
      },
    },
  },
  {
    serviceName: "Professional Photos",
    explanation: "Like dating, first impressions are important when selling your home. We give your home's first impression the competitive edge by using the best photographer in the business.",
    pricing: {
      Included: {
        description:
          "This service is included in the base price of two percent (2%) of the sale of the home.",
        price: "(Included in 2% Base Price)",
      },
    },
  },
  {
    serviceName: "Market Analysis to Accurately Price Your Home",
    explanation: "Pricing your home correctly is crucial. No ifs, ands or buts. We do a full-market analysis around your property's criteria to ensure your home is priced right.",
    pricing: {
      Included: {
        description: "This servic is included in the base price of two percent (2%) of the sale of the home.",
        price: "(Included in 2% Base Price)"
      }
    }
  },
  {
    serviceName: "Document Management",
    explanation: "Nobody likes paperwork. We'll take care of it for you.",
    pricing: {
      Included: {
        description:
          "This service is included in the base price of two percent (2%) of the sale of the home.",
        price: "(Included in 2% Base Price)",
      },
    },
  },
  {
    serviceName: "Present/Interpret Offers",
    explanation: "We’re in your corner and will make you a savvy homeseller, giving you confidence during your negotiations.",
    pricing: {
      Included: {
        description:
          "This service is included in the base price of two percent (2%) of the sale of the home.",
        price: "(Included in 2% Base Price)",
      },
    },
  },
  {
    serviceName: "Coordinate with other Parties Involved in Your Transaction",
    explanation: "There are a lot of people involved in a Real Estate transaction (title representitives, lenders, inspectors, etc). We coordinate with them so you don't have to.",
    pricing: {
      Included: {
        description:
          "This service is included in the base price of two percent (2%) of the sale of the home.",
        price: "(Included in 2% Base Price)",
      },
    },
  },
  {
    serviceName: "On Call Support",
    explanation: "Call me, maybe?",
    pricing: {
      Included: {
        description:
          "This service is included in the base price of two percent (2%) of the sale of the home.",
        price: "(Included in 2% Base Price)",
      },
    },
  },
  {
    serviceName: "Lighted Yard Sign",
    explanation: "Our yard signs have solar-powered lights that get the night crowd's attention.",
    pricing: {
      Included: {
        description:
          "This service is included in the base price of two percent (2%) of the sale of the home.",
        price: "(Included in 2% Base Price)",
      },
    },
  },
  {
    serviceName: "Open House Events",
    explanation: "We prepare days in advance for our massive open house events. They’re basically giant house parties — but you're not invited... sorry.",
    pricing: {
      Included: {
        description:
          "This service is included in the base price of two percent (2%) of the sale of the home.",
        price: "(Included in 2% Base Price)",
      },
    },
  },
  {
    serviceName: "Virtual Staging",
    explanation: "Buyers lack imagination and can't picture how furniture should go in a vacant room. If your house is vacant, virtual staging furniture in your photos is the way to go. It's so realistic! It's basically magic.",
    pricing: {
      Incremental: {
        min: 1,
        max: 50,
        increment: 1,
        unitPrice: 40,
      },
    },
  },
  {
    serviceName: "Virtual Tour",
    explanation: "Let buyers tour your home from their own couch, pandemic style. It's like streetview on google maps, but for your home.",
    pricing: {
      Options: [
          {
            description: "Up to 2500 sq ft = $180",
            price: 180,
          },
          {
            description: "2500-3900 Sq ft = $280",
            price: 280,
          },
          {
            description: "4000-6400 sq ft = $380",
            price: 380,
          },
          {
            description: "6500-8900 sq ft = $480",
            price: 480
          }
        ]
    }
  },
  {
    serviceName: "Boosted Social Media Ad",
    explanation: "Target prospective buyers by their age, income, and location on social media by funding a special ad about your home. The more money you put into it, the more views you get.",
    pricing: {
      Incremental: {
        min: 5,
        max: 50,
        increment: 1,
        unitPrice: 10,
      },
    },
  },
  {
    serviceName: "Drone Video",
    explanation: "Is your home located at an awesome spot? Show it off to buyers with a drone video!",
    pricing: {
      Flat: {
        price: 299,
      },
    },
  },
  {
    serviceName: "Professional Marketing Video",
    explanation: "There is nothing classier than a professionally done video to broadcast on your listing and social media.",
    pricing: {
      Flat: {
        price: 400,
      },
    },
  },
  // {
  //   serviceName: "Professional Cleaning",
  //   explanation: "We understand most people have to live in their home while trying to sell it. However, it is crucial that your home remains as clean as possible during its time on the market. We provide professional cleaning as an option to make things easier for you.",
  //   pricing: {

  //   }
  // },
  {
    serviceName: "Carpet Stretching",
    explanation: "Is any carpet in your home wrinkled? That can be a huge turnoff for buyers and can cause them to offer less for your home. Getting it fixed now will get you more money down the road.",
    pricing: {
      Incremental: {
        min: 1,
        max: 30,
        increment: 1,
        unitPrice: 90,
      },
    },
  },
  {
    serviceName: "Carpet Cleaning",
    explanation: "Stained carpet is hard to ignore and can be a deciding factor for buyers in not placing an offer. Clean your carpet BEFORE your home hits the market.",
    pricing: {
      Incremental: {
        min: 1,
        max: 30,
        increment: 1,
        unitPrice: 90,
      },
    },
  },
  {
    serviceName: "Carpet Sanitizing",
    explanation: "Sanitizing carpets are a good way to appleal to germ-sensitive buyers, especially during this pandemic.",
    pricing: {
      Incremental: {
        min: 1,
        max: 30,
        increment: 1,
        unitPrice: 90,
      },
    },
  },
  // {
  //   serviceName: "Door Flyers",
  //   explanation: "Flyers on a door knob are very likely to be read by their recipient.",
  //   pricing: {
  //     Incremental: {
  //       min: ,
  //       max: ,
  //       increment: ,
  //       unitPrice:
  //     }
  //   }
  // },
  {
    serviceName: "Mail Flyers",
    explanation: "Target a crowd by geographical area, age, and income. Mail blast that crowd with an advertisement for your home.",
    pricing: {
      Options: [
          {
            description: "1000 Flyers = $0.60/Flyer",
            price: 600,
          },
          {
            description: "2500 Flyers = $0.45/Flyer",
            price: 1000,
          },
          {
            description: "5000 Flyers = $0.39/Flyer",
            price: 1950
          }
        ]
    }
  }
];

Services
  .remove({})
  .then(() => Services.collection.insertMany(ServicesSeed))
  .then((data: { result: { n: number; }; }) => {
    console.log(`${data.result.n} Records Inserted`);
    process.exit(0);
  })
  .catch((err: Error) => {
    console.error(err);

    process.exit(1);
  });
