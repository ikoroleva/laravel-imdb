<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Search a person</title>
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    <script src="{{ mix('js/dropdown-search.js') }}" defer></script>
</head>
<body>
    <div class="container">
    <form class='search-form'>
        <div id="dropdown_search">
            {{-- <select class="search" name="search" id=""> --}}
            <input class="search" type="text" name="search" list="" placeholder="Select someone" autocomplete="off">
            <datalist class="datalist" id="person-names">

            </datalist>
        {{-- </select> --}}
            
        </div>
    </form>
    <div class="movies">
        <ul class="movies_list">

        </ul>


    </div>
</div>

</body>
</html>