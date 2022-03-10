// @ts-nocheck
import { Component } from 'react';
import { ApplyPluginsType } from 'umi';
import dva from 'dva';
// @ts-ignore
import createLoading from 'D:/workspace/hackathon/bfront-master/node_modules/dva-loading/dist/index.esm.js';
import { plugin, history } from '../core/umiExports';
import ModelGlobal0 from 'D:/workspace/hackathon/bfront-master/src/models/global.ts';
import ModelLogin1 from 'D:/workspace/hackathon/bfront-master/src/models/login.ts';
import ModelMenu2 from 'D:/workspace/hackathon/bfront-master/src/models/menu.ts';
import ModelSetting3 from 'D:/workspace/hackathon/bfront-master/src/models/setting.ts';
import ModelUser4 from 'D:/workspace/hackathon/bfront-master/src/models/user.ts';
import ModelModel5 from 'D:/workspace/hackathon/bfront-master/src/pages/account/center/model.ts';
import ModelModel6 from 'D:/workspace/hackathon/bfront-master/src/pages/account/settings/model.ts';
import ModelModel7 from 'D:/workspace/hackathon/bfront-master/src/pages/enhancer/index/model.ts';
import ModelModel8 from 'D:/workspace/hackathon/bfront-master/src/pages/user/register/model.ts';

let app:any = null;

export function _onCreate(options = {}) {
  const runtimeDva = plugin.applyPlugins({
    key: 'dva',
    type: ApplyPluginsType.modify,
    initialValue: {},
  });
  app = dva({
    history,
    
    ...(runtimeDva.config || {}),
    // @ts-ignore
    ...(typeof window !== 'undefined' && window.g_useSSR ? { initialState: window.g_initialProps } : {}),
    ...(options || {}),
  });
  
  app.use(createLoading());
  (runtimeDva.plugins || []).forEach((plugin:any) => {
    app.use(plugin);
  });
  app.model({ namespace: 'global', ...ModelGlobal0 });
app.model({ namespace: 'login', ...ModelLogin1 });
app.model({ namespace: 'menu', ...ModelMenu2 });
app.model({ namespace: 'setting', ...ModelSetting3 });
app.model({ namespace: 'user', ...ModelUser4 });
app.model({ namespace: 'model', ...ModelModel5 });
app.model({ namespace: 'model', ...ModelModel6 });
app.model({ namespace: 'model', ...ModelModel7 });
app.model({ namespace: 'model', ...ModelModel8 });
  return app;
}

export function getApp() {
  return app;
}

/**
 * whether browser env
 * 
 * @returns boolean
 */
function isBrowser(): boolean {
  return typeof window !== 'undefined' &&
  typeof window.document !== 'undefined' &&
  typeof window.document.createElement !== 'undefined'
}

export class _DvaContainer extends Component {
  constructor(props: any) {
    super(props);
    // run only in client, avoid override server _onCreate()
    if (isBrowser()) {
      _onCreate()
    }
  }

  componentWillUnmount() {
    let app = getApp();
    app._models.forEach((model:any) => {
      app.unmodel(model.namespace);
    });
    app._models = [];
    try {
      // 释放 app，for gc
      // immer 场景 app 是 read-only 的，这里 try catch 一下
      app = null;
    } catch(e) {
      console.error(e);
    }
  }

  render() {
    let app = getApp();
    app.router(() => this.props.children);
    return app.start()();
  }
}
