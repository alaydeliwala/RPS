'use strict';
import React, {Component} from 'react'
import {
  StyleSheet,
  AppRegistry,
  Button,
  Image,
  View,
  TouchableHighlight,
  ListView,
  Text,
  NavigatorIOS
} from 'react-native';

export default function renderIf(condition) {
    if (condition === 0) {
      return (<Image source={require('./Resources/rock.png')} style={styles.choice}/>);
    }
    else if (condition === 1) {
      return <Image source={require('./Resources/paper.png')} style={styles.choice}/>;
    }
    else if (condition === 2) {
      return <Image source={require('./Resources/scissors.png')} style={styles.choice}/>;
    }
}

class TheGame extends Component {
  constructor(props){
    super(props);
    this.state = {
      playerChoice: '0',
      computerChoice: '1',
      playerChoiceMade: false,
      result: '',
      computerWins: 0,
      playerWins: 0,
      hasGameBegun: false,
      hasGameEnded: true,
      whoWonTheGame: '',
      winDisplayed: false,
      rounds: 0,
    };
  }


  onRockButttonPressed() {
    {/* 0 = Rock, 1 = Paper, 2 = Sciccors*/}
    this.setState({playerChoice: 0, playerChoiceMade: true, hasGameEnded: false});
    this.makeComputerChoice();
  }

  onPaperButttonPressed() {
    this.setState({playerChoice: 1 , playerChoiceMade: true, hasGameEnded: false});
    this.makeComputerChoice();
  }

  onScissorsButttonPressed() {
    this.setState({playerChoice: 2 , playerChoiceMade: true, hasGameEnded: false});
    this.makeComputerChoice();
  }

  makeComputerChoice() {
    var rand = Math.floor((Math.random() * 3));
    this.setState({computerChoice:rand});
    this.determineMatchWinner();
  }

  hasComputerWonGame(){
    if (this.state.computerWins === 4) {
      this.setState({hasGameEnded: true, whoWonTheGame: 'Computer has won the game', computerWins: 0, playerWins: 0})
    }
  }

  hasPlayerWonGame(){
    if (this.state.playerWins === 4){
      this.setState({hasGameEnded: true, whoWonTheGame: 'You have won the game ', computerWins: 0, playerWins: 0})
    }
  }

  computerWin(){
    if (this.state.hasGameBegun === true){
      this.setState({computerWins: this.state.computerWins + 1})
      this.hasComputerWonGame();
    }
  }

  playerWin(){
    if (this.state.hasGameBegun === true){
      this.setState({playerWins: this.state.playerWins + 1})
      this.hasPlayerWonGame();
    }
  }

  determineMatchWinner() {
    if (this.state.playerChoice === 0) {
      if (this.state.computerChoice === 0 ) {
        this.setState({result: 'Draw'})
        }
      else if (this.state.computerChoice === 1 ) {
        this.setState({result: 'Computer Won'})
        this.computerWin();
      }
      else if (this.state.computerChoice === 2 ) {
        this.setState({result: 'Player Won'})
        this.playerWin();
      }
    }
    if (this.state.playerChoice === 1) {
      if (this.state.computerChoice === 0 ) {
      this.setState({result: 'Player Won'})
      this.playerWin();
      }
      else if (this.state.computerChoice === 1 ) {
        this.setState({result: 'Draw'})
      }
      else if (this.state.computerChoice === 2 ) {
        this.setState({result: 'Computer Won'})
        this.computerWin();
      }
    }
    if (this.state.playerChoice === 2) {
      if (this.state.computerChoice === 0 ) {
        this.setState({result: 'Computer Won'})
        this.computerWin();
      }
      else if (this.state.computerChoice === 1 ) {
        this.setState({result: 'Player Won'})
        this.playerWin();
      }
      else if (this.state.computerChoice === 2 ) {
        this.setState({result: 'Draw'})
      }
    }
    this.setState({hasGameBegun: true})
  }


  render() {
    var result = this.state.playerChoiceMade ?
      (<Text style = {styles.description1}>
          {this.state.result}
      </Text>) :
      ( <View/>);

    var playerScore = this.state.hasGameBegun ?
      (<Text style = {styles.description1}>
        Player: {this.state.playerWins}
      </Text>) :
      ( <View/>);

    var computerScore = this.state.hasGameBegun ?
      (<Text style = {styles.description1}>
        Computer: {this.state.computerWins}
      </Text>) :
        ( <View/>);

    var finalResult = this.state.hasGameEnded ?
    (<Text style = {styles.description1}>
      {this.state.whoWonTheGame}
    </Text>) :
    (<View/>);

    var pressStart = this.state.hasGameEnded ?
      (<Text style = {styles.description2}>
        Press any button to play
      </Text>) :
      (<View/>);

    var displayPlayerChoice = this.state.computerChoice ?
    (<Text style = {styles.description2}>
      Press any button to play
    </Text>) :
    (<View/>);

    return (
      <View>
        <View style = {styles.description}>
          {pressStart}
        </View>
        <View style = {styles.flowRight}>
          {playerScore}
          {computerScore}
        </View>
        <View style = {styles.flowRight}>
        {result}
        </View>

        {/*Displays the weapon picked by player and computer*/}
        <View style = {styles.flowRight}>
          {renderIf(this.state.playerChoice)}
          {renderIf(this.state.computerChoice)}
        </View>

        <View style = {styles.flowRight}>
          {/*Rock Button*/}
          <TouchableHighlight
            style={styles.button}
            underlayColor='#99d9f4'
            onPress ={() => this.onRockButttonPressed() }>
            <Image source={require('./Resources/rock.png')} style={styles.image}/>
          </TouchableHighlight>

          {/*Paper Button*/}
          <TouchableHighlight
            style={styles.button}
            underlayColor='#99d9f4'
            onPress ={() => this.onPaperButttonPressed() }>
            <Image source={require('./Resources/paper.png')} style={styles.image}/>
          </TouchableHighlight>

          {/*Scissors Button*/}
          <TouchableHighlight
            style={styles.button}
            underlayColor='#99d9f4'
            onPress ={() => this.onScissorsButttonPressed() }>
            <Image source={require('./Resources/scissors.png')} style={styles.image}/>
          </TouchableHighlight>
        </View>

        <View style = {styles.flowRight}>
          {finalResult}
        </View>

      </View>
      );
    }
}

var styles = StyleSheet.create({
      description: {
        marginTop: 60,
        padding: 10,
      },

      flowRight: {
        flexDirection: 'row',
        alignItems: 'center'
      },

      description1: {
        fontSize: 20,
        color: '#656565',
        textAlign: 'center',
        flex: 1

      },

      description2: {
        textAlign: 'center',
        fontSize: 20,
        color: '#656565',
        padding: 10
      },

      image1: {
        width: 100,
        height: 100,
        borderRadius: 50,
        flexDirection: 'row',
        margin: 45
      },

      button: {
        height: 99,
        width: 100,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderRadius: 50,
        alignSelf: 'stretch',
        justifyContent: 'center',
        margin: 4
      },

      container: {
        padding: 30,
        marginTop: 65,
        alignItems: 'center'
      },

      image: {
        width: 100,
        height: 100,
        borderRadius: 50,
      },

      choice: {
        width: 100,
        height: 100,
        borderRadius: 50,
        flexDirection: 'row',
        margin: 45
      }



      });

module.exports = TheGame;
