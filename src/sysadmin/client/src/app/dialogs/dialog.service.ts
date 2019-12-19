import { Injectable, ApplicationRef, ComponentFactoryResolver, Injector, EmbeddedViewRef, ComponentRef, Type } from '@angular/core';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@Injectable({
    providedIn: 'root'
})
export class DialogService {
    constructor(private readonly applicationRef: ApplicationRef, private readonly componentFactoryResolver: ComponentFactoryResolver, 
        private readonly injector: Injector) {

    }

    showConfirm(title: string, message: string): Promise<boolean> {
        return new Promise((resolve) => {
            let componentRef = this.attachDialog(ConfirmDialogComponent);
    
            componentRef.instance.title = title;
            componentRef.instance.message = message;
            componentRef.instance.close.subscribe(confirmed => {
                this.detachDialog(componentRef);
                resolve(confirmed);
            });
        });
    }
 
    private attachDialog<T>(componentType: Type<T>): ComponentRef<T> {
        let factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
        let componentRef = factory.create(this.injector);
        let componentElement = <HTMLElement>(<EmbeddedViewRef<any>>componentRef.hostView).rootNodes[0];

        this.applicationRef.attachView(componentRef.hostView);
        document.body.appendChild(componentElement);

        return componentRef;
    }

    private detachDialog<T>(componentRef: ComponentRef<T>) {
        this.applicationRef.detachView(componentRef.hostView);
        componentRef.destroy();
    }
}
