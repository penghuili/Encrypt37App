import { connect } from 'react-redux';

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
  onEncryptText: textActionCreators.encryptTextPressed,
  onDecryptText: textActionCreators.decryptTextPressed,
  onShare: textActionCreators.shareTextPressed,
  onToast: toastActionCreators.setToast,
};

export default connect(mapStateToProps, mapDispatchToProps)(EncryptText);
