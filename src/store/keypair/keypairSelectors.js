export const keypairSelectors = {
  getPrivateKey: state => state.keypair.privateKey,
  getPublicKey: state => state.keypair.publicKey,
  getActivePublicKey: state => state.keypair.activePublicKey,
  getPublicKeys: state => state.keypair.publicKeys,
  isPending: state => state.keypair.isPending,
  hasDoneBackup: state => state.keypair.hasDoneBackup,
};
