export class UnexpectError extends Error {
  constructor () {
    super('Algo de errado aconteceu. Tente novamente em breve.')
    this.name = 'UnexpectError'
  }
}
