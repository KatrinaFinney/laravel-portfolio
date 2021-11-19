<?php

namespace App\Http\Controllers;

use Inertia\Inertia;


class ProjectsController extends Controller
{
    public function index()
    {
        $projects = Project::active()
            ->orderById()
            ->get()
            ->only('id', 'title', 'description','language');

        return Inertia::render('Projects', [
            'projects' => $projects
        ]);
    }
}
