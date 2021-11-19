<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class ComingSoonController extends Controller
    {
        public function __invoke()
        {
            return Inertia::render('ComingSoon');
        }
    }
