import {createToolbar} from './toolbar.template';
import {$} from '@core/dom'
import {ExcelStateComponent} from '../../core/ExcelStateComponent';
import {defaultStyles} from '../../constants';

export class Toolbar extends ExcelStateComponent {
    static className = 'exsel__toolbar'

    constructor($root, options) {
      super($root, {
        name: 'Toolbar',
        listeners: ['click'],
        subscribe: ['currentStyles'],
        ...options
      })
    }

    prepare() {
      // начальное состояние
      this.initState(defaultStyles)
    }


    get template() {
      return createToolbar(this.state)
    }


    toHTML() {
      return this.template
    }

    storeChanged(changes) {
      this.setState(changes.currentStyles)
    }


    onClick(event) {
      const $target = $(event.target)
      // $target.addClass('active')
      if ($target.data.type === 'button') {
        const value = JSON.parse($target.data.value)
        this.$emit('toolbar:applyStyle', value)

        // const key = Object.keys(value)[0]
        // this.setState({[key]: value[key]})
        // console.log(this.state);
      }
    }
}
