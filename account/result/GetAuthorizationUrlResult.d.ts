import IResult from '../../core/interface/IResult';
export default class GetAuthorizationUrlResult implements IResult {
    private authorizationUrl;
    getAuthorizationUrl(): string | null;
    setAuthorizationUrl(authorizationUrl: string | null): this;
    withAuthorizationUrl(authorizationUrl: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetAuthorizationUrlResult;
    toDict(): {
        [key: string]: any;
    };
}
