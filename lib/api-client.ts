import createClient, { type Middleware } from 'openapi-fetch'
import type { paths } from '../schema'

class ApiError extends Error {
  statusCode: number
  constructor(message: string, statusCode: number) {
    super(message)
    this.statusCode = statusCode
  }
}

const throwOnError: Middleware = {
  async onResponse({ response }) {
    if (response.status >= 400) {
      const body = response.headers.get('content-type')?.includes('json')
        ? await response.clone().json()
        : await response.clone().text()
      console.log(body)
      throw new ApiError(body?.errorMessage ?? JSON.stringify(body), body?.errorCode ?? 500)
    }
    return undefined
  },
}

const accessToken: string | undefined =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hcmlvQGV4YW1wbGUuY29tIiwiaWQiOiJ1c2VyMV9pZCIsImlhdCI6MTcyNTkxMTUzOCwiZXhwIjoxNzI1OTk3OTM4fQ.6QnLK4TUfjYeuljSmu-KP3QHxqmQG1CXU2Zzn6OvacA'

const authMiddleware: Middleware = {
  async onRequest({ request }) {
    // add Authorization header to every request
    request.headers.set('Authorization', `Bearer ${accessToken}`)
    return request
  },
}

const apiClient = createClient<paths>({
  baseUrl: 'http://localhost:3001',
})

apiClient.use(authMiddleware)
apiClient.use(throwOnError)

export const extractError = (error: unknown) => {
  if (error instanceof ApiError) {
    return { errorMessage: error.message, errorCode: error.statusCode }
  }
  if (error instanceof Error) {
    return { errorMessage: error.message, errorCode: 500 }
  }
  return { errorMessage: JSON.stringify(error), errorCode: 500 }
}

export { apiClient }
