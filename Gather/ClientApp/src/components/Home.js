import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Hello, Microsoft world!</h1>
        <p>Welcome to <b>Gather</b>. This space aims at enabling people to enjoy the joy of giving! So, post what you have to offer, see what others have to share!</p>
        <p></p>
        <p>Built with love and much fun by: </p>
        <ul>
          <li><a href=''>Somya Upadhay</a></li>
          <li><a href=''>Sonal Verma</a></li>
          <li><a href=''>Sachin Gupta</a></li>
        </ul>
        <p><code>The meaning of life is to find your gift, the purpose of life is to give it away. - William Shakespeare</code></p>
      </div>
    );
  }
}
