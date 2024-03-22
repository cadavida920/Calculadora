/* eslint no-eval: 0 */
import React, {useState} from "react";
import words from "lodash.words";
import Functions from './components/Funtions'
import Numbers from "./components/Number.js";
import MathOperations from "./components/MathOperations";
import Result from "./components/Result";
import "./App.css";

const App = () => {
   
    const [stack, setSatch] = useState (""); 

    const items = words(stack, /[^-^+^*^/]+/g)

    const value = items.length > 0 ? items[items.length - 1] : [0]
    console.log ("Renderizacion", value)

    //const texto = arrayFuncionModificado[0]                      // 1er posicion: funcion modificado
    //const funcionModificaTexto = arrayFuncionModificado[1]       // 2da posicion funcion que me va a modificado
    // const useState = React.useState;
    // (esVerdader) ? (resultadoVerdadero) : (resultadoFalso)

    return (
        <main className="react-calculator">
            <Result value={value} />
            <Numbers onClickNumber = {number => {
                 setSatch(`${stack}${number}`);
            }}/>
            <Functions
                 onContentClear={() => {
                    setSatch("");
                }}
                onDelete={() => {
                    if(stack.length > 0 ) {
                        const newStack = stack.substring(0,stack.length -1)
                        setSatch(newStack)
                    }
                }}
            />
            <MathOperations  
                onClickOperation={(operation) => setSatch(`${stack}${operation}`)}
                onClickEqual={(equal) => setSatch(eval(stack).toString()) ? equal : equal} 

                // onClickEqual={(equal) => {
                //     if (stack !== undefined) {
                //         setSatch(eval(stack).toString());
                //     } else {
                //         console.error('stack is undefined');
                //     }
                // }}
                
            />
        </main>
    );
};

export default App;
