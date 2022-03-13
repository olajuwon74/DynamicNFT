import { Reducer, Effect } from 'umi';

import { query } from '@/services/menu';
import { MenuDataItem } from '@ant-design/pro-layout';

// 数据格式接口
export interface MenuModelState {
  menuData: MenuDataItem[];
}

// model接口
export interface MenuModelType {
  namespace: 'menu';
  state: MenuModelState;
  effects: {
    getMenuData: Effect;
  };
  reducers: {
    saveMenuData: Reducer<MenuModelState>;
  };
}

// model实现
const MenuModel: MenuModelType = {
  // 命令空间
  namespace: 'menu',

  // 存放值的地方
  state: {
    menuData: [],
  },

  // 与后台交互，处理数据逻辑的地方
  effects: {
    *getMenuData(_, { call, put }) {
      const response = yield call(query);
      // 保存菜单数据
      yield put({
        type: 'saveMenuData',
        payload: response.data,
      });
    },
  },

  // 保存菜单数据
  reducers: {
    saveMenuData(state, { payload }) {
      return {
        ...state,
        menuData: payload  || []
      };
    },
  },
};

export default MenuModel;
