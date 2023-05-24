<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see \craft\config\GeneralConfig
 */

use craft\config\GeneralConfig;
use craft\helpers\App;

$isDev = App::env('CRAFT_ENVIRONMENT') === 'dev';
$isProd = App::env('CRAFT_ENVIRONMENT') === 'production';

$config = GeneralConfig::create()
    ->devMode($isDev)
    ->headlessMode(App::env('HEADLESS_MODE'))
    ->allowedGraphqlOrigins([
        'http://localhost:3000',
        'http://baukasten-headless.test',
        'https://craftcms-baukasten-headless.vercel.app'
    ])
    ->baseCpUrl(App::env('BASE_CP_URL'))
    ->allowUpdates($isDev)
    ->allowAdminChanges($isDev)
    ->enableTemplateCaching(!$isDev)
    ->enableGraphqlCaching(!$isDev)
    ->defaultWeekStartDay(1)
    ->isSystemLive(1)
    ->backupOnUpdate(0)
    ->runQueueAutomatically(1)
    ->cacheDuration(0)
    ->maxRevisions(10)
    ->defaultTokenDuration(86400)
    ->enableCsrfProtection(1)
    ->limitAutoSlugsToAscii(1)
    ->convertFilenamesToAscii(true)
    ->generateTransformsBeforePageLoad(true)
    ->maxCachedCloudImageSize(3000)
    ->maxUploadFileSize('100M')
    ->omitScriptNameInUrls(true)
    ->useEmailAsUsername(false)
    ->usePathInfo(true)
    ->preventUserEnumeration(true)
    ->errorTemplatePrefix('errors/')
    ->defaultSearchTermOptions([
        'subLeft' => true,
        'subRight' => true,
    ])
    ->testToEmailAddress(App::env('TEST_MAIL') ?: null)
    ->aliases([
        '@assetsUrl' => App::env('ASSETS_URL'),
        '@web' => App::env('BASE_CP_URL'),
        '@webroot' => App::env('WEB_ROOT_PATH'),
    ])
    ->allowedFileExtensions(['jpg', 'png', 'jpeg', 'gif', 'svg', 'mp4', 'wov', 'mp3', 'wav', 'pdf', 'zip', 'csv', 'rar'])
    ->omitScriptNameInUrls();

if ($isProd) {
    $config->disabledPlugins([
        'dumper', 'elements-panel', 'blitz-recommendations', 'cp-field-inspect'
    ]);
}

if (!$isProd) {
    $config->disallowRobots();
}

return $config;
