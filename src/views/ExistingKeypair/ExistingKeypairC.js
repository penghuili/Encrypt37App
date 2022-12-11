import { connect } from 'react-redux';

import { keypairActionCreators } from '../../store/keypair/keypairActions';
import { keypairSelectors } from '../../store/keypair/keypairSelectors';
import { toastActionCreators } from '../../store/toast/toastActions';
import ExistingKeypair from './ExistingKeypair';

const mapStateToProps = state => ({
  privateKey: keypairSelectors.getPrivateKey(state),
  publicKey: keypairSelectors.getPublicKey(state),
});

const mapDispatchToProps = {
  onPastePublicKey: keypairActionCreators.pastePublicKeyPressed,
  onPastePrivateKey: keypairActionCreators.pastePrivateKeyPressed,
  onFinish: keypairActionCreators.finishBackupPressed,
  onToast: toastActionCreators.setToast,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExistingKeypair);
