<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

/* class rotaApiControllers extends Controller
{
    public static function getUrl()
    {
        // local
        $api_url = 'https://api-simulator.mtapp.ao/';
        // servidor
        // $api_url = 'http://0.0.0.0:8008/';
        return $api_url;
    }
}
 */

 abstract class rotaApiControllers{
    protected static $api_url = 'https://api-simulator.mtapp.ao/';
    public static function getUrl()
    {
        return self::$api_url;
    }
}       
 