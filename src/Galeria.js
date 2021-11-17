import React from 'react';
import './styles.css'

class Galeria extends React.Component {
    render () {
        return (
            <div className = "container">
                <div className ="row">
                    <div className="col-md-4">
                        <img className="img-fluid" src= "https://www.lugaresturisticosdeargentina.com/wp-content/uploads/2019/05/10-Mejores-Paisajes-de-Argentina.jpg" alt = "img01" />
                    </div>
                    <div className="col-md-4">
                        <img className="img-fluid" src= "https://www.horizonteparalelo.com/wp-content/uploads/2018/10/perito_moreno.jpg" alt = "img01" />
                    </div>
                    <div className="col-md-4">
                        <img className="img-fluid" src= "https://px.cdn.lanueva.com/072020/1593917420896.jpg" alt = "img01" />
                    </div>
                    <div className="col-md-4">
                        <img className="img-fluid" src= "https://px.cdn.lanueva.com/072020/1593917420896.jpg" alt = "img01" />
                    </div>
                    <div className="col-md-4">
                        <img className="img-fluid" src= "https://lonelyplanetes.cdnstatics2.com/sites/default/files/inline-images/argentina_ushuaia_tierradelfuego_shutterstock_736022755_saiko3p_shutterstock_1.jpg" alt = "img01" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Galeria;