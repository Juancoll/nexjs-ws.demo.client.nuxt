import { Component, Vue } from 'vue-property-decorator'
import { registerService } from '../registerService.client'

@Component({})
export class Events extends Vue {}

export * from './EventKeys'
export const events = new Events()
registerService('events', events)
