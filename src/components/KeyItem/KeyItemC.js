import { connect } from 'react-redux';

import { keypairActionCreators } from '../../store/keypair/keypairActions';
import KeyItem from './KeyItem';

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  onPress: keypairActionCreators.keyPressed,
};

export default connect(mapStateToProps, mapDispatchToProps)(KeyItem);
