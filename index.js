// http://rest.learncode.academy/
import store from './src/store/create.store';

import {
  fetchUsers,
} from './src/constants/async.actions';

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchUsers());