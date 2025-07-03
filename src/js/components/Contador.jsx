import { useState } from "react"

export const Contador= () => {
    const[contar, setCount] = useState(0)

    return (
        <section>
            <div>
                <p>Contador: {contar}</p>
                <button onClick={() => setCount (contar=> contar + 1)}>Pulsame para sumar</button>
            </div>
        </section>
    )
}