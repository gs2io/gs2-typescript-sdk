import AbstractGs2RestClient from '../core/AbstractGs2RestClient';
import { Gs2RestSession } from '../core/model';
import * as Request from './request';
import * as Result from './result';
export default class Gs2ScriptRestClient extends AbstractGs2RestClient {
    static ENDPOINT_HOST: string | null;
    constructor(session: Gs2RestSession);
    describeNamespaces(request: Request.DescribeNamespacesRequest): Promise<Result.DescribeNamespacesResult>;
    createNamespace(request: Request.CreateNamespaceRequest): Promise<Result.CreateNamespaceResult>;
    getNamespaceStatus(request: Request.GetNamespaceStatusRequest): Promise<Result.GetNamespaceStatusResult>;
    getNamespace(request: Request.GetNamespaceRequest): Promise<Result.GetNamespaceResult>;
    updateNamespace(request: Request.UpdateNamespaceRequest): Promise<Result.UpdateNamespaceResult>;
    deleteNamespace(request: Request.DeleteNamespaceRequest): Promise<Result.DeleteNamespaceResult>;
    getServiceVersion(request: Request.GetServiceVersionRequest): Promise<Result.GetServiceVersionResult>;
    describeScripts(request: Request.DescribeScriptsRequest): Promise<Result.DescribeScriptsResult>;
    createScript(request: Request.CreateScriptRequest): Promise<Result.CreateScriptResult>;
    createScriptFromGitHub(request: Request.CreateScriptFromGitHubRequest): Promise<Result.CreateScriptFromGitHubResult>;
    getScript(request: Request.GetScriptRequest): Promise<Result.GetScriptResult>;
    updateScript(request: Request.UpdateScriptRequest): Promise<Result.UpdateScriptResult>;
    updateScriptFromGitHub(request: Request.UpdateScriptFromGitHubRequest): Promise<Result.UpdateScriptFromGitHubResult>;
    deleteScript(request: Request.DeleteScriptRequest): Promise<Result.DeleteScriptResult>;
    invokeScript(request: Request.InvokeScriptRequest): Promise<Result.InvokeScriptResult>;
    debugInvoke(request: Request.DebugInvokeRequest): Promise<Result.DebugInvokeResult>;
    invokeByStampSheet(request: Request.InvokeByStampSheetRequest): Promise<Result.InvokeByStampSheetResult>;
}
