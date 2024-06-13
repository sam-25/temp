import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-blue-600 text-white flex flex-col items-center justify-center p-8">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to Trade Vision</h1>
        <p className="text-2xl font-light mb-6">
          Your trusted platform for making informed trading decisions.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-around w-full max-w-6xl">
        <div className="mb-6 md:mb-0 md:w-1/2 px-4">
          <img
            src="https://source.unsplash.com/featured/?stock,market"
            alt="Stock Market"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 px-4">
          <p className="text-lg mb-6 leading-relaxed">
            Whether you are a beginner or an experienced trader, our goal is to provide you with the tools and insights you need to succeed in the stock market. At Trade Vision, we believe in empowering our users with knowledge and data. Our platform offers real-time buy and sell signals based on comprehensive technical analysis and various indicators.
          </p>
          <p className="text-lg mb-4 leading-relaxed">
            Our indicators include:
          </p>
          <ul className="list-disc list-inside text-lg mb-4 leading-relaxed">
            <li>Relative Strength Index (RSI): Measures the speed and change of price movements.</li>
            <li>Moving Average Convergence Divergence (MACD): A trend-following momentum indicator.</li>
            <li>Exponential Moving Average (EMA): Gives more weight to recent prices.</li>
          </ul>
          <p className="text-lg mb-4 leading-relaxed">
            By using these indicators, you can gain insights into market trends and make more informed trading decisions. We provide a user-friendly interface that displays these indicators clearly, helping you to interpret the data easily.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            Join us at Trade Vision and start your journey towards successful trading today!
          </p>
          <div className="text-center">
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md transition duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;