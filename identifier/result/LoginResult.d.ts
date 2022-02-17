import IResult from '../../core/interface/IResult';
export default class LoginResult implements IResult {
    private accessToken;
    private tokenType;
    private expiresIn;
    getAccessToken(): string | null;
    setAccessToken(accessToken: string | null): this;
    withAccessToken(accessToken: string | null): this;
    getTokenType(): string | null;
    setTokenType(tokenType: string | null): this;
    withTokenType(tokenType: string | null): this;
    getExpiresIn(): number | null;
    setExpiresIn(expiresIn: number | null): this;
    withExpiresIn(expiresIn: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LoginResult;
    toDict(): {
        [key: string]: any;
    };
}
