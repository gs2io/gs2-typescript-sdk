import IModel from '../../core/interface/IModel';
export default class LogSetting implements IModel {
    private loggingNamespaceId;
    getLoggingNamespaceId(): string | null;
    setLoggingNamespaceId(loggingNamespaceId: string | null): this;
    withLoggingNamespaceId(loggingNamespaceId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LogSetting | null;
    toDict(): {
        [key: string]: any;
    };
}
