import {DomListener} from '@core/DomListener'

export class ExcelComponent extends DomListener {
  // Возвращает шаблон компонента
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
    this.emitter = options.emitter
    this.subscribe = options.subscribe || []
    this.store = options.store
    this.unsubscribers = []
    // this.storeSub = null
    this.prepare()
  }
  // настройка компонента до init
  prepare() {

  }
  // возвращает шаблон компонента
  toHTML() {
    return ''
  }

  // уведомление слушателей про событие event
  $emit(event, ...args) {
    this.emitter.emit(event, ...args)
  }

  // подписка на событие event
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn)
    this.unsubscribers.push(unsub)
  }

  $dispatch(action) {
    this.store.dispatch(action)
  }
  // Сюда приходят изменения по тем полям на которые мы подписались
  storeChanged() {

  }

  isWatching(key) {
    return this.subscribe.includes(key)
  }
  // $subscribe(fn) {
  //   this.storeSub = this.store.subscribe(fn)
  //   // sub.unsub
  // }

  // инициализация компонента
  // добавление DOM слушателей
  init() {
    this.initDOMListeners()
  }
  // удаление компонента
  // чистка слушателей
  destroy() {
    this.removeDOMListeners()
    this.unsubscribers.forEach(unsub => unsub())
    // this.storeSub.unsubscribe()
  }
}
