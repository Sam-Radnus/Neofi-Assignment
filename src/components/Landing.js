import React, { useState ,useEffect } from 'react'
import Dropdown from './Dropdown'
const Landing = () => {
  const [modal, setModal] = useState(true);
  const [currencies,setCurrencies]=useState([]);
  const [currency,setCurrency]=useState("LTCBTC");
  const [money,setMoney]=useState(0);
  const [exchange,setExchange]=useState(0);
  const fetchCurrency=async()=>{
    const response=await fetch("https://api.binance.com/api/v3/exchangeInfo");
    const parsedData=await response.json();
    console.log(parsedData.symbols.slice(1,20));
    
    setCurrencies(parsedData.symbols.slice(1,20));
  
    console.log("hello")
  }
  useEffect(()=>{
    fetchCurrency();
  },[])
  return (
    <div className="landing">
      {modal &&
        <div className="modal" style={{display:modal?'block':'none'}}id="myModal">

          <div className="modal-dialog">
            <div style={{marginTop:'20%'}} className="modal-content">
              <div style={{position:'absolute',zIndex:'999',top:'2%',right:'5%',cursor:'pointer'}} > 
              <svg onClick={()=>{
                setModal(false);
              }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
              </div>

              <div style={{position:'relative',borderBottom:'none'}} className="modal-header">
                <span style={{position:'absolute',left:'15%',top:'35%'}}><svg xmlns="http://www.w3.org/2000/svg" style={{color:'white'}} width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></span>
                <input type="text" style={{width: '320px',color:'white',paddingLeft:'40px',
height: '40px',border: '1px solid rgba(110, 86, 248, 0.25)',marginLeft:'25px',
                     borderRadius:'30px',backgroundColor:'#181627'}}/>
              </div>


              <div style={{width:'80%',marginLeft:'7%',display:'flex',flexDirection:'column',textAlign:'center',marginTop: '5%', overflow: 'auto', msOverflowStyle: 'none', scrollbarWidth: 'thin'}}  className="modal-body">
                { currencies && currencies.map((currency)=> (
 <div style={{cursor:'pointer',marginTop:'10px',width:'318px',textAlign:'left',padding:'5px'}} onClick={()=>{ setCurrency(currency.symbol);
  setModal(false)}}><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{color:'white',marginTop:'-3px'}} fill="currentColor" class="bi bi-currency-bitcoin" viewBox="0 0 16 16">
 <path d="M5.5 13v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.5v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.084c1.992 0 3.416-1.033 3.416-2.82 0-1.502-1.007-2.323-2.186-2.44v-.088c.97-.242 1.683-.974 1.683-2.19C11.997 3.93 10.847 3 9.092 3H9V1.75a.25.25 0 0 0-.25-.25h-1a.25.25 0 0 0-.25.25V3h-.573V1.75a.25.25 0 0 0-.25-.25H5.75a.25.25 0 0 0-.25.25V3l-1.998.011a.25.25 0 0 0-.25.25v.989c0 .137.11.25.248.25l.755-.005a.75.75 0 0 1 .745.75v5.505a.75.75 0 0 1-.75.75l-.748.011a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25L5.5 13zm1.427-8.513h1.719c.906 0 1.438.498 1.438 1.312 0 .871-.575 1.362-1.877 1.362h-1.28V4.487zm0 4.051h1.84c1.137 0 1.756.58 1.756 1.524 0 .953-.626 1.45-2.158 1.45H6.927V8.539z"/>
</svg></span><span>{currency.symbol}</span></div>
                ))
               
}
              </div>


             

            </div>
          </div>
        </div>
      }
      <div  style={{ position: "absolute", top: '60%', left: '50%', transform: 'translate(-50%,-50%)', alignItems: "center", backgroundColor: 'rgb(11,8,25)', height: '550px', width: '443px' }}>
        <div id="input container" style={{ margin: '10px', marginTop: '30px', marginLeft: '40px', height: '80%', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: '' }}>
          <div style={{ position: 'relative', width: '357px', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <label style={{ fontSize: '14px', color: '#C5C5C5' }} htmlFor="dropdown">Current Value</label>
              <span style={{ color: '#627EEA', fontSize: '24px', fontWeight: '600' }}>&#x20B9; 4299</span>
            </div>
            <br />
            <input
              type="text"
              id="amount"
              name="input"
              style={{ backgroundColor: 'rgb(28, 23, 49)', color: 'white', width: '357px', paddingLeft: '5px', paddingLeft: '25px', paddingRight: '60px', fontWeight: 600, fontSize: '22px', lineHeight: '31.24px' }}
              placeholder="0.00"
              onClick={(e)=>{
                e.preventDefault();
                setModal(true);
              }}
              value={currency}
            />


          </div>

          <div style={{ position: 'relative', marginTop: '24px' }}>
            <label style={{ fontSize: '15px', marginBottom: '10px', color: '#DCDCEC' }} htmlFor="input">Amount of money you want to Invest:</label>
            <br />
            <input
              type="text"
              id="amount"
              name="input"
              style={{ backgroundColor: 'rgb(28, 23, 49)', color: 'white', width: '357px', paddingLeft: '5px', paddingLeft: '25px', paddingRight: '60px', fontWeight: 600, marginTop: '2px', fontSize: '22px', lineHeight: '31.24px' }}
              placeholder="0.00"
              value={money}
              onChange={(e)=>{
                setMoney(e.target.value);
                setExchange(e.target.value*80);
              }}
            />
            <span style={{ position: 'absolute', top: '54%', right: '10%', color: 'white', paddingRight: '5px' }}>INR</span>

          </div>
          <div style={{ marginTop: '24px' }}>
            <label htmlFor="estimatedEth" style={{ marginBottom: '13px' }}>Estimated Eth you will get:</label>
            <br />
            <input type="text" id="amount" name="estimatedEth" placeholder="0.00" style={{ backgroundColor: 'rgb(28, 23, 49)', color: 'white', width: '357px', paddingLeft: '5px', paddingLeft: '25px', paddingRight: '60px', fontWeight: 600, marginTop: '2px', fontSize: '22px', lineHeight: '31.24px' }} value={exchange} disabled />
          </div>
          <div style={{ marginTop: '40px', width: '357px' }}>
            <button
              style={{
                width: '357px',
                height: '50px',
                borderRadius: '30px',
                padding: '0',
                backgroundImage: 'linear-gradient(to right, #3387D5 0%, #7A06C9 100%), linear-gradient(to right, #FFFFFF 0%, #FFFFFF 100%)',
                backgroundBlendMode: 'normal, lighten',
                backgroundOrigin: 'border-box',
                backgroundClip: 'content-box, border-box',
                boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.25)',
                border: 'none',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <span style={{ color: 'white' }}> buy </span>
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Landing