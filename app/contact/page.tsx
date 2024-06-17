import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 py-8 px-4 sm:py-16 sm:px-8 md:px-12 lg:px-16 xl:px-24">
      <div className="max-w-4xl mx-auto text-center space-y-16">

        {/* Address Section */}
        <section>
          <Card className="bg-gray-100 p-6 sm:p-8 rounded-lg shadow-lg text-left space-y-4">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl font-bold flex items-center justify-center space-x-2">
                <MapPinIcon className="h-6 w-6 text-blue-600" />
                <span>Our Address</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>2 Phillimore St, Fremantle WA 6160.</p>
              <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3407.560273417237!2d115.74201196943326!3d-32.0547766771309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a327ec7613e7717%3A0x2b3f9b1d0eb46982!2sCoordinates%3A%20-32.0547767%2C%20115.7420119!5e0!3m2!1sen!2sin!4v1686314243423!5m2!1sen!2sin"
                width="100%"
                height="500"
                frameBorder="0"
                allowFullScreen={false}
                aria-hidden="false"
                tabIndex={0}
                className="rounded-lg"
                title="Our Location"
              ></iframe>

              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Information Section */}
        <section>
          <Card className="bg-gray-100 p-6 sm:p-8 rounded-lg shadow-lg text-left space-y-4">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl font-bold flex items-center justify-center space-x-2">
                <PhoneIcon className="h-6 w-6 text-blue-600" />
                <span>Contact Us</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                <strong>Phone:</strong> <a href="tel:+61492911242" className="text-blue-600 hover:text-blue-800">0492 911 242</a>
              </p>
              <a href="mailto:contact@oceancycles.com">
                <Button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
                  Send Us an Email
                </Button>
              </a>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
