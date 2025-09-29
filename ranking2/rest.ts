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

export default class Gs2Ranking2RestClient extends AbstractGs2RestClient {

    public static ENDPOINT_HOST: string|null = null;

    constructor(session: Gs2RestSession) {
        super(session);
    }

    public describeNamespaces(request: Request.DescribeNamespacesRequest): Promise<Result.DescribeNamespacesResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region);
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'namePrefix': String(request.getNamePrefix() ?? null),
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
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/')
            .replace('{service}', 'ranking2')
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
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/status')
            .replace('{service}', 'ranking2')
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
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}')
            .replace('{service}', 'ranking2')
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
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}')
            .replace('{service}', 'ranking2')
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
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}')
            .replace('{service}', 'ranking2')
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

    public getServiceVersion(request: Request.GetServiceVersionRequest): Promise<Result.GetServiceVersionResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/system/version')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region);
    
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
            return Result.GetServiceVersionResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public dumpUserDataByUserId(request: Request.DumpUserDataByUserIdRequest): Promise<Result.DumpUserDataByUserIdResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/system/dump/user/{userId}')
            .replace('{service}', 'ranking2')
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
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/system/dump/user/{userId}')
            .replace('{service}', 'ranking2')
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
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/system/clean/user/{userId}')
            .replace('{service}', 'ranking2')
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
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/system/clean/user/{userId}')
            .replace('{service}', 'ranking2')
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
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/system/import/user/{userId}/prepare')
            .replace('{service}', 'ranking2')
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
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/system/import/user/{userId}')
            .replace('{service}', 'ranking2')
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
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/system/import/user/{userId}/{uploadToken}')
            .replace('{service}', 'ranking2')
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

    public describeGlobalRankingModels(request: Request.DescribeGlobalRankingModelsRequest): Promise<Result.DescribeGlobalRankingModelsResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/model/global')
            .replace('{service}', 'ranking2')
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
            return Result.DescribeGlobalRankingModelsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getGlobalRankingModel(request: Request.GetGlobalRankingModelRequest): Promise<Result.GetGlobalRankingModelResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/model/global/{rankingName}')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'));
    
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
            return Result.GetGlobalRankingModelResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeGlobalRankingModelMasters(request: Request.DescribeGlobalRankingModelMastersRequest): Promise<Result.DescribeGlobalRankingModelMastersResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/global')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'namePrefix': String(request.getNamePrefix() ?? null),
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
            return Result.DescribeGlobalRankingModelMastersResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public createGlobalRankingModelMaster(request: Request.CreateGlobalRankingModelMasterRequest): Promise<Result.CreateGlobalRankingModelMasterResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/global')
            .replace('{service}', 'ranking2')
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
            'minimumValue': request.getMinimumValue() ?? null,
            'maximumValue': request.getMaximumValue() ?? null,
            'sum': request.getSum() ?? null,
            'orderDirection': request.getOrderDirection() ?? null,
            'rankingRewards': request.getRankingRewards()?.map((item) => item.toDict()) ?? null,
            'rewardCalculationIndex': request.getRewardCalculationIndex() ?? null,
            'entryPeriodEventId': request.getEntryPeriodEventId() ?? null,
            'accessPeriodEventId': request.getAccessPeriodEventId() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.CreateGlobalRankingModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public getGlobalRankingModelMaster(request: Request.GetGlobalRankingModelMasterRequest): Promise<Result.GetGlobalRankingModelMasterResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/global/{rankingName}')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'));
    
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
            return Result.GetGlobalRankingModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public updateGlobalRankingModelMaster(request: Request.UpdateGlobalRankingModelMasterRequest): Promise<Result.UpdateGlobalRankingModelMasterResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/global/{rankingName}')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'description': request.getDescription() ?? null,
            'metadata': request.getMetadata() ?? null,
            'minimumValue': request.getMinimumValue() ?? null,
            'maximumValue': request.getMaximumValue() ?? null,
            'sum': request.getSum() ?? null,
            'orderDirection': request.getOrderDirection() ?? null,
            'rankingRewards': request.getRankingRewards()?.map((item) => item.toDict()) ?? null,
            'rewardCalculationIndex': request.getRewardCalculationIndex() ?? null,
            'entryPeriodEventId': request.getEntryPeriodEventId() ?? null,
            'accessPeriodEventId': request.getAccessPeriodEventId() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.UpdateGlobalRankingModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public deleteGlobalRankingModelMaster(request: Request.DeleteGlobalRankingModelMasterRequest): Promise<Result.DeleteGlobalRankingModelMasterResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/global/{rankingName}')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'));
    
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
            return Result.DeleteGlobalRankingModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeGlobalRankingScores(request: Request.DescribeGlobalRankingScoresRequest): Promise<Result.DescribeGlobalRankingScoresResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/score/global')
            .replace('{service}', 'ranking2')
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
            'rankingName': String(request.getRankingName() ?? null),
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
            return Result.DescribeGlobalRankingScoresResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeGlobalRankingScoresByUserId(request: Request.DescribeGlobalRankingScoresByUserIdRequest): Promise<Result.DescribeGlobalRankingScoresByUserIdResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/score/global')
            .replace('{service}', 'ranking2')
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
            'rankingName': String(request.getRankingName() ?? null),
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
            return Result.DescribeGlobalRankingScoresByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public putGlobalRankingScore(request: Request.PutGlobalRankingScoreRequest): Promise<Result.PutGlobalRankingScoreResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/score/global/{rankingName}')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'));
    
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
            'score': request.getScore() ?? null,
            'metadata': request.getMetadata() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.PutGlobalRankingScoreResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public putGlobalRankingScoreByUserId(request: Request.PutGlobalRankingScoreByUserIdRequest): Promise<Result.PutGlobalRankingScoreByUserIdResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/score/global/{rankingName}')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'));
    
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
            'score': request.getScore() ?? null,
            'metadata': request.getMetadata() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.PutGlobalRankingScoreByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public getGlobalRankingScore(request: Request.GetGlobalRankingScoreRequest): Promise<Result.GetGlobalRankingScoreResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/score/global/{rankingName}')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = request.getAccessToken() ?? null;
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'season': String(request.getSeason() ?? null),
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.GetGlobalRankingScoreResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getGlobalRankingScoreByUserId(request: Request.GetGlobalRankingScoreByUserIdRequest): Promise<Result.GetGlobalRankingScoreByUserIdResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/score/global/{rankingName}')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'))
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
            'season': String(request.getSeason() ?? null),
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.GetGlobalRankingScoreByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public deleteGlobalRankingScoreByUserId(request: Request.DeleteGlobalRankingScoreByUserIdRequest): Promise<Result.DeleteGlobalRankingScoreByUserIdResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/score/global/{rankingName}/{season}')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'));
    
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
            'season': String(request.getSeason() ?? null),
        };
        return axios.delete(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.DeleteGlobalRankingScoreByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public verifyGlobalRankingScore(request: Request.VerifyGlobalRankingScoreRequest): Promise<Result.VerifyGlobalRankingScoreResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/score/global/{rankingName}/verify/{verifyType}')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'))
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
            'season': request.getSeason() ?? null,
            'score': request.getScore() ?? null,
            'multiplyValueSpecifyingQuantity': request.getMultiplyValueSpecifyingQuantity() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.VerifyGlobalRankingScoreResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public verifyGlobalRankingScoreByUserId(request: Request.VerifyGlobalRankingScoreByUserIdRequest): Promise<Result.VerifyGlobalRankingScoreByUserIdResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/score/global/{rankingName}/verify/{verifyType}')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'))
            .replace('{verifyType}', String(request.getVerifyType() ?? 'null') === "" ? "null" : String(request.getVerifyType() ?? 'null'));
    
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
            'season': request.getSeason() ?? null,
            'score': request.getScore() ?? null,
            'multiplyValueSpecifyingQuantity': request.getMultiplyValueSpecifyingQuantity() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.VerifyGlobalRankingScoreByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public verifyGlobalRankingScoreByStampTask(request: Request.VerifyGlobalRankingScoreByStampTaskRequest): Promise<Result.VerifyGlobalRankingScoreByStampTaskResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/stamp/global/score/verify')
            .replace('{service}', 'ranking2')
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
            return Result.VerifyGlobalRankingScoreByStampTaskResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public describeGlobalRankingReceivedRewards(request: Request.DescribeGlobalRankingReceivedRewardsRequest): Promise<Result.DescribeGlobalRankingReceivedRewardsResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/global/reward/received')
            .replace('{service}', 'ranking2')
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
            'rankingName': String(request.getRankingName() ?? null),
            'season': String(request.getSeason() ?? null),
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
            return Result.DescribeGlobalRankingReceivedRewardsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeGlobalRankingReceivedRewardsByUserId(request: Request.DescribeGlobalRankingReceivedRewardsByUserIdRequest): Promise<Result.DescribeGlobalRankingReceivedRewardsByUserIdResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/global/reward/received')
            .replace('{service}', 'ranking2')
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
            'rankingName': String(request.getRankingName() ?? null),
            'season': String(request.getSeason() ?? null),
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
            return Result.DescribeGlobalRankingReceivedRewardsByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public createGlobalRankingReceivedReward(request: Request.CreateGlobalRankingReceivedRewardRequest): Promise<Result.CreateGlobalRankingReceivedRewardResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/global/reward/received/{rankingName}')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'));
    
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
            'season': request.getSeason() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.CreateGlobalRankingReceivedRewardResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public createGlobalRankingReceivedRewardByUserId(request: Request.CreateGlobalRankingReceivedRewardByUserIdRequest): Promise<Result.CreateGlobalRankingReceivedRewardByUserIdResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/global/reward/received/{rankingName}')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'));
    
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
            'season': request.getSeason() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.CreateGlobalRankingReceivedRewardByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public receiveGlobalRankingReceivedReward(request: Request.ReceiveGlobalRankingReceivedRewardRequest): Promise<Result.ReceiveGlobalRankingReceivedRewardResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/global/reward/received/{rankingName}/{season}/reward/receive')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'))
            .replace('{season}', String(request.getSeason() ?? 'null') === "" ? "null" : String(request.getSeason() ?? 'null'));
    
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
            return Result.ReceiveGlobalRankingReceivedRewardResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public receiveGlobalRankingReceivedRewardByUserId(request: Request.ReceiveGlobalRankingReceivedRewardByUserIdRequest): Promise<Result.ReceiveGlobalRankingReceivedRewardByUserIdResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/global/reward/received/{rankingName}/{season}/reward/receive')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'))
            .replace('{season}', String(request.getSeason() ?? 'null') === "" ? "null" : String(request.getSeason() ?? 'null'));
    
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
            'config': request.getConfig()?.map((item) => item.toDict()) ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.ReceiveGlobalRankingReceivedRewardByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public getGlobalRankingReceivedReward(request: Request.GetGlobalRankingReceivedRewardRequest): Promise<Result.GetGlobalRankingReceivedRewardResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/global/reward/received/{rankingName}')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = request.getAccessToken() ?? null;
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'season': String(request.getSeason() ?? null),
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.GetGlobalRankingReceivedRewardResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getGlobalRankingReceivedRewardByUserId(request: Request.GetGlobalRankingReceivedRewardByUserIdRequest): Promise<Result.GetGlobalRankingReceivedRewardByUserIdResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/global/reward/received/{rankingName}')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'))
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
            'season': String(request.getSeason() ?? null),
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.GetGlobalRankingReceivedRewardByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public deleteGlobalRankingReceivedRewardByUserId(request: Request.DeleteGlobalRankingReceivedRewardByUserIdRequest): Promise<Result.DeleteGlobalRankingReceivedRewardByUserIdResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/global/reward/received/{rankingName}/{season}')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'));
    
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
            'season': String(request.getSeason() ?? null),
        };
        return axios.delete(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.DeleteGlobalRankingReceivedRewardByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public createGlobalRankingReceivedRewardByStampTask(request: Request.CreateGlobalRankingReceivedRewardByStampTaskRequest): Promise<Result.CreateGlobalRankingReceivedRewardByStampTaskResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/stamp/ranking/global/reward/receive')
            .replace('{service}', 'ranking2')
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
            return Result.CreateGlobalRankingReceivedRewardByStampTaskResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public describeGlobalRankings(request: Request.DescribeGlobalRankingsRequest): Promise<Result.DescribeGlobalRankingsResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/ranking/global/{rankingName}/user/me')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = request.getAccessToken() ?? null;
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'season': String(request.getSeason() ?? null),
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
            return Result.DescribeGlobalRankingsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeGlobalRankingsByUserId(request: Request.DescribeGlobalRankingsByUserIdRequest): Promise<Result.DescribeGlobalRankingsByUserIdResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/ranking/global/{rankingName}/user/{userId}')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = request.getTimeOffsetToken() ?? null;
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'season': String(request.getSeason() ?? null),
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
            return Result.DescribeGlobalRankingsByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getGlobalRanking(request: Request.GetGlobalRankingRequest): Promise<Result.GetGlobalRankingResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/ranking/global/{rankingName}/user/me/rank')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = request.getAccessToken() ?? null;
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'season': String(request.getSeason() ?? null),
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.GetGlobalRankingResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getGlobalRankingByUserId(request: Request.GetGlobalRankingByUserIdRequest): Promise<Result.GetGlobalRankingByUserIdResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/ranking/global/{rankingName}/user/{userId}/rank')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'))
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
            'season': String(request.getSeason() ?? null),
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.GetGlobalRankingByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeClusterRankingModels(request: Request.DescribeClusterRankingModelsRequest): Promise<Result.DescribeClusterRankingModelsResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/model/cluster')
            .replace('{service}', 'ranking2')
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
            return Result.DescribeClusterRankingModelsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getClusterRankingModel(request: Request.GetClusterRankingModelRequest): Promise<Result.GetClusterRankingModelResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/model/cluster/{rankingName}')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'));
    
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
            return Result.GetClusterRankingModelResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeClusterRankingModelMasters(request: Request.DescribeClusterRankingModelMastersRequest): Promise<Result.DescribeClusterRankingModelMastersResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/cluster')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'namePrefix': String(request.getNamePrefix() ?? null),
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
            return Result.DescribeClusterRankingModelMastersResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public createClusterRankingModelMaster(request: Request.CreateClusterRankingModelMasterRequest): Promise<Result.CreateClusterRankingModelMasterResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/cluster')
            .replace('{service}', 'ranking2')
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
            'clusterType': request.getClusterType() ?? null,
            'minimumValue': request.getMinimumValue() ?? null,
            'maximumValue': request.getMaximumValue() ?? null,
            'sum': request.getSum() ?? null,
            'orderDirection': request.getOrderDirection() ?? null,
            'rankingRewards': request.getRankingRewards()?.map((item) => item.toDict()) ?? null,
            'rewardCalculationIndex': request.getRewardCalculationIndex() ?? null,
            'entryPeriodEventId': request.getEntryPeriodEventId() ?? null,
            'accessPeriodEventId': request.getAccessPeriodEventId() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.CreateClusterRankingModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public getClusterRankingModelMaster(request: Request.GetClusterRankingModelMasterRequest): Promise<Result.GetClusterRankingModelMasterResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/cluster/{rankingName}')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'));
    
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
            return Result.GetClusterRankingModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public updateClusterRankingModelMaster(request: Request.UpdateClusterRankingModelMasterRequest): Promise<Result.UpdateClusterRankingModelMasterResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/cluster/{rankingName}')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'description': request.getDescription() ?? null,
            'metadata': request.getMetadata() ?? null,
            'clusterType': request.getClusterType() ?? null,
            'minimumValue': request.getMinimumValue() ?? null,
            'maximumValue': request.getMaximumValue() ?? null,
            'sum': request.getSum() ?? null,
            'orderDirection': request.getOrderDirection() ?? null,
            'rankingRewards': request.getRankingRewards()?.map((item) => item.toDict()) ?? null,
            'rewardCalculationIndex': request.getRewardCalculationIndex() ?? null,
            'entryPeriodEventId': request.getEntryPeriodEventId() ?? null,
            'accessPeriodEventId': request.getAccessPeriodEventId() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.UpdateClusterRankingModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public deleteClusterRankingModelMaster(request: Request.DeleteClusterRankingModelMasterRequest): Promise<Result.DeleteClusterRankingModelMasterResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/cluster/{rankingName}')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'));
    
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
            return Result.DeleteClusterRankingModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeClusterRankingScores(request: Request.DescribeClusterRankingScoresRequest): Promise<Result.DescribeClusterRankingScoresResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/score/cluster')
            .replace('{service}', 'ranking2')
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
            'rankingName': String(request.getRankingName() ?? null),
            'clusterName': String(request.getClusterName() ?? null),
            'season': String(request.getSeason() ?? null),
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
            return Result.DescribeClusterRankingScoresResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeClusterRankingScoresByUserId(request: Request.DescribeClusterRankingScoresByUserIdRequest): Promise<Result.DescribeClusterRankingScoresByUserIdResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/score/cluster')
            .replace('{service}', 'ranking2')
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
            'rankingName': String(request.getRankingName() ?? null),
            'clusterName': String(request.getClusterName() ?? null),
            'season': String(request.getSeason() ?? null),
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
            return Result.DescribeClusterRankingScoresByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public putClusterRankingScore(request: Request.PutClusterRankingScoreRequest): Promise<Result.PutClusterRankingScoreResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/score/cluster/{rankingName}/{clusterName}')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'))
            .replace('{clusterName}', String(request.getClusterName() ?? 'null') === "" ? "null" : String(request.getClusterName() ?? 'null'));
    
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
            'score': request.getScore() ?? null,
            'metadata': request.getMetadata() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.PutClusterRankingScoreResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public putClusterRankingScoreByUserId(request: Request.PutClusterRankingScoreByUserIdRequest): Promise<Result.PutClusterRankingScoreByUserIdResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/score/cluster/{rankingName}/{clusterName}')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'))
            .replace('{clusterName}', String(request.getClusterName() ?? 'null') === "" ? "null" : String(request.getClusterName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'));
    
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
            'score': request.getScore() ?? null,
            'metadata': request.getMetadata() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.PutClusterRankingScoreByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public getClusterRankingScore(request: Request.GetClusterRankingScoreRequest): Promise<Result.GetClusterRankingScoreResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/score/cluster/{rankingName}/{clusterName}')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'))
            .replace('{clusterName}', String(request.getClusterName() ?? 'null') === "" ? "null" : String(request.getClusterName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = request.getAccessToken() ?? null;
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'season': String(request.getSeason() ?? null),
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.GetClusterRankingScoreResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getClusterRankingScoreByUserId(request: Request.GetClusterRankingScoreByUserIdRequest): Promise<Result.GetClusterRankingScoreByUserIdResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/score/cluster/{rankingName}/{clusterName}')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'))
            .replace('{clusterName}', String(request.getClusterName() ?? 'null') === "" ? "null" : String(request.getClusterName() ?? 'null'))
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
            'season': String(request.getSeason() ?? null),
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.GetClusterRankingScoreByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public deleteClusterRankingScoreByUserId(request: Request.DeleteClusterRankingScoreByUserIdRequest): Promise<Result.DeleteClusterRankingScoreByUserIdResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/score/cluster/{rankingName}/{clusterName}/{season}')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'))
            .replace('{clusterName}', String(request.getClusterName() ?? 'null') === "" ? "null" : String(request.getClusterName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'));
    
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
            'season': String(request.getSeason() ?? null),
        };
        return axios.delete(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.DeleteClusterRankingScoreByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public verifyClusterRankingScore(request: Request.VerifyClusterRankingScoreRequest): Promise<Result.VerifyClusterRankingScoreResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/score/cluster/{rankingName}/{clusterName}/verify/{verifyType}')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'))
            .replace('{clusterName}', String(request.getClusterName() ?? 'null') === "" ? "null" : String(request.getClusterName() ?? 'null'))
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
            'season': request.getSeason() ?? null,
            'score': request.getScore() ?? null,
            'multiplyValueSpecifyingQuantity': request.getMultiplyValueSpecifyingQuantity() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.VerifyClusterRankingScoreResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public verifyClusterRankingScoreByUserId(request: Request.VerifyClusterRankingScoreByUserIdRequest): Promise<Result.VerifyClusterRankingScoreByUserIdResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/score/cluster/{rankingName}/{clusterName}/verify/{verifyType}')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'))
            .replace('{clusterName}', String(request.getClusterName() ?? 'null') === "" ? "null" : String(request.getClusterName() ?? 'null'))
            .replace('{verifyType}', String(request.getVerifyType() ?? 'null') === "" ? "null" : String(request.getVerifyType() ?? 'null'));
    
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
            'season': request.getSeason() ?? null,
            'score': request.getScore() ?? null,
            'multiplyValueSpecifyingQuantity': request.getMultiplyValueSpecifyingQuantity() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.VerifyClusterRankingScoreByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public verifyClusterRankingScoreByStampTask(request: Request.VerifyClusterRankingScoreByStampTaskRequest): Promise<Result.VerifyClusterRankingScoreByStampTaskResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/stamp/cluster/score/verify')
            .replace('{service}', 'ranking2')
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
            return Result.VerifyClusterRankingScoreByStampTaskResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public describeClusterRankingReceivedRewards(request: Request.DescribeClusterRankingReceivedRewardsRequest): Promise<Result.DescribeClusterRankingReceivedRewardsResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/cluster/reward/received')
            .replace('{service}', 'ranking2')
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
            'rankingName': String(request.getRankingName() ?? null),
            'clusterName': String(request.getClusterName() ?? null),
            'season': String(request.getSeason() ?? null),
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
            return Result.DescribeClusterRankingReceivedRewardsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeClusterRankingReceivedRewardsByUserId(request: Request.DescribeClusterRankingReceivedRewardsByUserIdRequest): Promise<Result.DescribeClusterRankingReceivedRewardsByUserIdResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/cluster/reward/received')
            .replace('{service}', 'ranking2')
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
            'rankingName': String(request.getRankingName() ?? null),
            'clusterName': String(request.getClusterName() ?? null),
            'season': String(request.getSeason() ?? null),
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
            return Result.DescribeClusterRankingReceivedRewardsByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public createClusterRankingReceivedReward(request: Request.CreateClusterRankingReceivedRewardRequest): Promise<Result.CreateClusterRankingReceivedRewardResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/cluster/reward/received/{rankingName}/{clusterName}')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'))
            .replace('{clusterName}', String(request.getClusterName() ?? 'null') === "" ? "null" : String(request.getClusterName() ?? 'null'));
    
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
            'season': request.getSeason() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.CreateClusterRankingReceivedRewardResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public createClusterRankingReceivedRewardByUserId(request: Request.CreateClusterRankingReceivedRewardByUserIdRequest): Promise<Result.CreateClusterRankingReceivedRewardByUserIdResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/cluster/reward/received/{rankingName}/{clusterName}')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'))
            .replace('{clusterName}', String(request.getClusterName() ?? 'null') === "" ? "null" : String(request.getClusterName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'));
    
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
            'season': request.getSeason() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.CreateClusterRankingReceivedRewardByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public receiveClusterRankingReceivedReward(request: Request.ReceiveClusterRankingReceivedRewardRequest): Promise<Result.ReceiveClusterRankingReceivedRewardResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/cluster/reward/received/{rankingName}/{clusterName}/{season}/reward/receive')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'))
            .replace('{clusterName}', String(request.getClusterName() ?? 'null') === "" ? "null" : String(request.getClusterName() ?? 'null'))
            .replace('{season}', String(request.getSeason() ?? 'null') === "" ? "null" : String(request.getSeason() ?? 'null'));
    
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
            return Result.ReceiveClusterRankingReceivedRewardResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public receiveClusterRankingReceivedRewardByUserId(request: Request.ReceiveClusterRankingReceivedRewardByUserIdRequest): Promise<Result.ReceiveClusterRankingReceivedRewardByUserIdResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/cluster/reward/received/{rankingName}/{clusterName}/{season}/reward/receive')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'))
            .replace('{clusterName}', String(request.getClusterName() ?? 'null') === "" ? "null" : String(request.getClusterName() ?? 'null'))
            .replace('{season}', String(request.getSeason() ?? 'null') === "" ? "null" : String(request.getSeason() ?? 'null'));
    
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
            'config': request.getConfig()?.map((item) => item.toDict()) ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.ReceiveClusterRankingReceivedRewardByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public getClusterRankingReceivedReward(request: Request.GetClusterRankingReceivedRewardRequest): Promise<Result.GetClusterRankingReceivedRewardResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/cluster/reward/received/{rankingName}/{clusterName}')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'))
            .replace('{clusterName}', String(request.getClusterName() ?? 'null') === "" ? "null" : String(request.getClusterName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = request.getAccessToken() ?? null;
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'season': String(request.getSeason() ?? null),
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.GetClusterRankingReceivedRewardResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getClusterRankingReceivedRewardByUserId(request: Request.GetClusterRankingReceivedRewardByUserIdRequest): Promise<Result.GetClusterRankingReceivedRewardByUserIdResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/cluster/reward/received/{rankingName}/{clusterName}')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'))
            .replace('{clusterName}', String(request.getClusterName() ?? 'null') === "" ? "null" : String(request.getClusterName() ?? 'null'))
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
            'season': String(request.getSeason() ?? null),
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.GetClusterRankingReceivedRewardByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public deleteClusterRankingReceivedRewardByUserId(request: Request.DeleteClusterRankingReceivedRewardByUserIdRequest): Promise<Result.DeleteClusterRankingReceivedRewardByUserIdResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/cluster/reward/received/{rankingName}/{clusterName}/{season}')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'))
            .replace('{clusterName}', String(request.getClusterName() ?? 'null') === "" ? "null" : String(request.getClusterName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'));
    
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
            'season': String(request.getSeason() ?? null),
        };
        return axios.delete(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.DeleteClusterRankingReceivedRewardByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public createClusterRankingReceivedRewardByStampTask(request: Request.CreateClusterRankingReceivedRewardByStampTaskRequest): Promise<Result.CreateClusterRankingReceivedRewardByStampTaskResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/stamp/ranking/cluster/reward/receive')
            .replace('{service}', 'ranking2')
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
            return Result.CreateClusterRankingReceivedRewardByStampTaskResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public describeClusterRankings(request: Request.DescribeClusterRankingsRequest): Promise<Result.DescribeClusterRankingsResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/ranking/cluster/{rankingName}/{clusterName}/user/me')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'))
            .replace('{clusterName}', String(request.getClusterName() ?? 'null') === "" ? "null" : String(request.getClusterName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = request.getAccessToken() ?? null;
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'season': String(request.getSeason() ?? null),
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
            return Result.DescribeClusterRankingsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeClusterRankingsByUserId(request: Request.DescribeClusterRankingsByUserIdRequest): Promise<Result.DescribeClusterRankingsByUserIdResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/ranking/cluster/{rankingName}/{clusterName}/user/{userId}')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'))
            .replace('{clusterName}', String(request.getClusterName() ?? 'null') === "" ? "null" : String(request.getClusterName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = request.getTimeOffsetToken() ?? null;
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'season': String(request.getSeason() ?? null),
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
            return Result.DescribeClusterRankingsByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getClusterRanking(request: Request.GetClusterRankingRequest): Promise<Result.GetClusterRankingResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/ranking/cluster/{rankingName}/{clusterName}/user/me/rank')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'))
            .replace('{clusterName}', String(request.getClusterName() ?? 'null') === "" ? "null" : String(request.getClusterName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = request.getAccessToken() ?? null;
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'season': String(request.getSeason() ?? null),
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.GetClusterRankingResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getClusterRankingByUserId(request: Request.GetClusterRankingByUserIdRequest): Promise<Result.GetClusterRankingByUserIdResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/ranking/cluster/{rankingName}/{clusterName}/user/{userId}/rank')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'))
            .replace('{clusterName}', String(request.getClusterName() ?? 'null') === "" ? "null" : String(request.getClusterName() ?? 'null'))
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
            'season': String(request.getSeason() ?? null),
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.GetClusterRankingByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeSubscribeRankingModels(request: Request.DescribeSubscribeRankingModelsRequest): Promise<Result.DescribeSubscribeRankingModelsResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/model/subscribe')
            .replace('{service}', 'ranking2')
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
            return Result.DescribeSubscribeRankingModelsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getSubscribeRankingModel(request: Request.GetSubscribeRankingModelRequest): Promise<Result.GetSubscribeRankingModelResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/model/subscribe/{rankingName}')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'));
    
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
            return Result.GetSubscribeRankingModelResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeSubscribeRankingModelMasters(request: Request.DescribeSubscribeRankingModelMastersRequest): Promise<Result.DescribeSubscribeRankingModelMastersResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/subscribe')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'namePrefix': String(request.getNamePrefix() ?? null),
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
            return Result.DescribeSubscribeRankingModelMastersResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public createSubscribeRankingModelMaster(request: Request.CreateSubscribeRankingModelMasterRequest): Promise<Result.CreateSubscribeRankingModelMasterResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/subscribe')
            .replace('{service}', 'ranking2')
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
            'minimumValue': request.getMinimumValue() ?? null,
            'maximumValue': request.getMaximumValue() ?? null,
            'sum': request.getSum() ?? null,
            'orderDirection': request.getOrderDirection() ?? null,
            'entryPeriodEventId': request.getEntryPeriodEventId() ?? null,
            'accessPeriodEventId': request.getAccessPeriodEventId() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.CreateSubscribeRankingModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public getSubscribeRankingModelMaster(request: Request.GetSubscribeRankingModelMasterRequest): Promise<Result.GetSubscribeRankingModelMasterResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/subscribe/{rankingName}')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'));
    
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
            return Result.GetSubscribeRankingModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public updateSubscribeRankingModelMaster(request: Request.UpdateSubscribeRankingModelMasterRequest): Promise<Result.UpdateSubscribeRankingModelMasterResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/subscribe/{rankingName}')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'description': request.getDescription() ?? null,
            'metadata': request.getMetadata() ?? null,
            'minimumValue': request.getMinimumValue() ?? null,
            'maximumValue': request.getMaximumValue() ?? null,
            'sum': request.getSum() ?? null,
            'orderDirection': request.getOrderDirection() ?? null,
            'entryPeriodEventId': request.getEntryPeriodEventId() ?? null,
            'accessPeriodEventId': request.getAccessPeriodEventId() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.UpdateSubscribeRankingModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public deleteSubscribeRankingModelMaster(request: Request.DeleteSubscribeRankingModelMasterRequest): Promise<Result.DeleteSubscribeRankingModelMasterResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/subscribe/{rankingName}')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'));
    
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
            return Result.DeleteSubscribeRankingModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeSubscribes(request: Request.DescribeSubscribesRequest): Promise<Result.DescribeSubscribesResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/subscribe/score')
            .replace('{service}', 'ranking2')
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
            'rankingName': String(request.getRankingName() ?? null),
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
            return Result.DescribeSubscribesResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeSubscribesByUserId(request: Request.DescribeSubscribesByUserIdRequest): Promise<Result.DescribeSubscribesByUserIdResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/subscribe/score')
            .replace('{service}', 'ranking2')
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
            'rankingName': String(request.getRankingName() ?? null),
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
            return Result.DescribeSubscribesByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public addSubscribe(request: Request.AddSubscribeRequest): Promise<Result.AddSubscribeResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/subscribe/{rankingName}/target/{targetUserId}')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'))
            .replace('{targetUserId}', String(request.getTargetUserId() ?? 'null') === "" ? "null" : String(request.getTargetUserId() ?? 'null'));
    
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
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.AddSubscribeResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public addSubscribeByUserId(request: Request.AddSubscribeByUserIdRequest): Promise<Result.AddSubscribeByUserIdResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/subscribe/{rankingName}/target/{targetUserId}')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{targetUserId}', String(request.getTargetUserId() ?? 'null') === "" ? "null" : String(request.getTargetUserId() ?? 'null'));
    
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
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.AddSubscribeByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public describeSubscribeRankingScores(request: Request.DescribeSubscribeRankingScoresRequest): Promise<Result.DescribeSubscribeRankingScoresResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/score/subscribe')
            .replace('{service}', 'ranking2')
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
            'rankingName': String(request.getRankingName() ?? null),
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
            return Result.DescribeSubscribeRankingScoresResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeSubscribeRankingScoresByUserId(request: Request.DescribeSubscribeRankingScoresByUserIdRequest): Promise<Result.DescribeSubscribeRankingScoresByUserIdResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/score/subscribe')
            .replace('{service}', 'ranking2')
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
            'rankingName': String(request.getRankingName() ?? null),
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
            return Result.DescribeSubscribeRankingScoresByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public putSubscribeRankingScore(request: Request.PutSubscribeRankingScoreRequest): Promise<Result.PutSubscribeRankingScoreResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/score/subscribe/{rankingName}')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'));
    
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
            'score': request.getScore() ?? null,
            'metadata': request.getMetadata() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.PutSubscribeRankingScoreResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public putSubscribeRankingScoreByUserId(request: Request.PutSubscribeRankingScoreByUserIdRequest): Promise<Result.PutSubscribeRankingScoreByUserIdResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/score/subscribe/{rankingName}')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'));
    
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
            'score': request.getScore() ?? null,
            'metadata': request.getMetadata() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.PutSubscribeRankingScoreByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public getSubscribeRankingScore(request: Request.GetSubscribeRankingScoreRequest): Promise<Result.GetSubscribeRankingScoreResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/score/subscribe/{rankingName}')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = request.getAccessToken() ?? null;
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'season': String(request.getSeason() ?? null),
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.GetSubscribeRankingScoreResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getSubscribeRankingScoreByUserId(request: Request.GetSubscribeRankingScoreByUserIdRequest): Promise<Result.GetSubscribeRankingScoreByUserIdResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/score/subscribe/{rankingName}')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'))
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
            'season': String(request.getSeason() ?? null),
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.GetSubscribeRankingScoreByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public deleteSubscribeRankingScoreByUserId(request: Request.DeleteSubscribeRankingScoreByUserIdRequest): Promise<Result.DeleteSubscribeRankingScoreByUserIdResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/score/subscribe/{rankingName}/{season}')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'));
    
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
            'season': String(request.getSeason() ?? null),
        };
        return axios.delete(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.DeleteSubscribeRankingScoreByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public verifySubscribeRankingScore(request: Request.VerifySubscribeRankingScoreRequest): Promise<Result.VerifySubscribeRankingScoreResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/score/subscribe/{rankingName}/verify/{verifyType}')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'))
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
            'season': request.getSeason() ?? null,
            'score': request.getScore() ?? null,
            'multiplyValueSpecifyingQuantity': request.getMultiplyValueSpecifyingQuantity() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.VerifySubscribeRankingScoreResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public verifySubscribeRankingScoreByUserId(request: Request.VerifySubscribeRankingScoreByUserIdRequest): Promise<Result.VerifySubscribeRankingScoreByUserIdResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/score/subscribe/{rankingName}/verify/{verifyType}')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'))
            .replace('{verifyType}', String(request.getVerifyType() ?? 'null') === "" ? "null" : String(request.getVerifyType() ?? 'null'));
    
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
            'season': request.getSeason() ?? null,
            'score': request.getScore() ?? null,
            'multiplyValueSpecifyingQuantity': request.getMultiplyValueSpecifyingQuantity() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.VerifySubscribeRankingScoreByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public verifySubscribeRankingScoreByStampTask(request: Request.VerifySubscribeRankingScoreByStampTaskRequest): Promise<Result.VerifySubscribeRankingScoreByStampTaskResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/stamp/subscribe/score/verify')
            .replace('{service}', 'ranking2')
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
            return Result.VerifySubscribeRankingScoreByStampTaskResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public describeSubscribeRankings(request: Request.DescribeSubscribeRankingsRequest): Promise<Result.DescribeSubscribeRankingsResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/ranking/subscribe/{rankingName}/user/me')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = request.getAccessToken() ?? null;
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'season': String(request.getSeason() ?? null),
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
            return Result.DescribeSubscribeRankingsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeSubscribeRankingsByUserId(request: Request.DescribeSubscribeRankingsByUserIdRequest): Promise<Result.DescribeSubscribeRankingsByUserIdResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/ranking/subscribe/{rankingName}/user/{userId}')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = request.getTimeOffsetToken() ?? null;
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'season': String(request.getSeason() ?? null),
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
            return Result.DescribeSubscribeRankingsByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getSubscribeRanking(request: Request.GetSubscribeRankingRequest): Promise<Result.GetSubscribeRankingResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/ranking/subscribe/{rankingName}/user/me/rank')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = request.getAccessToken() ?? null;
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'season': String(request.getSeason() ?? null),
            'scorerUserId': String(request.getScorerUserId() ?? null),
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.GetSubscribeRankingResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getSubscribeRankingByUserId(request: Request.GetSubscribeRankingByUserIdRequest): Promise<Result.GetSubscribeRankingByUserIdResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/ranking/subscribe/{rankingName}/user/{userId}/rank')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'))
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
            'season': String(request.getSeason() ?? null),
            'scorerUserId': String(request.getScorerUserId() ?? null),
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.GetSubscribeRankingByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public exportMaster(request: Request.ExportMasterRequest): Promise<Result.ExportMasterResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/export')
            .replace('{service}', 'ranking2')
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

    public getCurrentRankingMaster(request: Request.GetCurrentRankingMasterRequest): Promise<Result.GetCurrentRankingMasterResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master')
            .replace('{service}', 'ranking2')
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
            return Result.GetCurrentRankingMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public preUpdateCurrentRankingMaster(request: Request.PreUpdateCurrentRankingMasterRequest): Promise<Result.PreUpdateCurrentRankingMasterResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
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
            return Result.PreUpdateCurrentRankingMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public updateCurrentRankingMaster(request: Request.UpdateCurrentRankingMasterRequest): Promise<Result.UpdateCurrentRankingMasterResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'mode': request.getMode() ?? null,
            'settings': request.getSettings() ?? null,
            'uploadToken': request.getUploadToken() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.UpdateCurrentRankingMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public updateCurrentRankingMasterFromGitHub(request: Request.UpdateCurrentRankingMasterFromGitHubRequest): Promise<Result.UpdateCurrentRankingMasterFromGitHubResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/from_git_hub')
            .replace('{service}', 'ranking2')
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
            return Result.UpdateCurrentRankingMasterFromGitHubResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public getSubscribe(request: Request.GetSubscribeRequest): Promise<Result.GetSubscribeResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/subscribe/{rankingName}/target/{targetUserId}')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'))
            .replace('{targetUserId}', String(request.getTargetUserId() ?? 'null') === "" ? "null" : String(request.getTargetUserId() ?? 'null'));
    
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
            return Result.GetSubscribeResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getSubscribeByUserId(request: Request.GetSubscribeByUserIdRequest): Promise<Result.GetSubscribeByUserIdResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/subscribe/{rankingName}/target/{targetUserId}')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{targetUserId}', String(request.getTargetUserId() ?? 'null') === "" ? "null" : String(request.getTargetUserId() ?? 'null'));
    
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
            return Result.GetSubscribeByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public deleteSubscribe(request: Request.DeleteSubscribeRequest): Promise<Result.DeleteSubscribeResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/subscribe/{rankingName}/target/{targetUserId}')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'))
            .replace('{targetUserId}', String(request.getTargetUserId() ?? 'null') === "" ? "null" : String(request.getTargetUserId() ?? 'null'));
    
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
            return Result.DeleteSubscribeResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public deleteSubscribeByUserId(request: Request.DeleteSubscribeByUserIdRequest): Promise<Result.DeleteSubscribeByUserIdResult> {
        const url = ((Gs2Ranking2RestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/subscribe/{rankingName}/target/{targetUserId}')
            .replace('{service}', 'ranking2')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rankingName}', String(request.getRankingName() ?? 'null') === "" ? "null" : String(request.getRankingName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{targetUserId}', String(request.getTargetUserId() ?? 'null') === "" ? "null" : String(request.getTargetUserId() ?? 'null'));
    
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
            return Result.DeleteSubscribeByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }
}
