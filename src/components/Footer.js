import 'bootstrap-icons/font/bootstrap-icons.css';
export const Footer = () => {
    return (
        <div className="container-fluid sectionTab" id="contact">
            <div className="row">
                <div className="col text-start">
                    <span className="spanHeaderTitle">Contato</span><br/>
                </div>
            </div>
            <div className="tab">
                <div className="row">
                    <div className="col text-start spanText">
                        <i className="bi bi-instagram  fs-4"></i> Aquarela Presentes e Papelaria<br/>
                        <i className="bi bi-geo-alt fs-4"></i> Av. Poços de Caldas 102<br/>
                        <i className="bi bi-clock fs-4"></i> Seg-Sex 09h00 as 18h00. Sáb das 09h00 as 15h00.
                    </div>
                </div>
            </div>
        </div>
    )
}