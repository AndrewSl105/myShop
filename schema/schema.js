const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLBoolean } = graphql;
const Products = require('../models/product');

const ProductType = new GraphQLObjectType({
	name: 'Product',
	fields: () => ({
	  id: { type: GraphQLID },
	  name: { type: new GraphQLNonNull(GraphQLString) },
	  description: { type: new GraphQLNonNull(GraphQLString) },
	  quantity: { type: new GraphQLNonNull(GraphQLInt) },
	  image: { type: new GraphQLNonNull(GraphQLString) },
	  size: { type: new GraphQLNonNull(GraphQLString) },
	  price: { type: new GraphQLNonNull(GraphQLInt) },
	}),
  });

const Mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		addProduct: {
			type: ProductType,
			args: {
				name: { type: new GraphQLNonNull(GraphQLString) },
				description: { type: new GraphQLNonNull(GraphQLString) },
				quantity: { type: new GraphQLNonNull(GraphQLInt) },
				image: { type: new GraphQLNonNull(GraphQLString) },
				size: { type: new GraphQLNonNull(GraphQLString) },
				price: { type: new GraphQLNonNull(GraphQLInt) },
			},
			resolve(parent, args) {
				const product = new Products({
					name: args.name,
					description: args.description,
					quantity: args.quantity,
					image: args.image,
					size: args.size,
					price: args.price	
				});
				return product.save();
			},
		},
		deleteProduct: {
			type: ProductType,
			args: { id: { type: GraphQLID } },
			resolve(parent, { id }) {
				return Products.findByIdAndRemove(id);
			}
		},
	}
});

const Query = new GraphQLObjectType({
	name: 'Query',
	fields: {
		product: {
			type: ProductType,
			args: { id: { type: GraphQLID } },
			resolve(parent, { id }) {
				return Products.findById(id);
			},
		},
		products: {
			type: new GraphQLList(ProductType),
			//args: { name: { type: GraphQLString } },
			resolve(parent, args) {
				return Products.find({});
			}
		},
	}
});

module.exports = new GraphQLSchema({
	query: Query,
	mutation: Mutation,
});
