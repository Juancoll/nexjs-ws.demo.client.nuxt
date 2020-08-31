import { Configuration, DefaultApi, DbDatasApi, DbUsersApi, AuthApi, TestApi } from '@/lib/clients/http'
import { AxiosResponse } from 'axios'
import { AuthUserDto } from '@/lib/clients/http/models/auth-user-dto'
import { AuthJwtLoginResponseDto } from '@/lib/clients/http/models'
import { registerService } from '../registerService.client'

export class HttpApi {
    public default: DefaultApi;
    public auth: AuthApi;
    public dbDatas: DbDatasApi;
    public dbUsers: DbUsersApi;
    public test: TestApi;

    private configuration: Configuration;

    public set url (value: string | undefined) {
      this.configuration.basePath = value
    }

    public get url (): string | undefined {
      return this.configuration.basePath
    }

    constructor (url: string) {
      this.configuration = new Configuration({ basePath: url })
      this.auth = new AuthApi(this.configuration)
      this.default = new DefaultApi(this.configuration)
      this.dbDatas = new DbDatasApi(this.configuration)
      this.dbUsers = new DbUsersApi(this.configuration)
      this.test = new TestApi(this.configuration)
    }

    async localLogin (email: string, password: string): Promise<AxiosResponse<AuthUserDto>> {
      this.configuration.baseOptions = {
        withCredentials: true
      }
      const response = await this.auth.authControllerLocalLogin({
        email,
        password
      })
      this.configuration.username = email
      this.configuration.password = password

      return response
    }

    async localLogout (): Promise<void> {
      await this.auth.authControllerLocalLogout()
      this.configuration.baseOptions = {
        withCredentials: false
      }
    }

    async jwtLogin (email: string, password: string): Promise<AxiosResponse<AuthJwtLoginResponseDto>> {
      const response = await this.auth.authControllerJwtLogin({
        email,
        password
      })
      this.configuration.baseOptions = {
        headers: { Authorization: `bearer ${response.data.token}` },
        withCredentials: true
      }

      return response
    }

    jwtLogout (): void {
      if (this.configuration &&
            this.configuration.baseOptions &&
            this.configuration.baseOptions.headers &&
            this.configuration.baseOptions.headers.Authorization
      ) {
        delete this.configuration.baseOptions.headers.Authorization
        this.configuration.baseOptions.withCredentials = false
      }
    }

    public setToken (token?: string): void {
      if (token) {
        this.configuration.baseOptions = {
          headers: { Authorization: `bearer ${token}` },
          withCredentials: true
        }
      } else {
        this.jwtLogout()
      }
    }
}

console.log('create httpapi')
export const httpapi = new HttpApi('http://localhost:3000')
registerService('httpapi', httpapi)
