import { View, Text, Pressable } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/Header.js'
import styles from '../styles/style.js'
import { useState } from "react";

const questions = [
    {
        questionText: 'Question 1',
        answers: ["Answer 1", "Answer 2", "Answer 3"],
        correctAnswerIndex: 0
    },

    {
        questionText: 'Question 2',
        answers: ["Answer 1", "Answer 2", "Answer 3"],
        correctAnswerIndex: 0
    },
    
    {
        questionText: 'Question 3',
        answers: ["Answer 1", "Answer 2", "Answer 3"],
        correctAnswerIndex: 0
    },

    {
        questionText: 'Question 4',
        answers: ["Answer 1", "Answer 2", "Answer 3"],
        correctAnswerIndex: 0
    },

    {
        questionText: 'Question 5',
        answers: ["Answer 1", "Answer 2", "Answer 3"],
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
        setQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1);

        if (questionIndex === questions.length - 1) {
            // End the quiz
            setQuizCompleted(true);
        }
    }

    const results = () => {
        return (
            <View>
                <Text>Quiz completed!</Text>
                <Text>You got {correctAnswers} out of {questions.length} questions right!</Text>
                <Text onPress={() => [setQuestionIndex(0), setCorrectAnswers(0), setQuizCompleted(false), setIsStart(false)]}>Restart</Text>
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
                {!isStart ? 
                <View style={styles.container}>
                    <Text style={styles.header}>QUIZ</Text>

                    <Pressable onPress={() => setIsStart(true)}>
                        <Text style={styles.quizStart}>START HERE</Text>
                    </Pressable>
                </View>
                :
                quizCompleted ? results() :
                <View>
                        <Text>{questions[questionIndex].questionText}</Text>
                        {questions[questionIndex].answers.map((answer, index) => (
                            <Text key={index} onPress={() => handleAnswerSelection(index)}>
                                {answer}
                            </Text>
                        ))}
                    </View>
                }
                
            </>
        </LinearGradient>
    )
}