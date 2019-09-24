<?php

namespace Laratube;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model as ModelBase;

class Model extends ModelBase
{
    public $increment = false;

    protected static function boot(){
        parent::boot();

        static::creating(function ($model){
            $model->{$model->getKeyName()} = (string) Str::uuid();
        });
    }
}
