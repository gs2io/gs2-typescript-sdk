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

import * as Gs2Chat from '../../chat/model'

export default class NotificationSetting implements IModel {
    private gatewayNamespaceId: string|null = null;
    private enableTransferMobileNotification: boolean|null = null;
    private sound: string|null = null;
    public getGatewayNamespaceId(): string|null {
        return this.gatewayNamespaceId;
    }
    public setGatewayNamespaceId(gatewayNamespaceId: string|null) {
        this.gatewayNamespaceId = gatewayNamespaceId;
        return this;
    }
    public withGatewayNamespaceId(gatewayNamespaceId: string|null): this {
        this.gatewayNamespaceId = gatewayNamespaceId;
        return this;
    }
    public getEnableTransferMobileNotification(): boolean|null {
        return this.enableTransferMobileNotification;
    }
    public setEnableTransferMobileNotification(enableTransferMobileNotification: boolean|null) {
        this.enableTransferMobileNotification = enableTransferMobileNotification;
        return this;
    }
    public withEnableTransferMobileNotification(enableTransferMobileNotification: boolean|null): this {
        this.enableTransferMobileNotification = enableTransferMobileNotification;
        return this;
    }
    public getSound(): string|null {
        return this.sound;
    }
    public setSound(sound: string|null) {
        this.sound = sound;
        return this;
    }
    public withSound(sound: string|null): this {
        this.sound = sound;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): NotificationSetting|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new NotificationSetting()
            .withGatewayNamespaceId(data["gatewayNamespaceId"])
            .withEnableTransferMobileNotification(data["enableTransferMobileNotification"])
            .withSound(data["sound"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "gatewayNamespaceId": this.getGatewayNamespaceId(),
            "enableTransferMobileNotification": this.getEnableTransferMobileNotification(),
            "sound": this.getSound(),
        };
    }
}
