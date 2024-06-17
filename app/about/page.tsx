import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="bg-white text-gray-800">

      {/* Company Overview */}
      <section className="py-16 px-8 md:px-16 lg:px-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Welcome to Ocean Cycles</h2>
          <p className="text-lg md:text-xl leading-relaxed">
            At Ocean Cycles, we believe in the freedom and joy that comes with riding an electric bike. Founded in 2022, our mission is to provide eco-friendly, fun, and accessible transportation options for everyone. Located in the heart of Beach City, our shop offers a variety of e-bikes perfect for exploring the coast, city streets, and everything in between.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-100 py-16 px-8 md:px-16 lg:px-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <Card className="bg-white shadow-lg rounded-lg transform transition-transform duration-200 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">E-Bike Rentals</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore Beach City on our top-of-the-line e-bikes. We offer flexible rental options to suit your needs, from hourly to daily rates.</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg rounded-lg transform transition-transform duration-200 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Guided Tours</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Join one of our guided tours to experience the best routes and hidden gems of the coastline, led by our expert guides.</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg rounded-lg transform transition-transform duration-200 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Maintenance & Repairs</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Our skilled technicians provide maintenance and repair services to keep your e-bike in top condition, whether you own it or just renting.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Team */}
      <section className="py-16 px-8 md:px-16 lg:px-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <Card className="bg-white shadow-lg rounded-lg transform transition-transform duration-200 hover:scale-105">
              <CardHeader>
                <Image src="/person1.png" alt="John Doe" width={500} height={500} className="w-full h-48 object-cover rounded-md mb-4" />
                <CardTitle className="text-2xl font-bold">John Doe</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium text-gray-600">Founder & CEO</p>
                <p>With a passion for sustainable transport, John started Ocean Cycles to bring the joy of e-biking to the community.</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg rounded-lg transform transition-transform duration-200 hover:scale-105">
              <CardHeader>
                <Image src="/person2.png" alt="Jane Smith" width={500} height={500} className="w-full h-48 object-cover rounded-md mb-4" />
                <CardTitle className="text-2xl font-bold">Jane Smith</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium text-gray-600">Lead Mechanic</p>
                <p>Jane is our go-to expert for all things mechanical, ensuring every bike is in perfect condition for your ride.</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg rounded-lg transform transition-transform duration-200 hover:scale-105">
              <CardHeader>
                <Image src="/person3.png" alt="Carlos Hernandez" width={500} height={500} className="w-full h-48 object-cover rounded-md mb-4" />
                <CardTitle className="text-2xl font-bold">Carlita Hernandez</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium text-gray-600">Tour Guide</p>
                <p>Carlos brings the coastline to life with his local knowledge and enthusiasm for sharing the best biking routes.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
 
export default AboutPage;