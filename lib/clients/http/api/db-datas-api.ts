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
import { BASE_PATH, RequestArgs, BaseAPI } from '../base'
/**
 * DbDatasApi - axios parameter creator
 * @export
 */
export const DbDatasApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
         *
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
    dBDataControllerCreateData: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = '/api/db/datas/createData'
      const localVarUrlObj = globalImportUrl.parse(localVarPath, true)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
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
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
    dBDataControllerSubscribeDataEvents: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = '/api/db/datas/subscribeDataEvents'
      const localVarUrlObj = globalImportUrl.parse(localVarPath, true)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
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
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
    dBDataControllerUnsubscribeDataEvents: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = '/api/db/datas/unsubscribeDataEvents'
      const localVarUrlObj = globalImportUrl.parse(localVarPath, true)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
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
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
    dBDataControllerUpdateData: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = '/api/db/datas/updateData'
      const localVarUrlObj = globalImportUrl.parse(localVarPath, true)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
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
    }
  }
}

/**
 * DbDatasApi - functional programming interface
 * @export
 */
export const DbDatasApiFp = function (configuration?: Configuration) {
  return {
    /**
         *
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
    async dBDataControllerCreateData (options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
      const localVarAxiosArgs = await DbDatasApiAxiosParamCreator(configuration).dBDataControllerCreateData(options)
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
    async dBDataControllerSubscribeDataEvents (options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
      const localVarAxiosArgs = await DbDatasApiAxiosParamCreator(configuration).dBDataControllerSubscribeDataEvents(options)
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
    async dBDataControllerUnsubscribeDataEvents (options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
      const localVarAxiosArgs = await DbDatasApiAxiosParamCreator(configuration).dBDataControllerUnsubscribeDataEvents(options)
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
    async dBDataControllerUpdateData (options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
      const localVarAxiosArgs = await DbDatasApiAxiosParamCreator(configuration).dBDataControllerUpdateData(options)
      return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
        const axiosRequestArgs = { ...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url }
        return axios.request(axiosRequestArgs)
      }
    }
  }
}

/**
 * DbDatasApi - factory interface
 * @export
 */
export const DbDatasApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
  return {
    /**
         *
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
    dBDataControllerCreateData (options?: any): AxiosPromise<string> {
      return DbDatasApiFp(configuration).dBDataControllerCreateData(options).then(request => request(axios, basePath))
    },
    /**
         *
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
    dBDataControllerSubscribeDataEvents (options?: any): AxiosPromise<string> {
      return DbDatasApiFp(configuration).dBDataControllerSubscribeDataEvents(options).then(request => request(axios, basePath))
    },
    /**
         *
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
    dBDataControllerUnsubscribeDataEvents (options?: any): AxiosPromise<string> {
      return DbDatasApiFp(configuration).dBDataControllerUnsubscribeDataEvents(options).then(request => request(axios, basePath))
    },
    /**
         *
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
    dBDataControllerUpdateData (options?: any): AxiosPromise<string> {
      return DbDatasApiFp(configuration).dBDataControllerUpdateData(options).then(request => request(axios, basePath))
    }
  }
}

/**
 * DbDatasApi - interface
 * @export
 * @interface DbDatasApi
 */
export interface DbDatasApiInterface {
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DbDatasApiInterface
     */
    dBDataControllerCreateData(options?: any): AxiosPromise<string>;

    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DbDatasApiInterface
     */
    dBDataControllerSubscribeDataEvents(options?: any): AxiosPromise<string>;

    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DbDatasApiInterface
     */
    dBDataControllerUnsubscribeDataEvents(options?: any): AxiosPromise<string>;

    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DbDatasApiInterface
     */
    dBDataControllerUpdateData(options?: any): AxiosPromise<string>;

}

/**
 * DbDatasApi - object-oriented interface
 * @export
 * @class DbDatasApi
 * @extends {BaseAPI}
 */
export class DbDatasApi extends BaseAPI implements DbDatasApiInterface {
  /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DbDatasApi
     */
  public dBDataControllerCreateData (options?: any) {
    return DbDatasApiFp(this.configuration).dBDataControllerCreateData(options).then(request => request(this.axios, this.basePath))
  }

  /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DbDatasApi
     */
  public dBDataControllerSubscribeDataEvents (options?: any) {
    return DbDatasApiFp(this.configuration).dBDataControllerSubscribeDataEvents(options).then(request => request(this.axios, this.basePath))
  }

  /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DbDatasApi
     */
  public dBDataControllerUnsubscribeDataEvents (options?: any) {
    return DbDatasApiFp(this.configuration).dBDataControllerUnsubscribeDataEvents(options).then(request => request(this.axios, this.basePath))
  }

  /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DbDatasApi
     */
  public dBDataControllerUpdateData (options?: any) {
    return DbDatasApiFp(this.configuration).dBDataControllerUpdateData(options).then(request => request(this.axios, this.basePath))
  }
}
