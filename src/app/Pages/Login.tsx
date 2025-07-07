import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useState } from "react"


type loginProps = {
  onLogin : (username:string, room:string) => void
};

export default function Login({onLogin}: loginProps){
  const [username,setUsername] = useState("")
  const [room,setRoom] = useState("")

  const passCred = (e: React.FormEvent) =>{
    console.log('working')
    e.preventDefault()
    onLogin(username.trim(),room.trim())
  }

  return(
    <div className="flex items-center justify-center w-200">
      <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Welcome To Ants Colony</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">username</Label>
              <Input
                onChange={e=>setUsername(e.target.value)}
                type="text"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label >Ants Room</Label>
              <Input
              onChange={e=>setRoom(e.target.value)}
              type="text" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button onClick={passCred} className="w-full">
          Join
        </Button>
        <Button variant="outline" className="w-full">
          Create Room
        </Button>
      </CardFooter>
    </Card>
    </div>
  )
}