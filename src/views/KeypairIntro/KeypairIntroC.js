import { connect } from 'react-redux';

import { settingsActionCreators } from '../../store/settings/settingsActions';
import KeypairIntro from './KeypairIntro';

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  onNavigate: settingsActionCreators.navigate,
};

export default connect(mapStateToProps, mapDispatchToProps)(KeypairIntro);
