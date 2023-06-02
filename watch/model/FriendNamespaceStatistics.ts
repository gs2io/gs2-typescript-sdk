/*
Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
Reserved.

Licensed under the Apache License, Version 2.0 (the "License").
You may not use this file except in compliance with the License.
A copy of the License is located at

 http://www.apache.org/licenses/LICENSE-2.0

or in the "license" file accompanying this file. This file is distributed
on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied. See the License for the specific language governing
permissions and limitations under the License.
 */

import IModel from '../../core/interface/IModel';

export default class FriendNamespaceStatistics implements IModel {
    private accept: number|null = null;
    private reject: number|null = null;
    private sendRequest: number|null = null;
    private follow: number|null = null;
    public getAccept(): number|null {
        return this.accept;
    }
    public setAccept(accept: number|null) {
        this.accept = accept;
        return this;
    }
    public withAccept(accept: number|null): this {
        this.accept = accept;
        return this;
    }
    public getReject(): number|null {
        return this.reject;
    }
    public setReject(reject: number|null) {
        this.reject = reject;
        return this;
    }
    public withReject(reject: number|null): this {
        this.reject = reject;
        return this;
    }
    public getSendRequest(): number|null {
        return this.sendRequest;
    }
    public setSendRequest(sendRequest: number|null) {
        this.sendRequest = sendRequest;
        return this;
    }
    public withSendRequest(sendRequest: number|null): this {
        this.sendRequest = sendRequest;
        return this;
    }
    public getFollow(): number|null {
        return this.follow;
    }
    public setFollow(follow: number|null) {
        this.follow = follow;
        return this;
    }
    public withFollow(follow: number|null): this {
        this.follow = follow;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): FriendNamespaceStatistics|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new FriendNamespaceStatistics()
            .withAccept(data["accept"])
            .withReject(data["reject"])
            .withSendRequest(data["sendRequest"])
            .withFollow(data["follow"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "accept": this.getAccept(),
            "reject": this.getReject(),
            "sendRequest": this.getSendRequest(),
            "follow": this.getFollow(),
        };
    }
}
