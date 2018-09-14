export interface Vacaciones{
  titulo:string,
  solicitante:string,
  lista:Elemento[],
  fechaI:any,
  key$?:string
}

export interface Elemento{
  fechaV:any,
  lugar:string
}
