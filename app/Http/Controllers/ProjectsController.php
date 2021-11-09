<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class ProjectsController extends Controller
{
    public function show(Project $project)
    {
        return Inertia::render('Project', [
            'project' => $project->only('id', 'title', 'language', 'description'),
        ]);

    }
}
