import { connect } from 'react-redux';
import { keypairActionCreators } from '../../store/keypair/keypairActions';
import { toastActionCreators } from '../../store/toast/toastActions';

import Settings from './Settings';

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  onDeleteKeypair: keypairActionCreators.deleteKeypairPressed,
  onToast: toastActionCreators.setToast,
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
