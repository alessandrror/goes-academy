import './bootstrap'
import Alpine from 'alpinejs'
import data from './started'

window.Alpine = Alpine

Alpine.data('data', data)

Alpine.start()