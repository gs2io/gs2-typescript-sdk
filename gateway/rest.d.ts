import AbstractGs2RestClient from '../core/AbstractGs2RestClient';
import { Gs2RestSession } from '../core/model';
import * as Request from './request';
import * as Result from './result';
export default class Gs2GatewayRestClient extends AbstractGs2RestClient {
    constructor(session: Gs2RestSession);
    describeNamespaces(request: Request.DescribeNamespacesRequest): Promise<Result.DescribeNamespacesResult>;
    createNamespace(request: Request.CreateNamespaceRequest): Promise<Result.CreateNamespaceResult>;
    getNamespaceStatus(request: Request.GetNamespaceStatusRequest): Promise<Result.GetNamespaceStatusResult>;
    getNamespace(request: Request.GetNamespaceRequest): Promise<Result.GetNamespaceResult>;
    updateNamespace(request: Request.UpdateNamespaceRequest): Promise<Result.UpdateNamespaceResult>;
    deleteNamespace(request: Request.DeleteNamespaceRequest): Promise<Result.DeleteNamespaceResult>;
    describeWebSocketSessions(request: Request.DescribeWebSocketSessionsRequest): Promise<Result.DescribeWebSocketSessionsResult>;
    describeWebSocketSessionsByUserId(request: Request.DescribeWebSocketSessionsByUserIdRequest): Promise<Result.DescribeWebSocketSessionsByUserIdResult>;
    setUserId(request: Request.SetUserIdRequest): Promise<Result.SetUserIdResult>;
    setUserIdByUserId(request: Request.SetUserIdByUserIdRequest): Promise<Result.SetUserIdByUserIdResult>;
    sendNotification(request: Request.SendNotificationRequest): Promise<Result.SendNotificationResult>;
    setFirebaseToken(request: Request.SetFirebaseTokenRequest): Promise<Result.SetFirebaseTokenResult>;
    setFirebaseTokenByUserId(request: Request.SetFirebaseTokenByUserIdRequest): Promise<Result.SetFirebaseTokenByUserIdResult>;
    getFirebaseToken(request: Request.GetFirebaseTokenRequest): Promise<Result.GetFirebaseTokenResult>;
    getFirebaseTokenByUserId(request: Request.GetFirebaseTokenByUserIdRequest): Promise<Result.GetFirebaseTokenByUserIdResult>;
    deleteFirebaseToken(request: Request.DeleteFirebaseTokenRequest): Promise<Result.DeleteFirebaseTokenResult>;
    deleteFirebaseTokenByUserId(request: Request.DeleteFirebaseTokenByUserIdRequest): Promise<Result.DeleteFirebaseTokenByUserIdResult>;
    sendMobileNotificationByUserId(request: Request.SendMobileNotificationByUserIdRequest): Promise<Result.SendMobileNotificationByUserIdResult>;
}
