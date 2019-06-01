import React from 'react'

const Navbar=()=> {
    return (
        <div>

    <nav >
    <div>
<a className="nav-brand" href="https://about.google/intl/en-GB/?fg=1&utm_source=google-GB&utm_medium=referral&utm_campaign=hp-header">About</a>
<a className="nav-brand" href="https://store.google.com/?utm_source=hp_header&utm_medium=google_oo&utm_campaign=GS100042">Store<span class="sr-only"></span></a>
</div>
<div>
   <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link" href="hhttps://accounts.google.com/signout/chrome/landing?continue=https://mail.google.com/mail&oc=https://mail.google.com/mail&hl=en-GB">Gmail</a>
      <a className="nav-item nav-link" href="https://www.google.co.uk/imghp?hl=en&tab=wi">Images</a>
      <a className="nav-item nav-link disabled" href="https://accounts.google.com/SignOutOptions?hl=en&continue=https://www.google.co.uk/">Account</a>
      </div>
    </div>
  </div>
</nav> 
        </div>
    )
}
export default Navbar;