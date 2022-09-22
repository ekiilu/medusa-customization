import { Router } from "express"

export default () => {
  const router = Router()

  router.get("/hello-world", (req, res) => {
    res.json({
      message: "WHAT IN THE WORLD IS GOING!"
    })
  })


  router.get("/foood", (req, res) => {
    res.json({
      message: "I WANT FOOD"
    })
  })

  return router;
}