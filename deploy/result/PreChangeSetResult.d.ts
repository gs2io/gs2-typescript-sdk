import IResult from '../../core/interface/IResult';
export default class PreChangeSetResult implements IResult {
    private uploadToken;
    private uploadUrl;
    getUploadToken(): string | null;
    setUploadToken(uploadToken: string | null): this;
    withUploadToken(uploadToken: string | null): this;
    getUploadUrl(): string | null;
    setUploadUrl(uploadUrl: string | null): this;
    withUploadUrl(uploadUrl: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): PreChangeSetResult;
    toDict(): {
        [key: string]: any;
    };
}
