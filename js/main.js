var app = new Vue({
    el: '#app',
    data: {
        currentQuiz: 0,
        quizzes:[
            {
                'type': '',
                'description': '',
                'option1':'',
                'option2':'',
                'option3':'',
                'option4':'',
                'answer': null,
            }
        ],
        is_right_answer: null,
    },
    mounted () {
        axios
            .get('quizzes.json')
            .then(response => {this.quizzes = response.data;this.currentQuiz=Math.floor(Math.random()*this.quizzes.length);});
    },
    methods: {
        check: function (quiz, opt_num) {
            if (opt_num==quiz.answer){
                this.is_right_answer=true;
            }else{
                this.is_right_answer=false;
            }
        },
        getRandomQuizNum: function () {
            this.is_right_answer=null;
            this.currentQuiz = Math.floor(Math.random()*this.quizzes.length);
        }
    }
})