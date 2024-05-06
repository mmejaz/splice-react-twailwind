<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('site.pages.welcome');
})->name("/");

Route::get('/blogs', function () {
    return view('site.pages.blogs');
})->name("blogs");

Route::get('/services', function () {
    return view('site.pages.services');
})->name("services");

Route::get('/contact-us', function () {
    return view('site.pages.contact-us');
})->name("contact-us");

Route::get('/{any}', function () { return view('app.AppMount'); })->where('any', '.*')->middleware('auth');
