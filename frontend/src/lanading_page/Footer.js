import React from 'react';

function Footer() {
    return ( 
        <div className='container-fluid p-5 mt-4 border-top' style={{backgroundColor:"#FFF"}}>
            <div className='row '>
                <div className='col'>
                    <img style={{width:"50%"}}src='assests/logo.svg' alt='Img not load'></img>
                    <p>&copy; 2010-2025,Not Zerodha Broking Ltd. All Right Reserved.</p>
                </div>
                 <div className='col '>
                    <h5 className='mb-3'>Company</h5>
                   <a className="text-muted" style={{textDecoration:"none"}} href=''> About</a><br/>
                   <a className="text-muted" style={{textDecoration:"none"}} href=''> Product </a><br/>
                   <a className="text-muted" style={{textDecoration:"none"}} href=''> Pricing</a><br/>
                <a className="text-muted" style={{textDecoration:"none"}} href=''> Refferal Program</a><br/>
                  <a className="text-muted"  style={{textDecoration:"none"}} href=''> Carrer</a><br/>
                   <a className="text-muted" style={{textDecoration:"none"}} href=''> Zerodha.tech</a><br/>
                    <a className="text-muted" style={{textDecoration:"none"}} href=''> Press & media</a><br/>
                     <a className="text-muted" style={{textDecoration:"none"}} href=''> Zerodha cared</a><br/>
                 </div>
                  <div className='col'>
                    <h5>Support</h5>
                     <a className="text-muted" style={{textDecoration:"none"}} href=''> Contact</a><br/>
                      <a className="text-muted" style={{textDecoration:"none"}} href=''> Support portal</a><br/>
                       <a className="text-muted" style={{textDecoration:"none"}} href=''> Z-connect blog</a><br/>
                        <a className="text-muted" style={{textDecoration:"none"}} href=''> Lists of charges</a><br/>
                         <a className="text-muted" style={{textDecoration:"none"}} href=''> Download and resource</a><br/>
                  </div>
                   <div className='col'>
                    <h5>Account</h5>
                     <a className="text-muted"  style={{textDecoration:"none"}} href=''> Open account</a><br/>
                      <a className="text-muted" style={{marginBottom:"2rem",textDecoration:"none"}}  href=''> Fund transfer</a><br/>
                       <a className="text-muted" style={{textDecoration:"none"}}  href=''> 60 day challenge</a><br/>
                   </div>
            </div>
            <div className='mt-5 text-muted'>
            <p >Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.: INZ000031633 CDSL: Depository services through Zerodha Securities Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com
, for DP related grievances you may email dp@zerodha.com
. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | CFI</p>
<p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID, Nature of Complaint, Complaint Details, and Supporting Documents. Ensure correct details for Communication, Speedy redressal of the grievances</p>
<p><b>Investments in securities market are subject to market risks; read all the related documents carefully before investing</b></p>
<p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary, you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please use your bank account and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account.</p> </div>
        </div>
     );
}

export default Footer;