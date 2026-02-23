import React, { useEffect, useRef, useState } from "react";
import Container from "../../Component/Container/Container";
import { Search } from "lucide-react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
const Converage = () => {
  const [data, setData] = useState([]);
  const [handleChane, SetHandleChange] = useState("");
  const mapRef = useRef(null);

  useEffect(() => {
    axios("/warehouses.json").then((res) => {
      setData(res?.data);
    });
  }, []);
  const handeClick = () => {
    if (handleChane === "" || handleChane.trim().length === 0) {
      return;
    } else {
      let district = data.find((res) =>
        res.district.toLowerCase().includes(handleChane.toLowerCase()),
      );
      if (district) {
        let flyto = [district.latitude, district.longitude];
        mapRef.current.flyTo(flyto, 11);
      }
    }
  };
  return (
    <section>
      <Container>
        <div>
          <h1 className="text-4xl text-black/80 mt-6 font-bold">
            We are available in 64 districts
          </h1>
          <form className="flex items-center w-150 mt-5 max-[700px]:w-full bg-gray-200 rounded-full shadow-sm">
            {/* Search Icon + Input */}
            <div className="flex items-center flex-1 px-4 ">
              <Search className="w-5 h-5 text-gray-400 mr-3" />
              <input
                type="text"
                name="text"
                placeholder="Search here"
                onChange={(e) => SetHandleChange(e.target.value)}
                className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
              />
            </div>

            {/* Search Button */}
            <button
              onClick={handeClick}
              type="button"
              className="background-color cursor-pointer text-white font-bold px-6 py-2 rounded-full transition"
            >
              Search
            </button>
          </form>
        </div>

        <div className="mt-10 border-dotted border-t border-black/10">
          <h1 className="text-2xl font-bold text-black/70 mt-7">
            We deliver almost all over Bangladesh
          </h1>
          <div className="w-full h-125 my-10">
            <MapContainer
              center={[23.685, 90.3563]}
              zoom={7}
              scrollWheelZoom={false}
              ref={mapRef}
              className="h-full rounded-xl"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {data?.map((res, index) => (
                <Marker key={index} position={[res?.latitude, res?.longitude]}>
                  <Popup>
                    Our Cuverage area : {res.covered_area.toString()}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Converage;
