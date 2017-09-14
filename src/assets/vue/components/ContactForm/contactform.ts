export default {

    data: function () {
        return {
            order: -1,
            stories: [
                {
                    plot: "I crased my car today",
                    writer: "Alex",
                    upvotes: 28
                },
                {
                    plot: "Yesterday, someone stole my bag!",
                    writer: "John",
                    upvotes: 8
                },
                {
                    plot: "Someone ate my chocolate...",
                    writer: "John",
                    upvotes: 51
                },
                {
                    plot: "I ate someone's chocolate",
                    writer: "Alex",
                    upvotes: 74
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
