import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styles from './Extra.css'

class ScrollToTopBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false
    };
  }
  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function(e) {
      scrollComponent.toggleVisibility();
    });
  }
  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true
      });
    } else {
      this.setState({
        is_visible: false
      });
    }
  }
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  render() {
    const { is_visible } = this.state;
    return (
      <div className="scroll-to-top">
        {is_visible && (
          <div onClick={() => this.scrollToTop()}>
            <img src='https://i.postimg.cc/44Ytsk8Z/top-arrow-emoj.png' alt='Go to top'/>
          </div>
          )}
        </div>
      );
    }
}
const ReplBio = () => {
  return (
    <h2> Fullstack java and c/cpp dev </h2>
  )
}
const Name = () => {
  return (
    <h1> Hi! My name is Darkdarcool </h1>
  )
}
class RedirectPage extends React.Component {
  componentDidMount(){
    window.location.replace('https://react.org')
  }
}
const Bio = () => {
  return (
    <div>
    <h4> 
      <br>
      </br>
      Hi! My name is darkdarcool and I am a 13 yr old coder. I live in the Silicon Valley and I am a java and cpp dev. I am trying to learn web dev, and it has been going well. In fact, this website was created entirly out of react.js! 
      </h4>
      <h4>
        I like to keep my social media mine, as in my IRL self, so you can't contact me. That slo goes for email. I am thinking about joining the repl.it discord, (but I don't want to have to make a new account, and if I don't I would use my IRL account, do you see my problem here??), and maybe I'll join more organizations in github
      </h4>
      <br>
      </br>
      <h4>
        I am already a mod on the github repl.it organization. So you can ping me over there too
      </h4>

    </div>
  )
}
const App = () => {
  return (
    <div>
      <div className="App">
        <ScrollToTopBtn />
      </div>
      <Name />
      <ReplBio /> 
      <Bio />
    </div>
  )
}
export default App();
console.log("Everything is up!")