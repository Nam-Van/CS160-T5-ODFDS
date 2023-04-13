import express from "express"
import orderRoutes from "./routes/orders.js"
import authRoutes from "./routes/auth.js"
import driverRoutes from "./routes/drivers.js"
import restaurantRoutes from "./routes/restaurants.js"
import cookieParser from "cookie-parser"

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use("/server/orders", orderRoutes)
app.use("/server/auth", authRoutes)
app.use("/server/drivers", driverRoutes)
app.use("/server/restaurants", restaurantRoutes)


app.listen(8800, ()=>{
    console.log("Connected to backend!")
})