  
import { connect } from 'react-redux'
import { State } from '../reducers'
import { updateContact, validateContact } from '../actions/contact'
import { getContact } from '../selectors/contact'
import Contact from '../components/Contact'

const mapStateToProps = (state: State) => ({
  contact: getContact(state)
})

export default connect<any, any, any, any>(mapStateToProps, {
  dispatchUpdate: updateContact,
  dispatchValidate: validateContact
})(Contact)