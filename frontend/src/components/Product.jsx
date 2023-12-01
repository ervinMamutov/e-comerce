import { NavLink, Outlet } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from './Rating';
import PropTypes from 'prop-types';

const Product = ({ product }) => {
  console.log(product);
  return (
    <Card className="my-3 p-3 rounded">
      <NavLink to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </NavLink>

      <Card.Body>
        <NavLink to={`product/${product._id}`}>
          <Card.Title as="div" className="product-title">
            {product.name}
          </Card.Title>
        </NavLink>
        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
      <Outlet />
    </Card>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    numReviews: PropTypes.number.isRequired,
  }),
};

export default Product;
