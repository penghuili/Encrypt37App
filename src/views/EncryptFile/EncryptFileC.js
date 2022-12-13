import { connect } from 'react-redux';
import { fileActionCreators } from '../../store/file/fileActions';
import { fileSelectors } from '../../store/file/fileSelectors';

import EncryptFile from './EncryptFile';

const mapStateToProps = state => ({
  pickedFiles: fileSelectors.getPickedFiles(state),
  encryptedFiles: fileSelectors.getEncryptedFiles(state),
});

const mapDispatchToProps = {
  onEncrypt: fileActionCreators.encryptPressed,
  onDecrypt: fileActionCreators.decryptPressed,
  onShare: fileActionCreators.shareFilePressed,
  onClearPicked: fileActionCreators.clearPickedFilesPressed,
  onClearEncrypted: fileActionCreators.clearEncryptedFilesPressed,
};

export default connect(mapStateToProps, mapDispatchToProps)(EncryptFile);
