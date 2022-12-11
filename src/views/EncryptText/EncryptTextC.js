import { connect } from 'react-redux';

import { keypairActionCreators } from '../../store/keypair/keypairActions';
import { textActionCreators } from '../../store/text/textActions';
import { textSelectors } from '../../store/text/textSelectors';
import { toastActionCreators } from '../../store/toast/toastActions';
import EncryptText from './EncryptText';

const mapStateToProps = state => ({
  text: textSelectors.getText(state),
  encryptedText: textSelectors.getEncryptedText(state),
});

const mapDispatchToProps = {
  onTextChange: textActionCreators.setText,
  onEncryptedTextChange: textActionCreators.setEncryptedText,
  onDeleteKeypair: keypairActionCreators.deleteKeypairPressed,
  onEncryptText: textActionCreators.encryptTextPressed,
  onDecryptText: textActionCreators.decryptTextPressed,
  onToast: toastActionCreators.setToast,
};

export default connect(mapStateToProps, mapDispatchToProps)(EncryptText);
