import React, { useState, useEffect } from "react";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import { Combobox } from "@headlessui/react";

const sectors = ["IT", "Healthcare", "Finance", "Education", "Engineering", "Marketing", "Retail"];

const JobSearchBar = () => {
  const [query, setQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [cityQuery, setCityQuery] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedSector, setSelectedSector] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch("https://api.countrystatecity.in/v1/countries/IN/cities", {
          headers: {
            "X-CSCAPI-KEY": "YOUR_API_KEY_HERE", // Replace with a valid API key
          },
        });
        const data = await response.json();
        setCities(data.map((city) => city.name));
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };
    fetchCities();
  }, []);

  useEffect(() => {
    setFilteredCities(
      cityQuery === ""
        ? cities
        : cities.filter((city) => city.toLowerCase().includes(cityQuery.toLowerCase()))
    );
  }, [cityQuery, cities]);

  return (
    <div className="bg-[#0d121e] mt-5 p-4 rounded-xl shadow-md flex items-center gap-4 w-full max-w-3xl mx-auto">
      <div className="flex-1 relative">
        <input
          type="text"
          placeholder="Job Title or Keywords"
          className="w-full border-b-2 border-blue-500 focus:outline-none p-2"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="flex-1 relative">
        <FaMapMarkerAlt className="absolute left-2 top-1/2 transform -translate-y-1/2 text-blue-500" />
        <Combobox value={selectedCity} onChange={setSelectedCity}>
          <Combobox.Input
            className="w-full border-b-2 border-blue-500 focus:outline-none p-2 pl-8"
            onChange={(e) => setCityQuery(e.target.value)}
            placeholder="City, State or ZIP"
          />
          <Combobox.Options className="absolute z-10 bg-white shadow-lg max-h-40 overflow-y-auto w-full">
            {filteredCities.map((city, index) => (
              <Combobox.Option key={index} value={city} className="p-2 hover:bg-blue-100 cursor-pointer">
                {city}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </Combobox>
      </div>
      <div className="flex-1 relative">
        <Combobox value={selectedSector} onChange={setSelectedSector}>
          <Combobox.Input
            className="w-full border-b-2 border-blue-500 focus:outline-none p-2"
            onChange={(e) => setSelectedSector(e.target.value)}
            placeholder="Select Sector"
          />
          <Combobox.Options className="absolute z-10 bg-white shadow-lg max-h-40 overflow-y-auto w-full">
            {sectors.map((sector, index) => (
              <Combobox.Option key={index} value={sector} className="p-2 text-black hover:bg-blue-100 cursor-pointer">
                {sector}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </Combobox>
      </div>
      <button className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-500 transition-all">Find Job</button>
    </div>
  );
};

export default JobSearchBar;
