import { SignIn } from '@Screens/Auth/SignIn'
import { NativeBaseProvider } from 'native-base'
const App = () => {
  return (
    <NativeBaseProvider>
      <SignIn />
    </NativeBaseProvider>
  )
}

export { App }
