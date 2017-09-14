export default {

    data: function () {
        return {
            msg: 'test message again',
            order: -1,
            stories: [
                {
                    plot: "I crased my car today",
                    writer: "alex",
                    upvotes: 28
                },
                {
                    plot: "Yesterday, someone stole my bag!",
                    writer: "john",
                    upvotes: 8
                },
                {
                    plot: "Someone ate my chocolate...",
                    writer: "john",
                    upvotes: 51
                },
                {
                    plot: "I ate someone's chocolate",
                    writer: "alex",
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
        famous: (stories) => {
            return stories.filter(  (item) => {

                console.log(item)

                return item.upvotes > 20
            })
        },
        now: function () {
           return Date.now()
        }
    },
    filters: {
        capitalize: (value) => {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
};
