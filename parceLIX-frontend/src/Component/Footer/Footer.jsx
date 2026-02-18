import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router";
import Container from "../Container/Container";


const Footer = () => {
  return (
    <footer className="background-color text-white/80 pt-16 pb-8">
      <Container className=" mx-auto grid md:grid-cols-4 gap-10">

        {/* Brand Section */}
        <div>
          <Link to={"/"} className="text-2xl font-bold text-white mb-4">
            Parce<span className="text-[#4DD0E1]">LIX</span>
          </Link>
          <p className="text-sm leading-6">
            Fast, secure and reliable parcel delivery service across the country.
            We deliver happiness to your doorstep.
          </p>

          <div className="flex gap-4 mt-6">
            <Facebook className="hover:text-primary cursor-pointer" />
            <Instagram className="hover:text-primary cursor-pointer" />
            <Twitter className="hover:text-primary cursor-pointer" />
            <Linkedin className="hover:text-primary cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link  className="">Home</Link></li>
            <li><Link  className="">Services</Link></li>
            <li><Link  className="">Pricing</Link></li>
            <li><Link  className="">Track Parcel</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Our Services</h3>
          <ul className="space-y-3 text-sm">
            <li>Express Delivery</li>
            <li>Standard Delivery</li>
            <li>Cash on Delivery</li>
            <li>Corporate Shipping</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li>Cumilla, Bangladesh</li>
            <li>Email: shajebnw@gmail.com</li>
            <li>Phone: +880 16031 28668</li>
          </ul>
        </div>

      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-white/40 mt-12 pt-6 text-center text-sm text-white">
        © {new Date().getFullYear()} ParcelX. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
