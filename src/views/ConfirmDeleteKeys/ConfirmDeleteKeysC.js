import { connect } from 'react-redux';

import { keypairActionCreators } from '../../store/keypair/keypairActions';
import ConfirmDeleteKeys from './ConfirmDeleteKeys';

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  onDelete: keypairActionCreators.confirmDeleteKeypairPressed,
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmDeleteKeys);
