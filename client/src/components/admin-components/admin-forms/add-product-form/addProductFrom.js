import { compose } from 'recompose';
import { graphql } from 'react-apollo';

import { addProductMutation  } from './mutations';


export default compose(graphql(addProductMutation ));
