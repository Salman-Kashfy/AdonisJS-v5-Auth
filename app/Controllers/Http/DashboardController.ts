// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class DashboardController {
    public async index({view}){
        return view.render('dashboard/index',{title: 'My Custom Data'})
    }
}
