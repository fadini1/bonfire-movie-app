import { useCallback, useState } from "react";
import { FcGoogle } from 'react-icons/fc';
import { signIn } from 'next-auth/react';

import axios from "axios";
import Image from "next/image";

import Input from "@/components/Input";

const Login = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [variant, setVariant] = useState('Login');

  const toggleVariant = useCallback(() => {
    setVariant(
      (currentVariant) => currentVariant === 'Login' ? 'Register' : 'Login'
    );
  }, []);

  const login = useCallback(async () => {
    try {
      await signIn('credentials', {
        name,
        password,
        callbackUrl: '/'
      });
    } catch (error) {
      console.log(error);
    }
  }, [name, password]);

  const register = useCallback(async () => {
    try {
      await axios.post('/api/register', {
        email,
        name,
        password
      });

      login();
    } catch (error) {
      console.log(error);
    }
  }, [email, name, password, login]);

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.png')] 
    bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black/40 w-full h-full">
        <nav className="px-10 py-5 flex items-center gap-4">
          <Image 
            src='/images/bonfirelogo.png'
            alt="Logo"  
            width={42}
            height={42}
            className="bg-cyan-300 hover:bg-cyan-100 p-1.5 rounded-full
            transition duration-300"
          />
          <div className="lg:flex hidden tracking-[12px] text-[1.65rem] ">
            <p className="site-name">B</p>
            <p className="site-name">O</p>
            <p className="site-name">N</p>
            <p className="site-name">F</p>
            <p className="site-name">I</p>
            <p className="site-name">R</p>
            <p className="site-name">E</p>
          </div>
        </nav>
        <div className="flex items-center justify-center">
          <div className="bg-black/80 px-10 sm:py-10 py-6 self-center 
          rounded-lg max-w-xs sm:max-w-sm lg:max-w-lg mt-10 w-full">
            <h2 className="lg:text-3xl sm:text-2xl text-xl font-semibold mb-5">
              {variant === 'Login' ? 'Sign In' : 'Register'}
            </h2>
            <div className="flex flex-col gap-2"> 
              {variant === 'Register' && (
                <Input 
                  id="email"
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(event: any) => setEmail(event.target.value)}
                />
              )}
              <Input 
                id="name"
                label="Username"
                value={name}
                onChange={(event: any) => setName(event.target.value)}
              />
              <Input 
                id="password"
                label="Password"
                type="password"
                value={password}
                onChange={(event: any) => setPassword(event.target.value)}
              />
            </div>
            <button
            onClick={variant === 'Login' ? login : register} 
            className="bg-cyan-600 hover:bg-cyan-400
            transition duration-300 rounded-md md:text-lg font-semibold 
            mt-3 text-black w-full py-2">
              {variant === 'Login' ? 'Login' : 'Sign Up'}
            </button>
            <div
            onClick={() => signIn(
              'google',
              {callbackUrl: '/'}
            )} 
            className="flex items-center md:w-10 md:h-10 bg-zinc-200 
            rounded-full mt-2 justify-center cursor-pointer h-9 w-9
            hover:bg-cyan-100 transition duration-300 lg:h-11 lg:w-11">
              <FcGoogle 
                className="lg:h-8 lg:w-8 md:h-7 md:w-7 h-6 w-6"
              />
            </div>
            <p className="text-zinc-400 md:font-medium mt-2 
            sm:text-base text-sm">
              {variant === 'Login' 
                ? 'First time using Bonfire?' 
                : 'Already have an account?'
              } {' '}
              <span
              onClick={toggleVariant} 
              className="text-cyan-300 cursor-pointer
              hover:text-cyan-200 transition duration-300 
              tracking-wide font-medium">
                {variant === 'Login' ? 'Register' : 'Sign In'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;