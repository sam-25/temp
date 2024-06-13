import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">About Trade Vision</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Welcome to Trade Vision, your trusted platform for making informed trading decisions.
          Whether you are a beginner or an experienced trader, our goal is to provide you with
          the tools and insights you need to succeed in the stock market.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          At Trade Vision, we believe in empowering our users with knowledge and data. Our platform
          offers real-time buy and sell signals based on comprehensive technical analysis and
          various indicators. Understanding these signals can help you make better trading decisions
          and maximize your returns.
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
          By using these indicators, you can gain insights into market trends and make more
          informed trading decisions. We provide a user-friendly interface that displays
          these indicators clearly, helping you to interpret the data easily.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Join us at Trade Vision and start your journey towards successful trading today!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;