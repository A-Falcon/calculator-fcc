import React, {useState} from 'react'
import styled from 'styled-components'


function App() {
   // we will use useState to update the state of our calculations
   const [calc, setCalc] = useState('')
  
   //we are defining what our operations are
  //  const ops = ["/", "*", "+", "-", "."];
   
  
   // this will handle our edge cases
   const updateCalc = (value) => {
     // we define our opperations Pattern by assigning it to a regex
     const opPattern = /[+\-*/]/
     
     // if our calc is empty and our value is 0
     if (calc === '' && value === '0') {
       //then we will return
       return
     } 
     
     // if our value is '.'
     if (value === '.') {
       // we will create a new variable to check if our syntax is valid
       // parts will be defined as our calc split on our opPattern
       const parts = calc.split(opPattern)
      
       // we check to see if there is '.'
       if (parts[parts.length -1].includes('.')) {
         return
       } 
     }
     // if value does not equal '-' and 'opPattern' tests our passed in value
     if (value !==  '-' && opPattern.test(value)) {
       // we will declar our lastChar as our calcs last index or an empty string
       const lastChar = calc[calc.length -1] || ''
       // we will declare our sndLastChar as our calcs second last index or an empty string
       const sndLastChar = calc[calc.length -2] || ''
       
       // if there is an operator in our lastChar
       if (opPattern.test(lastChar)) {
         // we will check if lastChar is '-' and if there is an operator in sndLastChar
         if (lastChar === '-' && opPattern.test(sndLastChar)) {
           // if there is an operator in sndLastChar we will start our slice at the 0 index and end on our second last index of our calc and add our value
           
           setCalc(calc.slice(0, -2) + value)
           return
         }
         // if there is an operator in our lastChar, will start our slice at the 0 index and end on our last index of our calc and add our value
         setCalc(calc.slice(0, -1) + value)
         return
       }
     }
     // to set our calc, we will add our calc and our value
     setCalc(calc + value)
   }
   
   // our calculate function
   const calculate = () => {
     //setCalc take in our evaluated calc and set it to a string
    setCalc(eval(calc).toString())
 }  
   //our deleteLast function
   const deleteLast = () => {
     // if calc is set to nothing, we will return
     if (calc === '') {
       return
     }
     
     //we declare lastValue 
     const lastValue = calc.slice(0,-1)
     //setCalc will take in our last value to delete it 
     setCalc(lastValue)
   }
   
   // our clearAll Function
   const clearAll = () => {
     //we will setCalc to empty string
     setCalc('')
   }
 
   
  
   return (
     <Wrapper id="wrapper">
       
         <Display id="display">
           {calc || 0}
         </Display>
         <Operators id="operators">
           <Ops 
             id="add"
             class="ops"
             onClick={() => {
               updateCalc('+')
             }}
             >
             +
           </Ops>
            <Ops 
             id="subtract"
             class="ops"
             onClick={() => {
               updateCalc('-')
             }}
             >
             -
           </Ops>
            <Ops 
             id="multiply"
             class="ops"
             onClick={() => {
               updateCalc('*')
             }}
             >
             *
           </Ops>
            <Ops 
             id="divide"
             class="ops"
             onClick={() => {
               updateCalc('/')
             }}
             >
             /
           </Ops>
            <Ops 
             id="delete"
             class="ops"
             onClick={deleteLast}
             >
             DEL
           </Ops>
            <Ops 
             id="clear"
             class="ops"
             onClick={clearAll}
             >
             AC
           </Ops>
         </Operators>
         <Digits id="digits">
            <Digit 
             id="one"
             className="digit"
             onClick={() => {
               updateCalc('1')
             }}
             >
             1
           </Digit>
           <Digit 
             id="two"
             className="digit"
             onClick={() => {
               updateCalc('2')
             }}
             >
             2
           </Digit>
            <Digit 
             id="three"
             className="digit"
             onClick={() => {
               updateCalc('3')
             }}
             >
             3
           </Digit>
            <Digit 
             id="four"
             className="digit"
             onClick={() => {
               updateCalc('4')
             }}
             >
             4
           </Digit>
            <Digit 
             id="five"
             className="digit"
             onClick={() => {
               updateCalc('5')
             }}
             >
             5
           </Digit>
            <Digit 
             id="six"
             className="digit"
             onClick={() => {
               updateCalc('6')
             }}
             >
             6
           </Digit>
            <Digit 
             id="seven"
             className="digit"
             onClick={() => {
               updateCalc('7')
             }}
             >
             7
           </Digit>
            <Digit 
             id="eight"
             className="digit"
             onClick={() => {
               updateCalc('8')
             }}
             >
             8
           </Digit>
            <Digit 
             id="nine"
             className="digit"
             onClick={() => {
               updateCalc('9')
             }}
             >
             9
           </Digit>
            <Digit 
             id="zero"
             className="digit"
             onClick={() => {
               updateCalc('0')
             }}
             >
             0
           </Digit>
            <Digit 
             id="equals"
             className="digit"
             onClick={calculate}
             >
             =
           </Digit>
           <Digit 
             id="decimal"
             className="digit"
             onClick={() => {
               updateCalc('.')
             }}
             >
             .
           </Digit>
         </Digits>
      
     </Wrapper>
   )
}

const Wrapper = styled.div`
  height: auto;
  width: auto;
  padding: 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
   background-color: #3d405b;
`

const Display = styled.div`
  display: flex;
  font-size: 30px;
  color: #e07a5f;
  justify-content: flex-end;
  width: 80%;
  height: 20px;
  align-self: center;
  background: #f4f1de;
  padding: 20px;
  border-radius: 10px;
`
const Operators = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px; 
`
const Ops = styled.button`
  background-color: transparent;
  color: #f2cc8f;
  font-size: 20px;
  font-weight: 500;
  border-radius: 10px;
  padding: 20px;
  margin: 5px;
  border-width: 0px;
  transition: 200ms;
  &:hover {
    color: #81b29a;
  }
`
const Digits = styled.div`
  flex-wrap: wrap;
  width: 310px;
  height: 310px;
/*   background-color: #f5cac3; */
  border-radius: 10px;
  text-align: center;
  padding: 20px;
  margin-bottom: 20px;
`
const Digit = styled.button`
  height: 70px;
  width: 70px;
  margin:10px;
  background-color: #f4f1de;
  border: 0px;
  border-radius: 10px;
  font-weight: 700;
  color: #81b29a;
  font-size: 20px;
  transition: 200ms;
  &:hover {
    background-color: #f2cc8f;
  }
  &:focus {
    background-color: #81b29a;
    color: #f2cc8f;
  }
`
export default App;
