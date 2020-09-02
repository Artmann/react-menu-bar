import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { Transaction } from '../types';

const Amount = styled.div<{ positive: boolean }>`
  color: ${ props => props.positive ? '#F56565' : '#48BB78' };
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.065rem;
  text-align: right;
`;
const Date = styled.div`
  font-size: 0.8rem;
  text-align: right;
`;
const Header = styled.h1`
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
`;
const Row = styled.div`
  background: #fff;
  border: solid 1px #EDF2F7;
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  padding: 1rem;
`;
const Title = styled.div`
  font-weight: 600;
`;

function TransactionRow({ transaction }: { transaction: Transaction }): ReactElement {
  return (
    <Row>
      <Title>
        { transaction.title }
      </Title>
      <div>
        <Amount positive={ transaction.amount.includes('+') }>
          { transaction.amount }
        </Amount>
        <Date>
          { transaction.date }
        </Date>
      </div>
    </Row>
  );
}

export default function Transfers(): ReactElement {
  const transactions: Transaction[] = [
    { amount: '-$32.00', date: '10 Oct', title: 'Shopping' },
    { amount: '+$12.00', date: '7 Oct', title: 'Tom Wilson' },
    { amount: '-$42.00', date: '6 Sep', title: 'John Smith' },
    { amount: '-$13.00', date: '6 Sep', title: 'Food' },
  ];

  return (
    <div>
      <Header>
        Recent Transactions
      </Header>

      { transactions.map(transaction => <TransactionRow transaction={ transaction } key={ transaction.title } /> )}
    </div>
  );
}
