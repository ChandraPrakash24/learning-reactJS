import React from "react";
import ReactDOM from "react-dom/client";
import FoodFireLogo from "../chapter-2/Images/Food Fire Logo.png";

// navbar
const HeaderComponent = () => {
  return(
    <div className="header-container" >
      <a href="/">
        <img src={FoodFireLogo} alt="logo-pic" />
      </a>
      <div className="nav-item">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li><i class="fa-solid fa-cart-shopping"></i></li>
        </ul>
      </div>
    </div>
  );
};

// const bugerKing = {
//   name: "Burger King",
//   image : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b1h0agx8ysx7w6ybrygc",
//   cusines: ["Quizines", "Quizines2"],
//   rating : 4.6
// }


const RestaurantList = [
  {
    info: {
      id: "67970",
      name: "Subway",
      cloudinaryImageId: "63178e3e64d503a479f2a2048a474552",
      locality: "Snehnagar",
      areaName: "Sapna Sangeeta mall",
      costForTwo: "₹350 for two",
      cuisines: ["Healthy Food", "Salads", "Snacks", "Desserts", "Beverages"],
      avgRating: 4.2,
      parentId: "2",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: { nextCloseTime: "2024-02-08 23:00:00", opened: true },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} }
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹449",
        discountTag: "FLAT DEAL"
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/subway-snehnagar-sapna-sangeeta-mall-indore-67970",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "80650",
      name: "Faasos - Wraps, Rolls & Shawarma",
      cloudinaryImageId: "af33b81798b11deba338e94b7585d348",
      locality: "Raghav Regency",
      areaName: "Sudama Nagar",
      costForTwo: "₹200 for two",
      cuisines: [
        "Kebabs",
        "Fast Food",
        "Snacks",
        "American",
        "Healthy Food",
        "Desserts",
        "Beverages"
      ],
      avgRating: 4.3,
      parentId: "21809",
      avgRatingString: "4.3",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 4.2,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.2 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: { nextCloseTime: "2024-02-08 23:59:00", opened: true },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} }
      },
      aggregatedDiscountInfoV3: { header: "ITEMS", subHeader: "AT ₹129" },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/faasos-wraps-rolls-and-shawarma-raghav-regency-sudama-nagar-indore-80650",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "79502",
      name: "Domino's Pizza",
      cloudinaryImageId: "wwvuplzrzw6uzkgoj8xw",
      locality: "A BLOCK",
      areaName: "Village Sirpur",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.2,
      parentId: "2456",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 25,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: { nextCloseTime: "2024-02-08 23:59:00", opened: true },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} }
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL"
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/dominos-pizza-a-block-village-sirpur-indore-79502",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "538512",
      name: "The Brooklyn Creamery - Healthy Ice Cream",
      cloudinaryImageId: "b1b35780a9b1dfeb26d680506d494eaa",
      locality: "BEYOND TEMPTATION",
      areaName: "2 GREATER VAISHALI NAGAR",
      costForTwo: "₹200 for two",
      cuisines: ["Desserts", "Ice Cream", "Healthy Food"],
      avgRating: 4.3,
      veg: true,
      parentId: "236673",
      avgRatingString: "4.3",
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: { nextCloseTime: "2024-02-08 23:50:00", opened: true },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} }
      },
      aggregatedDiscountInfoV3: { header: "60% OFF", subHeader: "UPTO ₹120" },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/the-brooklyn-creamery-healthy-ice-cream-beyond-temptation-2-greater-vaishali-nagar-indore-538512",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "73369",
      name: "Maa Ki Rasoi",
      cloudinaryImageId: "b1h0agx8ysx7w6ybrygc",
      locality: "Gopur Square",
      areaName: "Sudama Nagar",
      costForTwo: "₹200 for two",
      cuisines: ["North Indian", "Thalis", "South Indian", "Chinese"],
      avgRating: 4.3,
      veg: true,
      parentId: "4107",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 4.7,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.7 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: { nextCloseTime: "2024-02-08 23:59:00", opened: true },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg"
          }
        ]
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: { header: "60% OFF", subHeader: "UPTO ₹115" },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/maa-ki-rasoi-gopur-square-sudama-nagar-indore-73369",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "80651",
      name: "Oven Story Pizza - Standout Toppings",
      cloudinaryImageId: "b39e4312ae2e9f65c3b58faaed83f488",
      locality: "Raghav Regency",
      areaName: "Sudama Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 4.4,
      parentId: "3534",
      avgRatingString: "4.4",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 4.2,
        serviceability: "SERVICEABLE",
        slaString: "23-31 mins",
        lastMileTravelString: "4.2 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: { nextCloseTime: "2024-02-08 23:59:00", opened: true },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} }
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹699",
        discountTag: "FLAT DEAL"
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/oven-story-pizza-standout-toppings-raghav-regency-sudama-nagar-indore-80651",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "223393",
      name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
      cloudinaryImageId: "upajaowdlvgbeoepabt1",
      locality: "Sarafa",
      areaName: "Raj Mohalla",
      costForTwo: "₹100 for two",
      cuisines: ["Desserts", "Ice Cream"],
      avgRating: 4.6,
      veg: true,
      parentId: "582",
      avgRatingString: "4.6",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: { nextCloseTime: "2024-02-08 23:00:00", opened: true },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} }
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹349",
        discountTag: "FLAT DEAL"
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-sarafa-raj-mohalla-indore-223393",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "338727",
      name: "Baskin Robbins - Ice Cream Desserts",
      cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
      locality: "Usha Nagar",
      areaName: "Sudama Nagar",
      costForTwo: "₹250 for two",
      cuisines: ["Desserts", "Ice Cream"],
      avgRating: 4.5,
      veg: true,
      parentId: "5588",
      avgRatingString: "4.5",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 3.9,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.9 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: { nextCloseTime: "2024-02-08 23:00:00", opened: true },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} }
      },
      aggregatedDiscountInfoV3: { header: "30% OFF", subHeader: "UPTO ₹75" },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-usha-nagar-sudama-nagar-indore-338727",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "64823",
      name: "Nafees Restaurant",
      cloudinaryImageId: "x7zvrb5mbg92skzncwnu",
      locality: "Old Palasia",
      areaName: "Old Palasia",
      costForTwo: "₹350 for two",
      cuisines: [
        "Mughlai",
        "Biryani",
        "North Indian",
        "Chinese",
        "Snacks",
        "Desserts",
        "Beverages"
      ],
      avgRating: 4.3,
      parentId: "10713",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 48,
        lastMileTravel: 7.1,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "7.1 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: { nextCloseTime: "2024-02-08 23:30:00", opened: true },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} }
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹349",
        discountTag: "FLAT DEAL"
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/nafees-restaurant-old-palasia-indore-64823",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "84070",
      name: "Gurukripa Restaurant - Sarwate",
      cloudinaryImageId: "g5txnz35wlrgbskk3r8y",
      locality: "Sarwate",
      areaName: "South Tukoganj",
      costForTwo: "₹250 for two",
      cuisines: [
        "North Indian",
        "Thalis",
        "Indian",
        "Fast Food",
        "Chinese",
        "Beverages",
        "Desserts",
        "Jain",
        "Punjabi"
      ],
      avgRating: 4.3,
      veg: true,
      parentId: "92204",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 37,
        lastMileTravel: 4.4,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "4.4 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: { nextCloseTime: "2024-02-08 23:59:00", opened: true },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg"
          }
        ]
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: { header: "40% OFF", subHeader: "UPTO ₹80" },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/gurukripa-restaurant-sarwate-sarwate-south-tukoganj-indore-84070",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "156145",
      name: "The Good Bowl",
      cloudinaryImageId: "6e04be27387483a7c00444f8e8241108",
      locality: "Annapoorna FC",
      areaName: "Sudama Nagar",
      costForTwo: "₹400 for two",
      cuisines: [
        "Biryani",
        "North Indian",
        "Pastas",
        "Punjabi",
        "Desserts",
        "Beverages"
      ],
      avgRating: 4.2,
      parentId: "7918",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 4.2,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.2 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: { nextCloseTime: "2024-02-08 23:59:00", opened: true },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} }
      },
      aggregatedDiscountInfoV3: { header: "60% OFF", subHeader: "UPTO ₹110" },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/the-good-bowl-annapoorna-fc-sudama-nagar-indore-156145",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "80653",
      name: "Sweet Truth - Cake and Desserts",
      cloudinaryImageId: "78408969d316991befba0a6eca303e1c",
      locality: "Raghav Regency",
      areaName: "Sudama Nagar",
      costForTwo: "₹450 for two",
      cuisines: ["Snacks", "Bakery", "Desserts", "Beverages"],
      avgRating: 4.3,
      parentId: "4444",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 4.2,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "4.2 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: { nextCloseTime: "2024-02-08 23:59:00", opened: true },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} }
      },
      aggregatedDiscountInfoV3: { header: "ITEMS", subHeader: "AT ₹119" },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/sweet-truth-cake-and-desserts-raghav-regency-sudama-nagar-indore-80653",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "86719",
      name: "Cafe Coffee Day",
      cloudinaryImageId: "b70c7d23d197251b7b315b7e4d8173ae",
      locality: "TREASURE ISLAND 2 MALL INDORE MP",
      areaName: "South Tukoganj",
      costForTwo: "₹400 for two",
      cuisines: [
        "Beverages",
        "Cafe",
        "Snacks",
        "Desserts",
        "Burgers",
        "Ice Cream",
        "Bakery",
        "Fast Food"
      ],
      avgRating: 4.2,
      parentId: "1",
      avgRatingString: "4.2",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 4.4,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.4 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: { nextCloseTime: "2024-02-08 22:00:00", opened: true },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} }
      },
      aggregatedDiscountInfoV3: { header: "ITEMS", subHeader: "AT ₹159" },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/cafe-coffee-day-treasure-island-2-mall-mp-south-tukoganj-indore-86719",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "80652",
      name: "Firangi Bake",
      cloudinaryImageId: "v9qsbs5qxvtq8jln33sw",
      locality: "Raghav Regency",
      areaName: "Sudama Nagar",
      costForTwo: "₹400 for two",
      cuisines: [
        "Pizzas",
        "Pastas",
        "Italian",
        "Mexican",
        "Healthy Food",
        "Desserts",
        "Beverages"
      ],
      avgRating: 4.1,
      parentId: "3952",
      avgRatingString: "4.1",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 4.2,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.2 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: { nextCloseTime: "2024-02-08 23:59:00", opened: true },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C"
          }
        ]
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available"
                }
              }
            ]
          }
        }
      },
      aggregatedDiscountInfoV3: { header: "ITEMS", subHeader: "AT ₹199" },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/firangi-bake-raghav-regency-sudama-nagar-indore-80652",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "78643",
      name: "Pizza Hut",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      locality: "Transport Nagar",
      areaName: "Bhawar Kuan",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 3.8,
      parentId: "721",
      avgRatingString: "3.8",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 38,
        lastMileTravel: 5.5,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "5.5 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: { nextCloseTime: "2024-02-09 04:00:00", opened: true },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} }
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/pizza-hut-transport-nagar-bhawar-kuan-indore-78643",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "303103",
      name: "KFC",
      cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
      locality: "RNT Marg",
      areaName: "South Tukoganj",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 4.2,
      parentId: "547",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 38,
        lastMileTravel: 5.6,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "5.6 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: { nextCloseTime: "2024-02-08 23:00:00", opened: true },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} }
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kfc-rnt-marg-south-tukoganj-indore-303103",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "86044",
      name: "LunchBox - Meals and Thalis",
      cloudinaryImageId: "qa9nfrq8aomor6glzcpo",
      locality: "Raghav Regency",
      areaName: "Sudama Nagar",
      costForTwo: "₹200 for two",
      cuisines: [
        "Biryani",
        "North Indian",
        "Punjabi",
        "Healthy Food",
        "Desserts",
        "Beverages"
      ],
      avgRating: 4.3,
      parentId: "4925",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 4.2,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.2 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: { nextCloseTime: "2024-02-08 23:59:00", opened: true },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} }
      },
      aggregatedDiscountInfoV3: { header: "ITEMS", subHeader: "AT ₹159" },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-raghav-regency-sudama-nagar-indore-86044",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "80649",
      name: "Behrouz Biryani",
      cloudinaryImageId: "89fccaa76f2f760e2742b9e53d32bb69",
      locality: "Raghav Regency",
      areaName: "Sudama Nagar",
      costForTwo: "₹500 for two",
      cuisines: [
        "Biryani",
        "North Indian",
        "Kebabs",
        "Mughlai",
        "Beverages",
        "Desserts"
      ],
      avgRating: 4.4,
      parentId: "1803",
      avgRatingString: "4.4",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 4.2,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.2 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: { nextCloseTime: "2024-02-08 23:59:00", opened: true },
      badges: {
        imageBadges: [{ imageId: "newg.png", description: "Gourmet" }]
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              { attributes: { description: "Gourmet", imageId: "newg.png" } }
            ]
          },
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: { header: "30% OFF", subHeader: "UPTO ₹60" },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/behrouz-biryani-raghav-regency-sudama-nagar-indore-80649",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "79829",
      name: "Natural Ice Cream",
      cloudinaryImageId: "mjvpnvts8c2v4hatzzus",
      locality: "Opp Central Mall",
      areaName: "Rnt Marg",
      costForTwo: "₹150 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.7,
      veg: true,
      parentId: "2093",
      avgRatingString: "4.7",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: { nextCloseTime: "2024-02-09 00:10:00", opened: true },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} }
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/natural-ice-cream-opp-central-mall-rnt-marg-indore-79829",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "62185",
      name: "Sam's Momos",
      cloudinaryImageId: "wrwrngygzztx6lh1wpfn",
      locality: "Chappan Dukan",
      areaName: "New Palasia",
      costForTwo: "₹200 for two",
      cuisines: ["Chinese", "Snacks", "Pastas"],
      avgRating: 4.2,
      parentId: "176744",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 42,
        lastMileTravel: 6.4,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "6.4 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: { nextCloseTime: "2024-02-08 23:59:00", opened: true },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} }
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/sams-momos-chappan-dukan-new-palasia-indore-62185",
      type: "WEBLINK"
    }
  }
];



// restrorent cards
const RestrountComponent = (props) => {
  console.log(props);
  return(
    <div className="card-container">
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + props.restauro.info?.cloudinaryImageId} alt="food-pic" />
      <h4 >{props.restauro.info?.name}</h4>
      <h5>{props.restauro.info?.cuisines.join(", ")}</h5>
      <h6>{props.restauro.info?.avgRating} Stars</h6>
      <h6>{props.restauro.info.sla?.lastMileTravelString} minutes</h6>
    </div>
  );
};

const BodyComponent = () => {
  return(
    <div>
      <RestrountComponent restauro={RestaurantList[0]} />
      <RestrountComponent restauro={RestaurantList[1]} />
      <RestrountComponent restauro={RestaurantList[2]} />
      <RestrountComponent restauro={RestaurantList[3]} />
      <RestrountComponent restauro={RestaurantList[4]} />
      <RestrountComponent restauro={RestaurantList[5]} />
      {/* <RestrountComponent restrount={RestaurantList[1] />
      // <RestrountComponent Restrount={RestaurantList[2] />
      // <RestrountComponent Restrount={RestaurantList[3] />
      // <RestrountComponent Restrount={RestaurantList[4] />
      // <RestrountComponent Restrount={RestaurantList[5] /> */}
    </div>
  );
};
const FooterComponent = () => {
  return(<div>
    
  </div>);
};





