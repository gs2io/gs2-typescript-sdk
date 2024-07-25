/*
Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
Reserved.

Licensed under the Apache License, Version 2.0 (the 'License').
You may not use this file except in compliance with the License.
A copy of the License is located at

 http://www.apache.org/licenses/LICENSE-2.0

or in the 'license' file accompanying this file. This file is distributed
on an 'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied. See the License for the specific language governing
permissions and limitations under the License.
 */

import AbstractGs2RestClient from '../core/AbstractGs2RestClient';
import { Gs2Constant, Gs2RestSession } from '../core/model';
import * as Request from './request';
import * as Result from './result';

import axios from 'axios';

export default class Gs2SkillTreeRestClient extends AbstractGs2RestClient {

    constructor(session: Gs2RestSession) {
        super(session);
    }

    public describeNamespaces(request: Request.DescribeNamespacesRequest): Promise<Result.DescribeNamespacesResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/')
            .replace('{service}', 'skill-tree')
            .replace('{region}', this.session.region);
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'pageToken': String(request.getPageToken() ?? null),
            'limit': String(request.getLimit() ?? null),
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.DescribeNamespacesResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public createNamespace(request: Request.CreateNamespaceRequest): Promise<Result.CreateNamespaceResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/')
            .replace('{service}', 'skill-tree')
            .replace('{region}', this.session.region);
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'name': request.getName() ?? null,
            'description': request.getDescription() ?? null,
            'transactionSetting': request.getTransactionSetting()?.toDict() ?? null,
            'releaseScript': request.getReleaseScript()?.toDict() ?? null,
            'restrainScript': request.getRestrainScript()?.toDict() ?? null,
            'logSetting': request.getLogSetting()?.toDict() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.CreateNamespaceResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public getNamespaceStatus(request: Request.GetNamespaceStatusRequest): Promise<Result.GetNamespaceStatusResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/status')
            .replace('{service}', 'skill-tree')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.GetNamespaceStatusResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getNamespace(request: Request.GetNamespaceRequest): Promise<Result.GetNamespaceResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}')
            .replace('{service}', 'skill-tree')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.GetNamespaceResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public updateNamespace(request: Request.UpdateNamespaceRequest): Promise<Result.UpdateNamespaceResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}')
            .replace('{service}', 'skill-tree')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'description': request.getDescription() ?? null,
            'transactionSetting': request.getTransactionSetting()?.toDict() ?? null,
            'releaseScript': request.getReleaseScript()?.toDict() ?? null,
            'restrainScript': request.getRestrainScript()?.toDict() ?? null,
            'logSetting': request.getLogSetting()?.toDict() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.UpdateNamespaceResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public deleteNamespace(request: Request.DeleteNamespaceRequest): Promise<Result.DeleteNamespaceResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}')
            .replace('{service}', 'skill-tree')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.delete(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.DeleteNamespaceResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public dumpUserDataByUserId(request: Request.DumpUserDataByUserIdRequest): Promise<Result.DumpUserDataByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/system/dump/user/{userId}')
            .replace('{service}', 'skill-tree')
            .replace('{region}', this.session.region)
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = request.getTimeOffsetToken() ?? null;
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.DumpUserDataByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public checkDumpUserDataByUserId(request: Request.CheckDumpUserDataByUserIdRequest): Promise<Result.CheckDumpUserDataByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/system/dump/user/{userId}')
            .replace('{service}', 'skill-tree')
            .replace('{region}', this.session.region)
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = request.getTimeOffsetToken() ?? null;
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.CheckDumpUserDataByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public cleanUserDataByUserId(request: Request.CleanUserDataByUserIdRequest): Promise<Result.CleanUserDataByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/system/clean/user/{userId}')
            .replace('{service}', 'skill-tree')
            .replace('{region}', this.session.region)
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = request.getTimeOffsetToken() ?? null;
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.CleanUserDataByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public checkCleanUserDataByUserId(request: Request.CheckCleanUserDataByUserIdRequest): Promise<Result.CheckCleanUserDataByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/system/clean/user/{userId}')
            .replace('{service}', 'skill-tree')
            .replace('{region}', this.session.region)
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = request.getTimeOffsetToken() ?? null;
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.CheckCleanUserDataByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public prepareImportUserDataByUserId(request: Request.PrepareImportUserDataByUserIdRequest): Promise<Result.PrepareImportUserDataByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/system/import/user/{userId}/prepare')
            .replace('{service}', 'skill-tree')
            .replace('{region}', this.session.region)
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = request.getTimeOffsetToken() ?? null;
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.PrepareImportUserDataByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public importUserDataByUserId(request: Request.ImportUserDataByUserIdRequest): Promise<Result.ImportUserDataByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/system/import/user/{userId}')
            .replace('{service}', 'skill-tree')
            .replace('{region}', this.session.region)
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = request.getTimeOffsetToken() ?? null;
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'uploadToken': request.getUploadToken() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.ImportUserDataByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public checkImportUserDataByUserId(request: Request.CheckImportUserDataByUserIdRequest): Promise<Result.CheckImportUserDataByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/system/import/user/{userId}/{uploadToken}')
            .replace('{service}', 'skill-tree')
            .replace('{region}', this.session.region)
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{uploadToken}', String(request.getUploadToken() ?? 'null') === "" ? "null" : String(request.getUploadToken() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = request.getTimeOffsetToken() ?? null;
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.CheckImportUserDataByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeNodeModels(request: Request.DescribeNodeModelsRequest): Promise<Result.DescribeNodeModelsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/model')
            .replace('{service}', 'skill-tree')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.DescribeNodeModelsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getNodeModel(request: Request.GetNodeModelRequest): Promise<Result.GetNodeModelResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/model/{nodeModelName}')
            .replace('{service}', 'skill-tree')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{nodeModelName}', String(request.getNodeModelName() ?? 'null') === "" ? "null" : String(request.getNodeModelName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.GetNodeModelResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeNodeModelMasters(request: Request.DescribeNodeModelMastersRequest): Promise<Result.DescribeNodeModelMastersResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model')
            .replace('{service}', 'skill-tree')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'pageToken': String(request.getPageToken() ?? null),
            'limit': String(request.getLimit() ?? null),
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.DescribeNodeModelMastersResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public createNodeModelMaster(request: Request.CreateNodeModelMasterRequest): Promise<Result.CreateNodeModelMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model')
            .replace('{service}', 'skill-tree')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'name': request.getName() ?? null,
            'description': request.getDescription() ?? null,
            'metadata': request.getMetadata() ?? null,
            'releaseVerifyActions': request.getReleaseVerifyActions()?.map((item) => item.toDict()) ?? null,
            'releaseConsumeActions': request.getReleaseConsumeActions()?.map((item) => item.toDict()) ?? null,
            'restrainReturnRate': request.getRestrainReturnRate() ?? null,
            'premiseNodeNames': request.getPremiseNodeNames() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.CreateNodeModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public getNodeModelMaster(request: Request.GetNodeModelMasterRequest): Promise<Result.GetNodeModelMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model/{nodeModelName}')
            .replace('{service}', 'skill-tree')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{nodeModelName}', String(request.getNodeModelName() ?? 'null') === "" ? "null" : String(request.getNodeModelName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.GetNodeModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public updateNodeModelMaster(request: Request.UpdateNodeModelMasterRequest): Promise<Result.UpdateNodeModelMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model/{nodeModelName}')
            .replace('{service}', 'skill-tree')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{nodeModelName}', String(request.getNodeModelName() ?? 'null') === "" ? "null" : String(request.getNodeModelName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'description': request.getDescription() ?? null,
            'metadata': request.getMetadata() ?? null,
            'releaseVerifyActions': request.getReleaseVerifyActions()?.map((item) => item.toDict()) ?? null,
            'releaseConsumeActions': request.getReleaseConsumeActions()?.map((item) => item.toDict()) ?? null,
            'restrainReturnRate': request.getRestrainReturnRate() ?? null,
            'premiseNodeNames': request.getPremiseNodeNames() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.UpdateNodeModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public deleteNodeModelMaster(request: Request.DeleteNodeModelMasterRequest): Promise<Result.DeleteNodeModelMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model/{nodeModelName}')
            .replace('{service}', 'skill-tree')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{nodeModelName}', String(request.getNodeModelName() ?? 'null') === "" ? "null" : String(request.getNodeModelName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.delete(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.DeleteNodeModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public markReleaseByUserId(request: Request.MarkReleaseByUserIdRequest): Promise<Result.MarkReleaseByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/status/{propertyId}/node/release/mark')
            .replace('{service}', 'skill-tree')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{propertyId}', String(request.getPropertyId() ?? 'null') === "" ? "null" : String(request.getPropertyId() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = request.getDuplicationAvoider() ?? null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = request.getTimeOffsetToken() ?? null;
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'nodeModelNames': request.getNodeModelNames() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.MarkReleaseByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public release(request: Request.ReleaseRequest): Promise<Result.ReleaseResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/status/{propertyId}/node/release')
            .replace('{service}', 'skill-tree')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{propertyId}', String(request.getPropertyId() ?? 'null') === "" ? "null" : String(request.getPropertyId() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = request.getAccessToken() ?? null;
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = request.getDuplicationAvoider() ?? null;
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'nodeModelNames': request.getNodeModelNames() ?? null,
            'config': request.getConfig()?.map((item) => item.toDict()) ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.ReleaseResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public releaseByUserId(request: Request.ReleaseByUserIdRequest): Promise<Result.ReleaseByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/status/{propertyId}/node/release')
            .replace('{service}', 'skill-tree')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{propertyId}', String(request.getPropertyId() ?? 'null') === "" ? "null" : String(request.getPropertyId() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = request.getDuplicationAvoider() ?? null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = request.getTimeOffsetToken() ?? null;
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'nodeModelNames': request.getNodeModelNames() ?? null,
            'config': request.getConfig()?.map((item) => item.toDict()) ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.ReleaseByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public markRestrainByUserId(request: Request.MarkRestrainByUserIdRequest): Promise<Result.MarkRestrainByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/status/{propertyId}/node/restrain/mark')
            .replace('{service}', 'skill-tree')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{propertyId}', String(request.getPropertyId() ?? 'null') === "" ? "null" : String(request.getPropertyId() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = request.getDuplicationAvoider() ?? null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = request.getTimeOffsetToken() ?? null;
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'nodeModelNames': request.getNodeModelNames() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.MarkRestrainByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public restrain(request: Request.RestrainRequest): Promise<Result.RestrainResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/status/{propertyId}/node/restrain')
            .replace('{service}', 'skill-tree')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{propertyId}', String(request.getPropertyId() ?? 'null') === "" ? "null" : String(request.getPropertyId() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = request.getAccessToken() ?? null;
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = request.getDuplicationAvoider() ?? null;
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'nodeModelNames': request.getNodeModelNames() ?? null,
            'config': request.getConfig()?.map((item) => item.toDict()) ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.RestrainResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public restrainByUserId(request: Request.RestrainByUserIdRequest): Promise<Result.RestrainByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/status/{propertyId}/node/restrain')
            .replace('{service}', 'skill-tree')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{propertyId}', String(request.getPropertyId() ?? 'null') === "" ? "null" : String(request.getPropertyId() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = request.getDuplicationAvoider() ?? null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = request.getTimeOffsetToken() ?? null;
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'nodeModelNames': request.getNodeModelNames() ?? null,
            'config': request.getConfig()?.map((item) => item.toDict()) ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.RestrainByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public describeStatuses(request: Request.DescribeStatusesRequest): Promise<Result.DescribeStatusesResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/status')
            .replace('{service}', 'skill-tree')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = request.getAccessToken() ?? null;
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'pageToken': String(request.getPageToken() ?? null),
            'limit': String(request.getLimit() ?? null),
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.DescribeStatusesResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeStatusesByUserId(request: Request.DescribeStatusesByUserIdRequest): Promise<Result.DescribeStatusesByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/status/')
            .replace('{service}', 'skill-tree')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = request.getTimeOffsetToken() ?? null;
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'pageToken': String(request.getPageToken() ?? null),
            'limit': String(request.getLimit() ?? null),
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.DescribeStatusesByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getStatus(request: Request.GetStatusRequest): Promise<Result.GetStatusResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/status/{propertyId}')
            .replace('{service}', 'skill-tree')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{propertyId}', String(request.getPropertyId() ?? 'null') === "" ? "null" : String(request.getPropertyId() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = request.getAccessToken() ?? null;
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.GetStatusResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getStatusByUserId(request: Request.GetStatusByUserIdRequest): Promise<Result.GetStatusByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/status/{propertyId}')
            .replace('{service}', 'skill-tree')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{propertyId}', String(request.getPropertyId() ?? 'null') === "" ? "null" : String(request.getPropertyId() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = request.getTimeOffsetToken() ?? null;
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.GetStatusByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public reset(request: Request.ResetRequest): Promise<Result.ResetResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/status/{propertyId}/reset')
            .replace('{service}', 'skill-tree')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{propertyId}', String(request.getPropertyId() ?? 'null') === "" ? "null" : String(request.getPropertyId() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = request.getAccessToken() ?? null;
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = request.getDuplicationAvoider() ?? null;
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'config': request.getConfig()?.map((item) => item.toDict()) ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.ResetResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public resetByUserId(request: Request.ResetByUserIdRequest): Promise<Result.ResetByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/status/{propertyId}/reset')
            .replace('{service}', 'skill-tree')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{propertyId}', String(request.getPropertyId() ?? 'null') === "" ? "null" : String(request.getPropertyId() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = request.getDuplicationAvoider() ?? null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = request.getTimeOffsetToken() ?? null;
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.delete(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.ResetByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public markReleaseByStampSheet(request: Request.MarkReleaseByStampSheetRequest): Promise<Result.MarkReleaseByStampSheetResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/stamp/status/release')
            .replace('{service}', 'skill-tree')
            .replace('{region}', this.session.region);
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'stampSheet': request.getStampSheet() ?? null,
            'keyId': request.getKeyId() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.MarkReleaseByStampSheetResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public markRestrainByStampTask(request: Request.MarkRestrainByStampTaskRequest): Promise<Result.MarkRestrainByStampTaskResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/stamp/status/restrain')
            .replace('{service}', 'skill-tree')
            .replace('{region}', this.session.region);
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'stampTask': request.getStampTask() ?? null,
            'keyId': request.getKeyId() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.MarkRestrainByStampTaskResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public exportMaster(request: Request.ExportMasterRequest): Promise<Result.ExportMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/export')
            .replace('{service}', 'skill-tree')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.ExportMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getCurrentTreeMaster(request: Request.GetCurrentTreeMasterRequest): Promise<Result.GetCurrentTreeMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master')
            .replace('{service}', 'skill-tree')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.GetCurrentTreeMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public updateCurrentTreeMaster(request: Request.UpdateCurrentTreeMasterRequest): Promise<Result.UpdateCurrentTreeMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master')
            .replace('{service}', 'skill-tree')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'settings': request.getSettings() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.UpdateCurrentTreeMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public updateCurrentTreeMasterFromGitHub(request: Request.UpdateCurrentTreeMasterFromGitHubRequest): Promise<Result.UpdateCurrentTreeMasterFromGitHubResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/from_git_hub')
            .replace('{service}', 'skill-tree')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'checkoutSetting': request.getCheckoutSetting()?.toDict() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.UpdateCurrentTreeMasterFromGitHubResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }
}
