const About = () => {
  const amenities = [
    "Caretaker",
    "Housekeeping",
    "Free Wi-Fi",
    "Spa",
    "Restaurant",
    "Bonfire",
    "Barbeque",
    "Butler Services",
    "Kitchenette",
    "Living Room"
  ];

  const mealInfo = {
    options: ["Breakfast", "Lunch", "Evening Snacks", "Dinner"],
    cuisines: ["South Indian", "North Indian", "Chinese", "Local"],
    facilities: [
      "Restaurant available",
      "Kitchen is available for reheating your meals (No cooking allowed)",
      "Cook will prepare customised meals for you"
    ]
  };

  return (
    <section id="about" className="py-20 bg-earth-light/10">
      <div className="container mx-auto px-4">
        <h2 className="font-['Playfair_Display'] text-4xl text-center mb-12">Our Story</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Nestled in the heart of Marayoor's untouched landscapes, The Soul Marayoor is more than just a stay—it's an experience, 
              a journey into the soul of nature. Rooted in the ethos of sustainability, this eco-living retreat is designed to blend 
              seamlessly with its surroundings, offering a sanctuary where luxury meets earth's raw beauty.
            </p>
            <p className="text-lg leading-relaxed">
              Here, the whispering winds weave through age-old trees, carrying the scent of rain-kissed soil, while the golden hues 
              of dawn bathe the land in warmth. Our premium mud houses, handcrafted with natural materials, stand as a testament to 
              the harmony between tradition and comfort. The safari cottages, cocooned in the wilderness, offer a unique blend of 
              adventure and tranquility.
            </p>
            <p className="text-lg leading-relaxed">
              Each corner of this sustainable haven is thoughtfully curated to provide a homely atmosphere, where modern amenities 
              coexist with nature's embrace. Whether it's the melody of chirping birds at sunrise or the soothing lullaby of the 
              night breeze, every moment at The Soul Marayoor is an invitation to slow down, breathe, and reconnect.
            </p>
          </div>
          <img 
            src="/public/pic1.jpg?auto=format&fit=crop&q=80"
            alt="Interior of mud house"
            className="rounded-lg shadow-xl h-full object-cover"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-['Playfair_Display'] text-2xl mb-6">Property Amenities</h3>
            <div className="grid grid-cols-2 gap-4">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-earth mr-2">✓</span>
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-['Playfair_Display'] text-2xl mb-6">Dining Experience</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Meal Options</h4>
                <div className="flex flex-wrap gap-2">
                  {mealInfo.options.map((meal, index) => (
                    <span key={index} className="bg-earth/10 px-3 py-1 rounded-full text-sm">
                      {meal}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Available Cuisines</h4>
                <div className="flex flex-wrap gap-2">
                  {mealInfo.cuisines.map((cuisine, index) => (
                    <span key={index} className="bg-earth/10 px-3 py-1 rounded-full text-sm">
                      {cuisine}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Dining Facilities</h4>
                <ul className="space-y-2">
                  {mealInfo.facilities.map((facility, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-earth mr-2">✓</span>
                      <span>{facility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;