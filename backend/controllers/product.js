import Product from '../models/product.js';

const productControllers = {
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
  getProductById: async (req, res) => {
    try {
      const id = req.params.id;
      const productById = await Product.findById(id);
      if (!productById) {
        return res.status(400).json({
          success: false,
          message: `Product by id ${id} not found`,
        });
      } else {
        return res.status(200).json({
          success: true,
          productById,
        });
      }
    } catch (err) {
      res.status(400).json({
        success: false,
        message: `Product by ${id} not found`,
      });
    }
  },
};

export default productControllers;
