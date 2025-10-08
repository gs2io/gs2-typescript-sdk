import IModel from '../../core/interface/IModel';
export default class GooglePlayRealtimeNotificationMessage implements IModel {
    private data;
    private messageId;
    private publishTime;
    getData(): string | null;
    setData(data: string | null): this;
    withData(data: string | null): this;
    getMessageId(): string | null;
    setMessageId(messageId: string | null): this;
    withMessageId(messageId: string | null): this;
    getPublishTime(): string | null;
    setPublishTime(publishTime: string | null): this;
    withPublishTime(publishTime: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GooglePlayRealtimeNotificationMessage | null;
    toDict(): {
        [key: string]: any;
    };
}
