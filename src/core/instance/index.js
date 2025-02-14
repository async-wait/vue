import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

initMixin(Vue)  // 将_init方法挂载到Vue.prototype上
stateMixin(Vue)  // 
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue) // 将_render方法挂载到Vue.prototype上

export default Vue
