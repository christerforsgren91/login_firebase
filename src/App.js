import React from 'react'
import { Container } from 'react-bootstrap'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import ProfilePage from './components/ProfilePage'
import { AuthProvider } from './context/AuthContext'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <Container
      className='d-flex align-items-center justify-content-center'
      style={{ minHeight: '100vh' }}
    >
      <div className='w-100' style={{ maxWidth: '400px' }}>
        <BrowserRouter>
          <AuthProvider>
            <Switch>
              <Route exact path='/' component={ProfilePage} />
              <Route path='/signup' component={SignUp} />
              <Route path='/login' component={LogIn} />
            </Switch>
          </AuthProvider>
        </BrowserRouter>
      </div>
    </Container>
  )
}

export default App
