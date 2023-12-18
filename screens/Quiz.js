import { View, Text, Pressable } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/Header.js'
import styles from '../styles/style.js'
import { useState } from "react";
import { ScrollView } from "react-native";

const questions = [
    {
        questionText: 'Which of the following years had the most people in the workforce in Stockholm?',
        answers: ["2019", "2021", "2022"],
        correctAnswerIndex: 2
    },

    {
        questionText: 'Which of the following finnish cities has the highest migration rate?',
        answers: ["Helsinki", "Tampere", "Turku"],
        correctAnswerIndex: 0
    },

    {
        questionText: 'Which year saw a decrease in working age population in Stavanger?',
        answers: ["2020", "2021", "2022"],
        correctAnswerIndex: 2
    },

    {
        questionText: 'What is the only Icelandic city that you can learn about here?',
        answers: ["Kopavogur", "Reykjavik", "Akureyri"],
        correctAnswerIndex: 1
    },

    {
        questionText: 'Which danish city had the least residents with over 13 years of studies in 2022?',
        answers: ["Odense", "Aalborg", "Aarhus"],
        correctAnswerIndex: 0
    },
]

export default Quiz = () => {

    const [isStart, setIsStart] = useState(false)
    const [questionIndex, setQuestionIndex] = useState(0)
    const [correctAnswers, setCorrectAnswers] = useState(0)
    const [quizCompleted, setQuizCompleted] = useState(false)

    const handleAnswerSelection = (selectedAnswerIndex) => {
        const currentQuestion = questions[questionIndex];

        if (selectedAnswerIndex === currentQuestion.correctAnswerIndex) {
            setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
        }

        // Move to the next question
        setQuestionIndex((prevQuestionIndex) => {
            if (prevQuestionIndex === questions.length - 1) {
                // End the quiz
                setQuizCompleted(true);
                return prevQuestionIndex; // Do not increment further
            } else {
                return prevQuestionIndex + 1;
            }
        });
    }

    const results = () => {
        return (
            <View style={styles.quizContainer}>
                <Text style={styles.header}>Quiz completed!</Text>
                <Text style={styles.quizResults}>You got {correctAnswers} out of {questions.length} questions right!</Text>
                <Pressable onPress={() => [setQuestionIndex(0), setCorrectAnswers(0), setQuizCompleted(false), setIsStart(false)]}>
                    {({ pressed }) => (
                        <Text style={[styles.quizStart, { color: pressed ? '#000000' : '#FFFFFF', borderColor: pressed ? '#000000' : '#FFFFFF' }]}>Restart</Text>
                    )}
                </Pressable>
            </View>
        )
    }

    return (
        <LinearGradient
            colors={['#77a8d6', '#083455', '#7c056e']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0, 0.5, 1]}
            style={{ flex: 1 }}
        >
            <>
                <Header />
                <ScrollView>
                    {!isStart ?
                        <View style={styles.quizStartContainer}>
                            <Text style={styles.header}>QUIZ</Text>

                            <Pressable onPress={() => setIsStart(true)}>
                                {({ pressed }) => (
                                    <Text style={[styles.quizStart, { color: pressed ? '#000000' : '#FFFFFF', borderColor: pressed ? '#000000' : '#FFFFFF' }]}>START HERE</Text>
                                )}
                            </Pressable>
                        </View>
                        :
                        quizCompleted ? results() :
                            <View>
                                <Text style={styles.quizQuestion}>{questions[questionIndex].questionText}</Text>
                                <View style={styles.quizContainer}>
                                    {questions[questionIndex].answers.map((answer, index) => (
                                        <Pressable key={index}>
                                            {({ pressed }) => (
                                                <Text style={[styles.quizOptions, { color: pressed ? '#000000' : '#FFFFFF', borderColor: pressed ? '#000000' : '#FFFFFF' }]} onPress={() => handleAnswerSelection(index)}>
                                                    {answer}
                                                </Text>
                                            )}
                                        </Pressable>
                                    ))}
                                </View>
                            </View>
                    }

                </ScrollView>
            </>
        </LinearGradient>
    )
}