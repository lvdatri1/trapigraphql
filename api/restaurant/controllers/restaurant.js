
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  findOneAPI: async (ctx) => {

    console.log('heello ');
    var c = await strapi.query('restaurant').count({ name: "new name" });
    console.log('here is c:', c);
    ctx.send('hello');
    return null;
  }
};
