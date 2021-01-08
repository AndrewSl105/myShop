import { compose } from 'recompose';
import { graphql } from 'react-apollo';

import { productsQuery } from './queries';


export default compose(graphql(productsQuery));
