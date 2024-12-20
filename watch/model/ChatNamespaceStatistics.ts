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

import * as Gs2Watch from '../../watch/model'

export default class ChatNamespaceStatistics implements IModel {
    private post: number|null = null;
    private createRoom: number|null = null;
    private deleteRoom: number|null = null;
    private createSubscribe: number|null = null;
    private deleteSubscribe: number|null = null;
    public getPost(): number|null {
        return this.post;
    }
    public setPost(post: number|null) {
        this.post = post;
        return this;
    }
    public withPost(post: number|null): this {
        this.post = post;
        return this;
    }
    public getCreateRoom(): number|null {
        return this.createRoom;
    }
    public setCreateRoom(createRoom: number|null) {
        this.createRoom = createRoom;
        return this;
    }
    public withCreateRoom(createRoom: number|null): this {
        this.createRoom = createRoom;
        return this;
    }
    public getDeleteRoom(): number|null {
        return this.deleteRoom;
    }
    public setDeleteRoom(deleteRoom: number|null) {
        this.deleteRoom = deleteRoom;
        return this;
    }
    public withDeleteRoom(deleteRoom: number|null): this {
        this.deleteRoom = deleteRoom;
        return this;
    }
    public getCreateSubscribe(): number|null {
        return this.createSubscribe;
    }
    public setCreateSubscribe(createSubscribe: number|null) {
        this.createSubscribe = createSubscribe;
        return this;
    }
    public withCreateSubscribe(createSubscribe: number|null): this {
        this.createSubscribe = createSubscribe;
        return this;
    }
    public getDeleteSubscribe(): number|null {
        return this.deleteSubscribe;
    }
    public setDeleteSubscribe(deleteSubscribe: number|null) {
        this.deleteSubscribe = deleteSubscribe;
        return this;
    }
    public withDeleteSubscribe(deleteSubscribe: number|null): this {
        this.deleteSubscribe = deleteSubscribe;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): ChatNamespaceStatistics|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ChatNamespaceStatistics()
            .withPost(data["post"])
            .withCreateRoom(data["createRoom"])
            .withDeleteRoom(data["deleteRoom"])
            .withCreateSubscribe(data["createSubscribe"])
            .withDeleteSubscribe(data["deleteSubscribe"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "post": this.getPost(),
            "createRoom": this.getCreateRoom(),
            "deleteRoom": this.getDeleteRoom(),
            "createSubscribe": this.getCreateSubscribe(),
            "deleteSubscribe": this.getDeleteSubscribe(),
        };
    }
}
