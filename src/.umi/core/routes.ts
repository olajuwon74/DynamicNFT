// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from 'D:/workspace/bfront-master/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';
import LoadingComponent from '@/components/PageLoading/index';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__BlankLayout' */'D:/workspace/hackathon/bfront-master/src/layouts/BlankLayout'), loading: LoadingComponent}),
    "routes": [
      {
        "path": "/user",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__UserLayout' */'D:/workspace/hackathon/bfront-master/src/layouts/UserLayout'), loading: LoadingComponent}),
        "routes": [
          {
            "path": "/user",
            "redirect": "/user/login",
            "exact": true
          },
          {
            "name": "login",
            "icon": "smile",
            "path": "/user/login",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__login' */'D:/workspace/hackathon/bfront-master/src/pages/user/login'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "register-result",
            "icon": "smile",
            "path": "/user/register-result",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__register-result' */'D:/workspace/hackathon/bfront-master/src/pages/user/register-result'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "register",
            "icon": "smile",
            "path": "/user/register",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__register' */'D:/workspace/hackathon/bfront-master/src/pages/user/register'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'D:/workspace/hackathon/bfront-master/src/pages/404'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__BasicLayout' */'D:/workspace/hackathon/bfront-master/src/layouts/BasicLayout'), loading: LoadingComponent}),
        "Routes": [
          "src/pages/Authorized"
        ],
        "routes": [
          {
            "path": "/",
            "redirect": "/enhancer/index",
            "exact": true
          },
          {
            "path": "/enhancer",
            "icon": "table",
            "name": "enhancer",
            "routes": [
              {
                "name": "index",
                "icon": "smile",
                "path": "/enhancer/index",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__enhancer__index' */'D:/workspace/hackathon/bfront-master/src/pages/enhancer/index'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "name": "list",
                "icon": "smile",
                "path": "/enhancer/list",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__enhancer__list' */'D:/workspace/hackathon/bfront-master/src/pages/enhancer/list'), loading: LoadingComponent}),
                "exact": true
              }
            ]
          },
          {
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'D:/workspace/hackathon/bfront-master/src/pages/404'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
