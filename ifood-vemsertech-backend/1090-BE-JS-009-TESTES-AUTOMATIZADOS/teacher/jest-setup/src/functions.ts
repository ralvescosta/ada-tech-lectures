export function brEmailValidator(email: string): boolean {
  if(!email.includes('@')) {
    return false
  }

  if(!email.endsWith(".br")) {
    return false
  }

  return true
}

export function cpfMask(cpf: string): string {
  if(cpf.includes(".")) {
    throw new Error('the cpf should be in the raw format')
  }
  
  if(cpf.length != 11) {
    throw new Error('cpf should have 11 elements')  
  }

  //000.000.000-00
  return `${cpf.substring(0, 3)}.${cpf.substring(3, 6)}.${cpf.substring(6, 9)}-${cpf.substring(9, 11)}`
}