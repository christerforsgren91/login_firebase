import React, { useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import { useHistory } from 'react-router-dom'

const ProfilePage = () => {
  const { currentUser, logout } = useAuth('')
  const [error, setError] = useState('')
  const history = useHistory()

  async function handleLogOut() {
    setError('')

    try {
      await logout()
      history.pushState('/login')
    } catch {
      setError('Utloggning misslyckades')
    }
  }

  return (
    <>
      <Card>
        <Card.Body className='text-center mb-4'>
          <h2>Din Profil</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        <Button variant='link' onClick={handleLogOut}>
          Logga Ut
        </Button>
      </div>
    </>
  )
}

export default ProfilePage
