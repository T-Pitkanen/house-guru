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
      address: "HOUSE",
      location: "Anytown",
      type: 'House',
      bedrooms: 4,
      bathrooms: 3,
      square_meters: 232,
      price: 450000,
      description:
        "THIS IS A HOUSE",
      image: "/properties/house-room.jpg",
    },
    {
      id: "123456786",
      address: "SUMMERHOUSE",
      location: "Anytown",
      type: 'Summerhouse',
      bedrooms: 2,
      bathrooms: 4,
      square_meters: 102,
      price: 650000,
      description:
        "THIS IS A SUMMERHOUSE",
      image: "/properties/house-livingroom.jpg",
    },
    {
      id: "1234586",
      address: "APARTMENT",
      location: "Anytown",
      type: 'Apartment',
      bedrooms: 2,
      bathrooms: 4,
      square_meters: 102,
      price: 850000,
      description:
        "THIS IS AN APARTMENT",
        image: "/properties/house-kitchen.jpg",
    },
    {
      id: "1234522286",
      address: "Summerhouse",
      location: "Thattown",
      type: 'Summerhouse',
      bedrooms: 2,
      bathrooms: 6,
      square_meters: 102,
      price: 80000,
      description:
        "THIS IS AN Summerhouse",
        image: "/properties/house-dining.jpg",
    },
    {
      id: "1234666666666586",
      address: "House",
      location: "Thattown",
      type: 'House',
      bedrooms: 5,
      bathrooms: 4,
      square_meters: 152,
      price: 450000,
      description:
        "THIS IS AN House",
        image: "/properties/house-room.jpg",
    },
    {
      id: "123452321231286",
      address: "Apartment",
      location: "Thattown",
      type: 'Apartment',
      bedrooms: 1,
      bathrooms: 1,
      square_meters: 50,
      price: 75000,
      description:
        "THIS IS AN Apartment",
        image: "/properties/house-dining.jpg",
    },
    {
      id: "123452324321231286",
      address: "Apartment",
      location: "Thattown",
      type: 'Apartment',
      bedrooms: 1,
      bathrooms: 1,
      square_meters: 50,
      price: 75000,
      description:
        "THIS IS AN Apartment",
        image: "/properties/house-dining.jpg",
    },
    {
      id: "12345552321231286",
      address: "Apartment",
      location: "Thattown",
      type: 'Apartment',
      bedrooms: 1,
      bathrooms: 1,
      square_meters: 50,
      price: 75000,
      description:
        "THIS IS AN Apartment",
        image: "/properties/house-dining.jpg",
    },
    {
      id: "12311452321231286",
      address: "Apartment",
      location: "Thattown",
      type: 'Apartment',
      bedrooms: 1,
      bathrooms: 1,
      square_meters: 50,
      price: 75000,
      description:
        "THIS IS AN Apartment",
        image: "/properties/house-dining.jpg",
    },
    {
      id: "12345222321231286",
      address: "Apartment",
      location: "Thattown",
      type: 'Apartment',
      bedrooms: 1,
      bathrooms: 1,
      square_meters: 50,
      price: 75000,
      description:
        "THIS IS AN Apartment",
        image: "/properties/house-dining.jpg",
    },
    {
      id: "12345232133231286",
      address: "Apartment",
      location: "Thattown",
      type: 'Apartment',
      bedrooms: 1,
      bathrooms: 1,
      square_meters: 50,
      price: 75000,
      description:
        "THIS IS AN Apartment",
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
