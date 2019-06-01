import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import Footer from './components/Footer';
import  GoogleLetters from './components/GoogleLetters';
import  Navbar from './components/Navbar';

function App() {
   return (
    <div className="App">
      <Navbar className="navbar navbar-expand-lg navbar-light bg-light" />

      <GoogleLetters />
      <Search /*onclick={props.handleSearch}*//>
      <div className="unitedKingdom-div">
        United kingdom
        </div>

     

      <div  className="avertising_business">
      <Footer link="https://ads.google.com/intl/en_uk/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1" buttonName="Advertising" />
      <Footer  link="https://www.google.co.uk/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1#?modal_active=none" buttonName="Business" />
        </div>

        <div className="privacy_terms_settings">
      <Footer link="https://policies.google.com/privacy?hl=en&gl=uk" buttonName="Privacy" />
      <Footer link="https://policies.google.com/terms?hl=en&gl=uk" buttonName="Terms" />
      <Footer link="https://www.google.co.uk/preferences?hl=en-GB&fg=1" buttonName="Settings" />
      </div>
      
      </div>
      
   
  );
}

export default App;
