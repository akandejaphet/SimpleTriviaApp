const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3C6E81',
  },
  contentContainer: {
    height: '60%',
    width: '100%',
    alignItems: 'center',
    marginTop: '25%',
  },
  text: {
    color: '#FEFBF5',
  },
  textMargin: {
    marginVertical: 15,
  },
  answersContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  answer: {
    padding: 15,
    margin: 5,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  answerText: {
    fontSize: 25,
    color: '#3C6E81',
  },
  questionContainer: {
    marginVertical: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dash: {
    width: '20%',
    minWidth: 10,
    borderColor: '#FEFBF5',
    borderWidth: 0.5,
    alignSelf: 'flex-end',
  },
  questionPadding: {
    paddingHorizontal: 10,
  },
  footerContainer: {
    height: '40%',
    width: '100%',
    padding: '15%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  footerButton: {
    alignSelf: 'center',
    backgroundColor: '#6493A7',
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  footerText: {
    color: '#fff',
    fontWeight: '700',
  },
});
