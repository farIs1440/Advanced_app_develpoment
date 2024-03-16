import React from 'react';

function HomePage() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Navigation */}
      

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-purple-600 to-indigo-600 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Plan Memorable Birthday Events</h1>
          <p className="text-lg md:text-xl">Let's make your special day unforgettable!</p>
        </div>
      </header>

      {/* Key Features */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Easy Planning</h3>
              <p>Effortlessly plan and organize your birthday events with our intuitive interface.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Customization Options</h3>
              <p>Customize every aspect of your event to perfectly match your preferences and theme.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Guest Management</h3>
              <p>Keep track of your guest list and send out invitations effortlessly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
     
    </div>
  );
}

export default HomePage;