const AppLayout = () => {
  return(
    <>
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </>
  );
};




/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

// // Title component for display logo
// const Title = () => (
//   <a href="/">
//     <img className="logo" src={FoodFireLogo} alt="Food Fire Logo" />
//   </a>
// );

// // Header component for header section: Logo, Nav Items
// const Header = () => {
//   return (
//     <div className="header">
//     <Title /> 
//       <div className="nav-items">
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Contact</li>
//           <li><i className="fa-solid fa-cart-shopping"></i></li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// // RestaurantList is JSON Data for displaying cards
// const restaurantList = [
//   {
//     type: "restaurant",
//     data: {
//       type: "F",
//       id: "74453",
//       name: "Domino's Pizza",
//       uuid: "87727dbd-7f2b-4857-9763-359624165845",
//       city: "21",
//       area: "Athwa",
//       totalRatingsString: "1000+ ratings",
//       cloudinaryImageId: "bz9zkh2aqywjhpankb07",
//       cuisines: ["Pizzas"],
//       tags: [],
//       costForTwo: 40000,
//       costForTwoString: "₹400 FOR TWO",
//       deliveryTime: 45,
//       minDeliveryTime: 45,
//       maxDeliveryTime: 45,
//       slaString: "45 MINS",
//       lastMileTravel: 0,
//       slugs: {
//         restaurant: "dominos-pizza-majura-nondh-test_surat",
//         city: "surat",
//       },
//       cityState: "21",
//       address:
//         "Shop 32 To 35, Sheetal Shopping Square,Near Lb Turning Point, Bhatar Road,MAJURA NONDH, Surat,GUJARAT-395001",
//       locality: "Bhatar Road",
//       parentId: 2456,
//       unserviceable: false,
//       veg: true,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: "FREE DELIVERY",
//         shortDescriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       aggregatedDiscountInfoV2: {
//         header: "",
//         shortDescriptionList: [
//           {
//             meta: "Free Delivery",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       chain: [],
//       feeDetails: {
//         fees: [],
//         totalFees: 0,
//         message: "",
//         title: "",
//         amount: "",
//         icon: "",
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: "",
//         nextCloseMessage: "",
//       },
//       longDistanceEnabled: 0,
//       rainMode: "NONE",
//       thirdPartyAddress: false,
//       thirdPartyVendor: "",
//       adTrackingID: "",
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: "2.1 kms",
//       hasSurge: false,
//       sla: {
//         restaurantId: "74453",
//         deliveryTime: 45,
//         minDeliveryTime: 45,
//         maxDeliveryTime: 45,
//         lastMileTravel: 0,
//         lastMileDistance: 0,
//         serviceability: "SERVICEABLE",
//         rainMode: "NONE",
//         longDistance: "NOT_LONG_DISTANCE",
//         preferentialService: false,
//         iconType: "EMPTY",
//       },
//       promoted: false,
//       avgRating: "4.0",
//       totalRatings: 1000,
//       new: false,
//     },
//     subtype: "basic",
//   },
//   {
//     type: "restaurant",
//     data: {
//       type: "F",
//       id: "410476",
//       name: "The Brooklyn Creamery - Healthy Ice Cream",
//       uuid: "82e23b48-b6bd-4ee0-9746-06737ec062b0",
//       city: "21",
//       area: "althan bhatar",
//       totalRatingsString: "100+ ratings",
//       cloudinaryImageId: "ldtibwymvzehvmdwl8la",
//       cuisines: ["Desserts", "Ice Cream", "Healthy Food"],
//       tags: [],
//       costForTwo: 20000,
//       costForTwoString: "₹200 FOR TWO",
//       deliveryTime: 31,
//       minDeliveryTime: 30,
//       maxDeliveryTime: 40,
//       slaString: "30-40 MINS",
//       lastMileTravel: 6.300000190734863,
//       slugs: {
//         restaurant: "the-brooklyn-creamery-low-cal-ice-cream-adajan-fc-adajan",
//         city: "surat",
//       },
//       cityState: "21",
//       address:
//         "C paiki, Chalta no. 23, Guru Ashish Building, Ground Floor, Opp Kotyark Nagar, Rander Road, Surat 395005",
//       locality: "Adajan FC",
//       parentId: 236673,
//       unserviceable: true,
//       veg: true,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: "FREE DELIVERY",
//         shortDescriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       aggregatedDiscountInfoV2: {
//         header: "",
//         shortDescriptionList: [
//           {
//             meta: "Free Delivery",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       chain: [],
//       feeDetails: {
//         fees: [],
//         totalFees: 0,
//         message: "",
//         title: "",
//         amount: "",
//         icon: "",
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: "",
//         nextCloseMessage: "",
//       },
//       longDistanceEnabled: 0,
//       rainMode: "NONE",
//       thirdPartyAddress: false,
//       thirdPartyVendor: "",
//       adTrackingID: "",
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: "6.3 kms",
//       hasSurge: false,
//       sla: {
//         restaurantId: "410476",
//         deliveryTime: 31,
//         minDeliveryTime: 30,
//         maxDeliveryTime: 40,
//         lastMileTravel: 6.300000190734863,
//         lastMileDistance: 0,
//         serviceability: "SERVICEABLE_WITH_BANNER",
//         rainMode: "NONE",
//         longDistance: "NOT_LONG_DISTANCE",
//         preferentialService: false,
//         iconType: "EMPTY",
//       },
//       promoted: false,
//       avgRating: "4.4",
//       totalRatings: 100,
//       new: false,
//     },
//     subtype: "basic",
//   },
//   {
//     type: "restaurant",
//     data: {
//       type: "F",
//       id: "81094",
//       name: "Richie Rich Juices & Shakes",
//       uuid: "40b0b55b-e9af-43e7-aeae-be1b012d0b1d",
//       city: "21",
//       area: "Athwa",
//       totalRatingsString: "500+ ratings",
//       cloudinaryImageId: "nyp7yrzwc1dc2xqfkydk",
//       cuisines: ["Ice Cream"],
//       tags: [],
//       costForTwo: 25000,
//       costForTwoString: "₹250 FOR TWO",
//       deliveryTime: 30,
//       minDeliveryTime: 30,
//       maxDeliveryTime: 40,
//       slaString: "30-40 MINS",
//       lastMileTravel: 5.599999904632568,
//       slugs: {
//         restaurant: "juices-shakes-by-richie-rich-athwa-athwa",
//         city: "surat",
//       },
//       cityState: "21",
//       address:
//         "Richie Rich Building , Opposite Golden Square Complex, Parle Point, Athwa, Surat",
//       locality: "Parle Point",
//       parentId: 771,
//       unserviceable: true,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: "FREE DELIVERY",
//         shortDescriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       aggregatedDiscountInfoV2: {
//         header: "",
//         shortDescriptionList: [
//           {
//             meta: "Free Delivery",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       chain: [],
//       feeDetails: {
//         fees: [],
//         totalFees: 0,
//         message: "",
//         title: "",
//         amount: "",
//         icon: "",
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: "",
//         nextCloseMessage: "",
//       },
//       longDistanceEnabled: 0,
//       rainMode: "NONE",
//       thirdPartyAddress: false,
//       thirdPartyVendor: "",
//       adTrackingID: "",
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: "5.5 kms",
//       hasSurge: false,
//       sla: {
//         restaurantId: "81094",
//         deliveryTime: 30,
//         minDeliveryTime: 30,
//         maxDeliveryTime: 40,
//         lastMileTravel: 5.599999904632568,
//         lastMileDistance: 0,
//         serviceability: "SERVICEABLE_WITH_BANNER",
//         rainMode: "NONE",
//         longDistance: "NOT_LONG_DISTANCE",
//         preferentialService: false,
//         iconType: "EMPTY",
//       },
//       promoted: false,
//       avgRating: "3.9",
//       totalRatings: 500,
//       new: false,
//     },
//     subtype: "basic",
//   },
//   {
//     type: "restaurant",
//     data: {
//       type: "F",
//       id: "311443",
//       name: "Siddhi Icecream & Thick Shake",
//       uuid: "1ca3e8c2-e5da-4b59-8f7e-868991cb40b7",
//       city: "21",
//       area: "Nanpura",
//       totalRatingsString: "100+ ratings",
//       cloudinaryImageId: "spd3y5gok3vvwqulgmda",
//       cuisines: ["Ice Cream", "Juices", "Desserts", "Beverages"],
//       tags: [],
//       costForTwo: 20000,
//       costForTwoString: "₹200 FOR TWO",
//       deliveryTime: 30,
//       minDeliveryTime: 25,
//       maxDeliveryTime: 35,
//       slaString: "25-35 MINS",
//       lastMileTravel: 3,
//       slugs: {
//         restaurant: "siddhi-icecream-athwa-athwa",
//         city: "surat",
//       },
//       cityState: "21",
//       address:
//         "siddhi icecream, Kadampally Society, Timaliawad, Nanpura, Surat, Gujarat, India",
//       locality: "Athwa",
//       parentId: 387846,
//       unserviceable: true,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: "FREE DELIVERY",
//         shortDescriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       aggregatedDiscountInfoV2: {
//         header: "",
//         shortDescriptionList: [
//           {
//             meta: "Free Delivery",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       chain: [],
//       feeDetails: {
//         fees: [],
//         totalFees: 0,
//         message: "",
//         title: "",
//         amount: "",
//         icon: "",
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: "",
//         nextCloseMessage: "",
//       },
//       longDistanceEnabled: 0,
//       rainMode: "NONE",
//       thirdPartyAddress: false,
//       thirdPartyVendor: "",
//       adTrackingID: "",
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: "3 kms",
//       hasSurge: false,
//       sla: {
//         restaurantId: "311443",
//         deliveryTime: 30,
//         minDeliveryTime: 25,
//         maxDeliveryTime: 35,
//         lastMileTravel: 3,
//         lastMileDistance: 0,
//         serviceability: "SERVICEABLE_WITH_BANNER",
//         rainMode: "NONE",
//         longDistance: "NOT_LONG_DISTANCE",
//         preferentialService: false,
//         iconType: "EMPTY",
//       },
//       promoted: false,
//       avgRating: "4.5",
//       totalRatings: 100,
//       new: false,
//     },
//     subtype: "basic",
//   },
//   {
//     type: "restaurant",
//     data: {
//       type: "F",
//       id: "307070",
//       name: "Pizza Pie",
//       uuid: "68598bcb-7460-4466-a8b2-113158c6cf8c",
//       city: "21",
//       area: "Nanpura",
//       totalRatingsString: "50+ ratings",
//       cloudinaryImageId: "bvr70adr30ejyr5ua79k",
//       cuisines: ["Pizzas"],
//       tags: [],
//       costForTwo: 30000,
//       costForTwoString: "₹300 FOR TWO",
//       deliveryTime: 37,
//       minDeliveryTime: 35,
//       maxDeliveryTime: 45,
//       slaString: "35-45 MINS",
//       lastMileTravel: 4,
//       slugs: {
//         restaurant: "pizza-pie-athwa-athwa",
//         city: "surat",
//       },
//       cityState: "21",
//       address:
//         "1/704 Sarang building, Nanpura New Rd, opposite river palace, near Ramji Mandir, Nanpura, Surat, Gujarat",
//       locality: "Nanpura",
//       parentId: 158854,
//       unserviceable: true,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: "FREE DELIVERY",
//         shortDescriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       aggregatedDiscountInfoV2: {
//         header: "",
//         shortDescriptionList: [
//           {
//             meta: "Free Delivery",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       chain: [],
//       feeDetails: {
//         fees: [],
//         totalFees: 0,
//         message: "",
//         title: "",
//         amount: "",
//         icon: "",
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: "",
//         nextCloseMessage: "",
//       },
//       longDistanceEnabled: 0,
//       rainMode: "NONE",
//       thirdPartyAddress: false,
//       thirdPartyVendor: "",
//       adTrackingID: "",
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: "4 kms",
//       hasSurge: false,
//       sla: {
//         restaurantId: "307070",
//         deliveryTime: 37,
//         minDeliveryTime: 35,
//         maxDeliveryTime: 45,
//         lastMileTravel: 4,
//         lastMileDistance: 0,
//         serviceability: "SERVICEABLE_WITH_BANNER",
//         rainMode: "NONE",
//         longDistance: "NOT_LONG_DISTANCE",
//         preferentialService: false,
//         iconType: "EMPTY",
//       },
//       promoted: false,
//       avgRating: "4.2",
//       totalRatings: 50,
//       new: false,
//     },
//     subtype: "basic",
//   },
//   {
//     type: "restaurant",
//     data: {
//       type: "F",
//       id: "76858",
//       name: "Feeling Hungry",
//       uuid: "45f9ea54-f3cf-4f6b-8d85-e3468657fe51",
//       city: "21",
//       area: "Athwa",
//       totalRatingsString: "1000+ ratings",
//       cloudinaryImageId: "oxsb5mr1xsmhnxhunjsc",
//       cuisines: ["Chinese", "North Indian", "Biryani"],
//       tags: [],
//       costForTwo: 2000,
//       costForTwoString: "₹20 FOR TWO",
//       deliveryTime: 35,
//       minDeliveryTime: 30,
//       maxDeliveryTime: 40,
//       slaString: "30-40 MINS",
//       lastMileTravel: 3.700000047683716,
//       slugs: {
//         restaurant: "feeling-hungry-adajan-gam-adajan",
//         city: "surat",
//       },
//       cityState: "21",
//       address:
//         "GF shop no 1, Babubhai Chambers, Beside Sardar Bridge , Athwagate, surat",
//       locality: "Royal Residency, Adajan Gam",
//       parentId: 79237,
//       unserviceable: true,
//       veg: true,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: "FREE DELIVERY",
//         shortDescriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       aggregatedDiscountInfoV2: {
//         header: "",
//         shortDescriptionList: [
//           {
//             meta: "Free Delivery",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       chain: [],
//       feeDetails: {
//         fees: [],
//         totalFees: 0,
//         message: "",
//         title: "",
//         amount: "",
//         icon: "",
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: "",
//         nextCloseMessage: "",
//       },
//       longDistanceEnabled: 0,
//       rainMode: "NONE",
//       thirdPartyAddress: false,
//       thirdPartyVendor: "",
//       adTrackingID: "",
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: "3.7 kms",
//       hasSurge: false,
//       sla: {
//         restaurantId: "76858",
//         deliveryTime: 35,
//         minDeliveryTime: 30,
//         maxDeliveryTime: 40,
//         lastMileTravel: 3.700000047683716,
//         lastMileDistance: 0,
//         serviceability: "SERVICEABLE_WITH_BANNER",
//         rainMode: "NONE",
//         longDistance: "NOT_LONG_DISTANCE",
//         preferentialService: false,
//         iconType: "EMPTY",
//       },
//       promoted: false,
//       avgRating: "3.2",
//       totalRatings: 1000,
//       new: false,
//     },
//     subtype: "basic",
//   },
//   {
//     type: "restaurant",
//     data: {
//       type: "F",
//       id: "617279",
//       name: "Malaxmi Fast Food",
//       uuid: "4848cb1b-b1c4-4a6e-9a6d-f96b781357db",
//       city: "21",
//       area: "Adajan",
//       totalRatingsString: "20+ ratings",
//       cloudinaryImageId: "agkm7cflq72tkualhstb",
//       cuisines: ["Fast Food", "Pizzas", "Snacks", "Beverages"],
//       tags: [],
//       costForTwo: 20000,
//       costForTwoString: "₹200 FOR TWO",
//       deliveryTime: 44,
//       minDeliveryTime: 40,
//       maxDeliveryTime: 50,
//       slaString: "40-50 MINS",
//       lastMileTravel: 9.100000381469727,
//       slugs: {
//         restaurant: "mahalaxmi-fast-food-adajan-adajan-2",
//         city: "surat",
//       },
//       cityState: "21",
//       address: "shop no 15,palanpur food zone,opp.sai trith,pal gam suart",
//       locality: "Palanpur Food Zone",
//       parentId: 373635,
//       unserviceable: true,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: "FREE DELIVERY",
//         shortDescriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       aggregatedDiscountInfoV2: {
//         header: "",
//         shortDescriptionList: [
//           {
//             meta: "Free Delivery",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       chain: [],
//       feeDetails: {
//         fees: [],
//         totalFees: 0,
//         message: "",
//         title: "",
//         amount: "",
//         icon: "",
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: "",
//         nextCloseMessage: "",
//       },
//       longDistanceEnabled: 0,
//       rainMode: "NONE",
//       thirdPartyAddress: false,
//       thirdPartyVendor: "",
//       adTrackingID: "",
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: "9.1 kms",
//       hasSurge: false,
//       sla: {
//         restaurantId: "617279",
//         deliveryTime: 44,
//         minDeliveryTime: 40,
//         maxDeliveryTime: 50,
//         lastMileTravel: 9.100000381469727,
//         lastMileDistance: 0,
//         serviceability: "SERVICEABLE_WITH_BANNER",
//         rainMode: "NONE",
//         longDistance: "NOT_LONG_DISTANCE",
//         preferentialService: false,
//         iconType: "EMPTY",
//       },
//       promoted: false,
//       avgRating: "4.0",
//       totalRatings: 20,
//       new: false,
//     },
//     subtype: "basic",
//   },
//   {
//     type: "restaurant",
//     data: {
//       type: "F",
//       id: "469264",
//       name: "Dessert House",
//       uuid: "7a320917-c577-49cb-875a-1e585a3adbc1",
//       city: "21",
//       area: "Piplod",
//       totalRatingsString: "Too Few Ratings",
//       cloudinaryImageId: "jegpumsjcmomksbr2sxr",
//       cuisines: ["Desserts", "Ice Cream"],
//       tags: [],
//       costForTwo: 15000,
//       costForTwoString: "₹150 FOR TWO",
//       deliveryTime: 27,
//       minDeliveryTime: 25,
//       maxDeliveryTime: 35,
//       slaString: "25-35 MINS",
//       lastMileTravel: 6.199999809265137,
//       slugs: {
//         restaurant: "dessert-house-piplod-piplod",
//         city: "surat",
//       },
//       cityState: "21",
//       address:
//         "SHOP NO 2, MARVELLA CORRIDOR OPP. C B PATEL HEALTH CLUB V.I.P ROAD, VESU",
//       locality: "Piplod",
//       parentId: 71430,
//       unserviceable: true,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: "FREE DELIVERY",
//         shortDescriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       aggregatedDiscountInfoV2: {
//         header: "",
//         shortDescriptionList: [
//           {
//             meta: "Free Delivery",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       chain: [],
//       feeDetails: {
//         fees: [],
//         totalFees: 0,
//         message: "",
//         title: "",
//         amount: "",
//         icon: "",
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: "",
//         nextCloseMessage: "",
//       },
//       longDistanceEnabled: 0,
//       rainMode: "NONE",
//       thirdPartyAddress: false,
//       thirdPartyVendor: "",
//       adTrackingID: "",
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: "6.1 kms",
//       hasSurge: false,
//       sla: {
//         restaurantId: "469264",
//         deliveryTime: 27,
//         minDeliveryTime: 25,
//         maxDeliveryTime: 35,
//         lastMileTravel: 6.199999809265137,
//         lastMileDistance: 0,
//         serviceability: "SERVICEABLE_WITH_BANNER",
//         rainMode: "NONE",
//         longDistance: "NOT_LONG_DISTANCE",
//         preferentialService: false,
//         iconType: "EMPTY",
//       },
//       promoted: false,
//       avgRating: "4.5",
//       totalRatings: 0,
//       new: false,
//     },
//     subtype: "basic",
//   },
//   {
//     type: "restaurant",
//     data: {
//       type: "F",
//       id: "395204",
//       name: "McDonald's Gourmet Burger Collection",
//       uuid: "55c33a9b-bb51-4b9d-8c94-708d48b08ebd",
//       city: "21",
//       area: "Piplod",
//       totalRatingsString: "100+ ratings",
//       cloudinaryImageId: "wzbo5xivr8hstl0vxzcm",
//       cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
//       tags: [],
//       costForTwo: 50000,
//       costForTwoString: "₹500 FOR TWO",
//       deliveryTime: 31,
//       minDeliveryTime: 30,
//       maxDeliveryTime: 40,
//       slaString: "30-40 MINS",
//       lastMileTravel: 8.199999809265137,
//       slugs: {
//         restaurant:
//           "mcdonalds-gourmet-burger-collection-valentine-cinema-piplod",
//         city: "surat",
//       },
//       cityState: "21",
//       address:
//         "MC Donalds Family Restaurant Valentine Mall Valentine Cine Vision Surat , Dhumas Road, Nr Govardhan Haveli, Surat 395007",
//       locality: "Valentine Cinema",
//       parentId: 10761,
//       unserviceable: true,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: "FREE DELIVERY",
//         shortDescriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       aggregatedDiscountInfoV2: {
//         header: "",
//         shortDescriptionList: [
//           {
//             meta: "Free Delivery",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       chain: [],
//       feeDetails: {
//         fees: [],
//         totalFees: 0,
//         message: "",
//         title: "",
//         amount: "",
//         icon: "",
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: "",
//         nextCloseMessage: "",
//       },
//       longDistanceEnabled: 0,
//       rainMode: "NONE",
//       thirdPartyAddress: false,
//       thirdPartyVendor: "",
//       adTrackingID: "",
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: "8.1 kms",
//       hasSurge: false,
//       sla: {
//         restaurantId: "395204",
//         deliveryTime: 31,
//         minDeliveryTime: 30,
//         maxDeliveryTime: 40,
//         lastMileTravel: 8.199999809265137,
//         lastMileDistance: 0,
//         serviceability: "SERVICEABLE_WITH_BANNER",
//         rainMode: "NONE",
//         longDistance: "NOT_LONG_DISTANCE",
//         preferentialService: false,
//         iconType: "EMPTY",
//       },
//       promoted: false,
//       avgRating: "4.2",
//       totalRatings: 100,
//       new: false,
//     },
//     subtype: "basic",
//   },
//   {
//     type: "restaurant",
//     data: {
//       type: "F",
//       id: "193541",
//       name: "Behrouz Biryani",
//       uuid: "abc2e9d1-df00-4449-bde3-4c35982d0ef3",
//       city: "21",
//       area: "Adajan Patiya",
//       totalRatingsString: "1000+ ratings",
//       cloudinaryImageId: "craozjakzx7sll2uracb",
//       cuisines: [
//         "Biryani",
//         "Mughlai",
//         "Lucknowi",
//         "Hyderabadi",
//         "Kebabs",
//         "North Indian",
//         "Persian",
//         "Desserts",
//       ],
//       tags: [],
//       costForTwo: 50000,
//       costForTwoString: "₹500 FOR TWO",
//       deliveryTime: 49,
//       minDeliveryTime: 45,
//       maxDeliveryTime: 55,
//       slaString: "45-55 MINS",
//       lastMileTravel: 6.400000095367432,
//       slugs: {
//         restaurant: "behrouz-biryani-adajan-adajan",
//         city: "surat",
//       },
//       cityState: "21",
//       address:
//         "Chalta no 23, Ground Floor, Guru Ashish Building, Below Stallon Gym, Opp Kotyark Nagar, Near Navyug College, Adajan, Surat 395005",
//       locality: "Nr Navyug College, Rander Road",
//       parentId: 1803,
//       unserviceable: true,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: "FREE DELIVERY",
//         shortDescriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       aggregatedDiscountInfoV2: {
//         header: "",
//         shortDescriptionList: [
//           {
//             meta: "Free Delivery",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       chain: [],
//       feeDetails: {
//         fees: [],
//         totalFees: 0,
//         message: "",
//         title: "",
//         amount: "",
//         icon: "",
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: "",
//         nextCloseMessage: "",
//       },
//       longDistanceEnabled: 0,
//       rainMode: "NONE",
//       thirdPartyAddress: false,
//       thirdPartyVendor: "",
//       adTrackingID: "",
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: "6.4 kms",
//       hasSurge: false,
//       sla: {
//         restaurantId: "193541",
//         deliveryTime: 49,
//         minDeliveryTime: 45,
//         maxDeliveryTime: 55,
//         lastMileTravel: 6.400000095367432,
//         lastMileDistance: 0,
//         serviceability: "SERVICEABLE_WITH_BANNER",
//         rainMode: "NONE",
//         longDistance: "NOT_LONG_DISTANCE",
//         preferentialService: false,
//         iconType: "EMPTY",
//       },
//       promoted: false,
//       avgRating: "4.3",
//       totalRatings: 1000,
//       new: false,
//     },
//     subtype: "basic",
//   },
//   {
//     type: "restaurant",
//     data: {
//       type: "F",
//       id: "475510",
//       name: "Momos House",
//       uuid: "34320d9a-ffa7-450c-ad61-d50485306626",
//       city: "21",
//       area: "Piplod",
//       totalRatingsString: "Too Few Ratings",
//       cloudinaryImageId: "vmold2zualdrrypxcvue",
//       cuisines: ["Fast Food"],
//       tags: [],
//       costForTwo: 20000,
//       costForTwoString: "₹200 FOR TWO",
//       deliveryTime: 31,
//       minDeliveryTime: 30,
//       maxDeliveryTime: 40,
//       slaString: "30-40 MINS",
//       lastMileTravel: 6.199999809265137,
//       slugs: {
//         restaurant: "momo’s-house-piplod-piplod",
//         city: "surat",
//       },
//       cityState: "21",
//       address:
//         "SHOP NO - 2, MARVELLA CORRIDOR, OPP. C B PATEL HEALTH CLUB, V.I.P. ROAD, Surat,, Vesu , Surat Municipal Corporation, Surat Municipal Corporation, Gujarat - 395007",
//       locality: "Vesu",
//       parentId: 15884,
//       unserviceable: true,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: "FREE DELIVERY",
//         shortDescriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       aggregatedDiscountInfoV2: {
//         header: "",
//         shortDescriptionList: [
//           {
//             meta: "Free Delivery",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       chain: [],
//       feeDetails: {
//         fees: [],
//         totalFees: 0,
//         message: "",
//         title: "",
//         amount: "",
//         icon: "",
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: "",
//         nextCloseMessage: "",
//       },
//       longDistanceEnabled: 0,
//       rainMode: "NONE",
//       thirdPartyAddress: false,
//       thirdPartyVendor: "",
//       adTrackingID: "",
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: "6.1 kms",
//       hasSurge: false,
//       sla: {
//         restaurantId: "475510",
//         deliveryTime: 31,
//         minDeliveryTime: 30,
//         maxDeliveryTime: 40,
//         lastMileTravel: 6.199999809265137,
//         lastMileDistance: 0,
//         serviceability: "SERVICEABLE_WITH_BANNER",
//         rainMode: "NONE",
//         longDistance: "NOT_LONG_DISTANCE",
//         preferentialService: false,
//         iconType: "EMPTY",
//       },
//       promoted: false,
//       avgRating: "4.1",
//       totalRatings: 0,
//       new: false,
//     },
//     subtype: "basic",
//   },
//   {
//     type: "restaurant",
//     data: {
//       type: "F",
//       id: "127596",
//       name: "Sabir Chicken",
//       uuid: "f0f49821-52ed-4435-9014-c845e964a3d8",
//       city: "21",
//       area: "Chowk Bazar",
//       totalRatingsString: "5000+ ratings",
//       cloudinaryImageId: "kilrdjqt8chduasii5ni",
//       cuisines: ["North Indian", "Biryani"],
//       tags: [],
//       costForTwo: 30000,
//       costForTwoString: "₹300 FOR TWO",
//       deliveryTime: 30,
//       minDeliveryTime: 25,
//       maxDeliveryTime: 35,
//       slaString: "25-35 MINS",
//       lastMileTravel: 4.300000190734863,
//       slugs: {
//         restaurant: "sabir-chicken-athwa-athwa",
//         city: "surat",
//       },
//       cityState: "21",
//       address:
//         "Nehru Bridge, Behind Nagin Chand Hall, Chowk Bazar, Surat, Gujarat 395003",
//       locality: "Chowk Bazar",
//       parentId: 173978,
//       unserviceable: true,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: "FREE DELIVERY",
//         shortDescriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       aggregatedDiscountInfoV2: {
//         header: "",
//         shortDescriptionList: [
//           {
//             meta: "Free Delivery",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       chain: [],
//       feeDetails: {
//         fees: [],
//         totalFees: 0,
//         message: "",
//         title: "",
//         amount: "",
//         icon: "",
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: "",
//         nextCloseMessage: "",
//       },
//       longDistanceEnabled: 0,
//       rainMode: "NONE",
//       thirdPartyAddress: false,
//       thirdPartyVendor: "",
//       adTrackingID: "",
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: "4.3 kms",
//       hasSurge: false,
//       sla: {
//         restaurantId: "127596",
//         deliveryTime: 30,
//         minDeliveryTime: 25,
//         maxDeliveryTime: 35,
//         lastMileTravel: 4.300000190734863,
//         lastMileDistance: 0,
//         serviceability: "SERVICEABLE_WITH_BANNER",
//         rainMode: "NONE",
//         longDistance: "NOT_LONG_DISTANCE",
//         preferentialService: false,
//         iconType: "EMPTY",
//       },
//       promoted: false,
//       avgRating: "4.1",
//       totalRatings: 5000,
//       new: false,
//     },
//     subtype: "basic",
//   },
//   {
//     type: "restaurant",
//     data: {
//       type: "F",
//       id: "64656",
//       name: "Mahesh Pav Bhaji",
//       uuid: "ccfda4b9-82b1-4f22-9567-eb98c448b267",
//       city: "21",
//       area: "Adajan",
//       totalRatingsString: "10000+ ratings",
//       cloudinaryImageId: "84d3bea985f13bd980dc39c9c73bc87f",
//       cuisines: ["Desserts", "Chinese", "South Indian", "Ice Cream", "Pizzas"],
//       tags: [],
//       costForTwo: 25000,
//       costForTwoString: "₹250 FOR TWO",
//       deliveryTime: 36,
//       minDeliveryTime: 35,
//       maxDeliveryTime: 45,
//       slaString: "35-45 MINS",
//       lastMileTravel: 6.900000095367432,
//       slugs: {
//         restaurant: "mahesh-pav-bhaji-adajan-gam-adajan",
//         city: "surat",
//       },
//       cityState: "21",
//       address:
//         "Shop 12, Garden View Apartment, Honey Park Road, Adajan Gam, Surat",
//       locality: "Adajan Gam",
//       parentId: 6553,
//       unserviceable: true,
//       veg: true,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: "30% off",
//         shortDescriptionList: [
//           {
//             meta: "30% off | Use JUMBO",
//             discountType: "Percentage",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "30% off up to ₹150 on orders above ₹400 | Use code JUMBO",
//             discountType: "Percentage",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       aggregatedDiscountInfoV2: {
//         header: "30% OFF",
//         shortDescriptionList: [
//           {
//             meta: "Use JUMBO",
//             discountType: "Percentage",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "30% off up to ₹150 on orders above ₹400 | Use code JUMBO",
//             discountType: "Percentage",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       chain: [],
//       feeDetails: {
//         fees: [],
//         totalFees: 0,
//         message: "",
//         title: "",
//         amount: "",
//         icon: "",
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: "",
//         nextCloseMessage: "",
//       },
//       longDistanceEnabled: 0,
//       rainMode: "NONE",
//       thirdPartyAddress: false,
//       thirdPartyVendor: "",
//       adTrackingID: "",
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: "6.9 kms",
//       hasSurge: false,
//       sla: {
//         restaurantId: "64656",
//         deliveryTime: 36,
//         minDeliveryTime: 35,
//         maxDeliveryTime: 45,
//         lastMileTravel: 6.900000095367432,
//         lastMileDistance: 0,
//         serviceability: "SERVICEABLE_WITH_BANNER",
//         rainMode: "NONE",
//         longDistance: "NOT_LONG_DISTANCE",
//         preferentialService: false,
//         iconType: "EMPTY",
//       },
//       promoted: false,
//       avgRating: "4.1",
//       totalRatings: 10000,
//       new: false,
//     },
//     subtype: "basic",
//   },
//   {
//     type: "restaurant",
//     data: {
//       type: "F",
//       id: "255204",
//       name: "The Dango Cake Shop",
//       uuid: "dbfd3f3c-77a6-4979-96c4-ce9863e54cdc",
//       city: "21",
//       area: "Galaxy Circle",
//       totalRatingsString: "50+ ratings",
//       cloudinaryImageId: "mnvfpsoealkflze4e5qi",
//       cuisines: ["Bakery"],
//       tags: [],
//       costForTwo: 27000,
//       costForTwoString: "₹270 FOR TWO",
//       deliveryTime: 34,
//       minDeliveryTime: 30,
//       maxDeliveryTime: 40,
//       slaString: "30-40 MINS",
//       lastMileTravel: 7.699999809265137,
//       slugs: {
//         restaurant: "twisted-cake-live-cake-adajan-adajan",
//         city: "surat",
//       },
//       cityState: "21",
//       address: "44 La Victoria, galaxy circle pal Surat",
//       locality: "Galaxy Circle",
//       parentId: 207513,
//       unserviceable: true,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: "FREE DELIVERY",
//         shortDescriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       aggregatedDiscountInfoV2: {
//         header: "",
//         shortDescriptionList: [
//           {
//             meta: "Free Delivery",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       chain: [],
//       feeDetails: {
//         fees: [],
//         totalFees: 0,
//         message: "",
//         title: "",
//         amount: "",
//         icon: "",
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: "",
//         nextCloseMessage: "",
//       },
//       longDistanceEnabled: 0,
//       rainMode: "NONE",
//       thirdPartyAddress: false,
//       thirdPartyVendor: "",
//       adTrackingID: "",
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: "7.6 kms",
//       hasSurge: false,
//       sla: {
//         restaurantId: "255204",
//         deliveryTime: 34,
//         minDeliveryTime: 30,
//         maxDeliveryTime: 40,
//         lastMileTravel: 7.699999809265137,
//         lastMileDistance: 0,
//         serviceability: "SERVICEABLE_WITH_BANNER",
//         rainMode: "NONE",
//         longDistance: "NOT_LONG_DISTANCE",
//         preferentialService: false,
//         iconType: "EMPTY",
//       },
//       promoted: false,
//       avgRating: "4.2",
//       totalRatings: 50,
//       new: false,
//     },
//     subtype: "basic",
//   },
//   {
//     type: "restaurant",
//     data: {
//       type: "F",
//       id: "664656",
//       name: "Cheezylicious Cafe",
//       uuid: "5880e561-10ed-4f96-990b-2251e2f09c82",
//       city: "21",
//       area: "Piplod",
//       totalRatingsString: "Too Few Ratings",
//       cloudinaryImageId: "fda9ad56b9d62070fec105cd93693129",
//       cuisines: [
//         "Cafe",
//         "Fast Food",
//         "Chinese",
//         "Snacks",
//         "Italian",
//         "Mexican",
//       ],
//       tags: [],
//       costForTwo: 15000,
//       costForTwoString: "₹150 FOR TWO",
//       deliveryTime: 38,
//       minDeliveryTime: 35,
//       maxDeliveryTime: 45,
//       slaString: "35-45 MINS",
//       lastMileTravel: 7.599999904632568,
//       slugs: {
//         restaurant: "cheezylicious-cafe-piplod-piplod-2",
//         city: "surat",
//       },
//       cityState: "21",
//       address:
//         "Shop no G10 ground floor, aagam square B/S Dream heritage, Canal road, Vesu",
//       locality: "Dream heritage",
//       parentId: 59292,
//       unserviceable: true,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: "FREE DELIVERY",
//         shortDescriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       aggregatedDiscountInfoV2: {
//         header: "",
//         shortDescriptionList: [
//           {
//             meta: "Free Delivery",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       chain: [],
//       feeDetails: {
//         fees: [],
//         totalFees: 0,
//         message: "",
//         title: "",
//         amount: "",
//         icon: "",
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: "",
//         nextCloseMessage: "",
//       },
//       longDistanceEnabled: 0,
//       rainMode: "NONE",
//       thirdPartyAddress: false,
//       thirdPartyVendor: "",
//       adTrackingID: "",
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: "7.5 kms",
//       hasSurge: false,
//       sla: {
//         restaurantId: "664656",
//         deliveryTime: 38,
//         minDeliveryTime: 35,
//         maxDeliveryTime: 45,
//         lastMileTravel: 7.599999904632568,
//         lastMileDistance: 0,
//         serviceability: "SERVICEABLE_WITH_BANNER",
//         rainMode: "NONE",
//         longDistance: "NOT_LONG_DISTANCE",
//         preferentialService: false,
//         iconType: "EMPTY",
//       },
//       promoted: false,
//       avgRating: "3.9",
//       totalRatings: 0,
//       new: true,
//     },
//     subtype: "basic",
//   },
// ];

