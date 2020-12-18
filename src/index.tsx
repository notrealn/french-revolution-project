import React from 'react';
import { Globe } from 'react-feather';
import { BrowserRouter, NavLink, Route, Switch, useLocation } from 'react-router-dom';

import { renderApp } from '../src/util';
// import { Home } from './home/home';
// import { Sources } from './sources/sources';

import './index.scss';

const map = require('../assets/austerlitz-map.png').default;

const App = (props: {}) => {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 pb-3 lg:pb-6 shadow-xl">
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <Globe className="mr-2" />
            <span className="font-semibold text-xl tracking-tight">The Battle of Austerlitz</span>
          </div>
          <div className="text-sm flex-grow align-center">
            <a href="#overview" className="block m-4 inline-block text-teal-200 hover:text-white mr-4">
              <button>Overview</button>
            </a>
            <a href="#armies" className="block m-4 inline-block text-teal-200 hover:text-white mr-4">
              <button>Armies</button>
            </a>
            <a href="#battle" className="block m-4 inline-block text-teal-200 hover:text-white mr-4">
              <button>Battle</button>
            </a>
            <a href="#result" className="block m-4 inline-block text-teal-200 hover:text-white mr-4">
              <button>Result</button>
            </a>
            <a href="https://github.com/notrealn/absolutism-project" className="inliSee Codene-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-3 float-right">
              See Code
            </a>
          </div>
        </div>
      </nav>
      <main>
        <div>
          <h1 className="text-xl underline" id="overview">Overview</h1>
          <p className="mb-2">The battle of Austerlitz was fought between Russia, Austria, and France. It was won by the french which was unexpected, as they defeated two larger armies. It was fought near Austerlitz, which is an Austrian town. Another name for this battle was the &quot;Battle of the Three Emporers&quot;. The end result of the battle also forced austria to have peace with the french.</p>
          <img className="w-1 md:w-1/2" src={map} />
          <h1 className="text-xl underline" id="armies">Armies</h1>
          <p className="mb-2">The french imperial army was about 68 000 people, versus 90 000 russian and austrian. General M.I. Kutuzov had controlled the two allied armies. </p>
          <h1 className="text-xl underline" id="battle">Battle</h1>
          <p className="mb-2">The allies (Russia and Austria) planned to attack from the west of Austerlitz in the Pratzen Plateau, but Napoleon had evacuated for a trap. They then attacked France&apos;s right to attempt to cut them off from Vienna with 40 000 men, but this was defended by Marshal Louis Davout&apos;s 10 000 men. The french also had to defend against a northern flank. Napoleon then sent Marshal Nicolas Soult up the slopes of the Pratzen Plateau with 20 000 people to fight the weaker allies there. The plateau was captured and was then defended more with the help of 25 000 reinforcements. This caused the allies to become split into two, which Napoleon took advantage of by forcefully attacking and chacing them.</p>
          <h1 className="text-xl underline">Before</h1>
          <a href="http://www.theartofbattle.com/battle-of-austerlitz-1805/"><img className="w-1 md:w-1/2" src="http://www.theartofbattle.com/wp-content/uploads/2014/11/austerlitz-preview.jpg" alt="before battle image" /></a>
          <h1 className="text-xl underline">After</h1>
          <a href="http://www.theartofbattle.com/battle-of-austerlitz-1805/"><img className="w-1 md:w-1/2" src="http://www.theartofbattle.com/wp-content/uploads/2014/11/austerlitz-preview-2.jpg" alt="after battle image" /></a>
          <h1 className="text-xl underline" id="result">Result</h1>
          <p className="mb-2">The allies had lost about 15 000 people and had 11 000 captured. France had lost only 9 000 people. A couple days later, Austria agreed to take his armies back along with Russia. Although this was regarded as a massive victory, it only took russia 1 year and 4 for Austria to recover.</p>
        </div>
      </main>
      <footer className="bg-gray-200 m-0 p-8"><a className="text-blue" href="https://github.com/notrealn/french-revolution-project">Link to code</a></footer>
    </>
  );
};

renderApp(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
