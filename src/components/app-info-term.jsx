import React from 'react';
import GithubWidget from './github-widget.jsx';


const AppInfoTerm = () => (
  <div className="app" id="sqlectron-term">
    <a name="term"></a>
    <div className="container">
      <div className="demo">
        <img src="https://sqlectron.github.io/demos/sqlectron-demo-term-v1.0.0.gif" />
        <a className="link-full-screen" href="https://sqlectron.github.io/demos/sqlectron-demo-term-v1.0.0.gif">
          Click here to watch in the original size
        </a>
      </div>
      <div className="description right">
        <h1>SQLECTRON-TERM</h1>
        <div className="github-widget">
          <GithubWidget user="sqlectron" repository="sqlectron-term" type="star" />
          <GithubWidget user="sqlectron" repository="sqlectron-term" type="fork" />
        </div>
        <p>In case you prefer terminal interfaces. You should try this one.</p>
        <ul className="inner-menu">
          <li><a href="https://github.com/sqlectron/sqlectron-term">Repository</a></li>
          <li><a href="https://github.com/sqlectron/sqlectron-term/issues">Issues</a></li>
          <li><a href="https://github.com/sqlectron/sqlectron-term/releases">Releases</a></li>
          <li><a href="https://github.com/sqlectron/sqlectron-term">Documentation</a></li>
        </ul>
        <div className="download">
          <a className="button" href="https://github.com/sqlectron/sqlectron-term#install">Download</a>
        </div>
      </div>
    </div>
  </div>
);

export default AppInfoTerm;
