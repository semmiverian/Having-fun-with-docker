import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  state = {
    imagesSet1: [
      'https://66.media.tumblr.com/dea60da6b05d1bd7236c8c5456ae7d77/tumblr_phg22nlQ1P1x15lmpo2_400.gif',
      'https://66.media.tumblr.com/7ec3487cf9a7bdfd21525cda0bf1332e/tumblr_phg22nlQ1P1x15lmpo3_250.gif'
    ],
    imagesSet2: [
      'https://66.media.tumblr.com/7ec3487cf9a7bdfd21525cda0bf1332e/tumblr_phg22nlQ1P1x15lmpo3_250.gif  ',
      'https://66.media.tumblr.com/de1ef4e04bd349f569095dea23889bed/tumblr_phg22nlQ1P1x15lmpo4_250.gif'
    ]
  }
  render() {
    return (
      <div className="App" id="app">
        <div className="items">
          {this.state.imagesSet1.map((img, index) => (
            <img src={img} alt="simple" key={index} />
          ))}
        </div>

        <div className="items">
          {this.state.imagesSet2.map((img, index) => (
            <img src={img} alt="simple" key={index} />
          ))}
        </div>
      </div>
    )
  }
}

export default App
