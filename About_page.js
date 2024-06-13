import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-4">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to <span className="font-bold">Trade Vision</span>, your go-to platform for insightful stock suggestions and trading guidance. Whether you're new to trading or looking to sharpen your skills, we're here to help you navigate the stock market with confidence.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700 mb-4">
          Our mission is to empower individuals with the knowledge and tools needed to make informed trading decisions. We aim to demystify the complexities of the stock market, providing clear, actionable insights that you can trust.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">What We Offer</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
          <li><span className="font-semibold">Stock Suggestions:</span> Receive personalized buy and sell signals based on thorough analysis and market trends.</li>
          <li><span className="font-semibold">Indicators and Tools:</span> Gain access to a suite of indicators such as RSI, MACD, and more, to help you understand market conditions and make strategic decisions.</li>
          <li><span className="font-semibold">Educational Resources:</span> Learn about trading strategies, market analysis, and the essentials of buying and selling stocks through our comprehensive guides and tutorials.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Why Choose Trade Vision?</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
          <li><span className="font-semibold">User-Friendly Interface:</span> Our platform is designed to be intuitive and easy to navigate, making it suitable for traders of all experience levels.</li>
          <li><span className="font-semibold">Reliable Data:</span> We use advanced algorithms and real-time data to provide you with the most accurate and up-to-date information.</li>
          <li><span className="font-semibold">Community Support:</span> Join a community of like-minded traders, share insights, and learn from each other’s experiences.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Getting Started</h2>
        <ol className="list-decimal list-inside text-lg text-gray-700 mb-4">
          <li><span className="font-semibold">Create an Account:</span> Sign up for free and customize your profile to receive personalized stock suggestions.</li>
          <li><span className="font-semibold">Explore Our Tools:</span> Dive into our range of indicators and tools to start analyzing the market.</li>
          <li><span className="font-semibold">Follow Signals:</span> Act on our buy and sell signals to make informed trading decisions.</li>
          <li><span className="font-semibold">Learn and Grow:</span> Utilize our educational resources to deepen your understanding of trading and improve your strategies.</li>
        </ol>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Contact Us</h2>
        <p className="text-lg text-gray-700">
          Have questions or need support? Our dedicated team is here to assist you. Reach out to us at <a href="mailto:support@tradevision.com" className="text-blue-500 underline">support@tradevision.com</a>.
        </p>
        
        <p className="text-lg text-gray-700 mt-6">
          Thank you for choosing <span className="font-bold">Trade Vision</span>. Let's make smart trading decisions together!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;