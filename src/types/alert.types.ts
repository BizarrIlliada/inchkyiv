export interface IAlert {
  severity?: 'info' | 'error' | 'success' | 'warn',
  time?: number,
  title?: string,
  sticky?: boolean,
  message: string,
}

export interface IUniqueAlert extends IAlert {
  id: symbol,
}
