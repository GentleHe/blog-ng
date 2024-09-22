export function getLoginUser(): string | null {
  console.log('111');
  return localStorage.getItem('loginUser')
}

export function setLoginUser(userName: string | null): void {
  if (userName) {
    localStorage.setItem('loginUser', userName)
  } else {
    localStorage.removeItem('loginUser')
  }

}

