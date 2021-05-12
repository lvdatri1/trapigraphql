
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  findOneAPI: async (ctx) => {

    console.log('heello ');
    ctx.send('hello');
    return null;
  }
};
