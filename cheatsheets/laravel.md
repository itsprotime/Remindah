---
path: "/laravel"
title: "Laravel"
---

# Laravel

>NOTE: Replace <...> with the expected value stated inside the angle bracket.
><br>Eg., For `composer require --dev <packageName>`, it will be `composer require --dev phpunit/phpunit`

| <ins>Commands</ins> | <ins>Descriptions</ins> |
| --- | --- |
| `laravel new <app_name>` | Will initialize npm inside your project |

## Artisan

| <ins>Commands</ins> | <ins>Descriptions</ins> |
| --- | --- |
| **Initialization** |
| `php artisan key:generate` | Sets the application key. |
| **Development** |
| `php artisan serve` | Serve the application on the PHP development server. |
| **Maintenance Mode** |
| `php artisan down`                                   | Enables maintenance mode. |
| `php artisan down --message="<maintenance_message>"` | Enables maintenance mode with message. <br />Eg., `php artisan down --message="Upgrading Database"` |
| `php artisan down --allow=<ip>`                      | Enables maintenance mode but allows specific IP to access the application. <br />Eg., `php artisan down --allow=127.0.0.1` |
| `php artisan up`                                     | Disables maintenance mode. |
| **Storage** |
| `php artisan storage:link` | Create a symbolic link from "public/storage" to "storage/app/public". It is used to store user-generated files, such as profile avatars, that should be publicly accessible. |
| **Controller Generators** |
| `php artisan make:controller <ControllerName>`               | Create a controller class. <br /> `php artisan make:controller BlogController` |
| `php artisan make:controller <ControllerName> -r`            | Generates a resource controller class. <br /> `php artisan make:controller BlogController -r` |
| `php artisan make:controller <ControllerName> -r -m=<Model>` | Generates a resource controller class route model binding. <br /> `php artisan make:controller BlogController -r -m=Blog` |
| `php artisan make:controller <ControllerName> --api`         | Generates a API resource controller class that excludes the `create` and `edit` methods. <br /> `php artisan make:controller BlogController --api` |
| **Production Optimization** |
| `php artisan config:cache` | This will combine all of the configuration options for your application into a single file which will be loaded quickly by the framework. This should be part of your production deployment routine. |
| `php artisan route:cache`  | Create a route cache file for faster route registration. |
