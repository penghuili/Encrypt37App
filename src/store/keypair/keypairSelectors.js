export const keypairSelectors = {
  getPrivateKey: state => state.keypair.privateKey,
  getPublicKey: state => state.keypair.publicKey,
  getActivePublicKeyLabel: state => state.keypair.activePublicKey,
  getActivePublicKey: state => {
    const activeLabel = keypairSelectors.getActivePublicKeyLabel(state);
    return activeLabel
      ? keypairSelectors.getPublicKeys(state).find(p => p.label === activeLabel).value
      : keypairSelectors.getPublicKey(state);
  },
  getPublicKeys: state => state.keypair.publicKeys,
  isPending: state => state.keypair.isPending,
  hasDoneBackup: state => state.keypair.hasDoneBackup,
};
