let propertyData = [];

/*
export const getPostData = async () => {
  const url = "/api/posts";
  const response = await fetch(url);
  const data = await response.json();
  postData = data;

  return data;

}; */

export const getPropertyData = async () => {
  const data = await getPropertyDataMock();
  propertyData = data;

  return data;
};

export const getPropertyById = async (id) => {
  console.log(propertyData);

  if (propertyData.length === 0) {
    await getPropertyData();
  }

  return propertyData.find((property) => property._id === id);
};

export const getPropertyDataMock = async () => {
  return [
    {
      id: "12345673236",
      address: "1234 Elm Street",
      location: "Cityville",
      type: 'House',
      bedrooms: 4,
      bathrooms: 3,
      square_meters: 232,
      price: '450,000',
      description:
        "House with 4 bedrooms and 3 bathrooms",
      image: "/properties/house-dining.jpg",
    },
    {
      id: "123456786",
      address: "5678 Maple Avenue",
      location: "Cityville",
      type: 'Summerhouse',
      bedrooms: 4,
      bathrooms: 2,
      square_meters: 102,
      price: '650,000',
      description:
        "Summerhouse with 4 bedrooms and 2 bathrooms",
      image: "/properties/house-livingroom.jpg",
    },
    {
      id: "1234586",
      address: "4321 Oak Court",
      location: "Villagetown",
      type: 'Apartment',
      bedrooms: 2,
      bathrooms: 2,
      square_meters: 102,
      price: '850,000',
      description:
        "Apartment with 2 bedrooms and 2 bathrooms",
        image: "/properties/house-kitchen.jpg",
    },
    {
      id: "1234522286",
      address: "2468 Cedar Road",
      location: "Suburbia",
      type: 'Summerhouse',
      bedrooms: 2,
      bathrooms: 1,
      square_meters: 102,
      price: '80,000',
      description:
        "Summerhouse with 2 bedrooms and 1 bathroom",
        image: "/properties/house-dining.jpg",
    },
    {
      id: "1234666666666586",
      address: "13579 Birch Boulevard",
      location: "Suburbia",
      type: 'House',
      bedrooms: 5,
      bathrooms: 4,
      square_meters: 152,
      price: '450,000',
      description:
        "House with 5 bedrooms and 4 bathrooms",
        image: "/properties/house-room.jpg",
    },
    {
      id: "123452321231286",
      address: "8642 Willow Way",
      location: "Riverside",
      type: 'Summerhouse',
      bedrooms: 3,
      bathrooms: 2,
      square_meters: 70,
      price: '125,000',
      description:
        "Summerhouse with 3 bedrooms and 2 bathrooms",
        image: "/properties/house-kitchen.jpg",
    },
    {
      id: "123452324321231286",
      address: "3141 Juniper Junction",
      location: "Riverside",
      type: 'House',
      bedrooms: 3,
      bathrooms: 1,
      square_meters: 90,
      price: '100,000',
      description:
        "House with 1 bedroom and 1 bathroom",
        image: "/properties/house-room.jpg",
    },
    {
      id: "12345552321231286",
      address: "9797 Sycamore Street",
      location: "Riverside",
      type: 'Apartment',
      bedrooms: 1,
      bathrooms: 1,
      square_meters: 50,
      price: '95,000',
      description:
        "Apartment with 1 bedroom and 1 bathroom",
        image: "/properties/house-dining.jpg",
    },
    {
      id: "12311452321231286",
      address: "8888 Magnolia Manor",
      location: "Villagetown",
      type: 'Summerhouse',
      bedrooms: 8,
      bathrooms: 7,
      square_meters: 350,
      price: '1,750,000',
      description:
        "Summerhouse with 8 bedrooms and 7 bathrooms",
        image: "/properties/apartment-alrum.jpg",
    },
    {
      id: "12345222321231286",
      address: "4545 Chestnut Circle",
      location: "Cityville",
      type: 'Apartment',
      bedrooms: 2,
      bathrooms: 2,
      square_meters: 80,
      price: '120,000',
      description:
        "Apartment with 2 bedrooms and 2 bathrooms",
        image: "/properties/apartmen3-alrum.jpg",
    },
    {
      id: "12345232133231286",
      address: "3333 Redwood Road",
      location: "Anytown",
      type: 'House',
      bedrooms: 4,
      bathrooms: 3,
      square_meters: 50,
      price: '350,000',
      description:
        "House with 1 bedroom and 1 bathroom",
        image: "/properties/apartmen2-alrum.jpg",
    },
    {
      id: "xd69696666",
      address: "1234 Elm Street",
      location: "Cityville",
      type: 'House',
      bedrooms: 4,
      bathrooms: 3,
      square_meters: 232,
      price: '450,000',
      description:
        "House with 4 bedrooms and 3 bathrooms",
      image: "/properties/house-dining.jpg",
    },
    {
      id: "1442345673236",
      address: "1234 Elm Street",
      location: "Cityville",
      type: 'House',
      bedrooms: 4,
      bathrooms: 3,
      square_meters: 232,
      price: '450,000',
      description:
        "House with 4 bedrooms and 3 bathrooms",
      image: "/properties/house-dining.jpg",
    },
    {
      id: "124345673236",
      address: "1234 Elm Street",
      location: "Cityville",
      type: 'House',
      bedrooms: 4,
      bathrooms: 3,
      square_meters: 232,
      price: '450,000',
      description:
        "House with 4 bedrooms and 3 bathrooms",
      image: "/properties/house-dining.jpg",
    },
    {
      id: "1234533673236",
      address: "1234 Elm Street",
      location: "Cityville",
      type: 'House',
      bedrooms: 4,
      bathrooms: 3,
      square_meters: 232,
      price: '450,000',
      description:
        "House with 4 bedrooms and 3 bathrooms",
      image: "/properties/house-dining.jpg",
    },
  ];
};

export const createProperty = async (property) => {
  return fetch("/api/properties", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(property),
  }).then((response) => {
    return response.json();
  });
};

export const updateProperties = async (property) => {
  return fetch("/api/properties", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(property),
  }).then((response) => {
    return response.json();
  });
};
