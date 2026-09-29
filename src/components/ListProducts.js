import products from "../base/products.json";

export const ListProducts = () => {
    return (
        <div className="sectionTab" id="list">
            <div className="row">
                {products.map((item, index) => {
                    return (
                        <div className="col-sm-4 col-lg-3" key={index}>
                            <img
                                src={item.imgSrc}
                                className="imageShine"
                                alt={item.productName}
                            />
                            <span className="spanHeader spanProductName"> {item.productName}</span>
                            <br/>
                            <span className="spanHeader spanCost">
                                {/* R$ {item.cost.toString().replace(".", ",")}0 */}
                            </span>
                        </div>
                    );
                })}
            </div>
            
        </div>
    );
};