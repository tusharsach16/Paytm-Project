import { Button } from "./button";

interface AppbarProps {
  user?: {
    name?: string | null;
  },
  onSignin: any,
  onSignout: any
}

export const Appbar = ({ user, onSignin, onSignout } : AppbarProps) => {
  return (
    <div className="flex flex-row justify-between bg-blue-200 items-center p-3">
      <div>
        PayTM
      </div>
      <div>
        <Button onClick={user ? onSignout : onSignin}>{ user ?  "Logout" : "Login" } </Button>
      </div>
    </div>
  )
}