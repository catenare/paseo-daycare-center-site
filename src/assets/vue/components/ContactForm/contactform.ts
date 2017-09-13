export default {

    data: function () {
        return {
            counter: 0,
            msg: "Goodbye Cruel World",
            question: '',
            answer: 'I cannot give you an answer until you ask a question!'
        }
    },
    computed: {
        // a computed getter
        reversedMessage: function () {
            return this.msg.split('').reverse().join('')
        }
    },
    methods: {
        now: function () {
           return Date.now()
        }
    }
};
