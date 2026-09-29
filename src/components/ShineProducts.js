import { ListProducts } from "./ListProducts"


export const ShineProducts = () => {
    return (
        <div className="container-fluid sectionTab">
            <div className="row">
                <div className="col text-start">
                    <span className="spanHeaderTitle"> Produtos em destaque</span>
                </div>
            </div>
            <ListProducts/>
        </div>
    )
}