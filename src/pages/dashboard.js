import SignUp from '@/components/SignUp/SignUp'
import SingIn from '@/components/SingIn/SingIn'
import React from 'react'
import Head from 'next/head'
function dashboard() {
  return (
    <div>
            <Head>
        <title>Panel de Control - Ceramicas San Rafael Mendoza Argentina - Porcelanato, pisos y revestimientos</title>
      </Head>
      <SingIn />
    </div>
  )
}

export default dashboard
