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
      type: { House: true, Apartment: false, Summerhouse: false },
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
      type: { "House": false, "Apartment": false, "Summerhouse": true },
      bedrooms: 2,
      bathrooms: 4,
      square_meters: 102,
      price: 650000,
      description:
        "THIS IS A SUMMERHOUSE",
      image: "/properties/house-livingroom.jpg",
    },
    {
      id: "123456786",
      address: "APARTMENT",
      location: "Anytown",
      type: { "House": false, "Apartment": true, "Summerhouse": false },
      bedrooms: 2,
      bathrooms: 4,
      square_meters: 102,
      price: 650000,
      description:
        "THIS IS AN APARTMENT",
        image: "/properties/house-kitchen.jpg",
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
