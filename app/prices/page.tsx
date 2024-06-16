import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const rentalOptions = [
  {
    name: "Hourly Rental",
    price: "$20/hour",
    description: "Perfect for quick trips around the city.",
  },
  {
    name: "Half-Day Rental",
    price: "$70/4 hours",
    description: "Great for exploring the coastline at a leisurely pace.",
  },
  {
    name: "Full-Day Rental",
    price: "$120/day",
    description: "Ideal for a full day of adventure.",
  },
  {
    name: "Weekly Rental",
    price: "$600/week",
    description: "Best value for extended stays and frequent use.",
  },
];

const additionalServices = [
  {
    name: "Helmet Rental",
    price: "$5",
    description: "Stay safe with our comfortable and secure helmets.",
  },
  {
    name: "Bike Lock",
    price: "$3",
    description: "Secure your bike with a reliable lock.",
  },
  {
    name: "Guided Tour",
    price: "$50/person",
    description: "Explore the best routes with our expert guides.",
  },
];

const PricesPage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Pricing Section */}
      <section className="py-16 px-8 md:px-16 lg:px-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-12">Our Pricing</h2>
          <p className="text-lg md:text-xl leading-relaxed mb-8">
            Choose the rental option that best suits your needs. We offer flexible rates for various durations and additional services to enhance your ride.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {rentalOptions.map((option) => (
              <Card key={option.name} className="bg-white shadow-lg rounded-lg transform transition-transform duration-200 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">{option.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold mb-2">{option.price}</p>
                  <p>{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-gray-100 py-16 px-8 md:px-16 lg:px-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {additionalServices.map((service) => (
              <Card key={service.name} className="bg-white shadow-lg rounded-lg transform transition-transform duration-200 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold mb-2">{service.price}</p>
                  <p>{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricesPage;
