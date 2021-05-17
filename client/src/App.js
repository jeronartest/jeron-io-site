
import './App.css';
import MailchimpSubscribe from "react-mailchimp-subscribe"


function App() {
  return (
    <div className="App-header">
      <h1 fontFamily="monospace">Jeron.io</h1>
      <h2>Coming Soon</h2>
      <form>
        <label>Subscribe:
        <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} />
        {console.log(process.env.REACT_APP_MAILCHIMP_URL)}
        
        </label>


      </form>
    </div>
  );
}

export default App;
