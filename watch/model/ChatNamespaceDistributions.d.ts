import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class ChatNamespaceDistributions implements IModel {
    private postByRoom;
    private postByUser;
    private postByCategory;
    getPostByRoom(): Gs2Watch.ChatNamespacePostByRoomDistribution | null;
    setPostByRoom(postByRoom: Gs2Watch.ChatNamespacePostByRoomDistribution | null): this;
    withPostByRoom(postByRoom: Gs2Watch.ChatNamespacePostByRoomDistribution | null): this;
    getPostByUser(): Gs2Watch.ChatNamespacePostByUserDistribution | null;
    setPostByUser(postByUser: Gs2Watch.ChatNamespacePostByUserDistribution | null): this;
    withPostByUser(postByUser: Gs2Watch.ChatNamespacePostByUserDistribution | null): this;
    getPostByCategory(): Gs2Watch.ChatNamespacePostByCategoryDistribution | null;
    setPostByCategory(postByCategory: Gs2Watch.ChatNamespacePostByCategoryDistribution | null): this;
    withPostByCategory(postByCategory: Gs2Watch.ChatNamespacePostByCategoryDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ChatNamespaceDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
