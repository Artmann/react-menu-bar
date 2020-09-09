import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { Wallet } from '../../types';

interface WalletProps {
  wallet: Wallet
}

const Balance = styled.div`
  text-align: right;
`;
const Card = styled.div`
  align-items: end;
  background: #fff;
  border: solid 1px #EDF2F7;
  border-radius: 0.5rem;
  display: flex;
  margin-bottom: 0.75rem;
  padding: 1rem;
`;
const Change = styled.div<{ increase: boolean }>`
  color: ${ props => props.increase ? '#F56565' : '#48BB78' };
  flex: 1;
  font-size: 0.75rem;
  font-weight: 600;
  padding-top: 1.5rem;

  p { margin: 0; }
`;
const DollarBalance = styled.div`
  font-weight: 700;
`;
const Details = styled.div`
  font-size: 0.8rem;
  width: 7rem;
`;
const Image = styled.img`
  display: block;
  height: 48px;
  margin-right: 1.25rem;
  width: 48px;
`;
const Name = styled.div`
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
`;
const Price = styled.div`
  color: #A0AEC0;
  padding-right: 0.75rem;
`;
const Pricing = styled.div`
  display: flex;
  font-size: 0.8rem;
  padding: 0.25rem 0;
`;
const WalletBalance = styled.div`
  color: #A0AEC0;
  font-size: 0.8rem;
  padding: 0.25rem 0;
`;

export default function WalletCard({ wallet }: WalletProps): ReactElement {
  const dollarBalance = Math.round(wallet.balance * wallet.price * 100) / 100;

  return (
    <Card>
      <Image alt={ wallet.name } src={ wallet.imageUrl } />

      <Details>
        <Name>
          { wallet.name }
        </Name>
        <Pricing>
          <Price>
            ${ wallet.price }
          </Price>

        </Pricing>
      </Details>

      <Change increase={ wallet.change >= 0 } >
        <p>
          { wallet.change }%
        </p>
      </Change>

      <Balance>
        <DollarBalance>
          ${ dollarBalance }
        </DollarBalance>
        <WalletBalance>
          { wallet.balance }
        </WalletBalance>
      </Balance>
    </Card>
  );
}
