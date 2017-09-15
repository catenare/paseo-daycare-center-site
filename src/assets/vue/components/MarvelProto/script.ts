import axios from 'axios'

export default {

    data: () => (
        {
            errors: [],
            greeting: "User List",
            isLoaded: false,
            modal: [],
            screenScroll: [],
            users: [],
        }
    ),

  mounted() {
        axios(
            {
                method: "GET",
                url: "https://randomuser.me/api/?results=30",
            })
            .then(  (response) => {
                this.users = response.data.results;
                this.isLoaded = true;
            })
            .catch((e) => {
                this.errors.push(e);
            });
    },

    methods: {
        fullname: (user) => {
            return user.name.first + " " + user.name.last;
        },
        showModal: (e) => {
            const transOriginNames = {
                    MozTransformOrigin    : "MozTransformOrigin",
                    msTransformOrigin     : "msTransformOrigin",
                    transformOrigin       : "transformOrigin",
                    webkitTransformOrigin : "webkitTransformOrigin",
                };
            const target = e.target;
            const targetCoords = target.getBoundingClientRect();

            if (target.nodeName === "IMG") {
                for (const name in transOriginNames) {
                    this.modal.style[name] = (target.offsetLeft + (targetCoords.width / 2)) + "px "
                        + ((target.offsetTop + (targetCoords.height / 2)) - this.screenScroll.scrollTop) + "px";
                }
            }


            console.log(target.nodeName);
        },

    },
};
