import isVAlidEmail from "./isVAlidEmail.js"

export default class User {
    constructor(name, email, role){
        this.name = name
        this.email = email
        this.role = role
    }

    async #checkEmail(email){
        if(isVAlidEmail(email)){
            const emailResp = await fetch('https://mysite.com.com/api/free-email?email='+email)
            const resp = emailResp.json()
            return resp.status
        }
        return false
    }
    async changeEmail(newEmail){
        if(newEmail!=='' && await this.#checkEmail(this.email)){
            this.email = newEmail
        }
    }

}

// const messages = [
//     'Enter email',
//     'Invalid email',
//     'Success'
// ]

// const status = await changeEmail('djsgjsgd@.dfg')

// if(status === 2){
//     toast.success(messages[status])
// }else {
//     toast.error(messages[status])
// }

// const response {
//     status:'error',//'success' | 'warning',
//     msg:'',
//     data:{
        
//     }
// }

// toast[response.status](response.msg)