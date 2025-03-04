import React from 'react';
import { Menu, Search, Home, Clock, User, Bell, ShieldPlus, Camera, MapPinned, Route } from 'lucide-react';

const ElePath = () => {
  return (
    <div className="flex justify-center min-h-screen bg-gray-50">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="sticky top-0 z-50 bg-gray-50 py-4">
          <div className="flex items-center justify-between">
            <Menu className="w-6 h-6 text-gray-700" />
            <img
                className="mx-auto h-10 sm:h-80 md:h-20 w-auto mt-8"
                src="app/assests/images/elepath-logo-hr.png"
            />
            <Search className="w-6 h-6 text-gray-700" />
          </div>
        </div>

        {/* Main Content */}
        <div className="pb-24">
          {/* Report Card Slider */}
          <div className="relative mb-8">
            <div className="bg-blue-100 rounded-xl p-4 sm:p-6 mb-2">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-gray-800 text-base sm:text-lg">Report</p>
                  <p className="text-gray-600 text-sm sm:text-base">Tuskers & Elephants</p>
                </div>
                <img 
                  src="app/assests/images/elepath-vector-image.png" 
                  alt="Elephant Icon" 
                  className="w-35 h-20 sm:w-35 sm:h-15 object-contain"
                />
              </div>
            </div>
            
            {/* Slider Indicators
            <div className="flex justify-center gap-1">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div> */}
          </div>

          {/* Quick Access Section */}
          <div className="mb-6 md:mb-8">
            <h2 className="text-gray-800 font-medium mb-4 text-base sm:text-lg">Quick Access</h2>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              <button className="aspect-square bg-blue-100 p-4 sm:p-6 rounded-xl flex flex-col items-center justify-center hover:bg-blue-200 transition-colors">
                <Camera className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 mb-2" />
                <span className="text-sm sm:text-base text-gray-700 font-bold">Report Sighting</span>
              </button>
              
              <button className="aspect-square bg-red-100 p-4 sm:p-6 rounded-xl flex flex-col items-center justify-center hover:bg-red-200 transition-colors">
                <MapPinned className="w-8 h-8 sm:w-10 sm:h-10 text-red-500 mb-2" />
                <span className="text-sm sm:text-base text-gray-700 font-bold">Live Map</span>
              </button>
              
              <button className="aspect-square bg-purple-100 p-4 sm:p-6 rounded-xl flex flex-col items-center justify-center hover:bg-purple-200 transition-colors">
                <Route className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600 mb-2" />
                <span className="text-sm sm:text-base text-gray-700 font-bold">Movement Tracking</span>
              </button>
              
              <button className="aspect-square bg-green-100 p-4 sm:p-6 rounded-xl flex flex-col items-center justify-center hover:bg-green-200 transition-colors">
                <ShieldPlus className="w-8 h-8 sm:w-10 sm:h-10 text-green-600 mb-2" />
                <span className="text-sm sm:text-base text-gray-700 font-bold">Survival Tips</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="bottom-0 left-0 right-0 bg-white border-t">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between p-4 bg-blue-50">
              <button className="flex flex-col items-center text-blue-500">
                <Home className="w-6 h-6 sm:w-7 sm:h-7" />
                <span className="text-xs sm:text-sm mt-1">Home</span>
              </button>
              <button className="flex flex-col items-center text-gray-400">
                <Bell className="w-6 h-6 sm:w-7 sm:h-7" />
                <span className="text-xs sm:text-sm mt-1">Report</span>
              </button>
              <button className="flex flex-col items-center text-gray-400">
                <Clock className="w-6 h-6 sm:w-7 sm:h-7" />
                <span className="text-xs sm:text-sm mt-1">Updates</span>
              </button>
              <button className="flex flex-col items-center text-gray-400">
                <User className="w-6 h-6 sm:w-7 sm:h-7" />
                <span className="text-xs sm:text-sm mt-1">Profile</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElePath;