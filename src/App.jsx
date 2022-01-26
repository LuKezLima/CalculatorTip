import React, {useState} from "react";

import Logo from '../src/assets/logo.svg'
import Input from "./components/Input";
import Tip from "./components/Tip";

import IconDoll from '../src/assets/icon-dollar.svg'
import IconPerson from '../src/assets/icon-person.svg'

const initialState = {
  btn5: false,
  btn10: false,
  btn15: false,
  btn25: false,
  btn50: false,

}


function App() {

  const [{btn5, btn10, btn15, btn25, btn50}, setState] = useState(initialState)

  const [bill, setBill] = useState(0)
  const [tip, setTip] = useState(0)
  const [tipAmount, setTipAmount] = useState(0)
  const [people, setPeople] = useState(0)
  const [total, setTotal] = useState(0)
  const [chkPeople, setChkPeople] = useState(false)
 


function changeNumber(Bill, tip, nPeople){

  if(nPeople == 0 ){
    setChkPeople(true)
    
  } else{
    let tipamount = (Bill * (tip/100)).toFixed(2) 
    let total = (tipamount / nPeople).toFixed(2) 
  
    setTipAmount(tipamount)
    setTotal(total)
    setChkPeople(false)
  }


}


function clearFields(){
  setBill(0)
  setTipAmount(0)
  setPeople(0)
  setTotal(0)
  setChkPeople(false)
  setState({...initialState})
}




  return (
    <div className="App">

      <header>
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
      </header>
      <main>

        <div className="content">




          <div className="input">


            <div className="bill-input">
                <h3>Bill</h3>
                <Input icon={IconDoll} value={bill} onChange={(e) => setBill(e.target.value)} />   
            </div>

            <div className="select-box">
              <h3>Select Tip %</h3>
              <div className="percentages">
                      <Tip value={5} active={btn5} onClick={(e) => {
                        setTip(e.target.value)
                        document.getElementById('custom').value = null
                        setState({...initialState, btn5: true})
                        }}/>
                      <Tip value={10} active={btn10} onClick={(e) => {
                        setTip(e.target.value)

                        setState({...initialState, btn10: true})
                        document.getElementById('custom').value = null
                        }}/>
                      <Tip value={15} active={btn15} onClick={(e) =>{
                        setTip(e.target.value)
                        setState({...initialState, btn15: true})
                        document.getElementById('custom').value = null
                      }}/>
                      <Tip value={25} active={btn25} onClick={(e) =>{
                        setTip(e.target.value)
                        setState({...initialState, btn25: true})
                        document.getElementById('custom').value = null
                        }}/>
                      <Tip value={50} active={btn50} onClick={(e) =>{
                        setTip(e.target.value)
                        setState({...initialState, btn50: true})
                        document.getElementById('custom').value = null
                        }}/>
                      <input type="text" id="custom" placeholder="custom" maxLength={2} onChange={(e)=>
                      {
                        setTip(e.target.value)
                        setState({...initialState})
                        }
                        }/>
              </div>

            </div>

            <div className="people-box">
              <h3>Number of People {chkPeople && <small>Can´t be zero</small>}  </h3>
              <Input icon={IconPerson} value={people} onChange={(e) => setPeople(e.target.value)} />
              
            </div>


          </div>




          
          <div className="result">

            <div className="box-result">
              <div>
                <h3>Tip amount</h3>
                <p>/ person</p>

              </div>
              <h1>${tipAmount}</h1>
            </div>

            <div className="box-result">

            <div>
                <h3>Total</h3>
                <p>/ person</p>

              </div>
              <h1>${total}</h1>

            </div>

            <div className="btnBox">
            <button id="btnReset" onClick={e=>clearFields()}>Reset</button>
            <button onClick={(e)=> changeNumber(bill,tip,people)}>Calc</button>
            </div>
           

          </div>

        </div>

      </main>

    </div>
  );
}

export default App;
