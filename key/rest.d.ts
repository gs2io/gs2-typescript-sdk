import AbstractGs2RestClient from '../core/AbstractGs2RestClient';
import { Gs2RestSession } from '../core/model';
import * as Request from './request';
import * as Result from './result';
export default class Gs2KeyRestClient extends AbstractGs2RestClient {
    constructor(session: Gs2RestSession);
    describeNamespaces(request: Request.DescribeNamespacesRequest): Promise<Result.DescribeNamespacesResult>;
    createNamespace(request: Request.CreateNamespaceRequest): Promise<Result.CreateNamespaceResult>;
    getNamespaceStatus(request: Request.GetNamespaceStatusRequest): Promise<Result.GetNamespaceStatusResult>;
    getNamespace(request: Request.GetNamespaceRequest): Promise<Result.GetNamespaceResult>;
    updateNamespace(request: Request.UpdateNamespaceRequest): Promise<Result.UpdateNamespaceResult>;
    deleteNamespace(request: Request.DeleteNamespaceRequest): Promise<Result.DeleteNamespaceResult>;
    describeKeys(request: Request.DescribeKeysRequest): Promise<Result.DescribeKeysResult>;
    createKey(request: Request.CreateKeyRequest): Promise<Result.CreateKeyResult>;
    updateKey(request: Request.UpdateKeyRequest): Promise<Result.UpdateKeyResult>;
    getKey(request: Request.GetKeyRequest): Promise<Result.GetKeyResult>;
    deleteKey(request: Request.DeleteKeyRequest): Promise<Result.DeleteKeyResult>;
    encrypt(request: Request.EncryptRequest): Promise<Result.EncryptResult>;
    decrypt(request: Request.DecryptRequest): Promise<Result.DecryptResult>;
    describeGitHubApiKeys(request: Request.DescribeGitHubApiKeysRequest): Promise<Result.DescribeGitHubApiKeysResult>;
    createGitHubApiKey(request: Request.CreateGitHubApiKeyRequest): Promise<Result.CreateGitHubApiKeyResult>;
    updateGitHubApiKey(request: Request.UpdateGitHubApiKeyRequest): Promise<Result.UpdateGitHubApiKeyResult>;
    getGitHubApiKey(request: Request.GetGitHubApiKeyRequest): Promise<Result.GetGitHubApiKeyResult>;
    deleteGitHubApiKey(request: Request.DeleteGitHubApiKeyRequest): Promise<Result.DeleteGitHubApiKeyResult>;
}
