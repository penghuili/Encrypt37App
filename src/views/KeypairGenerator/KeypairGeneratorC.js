import { connect } from 'react-redux';

import { keypairActionCreators } from '../../store/keypair/keypairActions';
import { keypairSelectors } from '../../store/keypair/keypairSelectors';
import { toastActionCreators } from '../../store/toast/toastActions';
import KeypairGenerator from './KeypairGenerator';

const mapStateToProps = state => ({
  privateKey: keypairSelectors.getNewPrivateKey(state),
  publicKey: keypairSelectors.getNewPublicKey(state),
});

const mapDispatchToProps = {
  onGenerate: keypairActionCreators.generateNewKeypairPressed,
  onToast: toastActionCreators.setToast,
};

export default connect(mapStateToProps, mapDispatchToProps)(KeypairGenerator);
