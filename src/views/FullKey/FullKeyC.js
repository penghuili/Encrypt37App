import { connect } from 'react-redux';
import { toastActionCreators } from '../../store/toast/toastActions';

import FullKey from './FullKey';

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  onToast: toastActionCreators.setToast,
};

export default connect(mapStateToProps, mapDispatchToProps)(FullKey);
