import { connect } from 'react-redux';
import { keypairActionCreators } from '../../store/keypair/keypairActions';
import { toastActionCreators } from '../../store/toast/toastActions';

import FriendPublicKey from './FriendPublicKey';

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  onDelete: keypairActionCreators.deletePublicKeyPressed,
  onToast: toastActionCreators.setToast,
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendPublicKey);
