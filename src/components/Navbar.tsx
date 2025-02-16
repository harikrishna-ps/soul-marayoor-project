import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="bg-earth-dark text-white py-4 fixed w-full z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="font-['Playfair_Display'] text-2xl cursor-pointer"
        >
          The Soul Marayoor
        </Link>
        <div className="space-x-6">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-earth-light transition-colors cursor-pointer"
          >
            About
          </Link>
          <Link
            to="accommodations"
            smooth={true}
            duration={500}
            className="hover:text-earth-light transition-colors cursor-pointer"
          >
            Accommodations
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:text-earth-light transition-colors cursor-pointer"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;