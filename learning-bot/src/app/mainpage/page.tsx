import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center">
      {/* Navigation Bar */}
      <nav className="w-full flex justify-between items-center py-4 px-8 bg-black bg-opacity-50 fixed top-0">
        <div className="text-2xl font-bold">JAMS</div>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col justify-center items-center text-center h-screen px-4">
        <h1 className="text-6xl font-extrabold mb-6 animate-fadeIn">
          Revolutionize Your Experience with AI-Powered Speech
        </h1>
        <p className="text-lg mb-8 max-w-2xl mx-auto animate-fadeIn delay-2s">
          Convert your text into lifelike speech in multiple languages with VoiceMate. Experience the power of advanced AI today.
        </p>
        <button className="bg-purple-600 hover:bg-purple-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 animate-fadeIn delay-3s">
          Get Started
        </button>
      </header>

      {/* Features Section */}
      <section className="mt-20 px-4 lg:px-0 max-w-5xl text-center">
        <h2 className="text-4xl font-semibold mb-12 animate-fadeIn">Why Choose VoiceMate?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 animate-fadeIn delay-4s">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
            <h3 className="text-2xl font-bold mb-4">Natural Voice</h3>
            <p>
              Experience realistic, human-like voice output powered by cutting-edge AI.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
            <h3 className="text-2xl font-bold mb-4">Multi-Language Support</h3>
            <p>
              Convert text to speech in multiple languages with ease.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
            <h3 className="text-2xl font-bold mb-4">Easy Integration</h3>
            <p>
              Seamlessly integrate our API into your own applications.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="mt-32 px-4 lg:px-0 max-w-5xl text-center">
        <h2 className="text-4xl font-semibold mb-12 animate-fadeIn delay-6s">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 animate-fadeIn delay-7s text-left">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
            <h3 className="text-2xl font-bold mb-4">1. Input Text</h3>
            <p>Simply enter your text into the app, and our AI will process it instantly.</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
            <h3 className="text-2xl font-bold mb-4">2. Choose Language</h3>
            <p>Select your desired language and voice tone from our extensive options.</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
            <h3 className="text-2xl font-bold mb-4">3. Generate Speech</h3>
            <p>Click generate, and your text is instantly transformed into natural, lifelike speech.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mt-32 px-4 lg:px-0 max-w-5xl text-center">
        <h2 className="text-4xl font-semibold mb-12 animate-fadeIn delay-8s">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 animate-fadeIn delay-9s">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
            <p className="text-lg mb-4">"VoiceMate has completely changed the way I create content. The voices are so realistic!"</p>
            <p className="font-semibold">- Alex Johnson</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
            <p className="text-lg mb-4">"The multi-language support is fantastic. I can easily switch between languages for my international clients."</p>
            <p className="font-semibold">- Maria Gonzalez</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="mt-32 mb-32 px-4 lg:px-0 max-w-5xl text-center">
        <h2 className="text-4xl font-semibold mb-12 animate-fadeIn delay-10s">Ready to Get Started?</h2>
        <p className="text-lg mb-8 animate-fadeIn delay-11s">
          Experience the power of AI-driven speech synthesis with VoiceMate today.
        </p>
        <button className="bg-purple-600 hover:bg-purple-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 animate-fadeIn delay-12s">
          Sign Up Now
        </button>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 bg-gray-900 text-center text-white animate-fadeIn delay-13s">
        <p className="text-sm">
          © 2024 Jams. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
