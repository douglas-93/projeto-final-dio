const style = {
    width: "18rem",
};

const Products = (props) => {
    const { product } = props;
    return product.map((item) => {
        return (
            <div className="card col-3 m-3" style={style}>
                <img
                    className="card-img-top mt-3"
                    src={item.image}
                    alt="Imagem de capa do card"
                />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">R$ {item.price.toFixed(2)}</p>
                </div>
            </div>
        );
    });
};

export default Products;
