import { useState } from 'react';
import { Dashbord } from "./components/Dashbord";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './components/hooks/useTransactions';

import { GlobalStyle } from "./style/global";

export function App() {

  const [isNewTransactionsModalOpen, setIsNewTransactionsModal] = useState(false);

  function handleOpenNewTransactionsModal() {
      setIsNewTransactionsModal(true);
  };
  function handleCloseNewTransactionsModal() {
      setIsNewTransactionsModal(false);
  };

  return (
    <TransactionsProvider>
      <Header onOpenNewTransectionModal= {handleOpenNewTransactionsModal}/>
      <Dashbord />
      <NewTransactionModal 
        isOpen= {isNewTransactionsModalOpen}
        onRequestClose= {handleCloseNewTransactionsModal}
      />
      <GlobalStyle />
    </ TransactionsProvider>
  );
}