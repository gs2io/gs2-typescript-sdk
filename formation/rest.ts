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

export default class Gs2FormationRestClient extends AbstractGs2RestClient {

    constructor(session: Gs2RestSession) {
        super(session);
    }

    public describeNamespaces(request: Request.DescribeNamespacesRequest): Promise<Result.DescribeNamespacesResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/')
            .replace('{service}', 'formation')
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
            .replace('{service}', 'formation')
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
            'updateMoldScript': request.getUpdateMoldScript()?.toDict() ?? null,
            'updateFormScript': request.getUpdateFormScript()?.toDict() ?? null,
            'updatePropertyFormScript': request.getUpdatePropertyFormScript()?.toDict() ?? null,
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
            .replace('{service}', 'formation')
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
            .replace('{service}', 'formation')
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
            .replace('{service}', 'formation')
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
            'updateMoldScript': request.getUpdateMoldScript()?.toDict() ?? null,
            'updateFormScript': request.getUpdateFormScript()?.toDict() ?? null,
            'updatePropertyFormScript': request.getUpdatePropertyFormScript()?.toDict() ?? null,
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
            .replace('{service}', 'formation')
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
            .replace('{service}', 'formation')
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
            .replace('{service}', 'formation')
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
            .replace('{service}', 'formation')
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
            .replace('{service}', 'formation')
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
            .replace('{service}', 'formation')
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
            .replace('{service}', 'formation')
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
            .replace('{service}', 'formation')
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

