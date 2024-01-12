export type UserType = {
  id?: number,
  email?: string,
  password?:string,
  confirmPassword?:string,
  token?: string
}

export type ContextValues = {
  user:UserType | null | string,
  signIn:(email:string,password:string) => Promise<void>,
  signOut:()=>void,
  signed:boolean,
  loader:boolean,
  setLoader:(value:boolean)=>void
}