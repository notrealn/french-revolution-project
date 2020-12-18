import React from 'react';

import './home.scss';

const timeline = require('../../assets/timeline.png').default;
const brandenburg = require('../../assets/brandenburg.mp3').default;
const seasons = require('../../assets/four-seasons.mp3').default;

export class Home extends React.Component {
  render() {
    return (
      <>
        <div>
          <h1 className="text-xl underline">Introduction</h1>
          <p className="mb-2">Classical music comes in many types, like Baroque, romantic, classical, and even 20th-century.</p>
          <p className="mb-2">The Baroque period was the time period between 1600 and 1750, with romantic before it and classical after.</p>
          <img className="h-128" src={timeline} alt="timeline picture" />

          <h1 className="text-xl underline">Description</h1>
          <p className="mb-2">While romantic music was usually emotional, Baroque music was often dramatic, fancy, and polyphonic, meaning multiple parts. Accidentals, which create notes that were slightly lower or higher, started being used. This created major and minor keys. </p>

          <h1 className="text-xl underline">Composers</h1>
          <p >Some famous Baroque composers include:</p>
          <ul className="mb-2 list-disc pl-8">
            <li>Vivaldi, with his four seasons</li>
            <li>Monteverdi, who made operas</li>
            <li>Bach, compising his classical pieces</li>
          </ul>

          <h1 className="text-xl underline">New music forms</h1>
          <p className="mb-2">The sonata, concerto, and overture were new music forms made for instruments. Sotanas usually had two violin players and a cello and concertos mostly had at least one soloist with an orchestra. Overtures had three movements, usually quick-slow-quick (italian overture) or slow-quick-slow (french). Violins became the most popular instrument in the orchestra during this time. </p>
          <p className="mb-2">Operas, oratorio, and cantatas were also made during the Baroque period. Oratorios were just like operas, but told spooky stories with costumes and props. Cantatas was for a soloists and chorus with an orchestra. Bach made 200 cantatas.</p>

          <h1 className="text-xl underline">Listening</h1>
          <p className="mb-2">I have downloaded some famous Baroque pieces that you can see below.</p>
          <p>brandenburg concerto by Bach, listen for the changing dynamics (volume) of the piece. (the first few seconds of the audio is silent for some reason)</p>
          <audio controls>
            <source src={brandenburg} type="audio/mpeg" />
          </audio>
          <p>four seasons by Vivaldi</p>
          <audio controls>
            <source src={seasons} type="audio/mpeg" />
          </audio>
        </div>
      </>
    );
  }
}
