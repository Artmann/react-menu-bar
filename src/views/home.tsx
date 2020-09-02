import React, { ReactElement } from 'react';
import { FiPlus } from 'react-icons/fi';
import styled from 'styled-components';

import WalletCard from '../components/wallet-card';
import { Wallet } from '../types';

const AddWallet = styled.div`
  align-items: center;
  border: dashed 2px #A0AEC0;
  border-radius: 0.5rem;
  display: flex;
  font-size: 1.15rem;
  line-height: 0;
  letter-spacing: 0.065rem;
  justify-content: center;
  margin-top: 2rem;
  text-transform: uppercase;
`;

export default function Home(): ReactElement {
  const wallets: Wallet[] = [
    { name: 'Bitcoin', price: 11363.70, change: -5.10, balance: 14.342, imageUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png' },
    { name: 'Ethereum', price: 443.58, change: 12.13, balance: 2.433, imageUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png' },
    { name: 'Tether', price: 1, change: -0.14, balance: 32.323, imageUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png' },
    { name: 'XRP', price: 0.272, change: -1.79, balance: 12.324, imageUrl: 'https://s2.coinmarketcap.com/static/img/coins/32x32/52.png' },
    { name: 'Chainlink', price: 14.67, change: -2.30, balance: 3.142, imageUrl: 'https://s2.coinmarketcap.com/static/img/coins/32x32/1975.png' },
  ];

  return (
    <div>
      { wallets.map(wallet => <WalletCard wallet={ wallet } key={ wallet.name } />) }

      <AddWallet>
        <p>
          <FiPlus />
        </p>
        <p>
           Add Wallet
        </p>
      </AddWallet>
    </div>
  );
}
