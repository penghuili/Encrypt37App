import { connect } from 'react-redux';

import { keypairActionCreators } from '../../store/keypair/keypairActions';
import { settingsActionCreators } from '../../store/settings/settingsActions';
import { settingsSelectors } from '../../store/settings/settingsSelectors';
import { toastActionCreators } from '../../store/toast/toastActions';
import Settings from './Settings';

const mapStateToProps = state => ({
  cacheSize: settingsSelectors.getCacheSize(state),
});

const mapDispatchToProps = {
  onReadCacheSize: settingsActionCreators.readCacheSize,
  onClearCache: settingsActionCreators.clearCachePressed,
  onDeleteKeypair: keypairActionCreators.deleteKeypairPressed,
  onToast: toastActionCreators.setToast,
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
