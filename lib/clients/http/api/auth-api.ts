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

import * as globalImportUrl from 'url'
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios'
import { Configuration } from '../configuration'
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, RequestArgs, BaseAPI, RequiredError } from '../base'
// @ts-ignore
import { AuthJwtLoginResponseDto, AuthLoginDto, AuthUserDto } from '../models'
/**
 * AuthApi - axios parameter creator
 * @export
 */
export const AuthApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
         *
         * @param {AuthLoginDto} authLoginDto
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
    authControllerJwtLogin: async (authLoginDto: AuthLoginDto, options: any = {}): Promise<RequestArgs> => {
      // verify required parameter 'authLoginDto' is not null or undefined
      if (authLoginDto === null || authLoginDto === undefined) {
        throw new RequiredError('authLoginDto', 'Required parameter authLoginDto was null or undefined when calling authControllerJwtLogin.')
      }
      const localVarPath = '/api/auth/jwtLogin'
      const localVarUrlObj = globalImportUrl.parse(localVarPath, true)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      localVarHeaderParameter['Content-Type'] = 'application/json'

      localVarUrlObj.query = { ...localVarUrlObj.query, ...localVarQueryParameter, ...options.query }
      // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
      delete localVarUrlObj.search
      const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }
      const needsSerialization = (typeof authLoginDto !== 'string') || localVarRequestOptions.headers['Content-Type'] === 'application/json'
      localVarRequestOptions.data = needsSerialization ? JSON.stringify(authLoginDto !== undefined ? authLoginDto : {}) : (authLoginDto || '')

      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      }
    },
    /**
         *
         * @param {AuthLoginDto} authLoginDto
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
    authControllerLocalLogin: async (authLoginDto: AuthLoginDto, options: any = {}): Promise<RequestArgs> => {
      // verify required parameter 'authLoginDto' is not null or undefined
      if (authLoginDto === null || authLoginDto === undefined) {
        throw new RequiredError('authLoginDto', 'Required parameter authLoginDto was null or undefined when calling authControllerLocalLogin.')
      }
      const localVarPath = '/api/auth/localLogin'
      const localVarUrlObj = globalImportUrl.parse(localVarPath, true)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      localVarHeaderParameter['Content-Type'] = 'application/json'

      localVarUrlObj.query = { ...localVarUrlObj.query, ...localVarQueryParameter, ...options.query }
      // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
      delete localVarUrlObj.search
      const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }
      const needsSerialization = (typeof authLoginDto !== 'string') || localVarRequestOptions.headers['Content-Type'] === 'application/json'
      localVarRequestOptions.data = needsSerialization ? JSON.stringify(authLoginDto !== undefined ? authLoginDto : {}) : (authLoginDto || '')

      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      }
    },
    /**
         *
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
    authControllerLocalLogout: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = '/api/auth/localLogout'
      const localVarUrlObj = globalImportUrl.parse(localVarPath, true)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      localVarUrlObj.query = { ...localVarUrlObj.query, ...localVarQueryParameter, ...options.query }
      // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
      delete localVarUrlObj.search
      const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }

      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      }
    },
    /**
         *
         * @param {AuthLoginDto} authLoginDto
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
    authControllerRegister: async (authLoginDto: AuthLoginDto, options: any = {}): Promise<RequestArgs> => {
      // verify required parameter 'authLoginDto' is not null or undefined
      if (authLoginDto === null || authLoginDto === undefined) {
        throw new RequiredError('authLoginDto', 'Required parameter authLoginDto was null or undefined when calling authControllerRegister.')
      }
      const localVarPath = '/api/auth/register'
      const localVarUrlObj = globalImportUrl.parse(localVarPath, true)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      localVarHeaderParameter['Content-Type'] = 'application/json'

      localVarUrlObj.query = { ...localVarUrlObj.query, ...localVarQueryParameter, ...options.query }
      // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
      delete localVarUrlObj.search
      const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }
      const needsSerialization = (typeof authLoginDto !== 'string') || localVarRequestOptions.headers['Content-Type'] === 'application/json'
      localVarRequestOptions.data = needsSerialization ? JSON.stringify(authLoginDto !== undefined ? authLoginDto : {}) : (authLoginDto || '')

      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      }
    }
  }
}

/**
 * AuthApi - functional programming interface
 * @export
 */
