import { connect } from 'react-redux';

import { keypairActionCreators } from '../../store/keypair/keypairActions';
import { keypairSelectors } from '../../store/keypair/keypairSelectors';
import Keypairs from './Keypairs';

const mapStateToProps = state => ({
  publicKey: keypairSelectors.getPublicKey(state),
  privateKey: keypairSelectors.getPrivateKey(state),
  publicKeys: keypairSelectors.getPublicKeys(state),
  activePublicKey: keypairSelectors.getActivePublicKeyLabel(state),
});

const mapDispatchToProps = {
  onDeleteKeypair: keypairActionCreators.deleteKeypairPressed,
  onAddPublicKey: keypairActionCreators.addPublicKeyPressed,
  onChangeActivePublicKey: keypairActionCreators.changeActivePublicKeyPressed,
  onFriendPublicKeyPress: keypairActionCreators.friendPublicKeyPressed,
};

export default connect(mapStateToProps, mapDispatchToProps)(Keypairs);
