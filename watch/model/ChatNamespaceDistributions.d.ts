import IModel from '../../core/interface/IModel';
import ChatNamespacePostByRoomDistribution from './ChatNamespacePostByRoomDistribution';
import ChatNamespacePostByUserDistribution from './ChatNamespacePostByUserDistribution';
import ChatNamespacePostByCategoryDistribution from './ChatNamespacePostByCategoryDistribution';
export default class ChatNamespaceDistributions implements IModel {
    private postByRoom;
    private postByUser;
    private postByCategory;
    getPostByRoom(): ChatNamespacePostByRoomDistribution | null;
    setPostByRoom(postByRoom: ChatNamespacePostByRoomDistribution | null): this;
    withPostByRoom(postByRoom: ChatNamespacePostByRoomDistribution | null): this;
    getPostByUser(): ChatNamespacePostByUserDistribution | null;
    setPostByUser(postByUser: ChatNamespacePostByUserDistribution | null): this;
    withPostByUser(postByUser: ChatNamespacePostByUserDistribution | null): this;
    getPostByCategory(): ChatNamespacePostByCategoryDistribution | null;
    setPostByCategory(postByCategory: ChatNamespacePostByCategoryDistribution | null): this;
    withPostByCategory(postByCategory: ChatNamespacePostByCategoryDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ChatNamespaceDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
