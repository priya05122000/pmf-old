import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ratesHead = [
  { label: 'All Rates', desktop: true },
  { label: 'Rates2', desktop: true },
  { label: 'Rates3', desktop: true },
  { label: 'Rates4', desktop: true },
  { label: 'RatesVIP', desktop: true },
  { label: 'Rates2/Rates3', mobile: true },
  { label: 'Rates1/RatesVIP', mobile: true },
];

const ratesData = [
  {
    title: 'Option 1',
    items: [
      {
        label: 'Option item 1',
        choices: ['choice1', 'tick', 'tick', 'choice1', 'tick', 'choice1'],
      },
      {
        label: 'Option item 2',
        choices: ['choice1', 'tick', 'tick', 'choice1', 'tick', 'choice1'],
      },
    ],
  },
  // Repeat for more options as needed
  {
    title: 'Option 2',
    items: [
      {
        label: 'Option item 1',
        choices: ['choice1', 'tick', 'tick', 'choice1', 'tick', 'choice1'],
      },
      {
        label: 'Option item 2',
        choices: ['choice1', 'tick', 'tick', 'choice1', 'tick', 'choice1'],
      },
    ],
  },
  {
    title: 'Option 3',
    items: [
      {
        label: 'Option item 1',
        choices: ['choice1', 'tick', 'tick', 'choice1', 'tick', 'choice1'],
      },
      {
        label: 'Option item 2',
        choices: ['choice1', 'tick', 'tick', 'choice1', 'tick', 'choice1'],
      },
    ],
  },
  {
    title: 'Option 4',
    items: [
      {
        label: 'Option item 1',
        choices: ['choice1', 'tick', 'tick', 'choice1', 'tick', 'choice1'],
      },
      {
        label: 'Option item 2',
        choices: ['choice1', 'tick', 'tick', 'choice1', 'tick', 'choice1'],
      },
    ],
  },
];

const tickIcon = (
  <span className="inline-block w-5 h-5 bg-center bg-no-repeat" style={{backgroundImage: "url('https://cdn.icon-icons.com/icons2/2584/PNG/128/trick_treat_halloween_candy_icon_154080.png')"}}></span>
);

const PinnedSection = () => {
  const [activeCount, setActiveCount] = useState(1);
  const [activeIdx, setActiveIdx] = useState(0); // For mobile accordion
  const headRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (headRef.current && containerRef.current) {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        markers: false, // set to true for debugging
        pin: headRef.current,
        onToggle: () => {
          ScrollTrigger.refresh();
        },
      });
    }
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  // Desktop: show first N items, Mobile: accordion
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  const handleShowMore = () => {
    if (activeCount < ratesData.length) {
      setActiveCount(activeCount + 1);
    }
  };

  const handleHideAll = () => {
    setActiveCount(1);
  };

  const handleAccordion = (idx: number) => {
    setActiveIdx(activeIdx === idx ? -1 : idx);
  };

  return (
    <div className="w-full flex flex-col" ref={containerRef}>
      <div className="flex bg-[#F9F9F9]" ref={headRef}>
        {ratesHead.map((h, i) => (
          <div
            key={i}
            className={`h-20 p-2 flex justify-center items-center text-center text-lg font-semibold border border-[#CFCFCF] border-b-0 border-l-0 ${i === 0 ? 'w-[29%] border-l' : 'w-[18%]'} ${h.desktop ? 'block md:block hidden' : ''} ${h.mobile ? 'md:hidden block w-1/2' : ''}`}
          >
            {h.label}
          </div>
        ))}
      </div>
      <div className="border-t border-[#CFCFCF] flex flex-col">
        {/* Desktop */}
        <div className="hidden md:flex flex-col">
          {ratesData.slice(0, activeCount).map((section, idx) => (
            <div key={idx} className={`flex flex-col ${idx === 0 ? 'active' : ''}`}> 
              <div className="text-[#DE002B] text-lg font-semibold h-20 p-2 flex justify-center items-center border-l border-r border-b-2 border-[#DE002B]">
                {section.title}
                <svg className="hidden" xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none"><path d="M13 1L7 7L1 1" stroke="#DE002B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              </div>
              <div className="flex flex-col">
                {section.items.map((item, iidx) => (
                  <div key={iidx} className={`flex ${iidx % 2 === 1 ? 'bg-[#F9F9F9]' : ''} last:border-b border-[#CFCFCF]`}>
                    <div className="w-[29%] py-7 px-11 border-l border-[#CFCFCF] text-left justify-start flex items-center">
                      {item.label}
                    </div>
                    {item.choices.map((choice, cidx) => (
                      <div key={cidx} className={`w-[18%] py-2 px-2 flex justify-center items-center text-center text-base font-medium border border-[#CFCFCF] border-b-0 border-l-0 ${choice === 'tick' ? '' : ''}`}>
                        {choice === 'tick' ? tickIcon : choice}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Mobile Accordion */}
        <div className="md:hidden flex flex-col">
          {ratesData.map((section, idx) => (
            <div key={idx} className={`flex flex-col table-rates-items ${activeIdx === idx ? 'is-active' : ''}`}>
              <div className="bg-[#F9F9F9] justify-start text-left p-5 text-sm font-semibold cursor-pointer flex items-center" onClick={() => handleAccordion(idx)}>
                {section.title}
                <svg className={`ml-2 transition-transform ${activeIdx === idx ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none"><path d="M13 1L7 7L1 1" stroke="#DE002B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              </div>
              <div className={`flex-col ${activeIdx === idx ? 'flex' : 'hidden'}`}> 
                {section.items.map((item, iidx) => (
                  <div key={iidx} className={`flex flex-wrap`}>
                    <div className="w-full py-5 px-4 border border-[#CFCFCF] text-left justify-center flex items-center">
                      {item.label}
                    </div>
                    {item.choices.map((choice, cidx) => (
                      <div key={cidx} className={`w-1/2 h-20 text-sm font-normal border border-[#CFCFCF] flex justify-center items-center ${choice === 'tick' ? '' : ''}`}>
                        {choice === 'tick' ? tickIcon : choice}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Button for desktop only */}
      <div className="w-full text-center text-4xl bg-black text-red-600 py-4 md:block hidden">
        <button
          className="w-full"
          onClick={activeCount < ratesData.length ? handleShowMore : handleHideAll}
        >
          {activeCount < ratesData.length ? `all open  ${activeCount}` : 'hide all'}
        </button>
      </div>
    </div>
  );
};

export default PinnedSection;
