import {ListItem} from './styledComponent'

const UserInputItems = props => {
  const {userInputDetails} = props
  const {userEneterdInput, userInputLength} = userInputDetails
  return (
    <ListItem>
      <p>
        {userEneterdInput}:{userInputLength}
      </p>
    </ListItem>
  )
}

export default UserInputItems
