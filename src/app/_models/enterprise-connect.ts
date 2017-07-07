export class EnterpriseConnect {

    constructor(public baseUrl : string, public secret: string){ };
}


export class AuthenticationToken {

    constructor(public token : string, public user: string, public result: string){ };
}
