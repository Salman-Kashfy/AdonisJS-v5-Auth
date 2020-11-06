import {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'
import Route from '@ioc:Adonis/Core/Route'

export default class Guest {

    protected async authenticate(auth: HttpContextContract['auth'], guards: any[], response: any) {

        for (let guard of guards) {
            if (await auth.use(guard).check()) {
                response.redirect(
                    Route.makeUrl('dashboard.index')
                )
            }
        }
        return true
    }

    public async handle({auth, response}: HttpContextContract, next: () => Promise<void>, customGuards: string[]) {
        // code for middleware goes here. ABOVE THE NEXT CALL
        const guards = customGuards.length ? customGuards : [auth.name];
        await this.authenticate(auth, guards, response);

        // const loggedIn = await auth.use(auth.name).check();
        // if(loggedIn){
        //     console.log(auth.user.name)
        // }

        await next()
    }
}
