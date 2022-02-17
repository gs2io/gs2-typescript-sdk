import IResult from '../../core/interface/IResult';
export default class PrepareUpdateCurrentNewsMasterResult implements IResult {
    private uploadToken;
    private templateUploadUrl;
    getUploadToken(): string | null;
    setUploadToken(uploadToken: string | null): this;
    withUploadToken(uploadToken: string | null): this;
    getTemplateUploadUrl(): string | null;
    setTemplateUploadUrl(templateUploadUrl: string | null): this;
    withTemplateUploadUrl(templateUploadUrl: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): PrepareUpdateCurrentNewsMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
