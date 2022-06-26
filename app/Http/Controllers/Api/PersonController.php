<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Person;


class PersonController extends Controller
{
    public function getByString(Request $request)

    {
        $searchString = $request->searchString;
        $people = Person::where('fullname', 'like', '%' . $searchString . '%')->limit(15)->get();

        return $people;
    }

    public function getAllMovies(Request $request)
    {
        $person = Person::findOrFail($request->id);

        $movies = $person->movies;

        return $movies;
    }
}
