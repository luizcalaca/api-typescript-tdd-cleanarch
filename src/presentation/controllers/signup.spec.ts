import { SignUpController } from './signup'
describe('', () => {
  test('should return 400 if no name is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        email: 'foo@example.com',
        password: 'password',
        passwordConfirmation: 'password'
      }
    }
    const htttResponse = sut.handle(httpRequest)
    expect(htttResponse.statusCode).toBe(400)
    expect(htttResponse.body).toEqual(new Error('Missing params: name'))
  })

  test('should return 400 if no email is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        name: 'name',
        password: 'password',
        passwordConfirmation: 'password'
      }
    }
    const htttResponse = sut.handle(httpRequest)
    expect(htttResponse.statusCode).toBe(400)
    expect(htttResponse.body).toEqual(new Error('Missing params: email'))
  })
})
