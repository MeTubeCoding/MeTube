// AddObjectPage.tsx
import Header from '../components/Header'
import CreateChannel from '../components/CreateChannel'
import React from 'react';
import Button from '../components/Button';

export default function ChannelCreationPage () {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <>
         <Header
            heading="Create a channel"
            paragraph="Already have an account ? "
            linkName="Login"
            linkUrl="/login"
            />
    </>
)

}

// function AddObject() {
//   const handleButtonClick = async () => {
//     const response = await fetch('/api/add-object', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ key: 'value' }),
//     });

//     if (response.ok) {
//       alert('Objet ajouté avec succès!');
//     } else {
//       alert('Erreur lors de l\'ajout de l\'objet.');
//     }
//   };

//   return (
//     <div className="AddObjectPage">
//       <h1>Ajouter un objet à la base de données</h1>
//       <Button onClick={handleButtonClick} />
//     </div>
//   );
// }

// export default AddObject;