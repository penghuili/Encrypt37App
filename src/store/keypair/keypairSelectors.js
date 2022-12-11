export const keypairSelectors = {
  getPrivateKey: state => state.keypair.privateKey,
  getPublicKey: state => state.keypair.publicKey,
  isPending: state => state.keypair.isPending,
  hasDoneBackup: state => state.keypair.hasDoneBackup,
};
