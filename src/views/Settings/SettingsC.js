import { connect } from 'react-redux';

import { settingsActionCreators } from '../../store/settings/settingsActions';
import { settingsSelectors } from '../../store/settings/settingsSelectors';
import Settings from './Settings';

const mapStateToProps = state => ({
  cacheSize: settingsSelectors.getCacheSize(state),
});

const mapDispatchToProps = {
  onManageKeypairs: settingsActionCreators.manageKeypairPressed,
  onChangeTheme: settingsActionCreators.changeThemePressed,
  onReadCacheSize: settingsActionCreators.readCacheSize,
  onClearCache: settingsActionCreators.clearCachePressed,
  onContact: settingsActionCreators.contactPressed,
  onPrivacy: settingsActionCreators.privacyPressed,
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
