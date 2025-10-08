import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class FriendNamespaceDistributions implements IModel {
    private acceptByUser;
    private rejectByUser;
    private sendRequestByUser;
    private newFollowByUser;
    getAcceptByUser(): Gs2Watch.FriendNamespaceAcceptByUserDistribution | null;
    setAcceptByUser(acceptByUser: Gs2Watch.FriendNamespaceAcceptByUserDistribution | null): this;
    withAcceptByUser(acceptByUser: Gs2Watch.FriendNamespaceAcceptByUserDistribution | null): this;
    getRejectByUser(): Gs2Watch.FriendNamespaceRejectByUserDistribution | null;
    setRejectByUser(rejectByUser: Gs2Watch.FriendNamespaceRejectByUserDistribution | null): this;
    withRejectByUser(rejectByUser: Gs2Watch.FriendNamespaceRejectByUserDistribution | null): this;
    getSendRequestByUser(): Gs2Watch.FriendNamespaceSendRequestByUserDistribution | null;
    setSendRequestByUser(sendRequestByUser: Gs2Watch.FriendNamespaceSendRequestByUserDistribution | null): this;
    withSendRequestByUser(sendRequestByUser: Gs2Watch.FriendNamespaceSendRequestByUserDistribution | null): this;
    getNewFollowByUser(): Gs2Watch.FriendNamespaceNewFollowByUserDistribution | null;
    setNewFollowByUser(newFollowByUser: Gs2Watch.FriendNamespaceNewFollowByUserDistribution | null): this;
    withNewFollowByUser(newFollowByUser: Gs2Watch.FriendNamespaceNewFollowByUserDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): FriendNamespaceDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
