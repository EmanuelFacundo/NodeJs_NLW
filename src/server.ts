import { http } from './http'
import './websocket/client'

http.listen(4040, () => console.log("Server is running on port 4040"))