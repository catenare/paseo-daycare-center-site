import axios from 'axios'

const transOriginNames = {
    MozTransformOrigin    : "MozTransformOrigin",
    msTransformOrigin     : "msTransformOrigin",
    transformOrigin       : "transformOrigin",
    webkitTransformOrigin : "webkitTransformOrigin",
};

let screen_scroll = this;
let modal = this;

export default {

    data: () => (
        {
            avatar: {
                img: "",
                name: "",
            },
            errors: [],
            greeting: "User List",
            isActive: false,
            isLoaded: false,
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
        screen_scroll = this.$el.querySelector(".screen-scroll");
        modal = this.$el.querySelector(".modal");
    },

    methods: {
        fullname: (user) => {
            return user.name.first + " " + user.name.last;
        },
        hideModal() {
            this.isActive = false;
        },
        showModal(e) {
            const target = e.target;
            this.avatar.img = target.getAttribute("data-pic");
            this.avatar.name = target.getAttribute("data-name");
            this.avatar.email = target.getAttribute("data-email");
            const targetCoords = target.getBoundingClientRect();

            if (target.nodeName === "IMG") {
                this.isActive = true;
                for (let name in transOriginNames) {
                    modal.style[name] = (target.offsetLeft + (targetCoords.width / 2)) + "px "
                        + ((target.offsetTop + (targetCoords.height / 2)) - screen_scroll.scrollTop) + "px";
                }
            }

        },
    },
};
