'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
    const session = useSession();
    const router = useRouter();
    console.log(session);

    if (session.status === 'loading') {
        return <p className='text-center text-lg font-semibold text-gray-600'>Loading...</p>;
    }

    if (session.status === 'authenticated') {
        console.log(session.data.user.name);
    }

    if (session.status === 'unauthenticated') {
        console.log('Unauthenticated');
    }

    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6'>
            <div className='bg-white shadow-lg rounded-lg p-6 w-full max-w-sm text-center'>
                <h2 className='text-2xl font-bold text-gray-700 mb-4'>Welcome</h2>
                <button 
                    className='bg-blue-500 mb-5 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full transition'
                    onClick={() => signIn('google')}
                >
                    Login with Google
                </button>

                <button 
                    className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full transition'
                    onClick={() => signIn('github')}
                >
                    Login with Github
                </button>
                {session.status === 'authenticated' && (
                    <div className='mt-4'>
                        <p className='text-gray-700 font-medium'>{session.data.user.name} logged in successfully</p>
                        <div className='flex flex-col gap-3 mt-4'>
                            <button 
                                className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition'
                                onClick={() => signOut()}
                            >
                                Logout
                            </button>
                            <button 
                                className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition'
                                onClick={() => router.push('/editor')}
                            >
                                Go To Editor
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login;