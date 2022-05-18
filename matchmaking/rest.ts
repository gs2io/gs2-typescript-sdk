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
            'createGatheringTriggerType': request.getCreateGatheringTriggerType() ?? null,
            'createGatheringTriggerRealtimeNamespaceId': request.getCreateGatheringTriggerRealtimeNamespaceId() ?? null,
            'createGatheringTriggerScriptId': request.getCreateGatheringTriggerScriptId() ?? null,
            'completeMatchmakingTriggerType': request.getCompleteMatchmakingTriggerType() ?? null,
            'completeMatchmakingTriggerRealtimeNamespaceId': request.getCompleteMatchmakingTriggerRealtimeNamespaceId() ?? null,
            'completeMatchmakingTriggerScriptId': request.getCompleteMatchmakingTriggerScriptId() ?? null,
            'joinNotification': request.getJoinNotification()?.toDict() ?? null,
            'leaveNotification': request.getLeaveNotification()?.toDict() ?? null,
            'completeNotification': request.getCompleteNotification()?.toDict() ?? null,
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
            'createGatheringTriggerType': request.getCreateGatheringTriggerType() ?? null,
            'createGatheringTriggerRealtimeNamespaceId': request.getCreateGatheringTriggerRealtimeNamespaceId() ?? null,
            'createGatheringTriggerScriptId': request.getCreateGatheringTriggerScriptId() ?? null,
            'completeMatchmakingTriggerType': request.getCompleteMatchmakingTriggerType() ?? null,
            'completeMatchmakingTriggerRealtimeNamespaceId': request.getCompleteMatchmakingTriggerRealtimeNamespaceId() ?? null,
            'completeMatchmakingTriggerScriptId': request.getCompleteMatchmakingTriggerScriptId() ?? null,
            'joinNotification': request.getJoinNotification()?.toDict() ?? null,
            'leaveNotification': request.getLeaveNotification()?.toDict() ?? null,
            'completeNotification': request.getCompleteNotification()?.toDict() ?? null,
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

    public getCurrentRatingModelMaster(request: Request.GetCurrentRatingModelMasterRequest): Promise<Result.GetCurrentRatingModelMasterResult> {
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
            return Result.GetCurrentRatingModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public updateCurrentRatingModelMaster(request: Request.UpdateCurrentRatingModelMasterRequest): Promise<Result.UpdateCurrentRatingModelMasterResult> {
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
            return Result.UpdateCurrentRatingModelMasterResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public updateCurrentRatingModelMasterFromGitHub(request: Request.UpdateCurrentRatingModelMasterFromGitHubRequest): Promise<Result.UpdateCurrentRatingModelMasterFromGitHubResult> {
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
            return Result.UpdateCurrentRatingModelMasterFromGitHubResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
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
