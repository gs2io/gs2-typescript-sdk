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

export default class Gs2ExperienceRestClient extends AbstractGs2RestClient {

    constructor(session: Gs2RestSession) {
        super(session);
    }

    public describeNamespaces(request: Request.DescribeNamespacesRequest): Promise<Result.DescribeNamespacesResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/')
            .replace('{service}', 'experience')
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
            .replace('{service}', 'experience')
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
            'experienceCapScriptId': request.getExperienceCapScriptId() ?? null,
            'changeExperienceScript': request.getChangeExperienceScript()?.toDict() ?? null,
            'changeRankScript': request.getChangeRankScript()?.toDict() ?? null,
            'changeRankCapScript': request.getChangeRankCapScript()?.toDict() ?? null,
            'overflowExperienceScript': request.getOverflowExperienceScript()?.toDict() ?? null,
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
            .replace('{service}', 'experience')
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
            .replace('{service}', 'experience')
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
            .replace('{service}', 'experience')
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
            'experienceCapScriptId': request.getExperienceCapScriptId() ?? null,
            'changeExperienceScript': request.getChangeExperienceScript()?.toDict() ?? null,
            'changeRankScript': request.getChangeRankScript()?.toDict() ?? null,
            'changeRankCapScript': request.getChangeRankCapScript()?.toDict() ?? null,
            'overflowExperienceScript': request.getOverflowExperienceScript()?.toDict() ?? null,
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
            .replace('{service}', 'experience')
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
        const url = (Gs2Constant.ENDPOINT_HOST + '/system/user/{userId}/dump')
            .replace('{service}', 'experience')
            .replace('{region}', this.session.region)
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = request.getDuplicationAvoider() ?? null;
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
        const url = (Gs2Constant.ENDPOINT_HOST + '/system/user/{userId}/dump')
            .replace('{service}', 'experience')
            .replace('{region}', this.session.region)
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = request.getDuplicationAvoider() ?? null;
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
        const url = (Gs2Constant.ENDPOINT_HOST + '/system/user/{userId}/clean')
            .replace('{service}', 'experience')
            .replace('{region}', this.session.region)
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = request.getDuplicationAvoider() ?? null;
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
        const url = (Gs2Constant.ENDPOINT_HOST + '/system/user/{userId}/clean')
            .replace('{service}', 'experience')
            .replace('{region}', this.session.region)
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = request.getDuplicationAvoider() ?? null;
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
        const url = (Gs2Constant.ENDPOINT_HOST + '/system/user/{userId}/import/prepare')
            .replace('{service}', 'experience')
            .replace('{region}', this.session.region)
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = request.getDuplicationAvoider() ?? null;
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
        const url = (Gs2Constant.ENDPOINT_HOST + '/system/user/{userId}/import')
            .replace('{service}', 'experience')
            .replace('{region}', this.session.region)
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = request.getDuplicationAvoider() ?? null;
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
        const url = (Gs2Constant.ENDPOINT_HOST + '/system/user/{userId}/import/{uploadToken}')
            .replace('{service}', 'experience')
            .replace('{region}', this.session.region)
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{uploadToken}', String(request.getUploadToken() ?? 'null') === "" ? "null" : String(request.getUploadToken() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = request.getDuplicationAvoider() ?? null;
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

