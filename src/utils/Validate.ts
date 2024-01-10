import { UserType } from "../@Types/UserType";

type Error = {
  [key:string]:string
}

function isValidEmail(email:string){
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  )

  if(emailRegex.test(email)){
    return true;
  }else{
    return false;
  }
}

export const Validate = (data:UserType) =>{

  const error : Error = {}

  if(!data.email){
    error['email'] = "Informe o seu email"
  }else if (!isValidEmail(data.email)){
    error['email'] = "Email invalido"
  }

  if(!data.password){
    error['password']= 'Informe uma senha'
  }else if(data.password.length < 6){
    error['password'] = 'Mínimo de 6 caracteres'
  }

  if(!data.confirmPassword){
    error['confirmPassword']= 'Confirme a senha acima'
  }

  if(data.password != data.confirmPassword){
    error['confirmPassword']= 'Coloque a mesma senha'
  }

  return error;
}