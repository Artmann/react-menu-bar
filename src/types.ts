export interface Transaction {
  amount: string;
  date: string;
  title: string;
}

export interface Wallet {
  balance: number;
  change: number;
  name: string;
  imageUrl: string;
  price: number;
}
