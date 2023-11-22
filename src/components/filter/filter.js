import React, { useState, useEffect } from "react";
import { getPropertyData } from "@/services/properties.service";
import Image from "next/image";

const Filter = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [rooms, setRooms] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await getPropertyData();
      setProperties(data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const handleFilter = () => {
    setIsLoading(true);
    const filtered = properties.filter(
      (property) =>
        (price ? property.price <= price : true) &&
        (size ? property.square_meters <= size : true) &&
        (type ? property.type[type] : true) &&
        (location ? property.address.includes(location) : true) &&
        (rooms ? property.bedrooms <= rooms : true)
    );
    setTimeout(() => {
      setFilteredProperties(filtered);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Max Price"
      />
      <input
        type="number"
        value={size}
        onChange={(e) => setSize(e.target.value)}
        placeholder="Max Size"
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">Select type</option>
        <option value="Summerhouse">Summerhouse</option>
        <option value="House">House</option>
        <option value="Apartment">Apartment</option>
      </select>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Location"
      />
      <input
        type="number"
        value={rooms}
        onChange={(e) => setRooms(e.target.value)}
        placeholder="Max Rooms"
      />
      <button onClick={handleFilter}>Filter</button>
      <div>
        {/* ... */}
        {isLoading ? (
          <Image
            src="/loader/1488.gif"
            alt="Loading..."
            width={50}
            height={50}
          />
        ) : (
          filteredProperties.map((property) => (
            <div key={property.id}>
              <h2>{property.address}</h2>
              <p>{property.description}</p>
              {/* Add more property details as needed */}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Filter;
