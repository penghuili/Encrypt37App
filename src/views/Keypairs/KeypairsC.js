import { connect } from 'react-redux';

import { keypairActionCreators } from '../../store/keypair/keypairActions';
import { keypairSelectors } from '../../store/keypair/keypairSelectors';
import Keypairs from './Keypairs';
import { settingsActionCreators } from '../../store/settings/settingsActions';

const mapStateToProps = state => ({
  publicKey: keypairSelectors.getPublicKey(state),
  privateKey: keypairSelectors.getPrivateKey(state),
  publicKeys: keypairSelectors.getPublicKeys(state),
  activePublicKey: keypairSelectors.getActivePublicKeyLabel(state),
});

const mapDispatchToProps = {
  onNavigate: settingsActionCreators.navigate,
  onChangeActivePublicKey: keypairActionCreators.changeActivePublicKeyPressed,
};

export default connect(mapStateToProps, mapDispatchToProps)(Keypairs);