    public getFormModel(request: Request.GetFormModelRequest): Promise<Result.GetFormModelResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/model/{moldModelName}/form')
            .replace('{service}', 'formation')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{moldModelName}', String(request.getMoldModelName() ?? 'null') === "" ? "null" : String(request.getMoldModelName() ?? 'null'));
    
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
            return Result.GetFormModelResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeFormModelMasters(request: Request.DescribeFormModelMastersRequest): Promise<Result.DescribeFormModelMastersResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model/form')
            .replace('{service}', 'formation')
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
            return Result.DescribeFormModelMastersResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public createFormModelMaster(request: Request.CreateFormModelMasterRequest): Promise<Result.CreateFormModelMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model/form')
            .replace('{service}', 'formation')
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
            'slots': request.getSlots()?.map((item) => item.toDict()) ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.CreateFormModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public getFormModelMaster(request: Request.GetFormModelMasterRequest): Promise<Result.GetFormModelMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model/form/{formModelName}')
            .replace('{service}', 'formation')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{formModelName}', String(request.getFormModelName() ?? 'null') === "" ? "null" : String(request.getFormModelName() ?? 'null'));
    
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
            return Result.GetFormModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public updateFormModelMaster(request: Request.UpdateFormModelMasterRequest): Promise<Result.UpdateFormModelMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model/form/{formModelName}')
            .replace('{service}', 'formation')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{formModelName}', String(request.getFormModelName() ?? 'null') === "" ? "null" : String(request.getFormModelName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'description': request.getDescription() ?? null,
            'metadata': request.getMetadata() ?? null,
            'slots': request.getSlots()?.map((item) => item.toDict()) ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.UpdateFormModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public deleteFormModelMaster(request: Request.DeleteFormModelMasterRequest): Promise<Result.DeleteFormModelMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model/form/{formModelName}')
            .replace('{service}', 'formation')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{formModelName}', String(request.getFormModelName() ?? 'null') === "" ? "null" : String(request.getFormModelName() ?? 'null'));
    
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
            return Result.DeleteFormModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeMoldModels(request: Request.DescribeMoldModelsRequest): Promise<Result.DescribeMoldModelsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/model/mold')
            .replace('{service}', 'formation')
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
            return Result.DescribeMoldModelsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getMoldModel(request: Request.GetMoldModelRequest): Promise<Result.GetMoldModelResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/model/mold/{moldModelName}')
            .replace('{service}', 'formation')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{moldModelName}', String(request.getMoldModelName() ?? 'null') === "" ? "null" : String(request.getMoldModelName() ?? 'null'));
    
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
            return Result.GetMoldModelResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeMoldModelMasters(request: Request.DescribeMoldModelMastersRequest): Promise<Result.DescribeMoldModelMastersResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model/mold')
            .replace('{service}', 'formation')
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
            return Result.DescribeMoldModelMastersResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public createMoldModelMaster(request: Request.CreateMoldModelMasterRequest): Promise<Result.CreateMoldModelMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model/mold')
            .replace('{service}', 'formation')
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
            'formModelName': request.getFormModelName() ?? null,
            'initialMaxCapacity': request.getInitialMaxCapacity() ?? null,
            'maxCapacity': request.getMaxCapacity() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.CreateMoldModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public getMoldModelMaster(request: Request.GetMoldModelMasterRequest): Promise<Result.GetMoldModelMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model/mold/{moldModelName}')
            .replace('{service}', 'formation')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{moldModelName}', String(request.getMoldModelName() ?? 'null') === "" ? "null" : String(request.getMoldModelName() ?? 'null'));
    
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
            return Result.GetMoldModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public updateMoldModelMaster(request: Request.UpdateMoldModelMasterRequest): Promise<Result.UpdateMoldModelMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model/mold/{moldModelName}')
            .replace('{service}', 'formation')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{moldModelName}', String(request.getMoldModelName() ?? 'null') === "" ? "null" : String(request.getMoldModelName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'description': request.getDescription() ?? null,
            'metadata': request.getMetadata() ?? null,
            'formModelName': request.getFormModelName() ?? null,
            'initialMaxCapacity': request.getInitialMaxCapacity() ?? null,
            'maxCapacity': request.getMaxCapacity() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.UpdateMoldModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public deleteMoldModelMaster(request: Request.DeleteMoldModelMasterRequest): Promise<Result.DeleteMoldModelMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model/mold/{moldModelName}')
            .replace('{service}', 'formation')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{moldModelName}', String(request.getMoldModelName() ?? 'null') === "" ? "null" : String(request.getMoldModelName() ?? 'null'));
    
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
            return Result.DeleteMoldModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describePropertyFormModels(request: Request.DescribePropertyFormModelsRequest): Promise<Result.DescribePropertyFormModelsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/model/propertyForm')
            .replace('{service}', 'formation')
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
            return Result.DescribePropertyFormModelsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getPropertyFormModel(request: Request.GetPropertyFormModelRequest): Promise<Result.GetPropertyFormModelResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/model/propertyForm/{propertyFormModelName}')
            .replace('{service}', 'formation')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{propertyFormModelName}', String(request.getPropertyFormModelName() ?? 'null') === "" ? "null" : String(request.getPropertyFormModelName() ?? 'null'));
    
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
            return Result.GetPropertyFormModelResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describePropertyFormModelMasters(request: Request.DescribePropertyFormModelMastersRequest): Promise<Result.DescribePropertyFormModelMastersResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model/propertyForm')
            .replace('{service}', 'formation')
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
            return Result.DescribePropertyFormModelMastersResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public createPropertyFormModelMaster(request: Request.CreatePropertyFormModelMasterRequest): Promise<Result.CreatePropertyFormModelMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model/propertyForm')
            .replace('{service}', 'formation')
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
            'slots': request.getSlots()?.map((item) => item.toDict()) ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.CreatePropertyFormModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public getPropertyFormModelMaster(request: Request.GetPropertyFormModelMasterRequest): Promise<Result.GetPropertyFormModelMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model/propertyForm/{propertyFormModelName}')
            .replace('{service}', 'formation')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{propertyFormModelName}', String(request.getPropertyFormModelName() ?? 'null') === "" ? "null" : String(request.getPropertyFormModelName() ?? 'null'));
    
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
            return Result.GetPropertyFormModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public updatePropertyFormModelMaster(request: Request.UpdatePropertyFormModelMasterRequest): Promise<Result.UpdatePropertyFormModelMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model/propertyForm/{propertyFormModelName}')
            .replace('{service}', 'formation')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{propertyFormModelName}', String(request.getPropertyFormModelName() ?? 'null') === "" ? "null" : String(request.getPropertyFormModelName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'description': request.getDescription() ?? null,
            'metadata': request.getMetadata() ?? null,
            'slots': request.getSlots()?.map((item) => item.toDict()) ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.UpdatePropertyFormModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public deletePropertyFormModelMaster(request: Request.DeletePropertyFormModelMasterRequest): Promise<Result.DeletePropertyFormModelMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model/propertyForm/{propertyFormModelName}')
            .replace('{service}', 'formation')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{propertyFormModelName}', String(request.getPropertyFormModelName() ?? 'null') === "" ? "null" : String(request.getPropertyFormModelName() ?? 'null'));
    
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
            return Result.DeletePropertyFormModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public exportMaster(request: Request.ExportMasterRequest): Promise<Result.ExportMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/export')
            .replace('{service}', 'formation')
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

