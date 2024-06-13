import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-5xl font-bold text-center mb-6 text-indigo-800">Welcome to Trade Vision</h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-6 text-center">
          Your trusted platform for making informed trading decisions.
        </p>
        <div className="mb-6">
          <img
            src="https://source.unsplash.com/featured/?trading"
            alt="Trading"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        </div>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Whether you are a beginner or an experienced trader, our goal is to provide you with the tools and insights you need to succeed in the stock market. At Trade Vision, we believe in empowering our users with knowledge and data. Our platform offers real-time buy and sell signals based on comprehensive technical analysis and various indicators.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Our indicators include:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed mb-4">
          <li>Relative Strength Index (RSI): Measures the speed and change of price movements.</li>
          <li>Moving Average Convergence Divergence (MACD): A trend-following momentum indicator.</li>
          <li>Exponential Moving Average (EMA): Gives more weight to recent prices.</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          By using these indicators, you can gain insights into market trends and make more informed trading decisions. We provide a user-friendly interface that displays these indicators clearly, helping you to interpret the data easily.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Join us at Trade Vision and start your journey towards successful trading today!
        </p>
        <div className="text-center mt-8">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-indigo-700 transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;