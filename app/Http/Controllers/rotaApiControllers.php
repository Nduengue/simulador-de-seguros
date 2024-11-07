<?php

namespace App\Http\Controllers;


 abstract class rotaApiControllers{
    protected static $api_url = 'https://api-simulator.mtapp.ao/';
    public static function getUrl()
    {
        return self::$api_url;
    }
}       