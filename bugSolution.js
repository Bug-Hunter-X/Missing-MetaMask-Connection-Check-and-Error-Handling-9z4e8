async function checkIfWalletIsConnected() {
  const { ethereum } = window;

  if (!ethereum) {
    console.log('MetaMask not detected!');
    return;
  }

  const accounts = await ethereum.request({ method: 'eth_accounts' });

  if (accounts.length > 0) {
    const account = accounts[0];
    console.log('Wallet is connected!', account);
    return account;
  } else {
    console.log('Connect to MetaMask');
    return null;
  }
}

//Example Usage
async function connectWallet(){
  const {ethereum} = window;
  if(!ethereum)
  {
    console.log('MetaMask is not installed! Please install it to use our application.');
    return;
  }
  try{
    const accounts = await ethereum.request({method: 'eth_requestAccounts'});
    console.log('accounts',accounts)
  }catch(error){
    console.error('Error connecting to MetaMask',error)
  }
}
