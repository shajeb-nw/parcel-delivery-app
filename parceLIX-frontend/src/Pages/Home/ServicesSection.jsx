import {
  Banknote,
  Building2,
  MapPin,
  PackageCheck,
  RefreshCcw,
  Truck,
  Van,
} from "lucide-react";
import Container from "../../Component/Container/Container";

const SERVICES = [
  {
    id: 1,
    title: "Express & Standard Delivery",
    icon: <Truck />,
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery is available in Dhaka within 4–6 hours.",
  },
  {
    id: 2,
    title: "Nationwide Delivery",
    icon: <MapPin />,
    description:
      "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    highlight: true,
  },
  {
    id: 3,
    title: "Fulfillment Solution",
    icon: <PackageCheck></PackageCheck>,
    description:
      "We offer customized services including inventory management support, online order processing, packaging, and after-sales support.",
  },
  {
    id: 4,
    title: "Cash on Home Delivery",
    icon: <Banknote></Banknote>,
    description:
      "We provide 100% cash on delivery anywhere in Bangladesh with guaranteed product safety.",
  },
  {
    id: 5,
    title: "Corporate Service / Contract In Logistics",
    icon: <Building2></Building2>,
    description:
      "Customized corporate services which includes warehouse and inventory management support.",
  },
  {
    id: 6,
    title: "Parcel Return",
    icon: <RefreshCcw></RefreshCcw>,
    description:
      "Through our reverse logistics facility, we allow end customers to return or exchange their products with online business merchants.",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-[#0E4F4F] py-20">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
            Our Services
            <span className="w-12 h-0.75 bg-amber-500 rounded-2xl absolute top-11 right-[48%]"></span>
          </h2>
          <p className="text-gray-200 text-sm md:text-base">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map(({ id, title, icon, description, highlight }) => (
            <div
              key={id}
              className={`rounded-2xl p-8 text-center transition duration-300 
              ${
                highlight
                  ? "background-color text-white/80 -translate-y-4"
                  : "bg-white text-gray-700 hover:-translate-y-4 hover:bg-[linear-gradient(135deg,#ff60b8,#94bbe9)] hover:text-white "
              }`}
            >
              {/* Icon Placeholder Circle */}
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
                <span className={`text-2xl text-black ${highlight && "text-black"}`}>
                  {icon}
                </span>
              </div>

              <h3 className="font-semibold text-lg mb-4">{title}</h3>

              <p className="text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
