import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

 function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and About */}
        <div>
        <img
                  className="h-15 w-auto"
                  src="./src/uploads/logo.png"
                  alt="Your Company"
                />
          <h2 className="text-2xl font-bold mb-4">RAJESH NAVANEETHAM'S<br/>
          TRANSPERSONAL WORKOUT'S</h2>
          <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/blog" className="hover:text-white">Blog</a></li>
            <li><a href="/workouts" className="hover:text-white">Workouts</a></li>
            <li><a href="/events" className="hover:text-white">Events</a></li>
            <li><a href="/testimonial" className="hover:text-white">Testimonial</a></li>
            <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <p className="text-gray-400 mb-2">Get the latest updates right in your inbox.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 rounded-l-md text-black w-full"
            />
            <button className="bg-red-600 hover:bg-red-700 px-4 rounded-md">
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-700"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Dhanwis. All rights reserved.
      </div>
    </footer>
  );
}
export default Footer