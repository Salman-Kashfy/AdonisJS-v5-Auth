/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.on('/').render('welcome');

Route.group(() => {
    Route.get('register', 'AuthController.register');
    Route.post('create_user', 'AuthController.create-user');
    Route.on('login').render('auth/login');
    Route.post('/login', 'AuthController.login');
}).middleware('guest')

Route.group(() => {
    Route.get('dashboard', 'DashboardController.index').as('dashboard.index');
}).middleware('auth')