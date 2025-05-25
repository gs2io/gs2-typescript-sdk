import AbstractGs2RestClient from '../core/AbstractGs2RestClient';
import { Gs2RestSession } from '../core/model';
import * as Request from './request';
import * as Result from './result';
export default class Gs2RealtimeRestClient extends AbstractGs2RestClient {
    constructor(session: Gs2RestSession);
    describeNamespaces(request: Request.DescribeNamespacesRequest): Promise<Result.DescribeNamespacesResult>;
    createNamespace(request: Request.CreateNamespaceRequest): Promise<Result.CreateNamespaceResult>;
    getNamespaceStatus(request: Request.GetNamespaceStatusRequest): Promise<Result.GetNamespaceStatusResult>;
    getNamespace(request: Request.GetNamespaceRequest): Promise<Result.GetNamespaceResult>;
    updateNamespace(request: Request.UpdateNamespaceRequest): Promise<Result.UpdateNamespaceResult>;
    deleteNamespace(request: Request.DeleteNamespaceRequest): Promise<Result.DeleteNamespaceResult>;
    now(request: Request.NowRequest): Promise<Result.NowResult>;
    getServiceVersion(request: Request.GetServiceVersionRequest): Promise<Result.GetServiceVersionResult>;
    describeRooms(request: Request.DescribeRoomsRequest): Promise<Result.DescribeRoomsResult>;
    wantRoom(request: Request.WantRoomRequest): Promise<Result.WantRoomResult>;
    getRoom(request: Request.GetRoomRequest): Promise<Result.GetRoomResult>;
    deleteRoom(request: Request.DeleteRoomRequest): Promise<Result.DeleteRoomResult>;
}
