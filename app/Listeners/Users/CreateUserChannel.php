<?php

namespace Laratube\Listeners\Users;

use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class CreateUserChannel
{
    
    public function handle($event)
    {
        $event->user->channel()->create([
            'name'  => $event->user->name,
        ]);
    }
}
