export interface IEnvironment {
    mode: string;
    i18n: {
        locale: string;
        fallbackLocal: string;
    };
    wsapi: {
        url: string;
        path: string;
        nsp: string;
    };
    defaults: {
        user: {
            email: string;
            password: string;
        };
    };
}

export class Environment {
    vars: IEnvironment;
    constructor () {
      this.vars = {} as IEnvironment
    }

    create (): void {
      this.vars = {
        mode: this.var('NUXT_APP_MODE'),
        i18n: {
          locale: this.var('NUXT_APP_I18N_LOCALE'),
          fallbackLocal: this.var('NUXT_APP_I18N_FALLBACK_LOCALE')
        },
        wsapi: {
          url: this.var('NUXT_APP_WSAPI_URL'),
          path: this.var('NUXT_APP_WSAPI_PATH'),
          nsp: this.var('NUXT_APP_WSAPI_NSP')
        },
        defaults: {
          user: {
            email: this.var('NUXT_APP_DEFAULT_USER_EMAIL'),
            password: this.var('NUXT_APP_DEFAULT_USER_PASSWORD')
          }
        }
      }
    }

    check (): void {
      // this.checkExists('NUXT_APP_MODE')
      // this.checkExists('NUXT_APP_I18N_LOCALE')
      // this.checkExists('NUXT_APP_I18N_FALLBACK_LOCALE')
    }

    print (): void {
      // console.log('[Environment Variables]', this.vars);
    }

    private checkExists (name: string): void {
      if (!process.env[name]) {
        throw new Error(`Environment variable '${name}' not found`)
      }
    }

    private var (name: string): string {
      return process.env[name] as string
    }
}
