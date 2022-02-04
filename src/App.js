import React, {useState} from 'react'
import styled from 'styled-components'


function App() {
   // we will use useState to update the state of our calculations
   const [calc, setCalc] = useState('')
  
   //we are defining what our operations are
   const ops = ["/", "*", "+", "-", "."];
   
  
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
     <div id="wrapper">
       
         <div id="display">
           {calc || 0}
         </div>
         <div id="operators">
           <button 
             id="add"
             class="ops"
             onClick={() => {
               updateCalc('+')
             }}
             >
             +
           </button>
            <button 
             id="subtract"
             class="ops"
             onClick={() => {
               updateCalc('-')
             }}
             >
             -
           </button>
            <button 
             id="multiply"
             class="ops"
             onClick={() => {
               updateCalc('*')
             }}
             >
             *
           </button>
            <button 
             id="divide"
             class="ops"
             onClick={() => {
               updateCalc('/')
             }}
             >
             /
           </button>
            <button 
             id="delete"
             class="ops"
             onClick={deleteLast}
             >
             DEL
           </button>
            <button 
             id="clear"
             class="ops"
             onClick={clearAll}
             >
             AC
           </button>
         </div>
         <div id="digits">
            <button 
             id="one"
             className="digit"
             onClick={() => {
               updateCalc('1')
             }}
             >
             1
           </button> <button 
             id="two"
             className="digit"
             onClick={() => {
               updateCalc('2')
             }}
             >
             2
           </button>
            <button 
             id="three"
             className="digit"
             onClick={() => {
               updateCalc('3')
             }}
             >
             3
           </button>
            <button 
             id="four"
             className="digit"
             onClick={() => {
               updateCalc('4')
             }}
             >
             4
           </button>
            <button 
             id="five"
             className="digit"
             onClick={() => {
               updateCalc('5')
             }}
             >
             5
           </button>
            <button 
             id="six"
             className="digit"
             onClick={() => {
               updateCalc('6')
             }}
             >
             6
           </button>
            <button 
             id="seven"
             className="digit"
             onClick={() => {
               updateCalc('7')
             }}
             >
             7
           </button>
            <button 
             id="eight"
             className="digit"
             onClick={() => {
               updateCalc('8')
             }}
             >
             8
           </button>
            <button 
             id="nine"
             className="digit"
             onClick={() => {
               updateCalc('9')
             }}
             >
             9
           </button>
            <button 
             id="zero"
             className="digit"
             onClick={() => {
               updateCalc('0')
             }}
             >
             0
           </button>
            <button 
             id="equals"
             className="digit"
             onClick={calculate}
             >
             =
           </button>
           <button 
             id="decimal"
             className="digit"
             onClick={() => {
               updateCalc('.')
             }}
             >
             .
           </button>
         </div>
      
     </div>
   )
}
export default App;
