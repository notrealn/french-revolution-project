import React from 'react';

import './sources.scss';

export class Sources extends React.Component {
  render() {
    return (
      <>
        <div>
          Stuff I used:
          <ul className="list-disc pl-8">
            <li>
              <a href="https://www.britannica.com/art/Baroque-music">britannica</a>
            </li>
            <li>
              <a href="https://www.rpfuller.com/gcse/music/baroque.html">rpfuller.com</a>
            </li>
          </ul>
          The timeline is made by me.
        </div>
      </>
    );
  }
}
