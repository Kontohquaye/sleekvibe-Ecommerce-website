import { Link, useLoaderData } from "react-router-dom";
import "../pages/styles/home.css";

const Home = () => {
  const data = useLoaderData();

  return (
    <div className="Home">
      {/* search area */}
      <div className="search-area">
        <p>Look nice, have it your way. change the look in your wardrobe</p>
        <div className="input">
          <ion-icon name="search-outline"></ion-icon>
          <input type="text" placeholder="currently not working 😌" />
          <button>
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </button>
        </div>
      </div>
      {/* content */}
      <div className="content">
        {data &&
          data.map((product) => (
            <Link to="/" key={product.id}>
              {/* image section */}
              <div className="image-box">
                <img src={product.images[0]} alt="" />
              </div>
              <div className="info">
                {/* name and stock */}
                <div className="row-one">
                  <div className="product-name">{product.name}</div>
                  <div className="stock">{product.stock} left</div>
                </div>
                <div className="row-two">
                  <div className="product-price">${product.price}</div>
                  <button>Add to cart</button>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Home;
