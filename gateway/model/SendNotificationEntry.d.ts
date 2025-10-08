import IModel from '../../core/interface/IModel';
export default class SendNotificationEntry implements IModel {
    private userId;
    private issuer;
    private subject;
    private payload;
    private enableTransferMobileNotification;
    private sound;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getIssuer(): string | null;
    setIssuer(issuer: string | null): this;
    withIssuer(issuer: string | null): this;
    getSubject(): string | null;
    setSubject(subject: string | null): this;
    withSubject(subject: string | null): this;
    getPayload(): string | null;
    setPayload(payload: string | null): this;
    withPayload(payload: string | null): this;
    getEnableTransferMobileNotification(): boolean | null;
    setEnableTransferMobileNotification(enableTransferMobileNotification: boolean | null): this;
    withEnableTransferMobileNotification(enableTransferMobileNotification: boolean | null): this;
    getSound(): string | null;
    setSound(sound: string | null): this;
    withSound(sound: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SendNotificationEntry | null;
    toDict(): {
        [key: string]: any;
    };
}
