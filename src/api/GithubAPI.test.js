import {handleResponse} from './GithubAPI'

describe('handleResponse', () => {
    test('ok response returns json object', async()=> {
        const response = {
            ok: true,
            json: () => Promise.resolve('ok')
        }
        const result = await handleResponse(response)
        expect(result).toBe('ok')
    })

    test('faulty response returns rejected promise', async()=> {
        expect.assertions(1);

        const response = {
            ok: false,
            status: Math.floor(Math.random() * 1000)
        }
        handleResponse(response).catch(error => 
            expect(error).toBeDefined())
    })
})