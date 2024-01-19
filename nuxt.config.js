const axios = require('axios');


export default {
    title:"Buy Mobile Phones Online at Best Prices in India | Accessories | Laptops  - HappiMobiles",
    head: {
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'google-site-verification',
                name: 'google-site-verification',
                content:'A8-v_RS8fjFbLb7M55XNg8MXvGPeRdMvnh-mllqGAHM'
            },
            // {
            //     hid: 'meta-description',
            //     name: 'description',
            //     content:'Buy Mobile Phones & Accessories Online At Lowest Prices In India At Happi mobiles.nearby Happi mobiles showroom with unmatched quality, affordable price, and exciting offers.'
            // }
        ],
        link: [
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,600,700&amp;amp;subset=latin-ext&display=swap'
            },
            {
                rel: 'preconnect',
                href: 'https://d3dfpp6nfjsq5w.cloudfront.net/'
            },
            {
                rel: 'preconnect',
                href: 'https://my.proofsoar.com/'
            },
            {
                rel: 'preconnect',
                href: 'https://d1pf9mdy4w0oq4.cloudfront.net'
            },
            {
                rel: 'preconnect',
                href: 'https://happimobiles.s3.amazonaws.com/'
            },
            {
                rel: 'preconnect',
                href: 'https://happimobiles.s3.ap-south-1.amazonaws.com/'
            },{
                rel: 'preconnect',
                href: 'https://my.proofsoar.com/'
            },
            {
                rel: 'preconnect',
                href: 'https://connect.facebook.net/'
            },

            ]
    },
    // Netlify
    generate: {
        fallback: true
    },
    "builds": [
        {
            "src": "nuxt.config.js",
            "use": "@nuxtjs/vercel-builder",
            "config": {}
        }
    ],
    build: {
        extend(config, { isClient }) {
            // Extend only webpack config for client-bundle
            if (isClient) {
                config.devtool = 'source-map'
            }
        }
    },
    css: [
        'swiper/dist/css/swiper.css',
        '~/static/fonts/Linearicons/Font/demo-files/demo.css',
        '~/static/fonts/font-awesome/css/font-awesome.css',
        '~/static/css/bootstrap.min.css',
        '~/assets/scss/style.scss'
    ],

    plugins: [
        { src: '~plugins/vueliate.js', ssr: false },
        { src: '~/plugins/swiper-plugin.js', ssr: false },
        { src: '~/plugins/axios.js' },
        // {
        //     src: '~/plugins/vue-star-rating.js',
        //     mode: 'client'
        // }
    ],
    preset: '@nuxt/tests-utils',
    buildModules: [
        '@nuxtjs/vuetify',
        '@nuxtjs/style-resources',
        'cookie-universal-nuxt',
        '@nuxtjs/html-validator',
        ['@nuxtjs/google-analytics', {
             id: 'UA-120228239-2'
        }]
    ],
    firebase: {
         config:{
            apiKey: "AIzaSyBlVN-EcemRO8HuBcR62wWlaWIeYtYVAFk",
            authDomain: "happi-vue.firebaseapp.com",
            projectId: "happi-vue",
            storageBucket: "happi-vue.appspot.com",
            messagingSenderId: "76811957052",
            appId: "1:76811957052:web:44f9618257fb3e8fcea439",
            // measurementId: "G-G6TXB5T7X3"
        },
        services:{
            messaging:{
                createServiceWorker: true,
                fcmPublicVapidKey: "BGuWlDnMR53-8DoHh2YpCMtUraaTskwONTmtBKbL4ksEkhM4i2djEcfFEIjbRUJyEqS9RCzd8W--C7eWaDAzbPY"
            },
            performance: true,
            analytics: true,
        }
    },
    //
    styleResources: {
        scss: './assets/scss/env.scss'
    },

    modules: [
        ['nuxt-lazy-load', {
            // These are the default values
            images: true,
            iframes: true,
            native: false,
            directiveOnly: false,
            defaultImage: '/img/placeholder.webp',
        }],
        '@dansmaculotte/nuxt-security',
        '@nuxtjs/robots',
        '@nuxtjs/gtm',
        '@nuxtjs/axios',
        '@nuxt/http',
        // 'nuxt-i18n',
        //'@nuxtjs/firebase',
        '@nuxtjs/sitemap',
        'nuxt-seo',
        'vue-social-sharing/nuxt',
        // '~/modules/elastic-apm',
        // "elastic-apm-node": "^3.27.0",
        '@nuxtjs/recaptcha',
    ],
    serverMiddleware: ['~/middleware/redirect'],
    http: {
        baseURL: 'https://dev-services.happimobiles.com/', // Used as fallback if no runtime config is provided
        publicRuntimeConfig: {
            http: {
                browserBaseURL: 'https://dev-services.happimobiles.com/',
            }
        },
    },
    // cache: {
    //     store: {
    //         type: 'redis',
    //         host: 'localhost',
    //         ttl: 10 * 60,
    //         configure: [
    //             ['maxmemory', '500mb'],
    //         ],
    //     },
    // },
    gtm: {
        enabled: true,
        layer: 'dataLayer',
        scriptId: 'gtm-script',
        scriptDefer: false,
        crossOrigin: false,
        id: 'GTM-TZWWM7B',
        autoInit: true,
        pageTracking: true,
        pageViewEventName: 'nuxtRoute',
        respectDoNotTrack: true,
    },
    seo: {
        // My custom configuration
        baseUrl: 'https://www.happimobiles.com',
        name: 'Happi Mobiles',
        title: 'Buy Mobile Phones | Accessories Online | Buy Mobiles Online at Best Prices in India | Get 2hrs Deliver',
        templateTitle: '%name% - %title%',
        description: 'Buy Mobile Phones | Accessories Online | Buy Mobiles Online at Best Prices in India | Get 2hrs Deliver',
        canonical: 'auto',
        isForcedTrailingSlash: false
    },
    htmlValidator: {
        usePrettier: false,
        failOnError: false,
        options: {
            extends: [
                'html-validate:document',
                'html-validate:recommended',
                'html-validate:standard'
            ],
            rules: {
                'svg-focusable': 'off',
                'no-unknown-elements': 'error',
                'void-style': 'off',
                'no-trailing-whitespace': 'off',
                'require-sri': 'off',
                'attribute-boolean-style': 'off',
                'doctype-style': 'off',
                'no-inline-style': 'off'
            }
        }
    },
    // i18n: {
    //     locales: [
    //         { code: 'en', file: 'en.json' }
    //     ],
    //     lazy: true,
    //     defaultLocale: 'en',
    //     langDir: 'lang/locales/'
    // },
    recaptcha: {
        hideBadge: true,
        siteKey: "6Ld7gKMeAAAAAIqjha1WXxy2Vf_bSC9ydV2Ho30P",
        version:'v2'
    },
    // publicRuntimeConfig: {
    //     elastic: {
    //         apm: {
    //             serverUrl : 'https://59346e6893ca4f21b35f0f6d06868eb4.apm.ap-south-1.aws.elastic-cloud.com',
    //             serviceName : 'happi-app',
    //             usePathAsTransactionName: true, // prevent "GET unknown route" transactions,
    //             secretToken: 'vRMH3xodNgfY73026i',
    //         }
    //     },

    // },
    pwa: {
        manifest: {
            name: 'HappiMobiles',
            lang: 'en',
            useWebmanifestExtension: false,
            start_url:'/',
            theme_color: "#fb9013"
        },
        workboxVersion:{
            workboxVersion:"v-"+new Date().getTime()
        },
        workbox: {
            cacheNames:"v-"+new Date().getTime()
        }
    },
    robots: {
        UserAgent: '*',
        Allow: '/',
        'Sitemap': 'https://www.happimobiles.com/sitemap.xml',
    },
    router: {
        linkActiveClass: '',
        linkExactActiveClass: 'active',
        prefetchLinks: false
    },
    sitemap: {
        hostname: 'https://www.happimobiles.com',
        gzip: true,
        exclude: [
            '/account/**',
            '/admin/**'
        ],
        routes: async () => {
            const { data } = await axios.get('https://dev-services.happimobiles.com/sitemap')
            return data.map((product) => {
                return  {
                    url : `/${product.linker}`,
                    changefreq: "daily",
                    priority: 1,
                    lastmod: `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getUTCDate()}`
                }
            })
        }
    },
    server: {
        port: 4002,
        host: '0.0.0.0'
    }
};

// 2.13.3
// "nuxt-i18n": "^6.3.0",
// "vue-star-rating": "^2.1.0",
