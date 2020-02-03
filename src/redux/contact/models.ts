type Error = {
  status : boolean,
  message?: string | boolean
}

export type Contact = {
  name: string,
  mail: string,
  company?: string,
  message: string,
  errors: ContactError
  fetching: boolean
}

export type ContactError = {
  name: Error,
  mail: Error,
  company?: Error,
  message: Error,
  fetching: Error
}