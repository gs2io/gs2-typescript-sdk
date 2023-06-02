import IModel from '../../core/interface/IModel';
export default class ChatNamespaceStatistics implements IModel {
    private post;
    private createRoom;
    private deleteRoom;
    private createSubscribe;
    private deleteSubscribe;
    getPost(): number | null;
    setPost(post: number | null): this;
    withPost(post: number | null): this;
    getCreateRoom(): number | null;
    setCreateRoom(createRoom: number | null): this;
    withCreateRoom(createRoom: number | null): this;
    getDeleteRoom(): number | null;
    setDeleteRoom(deleteRoom: number | null): this;
    withDeleteRoom(deleteRoom: number | null): this;
    getCreateSubscribe(): number | null;
    setCreateSubscribe(createSubscribe: number | null): this;
    withCreateSubscribe(createSubscribe: number | null): this;
    getDeleteSubscribe(): number | null;
    setDeleteSubscribe(deleteSubscribe: number | null): this;
    withDeleteSubscribe(deleteSubscribe: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ChatNamespaceStatistics | null;
    toDict(): {
        [key: string]: any;
    };
}
