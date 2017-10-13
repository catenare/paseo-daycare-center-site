const getCaptcha  = new Promise( (resolve) => {

    if ( typeof Window !== "undefined" ) {
        ( <any> window).initCaptcha = () => {
            resolve(( <any> window).grecaptcha);
        };
    }
});

export default getCaptcha;