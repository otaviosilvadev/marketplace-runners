export const Header = () => {
    return (
        <div className="container-fluid headerSpec" style={{width: "80%"}}>
            <div className="tab">
                <div className="row">
                    <div className="col-3">
                        <img src="/images/logo.png" className="logo" alt="" />
                    </div>
                    <div className="col-6 headerItems">
                        <div className="tab"><span className="spanHeader"><a className="link" href="#home">Início</a></span>
                        <span className="spanHeader"><a className="link" href="#list">Produtos</a></span>
                        <span className="spanHeader"><a className="link" href="#contact">Contato</a></span></div>
                        
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>
        </div>
    )
}