// tslint:disable
/**
 * nexjs-ws.demo-project.server-nestjs
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AuthUserDto } from './auth-user-dto'

/**
 *
 * @export
 * @interface AuthJwtLoginResponseDto
 */
export interface AuthJwtLoginResponseDto {
    /**
     *
     * @type {string}
     * @memberof AuthJwtLoginResponseDto
     */
    token: string;
    /**
     *
     * @type {AuthUserDto}
     * @memberof AuthJwtLoginResponseDto
     */
    user: AuthUserDto;
}
