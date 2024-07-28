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

export default class Gs2GuildRestClient extends AbstractGs2RestClient {

    constructor(session: Gs2RestSession) {
        super(session);
    }

    public describeNamespaces(request: Request.DescribeNamespacesRequest): Promise<Result.DescribeNamespacesResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/')
            .replace('{service}', 'guild')
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
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region);
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'name': request.getName() ?? null,
            'description': request.getDescription() ?? null,
            'joinNotification': request.getJoinNotification()?.toDict() ?? null,
            'leaveNotification': request.getLeaveNotification()?.toDict() ?? null,
            'changeMemberNotification': request.getChangeMemberNotification()?.toDict() ?? null,
            'receiveRequestNotification': request.getReceiveRequestNotification()?.toDict() ?? null,
            'removeRequestNotification': request.getRemoveRequestNotification()?.toDict() ?? null,
            'createGuildScript': request.getCreateGuildScript()?.toDict() ?? null,
            'joinGuildScript': request.getJoinGuildScript()?.toDict() ?? null,
            'leaveGuildScript': request.getLeaveGuildScript()?.toDict() ?? null,
            'changeRoleScript': request.getChangeRoleScript()?.toDict() ?? null,
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
            .replace('{service}', 'guild')
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
            .replace('{service}', 'guild')
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
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'description': request.getDescription() ?? null,
            'joinNotification': request.getJoinNotification()?.toDict() ?? null,
            'leaveNotification': request.getLeaveNotification()?.toDict() ?? null,
            'changeMemberNotification': request.getChangeMemberNotification()?.toDict() ?? null,
            'receiveRequestNotification': request.getReceiveRequestNotification()?.toDict() ?? null,
            'removeRequestNotification': request.getRemoveRequestNotification()?.toDict() ?? null,
            'createGuildScript': request.getCreateGuildScript()?.toDict() ?? null,
            'joinGuildScript': request.getJoinGuildScript()?.toDict() ?? null,
            'leaveGuildScript': request.getLeaveGuildScript()?.toDict() ?? null,
            'changeRoleScript': request.getChangeRoleScript()?.toDict() ?? null,
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
            .replace('{service}', 'guild')
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
            .replace('{service}', 'guild')
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
            .replace('{service}', 'guild')
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
            .replace('{service}', 'guild')
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
            .replace('{service}', 'guild')
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
            .replace('{service}', 'guild')
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
            .replace('{service}', 'guild')
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
            .replace('{service}', 'guild')
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

    public describeGuildModelMasters(request: Request.DescribeGuildModelMastersRequest): Promise<Result.DescribeGuildModelMastersResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model')
            .replace('{service}', 'guild')
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
            return Result.DescribeGuildModelMastersResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public createGuildModelMaster(request: Request.CreateGuildModelMasterRequest): Promise<Result.CreateGuildModelMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model')
            .replace('{service}', 'guild')
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
            'defaultMaximumMemberCount': request.getDefaultMaximumMemberCount() ?? null,
            'maximumMemberCount': request.getMaximumMemberCount() ?? null,
            'inactivityPeriodDays': request.getInactivityPeriodDays() ?? null,
            'roles': request.getRoles()?.map((item) => item.toDict()) ?? null,
            'guildMasterRole': request.getGuildMasterRole() ?? null,
            'guildMemberDefaultRole': request.getGuildMemberDefaultRole() ?? null,
            'rejoinCoolTimeMinutes': request.getRejoinCoolTimeMinutes() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.CreateGuildModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public getGuildModelMaster(request: Request.GetGuildModelMasterRequest): Promise<Result.GetGuildModelMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model/{guildModelName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'));
    
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
            return Result.GetGuildModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public updateGuildModelMaster(request: Request.UpdateGuildModelMasterRequest): Promise<Result.UpdateGuildModelMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model/{guildModelName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'description': request.getDescription() ?? null,
            'metadata': request.getMetadata() ?? null,
            'defaultMaximumMemberCount': request.getDefaultMaximumMemberCount() ?? null,
            'maximumMemberCount': request.getMaximumMemberCount() ?? null,
            'inactivityPeriodDays': request.getInactivityPeriodDays() ?? null,
            'roles': request.getRoles()?.map((item) => item.toDict()) ?? null,
            'guildMasterRole': request.getGuildMasterRole() ?? null,
            'guildMemberDefaultRole': request.getGuildMemberDefaultRole() ?? null,
            'rejoinCoolTimeMinutes': request.getRejoinCoolTimeMinutes() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.UpdateGuildModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public deleteGuildModelMaster(request: Request.DeleteGuildModelMasterRequest): Promise<Result.DeleteGuildModelMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model/{guildModelName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'));
    
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
            return Result.DeleteGuildModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeGuildModels(request: Request.DescribeGuildModelsRequest): Promise<Result.DescribeGuildModelsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/model')
            .replace('{service}', 'guild')
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
            return Result.DescribeGuildModelsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getGuildModel(request: Request.GetGuildModelRequest): Promise<Result.GetGuildModelResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/model/{guildModelName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'));
    
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
            return Result.GetGuildModelResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public searchGuilds(request: Request.SearchGuildsRequest): Promise<Result.SearchGuildsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/guild/{guildModelName}/search')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'));
    
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
            'displayName': request.getDisplayName() ?? null,
            'attributes1': request.getAttributes1() ?? null,
            'attributes2': request.getAttributes2() ?? null,
            'attributes3': request.getAttributes3() ?? null,
            'attributes4': request.getAttributes4() ?? null,
            'attributes5': request.getAttributes5() ?? null,
            'joinPolicies': request.getJoinPolicies() ?? null,
            'includeFullMembersGuild': request.getIncludeFullMembersGuild() ?? null,
            'pageToken': request.getPageToken() ?? null,
            'limit': request.getLimit() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.SearchGuildsResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public searchGuildsByUserId(request: Request.SearchGuildsByUserIdRequest): Promise<Result.SearchGuildsByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/guild/{guildModelName}/search')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'))
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
            'displayName': request.getDisplayName() ?? null,
            'attributes1': request.getAttributes1() ?? null,
            'attributes2': request.getAttributes2() ?? null,
            'attributes3': request.getAttributes3() ?? null,
            'attributes4': request.getAttributes4() ?? null,
            'attributes5': request.getAttributes5() ?? null,
            'joinPolicies': request.getJoinPolicies() ?? null,
            'includeFullMembersGuild': request.getIncludeFullMembersGuild() ?? null,
            'pageToken': request.getPageToken() ?? null,
            'limit': request.getLimit() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.SearchGuildsByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public createGuild(request: Request.CreateGuildRequest): Promise<Result.CreateGuildResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/guild/{guildModelName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'));
    
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
            'displayName': request.getDisplayName() ?? null,
            'attribute1': request.getAttribute1() ?? null,
            'attribute2': request.getAttribute2() ?? null,
            'attribute3': request.getAttribute3() ?? null,
            'attribute4': request.getAttribute4() ?? null,
            'attribute5': request.getAttribute5() ?? null,
            'joinPolicy': request.getJoinPolicy() ?? null,
            'customRoles': request.getCustomRoles()?.map((item) => item.toDict()) ?? null,
            'guildMemberDefaultRole': request.getGuildMemberDefaultRole() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.CreateGuildResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public createGuildByUserId(request: Request.CreateGuildByUserIdRequest): Promise<Result.CreateGuildByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/guild/{guildModelName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'));
    
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
            'displayName': request.getDisplayName() ?? null,
            'attribute1': request.getAttribute1() ?? null,
            'attribute2': request.getAttribute2() ?? null,
            'attribute3': request.getAttribute3() ?? null,
            'attribute4': request.getAttribute4() ?? null,
            'attribute5': request.getAttribute5() ?? null,
            'joinPolicy': request.getJoinPolicy() ?? null,
            'customRoles': request.getCustomRoles()?.map((item) => item.toDict()) ?? null,
            'guildMemberDefaultRole': request.getGuildMemberDefaultRole() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.CreateGuildByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public getGuild(request: Request.GetGuildRequest): Promise<Result.GetGuildResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/guild/{guildModelName}/{guildName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'))
            .replace('{guildName}', String(request.getGuildName() ?? 'null') === "" ? "null" : String(request.getGuildName() ?? 'null'));
    
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
            return Result.GetGuildResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getGuildByUserId(request: Request.GetGuildByUserIdRequest): Promise<Result.GetGuildByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/guild/{guildModelName}/{guildName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'))
            .replace('{guildName}', String(request.getGuildName() ?? 'null') === "" ? "null" : String(request.getGuildName() ?? 'null'));
    
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
            return Result.GetGuildByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public updateGuild(request: Request.UpdateGuildRequest): Promise<Result.UpdateGuildResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/me')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'));
    
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
            'displayName': request.getDisplayName() ?? null,
            'attribute1': request.getAttribute1() ?? null,
            'attribute2': request.getAttribute2() ?? null,
            'attribute3': request.getAttribute3() ?? null,
            'attribute4': request.getAttribute4() ?? null,
            'attribute5': request.getAttribute5() ?? null,
            'joinPolicy': request.getJoinPolicy() ?? null,
            'customRoles': request.getCustomRoles()?.map((item) => item.toDict()) ?? null,
            'guildMemberDefaultRole': request.getGuildMemberDefaultRole() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.UpdateGuildResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public updateGuildByGuildName(request: Request.UpdateGuildByGuildNameRequest): Promise<Result.UpdateGuildByGuildNameResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/{guildName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{guildName}', String(request.getGuildName() ?? 'null') === "" ? "null" : String(request.getGuildName() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = request.getDuplicationAvoider() ?? null;
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'displayName': request.getDisplayName() ?? null,
            'attribute1': request.getAttribute1() ?? null,
            'attribute2': request.getAttribute2() ?? null,
            'attribute3': request.getAttribute3() ?? null,
            'attribute4': request.getAttribute4() ?? null,
            'attribute5': request.getAttribute5() ?? null,
            'joinPolicy': request.getJoinPolicy() ?? null,
            'customRoles': request.getCustomRoles()?.map((item) => item.toDict()) ?? null,
            'guildMemberDefaultRole': request.getGuildMemberDefaultRole() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.UpdateGuildByGuildNameResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public deleteMember(request: Request.DeleteMemberRequest): Promise<Result.DeleteMemberResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/me/member/{targetUserId}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'))
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
            return Result.DeleteMemberResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public deleteMemberByGuildName(request: Request.DeleteMemberByGuildNameRequest): Promise<Result.DeleteMemberByGuildNameResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/{guildName}/member/{targetUserId}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'))
            .replace('{guildName}', String(request.getGuildName() ?? 'null') === "" ? "null" : String(request.getGuildName() ?? 'null'))
            .replace('{targetUserId}', String(request.getTargetUserId() ?? 'null') === "" ? "null" : String(request.getTargetUserId() ?? 'null'));
    
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
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.DeleteMemberByGuildNameResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public updateMemberRole(request: Request.UpdateMemberRoleRequest): Promise<Result.UpdateMemberRoleResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/me/member/{targetUserId}/role')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'))
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
            'roleName': request.getRoleName() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.UpdateMemberRoleResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public updateMemberRoleByGuildName(request: Request.UpdateMemberRoleByGuildNameRequest): Promise<Result.UpdateMemberRoleByGuildNameResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/{guildName}/member/{targetUserId}/role')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'))
            .replace('{guildName}', String(request.getGuildName() ?? 'null') === "" ? "null" : String(request.getGuildName() ?? 'null'))
            .replace('{targetUserId}', String(request.getTargetUserId() ?? 'null') === "" ? "null" : String(request.getTargetUserId() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = request.getDuplicationAvoider() ?? null;
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'roleName': request.getRoleName() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.UpdateMemberRoleByGuildNameResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public deleteGuild(request: Request.DeleteGuildRequest): Promise<Result.DeleteGuildResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/me')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'));
    
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
            return Result.DeleteGuildResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public deleteGuildByGuildName(request: Request.DeleteGuildByGuildNameRequest): Promise<Result.DeleteGuildByGuildNameResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/{guildName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'))
            .replace('{guildName}', String(request.getGuildName() ?? 'null') === "" ? "null" : String(request.getGuildName() ?? 'null'));
    
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
            return Result.DeleteGuildByGuildNameResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public increaseMaximumCurrentMaximumMemberCountByGuildName(request: Request.IncreaseMaximumCurrentMaximumMemberCountByGuildNameRequest): Promise<Result.IncreaseMaximumCurrentMaximumMemberCountByGuildNameResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/{guildName}/currentMaximumMemberCount/increase')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'))
            .replace('{guildName}', String(request.getGuildName() ?? 'null') === "" ? "null" : String(request.getGuildName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = request.getDuplicationAvoider() ?? null;
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'value': request.getValue() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.IncreaseMaximumCurrentMaximumMemberCountByGuildNameResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public decreaseMaximumCurrentMaximumMemberCount(request: Request.DecreaseMaximumCurrentMaximumMemberCountRequest): Promise<Result.DecreaseMaximumCurrentMaximumMemberCountResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/me/currentMaximumMemberCount/decrease')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'));
    
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
            'value': request.getValue() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.DecreaseMaximumCurrentMaximumMemberCountResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public decreaseMaximumCurrentMaximumMemberCountByGuildName(request: Request.DecreaseMaximumCurrentMaximumMemberCountByGuildNameRequest): Promise<Result.DecreaseMaximumCurrentMaximumMemberCountByGuildNameResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/{guildName}/currentMaximumMemberCount/decrease')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'))
            .replace('{guildName}', String(request.getGuildName() ?? 'null') === "" ? "null" : String(request.getGuildName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = request.getDuplicationAvoider() ?? null;
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'value': request.getValue() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.DecreaseMaximumCurrentMaximumMemberCountByGuildNameResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public verifyCurrentMaximumMemberCount(request: Request.VerifyCurrentMaximumMemberCountRequest): Promise<Result.VerifyCurrentMaximumMemberCountResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/me/currentMaximumMemberCount/verify')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'));
    
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
            'verifyType': request.getVerifyType() ?? null,
            'value': request.getValue() ?? null,
            'multiplyValueSpecifyingQuantity': request.getMultiplyValueSpecifyingQuantity() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.VerifyCurrentMaximumMemberCountResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public verifyCurrentMaximumMemberCountByGuildName(request: Request.VerifyCurrentMaximumMemberCountByGuildNameRequest): Promise<Result.VerifyCurrentMaximumMemberCountByGuildNameResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/{guildName}/currentMaximumMemberCount/verify')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'))
            .replace('{guildName}', String(request.getGuildName() ?? 'null') === "" ? "null" : String(request.getGuildName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = request.getDuplicationAvoider() ?? null;
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'verifyType': request.getVerifyType() ?? null,
            'value': request.getValue() ?? null,
            'multiplyValueSpecifyingQuantity': request.getMultiplyValueSpecifyingQuantity() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.VerifyCurrentMaximumMemberCountByGuildNameResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public verifyIncludeMember(request: Request.VerifyIncludeMemberRequest): Promise<Result.VerifyIncludeMemberResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/{guildName}/member/me/verify')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'))
            .replace('{guildName}', String(request.getGuildName() ?? 'null') === "" ? "null" : String(request.getGuildName() ?? 'null'));
    
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
            'verifyType': request.getVerifyType() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.VerifyIncludeMemberResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public verifyIncludeMemberByUserId(request: Request.VerifyIncludeMemberByUserIdRequest): Promise<Result.VerifyIncludeMemberByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/{guildName}/member/{userId}/verify')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'))
            .replace('{guildName}', String(request.getGuildName() ?? 'null') === "" ? "null" : String(request.getGuildName() ?? 'null'))
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
            'verifyType': request.getVerifyType() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.VerifyIncludeMemberByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public setMaximumCurrentMaximumMemberCountByGuildName(request: Request.SetMaximumCurrentMaximumMemberCountByGuildNameRequest): Promise<Result.SetMaximumCurrentMaximumMemberCountByGuildNameResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/{guildName}/currentMaximumMemberCount')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{guildName}', String(request.getGuildName() ?? 'null') === "" ? "null" : String(request.getGuildName() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = request.getDuplicationAvoider() ?? null;
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'value': request.getValue() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.SetMaximumCurrentMaximumMemberCountByGuildNameResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public assume(request: Request.AssumeRequest): Promise<Result.AssumeResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/guild/{guildModelName}/{guildName}/assume')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'))
            .replace('{guildName}', String(request.getGuildName() ?? 'null') === "" ? "null" : String(request.getGuildName() ?? 'null'));
    
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
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.AssumeResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public assumeByUserId(request: Request.AssumeByUserIdRequest): Promise<Result.AssumeByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/guild/{guildModelName}/{guildName}/assume')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'))
            .replace('{guildName}', String(request.getGuildName() ?? 'null') === "" ? "null" : String(request.getGuildName() ?? 'null'));
    
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
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.AssumeByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public increaseMaximumCurrentMaximumMemberCountByStampSheet(request: Request.IncreaseMaximumCurrentMaximumMemberCountByStampSheetRequest): Promise<Result.IncreaseMaximumCurrentMaximumMemberCountByStampSheetResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/stamp/guild/currentMaximumMemberCount/add')
            .replace('{service}', 'guild')
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
            return Result.IncreaseMaximumCurrentMaximumMemberCountByStampSheetResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public decreaseMaximumCurrentMaximumMemberCountByStampTask(request: Request.DecreaseMaximumCurrentMaximumMemberCountByStampTaskRequest): Promise<Result.DecreaseMaximumCurrentMaximumMemberCountByStampTaskResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/stamp/guild/currentMaximumMemberCount/sub')
            .replace('{service}', 'guild')
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
            return Result.DecreaseMaximumCurrentMaximumMemberCountByStampTaskResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public setMaximumCurrentMaximumMemberCountByStampSheet(request: Request.SetMaximumCurrentMaximumMemberCountByStampSheetRequest): Promise<Result.SetMaximumCurrentMaximumMemberCountByStampSheetResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/stamp/guild/currentMaximumMemberCount/set')
            .replace('{service}', 'guild')
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
            return Result.SetMaximumCurrentMaximumMemberCountByStampSheetResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public verifyCurrentMaximumMemberCountByStampTask(request: Request.VerifyCurrentMaximumMemberCountByStampTaskRequest): Promise<Result.VerifyCurrentMaximumMemberCountByStampTaskResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/stamp/guild/currentMaximumMemberCount/verify')
            .replace('{service}', 'guild')
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
            return Result.VerifyCurrentMaximumMemberCountByStampTaskResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public verifyIncludeMemberByStampTask(request: Request.VerifyIncludeMemberByStampTaskRequest): Promise<Result.VerifyIncludeMemberByStampTaskResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/stamp/guild/member/verify')
            .replace('{service}', 'guild')
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
            return Result.VerifyIncludeMemberByStampTaskResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public describeJoinedGuilds(request: Request.DescribeJoinedGuildsRequest): Promise<Result.DescribeJoinedGuildsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/joined')
            .replace('{service}', 'guild')
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
            'guildModelName': String(request.getGuildModelName() ?? null),
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
            return Result.DescribeJoinedGuildsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeJoinedGuildsByUserId(request: Request.DescribeJoinedGuildsByUserIdRequest): Promise<Result.DescribeJoinedGuildsByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/joined')
            .replace('{service}', 'guild')
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
            'guildModelName': String(request.getGuildModelName() ?? null),
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
            return Result.DescribeJoinedGuildsByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getJoinedGuild(request: Request.GetJoinedGuildRequest): Promise<Result.GetJoinedGuildResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/joined/{guildModelName}/{guildName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'))
            .replace('{guildName}', String(request.getGuildName() ?? 'null') === "" ? "null" : String(request.getGuildName() ?? 'null'));
    
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
            return Result.GetJoinedGuildResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getJoinedGuildByUserId(request: Request.GetJoinedGuildByUserIdRequest): Promise<Result.GetJoinedGuildByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/joined/{guildModelName}/{guildName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'))
            .replace('{guildName}', String(request.getGuildName() ?? 'null') === "" ? "null" : String(request.getGuildName() ?? 'null'));
    
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
            return Result.GetJoinedGuildByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public withdrawal(request: Request.WithdrawalRequest): Promise<Result.WithdrawalResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/joined/{guildModelName}/{guildName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'))
            .replace('{guildName}', String(request.getGuildName() ?? 'null') === "" ? "null" : String(request.getGuildName() ?? 'null'));
    
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
            return Result.WithdrawalResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public withdrawalByUserId(request: Request.WithdrawalByUserIdRequest): Promise<Result.WithdrawalByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/joined/{guildModelName}/{guildName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'))
            .replace('{guildName}', String(request.getGuildName() ?? 'null') === "" ? "null" : String(request.getGuildName() ?? 'null'));
    
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
            return Result.WithdrawalByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getLastGuildMasterActivity(request: Request.GetLastGuildMasterActivityRequest): Promise<Result.GetLastGuildMasterActivityResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/me/activity/guildMaster/last')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'));
    
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
            return Result.GetLastGuildMasterActivityResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getLastGuildMasterActivityByGuildName(request: Request.GetLastGuildMasterActivityByGuildNameRequest): Promise<Result.GetLastGuildMasterActivityByGuildNameResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/{guildName}/activity/guildMaster/last')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'))
            .replace('{guildName}', String(request.getGuildName() ?? 'null') === "" ? "null" : String(request.getGuildName() ?? 'null'));
    
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
            return Result.GetLastGuildMasterActivityByGuildNameResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public promoteSeniorMember(request: Request.PromoteSeniorMemberRequest): Promise<Result.PromoteSeniorMemberResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/me/promote')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'));
    
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
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.PromoteSeniorMemberResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public promoteSeniorMemberByGuildName(request: Request.PromoteSeniorMemberByGuildNameRequest): Promise<Result.PromoteSeniorMemberByGuildNameResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/{guildName}/promote')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'))
            .replace('{guildName}', String(request.getGuildName() ?? 'null') === "" ? "null" : String(request.getGuildName() ?? 'null'));
    
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
            return Result.PromoteSeniorMemberByGuildNameResult.fromDict(response.data);
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
            .replace('{service}', 'guild')
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

    public getCurrentGuildMaster(request: Request.GetCurrentGuildMasterRequest): Promise<Result.GetCurrentGuildMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master')
            .replace('{service}', 'guild')
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
            return Result.GetCurrentGuildMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public updateCurrentGuildMaster(request: Request.UpdateCurrentGuildMasterRequest): Promise<Result.UpdateCurrentGuildMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master')
            .replace('{service}', 'guild')
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
            return Result.UpdateCurrentGuildMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public updateCurrentGuildMasterFromGitHub(request: Request.UpdateCurrentGuildMasterFromGitHubRequest): Promise<Result.UpdateCurrentGuildMasterFromGitHubResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/from_git_hub')
            .replace('{service}', 'guild')
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
            return Result.UpdateCurrentGuildMasterFromGitHubResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public describeReceiveRequests(request: Request.DescribeReceiveRequestsRequest): Promise<Result.DescribeReceiveRequestsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/me/inbox')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'));
    
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
            return Result.DescribeReceiveRequestsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeReceiveRequestsByGuildName(request: Request.DescribeReceiveRequestsByGuildNameRequest): Promise<Result.DescribeReceiveRequestsByGuildNameResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/{guildName}/inbox')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'))
            .replace('{guildName}', String(request.getGuildName() ?? 'null') === "" ? "null" : String(request.getGuildName() ?? 'null'));
    
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
            return Result.DescribeReceiveRequestsByGuildNameResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getReceiveRequest(request: Request.GetReceiveRequestRequest): Promise<Result.GetReceiveRequestResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/me/inbox/{fromUserId}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'))
            .replace('{fromUserId}', String(request.getFromUserId() ?? 'null') === "" ? "null" : String(request.getFromUserId() ?? 'null'));
    
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
            return Result.GetReceiveRequestResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getReceiveRequestByGuildName(request: Request.GetReceiveRequestByGuildNameRequest): Promise<Result.GetReceiveRequestByGuildNameResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/{guildName}/inbox/{fromUserId}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'))
            .replace('{guildName}', String(request.getGuildName() ?? 'null') === "" ? "null" : String(request.getGuildName() ?? 'null'))
            .replace('{fromUserId}', String(request.getFromUserId() ?? 'null') === "" ? "null" : String(request.getFromUserId() ?? 'null'));
    
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
            return Result.GetReceiveRequestByGuildNameResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public acceptRequest(request: Request.AcceptRequestRequest): Promise<Result.AcceptRequestResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/me/inbox/{fromUserId}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'))
            .replace('{fromUserId}', String(request.getFromUserId() ?? 'null') === "" ? "null" : String(request.getFromUserId() ?? 'null'));
    
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
            return Result.AcceptRequestResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public acceptRequestByGuildName(request: Request.AcceptRequestByGuildNameRequest): Promise<Result.AcceptRequestByGuildNameResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/{guildName}/inbox/{fromUserId}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'))
            .replace('{guildName}', String(request.getGuildName() ?? 'null') === "" ? "null" : String(request.getGuildName() ?? 'null'))
            .replace('{fromUserId}', String(request.getFromUserId() ?? 'null') === "" ? "null" : String(request.getFromUserId() ?? 'null'));
    
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
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.AcceptRequestByGuildNameResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public rejectRequest(request: Request.RejectRequestRequest): Promise<Result.RejectRequestResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/me/inbox/{fromUserId}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'))
            .replace('{fromUserId}', String(request.getFromUserId() ?? 'null') === "" ? "null" : String(request.getFromUserId() ?? 'null'));
    
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
            return Result.RejectRequestResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public rejectRequestByGuildName(request: Request.RejectRequestByGuildNameRequest): Promise<Result.RejectRequestByGuildNameResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/{guildName}/inbox/{fromUserId}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'))
            .replace('{guildName}', String(request.getGuildName() ?? 'null') === "" ? "null" : String(request.getGuildName() ?? 'null'))
            .replace('{fromUserId}', String(request.getFromUserId() ?? 'null') === "" ? "null" : String(request.getFromUserId() ?? 'null'));
    
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
            return Result.RejectRequestByGuildNameResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeSendRequests(request: Request.DescribeSendRequestsRequest): Promise<Result.DescribeSendRequestsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/sendBox/guild/{guildModelName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'));
    
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
            return Result.DescribeSendRequestsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeSendRequestsByUserId(request: Request.DescribeSendRequestsByUserIdRequest): Promise<Result.DescribeSendRequestsByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/sendBox/guild/{guildModelName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'));
    
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
            return Result.DescribeSendRequestsByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getSendRequest(request: Request.GetSendRequestRequest): Promise<Result.GetSendRequestResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/sendBox/guild/{guildModelName}/{targetGuildName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'))
            .replace('{targetGuildName}', String(request.getTargetGuildName() ?? 'null') === "" ? "null" : String(request.getTargetGuildName() ?? 'null'));
    
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
            return Result.GetSendRequestResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getSendRequestByUserId(request: Request.GetSendRequestByUserIdRequest): Promise<Result.GetSendRequestByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/sendBox/guild/{guildModelName}/{targetGuildName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'))
            .replace('{targetGuildName}', String(request.getTargetGuildName() ?? 'null') === "" ? "null" : String(request.getTargetGuildName() ?? 'null'));
    
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
            return Result.GetSendRequestByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public sendRequest(request: Request.SendRequestRequest): Promise<Result.SendRequestResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/sendBox/guild/{guildModelName}/{targetGuildName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'))
            .replace('{targetGuildName}', String(request.getTargetGuildName() ?? 'null') === "" ? "null" : String(request.getTargetGuildName() ?? 'null'));
    
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
            return Result.SendRequestResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public sendRequestByUserId(request: Request.SendRequestByUserIdRequest): Promise<Result.SendRequestByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/sendBox/guild/{guildModelName}/{targetGuildName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'))
            .replace('{targetGuildName}', String(request.getTargetGuildName() ?? 'null') === "" ? "null" : String(request.getTargetGuildName() ?? 'null'));
    
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
            return Result.SendRequestByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public deleteRequest(request: Request.DeleteRequestRequest): Promise<Result.DeleteRequestResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/sendBox/guild/{guildModelName}/{targetGuildName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'))
            .replace('{targetGuildName}', String(request.getTargetGuildName() ?? 'null') === "" ? "null" : String(request.getTargetGuildName() ?? 'null'));
    
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
            return Result.DeleteRequestResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public deleteRequestByUserId(request: Request.DeleteRequestByUserIdRequest): Promise<Result.DeleteRequestByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/sendBox/guild/{guildModelName}/{targetGuildName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'))
            .replace('{targetGuildName}', String(request.getTargetGuildName() ?? 'null') === "" ? "null" : String(request.getTargetGuildName() ?? 'null'));
    
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
            return Result.DeleteRequestByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeIgnoreUsers(request: Request.DescribeIgnoreUsersRequest): Promise<Result.DescribeIgnoreUsersResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/me/ignore/user')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'));
    
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
            return Result.DescribeIgnoreUsersResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeIgnoreUsersByGuildName(request: Request.DescribeIgnoreUsersByGuildNameRequest): Promise<Result.DescribeIgnoreUsersByGuildNameResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/{guildName}/ignore/user')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'))
            .replace('{guildName}', String(request.getGuildName() ?? 'null') === "" ? "null" : String(request.getGuildName() ?? 'null'));
    
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
            return Result.DescribeIgnoreUsersByGuildNameResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getIgnoreUser(request: Request.GetIgnoreUserRequest): Promise<Result.GetIgnoreUserResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/me/ignore/user/{userId}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'));
    
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
            return Result.GetIgnoreUserResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getIgnoreUserByGuildName(request: Request.GetIgnoreUserByGuildNameRequest): Promise<Result.GetIgnoreUserByGuildNameResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/{guildName}/ignore/user/{userId}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'))
            .replace('{guildName}', String(request.getGuildName() ?? 'null') === "" ? "null" : String(request.getGuildName() ?? 'null'))
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
            return Result.GetIgnoreUserByGuildNameResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public addIgnoreUser(request: Request.AddIgnoreUserRequest): Promise<Result.AddIgnoreUserResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/me/ignore/user/{userId}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'));
    
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
            return Result.AddIgnoreUserResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public addIgnoreUserByGuildName(request: Request.AddIgnoreUserByGuildNameRequest): Promise<Result.AddIgnoreUserByGuildNameResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/{guildName}/ignore/user/{userId}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'))
            .replace('{guildName}', String(request.getGuildName() ?? 'null') === "" ? "null" : String(request.getGuildName() ?? 'null'))
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
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.AddIgnoreUserByGuildNameResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public deleteIgnoreUser(request: Request.DeleteIgnoreUserRequest): Promise<Result.DeleteIgnoreUserResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/me/ignore/user/{userId}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'));
    
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
            return Result.DeleteIgnoreUserResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public deleteIgnoreUserByGuildName(request: Request.DeleteIgnoreUserByGuildNameRequest): Promise<Result.DeleteIgnoreUserByGuildNameResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/{guildName}/ignore/user/{userId}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{guildModelName}', String(request.getGuildModelName() ?? 'null') === "" ? "null" : String(request.getGuildModelName() ?? 'null'))
            .replace('{guildName}', String(request.getGuildName() ?? 'null') === "" ? "null" : String(request.getGuildName() ?? 'null'))
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
        };
        return axios.delete(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.DeleteIgnoreUserByGuildNameResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }
}
