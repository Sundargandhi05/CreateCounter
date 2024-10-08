import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import UserInputItems from '../UserInputItems'

import {
  BgContainer,
  LeftPanel,
  RightPanel,
  InfoCardContainer,
  Info,
  CounterHeading,
  AddFormContainer,
  Input,
  AddInputButton,
  Image,
  UserInputList,
} from './styledComponent'

class CharacterCounter extends Component {
  state = {
    userInput: '',
    userInputList: [],
  }

  handleUserInputValue = event => {
    this.setState({userInput: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    const {userInput} = this.state
    const newUserInputList = {
      id: uuidv4(),
      userEneterdInput: userInput,
      userInputLength: userInput.length,
    }
    this.setState(prevState => ({
      userInputList: [...prevState.userInputList, newUserInputList],
      userInput: '',
    }))
  }

  renderUserInputList = () => {
    const {userInputList} = this.state
    return userInputList.length > 0 ? (
      <ul>
        {userInputList.map(eachUser => (
          <UserInputItems key={eachUser.id} userInputDetails={eachUser} />
        ))}
      </ul>
    ) : (
      <Image
        alt="no user inputs"
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
      />
    )
  }

  render() {
    const {userInput} = this.state
    return (
      <BgContainer>
        <LeftPanel>
          <InfoCardContainer>
            <Info>Count the characters like a Boss...</Info>
          </InfoCardContainer>
          <UserInputList>{this.renderUserInputList()}</UserInputList>
        </LeftPanel>
        <RightPanel>
          <CounterHeading>Character Counter</CounterHeading>
          <AddFormContainer onSubmit={this.handleSubmit}>
            <Input
              onChange={this.handleUserInputValue}
              type="text"
              value={userInput} 
              placeholder = "Enter the Characters here"
            />
            <AddInputButton type="submit">Add</AddInputButton>
          </AddFormContainer>
        </RightPanel>
      </BgContainer>
    )
  }
}

export default CharacterCounter
