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

/**
 *
 * @export
 * @interface User
 */
export interface User {
    /**
     *
     * @type {string}
     * @memberof User
     */
    email: string;
    /**
     *
     * @type {string}
     * @memberof User
     */
    password?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof User
     */
    roles: Array<string>;
    /**
     *
     * @type {string}
     * @memberof User
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof User
     */
    surname?: string;
}
