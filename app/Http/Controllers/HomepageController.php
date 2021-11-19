<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class HomepageController extends Controller
    {
            public function __invoke()
        {
            return Inertia::render('Home');
        }
    }
