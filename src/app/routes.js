'use strict';
export default {
    component: require('./App').default,
    childRoutes: [
        {
            path: '/',
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    cb(null, require('../pages/index/index').default)
                })
            }
        }
    ]
}
