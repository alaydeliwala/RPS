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
  NavigatorIOS,
  AlertIOS,
} from 'react-native';

{/* This is the weapon the player has picked*/}
var playerChoice = 0;

{/* This is the weapon the computer has picked*/}
var computerChoice = 0;

{/* This is a counter for the number of computerWins*/}
var computerWins = 0;

{/* This is a counter for the number of playerWins*/}
var playerWins = 0;

{/*
    This function displays the images of the choices

    @param hasGameBegun Has the game begun yet?
    @param choice What weapon was chosen
    @return The image of the weapon chosen
*/}
function renderIf(choice , hasGameBegun) {
    if(hasGameBegun === true){
        if (choice === 0) {
          return (<Image source={require('./Resources/rock.png')} style={styles.choice}/>);
        }
        else if (choice === 1) {
          return <Image source={require('./Resources/paper.png')} style={styles.choice}/>;
        }
        else if (choice === 2) {
          return <Image source={require('./Resources/scissors.png')} style={styles.choice}/>;
        }
    }
}


function whoWonTheGame(){
    if (computerWins === 5) {
        {computerWins = 0};
        {playerWins = 0};
        return AlertIOS.alert('The Computer has won the game');
    }

    if (playerWins === 5) {
        {computerWins = 0};
        {playerWins = 0};
        return AlertIOS.alert('You have won the game');
    }
}


function determineMatchWinner( playerChoice , computerChoice) {
    if (playerChoice === 0) {
        if (computerChoice === 0 ) {
            return (<Text style = {styles.description}> Draw </Text>);
        }
        else if (computerChoice === 1 ) {
            {computerWins = computerWins + 1};
            return (<Text style = {styles.description}> Computer Won </Text>);

        }
        else if (computerChoice === 2 ) {
            {playerWins = playerWins + 1};
            return (<Text style = {styles.description}> Player Won </Text>);
        }
    }
    if (playerChoice === 1) {
        if (computerChoice === 0 ) {
            {playerWins = playerWins + 1};
            return (<Text style = {styles.description}> Player Won </Text>);
        }
        else if (computerChoice=== 1 ) {
            return (<Text style = {styles.description}> Draw </Text>);
        }
        else if (computerChoice=== 2 ) {
            {computerWins = computerWins + 1};
            return (<Text style = {styles.description}> Computer Won </Text>);
        }
    }
    if (playerChoice=== 2) {
        if (computerChoice=== 0 ) {
            {computerWins = computerWins + 1};
            return (<Text style = {styles.description}> Computer Won </Text>);
        }
        else if (computerChoice=== 1 ) {
            {playerWins = playerWins + 1};
            return (<Text style = {styles.description}> Player Won </Text>);
        }
        else if (computerChoice=== 2 ) {
            return (<Text style = {styles.description}> Draw </Text>);
        }
    }
}



class TheGame extends Component {
    constructor(props){
    super(props);
    this.state = {
      computerWins: 0,
      playerWins: 0,
      hasGameBegun: true,
      hasGameEnded: true,
    };
  }

  onPlayerChoice(choice) {
    {/* 0 = Rock, 1 = Paper, 2 = Sciccors*/}
    var rand = Math.floor((Math.random() * 3));
    {computerChoice = rand};
    {playerChoice = choice};
    console.log(playerChoice, computerChoice);
    this.setState({playerChoice: choice, hasGameEnded: false, computerChoice: rand});
  }

  gameHasBegun() {
    this.setState({hasGameBegun: true})
  }


  render() {
    var result = determineMatchWinner(this.state.playerChoice , this.state.computerChoice);

    var playerScore = this.state.hasGameBegun ?
      (<Text style = {styles.description}>
        Player: {playerWins}
      </Text>) :
      ( <View/>);

    var computerScore = this.state.hasGameBegun ?
      (<Text style = {styles.description}>
        Computer: {computerWins}
      </Text>) :
        ( <View/>);

    var finalResult = whoWonTheGame();

    var pressStart = this.state.hasGameEnded ?
      (<Text style = {styles.description}>
        Press any button to play
      </Text>) :
      (<View/>);

    var computerChoice = renderIf(this.state.computerChoice , this.state.hasGameBegun);
    var playerChoice = renderIf(this.state.playerChoice , this.state.hasGameBegun);



    return (
      <View style = {styles.container}>
        <View style = {styles.scores}>
          {playerScore}
          {computerScore}
        </View>
        <View style = {styles.result}>
        {result}
        </View>
        <View style = {styles.titles}>
          <Text style = {styles.descriptionTitle}>
            Player
          </Text>

          <Text style = {styles.descriptionTitle}>
            Computer
          </Text>
        </View>
        {/*Displays the weapon picked by player and computer*/}
        <View style = {styles.flowRight}>
          {playerChoice}
          {computerChoice}
        </View>

        <View style = {styles.flowRight}>
          {/*Rock Button*/}
          <TouchableHighlight
            style={styles.button}
            underlayColor='#99d9f4'
            onPress ={() => this.onPlayerChoice(0) }>
            <Image source={require('./Resources/rock.png')} style={styles.image}/>
          </TouchableHighlight>

          {/*Paper Button*/}
          <TouchableHighlight
            style={styles.button}
            underlayColor='#99d9f4'
            onPress ={() => this.onPlayerChoice(1) }>
            <Image source={require('./Resources/paper.png')} style={styles.image}/>
          </TouchableHighlight>

          {/*Scissors Button*/}
          <TouchableHighlight
            style={styles.button}
            underlayColor='#99d9f4'
            onPress ={() => this.onPlayerChoice(2) }>
            <Image source={require('./Resources/scissors.png')} style={styles.image}/>
          </TouchableHighlight>

        </View>

        <View style = {styles.pressStart}>
          {pressStart}
        </View>
      </View>
      );
    }
}

var styles = StyleSheet.create({
    container:{
        backgroundColor: '#34495E',
        height: 1000,
    },

    scores: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#2ECC71' ,
      marginTop: 64,
      padding: 5,
    },

    titles: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 5,
    },

    result: {
      alignItems: 'center',
      backgroundColor: '#3498DB',
      padding: 5,
      height: 40,
    },

    pressStart:{
      flexDirection: 'row',
      alignItems: 'center',
  },

      flowRight: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 200,

      },

      description: {
        textAlign: 'center',
        fontSize: 24,
        color: '#ECF0F1',
        flex: 1,
      },

      descriptionTitle: {
        textAlign: 'center',
        fontSize: 24,
        color: '#ECF0F1',
        flex: 1,
      },

      button: {
        height: 98,
        width: 10,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderRadius: 100,
        justifyContent: 'center',
        margin: 13,
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
        margin: 45,
        marginTop: 125,
      }
});

module.exports = TheGame;
