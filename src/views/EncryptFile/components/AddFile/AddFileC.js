import { connect } from 'react-redux';

import { fileActionCreators } from '../../../../store/file/fileActions';
import AddFile from './AddFile';

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  onTakePhoto: fileActionCreators.takePhotoPressed,
  onPickImages: fileActionCreators.loadImageLibraryPressed,
  onPickFiles: fileActionCreators.pickOriginalFilesPressed,
  onPickEncryptedFiles: fileActionCreators.pickEncryptedFilesPressed,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddFile);
