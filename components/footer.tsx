export const Footer = () => {
  return (
    <div>
      <div className="w-full h-[100px] bg-gray-300 flex items-center justify-center text-md md:text-xl">
        &copy; {new Date().getFullYear()} Ocean Cycles. All rights reserved.
      </div>
    </div>
  )
}