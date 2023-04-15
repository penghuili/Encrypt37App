import { connect } from 'react-redux';

import { keypairSelectors } from '../../store/keypair/keypairSelectors';
import { settingsActionCreators } from '../../store/settings/settingsActions';
import ActivePublicKey from './ActivePublicKey';

const mapStateToProps = state => ({
  activePublicKey: keypairSelectors.getActivePublicKeyLabel(state) || 'Myself',
});

const mapDispatchToProps = {
  onNavigate: settingsActionCreators.navigate,
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivePublicKey);
