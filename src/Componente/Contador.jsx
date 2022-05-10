

const { useState, useEffect } = require("react");


const Contador = () => {
    const [cuenta, setCuenta] = useState(100);

    const aumentar = () => {
        setCuenta(cuenta + 1);

    };

    const disminuir = () => {
        setCuenta(cuenta - 1);

    };

    const reset = () => {
        setCuenta(0);

    };

    useEffect(() => {
        console.log(`El contador va en ${cuenta}`);
    }, []);

    return (
        <div>
            <center>
                <h1>({cuenta})</h1>
                <button className="boton" onClick={aumentar}>Aumentar</button>
                <button className="boton" onClick={disminuir}>Disminuir</button>
                <button className="boton" onClick={reset}>Reset</button>
            </center>
        </div>
    );

};

export default Contador;