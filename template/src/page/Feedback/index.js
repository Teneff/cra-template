import { connect } from 'react-redux';
import Feedback from './Feedback';
import { mapStateToProps, mapDispatchToProps } from './actions';

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
