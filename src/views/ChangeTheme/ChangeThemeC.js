import { connect } from 'react-redux';
import { settingsActionCreators } from '../../store/settings/settingsActions';
import { settingsSelectors } from '../../store/settings/settingsSelectors';
import { toastActionCreators } from '../../store/toast/toastActions';

import ChangeTheme from './ChangeTheme';

const mapStateToProps = state => ({
  themeMode: settingsSelectors.getThemeMode(state),
});

const mapDispatchToProps = {
  onSave: settingsActionCreators.saveThemePressed,
  onToast: toastActionCreators.setToast,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeTheme);
