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

export default class Gs2ChatRestClient extends AbstractGs2RestClient {

    constructor(session: Gs2RestSession) {
        super(session);
    }

    public describeNamespaces(request: Request.DescribeNamespacesRequest): Promise<Result.DescribeNamespacesResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/')
            .replace('{service}', 'chat')
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
            .replace('{service}', 'chat')
            .replace('{region}', this.session.region);
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'name': request.getName() ?? null,
            'description': request.getDescription() ?? null,
            'allowCreateRoom': request.getAllowCreateRoom() ?? null,
            'postMessageScript': request.getPostMessageScript()?.toDict() ?? null,
            'createRoomScript': request.getCreateRoomScript()?.toDict() ?? null,
            'deleteRoomScript': request.getDeleteRoomScript()?.toDict() ?? null,
            'subscribeRoomScript': request.getSubscribeRoomScript()?.toDict() ?? null,
            'unsubscribeRoomScript': request.getUnsubscribeRoomScript()?.toDict() ?? null,
            'postNotification': request.getPostNotification()?.toDict() ?? null,
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
            .replace('{service}', 'chat')
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
            .replace('{service}', 'chat')
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
            .replace('{service}', 'chat')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'description': request.getDescription() ?? null,
            'allowCreateRoom': request.getAllowCreateRoom() ?? null,
            'postMessageScript': request.getPostMessageScript()?.toDict() ?? null,
            'createRoomScript': request.getCreateRoomScript()?.toDict() ?? null,
            'deleteRoomScript': request.getDeleteRoomScript()?.toDict() ?? null,
            'subscribeRoomScript': request.getSubscribeRoomScript()?.toDict() ?? null,
            'unsubscribeRoomScript': request.getUnsubscribeRoomScript()?.toDict() ?? null,
            'postNotification': request.getPostNotification()?.toDict() ?? null,
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
            .replace('{service}', 'chat')
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

