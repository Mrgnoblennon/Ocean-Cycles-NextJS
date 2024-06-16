import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import { eBikes } from '@/data';

const EbikesPage = () => {
  return (
    <div className="bg-white text-gray-800 py-16 px-8 md:px-16 lg:px-32">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-semibold mb-12">Our E-Bikes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eBikes.map((bike) => (
            <Card key={bike.id} className="bg-white shadow-lg rounded-lg">
              <CardHeader>
                {/*<Image
                  src={bike.imageUrl}
                  alt={bike.name}
                  width={500}
                  height={500}
                  className="w-full h-48 object-cover rounded-t-md"
                />*/}
                <CardTitle className="text-2xl font-bold mt-4">{bike.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{bike.description}</p>
                <ul className="mt-4 text-left text-sm font-medium text-gray-700">
                  <li><strong>Range:</strong> {bike.specs.range}</li>
                  <li><strong>Battery:</strong> {bike.specs.battery}</li>
                  <li><strong>Motor:</strong> {bike.specs.motor}</li>
                </ul>
              </CardContent>
              <CardFooter>
                <a href={`/ebikes/${bike.id}`} className="text-blue-600 hover:text-blue-800 font-medium">
                  Learn More
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EbikesPage;
