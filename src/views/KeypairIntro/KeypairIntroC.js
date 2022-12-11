import { connect } from 'react-redux';

import { keypairActionCreators } from '../../store/keypair/keypairActions';
import KeypairIntro from './KeypairIntro';

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  onNewKeypair: keypairActionCreators.navigateToNewKeypairPressed,
  onExistingKeypair: keypairActionCreators.navigateToExistingKeypairPressed,
};

export default connect(mapStateToProps, mapDispatchToProps)(KeypairIntro);
