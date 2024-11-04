import { Box } from '@mui/material';
import './Calculadora.css'
import Container from '@mui/material/Container';
import { useState } from 'react';

function Calculadora(){
   const[num,setNum] = useState(0);
   const[oldnum,setOldNum] = useState(0);
   const[operador,setOperador] = useState();

   const inputNum = (e) =>{
    let enviar=(e.target.value)
    if(num===0){
        setNum(enviar)
    }else{
        setNum(num + enviar)
    }
   }

   const clear = () =>{
    setNum(0)
   }

   const porcentagem = () =>{
    setNum(num/100)
   }

   const mudarSinal = () =>{
    if(num>0){
        setNum(-num)
    }else{
        setNum(Math.abs(num));
    }
   }

   const operatorHandle = (e) => {
    var operadorInput =e.target.value
    setOperador(operadorInput)
    setOldNum(num)
    setNum(0)
   }

   const calculo = () =>{
    if(operador==="/"){
        setNum(oldnum/num);
    }
    else if(operador==="X"){
        setNum(oldnum*num);
    }
    else if(operador === "-"){
        setNum(oldnum-num);
    }
    else if (operador === "+"){
        parseInt(num)
        setNum(parseFloat(oldnum) + parseFloat(num));
    }

   }


    return(
        <>
        <Box m={5}/>
        <Container maxWidth="xs">
        <div className="wrapper">
        <Box m={12}/>
            <h1 className='resultado'>{num}</h1>
        <button className='white' onClick={clear}><p>AC</p></button>
        <button className='white' onClick={mudarSinal}><p>+/-</p></button>
        <button className='white' onClick={porcentagem}>%</button>
        <button className='orange' onClick={operatorHandle} value={"/"}>/</button>
        <button className='gray' onClick={inputNum} value={7}>7</button>
        <button className='gray' onClick={inputNum} value={8}>8</button>
        <button className='gray' onClick={inputNum} value={9}>9</button>
        <button className='orange' onClick={operatorHandle} value={"X"}>X</button>
        <button className='gray' onClick={inputNum} value={4}>4</button>
        <button className='gray' onClick={inputNum} value={5}>5</button>
        <button className='gray' onClick={inputNum} value={6}>6</button>
        <button className='orange' onClick={operatorHandle} value={"-"}>-</button>
        <button className='gray' onClick={inputNum} value={1}>1</button>
        <button className='gray' onClick={inputNum} value={2}>2</button>
        <button className='gray' onClick={inputNum} value={3}>3</button>
        <button className='orange' onClick={operatorHandle} value={
            "+"}> +</button>
        <button className='gray' onClick={inputNum} value={0}>0</button>
        <button className='gray' onClick={inputNum} value={","}>,</button>
        <button className='gray' style={{visibility: "hidden"}}>,</button>
        <button className='orange' onClick={calculo}>=</button>
        </div>
        </Container>
        </>
    )
}

export default Calculadora