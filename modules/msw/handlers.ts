import { http, HttpResponse } from "msw"
import { sleep } from "../../utils/sleep"

export const genHandlers = (domain = "") => {
  return [
    http.get(
      // The "/pets" string is a path predicate.
      // Only the GET requests whose path matches
      // the "/pets" string will be intercepted.
      `${domain}/api/pets`,
      // The function below is a "resolver" function.
      // It accepts a bunch of information about the
      // intercepted request, and decides how to handle it.
      async ({ request, params, cookies }) => {
        await sleep(2000)
        return HttpResponse.json(["Tom", "Jerry", "Spike"])
      },
    ),

    http.get(
      // The "/pets" string is a path predicate.
      // Only the GET requests whose path matches
      // the "/pets" string will be intercepted.
      `${domain}/api/hello`,
      // The function below is a "resolver" function.
      // It accepts a bunch of information about the
      // intercepted request, and decides how to handle it.
      async ({ request, params, cookies }) => {
        await sleep(2000)
        return HttpResponse.json({
          time: Date.now(),
          message: "Hello Mock",
        })
      },
    ),
  ]
}
