import { connect } from 'react-redux';
import { keypairActionCreators } from '../../store/keypair/keypairActions';

import { keypairSelectors } from '../../store/keypair/keypairSelectors';
import { toastActionCreators } from '../../store/toast/toastActions';
import AddPublicKey from './AddPublicKey';

const mapStateToProps = state => ({
  publicKey: keypairSelectors.getPublicKey(state),
  privateKey: keypairSelectors.getPrivateKey(state),
});

const mapDispatchToProps = {
  onSave: keypairActionCreators.savePublicKeyPressed,
  onToast: toastActionCreators.setToast,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPublicKey);
