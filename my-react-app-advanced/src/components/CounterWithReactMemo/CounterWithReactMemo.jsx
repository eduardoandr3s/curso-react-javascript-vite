import React, { useState, useCallback, useMemo } from "react";


const Child = React.memo(({counter}) => {
    console.log("Renderizando el componente hijo");
  return(
    <div>
      <p>Contador: {counter}</p>
    </div>
  )
})


function ExpensiveCalculation({number}){
    const result = useMemo(()=>{
        console.log("Calculando resultado");
        return number * 2;
    }, [number])
    return <p>Resultado: {result}</p>
}


function CounterWithReactMemo(){
    const [counter, setCounter] = useState(0);

    const increment = useCallback(()=>{
    setCounter(prev => prev + 1);

    }) 


    return(
        <>
       <button onClick={increment}>Incrementar</button>
       <Child counter={counter}/>
       <ExpensiveCalculation number={counter}/>
        </>
    )
}

export default CounterWithReactMemo;
