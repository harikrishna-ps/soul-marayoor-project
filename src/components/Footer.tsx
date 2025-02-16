const Footer = () => {
  return (
    <footer className="bg-earth-dark text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-['Playfair_Display'] text-xl mb-4">The Soul Marayoor</h3>
            <p className="text-earth-light">Channel medu, Building number 383<br />
            Anakkalpetty, Marayoor<br />
            Munnar, Kerala 685620</p>
          </div>
          <div>
            <h3 className="font-['Playfair_Display'] text-xl mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p><a href="tel:+919497778081" className="text-earth-light hover:text-white transition-colors">+91 9497778081</a></p>
              <p><a href="mailto:thesoulmarayoormudhouse@gmail.com" className="text-earth-light hover:text-white transition-colors">thesoulmarayoormudhouse@gmail.com</a></p>
              <p><a href="https://www.instagram.com/thesoul_marayoor?igsh=cmhyZzdza3BybzM4" target="_blank" rel="noopener noreferrer" className="text-earth-light hover:text-white transition-colors">Instagram: @thesoul_marayoor</a></p>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-earth-light/20">
          <p>&copy; {new Date().getFullYear()} The Soul Marayoor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;