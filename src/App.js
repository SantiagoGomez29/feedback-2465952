import Header from './componentes/Header';
import FeedbackItem from './componentes/FeedbackItem';

function App(){

    //Objeto de Estilos:
    const HeaderStyles= {
        backgroundColor: '#ed5bad',
        color: 'red'
    }

    return(
        <div className="container">
            {/*props: Atributos de etiqueta de un componente  */}
            <Header 
                bgColor={HeaderStyles.backgroundColor}
                color = {HeaderStyles.color} />
                <FeedbackItem />
                <FeedbackItem />
                <FeedbackItem />
                <FeedbackItem />
        </div>
    )
}

export default App;