    public getCurrentFormMaster(request: Request.GetCurrentFormMasterRequest): Promise<Result.GetCurrentFormMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master')
            .replace('{service}', 'formation')
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
            return Result.GetCurrentFormMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public updateCurrentFormMaster(request: Request.UpdateCurrentFormMasterRequest): Promise<Result.UpdateCurrentFormMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master')
            .replace('{service}', 'formation')
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
            return Result.UpdateCurrentFormMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public updateCurrentFormMasterFromGitHub(request: Request.UpdateCurrentFormMasterFromGitHubRequest): Promise<Result.UpdateCurrentFormMasterFromGitHubResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/from_git_hub')
            .replace('{service}', 'formation')
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
            return Result.UpdateCurrentFormMasterFromGitHubResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public describeMolds(request: Request.DescribeMoldsRequest): Promise<Result.DescribeMoldsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/mold')
            .replace('{service}', 'formation')
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
            return Result.DescribeMoldsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeMoldsByUserId(request: Request.DescribeMoldsByUserIdRequest): Promise<Result.DescribeMoldsByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/mold')
            .replace('{service}', 'formation')
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
            return Result.DescribeMoldsByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getMold(request: Request.GetMoldRequest): Promise<Result.GetMoldResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/mold/{moldModelName}')
            .replace('{service}', 'formation')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{moldModelName}', String(request.getMoldModelName() ?? 'null') === "" ? "null" : String(request.getMoldModelName() ?? 'null'));
    
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
            return Result.GetMoldResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getMoldByUserId(request: Request.GetMoldByUserIdRequest): Promise<Result.GetMoldByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/mold/{moldModelName}')
            .replace('{service}', 'formation')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{moldModelName}', String(request.getMoldModelName() ?? 'null') === "" ? "null" : String(request.getMoldModelName() ?? 'null'));
    
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
            return Result.GetMoldByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public setMoldCapacityByUserId(request: Request.SetMoldCapacityByUserIdRequest): Promise<Result.SetMoldCapacityByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/mold/{moldModelName}')
            .replace('{service}', 'formation')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{moldModelName}', String(request.getMoldModelName() ?? 'null') === "" ? "null" : String(request.getMoldModelName() ?? 'null'));
    
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
            'capacity': request.getCapacity() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.SetMoldCapacityByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public addMoldCapacityByUserId(request: Request.AddMoldCapacityByUserIdRequest): Promise<Result.AddMoldCapacityByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/mold/{moldModelName}')
            .replace('{service}', 'formation')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{moldModelName}', String(request.getMoldModelName() ?? 'null') === "" ? "null" : String(request.getMoldModelName() ?? 'null'));
    
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
            'capacity': request.getCapacity() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.AddMoldCapacityByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public subMoldCapacity(request: Request.SubMoldCapacityRequest): Promise<Result.SubMoldCapacityResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/mold/{moldModelName}/sub')
            .replace('{service}', 'formation')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{moldModelName}', String(request.getMoldModelName() ?? 'null') === "" ? "null" : String(request.getMoldModelName() ?? 'null'));
    
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
            'capacity': request.getCapacity() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.SubMoldCapacityResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public subMoldCapacityByUserId(request: Request.SubMoldCapacityByUserIdRequest): Promise<Result.SubMoldCapacityByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/mold/{moldModelName}/sub')
            .replace('{service}', 'formation')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{moldModelName}', String(request.getMoldModelName() ?? 'null') === "" ? "null" : String(request.getMoldModelName() ?? 'null'));
    
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
            'capacity': request.getCapacity() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.SubMoldCapacityByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public deleteMold(request: Request.DeleteMoldRequest): Promise<Result.DeleteMoldResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/mold/{moldModelName}')
            .replace('{service}', 'formation')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{moldModelName}', String(request.getMoldModelName() ?? 'null') === "" ? "null" : String(request.getMoldModelName() ?? 'null'));
    
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
            return Result.DeleteMoldResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public deleteMoldByUserId(request: Request.DeleteMoldByUserIdRequest): Promise<Result.DeleteMoldByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/mold/{moldModelName}')
            .replace('{service}', 'formation')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{moldModelName}', String(request.getMoldModelName() ?? 'null') === "" ? "null" : String(request.getMoldModelName() ?? 'null'));
    
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
            return Result.DeleteMoldByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public addCapacityByStampSheet(request: Request.AddCapacityByStampSheetRequest): Promise<Result.AddCapacityByStampSheetResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/stamp/mold/capacity/add')
            .replace('{service}', 'formation')
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
            return Result.AddCapacityByStampSheetResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public subCapacityByStampTask(request: Request.SubCapacityByStampTaskRequest): Promise<Result.SubCapacityByStampTaskResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/stamp/mold/capacity/sub')
            .replace('{service}', 'formation')
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
            return Result.SubCapacityByStampTaskResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public setCapacityByStampSheet(request: Request.SetCapacityByStampSheetRequest): Promise<Result.SetCapacityByStampSheetResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/stamp/mold/capacity/set')
            .replace('{service}', 'formation')
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
            return Result.SetCapacityByStampSheetResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public describeForms(request: Request.DescribeFormsRequest): Promise<Result.DescribeFormsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/mold/{moldModelName}/form')
            .replace('{service}', 'formation')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{moldModelName}', String(request.getMoldModelName() ?? 'null') === "" ? "null" : String(request.getMoldModelName() ?? 'null'));
    
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
            return Result.DescribeFormsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeFormsByUserId(request: Request.DescribeFormsByUserIdRequest): Promise<Result.DescribeFormsByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/mold/{moldModelName}/form')
            .replace('{service}', 'formation')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{moldModelName}', String(request.getMoldModelName() ?? 'null') === "" ? "null" : String(request.getMoldModelName() ?? 'null'))
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
            return Result.DescribeFormsByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getForm(request: Request.GetFormRequest): Promise<Result.GetFormResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/mold/{moldModelName}/form/{index}')
            .replace('{service}', 'formation')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{moldModelName}', String(request.getMoldModelName() ?? 'null') === "" ? "null" : String(request.getMoldModelName() ?? 'null'))
            .replace('{index}', String(request.getIndex() ?? 'null') === "" ? "null" : String(request.getIndex() ?? 'null'));
    
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
            return Result.GetFormResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getFormByUserId(request: Request.GetFormByUserIdRequest): Promise<Result.GetFormByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/mold/{moldModelName}/form/{index}')
            .replace('{service}', 'formation')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{moldModelName}', String(request.getMoldModelName() ?? 'null') === "" ? "null" : String(request.getMoldModelName() ?? 'null'))
            .replace('{index}', String(request.getIndex() ?? 'null') === "" ? "null" : String(request.getIndex() ?? 'null'));
    
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
            return Result.GetFormByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getFormWithSignature(request: Request.GetFormWithSignatureRequest): Promise<Result.GetFormWithSignatureResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/mold/{moldModelName}/form/{index}/signature')
            .replace('{service}', 'formation')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{moldModelName}', String(request.getMoldModelName() ?? 'null') === "" ? "null" : String(request.getMoldModelName() ?? 'null'))
            .replace('{index}', String(request.getIndex() ?? 'null') === "" ? "null" : String(request.getIndex() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = request.getAccessToken() ?? null;
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'keyId': String(request.getKeyId() ?? null),
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.GetFormWithSignatureResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getFormWithSignatureByUserId(request: Request.GetFormWithSignatureByUserIdRequest): Promise<Result.GetFormWithSignatureByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/mold/{moldModelName}/form/{index}/signature')
            .replace('{service}', 'formation')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{moldModelName}', String(request.getMoldModelName() ?? 'null') === "" ? "null" : String(request.getMoldModelName() ?? 'null'))
            .replace('{index}', String(request.getIndex() ?? 'null') === "" ? "null" : String(request.getIndex() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = request.getTimeOffsetToken() ?? null;
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'keyId': String(request.getKeyId() ?? null),
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.GetFormWithSignatureByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public setForm(request: Request.SetFormRequest): Promise<Result.SetFormResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/mold/{moldModelName}/form/{index}')
            .replace('{service}', 'formation')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{moldModelName}', String(request.getMoldModelName() ?? 'null') === "" ? "null" : String(request.getMoldModelName() ?? 'null'))
            .replace('{index}', String(request.getIndex() ?? 'null') === "" ? "null" : String(request.getIndex() ?? 'null'));
    
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
            'slots': request.getSlots()?.map((item) => item.toDict()) ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.SetFormResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public setFormByUserId(request: Request.SetFormByUserIdRequest): Promise<Result.SetFormByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/mold/{moldModelName}/form/{index}')
            .replace('{service}', 'formation')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{moldModelName}', String(request.getMoldModelName() ?? 'null') === "" ? "null" : String(request.getMoldModelName() ?? 'null'))
            .replace('{index}', String(request.getIndex() ?? 'null') === "" ? "null" : String(request.getIndex() ?? 'null'));
    
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
            'slots': request.getSlots()?.map((item) => item.toDict()) ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.SetFormByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public setFormWithSignature(request: Request.SetFormWithSignatureRequest): Promise<Result.SetFormWithSignatureResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/mold/{moldModelName}/form/{index}')
            .replace('{service}', 'formation')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{moldModelName}', String(request.getMoldModelName() ?? 'null') === "" ? "null" : String(request.getMoldModelName() ?? 'null'))
            .replace('{index}', String(request.getIndex() ?? 'null') === "" ? "null" : String(request.getIndex() ?? 'null'));
    
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
            'slots': request.getSlots()?.map((item) => item.toDict()) ?? null,
            'keyId': request.getKeyId() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.SetFormWithSignatureResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public acquireActionsToFormProperties(request: Request.AcquireActionsToFormPropertiesRequest): Promise<Result.AcquireActionsToFormPropertiesResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/mold/{moldModelName}/form/{index}/stamp/delegate')
            .replace('{service}', 'formation')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{moldModelName}', String(request.getMoldModelName() ?? 'null') === "" ? "null" : String(request.getMoldModelName() ?? 'null'))
            .replace('{index}', String(request.getIndex() ?? 'null') === "" ? "null" : String(request.getIndex() ?? 'null'));
    
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
            'acquireAction': request.getAcquireAction()?.toDict() ?? null,
            'config': request.getConfig()?.map((item) => item.toDict()) ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.AcquireActionsToFormPropertiesResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public deleteForm(request: Request.DeleteFormRequest): Promise<Result.DeleteFormResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/mold/{moldModelName}/form/{index}')
            .replace('{service}', 'formation')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{moldModelName}', String(request.getMoldModelName() ?? 'null') === "" ? "null" : String(request.getMoldModelName() ?? 'null'))
            .replace('{index}', String(request.getIndex() ?? 'null') === "" ? "null" : String(request.getIndex() ?? 'null'));
    
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
            return Result.DeleteFormResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public deleteFormByUserId(request: Request.DeleteFormByUserIdRequest): Promise<Result.DeleteFormByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/mold/{moldModelName}/form/{index}')
            .replace('{service}', 'formation')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{moldModelName}', String(request.getMoldModelName() ?? 'null') === "" ? "null" : String(request.getMoldModelName() ?? 'null'))
            .replace('{index}', String(request.getIndex() ?? 'null') === "" ? "null" : String(request.getIndex() ?? 'null'));
    
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
            return Result.DeleteFormByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public acquireActionToFormPropertiesByStampSheet(request: Request.AcquireActionToFormPropertiesByStampSheetRequest): Promise<Result.AcquireActionToFormPropertiesByStampSheetResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/stamp/form/acquire')
            .replace('{service}', 'formation')
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
            return Result.AcquireActionToFormPropertiesByStampSheetResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public setFormByStampSheet(request: Request.SetFormByStampSheetRequest): Promise<Result.SetFormByStampSheetResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/stamp/form/set')
            .replace('{service}', 'formation')
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
            return Result.SetFormByStampSheetResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public describePropertyForms(request: Request.DescribePropertyFormsRequest): Promise<Result.DescribePropertyFormsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/property/{propertyFormModelName}/form')
            .replace('{service}', 'formation')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{propertyFormModelName}', String(request.getPropertyFormModelName() ?? 'null') === "" ? "null" : String(request.getPropertyFormModelName() ?? 'null'));
    
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
            return Result.DescribePropertyFormsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describePropertyFormsByUserId(request: Request.DescribePropertyFormsByUserIdRequest): Promise<Result.DescribePropertyFormsByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/property/{propertyFormModelName}/form')
            .replace('{service}', 'formation')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{propertyFormModelName}', String(request.getPropertyFormModelName() ?? 'null') === "" ? "null" : String(request.getPropertyFormModelName() ?? 'null'));
    
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
            return Result.DescribePropertyFormsByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getPropertyForm(request: Request.GetPropertyFormRequest): Promise<Result.GetPropertyFormResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/property/{propertyFormModelName}/form/{propertyId}')
            .replace('{service}', 'formation')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{propertyFormModelName}', String(request.getPropertyFormModelName() ?? 'null') === "" ? "null" : String(request.getPropertyFormModelName() ?? 'null'))
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
            return Result.GetPropertyFormResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getPropertyFormByUserId(request: Request.GetPropertyFormByUserIdRequest): Promise<Result.GetPropertyFormByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/property/{propertyFormModelName}/form/{propertyId}')
            .replace('{service}', 'formation')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{propertyFormModelName}', String(request.getPropertyFormModelName() ?? 'null') === "" ? "null" : String(request.getPropertyFormModelName() ?? 'null'))
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
            return Result.GetPropertyFormByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getPropertyFormWithSignature(request: Request.GetPropertyFormWithSignatureRequest): Promise<Result.GetPropertyFormWithSignatureResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/property/{propertyFormModelName}/form/{propertyId}/signature')
            .replace('{service}', 'formation')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{propertyFormModelName}', String(request.getPropertyFormModelName() ?? 'null') === "" ? "null" : String(request.getPropertyFormModelName() ?? 'null'))
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
            'keyId': String(request.getKeyId() ?? null),
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.GetPropertyFormWithSignatureResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getPropertyFormWithSignatureByUserId(request: Request.GetPropertyFormWithSignatureByUserIdRequest): Promise<Result.GetPropertyFormWithSignatureByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/property/{propertyFormModelName}/form/{propertyId}/signature')
            .replace('{service}', 'formation')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{propertyFormModelName}', String(request.getPropertyFormModelName() ?? 'null') === "" ? "null" : String(request.getPropertyFormModelName() ?? 'null'))
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
            'keyId': String(request.getKeyId() ?? null),
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.GetPropertyFormWithSignatureByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public setPropertyForm(request: Request.SetPropertyFormRequest): Promise<Result.SetPropertyFormResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/property/{propertyFormModelName}/form/{propertyId}')
            .replace('{service}', 'formation')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{propertyFormModelName}', String(request.getPropertyFormModelName() ?? 'null') === "" ? "null" : String(request.getPropertyFormModelName() ?? 'null'))
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
            'slots': request.getSlots()?.map((item) => item.toDict()) ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.SetPropertyFormResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public setPropertyFormByUserId(request: Request.SetPropertyFormByUserIdRequest): Promise<Result.SetPropertyFormByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/property/{propertyFormModelName}/form/{propertyId}')
            .replace('{service}', 'formation')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{propertyFormModelName}', String(request.getPropertyFormModelName() ?? 'null') === "" ? "null" : String(request.getPropertyFormModelName() ?? 'null'))
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
            'slots': request.getSlots()?.map((item) => item.toDict()) ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.SetPropertyFormByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public setPropertyFormWithSignature(request: Request.SetPropertyFormWithSignatureRequest): Promise<Result.SetPropertyFormWithSignatureResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/property/{propertyFormModelName}/form/{propertyId}')
            .replace('{service}', 'formation')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{propertyFormModelName}', String(request.getPropertyFormModelName() ?? 'null') === "" ? "null" : String(request.getPropertyFormModelName() ?? 'null'))
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
            'slots': request.getSlots()?.map((item) => item.toDict()) ?? null,
            'keyId': request.getKeyId() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.SetPropertyFormWithSignatureResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public acquireActionsToPropertyFormProperties(request: Request.AcquireActionsToPropertyFormPropertiesRequest): Promise<Result.AcquireActionsToPropertyFormPropertiesResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/property/{propertyFormModelName}/form/{propertyId}/stamp/delegate')
            .replace('{service}', 'formation')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{propertyFormModelName}', String(request.getPropertyFormModelName() ?? 'null') === "" ? "null" : String(request.getPropertyFormModelName() ?? 'null'))
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
            'acquireAction': request.getAcquireAction()?.toDict() ?? null,
            'config': request.getConfig()?.map((item) => item.toDict()) ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.AcquireActionsToPropertyFormPropertiesResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public deletePropertyForm(request: Request.DeletePropertyFormRequest): Promise<Result.DeletePropertyFormResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/property/{propertyFormModelName}/form/{propertyId}')
            .replace('{service}', 'formation')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{propertyFormModelName}', String(request.getPropertyFormModelName() ?? 'null') === "" ? "null" : String(request.getPropertyFormModelName() ?? 'null'))
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
            return Result.DeletePropertyFormResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public deletePropertyFormByUserId(request: Request.DeletePropertyFormByUserIdRequest): Promise<Result.DeletePropertyFormByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/property/{propertyFormModelName}/form/{propertyId}')
            .replace('{service}', 'formation')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{propertyFormModelName}', String(request.getPropertyFormModelName() ?? 'null') === "" ? "null" : String(request.getPropertyFormModelName() ?? 'null'))
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
            return Result.DeletePropertyFormByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public acquireActionToPropertyFormPropertiesByStampSheet(request: Request.AcquireActionToPropertyFormPropertiesByStampSheetRequest): Promise<Result.AcquireActionToPropertyFormPropertiesByStampSheetResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/stamp/property/form/acquire')
            .replace('{service}', 'formation')
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
            return Result.AcquireActionToPropertyFormPropertiesByStampSheetResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }
}
