import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './styles.css';


const FormularioCuadratica = () => {
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [c, setC] = useState('');
    const [result, setResult] = useState('');

    const handleCalculate = () => {
        // Validar que los campos no estén vacíos
        if (!a || !b || !c) {
            alert('Por favor ingrese todos los valores');
            return;
        }

        // Calcular la fórmula cuadrática
        const discriminant = Math.pow(b, 2) - 4 * a * c;
        if (discriminant < 0) {
            alert('La fórmula cuadrática no tiene solución real');
        } else {
            const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            setResult(`x1 = ${x1}, x2 = ${x2}`);
        }
    };

    const handleClear = () => {
        setA('');
        setB('');
        setC('');
        setResult('');
    };

    return (
        <div className="container">
            <h2>Calculadora de Fórmula Cuadrática</h2>
            <div className="form-group">
                <label for="a">Valor de a:</label>
                <input type="number" className="form-control" value={a} onChange={(e) => setA(parseFloat(e.target.value))} />
            </div>
            <div className="form-group">
                <label for="b">Valor de b:</label>
                <input type="number" className="form-control" value={b} onChange={(e) => setB(parseFloat(e.target.value))} />
            </div>
            <div className="form-group">
                <label for="c">Valor de c:</label>
                <input type="number" className="form-control" value={c} onChange={(e) => setC(parseFloat(e.target.value))} />
            </div>
            <div className="margin-top 20px"> 
            <button className="btn btn-success" onClick={handleCalculate}>Calcular</button>
            <button className="btn btn-danger" onClick={handleClear}>Limpiar</button>
            <div className="result">
                {result && <p>Resultado: {result}</p>}
            </div>
            </div>
        </div>
    );
};

export default FormularioCuadratica;

