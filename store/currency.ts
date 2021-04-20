import { Module, VuexModule, Mutation, getModule } from 'vuex-module-decorators'
import { store } from '@/store'
@Module({ dynamic: true, store, name: 'currency' })
class CurrencyModule extends VuexModule {
  get currency() {
    return 'грн'
  }
}
export default getModule(CurrencyModule)
