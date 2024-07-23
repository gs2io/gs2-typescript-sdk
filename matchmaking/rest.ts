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

export default class Gs2MatchmakingRestClient extends AbstractGs2RestClient {

    constructor(session: Gs2RestSession) {
        super(session);
    }

    public describeNamespaces(request: Request.DescribeNamespacesRequest): Promise<Result.DescribeNamespacesResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/')
            .replace('{service}', 'matchmaking')
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
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region);
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'name': request.getName() ?? null,
            'description': request.getDescription() ?? null,
            'enableRating': request.getEnableRating() ?? null,
            'enableDisconnectDetection': request.getEnableDisconnectDetection() ?? null,
            'disconnectDetectionTimeoutSeconds': request.getDisconnectDetectionTimeoutSeconds() ?? null,
            'createGatheringTriggerType': request.getCreateGatheringTriggerType() ?? null,
            'createGatheringTriggerRealtimeNamespaceId': request.getCreateGatheringTriggerRealtimeNamespaceId() ?? null,
            'createGatheringTriggerScriptId': request.getCreateGatheringTriggerScriptId() ?? null,
            'completeMatchmakingTriggerType': request.getCompleteMatchmakingTriggerType() ?? null,
            'completeMatchmakingTriggerRealtimeNamespaceId': request.getCompleteMatchmakingTriggerRealtimeNamespaceId() ?? null,
            'completeMatchmakingTriggerScriptId': request.getCompleteMatchmakingTriggerScriptId() ?? null,
            'enableCollaborateSeasonRating': request.getEnableCollaborateSeasonRating() ?? null,
            'collaborateSeasonRatingNamespaceId': request.getCollaborateSeasonRatingNamespaceId() ?? null,
            'collaborateSeasonRatingTtl': request.getCollaborateSeasonRatingTtl() ?? null,
            'changeRatingScript': request.getChangeRatingScript()?.toDict() ?? null,
            'joinNotification': request.getJoinNotification()?.toDict() ?? null,
            'leaveNotification': request.getLeaveNotification()?.toDict() ?? null,
            'completeNotification': request.getCompleteNotification()?.toDict() ?? null,
            'changeRatingNotification': request.getChangeRatingNotification()?.toDict() ?? null,
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
            .replace('{service}', 'matchmaking')
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
            .replace('{service}', 'matchmaking')
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
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'description': request.getDescription() ?? null,
            'enableRating': request.getEnableRating() ?? null,
            'enableDisconnectDetection': request.getEnableDisconnectDetection() ?? null,
            'disconnectDetectionTimeoutSeconds': request.getDisconnectDetectionTimeoutSeconds() ?? null,
            'createGatheringTriggerType': request.getCreateGatheringTriggerType() ?? null,
            'createGatheringTriggerRealtimeNamespaceId': request.getCreateGatheringTriggerRealtimeNamespaceId() ?? null,
            'createGatheringTriggerScriptId': request.getCreateGatheringTriggerScriptId() ?? null,
            'completeMatchmakingTriggerType': request.getCompleteMatchmakingTriggerType() ?? null,
            'completeMatchmakingTriggerRealtimeNamespaceId': request.getCompleteMatchmakingTriggerRealtimeNamespaceId() ?? null,
            'completeMatchmakingTriggerScriptId': request.getCompleteMatchmakingTriggerScriptId() ?? null,
            'enableCollaborateSeasonRating': request.getEnableCollaborateSeasonRating() ?? null,
            'collaborateSeasonRatingNamespaceId': request.getCollaborateSeasonRatingNamespaceId() ?? null,
            'collaborateSeasonRatingTtl': request.getCollaborateSeasonRatingTtl() ?? null,
            'changeRatingScript': request.getChangeRatingScript()?.toDict() ?? null,
            'joinNotification': request.getJoinNotification()?.toDict() ?? null,
            'leaveNotification': request.getLeaveNotification()?.toDict() ?? null,
            'completeNotification': request.getCompleteNotification()?.toDict() ?? null,
            'changeRatingNotification': request.getChangeRatingNotification()?.toDict() ?? null,
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
            .replace('{service}', 'matchmaking')
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
            .replace('{service}', 'matchmaking')
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
            .replace('{service}', 'matchmaking')
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
            .replace('{service}', 'matchmaking')
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
            .replace('{service}', 'matchmaking')
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
            .replace('{service}', 'matchmaking')
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
            .replace('{service}', 'matchmaking')
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
            .replace('{service}', 'matchmaking')
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

    public describeGatherings(request: Request.DescribeGatheringsRequest): Promise<Result.DescribeGatheringsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/gathering')
            .replace('{service}', 'matchmaking')
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
            return Result.DescribeGatheringsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public createGathering(request: Request.CreateGatheringRequest): Promise<Result.CreateGatheringResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/gathering')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'));
    
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
            'player': request.getPlayer()?.toDict() ?? null,
            'attributeRanges': request.getAttributeRanges()?.map((item) => item.toDict()) ?? null,
            'capacityOfRoles': request.getCapacityOfRoles()?.map((item) => item.toDict()) ?? null,
            'allowUserIds': request.getAllowUserIds() ?? null,
            'expiresAt': request.getExpiresAt() ?? null,
            'expiresAtTimeSpan': request.getExpiresAtTimeSpan()?.toDict() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.CreateGatheringResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public createGatheringByUserId(request: Request.CreateGatheringByUserIdRequest): Promise<Result.CreateGatheringByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/gathering/user/{userId}')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
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
            'player': request.getPlayer()?.toDict() ?? null,
            'attributeRanges': request.getAttributeRanges()?.map((item) => item.toDict()) ?? null,
            'capacityOfRoles': request.getCapacityOfRoles()?.map((item) => item.toDict()) ?? null,
            'allowUserIds': request.getAllowUserIds() ?? null,
            'expiresAt': request.getExpiresAt() ?? null,
            'expiresAtTimeSpan': request.getExpiresAtTimeSpan()?.toDict() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.CreateGatheringByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public updateGathering(request: Request.UpdateGatheringRequest): Promise<Result.UpdateGatheringResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/gathering/{gatheringName}')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{gatheringName}', String(request.getGatheringName() ?? 'null') === "" ? "null" : String(request.getGatheringName() ?? 'null'));
    
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
            'attributeRanges': request.getAttributeRanges()?.map((item) => item.toDict()) ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.UpdateGatheringResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public updateGatheringByUserId(request: Request.UpdateGatheringByUserIdRequest): Promise<Result.UpdateGatheringByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/gathering/{gatheringName}/user/{userId}')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{gatheringName}', String(request.getGatheringName() ?? 'null') === "" ? "null" : String(request.getGatheringName() ?? 'null'))
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
            'attributeRanges': request.getAttributeRanges()?.map((item) => item.toDict()) ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.UpdateGatheringByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public doMatchmakingByPlayer(request: Request.DoMatchmakingByPlayerRequest): Promise<Result.DoMatchmakingByPlayerResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/gathering/player/do')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'player': request.getPlayer()?.toDict() ?? null,
            'matchmakingContextToken': request.getMatchmakingContextToken() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.DoMatchmakingByPlayerResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public doMatchmaking(request: Request.DoMatchmakingRequest): Promise<Result.DoMatchmakingResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/gathering/do')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'));
    
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
            'player': request.getPlayer()?.toDict() ?? null,
            'matchmakingContextToken': request.getMatchmakingContextToken() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.DoMatchmakingResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public doMatchmakingByUserId(request: Request.DoMatchmakingByUserIdRequest): Promise<Result.DoMatchmakingByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/gathering/do')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
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
            'player': request.getPlayer()?.toDict() ?? null,
            'matchmakingContextToken': request.getMatchmakingContextToken() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.DoMatchmakingByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public ping(request: Request.PingRequest): Promise<Result.PingResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/gathering/{gatheringName}/ping')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{gatheringName}', String(request.getGatheringName() ?? 'null') === "" ? "null" : String(request.getGatheringName() ?? 'null'));
    
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
            return Result.PingResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public pingByUserId(request: Request.PingByUserIdRequest): Promise<Result.PingByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/gathering/{gatheringName}/user/{userId}/ping')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{gatheringName}', String(request.getGatheringName() ?? 'null') === "" ? "null" : String(request.getGatheringName() ?? 'null'))
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
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.PingByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public getGathering(request: Request.GetGatheringRequest): Promise<Result.GetGatheringResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/gathering/{gatheringName}')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{gatheringName}', String(request.getGatheringName() ?? 'null') === "" ? "null" : String(request.getGatheringName() ?? 'null'));
    
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
            return Result.GetGatheringResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public cancelMatchmaking(request: Request.CancelMatchmakingRequest): Promise<Result.CancelMatchmakingResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/gathering/{gatheringName}/user/me')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{gatheringName}', String(request.getGatheringName() ?? 'null') === "" ? "null" : String(request.getGatheringName() ?? 'null'));
    
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
            return Result.CancelMatchmakingResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public cancelMatchmakingByUserId(request: Request.CancelMatchmakingByUserIdRequest): Promise<Result.CancelMatchmakingByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/gathering/{gatheringName}/user/{userId}')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{gatheringName}', String(request.getGatheringName() ?? 'null') === "" ? "null" : String(request.getGatheringName() ?? 'null'))
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
            return Result.CancelMatchmakingByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public earlyComplete(request: Request.EarlyCompleteRequest): Promise<Result.EarlyCompleteResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/gathering/{gatheringName}/user/me/early')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{gatheringName}', String(request.getGatheringName() ?? 'null') === "" ? "null" : String(request.getGatheringName() ?? 'null'));
    
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
            return Result.EarlyCompleteResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public earlyCompleteByUserId(request: Request.EarlyCompleteByUserIdRequest): Promise<Result.EarlyCompleteByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/gathering/{gatheringName}/user/{userId}/early')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{gatheringName}', String(request.getGatheringName() ?? 'null') === "" ? "null" : String(request.getGatheringName() ?? 'null'))
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
            return Result.EarlyCompleteByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public deleteGathering(request: Request.DeleteGatheringRequest): Promise<Result.DeleteGatheringResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/gathering/{gatheringName}')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{gatheringName}', String(request.getGatheringName() ?? 'null') === "" ? "null" : String(request.getGatheringName() ?? 'null'));
    
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
            return Result.DeleteGatheringResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeRatingModelMasters(request: Request.DescribeRatingModelMastersRequest): Promise<Result.DescribeRatingModelMastersResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/rating')
            .replace('{service}', 'matchmaking')
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
            return Result.DescribeRatingModelMastersResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public createRatingModelMaster(request: Request.CreateRatingModelMasterRequest): Promise<Result.CreateRatingModelMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/rating')
            .replace('{service}', 'matchmaking')
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
            'initialValue': request.getInitialValue() ?? null,
            'volatility': request.getVolatility() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.CreateRatingModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public getRatingModelMaster(request: Request.GetRatingModelMasterRequest): Promise<Result.GetRatingModelMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/rating/{ratingName}')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{ratingName}', String(request.getRatingName() ?? 'null') === "" ? "null" : String(request.getRatingName() ?? 'null'));
    
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
            return Result.GetRatingModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public updateRatingModelMaster(request: Request.UpdateRatingModelMasterRequest): Promise<Result.UpdateRatingModelMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/rating/{ratingName}')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{ratingName}', String(request.getRatingName() ?? 'null') === "" ? "null" : String(request.getRatingName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'description': request.getDescription() ?? null,
            'metadata': request.getMetadata() ?? null,
            'initialValue': request.getInitialValue() ?? null,
            'volatility': request.getVolatility() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.UpdateRatingModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public deleteRatingModelMaster(request: Request.DeleteRatingModelMasterRequest): Promise<Result.DeleteRatingModelMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/rating/{ratingName}')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{ratingName}', String(request.getRatingName() ?? 'null') === "" ? "null" : String(request.getRatingName() ?? 'null'));
    
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
            return Result.DeleteRatingModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeRatingModels(request: Request.DescribeRatingModelsRequest): Promise<Result.DescribeRatingModelsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/rating')
            .replace('{service}', 'matchmaking')
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
            return Result.DescribeRatingModelsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getRatingModel(request: Request.GetRatingModelRequest): Promise<Result.GetRatingModelResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/rating/{ratingName}')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{ratingName}', String(request.getRatingName() ?? 'null') === "" ? "null" : String(request.getRatingName() ?? 'null'));
    
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
            return Result.GetRatingModelResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public exportMaster(request: Request.ExportMasterRequest): Promise<Result.ExportMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/export')
            .replace('{service}', 'matchmaking')
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

    public getCurrentModelMaster(request: Request.GetCurrentModelMasterRequest): Promise<Result.GetCurrentModelMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master')
            .replace('{service}', 'matchmaking')
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
            return Result.GetCurrentModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public updateCurrentModelMaster(request: Request.UpdateCurrentModelMasterRequest): Promise<Result.UpdateCurrentModelMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master')
            .replace('{service}', 'matchmaking')
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
            return Result.UpdateCurrentModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public updateCurrentModelMasterFromGitHub(request: Request.UpdateCurrentModelMasterFromGitHubRequest): Promise<Result.UpdateCurrentModelMasterFromGitHubResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/from_git_hub')
            .replace('{service}', 'matchmaking')
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
            return Result.UpdateCurrentModelMasterFromGitHubResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public describeSeasonModels(request: Request.DescribeSeasonModelsRequest): Promise<Result.DescribeSeasonModelsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/season')
            .replace('{service}', 'matchmaking')
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
            return Result.DescribeSeasonModelsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getSeasonModel(request: Request.GetSeasonModelRequest): Promise<Result.GetSeasonModelResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/season/{seasonName}')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{seasonName}', String(request.getSeasonName() ?? 'null') === "" ? "null" : String(request.getSeasonName() ?? 'null'));
    
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
            return Result.GetSeasonModelResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeSeasonModelMasters(request: Request.DescribeSeasonModelMastersRequest): Promise<Result.DescribeSeasonModelMastersResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/season')
            .replace('{service}', 'matchmaking')
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
            return Result.DescribeSeasonModelMastersResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public createSeasonModelMaster(request: Request.CreateSeasonModelMasterRequest): Promise<Result.CreateSeasonModelMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/season')
            .replace('{service}', 'matchmaking')
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
            'maximumParticipants': request.getMaximumParticipants() ?? null,
            'experienceModelId': request.getExperienceModelId() ?? null,
            'challengePeriodEventId': request.getChallengePeriodEventId() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.CreateSeasonModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public getSeasonModelMaster(request: Request.GetSeasonModelMasterRequest): Promise<Result.GetSeasonModelMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/season/{seasonName}')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{seasonName}', String(request.getSeasonName() ?? 'null') === "" ? "null" : String(request.getSeasonName() ?? 'null'));
    
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
            return Result.GetSeasonModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public updateSeasonModelMaster(request: Request.UpdateSeasonModelMasterRequest): Promise<Result.UpdateSeasonModelMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/season/{seasonName}')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{seasonName}', String(request.getSeasonName() ?? 'null') === "" ? "null" : String(request.getSeasonName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'description': request.getDescription() ?? null,
            'metadata': request.getMetadata() ?? null,
            'maximumParticipants': request.getMaximumParticipants() ?? null,
            'experienceModelId': request.getExperienceModelId() ?? null,
            'challengePeriodEventId': request.getChallengePeriodEventId() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.UpdateSeasonModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public deleteSeasonModelMaster(request: Request.DeleteSeasonModelMasterRequest): Promise<Result.DeleteSeasonModelMasterResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/season/{seasonName}')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{seasonName}', String(request.getSeasonName() ?? 'null') === "" ? "null" : String(request.getSeasonName() ?? 'null'));
    
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
            return Result.DeleteSeasonModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeSeasonGatherings(request: Request.DescribeSeasonGatheringsRequest): Promise<Result.DescribeSeasonGatheringsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/season/{seasonName}/{season}/gathering')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{seasonName}', String(request.getSeasonName() ?? 'null') === "" ? "null" : String(request.getSeasonName() ?? 'null'))
            .replace('{season}', String(request.getSeason() ?? 'null') === "" ? "null" : String(request.getSeason() ?? 'null'))
            .replace('{tier}', String(request.getTier() ?? 'null') === "" ? "null" : String(request.getTier() ?? 'null'));
    
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
            return Result.DescribeSeasonGatheringsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeMatchmakingSeasonGatherings(request: Request.DescribeMatchmakingSeasonGatheringsRequest): Promise<Result.DescribeMatchmakingSeasonGatheringsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/season/{seasonName}/{season}/gathering/matchmaking')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{seasonName}', String(request.getSeasonName() ?? 'null') === "" ? "null" : String(request.getSeasonName() ?? 'null'))
            .replace('{season}', String(request.getSeason() ?? 'null') === "" ? "null" : String(request.getSeason() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'tier': String(request.getTier() ?? null),
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
            return Result.DescribeMatchmakingSeasonGatheringsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public doSeasonMatchmaking(request: Request.DoSeasonMatchmakingRequest): Promise<Result.DoSeasonMatchmakingResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/season/{seasonName}/gathering/do')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{seasonName}', String(request.getSeasonName() ?? 'null') === "" ? "null" : String(request.getSeasonName() ?? 'null'));
    
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
            'matchmakingContextToken': request.getMatchmakingContextToken() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.DoSeasonMatchmakingResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public doSeasonMatchmakingByUserId(request: Request.DoSeasonMatchmakingByUserIdRequest): Promise<Result.DoSeasonMatchmakingByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/season/{seasonName}/gathering/do')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{seasonName}', String(request.getSeasonName() ?? 'null') === "" ? "null" : String(request.getSeasonName() ?? 'null'))
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
            'matchmakingContextToken': request.getMatchmakingContextToken() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.DoSeasonMatchmakingByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public getSeasonGathering(request: Request.GetSeasonGatheringRequest): Promise<Result.GetSeasonGatheringResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/season/{seasonName}/{season}/{tier}/gathering/{seasonGatheringName}')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{seasonName}', String(request.getSeasonName() ?? 'null') === "" ? "null" : String(request.getSeasonName() ?? 'null'))
            .replace('{season}', String(request.getSeason() ?? 'null') === "" ? "null" : String(request.getSeason() ?? 'null'))
            .replace('{tier}', String(request.getTier() ?? 'null') === "" ? "null" : String(request.getTier() ?? 'null'))
            .replace('{seasonGatheringName}', String(request.getSeasonGatheringName() ?? 'null') === "" ? "null" : String(request.getSeasonGatheringName() ?? 'null'));
    
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
            return Result.GetSeasonGatheringResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public verifyIncludeParticipant(request: Request.VerifyIncludeParticipantRequest): Promise<Result.VerifyIncludeParticipantResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/season/{seasonName}/{season}/{tier}/gathering/{seasonGatheringName}/participant/me/verify')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{seasonName}', String(request.getSeasonName() ?? 'null') === "" ? "null" : String(request.getSeasonName() ?? 'null'))
            .replace('{season}', String(request.getSeason() ?? 'null') === "" ? "null" : String(request.getSeason() ?? 'null'))
            .replace('{tier}', String(request.getTier() ?? 'null') === "" ? "null" : String(request.getTier() ?? 'null'))
            .replace('{seasonGatheringName}', String(request.getSeasonGatheringName() ?? 'null') === "" ? "null" : String(request.getSeasonGatheringName() ?? 'null'));
    
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
            return Result.VerifyIncludeParticipantResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public verifyIncludeParticipantByUserId(request: Request.VerifyIncludeParticipantByUserIdRequest): Promise<Result.VerifyIncludeParticipantByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/season/{seasonName}/{season}/{tier}/gathering/{seasonGatheringName}/participant/{userId}/verify')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{seasonName}', String(request.getSeasonName() ?? 'null') === "" ? "null" : String(request.getSeasonName() ?? 'null'))
            .replace('{season}', String(request.getSeason() ?? 'null') === "" ? "null" : String(request.getSeason() ?? 'null'))
            .replace('{tier}', String(request.getTier() ?? 'null') === "" ? "null" : String(request.getTier() ?? 'null'))
            .replace('{seasonGatheringName}', String(request.getSeasonGatheringName() ?? 'null') === "" ? "null" : String(request.getSeasonGatheringName() ?? 'null'))
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
            return Result.VerifyIncludeParticipantByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public deleteSeasonGathering(request: Request.DeleteSeasonGatheringRequest): Promise<Result.DeleteSeasonGatheringResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/season/{seasonName}/{season}/{tier}/gathering/{seasonGatheringName}')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{seasonName}', String(request.getSeasonName() ?? 'null') === "" ? "null" : String(request.getSeasonName() ?? 'null'))
            .replace('{season}', String(request.getSeason() ?? 'null') === "" ? "null" : String(request.getSeason() ?? 'null'))
            .replace('{tier}', String(request.getTier() ?? 'null') === "" ? "null" : String(request.getTier() ?? 'null'))
            .replace('{seasonGatheringName}', String(request.getSeasonGatheringName() ?? 'null') === "" ? "null" : String(request.getSeasonGatheringName() ?? 'null'));
    
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
            return Result.DeleteSeasonGatheringResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public verifyIncludeParticipantByStampTask(request: Request.VerifyIncludeParticipantByStampTaskRequest): Promise<Result.VerifyIncludeParticipantByStampTaskResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/stamp/season/gathering/participant/verify')
            .replace('{service}', 'matchmaking')
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
            return Result.VerifyIncludeParticipantByStampTaskResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public describeJoinedSeasonGatherings(request: Request.DescribeJoinedSeasonGatheringsRequest): Promise<Result.DescribeJoinedSeasonGatheringsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/season/{seasonName}/gathering/join')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{seasonName}', String(request.getSeasonName() ?? 'null') === "" ? "null" : String(request.getSeasonName() ?? 'null'));
    
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
            return Result.DescribeJoinedSeasonGatheringsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeJoinedSeasonGatheringsByUserId(request: Request.DescribeJoinedSeasonGatheringsByUserIdRequest): Promise<Result.DescribeJoinedSeasonGatheringsByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/season/{seasonName}/gathering/join')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{seasonName}', String(request.getSeasonName() ?? 'null') === "" ? "null" : String(request.getSeasonName() ?? 'null'));
    
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
            return Result.DescribeJoinedSeasonGatheringsByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getJoinedSeasonGathering(request: Request.GetJoinedSeasonGatheringRequest): Promise<Result.GetJoinedSeasonGatheringResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/season/{seasonName}/gathering/join/{season}')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{seasonName}', String(request.getSeasonName() ?? 'null') === "" ? "null" : String(request.getSeasonName() ?? 'null'))
            .replace('{season}', String(request.getSeason() ?? 'null') === "" ? "null" : String(request.getSeason() ?? 'null'));
    
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
            return Result.GetJoinedSeasonGatheringResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getJoinedSeasonGatheringByUserId(request: Request.GetJoinedSeasonGatheringByUserIdRequest): Promise<Result.GetJoinedSeasonGatheringByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/season/{seasonName}/gathering/join/{season}')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{seasonName}', String(request.getSeasonName() ?? 'null') === "" ? "null" : String(request.getSeasonName() ?? 'null'))
            .replace('{season}', String(request.getSeason() ?? 'null') === "" ? "null" : String(request.getSeason() ?? 'null'));
    
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
            return Result.GetJoinedSeasonGatheringByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeRatings(request: Request.DescribeRatingsRequest): Promise<Result.DescribeRatingsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/rating')
            .replace('{service}', 'matchmaking')
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
            return Result.DescribeRatingsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeRatingsByUserId(request: Request.DescribeRatingsByUserIdRequest): Promise<Result.DescribeRatingsByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/rating')
            .replace('{service}', 'matchmaking')
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
            return Result.DescribeRatingsByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getRating(request: Request.GetRatingRequest): Promise<Result.GetRatingResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/rating/{ratingName}')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{ratingName}', String(request.getRatingName() ?? 'null') === "" ? "null" : String(request.getRatingName() ?? 'null'));
    
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
            return Result.GetRatingResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getRatingByUserId(request: Request.GetRatingByUserIdRequest): Promise<Result.GetRatingByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/rating/{ratingName}')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{ratingName}', String(request.getRatingName() ?? 'null') === "" ? "null" : String(request.getRatingName() ?? 'null'));
    
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
            return Result.GetRatingByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public putResult(request: Request.PutResultRequest): Promise<Result.PutResultResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/rating/{ratingName}/vote')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{ratingName}', String(request.getRatingName() ?? 'null') === "" ? "null" : String(request.getRatingName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'gameResults': request.getGameResults()?.map((item) => item.toDict()) ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.PutResultResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public deleteRating(request: Request.DeleteRatingRequest): Promise<Result.DeleteRatingResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/rating/{ratingName}')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{ratingName}', String(request.getRatingName() ?? 'null') === "" ? "null" : String(request.getRatingName() ?? 'null'));
    
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
            return Result.DeleteRatingResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getBallot(request: Request.GetBallotRequest): Promise<Result.GetBallotResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/vote/{ratingName}/{gatheringName}/ballot')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{ratingName}', String(request.getRatingName() ?? 'null') === "" ? "null" : String(request.getRatingName() ?? 'null'))
            .replace('{gatheringName}', String(request.getGatheringName() ?? 'null') === "" ? "null" : String(request.getGatheringName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = request.getAccessToken() ?? null;
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'numberOfPlayer': request.getNumberOfPlayer() ?? null,
            'keyId': request.getKeyId() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.GetBallotResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public getBallotByUserId(request: Request.GetBallotByUserIdRequest): Promise<Result.GetBallotByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/vote/{ratingName}/{gatheringName}/ballot')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{ratingName}', String(request.getRatingName() ?? 'null') === "" ? "null" : String(request.getRatingName() ?? 'null'))
            .replace('{gatheringName}', String(request.getGatheringName() ?? 'null') === "" ? "null" : String(request.getGatheringName() ?? 'null'))
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
            'numberOfPlayer': request.getNumberOfPlayer() ?? null,
            'keyId': request.getKeyId() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.GetBallotByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public vote(request: Request.VoteRequest): Promise<Result.VoteResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/action/vote')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'ballotBody': request.getBallotBody() ?? null,
            'ballotSignature': request.getBallotSignature() ?? null,
            'gameResults': request.getGameResults()?.map((item) => item.toDict()) ?? null,
            'keyId': request.getKeyId() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.VoteResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public voteMultiple(request: Request.VoteMultipleRequest): Promise<Result.VoteMultipleResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/action/vote/multiple')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'signedBallots': request.getSignedBallots()?.map((item) => item.toDict()) ?? null,
            'gameResults': request.getGameResults()?.map((item) => item.toDict()) ?? null,
            'keyId': request.getKeyId() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.VoteMultipleResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public commitVote(request: Request.CommitVoteRequest): Promise<Result.CommitVoteResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/vote/{ratingName}/{gatheringName}/action/vote/commit')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{ratingName}', String(request.getRatingName() ?? 'null') === "" ? "null" : String(request.getRatingName() ?? 'null'))
            .replace('{gatheringName}', String(request.getGatheringName() ?? 'null') === "" ? "null" : String(request.getGatheringName() ?? 'null'));
    
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
            return Result.CommitVoteResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }
}
