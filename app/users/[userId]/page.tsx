import getUser from "@/lib/getUser"
import getUserPosts from "@/lib/getUserPosts"

type Params = {
    params: {
        userId:string
    }
}


export default function UserPage({ params: { userId }} : Params) {
  return (
    <div>page</div>
  )
}