    public describeExperienceModelMasters(request: Request.DescribeExperienceModelMastersRequest): Promise<Result.DescribeExperienceModelMastersResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model')
            .replace('{service}', 'experience')
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
            return Result.DescribeExperienceModelMastersResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public createExperienceModelMaster(request: Request.CreateExperienceModelMasterRequest): Promise<Result.CreateExperienceModelMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model')
            .replace('{service}', 'experience')
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
            'defaultExperience': request.getDefaultExperience() ?? null,
            'defaultRankCap': request.getDefaultRankCap() ?? null,
            'maxRankCap': request.getMaxRankCap() ?? null,
            'rankThresholdName': request.getRankThresholdName() ?? null,
            'acquireActionRates': request.getAcquireActionRates()?.map((item) => item.toDict()) ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.CreateExperienceModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public getExperienceModelMaster(request: Request.GetExperienceModelMasterRequest): Promise<Result.GetExperienceModelMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model/{experienceName}')
            .replace('{service}', 'experience')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{experienceName}', String(request.getExperienceName() ?? 'null') === "" ? "null" : String(request.getExperienceName() ?? 'null'));
    
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
            return Result.GetExperienceModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public updateExperienceModelMaster(request: Request.UpdateExperienceModelMasterRequest): Promise<Result.UpdateExperienceModelMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model/{experienceName}')
            .replace('{service}', 'experience')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{experienceName}', String(request.getExperienceName() ?? 'null') === "" ? "null" : String(request.getExperienceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'description': request.getDescription() ?? null,
            'metadata': request.getMetadata() ?? null,
            'defaultExperience': request.getDefaultExperience() ?? null,
            'defaultRankCap': request.getDefaultRankCap() ?? null,
            'maxRankCap': request.getMaxRankCap() ?? null,
            'rankThresholdName': request.getRankThresholdName() ?? null,
            'acquireActionRates': request.getAcquireActionRates()?.map((item) => item.toDict()) ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.UpdateExperienceModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public deleteExperienceModelMaster(request: Request.DeleteExperienceModelMasterRequest): Promise<Result.DeleteExperienceModelMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model/{experienceName}')
            .replace('{service}', 'experience')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{experienceName}', String(request.getExperienceName() ?? 'null') === "" ? "null" : String(request.getExperienceName() ?? 'null'));
    
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
            return Result.DeleteExperienceModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeExperienceModels(request: Request.DescribeExperienceModelsRequest): Promise<Result.DescribeExperienceModelsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/model')
            .replace('{service}', 'experience')
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
            return Result.DescribeExperienceModelsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getExperienceModel(request: Request.GetExperienceModelRequest): Promise<Result.GetExperienceModelResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/model/{experienceName}')
            .replace('{service}', 'experience')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{experienceName}', String(request.getExperienceName() ?? 'null') === "" ? "null" : String(request.getExperienceName() ?? 'null'));
    
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
            return Result.GetExperienceModelResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeThresholdMasters(request: Request.DescribeThresholdMastersRequest): Promise<Result.DescribeThresholdMastersResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/threshold')
            .replace('{service}', 'experience')
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
            return Result.DescribeThresholdMastersResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public createThresholdMaster(request: Request.CreateThresholdMasterRequest): Promise<Result.CreateThresholdMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/threshold')
            .replace('{service}', 'experience')
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
            'values': request.getValues() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.CreateThresholdMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public getThresholdMaster(request: Request.GetThresholdMasterRequest): Promise<Result.GetThresholdMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/threshold/{thresholdName}')
            .replace('{service}', 'experience')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{thresholdName}', String(request.getThresholdName() ?? 'null') === "" ? "null" : String(request.getThresholdName() ?? 'null'));
    
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
            return Result.GetThresholdMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public updateThresholdMaster(request: Request.UpdateThresholdMasterRequest): Promise<Result.UpdateThresholdMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/threshold/{thresholdName}')
            .replace('{service}', 'experience')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{thresholdName}', String(request.getThresholdName() ?? 'null') === "" ? "null" : String(request.getThresholdName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'description': request.getDescription() ?? null,
            'metadata': request.getMetadata() ?? null,
            'values': request.getValues() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.UpdateThresholdMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public deleteThresholdMaster(request: Request.DeleteThresholdMasterRequest): Promise<Result.DeleteThresholdMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/threshold/{thresholdName}')
            .replace('{service}', 'experience')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{thresholdName}', String(request.getThresholdName() ?? 'null') === "" ? "null" : String(request.getThresholdName() ?? 'null'));
    
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
            return Result.DeleteThresholdMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public exportMaster(request: Request.ExportMasterRequest): Promise<Result.ExportMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/export')
            .replace('{service}', 'experience')
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

