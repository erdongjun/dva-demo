

import * as Home from '../../services/Home';
export default {
  namespace : "home",
	state: {
	    list: [],
	    total: null,
	  },
  reducers:{
  	save(state, { payload: { data} }) {
      return { ...state, list, total };
    },
  },
  effects:{
  	*fetch({}, { call, put }) {
      const { data, headers } = yield call(Home.fetch);
      yield put({ type: 'save', payload: { data } });
    },
  },
  subscriptions:{
  	setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname == '/Home') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  }
}
