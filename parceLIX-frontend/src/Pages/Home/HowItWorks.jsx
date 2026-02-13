import { Truck, MapPin, Banknote, TruckElectric } from "lucide-react";
import Container from "../../Component/Container/Container";

const SERVICES = [
  {
    id: 1,
    icon: <Truck size={40} />,
    title: "Booking Pick & Drop",
    description:
      "Easily schedule parcel pickup and drop-off from your location with fast and reliable service.",
  },
  {
    id: 2,
    icon: <Banknote size={40} />,
    title: "Cash On Delivery",
    description:
      "Offer your customers the convenience of paying in cash at the time of delivery.",
  },
  {
    id: 3,
    icon: <TruckElectric size={40} />,
    title: "Delivery Hub",
    description:
      "Our smart distribution hubs sort and dispatch parcels efficiently for faster nationwide delivery.",
  },
  {
    id: 4,
    icon: <MapPin size={40} />,
    title: "Booking SME & Corporate",
    description:
      "Reliable nationwide parcel delivery solutions for small businesses and large enterprises.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 ">
      <Container>
        {/* Section Header */}
        <div className=" mb-12 text-center w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative">
            How It Works
            <span className="w-12 h-0.75 bg-amber-500 rounded-2xl absolute top-11 right-[48%]"></span>
          </h2>
          <p className="text-gray-500 mt-4">
            Simple, reliable, and efficient parcel delivery designed for
            individuals and businesses.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((details) => (
            <div
              key={details?.id}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="mb-4">
                {/* <Icon size={40} /> */}
                {details?.icon}
              </div>

              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                {details.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed">
                {details?.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
