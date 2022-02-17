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

export class NotificationType implements IModel {
    private category: number|null = null;
    private enableTransferMobilePushNotification: boolean|null = null;

    public getCategory(): number|null {
        return this.category;
    }

    public setCategory(category: number|null) {
        this.category = category;
        return this;
    }

    public withCategory(category: number|null): this {
        this.category = category;
        return this;
    }

    public getEnableTransferMobilePushNotification(): boolean|null {
        return this.enableTransferMobilePushNotification;
    }

    public setEnableTransferMobilePushNotification(enableTransferMobilePushNotification: boolean|null) {
        this.enableTransferMobilePushNotification = enableTransferMobilePushNotification;
        return this;
    }

    public withEnableTransferMobilePushNotification(enableTransferMobilePushNotification: boolean|null): this {
        this.enableTransferMobilePushNotification = enableTransferMobilePushNotification;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): NotificationType|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new NotificationType()
            .withCategory(data["category"])
            .withEnableTransferMobilePushNotification(data["enableTransferMobilePushNotification"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "category": this.getCategory(),
            "enableTransferMobilePushNotification": this.getEnableTransferMobilePushNotification(),
        };
    }
}
