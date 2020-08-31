import { Errors } from './Errors'
import { registerService } from '~/services/registerService.client'

export const errors = new Errors()

registerService('errors', errors)
