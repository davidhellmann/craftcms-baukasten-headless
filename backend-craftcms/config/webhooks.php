<?php
use craft\helpers\App;
$isDev = App::env('CRAFT_ENVIRONMENT') === 'dev';

return [
    'disableAllWebhooks' => (bool)$isDev,
    'maxDepth' => 5,
    'maxAttempts' => 1,
    'initialDelay' => 300,
    'retryDelay' => 60,
    'purgeDuration' => 604800, // 7 days
];
