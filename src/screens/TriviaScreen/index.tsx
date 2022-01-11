import React, {useEffect, useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {styles} from './style';

const TriviaScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [questionAnswer, setQuestionAnswer] = useState<string>('');
  const [validated, setValidated] = useState<boolean>(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean>(false);

  useEffect(() => {
    setQuestionAnswer('');
    setValidated(false);
    setIsAnswerCorrect(false);
  }, [currentQuestion]);

  const QUESTIONS = [
    {
      engQuestionText: 'The house is small.',
      engQuestionWord: 'house',
      question: 'Das & ist klein.',
      answers: [
        {
          text: 'folgen',
          isCorrect: false,
        },
        {
          text: 'sdsd',
          isCorrect: false,
        },
        {
          text: 'rtrte',
          isCorrect: true,
        },
        {
          text: 'xcxc',
          isCorrect: false,
        },
        {
          text: 'cxcx',
          isCorrect: false,
        },
      ],
    },
    {
      engQuestionText: 'No house is too small.',
      engQuestionWord: 'house',
      question: 'Das & ist klein.',
      answers: [
        {
          text: 'folgen',
          isCorrect: false,
        },
        {
          text: 'sdsd',
          isCorrect: false,
        },
        {
          text: 'rtrte',
          isCorrect: true,
        },
        {
          text: 'xcxc',
          isCorrect: false,
        },
        {
          text: 'cxcx',
          isCorrect: false,
        },
      ],
    },
  ];

  const handleAnswer = (answer: string, index: number) => {
    setQuestionAnswer(answer);
  };

  const validateAnswer = () => {
    if (QUESTIONS.length === currentQuestion + 1 && validated) {
      return;
    } else if (validated) {
      console.log('dsdsd2');
      setCurrentQuestion(q => q + 1);
    } else if (
      QUESTIONS[currentQuestion].answers.filter(
        answer => answer.text === questionAnswer,
      )[0]?.isCorrect
    ) {
      setValidated(true);
      setIsAnswerCorrect(true);
    } else {
      setValidated(true);
      setIsAnswerCorrect(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.contentContainer}>
        <Text style={[styles.text, styles.textMargin]}>
          Fill in the missing word
        </Text>
        <Text style={[styles.text, styles.textMargin]}>
          {QUESTIONS[currentQuestion].engQuestionText}
        </Text>
        <View
          style={[
            styles.questionContainer,
            styles.textMargin,
            {
              alignItems: 'center',
            },
          ]}>
          {QUESTIONS[currentQuestion].question.split(' ').map((q, index) => {
            if (q !== '&') {
              return (
                <Text key={index} style={[styles.text, styles.questionPadding]}>
                  {q}
                </Text>
              );
            } else {
              if (questionAnswer !== '') {
                return (
                  <TouchableOpacity
                    style={[
                      styles.answer,
                      {
                        backgroundColor:
                          validated && !isAnswerCorrect
                            ? '#FF7B88'
                            : validated && isAnswerCorrect
                            ? '#2CE6EA'
                            : '#FFF',
                      },
                    ]}>
                    <Text style={styles.answerText}>{questionAnswer}</Text>
                  </TouchableOpacity>
                );
              } else {
                return <View style={styles.dash} />;
              }
            }
          })}
        </View>
        <View style={[styles.answersContainer, styles.textMargin]}>
          {QUESTIONS[currentQuestion].answers.map((answer, index) => (
            <TouchableOpacity
              onPress={() => handleAnswer(answer.text, index)}
              style={[styles.answer]}
              key={index}>
              <Text style={styles.answerText}>{answer.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View
        style={[
          styles.footerContainer,
          {
            backgroundColor:
              validated && isAnswerCorrect
                ? '#2CE6EA'
                : validated && !isAnswerCorrect
                ? '#FF7B88'
                : 'transparent',
          },
        ]}>
        {validated && isAnswerCorrect ? (
          <Text style={styles.text}>Great Job!</Text>
        ) : validated && !isAnswerCorrect ? (
          <Text style={styles.text}>
            Answer:{' '}
            {
              QUESTIONS[currentQuestion].answers.filter(
                answer => answer.isCorrect,
              )[0].text
            }
          </Text>
        ) : null}
        <Pressable
          disabled={
            questionAnswer === '' &&
            !validated &&
            QUESTIONS.length !== currentQuestion + 1
          }
          onPress={validateAnswer}
          style={[
            styles.footerButton,
            {
              backgroundColor:
                validated && isAnswerCorrect
                  ? '#fff'
                  : questionAnswer !== ''
                  ? '#1EE5EA'
                  : '#6493A7',
            },
          ]}>
          <Text
            style={[
              styles.footerText,
              {color: validated && isAnswerCorrect ? '#2CE6EA' : '#fff'},
            ]}>
            {questionAnswer !== '' && !validated
              ? 'CHECK ANSWER'
              : QUESTIONS.length === currentQuestion + 1 && validated
              ? 'Finished'
              : 'CONTINUE'}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default TriviaScreen;
