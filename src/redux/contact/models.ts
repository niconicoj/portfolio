interface Error {
  status : boolean,
  message?: string | boolean
}

export interface Contact {
  name: string,
  mail: string,
  company?: string,
  message: string,
  errors: ContactError
  fetching: boolean
}

export interface ContactError {
  name: Error,
  mail: Error,
  company?: Error,
  message: Error,
  fetching: Error
}