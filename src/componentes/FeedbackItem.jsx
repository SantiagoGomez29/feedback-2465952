import { useState } from "react";

const FeedbackItem = () =>{

//Estados: Presisten información a traves del ciclo de vida de un unico componente

    //Estados iniciales
    const [ rating,  setRating  ]  = useState(2)
    const [ text, setText] = useState("Mejorar Curso, Mejores Recursos")

    const cambiarNota=() =>{
        //Cambiar estado a rating
        //Parametro para el valor anterior
        setRating(10)
    }

    const sumarNota=() =>{
        //Cambiar estado a rating
        //Parametro para el valor anterior
        setRating((prev)=>{
            return(prev + 1)
        })
    }

    const restaNota=() =>{
        //Cambiar estado a rating
        //Parametro para el valor anterior
        setRating((prev)=>{
            return(prev - 1)
        })
    }

    return(
        <div className="card">
            <div className="num-display">
                {rating}
            </div>
            <div className="text-display">
                { text }
            </div>
            <button className="btn btn-success" onClick={cambiarNota}>
                Cambiar Nota
            </button>
            <button className="btn btn-primary" onClick={sumarNota}>
                Aumentar Nota
            </button>
            <button className="btn btn-danger" onClick={restaNota}>
                Dimunuir Nota
            </button>
        </div>
    )
}

export default FeedbackItem;