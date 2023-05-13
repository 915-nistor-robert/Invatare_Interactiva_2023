export const loginText = {
    title: <h1>Let's get to work</h1>,
    description: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>,
    forgotPassword: <p>forgot password? <a href={''}>click here</a> to get a new one</p>,
    register: <p>Not a member yet? No problem!</p>
}

export const basePath = 'http://localhost:4201';

class StickyNote {
    constructor(id, title, subject,  description) {
        this.id = id;
        this.title = title;
        this.subject = subject;
        this.description = description;
    }
}


export function generate_token(length){
    //edit the token allowed characters
    var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
    var b = [];
    for (var i=0; i<length; i++) {
        var j = (Math.random() * (a.length-1)).toFixed(0);
        b[i] = a[j];
    }
    return b.join("");
}
export default StickyNote;
