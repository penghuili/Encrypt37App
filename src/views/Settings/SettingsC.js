import { connect } from 'react-redux';

import { settingsActionCreators } from '../../store/settings/settingsActions';
import { settingsSelectors } from '../../store/settings/settingsSelectors';
import Settings from './Settings';

const mapStateToProps = state => ({
  cacheSize: settingsSelectors.getCacheSize(state),
});

const mapDispatchToProps = {
  onReadCacheSize: settingsActionCreators.readCacheSize,
  onClearCache: settingsActionCreators.clearCachePressed,
  onNavigate: settingsActionCreators.navigate,
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