export const AuthApiFp = function (configuration?: Configuration) {
  return {
    /**
         *
         * @param {AuthLoginDto} authLoginDto
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
    async authControllerJwtLogin (authLoginDto: AuthLoginDto, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthJwtLoginResponseDto>> {
      const localVarAxiosArgs = await AuthApiAxiosParamCreator(configuration).authControllerJwtLogin(authLoginDto, options)
      return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
        const axiosRequestArgs = { ...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url }
        return axios.request(axiosRequestArgs)
      }
    },
    /**
         *
         * @param {AuthLoginDto} authLoginDto
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
    async authControllerLocalLogin (authLoginDto: AuthLoginDto, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthUserDto>> {
      const localVarAxiosArgs = await AuthApiAxiosParamCreator(configuration).authControllerLocalLogin(authLoginDto, options)
      return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
        const axiosRequestArgs = { ...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url }
        return axios.request(axiosRequestArgs)
      }
    },
    /**
         *
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
    async authControllerLocalLogout (options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
      const localVarAxiosArgs = await AuthApiAxiosParamCreator(configuration).authControllerLocalLogout(options)
      return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
        const axiosRequestArgs = { ...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url }
        return axios.request(axiosRequestArgs)
      }
    },
    /**
         *
         * @param {AuthLoginDto} authLoginDto
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
    async authControllerRegister (authLoginDto: AuthLoginDto, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthUserDto>> {
      const localVarAxiosArgs = await AuthApiAxiosParamCreator(configuration).authControllerRegister(authLoginDto, options)
      return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
        const axiosRequestArgs = { ...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url }
        return axios.request(axiosRequestArgs)
      }
    }
  }
}

/**
 * AuthApi - factory interface
 * @export
 */
export const AuthApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
  return {
    /**
         *
         * @param {AuthLoginDto} authLoginDto
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
    authControllerJwtLogin (authLoginDto: AuthLoginDto, options?: any): AxiosPromise<AuthJwtLoginResponseDto> {
      return AuthApiFp(configuration).authControllerJwtLogin(authLoginDto, options).then(request => request(axios, basePath))
    },
    /**
         *
         * @param {AuthLoginDto} authLoginDto
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
    authControllerLocalLogin (authLoginDto: AuthLoginDto, options?: any): AxiosPromise<AuthUserDto> {
      return AuthApiFp(configuration).authControllerLocalLogin(authLoginDto, options).then(request => request(axios, basePath))
    },
    /**
         *
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
    authControllerLocalLogout (options?: any): AxiosPromise<void> {
      return AuthApiFp(configuration).authControllerLocalLogout(options).then(request => request(axios, basePath))
    },
    /**
         *
         * @param {AuthLoginDto} authLoginDto
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
    authControllerRegister (authLoginDto: AuthLoginDto, options?: any): AxiosPromise<AuthUserDto> {
      return AuthApiFp(configuration).authControllerRegister(authLoginDto, options).then(request => request(axios, basePath))
    }
  }
}

/**
 * AuthApi - interface
 * @export
 * @interface AuthApi
 */
export interface AuthApiInterface {
    /**
     *
     * @param {AuthLoginDto} authLoginDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApiInterface
     */
    authControllerJwtLogin(authLoginDto: AuthLoginDto, options?: any): AxiosPromise<AuthJwtLoginResponseDto>;

    /**
     *
     * @param {AuthLoginDto} authLoginDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApiInterface
     */
    authControllerLocalLogin(authLoginDto: AuthLoginDto, options?: any): AxiosPromise<AuthUserDto>;

    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApiInterface
     */
    authControllerLocalLogout(options?: any): AxiosPromise<void>;

    /**
     *
     * @param {AuthLoginDto} authLoginDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApiInterface
     */
    authControllerRegister(authLoginDto: AuthLoginDto, options?: any): AxiosPromise<AuthUserDto>;

}

/**
 * AuthApi - object-oriented interface
 * @export
 * @class AuthApi
 * @extends {BaseAPI}
 */
export class AuthApi extends BaseAPI implements AuthApiInterface {
  /**
     *
     * @param {AuthLoginDto} authLoginDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
  public authControllerJwtLogin (authLoginDto: AuthLoginDto, options?: any) {
    return AuthApiFp(this.configuration).authControllerJwtLogin(authLoginDto, options).then(request => request(this.axios, this.basePath))
  }

  /**
     *
     * @param {AuthLoginDto} authLoginDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
  public authControllerLocalLogin (authLoginDto: AuthLoginDto, options?: any) {
    return AuthApiFp(this.configuration).authControllerLocalLogin(authLoginDto, options).then(request => request(this.axios, this.basePath))
  }

  /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
  public authControllerLocalLogout (options?: any) {
    return AuthApiFp(this.configuration).authControllerLocalLogout(options).then(request => request(this.axios, this.basePath))
  }

  /**
     *
     * @param {AuthLoginDto} authLoginDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
  public authControllerRegister (authLoginDto: AuthLoginDto, options?: any) {
    return AuthApiFp(this.configuration).authControllerRegister(authLoginDto, options).then(request => request(this.axios, this.basePath))
  }
}
