 document.addEventListener('DOMContentLoaded', () => {
    const connectWalletBtn = document.getElementById('connectWalletBtn');
    const accountInfo = document.getElementById('accountInfo');
    const accountSpan = document.getElementById('account');

    connectWalletBtn.addEventListener('click', connectWallet);

    async function connectWallet() {
        if (typeof window.ethereum !== 'undefined') {
            try {
                // Request account access
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

                // Display the connected account
                const account = accounts[0];
                accountSpan.textContent = account;
                accountInfo.style.display = 'block';
            } catch (error) {
                console.error('Error connecting to MetaMask:', error.message);
            }
        } else {
            console.log('MetaMask not installed');
        }
    }
});
