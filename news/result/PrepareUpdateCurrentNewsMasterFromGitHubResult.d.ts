import IResult from '../../core/interface/IResult';
export default class PrepareUpdateCurrentNewsMasterFromGitHubResult implements IResult {
    private uploadToken;
    getUploadToken(): string | null;
    setUploadToken(uploadToken: string | null): this;
    withUploadToken(uploadToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): PrepareUpdateCurrentNewsMasterFromGitHubResult;
    toDict(): {
        [key: string]: any;
    };
}
