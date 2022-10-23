import React from 'react'
import Card from './card'

function Landing() {
  return (
    <div className='bg-[#f0f0f0]'>
        <h1 className='font-bold text-3xl text-center mt-24 mr-16'>Cours</h1>
        <div className='flex flex-row justify-center'>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        </div>
        <div className='flex flex-row justify-center'>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        </div>
        <div className='bg-white flex  justify-center h-screen'>
<h1 className='mt-12 font-bold text-3xl m-5'>Demande de bourse</h1>
<div className='flex flex-col'>
<textarea name="bourse" id="bourse" cols="30" rows="10" className='mt-12 bg-gray-200 rounded-lg shadow-xl h-96 p-5' placeholder='Votre demande '></textarea>
<button className='bg-[#8400ff] text-white font-bold w-96 h-12 mt-12 m-5 rounded-lg'>Envoyer</button>
</div>
 </div>

<div className='flex justify-center h-screen '>
    <div className='flex flex-col'>
<h1 className='text-3xl mt-12'>Idée</h1>
<input type="text" className='mt-8 w-96 h-12 px-5' placeholder="Nom de l'idée" />
<textarea name="idee" id="idee" cols="30" rows="10" placeholder='Votre idée'  className='mt-4 rounded-lg shadow-xl h-96 w-96 p-5'></textarea>
<button className='bg-[#8400ff] text-white font-bold w-96 h-12 mt-12  rounded-lg'>Envoyer</button>
    </div>
</div>
    </div>
  )
}

export default Landing