'use client'

import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'

const Nav = () => {
  const isUserLoggoedIn = false

  const [authProviders, setAuthProviders] = useState<any>(null)

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders()

      setAuthProviders(response)
    }

    setProviders()
  }, [])
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/images/logo.svg'
          alt='logo'
          width={30}
          height={30}
          className='object-contain'
        />
        <p className='logo_text'>EachPromptai</p>
      </Link>
      <div className='sm:flex hidden'>
        {isUserLoggoedIn ? (
          <div className='flex items-center gap-3 md:gap-5'>
            <Link href='/create-prompt' className='back_btn'>
              Create Post
            </Link>
            <button
              type='button'
              className='outline_btn'
              onClick={() => signOut}>
              Sign Out
            </button>
            <Link href='/profile'>
              <Image
                src='/assets/images/logo.svg'
                alt='profileimage'
                width={37}
                height={37}
                className='rounded-full'
              />
            </Link>
          </div>
        ) : (
          <>
            {authProviders &&
              Object.values(authProviders).map((provider: any) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className='black_btn'>
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className='sm:hidden flex relative'>
        {isUserLoggoedIn ? (
          <div className='flex'>
            <Image
              src='/assets/images/logo.svg'
              alt='profileimage'
              width={37}
              height={37}
              className='rounded-full'
              // onClick={}
            />
          </div>
        ) : (
          <>
            {authProviders &&
              Object.values(authProviders).map((provider: any) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className='black_btn'>
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  )
}

export default Nav
