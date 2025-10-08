import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class InboxNamespaceDistributions implements IModel {
    private sendByUser;
    private readElapsedMinutes;
    getSendByUser(): Gs2Watch.InboxNamespaceSendByUserDistribution | null;
    setSendByUser(sendByUser: Gs2Watch.InboxNamespaceSendByUserDistribution | null): this;
    withSendByUser(sendByUser: Gs2Watch.InboxNamespaceSendByUserDistribution | null): this;
    getReadElapsedMinutes(): Gs2Watch.InboxNamespaceReadElapsedMinutesDistribution | null;
    setReadElapsedMinutes(readElapsedMinutes: Gs2Watch.InboxNamespaceReadElapsedMinutesDistribution | null): this;
    withReadElapsedMinutes(readElapsedMinutes: Gs2Watch.InboxNamespaceReadElapsedMinutesDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InboxNamespaceDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
