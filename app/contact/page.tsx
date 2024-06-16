import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 py-16 px-8 md:px-16 lg:px-32">
      <div className="max-w-4xl mx-auto text-center">

        {/* Address Section */}
        <section className="mb-16">
          <Card className="bg-gray-100 p-8 rounded-lg shadow-lg text-left">
            <CardHeader className="mb-4">
              <CardTitle className="text-2xl font-bold flex items-center justify-center space-x-2">
                <MapPinIcon className="h-6 w-6 text-blue-600" />
                <span>Our Address</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>123 Coastal Road, Beach City</p>
              <div className="mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.023096256036!2d-122.40759448467365!3d37.7795744797571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c3dd0e839%3A0x7bb8b841d1f7d5d1!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1594243423000!5m2!1sen!2sin"
                  width="100%"
                  height="300"
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
          <Card className="bg-gray-100 p-8 rounded-lg shadow-lg text-left">
            <CardHeader className="mb-4">
              <CardTitle className="text-2xl font-bold flex items-center justify-center space-x-2">
                <PhoneIcon className="h-6 w-6 text-blue-600" />
                <span>Contact Us</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                <strong>Phone:</strong> <a href="tel:+1234567890" className="text-blue-600 hover:text-blue-800">+1 (234) 567-890</a>
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
