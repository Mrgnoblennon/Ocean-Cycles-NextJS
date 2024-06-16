import Script from "next/script";

const BookingsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="container py-16 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        <h1 className="text-4xl md:text-5xl font-semibold text-center mb-12">Book Now</h1>
        
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-lg">Date/Time</h2>
          <div className="w-full sm:w-[300px]">
            <div className="booqable-datepicker"></div>
          </div>
        </div>

        <div className="booqable-product-list p-4 sm:p-6 bg-white rounded-lg shadow-md w-full max-w-4xl mx-auto">
          {/* Product list content */}
        </div>
      </div>
    </div>
  );
};

export default BookingsPage;
