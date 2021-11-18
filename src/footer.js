import React from "react";
import './styles.css'

class Footer extends React.Component {

    clickear = () => {
        alert ('hellooo motooo')
    }
    render () {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div class="footer col-md-12">
                        <em>
                            dfdefedgeggrg
                        </em>
                        <button id="boton1" onClick= {this.clickear} className="btn btn-danger">haz click aqui</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;