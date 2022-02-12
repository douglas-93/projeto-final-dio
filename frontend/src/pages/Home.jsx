import NavTop from "../components/NavTop";
import Products from "../components/Products";

const img = {image: require("../images/whisky.png")}

const Home = () => {
    const products = [
        {
            name: "Irish",
            price: 20.0,
            image: img.image,
        },
        {
            name: "Irish",
            price: 30.0,
            image: img.image,
        },
        {
            name: "Irish",
            price: 40.0,
            image: img.image,
        },
    ];
    return (
        <>
            <NavTop />
            <div className="container">
                <div className="row">
                    <Products product={products} />
                </div>
            </div>
        </>
    );
};

export default Home;
