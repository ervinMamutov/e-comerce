import Product from '../models/product.js';

const productControllers = {
  // @desc Fetch all products
  // @route GET/api/products
  // @access Public
  getProducts: async (req, res) => {
    try {
      const products = await Product.find({});
      if (!products) {
        return res.status(400).json({
          success: false,
          message: 'Products not found',
        });
      } else {
        return res.status(200).json({
          success: true,
          products,
        });
      }
    } catch (err) {
      res.status(400).json({
        success: false,
        message: err || 'Products not found',
      });
    }
  },

  // @desc Fetch a product
  // @route GET/api/products/:id
  // @access Public
  getProductById: async (req, res) => {
    const id = req.params.id;
    try {
      const productById = await Product.findById(id);
      if (productById) {
        return res.status(200).json({
          success: true,
          productById,
        });
      } else {
        return res.status(404).json({
          success: false,
          message: 'Product not found',
        });
      }
    } catch (err) {
      res.status(404);
      console.error(err);
    }
  },
};

export default productControllers;
