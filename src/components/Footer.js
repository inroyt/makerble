import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo from '../logos/mFooter.png';
const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white py-12 px-16 min-w-full">
      <div className="max-w-full mx-auto">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 mb-8">
          {/* Company Info */}
          <div >
            <h3 className="text-xl font-semibold mb-4">
                <img className="h-8 w-auto rounded-md" src={logo} alt="logo" />
            </h3>
            <ul>
              <li className="mb-2">
                <a href="/about" className="text-gray-400 hover:text-white transition duration-300">About Us</a>
              </li>
              <li className="mb-2">
                <a href="/services" className="text-gray-400 hover:text-white transition duration-300">Terms of Conditions</a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="text-gray-400 hover:text-white transition duration-300">Privacy & Cookies</a>
              </li>
            </ul>
          </div>

          {/* Organizations */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Organizations</h3>
            <ul>
              <li className="mb-2">
                <a href="/about" className="text-gray-400 hover:text-white transition duration-300">Control Panel</a>
              </li>
              <li className="mb-2">
                <a href="/services" className="text-gray-400 hover:text-white transition duration-300">Discover the Marketplace</a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="text-gray-400 hover:text-white transition duration-300">Create Organization Account</a>
              </li>
              
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Your Account</h3>
            <ul>
            <li className="mb-2">
                <a href="/services" className="text-gray-400 hover:text-white transition duration-300">Library</a>
              </li>
              <li className="mb-2">
                <a href="/services" className="text-gray-400 hover:text-white transition duration-300">Profile</a>
              </li>
              <li className="mb-2">
                <a href="/services" className="text-gray-400 hover:text-white transition duration-300">Projects</a>
              </li>
              <li className="mb-2">
                <a href="/services" className="text-gray-400 hover:text-white transition duration-300">Help</a>
              </li>
            </ul>
          </div>
  
          <div>
            <h3 className="text-xl font-semibold mb-4">Explore</h3>
            <ul>
            <li className="mb-2">
                <a href="/services" className="text-gray-400 hover:text-white transition duration-300">Metrics</a>
              </li>
              <li className="mb-2">
                <a href="/services" className="text-gray-400 hover:text-white transition duration-300">Networks</a>
              </li>
              <li className="mb-2">
                <a href="/services" className="text-gray-400 hover:text-white transition duration-300">Stratagies</a>
              </li>
              <li className="mb-2">
                <a href="/services" className="text-gray-400 hover:text-white transition duration-300">Projects</a>
              </li>
              <li className="mb-2">
                <a href="/services" className="text-gray-400 hover:text-white transition duration-300">Studies</a>
              </li>
              <li className="mb-2">
                <a href="/services" className="text-gray-400 hover:text-white transition duration-300">Surveys</a>
              </li>
              <li className="mb-2">
                <a href="/services" className="text-gray-400 hover:text-white transition duration-300">Tips</a>
              </li>
              <li className="mb-2">
                <a href="/services" className="text-gray-400 hover:text-white transition duration-300">Vouchers</a>
              </li>
            </ul>
          </div>
          
        </div>
 
       

        {/* Social Media Section */}
        <div className="flex justify-center md:justify-between items-center border-t border-gray-700 pt-8">
          <div className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Makerble. All Rights Reserved.
          </div>
          <div className="flex space-x-6">
            <a href="https://facebook.com/makerble" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition duration-300">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com/makerble" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition duration-300">
              <FaTwitter size={24} />
            </a>
            <a href="https://linkedin.com/company/makerble" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition duration-300">
              <FaLinkedin size={24} />
            </a>
            <a href="https://instagram.com/makerble" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition duration-300">
              <FaInstagram size={24} />
            </a>
            <a href="https://youtube.com/makerble" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition duration-300">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
