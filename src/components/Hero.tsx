import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen">
      <div className="absolute inset-0">
        <img 
          src="public/pic1.jpg?auto=format&fit=crop&q=80"
          alt="Mud house exterior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      <div className="relative h-full flex items-center justify-center text-center text-white px-4">
        <div>
          <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl mb-6">Welcome to The Soul Marayoor</h1>
          <p className="text-xl md:text-2xl mb-8">Experience sustainable luxury in our eco-friendly mud houses</p>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="bg-earth hover:bg-earth-dark text-white px-8 py-3 rounded-full text-lg transition-colors inline-block cursor-pointer"
          >
            Book Your Stay
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;