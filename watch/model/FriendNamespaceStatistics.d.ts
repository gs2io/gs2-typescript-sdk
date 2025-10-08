import IModel from '../../core/interface/IModel';
export default class FriendNamespaceStatistics implements IModel {
    private accept;
    private reject;
    private sendRequest;
    private follow;
    getAccept(): number | null;
    setAccept(accept: number | null): this;
    withAccept(accept: number | null): this;
    getReject(): number | null;
    setReject(reject: number | null): this;
    withReject(reject: number | null): this;
    getSendRequest(): number | null;
    setSendRequest(sendRequest: number | null): this;
    withSendRequest(sendRequest: number | null): this;
    getFollow(): number | null;
    setFollow(follow: number | null): this;
    withFollow(follow: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): FriendNamespaceStatistics | null;
    toDict(): {
        [key: string]: any;
    };
}
