import React, { useState } from 'react';

interface ChannelFormData {
  user_id: string;
  name: string;
  nametag: string;
  description: string;
  country: string;
}

const CreateChannel: React.FC = () => {
  const [formData, setFormData] = useState<ChannelFormData>({
    user_id: '',
    name: '',
    nametag: '',
    description: '',
    country: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Channel created:', formData);
    try {
      const response = await fetch('/api/channels', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Channel created:', data);
      } else {
        // throw new Error(Error creating channel: ${response.statusText});
        console.error('Error creating channel:', response.statusText);
      }
    } catch (error) {
      // console.error('Error creating channel:', error.message);
      console.error('Error creating channel:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Remplacez "your_user_id" par l'ID utilisateur actuel, ou gérez la sélection de l'utilisateur */}
      <input type="hidden" name="user_id" value="1234" />
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Nametag:
        <input type="text" name="nametag" value={formData.nametag} onChange={handleChange} required />
      </label>
      <label>
        Description:
        <input type="text" name="description" value={formData.description} onChange={handleChange} />
      </label>
      <label>
        Country:
        <input type="text" name="country" value={formData.country} onChange={handleChange} />
      </label>
      <button type="submit">Create Channel</button>
    </form>
  );
};

export default CreateChannel;