import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Internal Ironclad Tarsier</title>
        <meta property="og:title" content="Internal Ironclad Tarsier" />
      </Helmet>
      <span className="home-text">
        <span>
          hello and welcome to eric&apos;s site, feel free to
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <a href="mailto:ericpetron60@gmail.com?subject=" className="home-link">
          contact me
        </a>
        <span> if you have questions about something ;)</span>
        <br></br>
      </span>
      <div className="home-container1">
        <div className="home-container2">
          <div className="home-container3"></div>
        </div>
      </div>
      <div className="home-container4">
        <h1 className="home-text04">About me:</h1>
        <span className="home-text05">
          <span className="home-text06">my name is eric</span>
          <span>,</span>
          <span className="home-text08"> </span>
          <span className="home-text09">
            i am sophomore at the University of Minnesota - Twin Cities,
            pursuing a Computer Science degree.
          </span>
          <br className="home-text10"></br>
          <br className="home-text11"></br>
          <span className="home-text12">
            hobbies of mine consist of primarily: video games, and music!
          </span>
        </span>
      </div>
      <div className="home-container5">
        <h1 className="home-text13">listen to what im listening to!</h1>
        <div className="home-div">
          <DangerousHTML
            html={`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/5ng0tsLkpdxEiDwKbcP9GN?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`}
          ></DangerousHTML>
        </div>
      </div>
      <div className="home-social-bar">
        <span className="home-text14">
          <span>
            eric petron
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="home-text16">(he/him)</span>
        </span>
      </div>
    </div>
  )
}

export default Home
