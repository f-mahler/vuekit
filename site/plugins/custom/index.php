<?php

Kirby::plugin('fm-a/custom', [
    'fieldMethods' => [
        'toLabel' => function($field) {
          $value = $field->value;
          return '<span class="category-label" data-category="'. $value .'">' . $value . '</span>';
        },
    ]
]);
