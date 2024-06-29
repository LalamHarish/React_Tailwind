import React, { useState } from 'react';

const PricingSection = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [popupMessage, setPopupMessage] = useState('');

  const handlePeriodChange = (period) => {
    setBillingPeriod(period);
  };

  const handleButtonClick = (planName) => {
    setSelectedPlan(planName);
    setPopupMessage(`You have selected ${planName} plan ${billingPeriod === 'monthly' ? 'Monthly' : 'Annually'}.`);
    // You can perform additional actions here based on the selected plan
  };

  return (
    <section>
      <section id="pricing" className="text-gray-600 body-font overflow-hidden bg-BgColor text-TextColor">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-TextColor">Pricing</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p>
            <div className="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
              <button
                onClick={() => handlePeriodChange('monthly')}
                className={`py-1 px-4 focus:outline-none ${billingPeriod === 'monthly' ? 'bg-indigo-500 text-white' : ''}`}
              >
                Monthly
              </button>
              <button
                onClick={() => handlePeriodChange('annually')}
                className={`py-1 px-4 focus:outline-none ${billingPeriod === 'annually' ? 'bg-indigo-500 text-white' : ''}`}
              >
                Annually
              </button>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* Pricing cards */}
            <PricingCard
              planName="START"
              price="Free"
              features={[
                'Vexillologist pitchfork',
                'Tumeric plaid portland',
                'Mixtape chillwave tumeric'
              ]}
              buttonText="Submit"
              onClick={() => handleButtonClick('START')}
              isSelected={selectedPlan === 'START'}
              borderColor={billingPeriod === 'monthly' ? 'gray-300' : 'indigo-500'}
            />
            <PricingCard
              planName="PRO"
              price="$38"
              period="/mo"
              features={[
                'Vexillologist pitchfork',
                'Tumeric plaid portland',
                'Hexagon neutra unicorn',
                'Mixtape chillwave tumeric'
              ]}
              buttonText="Submit"
              onClick={() => handleButtonClick('PRO')}
              isSelected={selectedPlan === 'PRO'}
              borderColor={billingPeriod === 'monthly' ? 'gray-300' : 'indigo-500'}
            />
            <PricingCard
              planName="BUSINESS"
              price="$56"
              period="/mo"
              features={[
                'Vexillologist pitchfork',
                'Tumeric plaid portland',
                'Hexagon neutra unicorn',
                'Vexillologist pitchfork',
                'Mixtape chillwave tumeric'
              ]}
              buttonText="Submit"
              onClick={() => handleButtonClick('BUSINESS')}
              isSelected={selectedPlan === 'BUSINESS'}
              borderColor={billingPeriod === 'monthly' ? 'gray-300' : 'indigo-500'}
            />
            <PricingCard
              planName="SPECIAL"
              price="$72"
              period="/mo"
              features={[
                'Vexillologist pitchfork',
                'Tumeric plaid portland',
                'Hexagon neutra unicorn',
                'Vexillologist pitchfork',
                'Mixtape chillwave tumeric'
              ]}
              buttonText="Submit"
              onClick={() => handleButtonClick('SPECIAL')}
              isSelected={selectedPlan === 'SPECIAL'}
              borderColor={billingPeriod === 'monthly' ? 'gray-300' : 'indigo-500'}
            />
          </div>
        </div>
      </section>

      {/* Popup Message */}
      {popupMessage && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg border border-gray-300 shadow-lg">
            <p className="text-lg text-gray-800">{popupMessage}</p>
            <button
              onClick={() => setPopupMessage('')}
              className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-lg focus:outline-none hover:bg-indigo-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

// Pricing card component
const PricingCard = ({ planName, price, period, features, buttonText, onClick, isSelected, borderColor }) => {
  return (
    <div className={`p-4 xl:w-1/4 md:w-1/2 w-full ${isSelected ? 'border-indigo-500' : ''}`}>
      <div className={`h-full p-6 rounded-lg border-2 ${borderColor} flex flex-col relative overflow-hidden ${isSelected ? 'shadow-md' : ''}`}>
        <h2 className="text-sm tracking-widest title-font mb-1 font-medium">{planName}</h2>
        <h1 className="text-5xl text-TextColor leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
          <span>{price}</span>
          <span className="text-lg ml-1 font-normal text-gray-500">{period}</span>
        </h1>
        {/* Features */}
        {features.map((feature, index) => (
          <p key={index} className="flex items-center text-gray-600 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>
            {feature}
          </p>
        ))}
        {/* Button */}
        <button onClick={onClick} className="flex items-center mt-auto text-white bg-green-600 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
          {buttonText}
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
        <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
      </div>
    </div>
  );
};

export default PricingSection;
