import { connect } from 'react-redux';
import { keypairSelectors } from '../store/keypair/keypairSelectors';

import Router from './Router';

const mapStateToProps = state => ({
  isPending: keypairSelectors.isPending(state),
  hasKeypair:
    !!keypairSelectors.getPrivateKey(state) &&
    !!keypairSelectors.getPublicKey(state) &&
    !!keypairSelectors.hasDoneBackup(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Router);