    public describeRooms(request: Request.DescribeRoomsRequest): Promise<Result.DescribeRoomsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/room')
            .replace('{service}', 'chat')
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
            return Result.DescribeRoomsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public createRoom(request: Request.CreateRoomRequest): Promise<Result.CreateRoomResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/room/user')
            .replace('{service}', 'chat')
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
            'name': request.getName() ?? null,
            'metadata': request.getMetadata() ?? null,
            'password': request.getPassword() ?? null,
            'whiteListUserIds': request.getWhiteListUserIds() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.CreateRoomResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public createRoomFromBackend(request: Request.CreateRoomFromBackendRequest): Promise<Result.CreateRoomFromBackendResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/room')
            .replace('{service}', 'chat')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'name': request.getName() ?? null,
            'userId': request.getUserId() ?? null,
            'metadata': request.getMetadata() ?? null,
            'password': request.getPassword() ?? null,
            'whiteListUserIds': request.getWhiteListUserIds() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.CreateRoomFromBackendResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public getRoom(request: Request.GetRoomRequest): Promise<Result.GetRoomResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/room/{roomName}')
            .replace('{service}', 'chat')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{roomName}', String(request.getRoomName() ?? 'null') === "" ? "null" : String(request.getRoomName() ?? 'null'));
    
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
            return Result.GetRoomResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public updateRoom(request: Request.UpdateRoomRequest): Promise<Result.UpdateRoomResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/room/{roomName}/user')
            .replace('{service}', 'chat')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{roomName}', String(request.getRoomName() ?? 'null') === "" ? "null" : String(request.getRoomName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = request.getAccessToken() ?? null;
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'metadata': request.getMetadata() ?? null,
            'password': request.getPassword() ?? null,
            'whiteListUserIds': request.getWhiteListUserIds() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.UpdateRoomResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public updateRoomFromBackend(request: Request.UpdateRoomFromBackendRequest): Promise<Result.UpdateRoomFromBackendResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/room/{roomName}')
            .replace('{service}', 'chat')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{roomName}', String(request.getRoomName() ?? 'null') === "" ? "null" : String(request.getRoomName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'metadata': request.getMetadata() ?? null,
            'password': request.getPassword() ?? null,
            'whiteListUserIds': request.getWhiteListUserIds() ?? null,
            'userId': request.getUserId() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.UpdateRoomFromBackendResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public deleteRoom(request: Request.DeleteRoomRequest): Promise<Result.DeleteRoomResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/room/{roomName}/user')
            .replace('{service}', 'chat')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{roomName}', String(request.getRoomName() ?? 'null') === "" ? "null" : String(request.getRoomName() ?? 'null'));
    
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
            return Result.DeleteRoomResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public deleteRoomFromBackend(request: Request.DeleteRoomFromBackendRequest): Promise<Result.DeleteRoomFromBackendResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/room/{roomName}')
            .replace('{service}', 'chat')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{roomName}', String(request.getRoomName() ?? 'null') === "" ? "null" : String(request.getRoomName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'userId': String(request.getUserId() ?? null),
        };
        return axios.delete(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.DeleteRoomFromBackendResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeMessages(request: Request.DescribeMessagesRequest): Promise<Result.DescribeMessagesResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/room/{roomName}/message')
            .replace('{service}', 'chat')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{roomName}', String(request.getRoomName() ?? 'null') === "" ? "null" : String(request.getRoomName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = request.getAccessToken() ?? null;
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'password': String(request.getPassword() ?? null),
            'startAt': String(request.getStartAt() ?? null),
            'limit': String(request.getLimit() ?? null),
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.DescribeMessagesResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeMessagesByUserId(request: Request.DescribeMessagesByUserIdRequest): Promise<Result.DescribeMessagesByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/room/{roomName}/message/get')
            .replace('{service}', 'chat')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{roomName}', String(request.getRoomName() ?? 'null') === "" ? "null" : String(request.getRoomName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'password': String(request.getPassword() ?? null),
            'userId': String(request.getUserId() ?? null),
            'startAt': String(request.getStartAt() ?? null),
            'limit': String(request.getLimit() ?? null),
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.DescribeMessagesByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public post(request: Request.PostRequest): Promise<Result.PostResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/room/{roomName}/message')
            .replace('{service}', 'chat')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{roomName}', String(request.getRoomName() ?? 'null') === "" ? "null" : String(request.getRoomName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = request.getAccessToken() ?? null;
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'category': request.getCategory() ?? null,
            'metadata': request.getMetadata() ?? null,
            'password': request.getPassword() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.PostResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public postByUserId(request: Request.PostByUserIdRequest): Promise<Result.PostByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/room/{roomName}/message/user/{userId}')
            .replace('{service}', 'chat')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{roomName}', String(request.getRoomName() ?? 'null') === "" ? "null" : String(request.getRoomName() ?? 'null'))
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
            'category': request.getCategory() ?? null,
            'metadata': request.getMetadata() ?? null,
            'password': request.getPassword() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.PostByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public getMessage(request: Request.GetMessageRequest): Promise<Result.GetMessageResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/room/{roomName}/message/{messageName}')
            .replace('{service}', 'chat')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{roomName}', String(request.getRoomName() ?? 'null') === "" ? "null" : String(request.getRoomName() ?? 'null'))
            .replace('{messageName}', String(request.getMessageName() ?? 'null') === "" ? "null" : String(request.getMessageName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = request.getAccessToken() ?? null;
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'password': String(request.getPassword() ?? null),
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.GetMessageResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getMessageByUserId(request: Request.GetMessageByUserIdRequest): Promise<Result.GetMessageByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/room/{roomName}/message/{messageName}/get')
            .replace('{service}', 'chat')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{roomName}', String(request.getRoomName() ?? 'null') === "" ? "null" : String(request.getRoomName() ?? 'null'))
            .replace('{messageName}', String(request.getMessageName() ?? 'null') === "" ? "null" : String(request.getMessageName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'password': String(request.getPassword() ?? null),
            'userId': String(request.getUserId() ?? null),
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.GetMessageByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public deleteMessage(request: Request.DeleteMessageRequest): Promise<Result.DeleteMessageResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/room/{roomName}/message/{messageName}')
            .replace('{service}', 'chat')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{roomName}', String(request.getRoomName() ?? 'null') === "" ? "null" : String(request.getRoomName() ?? 'null'))
            .replace('{messageName}', String(request.getMessageName() ?? 'null') === "" ? "null" : String(request.getMessageName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'userId': String(request.getUserId() ?? null),
        };
        return axios.delete(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.DeleteMessageResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeSubscribes(request: Request.DescribeSubscribesRequest): Promise<Result.DescribeSubscribesResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/room/subscribe')
            .replace('{service}', 'chat')
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
            return Result.DescribeSubscribesResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeSubscribesByUserId(request: Request.DescribeSubscribesByUserIdRequest): Promise<Result.DescribeSubscribesByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/room/subscribe')
            .replace('{service}', 'chat')
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
            return Result.DescribeSubscribesByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeSubscribesByRoomName(request: Request.DescribeSubscribesByRoomNameRequest): Promise<Result.DescribeSubscribesByRoomNameResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/room/{roomName}/subscribe')
            .replace('{service}', 'chat')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{roomName}', String(request.getRoomName() ?? 'null') === "" ? "null" : String(request.getRoomName() ?? 'null'));
    
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
            return Result.DescribeSubscribesByRoomNameResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public subscribe(request: Request.SubscribeRequest): Promise<Result.SubscribeResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/room/{roomName}/subscribe')
            .replace('{service}', 'chat')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{roomName}', String(request.getRoomName() ?? 'null') === "" ? "null" : String(request.getRoomName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = request.getAccessToken() ?? null;
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'notificationTypes': request.getNotificationTypes()?.map((item) => item.toDict()) ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.SubscribeResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public subscribeByUserId(request: Request.SubscribeByUserIdRequest): Promise<Result.SubscribeByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/room/{roomName}/subscribe')
            .replace('{service}', 'chat')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{roomName}', String(request.getRoomName() ?? 'null') === "" ? "null" : String(request.getRoomName() ?? 'null'))
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
            'notificationTypes': request.getNotificationTypes()?.map((item) => item.toDict()) ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.SubscribeByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public getSubscribe(request: Request.GetSubscribeRequest): Promise<Result.GetSubscribeResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/room/{roomName}/subscribe')
            .replace('{service}', 'chat')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{roomName}', String(request.getRoomName() ?? 'null') === "" ? "null" : String(request.getRoomName() ?? 'null'));
    
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
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/room/{roomName}/subscribe')
            .replace('{service}', 'chat')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{roomName}', String(request.getRoomName() ?? 'null') === "" ? "null" : String(request.getRoomName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'));
    
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
            return Result.GetSubscribeByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public updateNotificationType(request: Request.UpdateNotificationTypeRequest): Promise<Result.UpdateNotificationTypeResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/room/{roomName}/subscribe/notification')
            .replace('{service}', 'chat')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{roomName}', String(request.getRoomName() ?? 'null') === "" ? "null" : String(request.getRoomName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = request.getAccessToken() ?? null;
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'notificationTypes': request.getNotificationTypes()?.map((item) => item.toDict()) ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.UpdateNotificationTypeResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public updateNotificationTypeByUserId(request: Request.UpdateNotificationTypeByUserIdRequest): Promise<Result.UpdateNotificationTypeByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/room/{roomName}/subscribe/notification')
            .replace('{service}', 'chat')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{roomName}', String(request.getRoomName() ?? 'null') === "" ? "null" : String(request.getRoomName() ?? 'null'))
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
            'notificationTypes': request.getNotificationTypes()?.map((item) => item.toDict()) ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.UpdateNotificationTypeByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public unsubscribe(request: Request.UnsubscribeRequest): Promise<Result.UnsubscribeResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/room/{roomName}/subscribe')
            .replace('{service}', 'chat')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{roomName}', String(request.getRoomName() ?? 'null') === "" ? "null" : String(request.getRoomName() ?? 'null'));
    
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
            return Result.UnsubscribeResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public unsubscribeByUserId(request: Request.UnsubscribeByUserIdRequest): Promise<Result.UnsubscribeByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/room/{roomName}/subscribe')
            .replace('{service}', 'chat')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{roomName}', String(request.getRoomName() ?? 'null') === "" ? "null" : String(request.getRoomName() ?? 'null'))
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
            return Result.UnsubscribeByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }
}
