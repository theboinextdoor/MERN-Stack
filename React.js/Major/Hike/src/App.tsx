import { Routes, Route } from 'react-router-dom'

import { Home } from './_root/pages'
import SignInForm from './_auth/form/SignInForm'
import SignUpForm from './_auth/form/SignUpForm'
import AuthLayout from './_auth/AuthLayout'
import RootLayout from './_root/RootLayout'
import { Toaster } from "@/components/ui/toaster"




import './globals.css'

const App = () => {
    return (
        <main className='flex h-screen'>
            <Routes>

                {/* public routes */}
                <Route element={<AuthLayout />}>
                    <Route path="/sign-in" element={<SignInForm />} />
                    <Route path="/sign-up" element={<SignUpForm />} />
                </Route>


                {/* private routes */}
                <Route element={<RootLayout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>

          <Toaster />
        </main>
    )
}

export default App