import './App.css';

function Card({ cardClass, title, text, color, pic }) {
  return (
    <div className={"card card_" + cardClass}>
      <div className="colored_line" style={{backgroundColor: color}} />
      <div className="card_title">{title}</div>
      <div className="card_text">{text}</div>
      <img className="card_pic" src={"/icon-" + pic + ".svg"} alt="" />
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="header">
          <div>
            <div className="intro">
              <span>Reliable, efficient delivery</span>
            </div>
            <div className="powered_by">
              <span>Powered by Technology</span>
            </div>
          </div>
          <div className="description">
            <span>Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</span>
          </div>
        </div>
        <div className="card_grid">
          <Card
            cardClass="sv"
            title="Supervisor"
            text="Monitors activity to identify project roadblocks"
            color="hsl(180, 62%, 55%)"
            pic="supervisor"/>
          <Card
            cardClass="tb"
            title="Team Builder"
            text="Scans our talent network to create the optimal team for your project"
            color="hsl(0, 78%, 62%)"
            pic="team-builder"/>
          <Card
            cardClass="karma"
            title="Karma"
            text="Regularly evaluates our talent to ensure quality"
            color="hsl(34, 97%, 64%)"
            pic="karma"/>
          <Card
            cardClass="calc"
            title="Calculator"
            text="Uses data from past projects to provide better delivery estimates"
            color="hsl(212, 86%, 64%)"
            pic="calculator"/>
        </div>
      </div>
    </div>
  );
}

export default App;
