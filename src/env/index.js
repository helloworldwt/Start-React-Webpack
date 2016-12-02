export default class ENV {

}

const envList = {
    dev: {
        apiBaseUrl: "test-api.react-demo.com",
        logTestEnv: true
    },
    test: {
        apiBaseUrl: "test-api.react-demo.com",
        logTestEnv: true
    },
    slave: {
        apiBaseUrl: "slave-api.react-demo.com",
        logTestEnv: false
    },
    prod: {
        apiBaseUrl: "api.react-demo.com",
        logTestEnv: false
    }
};

let currentEnv = 'prod';
if (window && window.env) {
    currentEnv = window.env;
}

ENV.apiBaseUrl = envList[currentEnv].apiBaseUrl;
ENV.logTestEnv = envList[currentEnv].logTestEnv;