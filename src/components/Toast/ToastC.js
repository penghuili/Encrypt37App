import { connect } from 'react-redux';
import { toastActionCreators } from '../../store/toast/toastActions';
import { toastSelectors } from '../../store/toast/toastSelectors';

import Toast from './Toast';

const mapStateToProps = state => ({
  message: toastSelectors.getMessage(state),
});

const mapDispatchToProps = {
  onClose: () => toastActionCreators.setToast(''),
};

export default connect(mapStateToProps, mapDispatchToProps)(Toast);
