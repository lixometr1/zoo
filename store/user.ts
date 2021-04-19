import { Module, VuexModule, Mutation, getModule } from 'vuex-module-decorators'
import { store } from '@/store'
@Module({ dynamic: true, store, name: 'user' })
class UserModule extends VuexModule {

}
export default getModule(UserModule)
