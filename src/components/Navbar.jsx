import React from 'react';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between px-4 py-3 border-b border-b-zinc-600 bg-zinc-900 text-slate-100'>
      <h1 className='text-2xl font-bold'>Taskboard App</h1>
      <div className='relative w-8 h-8 cursor-pointer'>
        <div>
          <img
            className='relative rounded-full hover-arrow'
            src='https://placeimg.com/50/50/people'
            alt='People avatar'
          />
        </div>
        <div className='absolute right-0 top-full mt-1.5 flex hidden flex-col gap-2 rounded-md border border-zinc-800 bg-zinc-900 p-3 text-sm text-zinc-400  shadow shadow-zinc-900'>
          <p className='hover:text-zinc-300'>Perfil</p>
          <p className='hover:text-zinc-300'>Configuracion</p>
          <p className='hover:text-zinc-300'>Salir</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
