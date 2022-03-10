import { userCount, repairCount } from './service';

const Model = {
  namespace: 'index',
  state: {
    userCount:{},
    repairCount:{}
  },
  effects: {
    *getUserData(_, { call, put }) {
      const response = yield call(userCount);
      yield put({
        type: 'saveUserCount',
        payload: response.data,
      });
    },

    *getRepairData(_, { call, put }) {
      const response = yield call(repairCount);
      yield put({
        type: 'saveRepairCount',
        payload: response.data
      });
    },
  },

  reducers: {
    saveUserCount(state, { payload }) {
      return {
        ...state,
        userCount: payload,
      };
    },
    saveRepairCount(state, { payload }) {
      return {
        ...state,
        repairCount: payload,
      };
    },
  },
};

export default Model;
