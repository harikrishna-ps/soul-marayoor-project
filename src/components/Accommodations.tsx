interface AccommodationCard {
  title: string;
  description: string;
  image: string;
  features: string[];
  price: number;
  originalPrice: number;
  size?: string;
  view?: string;
  bedType: string;
  maxGuests: number;
  amenities: string[];
  cancellationPolicy: string;
  mealPlan: string;
}

const accommodations: AccommodationCard[] = [
  {
    title: "Small Ethnic Mud House",
    description: "Perfect for couples seeking a romantic getaway in nature.",
    image: "/public/small.jpeg?auto=format&fit=crop&q=80",
    features: ["Daily Housekeeping", "Free Wi-Fi", "Bathroom", "Room Service", "Seating Area", "Charging Points"],
    price: 2232,
    originalPrice: 8500,
    view: "Garden View",
    bedType: "Queen Bed",
    maxGuests: 2,
    amenities: ["Free Wi-Fi", "Room Service", "Daily Housekeeping"],
    mealPlan: "Breakfast included"
  },
  {
    title: "Large Ethnic Mud House",
    description: "Spacious accommodation with modern amenities and natural surroundings.",
    image: "/public/large-mud.jpeg?auto=format&fit=crop&q=80",
    features: ["Housekeeping", "Free Wi-Fi", "Air Purifier", "Bathroom", "In-room Dining", "Mineral Water"],
    price: 2626,
    originalPrice: 10000,
    view: "Garden View",
    bedType: "King Bed",
    maxGuests: 2,
    amenities: ["Air Purifier", "In-room Dining", "Free Wi-Fi"],
    mealPlan: "Breakfast included"
  },
  {
    title: "Premium Safari Cottage with Bathtub",
    description: "Our most luxurious accommodation with premium amenities and stunning views.",
    image: "premium.jpeg?auto=format&fit=crop&q=80",
    features: ["Balcony", "Bathtub", "Premium Amenities", "Garden View", "King Bed", "Spacious Living Area"],
    price: 4280,
    originalPrice: 16300,
    view: "Garden View",
    bedType: "King Bed",
    maxGuests: 2,
    amenities: ["Bathtub", "Balcony", "Premium Toiletries"],
    mealPlan: "Breakfast included"
  }
];

const Accommodations = () => {
  return (
    <section id="accommodations" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-['Playfair_Display'] text-4xl text-center mb-12">Our Accommodations</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {accommodations.map((accommodation, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={accommodation.image}
                alt={accommodation.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-['Playfair_Display'] text-2xl mb-4">{accommodation.title}</h3>
                {accommodation.size && (
                  <p className="text-sm text-gray-600 mb-2">{accommodation.size}</p>
                )}
                <p className="text-sm text-gray-600 mb-2">{accommodation.view} | {accommodation.bedType}</p>
                <p className="text-gray-600 mb-4">{accommodation.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Amenities</h4>
                  <ul className="text-gray-600 grid grid-cols-2 gap-2">
                    {accommodation.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="text-earth mr-2">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-500 mb-2">{accommodation.mealPlan}</p>
                  <p className="text-sm text-gray-500 mb-4">{accommodation.cancellationPolicy}</p>
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="line-through text-gray-400">₹{accommodation.originalPrice}</span>
                      <span className="text-2xl font-bold text-earth ml-2">₹{accommodation.price}</span>
                    </div>
                    <button className="bg-earth hover:bg-earth-dark text-white px-4 py-2 rounded-lg transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accommodations;