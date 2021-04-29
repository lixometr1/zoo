import { Module, VuexModule, Mutation, getModule } from 'vuex-module-decorators'
import { store } from '@/store'
@Module({ dynamic: true, store, name: 'config' })
class ConfigModule extends VuexModule {
  get baseApiUrl() {
    return 'http://18.196.99.104:8000/api'
  }
}
export default getModule(ConfigModule)
