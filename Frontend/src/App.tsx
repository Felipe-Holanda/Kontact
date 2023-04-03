import MakeRoutes from "./routes"
import { Toaster } from "react-hot-toast"
import { UserProvider } from "./contexts/user.context"
import { ContactProvider } from "./contexts/contact.context"


function App() {
  return (
    <>
      <UserProvider>
        <ContactProvider>
          <Toaster
            position="top-right"
            reverseOrder={false}
          />
          <MakeRoutes />
        </ContactProvider>
      </UserProvider>
    </>
  )
}

export default App
