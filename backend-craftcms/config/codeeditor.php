<?php

use nystudio107\codeeditor\autocompletes\CraftApiAutocomplete;
use nystudio107\codeeditor\autocompletes\SectionShorthandFieldsAutocomplete;
use nystudio107\codeeditor\autocompletes\TwigLanguageAutocomplete;

return [
        // Whether to allow anonymous access be allowed to the codeeditor/autocomplete/index endpoint
        'allowFrontendAccess' => false,
        // Whether to allow frontend templates access to the `codeeditor/codeEditor.twig` Twig template
        'allowTemplateAccess' => true,
        // The default autocompletes to use for the default `CodeEditor` field type
        'defaultCodeEditorAutocompletes' => [
            CraftApiAutocomplete::class,
            TwigLanguageAutocomplete::class,
            SectionShorthandFieldsAutocomplete::class,
        ]
    ];
