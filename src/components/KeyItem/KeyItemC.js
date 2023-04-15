import { connect } from 'react-redux';

import { settingsActionCreators } from '../../store/settings/settingsActions';
import KeyItem from './KeyItem';

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  onNavigate: settingsActionCreators.navigate,
};

export default connect(mapStateToProps, mapDispatchToProps)(KeyItem);