// // Restaurant card component: Image, name, cuisine
// const RestaurantCard = ({
//   cloudinaryImageId,
//   name,
//   cuisines,
//   area,
//   lastMileTravelString,
//   costForTwoString,
//   avgRating,
// }) => {
//   return (
//     <div className="card">
//       <img
//         src={
//           "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
//           cloudinaryImageId
//         }
//       />
//       <h2>{name}</h2>
//       <h4>{cuisines.join(", ")}</h4>
//       <h4>{area}</h4>
//       <span>
//         <h4><i className="fa-solid fa-star"></i>{avgRating}</h4>
//         <h4>{lastMileTravelString}</h4>
//         <h4>{costForTwoString}</h4>
//       </span>
//     </div>
//   );
// };

// // Body Component for body section: It contain all restaurant cards
// // We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
// const Body = () => {
//   return (
//     <div className="restaurant-list">
//       {restaurantList.map((restaurant) => {
//         return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
//       })}
//     </div>
//   );
// };

// // Footer component for footer section
// const Footer = () => {
//   const year = new Date().getFullYear();
//   return (
//     <div className="footer">
//       Created By
//       <i className="fa-solid fa-heart"></i>
//       <a href="https://www.linkedin.com/in/chetannada/" target="_blank">
//         Chetan Nada
//       </a>
//       <i className="fa-solid fa-copyright"></i>
//       {year}
//       <strong>
//         Food<span>Fire</span>
//       </strong>
//     </div>
//   );
// };



// // AppLayout component to show: Header, Body, Footer
// const AppLayout = () => {
//   return (
//     <React.Fragment>
//       <Header />
//       <Body />
//       <Footer />
//     </React.Fragment>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);


// const heading = React.createElement(
  //   "h1",
//   {
//     id: "title",
//     className: "heading"
//   },
//   "jai shree ram"
// );

// console.log(heading);