import IModel from '../../core/interface/IModel';
import FriendNamespaceAcceptByUserDistribution from './FriendNamespaceAcceptByUserDistribution';
import FriendNamespaceRejectByUserDistribution from './FriendNamespaceRejectByUserDistribution';
import FriendNamespaceSendRequestByUserDistribution from './FriendNamespaceSendRequestByUserDistribution';
import FriendNamespaceNewFollowByUserDistribution from './FriendNamespaceNewFollowByUserDistribution';
export default class FriendNamespaceDistributions implements IModel {
    private acceptByUser;
    private rejectByUser;
    private sendRequestByUser;
    private newFollowByUser;
    getAcceptByUser(): FriendNamespaceAcceptByUserDistribution | null;
    setAcceptByUser(acceptByUser: FriendNamespaceAcceptByUserDistribution | null): this;
    withAcceptByUser(acceptByUser: FriendNamespaceAcceptByUserDistribution | null): this;
    getRejectByUser(): FriendNamespaceRejectByUserDistribution | null;
    setRejectByUser(rejectByUser: FriendNamespaceRejectByUserDistribution | null): this;
    withRejectByUser(rejectByUser: FriendNamespaceRejectByUserDistribution | null): this;
    getSendRequestByUser(): FriendNamespaceSendRequestByUserDistribution | null;
    setSendRequestByUser(sendRequestByUser: FriendNamespaceSendRequestByUserDistribution | null): this;
    withSendRequestByUser(sendRequestByUser: FriendNamespaceSendRequestByUserDistribution | null): this;
    getNewFollowByUser(): FriendNamespaceNewFollowByUserDistribution | null;
    setNewFollowByUser(newFollowByUser: FriendNamespaceNewFollowByUserDistribution | null): this;
    withNewFollowByUser(newFollowByUser: FriendNamespaceNewFollowByUserDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): FriendNamespaceDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
