import { connect } from 'react-redux';

import { settingsSelectors } from '../../store/settings/settingsSelectors';
import UIProvider from './UIProvider';

const mapStateToProps = state => ({
  themeMode: settingsSelectors.getThemeMode(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UIProvider);
