import axios from "axios";
import Validator from "vee-validate";
import Vue from "vue";
import Component from "vue-class-component";
import {mask} from "vue-the-mask";
import {TheMask} from "vue-the-mask";
import getFinger from "../../../ts/fingerprint";
@Component(
    {
        components: {TheMask},
        directives: {mask},
        props:
        {
            captcha: {
                type: Promise,
            },
            url: {
                type: String,
            },
        },
    })
export default class ContactForm extends Vue {
    protected url: string;
    protected captcha: Promise<any>;
    protected captchaResponse: string = null;
    protected finger: Promise<any>;
    protected fingerprint: string = null;
    protected fullname: string = null;
    protected email: string = null;
    protected telephone: string = null;
    protected message: string = null;
    protected isSubmitDisabled: boolean = true;
    protected rcaptSigKey: string =  "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
    // demo secret key: 6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe
    protected rcaptId: number = 0; // will be used later
    protected hideLoader: boolean = true;
    protected hideForm: boolean = false;
    protected hideMessage: boolean = true;
    protected resultMessage: object = null;
    protected nonce: string = null;
    protected pascheck: string = null;

    protected getInitHeaders: any = (result) => {
        console.log("init headers:", result);
        this.fingerprint = result;

        axios( {
                   headers: { "PAS-Fingerprint": result },
                   method: "get",
                   url: this.url,
               } )
            .then( (response) => {
                this.setHeaders(response);
            } )
            .catch( (error) => {
                console.log("error:", error)
            } );
    }

    protected setHeaders: any = (response) => {
        this.$nextTick( () => {
            this.fingerprint = response.headers["pas-fingerprint"];
            this.nonce = response.headers[ "pas-nonce" ];
            this.pascheck = response.headers[ "pas-check" ];
        });
        console.log('fingerprint:', this.fingerprint, 'nonce:', this.nonce, 'pascheck:', this.pascheck);
    }

    protected mounted() {
        getFinger.then( (result) => this.getInitHeaders(result) );
        this.captcha.then( (captcha) => captcha.render("recaptcha", {
            callback: this.validate_captcha,
            sitekey: this.rcaptSigKey,
        }));
    }

    protected validate_captcha(response) {
        this.captchaResponse = response;
        this.isSubmitDisabled = false;
    }

    protected validateBeforeSubmit() {
        this.$validator.validateAll().then((result) => {
            if (result) {
                this.hideLoader = false;
                this.hideForm = !this.hideLoader;
                axios(
                    {
                        data: {
                            captcha: this.captchaResponse,
                            email: this.email,
                            fingerprint: this.fingerprint,
                            fullname: this.fullname,
                            message: this.message,
                            telephone: this.telephone,
                           },
                        headers: {
                            "PAS-Check": this.pascheck,
                            "PAS-Fingerprint": this.fingerprint,
                            "PAS-Nonce": this.nonce,
                            },
                        method: "post",
                        url: this.url,
                    })
                     .then( (response) => {
                         this.hideLoader = true;
                         this.hideMessage = !this.hideLoader;
                         this.resultMessage = response.data;
                })
                    .catch( (response) => {
                        this.hideLoader = true;
                        this.hideMessage = !this.hideLoader;
                    });
                return;
            }
            console.log("errors in form");
        });
    }
}
