import IResult from '../../core/interface/IResult';
export default class SendNotificationResult implements IResult {
    private protocol;
    getProtocol(): string | null;
    setProtocol(protocol: string | null): this;
    withProtocol(protocol: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SendNotificationResult;
    toDict(): {
        [key: string]: any;
    };
}
