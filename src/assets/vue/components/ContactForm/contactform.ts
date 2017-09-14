export default {

    data: function () {
        return {
            stories: [
                {
                    plot: "I crased my car today",
                    writer: "Alex"
                },
                {
                    plot: "Yesterday, someone stole my bag!",
                    writer: "John"
                },
                {
                    plot: "Someone ate my chocolate...",
                    writer: "John"
                },
                {
                    plot: "I ate someone's chocolate",
                    writer: "Alex"
                }
            ]
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
