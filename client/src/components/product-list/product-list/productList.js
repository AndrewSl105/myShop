import React from 'react';
//import ProdItem from '../components/prodItem';
import { connect } from 'react-redux';
import Pagination from '../../pagination/pagination';
import { paginationPipe } from '../../pagination-pipe/paginationPipe';
import { requestApiData } from '../../../redux/actions';
import { bindActionCreators } from 'redux';
//import { orderByFilter } from '../components/orderByFilter';
///import AsideFilters from '../components/asideFilters';
import ProductItem from '../product-item/productItem'
import './product-list.sass'
import Spiner from '../../spiner/spiner';
class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      currentPage: 1,
      perPage: 8,
    };
  }


  componentDidMount() {
    this.props.requestApiData();
  }

  onPrev = () => {
    const updatedState = { ...this.state };
    updatedState.currentPage = this.state.currentPage - 1;
    this.setState(updatedState);
  };

  onNext = () => {
    this.setState({
      ...this.state,
      currentPage: this.state.currentPage + 1,
    });
  };

  goPage = (n) => {
    this.setState({
      ...this.state,
      currentPage: n,
    });
  };

  render() {
    let products = this.props.products;
    if (!products.length) {
      return <Spiner />
    }
    console.log(products)
    return (
        <div className="product-list-cont">
          <div className="product-list">
            {paginationPipe(products, this.state).map((element) => {
              const name = element.name;
              const price = element.price;
              const id = element.sku;
              const gallery = element.gallery;
              return <ProductItem 
                name={name}
                price={price}
                key={element.sku}
                gallery={gallery}
                id={id} />
            })}
          </div>
          <Pagination
            totalItemsCount={products.length}
            currentPage={this.state.currentPage}
            perPage={this.state.perPage}
            pagesToShow={this.state.pagesToShow}
            onGoPage={this.goPage}
            onPrevPage={this.onPrev}
            onNextPage={this.onNext}
          />
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.dataReducer,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
