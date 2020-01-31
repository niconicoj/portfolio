  
import Types from 'MyTypes';
import { connect } from 'react-redux';

import { contactActions, contactSelectors } from '../redux/contact';
import Contact from '../components/Contact';

const mapStateToProps = (state: Types.RootState) => ({
  contact: contactSelectors.getContact(state)
})

const dispatchProps = {
  update: contactActions.update,
  validate : contactActions.validate
};

export const ContactContainer = connect(
  mapStateToProps,
  dispatchProps
)(Contact);