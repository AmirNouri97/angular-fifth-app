import { Directive, ElementRef, inject, input } from "@angular/core";

@Directive({
    standalone:true,
    selector:'[appSafeLink]'
    ,host:{'(click)':'onConfirmLeavePage($event)'}
})

export class SafeLinkDirective{
    queryParam = input('myapp' , {alias:'appSafeLink'})
    private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef)

constructor(){
    console.log('SafeLinkDirective is active!');
}
onConfirmLeavePage(event:MouseEvent){
    const wantsToLeave = window.confirm('do you wanna leave?')

    if(wantsToLeave){
        // const address= (event.target as HTMLAnchorElement).href;
        // (event.target as HTMLAnchorElement).href = address + '?from='+ this.queryParam()
        const address= this.hostElementRef.nativeElement.href;
        this.hostElementRef.nativeElement.href = address + '?from='+ this.queryParam()

        return

    }
    event.preventDefault()
}
}