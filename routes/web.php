<?php

use Illuminate\Support\Facades\Route;
use Barryvdh\DomPDF\Facade\Pdf;
//use Barryvdh\Snappy\Facades\SnappyPdf as PDF;

//use PDF;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {


    $pdf = PDF::loadView('global',);
    return $pdf->stream('invoice.pdf');
    //return view('global');
});