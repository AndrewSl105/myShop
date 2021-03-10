const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLBoolean, GraphQLArray } = graphql;
const Products = require('../models/product');
const productsFromDrop = require('../models/productDrop');




const RootProductType = new GraphQLObjectType({
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


const ProductDrop = new GraphQLObjectType({
	name: 'ProductDrop',
	fields: () => ({
	  id: { type: GraphQLID },
	  sku: { type: new GraphQLNonNull(GraphQLString) },
	  name: { type: new GraphQLNonNull(GraphQLString) },
	  price: { type: new GraphQLNonNull(GraphQLInt) },
	  category: { type: new GraphQLNonNull(GraphQLString) },
	  vendor: { type: GraphQLString },
	  model: { type: GraphQLString },
	  gallery: {type:  GraphQLArray,
		resolve: (el) => {}
	  },
	  color: { type: GraphQLString },
	  weight: { type: GraphQLString},
	  country: { type: GraphQLString },
	  sizes: { type: GraphQLArray },
	}),
});




const Mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		addProduct: {
			type: RootProductType,
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
			type: RootProductType,
			args: { id: { type: GraphQLID } },
			resolve(parent, { id }) {
				return Products.findByIdAndRemove(id);
			}
		},
	},
	name: "MutationForDrop"
});

const Query = new GraphQLObjectType({
	name: 'Query',
	fields: {
		product: {
			type: RootProductType,
			args: { id: { type: GraphQLID } },
			resolve(parent, { id }) {
				return Products.findById(id);
			},
		},
		products: {
			type: new GraphQLList(RootProductType),
			//args: { name: { type: GraphQLString } },
			resolve(parent, args) {
				return Products.find({});
			}
		},
	},
	name: "dropQuery",
	fields: {
		productDrop: {
			type: ProductDrop,
			args: { id: { type: GraphQLID } },
			resolve() {
				return productsFromDrop.find({});
			},
		},
	}
});

module.exports = new GraphQLSchema({
	query: Query,
	mutation: Mutation,
});
