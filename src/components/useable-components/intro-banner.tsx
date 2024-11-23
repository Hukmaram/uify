const IntroBanner = () => {
  return (
    <div className="p-4 w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="min-h-96 w-full relative rounded-md bg-gradient-to-r from-purple-800 to-blue-500">
        <div className="text-center p-8 rounded-lg bg-white bg-opacity-10 backdrop-blur-md">
          <div className="text-pink-300 text-2xl font-bold mb-4">New</div>
          <div className="text-white text-4xl font-extrabold mb-6">
            Source and <br /> tag pages
          </div>
          <div className="flex justify-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="p-4 bg-gray-700 rounded-full">
                <div className="text-white text-3xl">@</div>
              </div>
              <div className="text-white text-xl">Sources</div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="p-4 bg-gray-700 rounded-full">
                <div className="text-white text-3xl">#</div>
              </div>
              <div className="text-white text-xl">Tags</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroBanner;
