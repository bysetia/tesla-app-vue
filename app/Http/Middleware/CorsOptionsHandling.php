<?php

namespace App\Http\Middleware;

use Closure;

class CorsOptionsHandling
{   
    public function handle($request, Closure $next)
    {
        $response = $next($request);

        // Menangani permintaan untuk Sanctum CSRF cookie
        if ($request->is('sanctum/csrf-cookie')) {
            $response->headers->set('Access-Control-Allow-Origin', 'http://www.localhost:8001');
            $response->headers->set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
            $response->headers->set('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization, X-Requested-With');
            $response->headers->set('Access-Control-Allow-Credentials', 'true');
        }

        // Menangani permintaan dari origin yang berbeda (CORS)
        // Harus diletakkan dalam blok kondisi Sanctum
        $response->headers->set('Access-Control-Allow-Origin', 'http://www.localhost:8001');
        $response->headers->set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        $response->headers->set('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization, X-Requested-With');
        $response->headers->set('Access-Control-Allow-Credentials', 'true');

        return $response;
    }
}
