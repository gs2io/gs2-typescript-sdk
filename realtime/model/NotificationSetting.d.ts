import IModel from '../../core/interface/IModel';
import * as Gs2Realtime from '../../realtime/model';
export default class NotificationSetting implements IModel {
    private gatewayNamespaceId;
    private enableTransferMobileNotification;
    private sound;
    private mobileNotificationMessages;
    private enable;
    getGatewayNamespaceId(): string | null;
    setGatewayNamespaceId(gatewayNamespaceId: string | null): this;
    withGatewayNamespaceId(gatewayNamespaceId: string | null): this;
    getEnableTransferMobileNotification(): boolean | null;
    setEnableTransferMobileNotification(enableTransferMobileNotification: boolean | null): this;
    withEnableTransferMobileNotification(enableTransferMobileNotification: boolean | null): this;
    getSound(): string | null;
    setSound(sound: string | null): this;
    withSound(sound: string | null): this;
    getMobileNotificationMessages(): Gs2Realtime.MobileNotificationMessage[] | null;
    setMobileNotificationMessages(mobileNotificationMessages: Gs2Realtime.MobileNotificationMessage[] | null): this;
    withMobileNotificationMessages(mobileNotificationMessages: Gs2Realtime.MobileNotificationMessage[] | null): this;
    getEnable(): string | null;
    setEnable(enable: string | null): this;
    withEnable(enable: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): NotificationSetting | null;
    toDict(): {
        [key: string]: any;
    };
}
