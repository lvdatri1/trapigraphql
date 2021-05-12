module.exports = {
    query: `
      restaurantsCount(where: JSON): Int!
    `,
    resolver: {
        Query: {
            restaurantsCount: {
                description: 'Return the count of restaurants',
                resolverOf: 'application::restaurant.restaurant.count',
                resolver: async (obj, options, ctx) => {
                    return await strapi.api.restaurant.services.restaurant.count(options.where || {});
                },
            },
        },
    },
};