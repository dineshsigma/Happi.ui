const apm = require('elastic-apm-node');
const defu = require('defu');

module.exports = function() {
    this.nuxt.hook('ready', async(nuxt) => {
        const runtimeConfig = defu(nuxt.options.privateRuntimeConfig, nuxt.options.publicRuntimeConfig);
        const config = (runtimeConfig.elastic && runtimeConfig.elastic.apm) || {};

        if (!config.serverUrl) {
            return;
        }

        if (!apm.isStarted())  {
            await apm.start(config);

            // Now explicitly require the modules we want APM to hook into, as otherwise
            // they would not be instrumented.
            //
            // Docs: https://www.elastic.co/guide/en/apm/agent/nodejs/master/custom-stack.html
            // Modules: https://github.com/elastic/apm-agent-nodejs/tree/master/lib/instrumentation/modules
            require('http');
            require('http2');
            require('https');
        }
    });
}
