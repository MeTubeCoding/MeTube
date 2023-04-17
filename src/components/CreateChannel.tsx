import React, { useState } from 'react'
import axios from 'axios'

interface ChannelFormData {
  user_id: string
  name: string
  nametag: string
  description: string
  country: string
}

const CreateChannel: React.FC = () => {
  const [formData, setFormData] = useState<ChannelFormData>({
    user_id: '',
    name: '',
    nametag: '',
    description: '',
    country: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await axios.post('/api/channels', formData)
      console.log('Channel created:', response.data)
    } catch (error) {
      console.error('Error creating channel:', error.message)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Remplacez "your_user_id" par l'ID utilisateur actuel, ou gérez la sélection de l'utilisateur */}
      <input type='hidden' name='user_id' value='your_user_id' />
      <label>
        Name:
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Nametag:
        <input
          type='text'
          name='nametag'
          value={formData.nametag}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Description:
        <input
          type='text'
          name='description'
          value={formData.description}
          onChange={handleChange}
        />
      </label>
      <label>
        Country:
        <input
          type='text'
          name='country'
          value={formData.country}
          onChange={handleChange}
        />
      </label>
      <button type='submit'>Create Channel</button>
    </form>
  )
}

export default CreateChannel