    public getCurrentExperienceMaster(request: Request.GetCurrentExperienceMasterRequest): Promise<Result.GetCurrentExperienceMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master')
            .replace('{service}', 'experience')
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
            return Result.GetCurrentExperienceMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public updateCurrentExperienceMaster(request: Request.UpdateCurrentExperienceMasterRequest): Promise<Result.UpdateCurrentExperienceMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master')
            .replace('{service}', 'experience')
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
            return Result.UpdateCurrentExperienceMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public updateCurrentExperienceMasterFromGitHub(request: Request.UpdateCurrentExperienceMasterFromGitHubRequest): Promise<Result.UpdateCurrentExperienceMasterFromGitHubResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/from_git_hub')
            .replace('{service}', 'experience')
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
            return Result.UpdateCurrentExperienceMasterFromGitHubResult.fromDict(response.data);
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
            .replace('{service}', 'experience')
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
            'experienceName': String(request.getExperienceName() ?? null),
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
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/status')
            .replace('{service}', 'experience')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'experienceName': String(request.getExperienceName() ?? null),
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
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/status/model/{experienceName}/property/{propertyId}')
            .replace('{service}', 'experience')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{experienceName}', String(request.getExperienceName() ?? 'null') === "" ? "null" : String(request.getExperienceName() ?? 'null'))
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
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/status/model/{experienceName}/property/{propertyId}')
            .replace('{service}', 'experience')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{experienceName}', String(request.getExperienceName() ?? 'null') === "" ? "null" : String(request.getExperienceName() ?? 'null'))
            .replace('{propertyId}', String(request.getPropertyId() ?? 'null') === "" ? "null" : String(request.getPropertyId() ?? 'null'));
    
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
            return Result.GetStatusByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getStatusWithSignature(request: Request.GetStatusWithSignatureRequest): Promise<Result.GetStatusWithSignatureResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/status/model/{experienceName}/property/{propertyId}/signature')
            .replace('{service}', 'experience')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{experienceName}', String(request.getExperienceName() ?? 'null') === "" ? "null" : String(request.getExperienceName() ?? 'null'))
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
            return Result.GetStatusWithSignatureResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getStatusWithSignatureByUserId(request: Request.GetStatusWithSignatureByUserIdRequest): Promise<Result.GetStatusWithSignatureByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/status/model/{experienceName}/property/{propertyId}/signature')
            .replace('{service}', 'experience')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{experienceName}', String(request.getExperienceName() ?? 'null') === "" ? "null" : String(request.getExperienceName() ?? 'null'))
            .replace('{propertyId}', String(request.getPropertyId() ?? 'null') === "" ? "null" : String(request.getPropertyId() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
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
            return Result.GetStatusWithSignatureByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public addExperienceByUserId(request: Request.AddExperienceByUserIdRequest): Promise<Result.AddExperienceByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/status/model/{experienceName}/property/{propertyId}')
            .replace('{service}', 'experience')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{experienceName}', String(request.getExperienceName() ?? 'null') === "" ? "null" : String(request.getExperienceName() ?? 'null'))
            .replace('{propertyId}', String(request.getPropertyId() ?? 'null') === "" ? "null" : String(request.getPropertyId() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = request.getDuplicationAvoider() ?? null;
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'experienceValue': request.getExperienceValue() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.AddExperienceByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public subExperienceByUserId(request: Request.SubExperienceByUserIdRequest): Promise<Result.SubExperienceByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/status/model/{experienceName}/property/{propertyId}/sub')
            .replace('{service}', 'experience')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{experienceName}', String(request.getExperienceName() ?? 'null') === "" ? "null" : String(request.getExperienceName() ?? 'null'))
            .replace('{propertyId}', String(request.getPropertyId() ?? 'null') === "" ? "null" : String(request.getPropertyId() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = request.getDuplicationAvoider() ?? null;
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'experienceValue': request.getExperienceValue() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.SubExperienceByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public setExperienceByUserId(request: Request.SetExperienceByUserIdRequest): Promise<Result.SetExperienceByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/status/model/{experienceName}/property/{propertyId}')
            .replace('{service}', 'experience')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{experienceName}', String(request.getExperienceName() ?? 'null') === "" ? "null" : String(request.getExperienceName() ?? 'null'))
            .replace('{propertyId}', String(request.getPropertyId() ?? 'null') === "" ? "null" : String(request.getPropertyId() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = request.getDuplicationAvoider() ?? null;
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'experienceValue': request.getExperienceValue() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.SetExperienceByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public addRankCapByUserId(request: Request.AddRankCapByUserIdRequest): Promise<Result.AddRankCapByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/status/model/{experienceName}/property/{propertyId}/cap')
            .replace('{service}', 'experience')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{experienceName}', String(request.getExperienceName() ?? 'null') === "" ? "null" : String(request.getExperienceName() ?? 'null'))
            .replace('{propertyId}', String(request.getPropertyId() ?? 'null') === "" ? "null" : String(request.getPropertyId() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = request.getDuplicationAvoider() ?? null;
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'rankCapValue': request.getRankCapValue() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.AddRankCapByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public subRankCapByUserId(request: Request.SubRankCapByUserIdRequest): Promise<Result.SubRankCapByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/status/model/{experienceName}/property/{propertyId}/cap/sub')
            .replace('{service}', 'experience')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{experienceName}', String(request.getExperienceName() ?? 'null') === "" ? "null" : String(request.getExperienceName() ?? 'null'))
            .replace('{propertyId}', String(request.getPropertyId() ?? 'null') === "" ? "null" : String(request.getPropertyId() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = request.getDuplicationAvoider() ?? null;
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'rankCapValue': request.getRankCapValue() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.SubRankCapByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public setRankCapByUserId(request: Request.SetRankCapByUserIdRequest): Promise<Result.SetRankCapByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/status/model/{experienceName}/property/{propertyId}/cap')
            .replace('{service}', 'experience')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{experienceName}', String(request.getExperienceName() ?? 'null') === "" ? "null" : String(request.getExperienceName() ?? 'null'))
            .replace('{propertyId}', String(request.getPropertyId() ?? 'null') === "" ? "null" : String(request.getPropertyId() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = request.getDuplicationAvoider() ?? null;
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'rankCapValue': request.getRankCapValue() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.SetRankCapByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public deleteStatusByUserId(request: Request.DeleteStatusByUserIdRequest): Promise<Result.DeleteStatusByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/status/model/{experienceName}/property/{propertyId}')
            .replace('{service}', 'experience')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{experienceName}', String(request.getExperienceName() ?? 'null') === "" ? "null" : String(request.getExperienceName() ?? 'null'))
            .replace('{propertyId}', String(request.getPropertyId() ?? 'null') === "" ? "null" : String(request.getPropertyId() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
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
            return Result.DeleteStatusByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public verifyRank(request: Request.VerifyRankRequest): Promise<Result.VerifyRankResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/status/{experienceName}/verify/rank/{verifyType}')
            .replace('{service}', 'experience')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{experienceName}', String(request.getExperienceName() ?? 'null') === "" ? "null" : String(request.getExperienceName() ?? 'null'))
            .replace('{verifyType}', String(request.getVerifyType() ?? 'null') === "" ? "null" : String(request.getVerifyType() ?? 'null'));
    
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
            'propertyId': request.getPropertyId() ?? null,
            'rankValue': request.getRankValue() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.VerifyRankResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public verifyRankByUserId(request: Request.VerifyRankByUserIdRequest): Promise<Result.VerifyRankByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/status/{experienceName}/verify/rank/{verifyType}')
            .replace('{service}', 'experience')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{experienceName}', String(request.getExperienceName() ?? 'null') === "" ? "null" : String(request.getExperienceName() ?? 'null'))
            .replace('{verifyType}', String(request.getVerifyType() ?? 'null') === "" ? "null" : String(request.getVerifyType() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = request.getDuplicationAvoider() ?? null;
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'propertyId': request.getPropertyId() ?? null,
            'rankValue': request.getRankValue() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.VerifyRankByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public verifyRankCap(request: Request.VerifyRankCapRequest): Promise<Result.VerifyRankCapResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/status/{experienceName}/verify/rankCap/{verifyType}')
            .replace('{service}', 'experience')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{experienceName}', String(request.getExperienceName() ?? 'null') === "" ? "null" : String(request.getExperienceName() ?? 'null'))
            .replace('{verifyType}', String(request.getVerifyType() ?? 'null') === "" ? "null" : String(request.getVerifyType() ?? 'null'));
    
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
            'propertyId': request.getPropertyId() ?? null,
            'rankCapValue': request.getRankCapValue() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.VerifyRankCapResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public verifyRankCapByUserId(request: Request.VerifyRankCapByUserIdRequest): Promise<Result.VerifyRankCapByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/status/{experienceName}/verify/rankCap/{verifyType}')
            .replace('{service}', 'experience')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{experienceName}', String(request.getExperienceName() ?? 'null') === "" ? "null" : String(request.getExperienceName() ?? 'null'))
            .replace('{verifyType}', String(request.getVerifyType() ?? 'null') === "" ? "null" : String(request.getVerifyType() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = request.getDuplicationAvoider() ?? null;
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'propertyId': request.getPropertyId() ?? null,
            'rankCapValue': request.getRankCapValue() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.VerifyRankCapByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public addExperienceByStampSheet(request: Request.AddExperienceByStampSheetRequest): Promise<Result.AddExperienceByStampSheetResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/stamp/experience/add')
            .replace('{service}', 'experience')
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
            return Result.AddExperienceByStampSheetResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public subExperienceByStampTask(request: Request.SubExperienceByStampTaskRequest): Promise<Result.SubExperienceByStampTaskResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/stamp/experience/sub')
            .replace('{service}', 'experience')
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
            return Result.SubExperienceByStampTaskResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public addRankCapByStampSheet(request: Request.AddRankCapByStampSheetRequest): Promise<Result.AddRankCapByStampSheetResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/stamp/rankCap/add')
            .replace('{service}', 'experience')
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
            return Result.AddRankCapByStampSheetResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public subRankCapByStampTask(request: Request.SubRankCapByStampTaskRequest): Promise<Result.SubRankCapByStampTaskResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/stamp/rankCap/sub')
            .replace('{service}', 'experience')
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
            return Result.SubRankCapByStampTaskResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public setRankCapByStampSheet(request: Request.SetRankCapByStampSheetRequest): Promise<Result.SetRankCapByStampSheetResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/stamp/rankCap/set')
            .replace('{service}', 'experience')
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
            return Result.SetRankCapByStampSheetResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public multiplyAcquireActionsByUserId(request: Request.MultiplyAcquireActionsByUserIdRequest): Promise<Result.MultiplyAcquireActionsByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/status/model/{experienceName}/property/{propertyId}/acquire/rate/{rateName}/multiply')
            .replace('{service}', 'experience')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{experienceName}', String(request.getExperienceName() ?? 'null') === "" ? "null" : String(request.getExperienceName() ?? 'null'))
            .replace('{propertyId}', String(request.getPropertyId() ?? 'null') === "" ? "null" : String(request.getPropertyId() ?? 'null'))
            .replace('{rateName}', String(request.getRateName() ?? 'null') === "" ? "null" : String(request.getRateName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = request.getDuplicationAvoider() ?? null;
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'acquireActions': request.getAcquireActions()?.map((item) => item.toDict()) ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.MultiplyAcquireActionsByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public multiplyAcquireActionsByStampSheet(request: Request.MultiplyAcquireActionsByStampSheetRequest): Promise<Result.MultiplyAcquireActionsByStampSheetResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/stamp/form/acquire')
            .replace('{service}', 'experience')
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
            return Result.MultiplyAcquireActionsByStampSheetResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public verifyRankByStampTask(request: Request.VerifyRankByStampTaskRequest): Promise<Result.VerifyRankByStampTaskResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/stamp/rank/verify')
            .replace('{service}', 'experience')
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
            return Result.VerifyRankByStampTaskResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public verifyRankCapByStampTask(request: Request.VerifyRankCapByStampTaskRequest): Promise<Result.VerifyRankCapByStampTaskResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/stamp/rankCap/verify')
            .replace('{service}', 'experience')
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
            return Result.VerifyRankCapByStampTaskResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }
}
