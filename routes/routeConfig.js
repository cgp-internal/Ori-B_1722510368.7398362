module.exports = (app, productRouter) => {
  app.use('/products', productRouter);
};