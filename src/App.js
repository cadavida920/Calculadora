import React, {useStat, useState} from "react";
import Functions from './components/Funtions'
import Numbers from "./components/Number.js";
import MathOperations from "./components/MathOperations";
import Result from "./components/Result";
import "./App.css";

const App = () => {
   

    const arrayFuncionModificado = useState ("");   // 

    const texto = arrayFuncionModificado[0]                      // 1er posicion: funcion modificado
    const funcionModificaTexto = arrayFuncionModificado[1]       // 2da posicion funcion que me va a modificado
 

    // const useState = React.useState;
    return (
        <main className="react-calculator">
            <Result value={texto} />
        
            <Numbers onClickNumber = {number => {
                 funcionModificaTexto(number);
            }}/>

            <Functions
                onContentClear={() => console.log("content clear")}
                onDelete={() => console.log("onDelete")}
            />
            <MathOperations
                onClickOperation={(operation) =>
                    console.log("operacion:", operation)
                }
                onClickEqual={(equal) => console.log("Equal:", equal)}
            />
        </main>
    );
};

export default App;
