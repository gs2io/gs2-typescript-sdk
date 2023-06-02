import IModel from '../../core/interface/IModel';
import InboxNamespaceSendByUserDistribution from './InboxNamespaceSendByUserDistribution';
import InboxNamespaceReadElapsedMinutesDistribution from './InboxNamespaceReadElapsedMinutesDistribution';
export default class InboxNamespaceDistributions implements IModel {
    private sendByUser;
    private readElapsedMinutes;
    getSendByUser(): InboxNamespaceSendByUserDistribution | null;
    setSendByUser(sendByUser: InboxNamespaceSendByUserDistribution | null): this;
    withSendByUser(sendByUser: InboxNamespaceSendByUserDistribution | null): this;
    getReadElapsedMinutes(): InboxNamespaceReadElapsedMinutesDistribution | null;
    setReadElapsedMinutes(readElapsedMinutes: InboxNamespaceReadElapsedMinutesDistribution | null): this;
    withReadElapsedMinutes(readElapsedMinutes: InboxNamespaceReadElapsedMinutesDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InboxNamespaceDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
