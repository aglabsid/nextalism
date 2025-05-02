declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_SITE_URL: string
    readonly DATABASE_URL: string
  }
}
