import HeaderBox from '@/components/HeaderBox'
import TotlaBalanceBox from '@/components/TotlaBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn = {
    firstName: 'Kriti'
  };

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotlaBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
      </div>
    </section>
  )
}

export default Home