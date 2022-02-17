import IModel from '../../core/interface/IModel';
export default class NotificationType implements IModel {
    private category;
    private enableTransferMobilePushNotification;
    getCategory(): number | null;
    setCategory(category: number | null): this;
    withCategory(category: number | null): this;
    getEnableTransferMobilePushNotification(): boolean | null;
    setEnableTransferMobilePushNotification(enableTransferMobilePushNotification: boolean | null): this;
    withEnableTransferMobilePushNotification(enableTransferMobilePushNotification: boolean | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): NotificationType | null;
    toDict(): {
        [key: string]: any;
    };
}
