<?php
use craft\helpers\App;
return [
    // All environments
    '*' => [
        // The public-facing name of the plugin
        'pluginName' => 'SEOmatic',

        // Should SEOmatic render metadata?
        'renderEnabled' => true,

        // Should SEOmatic render frontend sitemaps?
        'sitemapsEnabled' => true,

        // Should sitemaps be regenerated automatically?
        'regenerateSitemapsAutomatically' => true,

        // Should sitemaps be submitted to search engines automatically whenever there are changes?
        'submitSitemaps' => true,

        // Should items where the entry URL doesn't match the canonical URL be excluded?
        'excludeNonCanonicalUrls' => false,


        // Should the homepage be included in the generated Breadcrumbs JSON-LD?
        'includeHomepageInBreadcrumbs' => true,

        // Should SEOmatic add to the http response headers?
        'headersEnabled' => true,

        // Whether the environment should be manually set, or automatically determined
        'manuallySetEnvironment' => false,


        // The server environment, either `production`, `staging`, or `dev`
        'environment' => App::env('CRAFT_ENVIRONMENT'),

        // Should SEOmatic display the SEO Preview sidebar?
        'displayPreviewSidebar' => true,

        // Should SEOmatic add a Social Media Preview Target?
        'socialMediaPreviewTarget' => true,

        // The social media platforms that should be displayed in the SEO Preview sidebar
        'sidebarDisplayPreviewTypes' => [
            'google',
            'twitter',
            'facebook'
        ],

        // Should SEOmatic display the SEO Analysis sidebar?
        'displayAnalysisSidebar' => true,

        // If `devMode` is on, prefix the <title> with this string
        'devModeTitlePrefix' => '&#x1f6a7; ',

        //  Prefix the Control Panel <title> with this string
        'cpTitlePrefix' => '&#x2699; ',

        // If `devMode` is on, prefix the Control Panel <title> with this string
        'devModeCpTitlePrefix' => '&#x1f6a7;&#x2699; ',

        // The separator character to use for the `<title>` tag
        'separatorChar' => '|',

        // The max number of characters in the `<title>` tag
        'maxTitleLength' => 70,

        // The max number of characters in the `<meta name="description">` tag
        'maxDescriptionLength' => 155,

        // Should Title tags be truncated at the max length, on word boundaries?
        'truncateTitleTags' => false,

        // Should Description tags be truncated at the max length, on word boundaries?
        'truncateDescriptionTags' => true,

        // Site Groups define logically separate sites
        'siteGroupsSeparate' => true,

        // Whether to dynamically include the hreflang tags
        'addHrefLang' => true,

        // Whether to dynamically include the `x-default` hreflang tags
        'addXDefaultHrefLang' => true,

        // Whether to dynamically include hreflang tags on paginated pages
        'addPaginatedHreflang' => true,

        // Whether to include a Content Security Policy "nonce" for inline
        // CSS or JavaScript. Valid values are 'header' or 'tag' for how the CSP
        // should be included. c.f.:
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#Unsafe_inline_script
        'cspNonce' => '',

        // Fixed Content Security Policies to be added before any CSP nonces
        'cspScriptSrcPolicies' => [
            0 => [
                'policy' => "'self'",
            ],
        ],

        // SEO [best practices](https://www.searchenginejournal.com/google-dont-mix-noindex-relcanonical/262607)
        // are to have `canonical` links not appear on pages that are not intended to be indexed. SEOmatic does
        // this for you by default, but you can override that behavior with this setting
        'alwaysIncludeCanonicalUrls' => false,

        // Should the Canonical URL be automatically lower-cased?
        'lowercaseCanonicalUrl' => true,

        // Should the meta generator tag and X-Powered-By header be included?
        'generatorEnabled' => true,

        // SEOmatic uses the Craft `siteUrl` to generate the external URLs.  If you
        // are using it in a non-standard environment, such as a headless GraphQL or
        // ElementAPI server, you can override what it uses for the `siteUrl` below.
        'siteUrlOverride' => '',


        // The duration of the SEOmatic meta cache in seconds. Null means always cached until explicitly broken
        // If devMode is on, caches last 30 seconds.
        'metaCacheDuration' => null,


        // Determines whether the meta container endpoint should be enabled for anonymous frontend access
        'enableMetaContainerEndpoint' => false,

        // Determines whether the JSON-LD endpoint should be enabled for anonymous frontend access
        'enableJsonLdEndpoint' => false,

        // SeoElementInterface[] The default SeoElement type classes
        'defaultSeoElementTypes' => [],

        // string[] URL params that are allowed to be considered part of the unique URL used for the metadata cache
        'allowedUrlParams' => []
    ],

    'production' => [],
    'staging' => [],
    'dev' => [],
];
