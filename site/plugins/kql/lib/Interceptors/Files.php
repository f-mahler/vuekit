<?php

namespace Kirby\Kql\Interceptors;

class Files extends Collection
{

    const CLASS_ALIAS = 'files';

    public function allowedMethods(): array
    {
        return array_merge(
            parent::allowedMethods(),
            [
                'template'
            ]
        );
    }

}
