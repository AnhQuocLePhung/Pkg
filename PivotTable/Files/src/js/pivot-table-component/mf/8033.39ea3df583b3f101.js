(self.webpackChunkapp_studio_enterprise_pivot_table=self.webpackChunkapp_studio_enterprise_pivot_table||[]).push([[8033],{18033:(re,P,s)=>{s.r(P),s.d(P,{MAT_SELECT_CONFIG:()=>D,MAT_SELECT_SCROLL_STRATEGY:()=>k,MAT_SELECT_SCROLL_STRATEGY_PROVIDER:()=>T,MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY:()=>B,MAT_SELECT_TRIGGER:()=>w,MatSelect:()=>h,MatSelectChange:()=>V,MatSelectModule:()=>C,MatSelectTrigger:()=>u,_MatSelectBase:()=>b,matSelectAnimations:()=>E});var _=s(31892),M=s(31134),e=s(94450),l=s(66385),f=s(70193),x=s(17684),I=s(71689),L=s(99852),S=s(3127),W=s(60317),d=s(33297),y=s(34560),v=s(21322),o=s(27049),p=s(72310);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const K=["trigger"],N=["panel"];function j(n,t){if(n&1&&(e.\u0275\u0275elementStart(0,"span",10),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),n&2){const a=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(a.placeholder)}}function U(n,t){if(n&1&&(e.\u0275\u0275elementStart(0,"span",14),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),n&2){const a=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(a.triggerValue)}}function G(n,t){n&1&&e.\u0275\u0275projection(0,0,["*ngSwitchCase","true"])}function z(n,t){if(n&1&&(e.\u0275\u0275elementStart(0,"span",11),e.\u0275\u0275template(1,U,2,1,"span",12),e.\u0275\u0275template(2,G,1,0,"ng-content",13),e.\u0275\u0275elementEnd()),n&2){const a=e.\u0275\u0275nextContext();e.\u0275\u0275property("ngSwitch",!!a.customTrigger),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngSwitchCase",!0)}}function H(n,t){if(n&1){const a=e.\u0275\u0275getCurrentView();e.\u0275\u0275namespaceSVG(),e.\u0275\u0275namespaceHTML(),e.\u0275\u0275elementStart(0,"div",15,16),e.\u0275\u0275listener("@transformPanel.done",function(r){e.\u0275\u0275restoreView(a);const c=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(c._panelDoneAnimatingStream.next(r.toState))})("keydown",function(r){e.\u0275\u0275restoreView(a);const c=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(c._handleKeydown(r))}),e.\u0275\u0275projection(2,1),e.\u0275\u0275elementEnd()}if(n&2){const a=e.\u0275\u0275nextContext();e.\u0275\u0275classMapInterpolate1("mat-mdc-select-panel mdc-menu-surface mdc-menu-surface--open ",a._getPanelTheme(),""),e.\u0275\u0275property("ngClass",a.panelClass)("@transformPanel","showing"),e.\u0275\u0275attribute("id",a.id+"-panel")("aria-multiselectable",a.multiple)("aria-label",a.ariaLabel||null)("aria-labelledby",a._getPanelAriaLabelledby())}}const Q=[[["mat-select-trigger"]],"*"],Y=["mat-select-trigger","*"],E={transformPanelWrap:(0,p.trigger)("transformPanelWrap",[(0,p.transition)("* => void",(0,p.query)("@transformPanel",[(0,p.animateChild)()],{optional:!0}))]),transformPanel:(0,p.trigger)("transformPanel",[(0,p.state)("void",(0,p.style)({opacity:0,transform:"scale(1, 0.8)"})),(0,p.transition)("void => showing",(0,p.animate)("120ms cubic-bezier(0, 0, 0.2, 1)",(0,p.style)({opacity:1,transform:"scale(1, 1)"}))),(0,p.transition)("* => void",(0,p.animate)("100ms linear",(0,p.style)({opacity:0})))])};/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function q(){return Error("Cannot change `multiple` mode of select after initialization.")}function $(){return Error("Value must be an array in multiple-selection mode.")}function X(){return Error("`compareWith` must be a function.")}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let F=0;const k=new e.InjectionToken("mat-select-scroll-strategy");function B(n){return()=>n.scrollStrategies.reposition()}const D=new e.InjectionToken("MAT_SELECT_CONFIG"),T={provide:k,deps:[_.Overlay],useFactory:B},w=new e.InjectionToken("MatSelectTrigger");class V{constructor(t,a){this.source=t,this.value=a}}const Z=(0,l.mixinDisableRipple)((0,l.mixinTabIndex)((0,l.mixinDisabled)((0,l.mixinErrorState)(class{constructor(n,t,a,i,r){this._elementRef=n,this._defaultErrorStateMatcher=t,this._parentForm=a,this._parentFormGroup=i,this.ngControl=r,this.stateChanges=new v.Subject}}))));class b extends Z{get focused(){return this._focused||this._panelOpen}get placeholder(){return this._placeholder}set placeholder(t){this._placeholder=t,this.stateChanges.next()}get required(){return this._required??this.ngControl?.control?.hasValidator(y.Validators.required)??!1}set required(t){this._required=(0,S.coerceBooleanProperty)(t),this.stateChanges.next()}get multiple(){return this._multiple}set multiple(t){if(this._selectionModel&&(typeof ngDevMode>"u"||ngDevMode))throw q();this._multiple=(0,S.coerceBooleanProperty)(t)}get disableOptionCentering(){return this._disableOptionCentering}set disableOptionCentering(t){this._disableOptionCentering=(0,S.coerceBooleanProperty)(t)}get compareWith(){return this._compareWith}set compareWith(t){if(typeof t!="function"&&(typeof ngDevMode>"u"||ngDevMode))throw X();this._compareWith=t,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(t){this._assignValue(t)&&this._onChange(t)}get typeaheadDebounceInterval(){return this._typeaheadDebounceInterval}set typeaheadDebounceInterval(t){this._typeaheadDebounceInterval=(0,S.coerceNumberProperty)(t)}get id(){return this._id}set id(t){this._id=t||this._uid,this.stateChanges.next()}constructor(t,a,i,r,c,O,m,J,ee,te,ae,ie,ne,A){super(c,r,m,J,te),this._viewportRuler=t,this._changeDetectorRef=a,this._ngZone=i,this._dir=O,this._parentFormField=ee,this._liveAnnouncer=ne,this._defaultOptions=A,this._panelOpen=!1,this._compareWith=(g,R)=>g===R,this._uid=`mat-select-${F++}`,this._triggerAriaLabelledBy=null,this._destroy=new v.Subject,this._onChange=()=>{},this._onTouched=()=>{},this._valueId=`mat-select-value-${F++}`,this._panelDoneAnimatingStream=new v.Subject,this._overlayPanelClass=this._defaultOptions?.overlayPanelClass||"",this._focused=!1,this.controlType="mat-select",this._multiple=!1,this._disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1,this.ariaLabel="",this.optionSelectionChanges=(0,v.defer)(()=>{const g=this.options;return g?g.changes.pipe((0,o.startWith)(g),(0,o.switchMap)(()=>(0,v.merge)(...g.map(R=>R.onSelectionChange)))):this._ngZone.onStable.pipe((0,o.take)(1),(0,o.switchMap)(()=>this.optionSelectionChanges))}),this.openedChange=new e.EventEmitter,this._openedStream=this.openedChange.pipe((0,o.filter)(g=>g),(0,o.map)(()=>{})),this._closedStream=this.openedChange.pipe((0,o.filter)(g=>!g),(0,o.map)(()=>{})),this.selectionChange=new e.EventEmitter,this.valueChange=new e.EventEmitter,this.ngControl&&(this.ngControl.valueAccessor=this),A?.typeaheadDebounceInterval!=null&&(this._typeaheadDebounceInterval=A.typeaheadDebounceInterval),this._scrollStrategyFactory=ie,this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=parseInt(ae)||0,this.id=this.id}ngOnInit(){this._selectionModel=new W.SelectionModel(this.multiple),this.stateChanges.next(),this._panelDoneAnimatingStream.pipe((0,o.distinctUntilChanged)(),(0,o.takeUntil)(this._destroy)).subscribe(()=>this._panelDoneAnimating(this.panelOpen))}ngAfterContentInit(){this._initKeyManager(),this._selectionModel.changed.pipe((0,o.takeUntil)(this._destroy)).subscribe(t=>{t.added.forEach(a=>a.select()),t.removed.forEach(a=>a.deselect())}),this.options.changes.pipe((0,o.startWith)(null),(0,o.takeUntil)(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){const t=this._getTriggerAriaLabelledby(),a=this.ngControl;if(t!==this._triggerAriaLabelledBy){const i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=t,t?i.setAttribute("aria-labelledby",t):i.removeAttribute("aria-labelledby")}a&&(this._previousControl!==a.control&&(this._previousControl!==void 0&&a.disabled!==null&&a.disabled!==this.disabled&&(this.disabled=a.disabled),this._previousControl=a.control),this.updateErrorState())}ngOnChanges(t){(t.disabled||t.userAriaDescribedBy)&&this.stateChanges.next(),t.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this._typeaheadDebounceInterval)}ngOnDestroy(){this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._panelOpen=!0,this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck())}close(){this._panelOpen&&(this._panelOpen=!1,this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched())}writeValue(t){this._assignValue(t)}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){const t=this._selectionModel.selected.map(a=>a.viewValue);return this._isRtl()&&t.reverse(),t.join(", ")}return this._selectionModel.selected[0].viewValue}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(t){this.disabled||(this.panelOpen?this._handleOpenKeydown(t):this._handleClosedKeydown(t))}_handleClosedKeydown(t){const a=t.keyCode,i=a===d.DOWN_ARROW||a===d.UP_ARROW||a===d.LEFT_ARROW||a===d.RIGHT_ARROW,r=a===d.ENTER||a===d.SPACE,c=this._keyManager;if(!c.isTyping()&&r&&!(0,d.hasModifierKey)(t)||(this.multiple||t.altKey)&&i)t.preventDefault(),this.open();else if(!this.multiple){const O=this.selected;c.onKeydown(t);const m=this.selected;m&&O!==m&&this._liveAnnouncer.announce(m.viewValue,1e4)}}_handleOpenKeydown(t){const a=this._keyManager,i=t.keyCode,r=i===d.DOWN_ARROW||i===d.UP_ARROW,c=a.isTyping();if(r&&t.altKey)t.preventDefault(),this.close();else if(!c&&(i===d.ENTER||i===d.SPACE)&&a.activeItem&&!(0,d.hasModifierKey)(t))t.preventDefault(),a.activeItem._selectViaInteraction();else if(!c&&this._multiple&&i===d.A&&t.ctrlKey){t.preventDefault();const O=this.options.some(m=>!m.disabled&&!m.selected);this.options.forEach(m=>{m.disabled||(O?m.select():m.deselect())})}else{const O=a.activeItemIndex;a.onKeydown(t),this._multiple&&r&&t.shiftKey&&a.activeItem&&a.activeItemIndex!==O&&a.activeItem._selectViaInteraction()}}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}_onAttached(){this._overlayDir.positionChange.pipe((0,o.take)(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()})}_getPanelTheme(){return this._parentFormField?`mat-${this._parentFormField.color}`:""}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(t){if(this.options.forEach(a=>a.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&t){if(!Array.isArray(t)&&(typeof ngDevMode>"u"||ngDevMode))throw $();t.forEach(a=>this._selectOptionByValue(a)),this._sortValues()}else{const a=this._selectOptionByValue(t);a?this._keyManager.updateActiveItem(a):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(t){const a=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return i.value!=null&&this._compareWith(i.value,t)}catch(r){return(typeof ngDevMode>"u"||ngDevMode)&&console.warn(r),!1}});return a&&this._selectionModel.select(a),a}_assignValue(t){return t!==this._value||this._multiple&&Array.isArray(t)?(this.options&&this._setSelectionByValue(t),this._value=t,!0):!1}_initKeyManager(){this._keyManager=new I.ActiveDescendantKeyManager(this.options).withTypeAhead(this._typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){const t=(0,v.merge)(this.options.changes,this._destroy);this.optionSelectionChanges.pipe((0,o.takeUntil)(t)).subscribe(a=>{this._onSelect(a.source,a.isUserInput),a.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),(0,v.merge)(...this.options.map(a=>a._stateChanges)).pipe((0,o.takeUntil)(t)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(t,a){const i=this._selectionModel.isSelected(t);t.value==null&&!this._multiple?(t.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(t.value)):(i!==t.selected&&(t.selected?this._selectionModel.select(t):this._selectionModel.deselect(t)),a&&this._keyManager.setActiveItem(t),this.multiple&&(this._sortValues(),a&&this.focus())),i!==this._selectionModel.isSelected(t)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){const t=this.options.toArray();this._selectionModel.sort((a,i)=>this.sortComparator?this.sortComparator(a,i,t):t.indexOf(a)-t.indexOf(i)),this.stateChanges.next()}}_propagateChanges(t){let a=null;this.multiple?a=this.selected.map(i=>i.value):a=this.selected?this.selected.value:t,this._value=a,this.valueChange.emit(a),this._onChange(a),this.selectionChange.emit(this._getChangeEvent(a)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){this._keyManager&&(this.empty?this._keyManager.setFirstItemActive():this._keyManager.setActiveItem(this._selectionModel.selected[0]))}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0}focus(t){this._elementRef.nativeElement.focus(t)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;const t=this._parentFormField?.getLabelId(),a=t?t+" ":"";return this.ariaLabelledby?a+this.ariaLabelledby:t}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;const t=this._parentFormField?.getLabelId();let a=(t?t+" ":"")+this._valueId;return this.ariaLabelledby&&(a+=" "+this.ariaLabelledby),a}_panelDoneAnimating(t){this.openedChange.emit(t)}setDescribedByIds(t){t.length?this._elementRef.nativeElement.setAttribute("aria-describedby",t.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(){this.focus(),this.open()}get shouldLabelFloat(){return this._panelOpen||!this.empty||this._focused&&!!this._placeholder}}b.\u0275fac=function(t){return new(t||b)(e.\u0275\u0275directiveInject(x.ViewportRuler),e.\u0275\u0275directiveInject(e.ChangeDetectorRef),e.\u0275\u0275directiveInject(e.NgZone),e.\u0275\u0275directiveInject(l.ErrorStateMatcher),e.\u0275\u0275directiveInject(e.ElementRef),e.\u0275\u0275directiveInject(L.Directionality,8),e.\u0275\u0275directiveInject(y.NgForm,8),e.\u0275\u0275directiveInject(y.FormGroupDirective,8),e.\u0275\u0275directiveInject(f.MAT_FORM_FIELD,8),e.\u0275\u0275directiveInject(y.NgControl,10),e.\u0275\u0275injectAttribute("tabindex"),e.\u0275\u0275directiveInject(k),e.\u0275\u0275directiveInject(I.LiveAnnouncer),e.\u0275\u0275directiveInject(D,8))},b.\u0275dir=e.\u0275\u0275defineDirective({type:b,viewQuery:function(t,a){if(t&1&&(e.\u0275\u0275viewQuery(K,5),e.\u0275\u0275viewQuery(N,5),e.\u0275\u0275viewQuery(_.CdkConnectedOverlay,5)),t&2){let i;e.\u0275\u0275queryRefresh(i=e.\u0275\u0275loadQuery())&&(a.trigger=i.first),e.\u0275\u0275queryRefresh(i=e.\u0275\u0275loadQuery())&&(a.panel=i.first),e.\u0275\u0275queryRefresh(i=e.\u0275\u0275loadQuery())&&(a._overlayDir=i.first)}},inputs:{userAriaDescribedBy:["aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",placeholder:"placeholder",required:"required",multiple:"multiple",disableOptionCentering:"disableOptionCentering",compareWith:"compareWith",value:"value",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:"typeaheadDebounceInterval",sortComparator:"sortComparator",id:"id"},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},features:[e.\u0275\u0275InheritDefinitionFeature,e.\u0275\u0275NgOnChangesFeature]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(b,[{type:e.Directive}],function(){return[{type:x.ViewportRuler},{type:e.ChangeDetectorRef},{type:e.NgZone},{type:l.ErrorStateMatcher},{type:e.ElementRef},{type:L.Directionality,decorators:[{type:e.Optional}]},{type:y.NgForm,decorators:[{type:e.Optional}]},{type:y.FormGroupDirective,decorators:[{type:e.Optional}]},{type:f.MatFormField,decorators:[{type:e.Optional},{type:e.Inject,args:[f.MAT_FORM_FIELD]}]},{type:y.NgControl,decorators:[{type:e.Self},{type:e.Optional}]},{type:void 0,decorators:[{type:e.Attribute,args:["tabindex"]}]},{type:void 0,decorators:[{type:e.Inject,args:[k]}]},{type:I.LiveAnnouncer},{type:void 0,decorators:[{type:e.Optional},{type:e.Inject,args:[D]}]}]},{userAriaDescribedBy:[{type:e.Input,args:["aria-describedby"]}],trigger:[{type:e.ViewChild,args:["trigger"]}],panel:[{type:e.ViewChild,args:["panel"]}],_overlayDir:[{type:e.ViewChild,args:[_.CdkConnectedOverlay]}],panelClass:[{type:e.Input}],placeholder:[{type:e.Input}],required:[{type:e.Input}],multiple:[{type:e.Input}],disableOptionCentering:[{type:e.Input}],compareWith:[{type:e.Input}],value:[{type:e.Input}],ariaLabel:[{type:e.Input,args:["aria-label"]}],ariaLabelledby:[{type:e.Input,args:["aria-labelledby"]}],errorStateMatcher:[{type:e.Input}],typeaheadDebounceInterval:[{type:e.Input}],sortComparator:[{type:e.Input}],id:[{type:e.Input}],openedChange:[{type:e.Output}],_openedStream:[{type:e.Output,args:["opened"]}],_closedStream:[{type:e.Output,args:["closed"]}],selectionChange:[{type:e.Output}],valueChange:[{type:e.Output}]})}();class u{}u.\u0275fac=function(t){return new(t||u)},u.\u0275dir=e.\u0275\u0275defineDirective({type:u,selectors:[["mat-select-trigger"]],features:[e.\u0275\u0275ProvidersFeature([{provide:w,useExisting:u}])]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(u,[{type:e.Directive,args:[{selector:"mat-select-trigger",providers:[{provide:w,useExisting:u}]}]}],null,null)}();class h extends b{constructor(){super(...arguments),this._positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}],this._hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}ngOnInit(){super.ngOnInit(),this._viewportRuler.change().pipe((0,o.takeUntil)(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(),this._changeDetectorRef.detectChanges())})}ngAfterViewInit(){this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin())}open(){this._overlayWidth=this._getOverlayWidth(),super.open(),this.stateChanges.next()}close(){super.close(),this.stateChanges.next()}_scrollOptionIntoView(t){const a=this.options.toArray()[t];if(a){const i=this.panel.nativeElement,r=(0,l._countGroupLabelsBeforeOption)(t,this.options,this.optionGroups),c=a._getHostElement();t===0&&r===1?i.scrollTop=0:i.scrollTop=(0,l._getOptionScrollPosition)(c.offsetTop,c.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(t){return new V(this,t)}_getOverlayWidth(){return(this._preferredOverlayOrigin instanceof _.CdkOverlayOrigin?this._preferredOverlayOrigin.elementRef:this._preferredOverlayOrigin||this._elementRef).nativeElement.getBoundingClientRect().width}get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=(0,S.coerceBooleanProperty)(t),this._syncParentProperties()}_syncParentProperties(){if(this.options)for(const t of this.options)t._changeDetectorRef.markForCheck()}}h.\u0275fac=function(){let n;return function(a){return(n||(n=e.\u0275\u0275getInheritedFactory(h)))(a||h)}}(),h.\u0275cmp=e.\u0275\u0275defineComponent({type:h,selectors:[["mat-select"]],contentQueries:function(t,a,i){if(t&1&&(e.\u0275\u0275contentQuery(i,w,5),e.\u0275\u0275contentQuery(i,l.MatOption,5),e.\u0275\u0275contentQuery(i,l.MAT_OPTGROUP,5)),t&2){let r;e.\u0275\u0275queryRefresh(r=e.\u0275\u0275loadQuery())&&(a.customTrigger=r.first),e.\u0275\u0275queryRefresh(r=e.\u0275\u0275loadQuery())&&(a.options=r),e.\u0275\u0275queryRefresh(r=e.\u0275\u0275loadQuery())&&(a.optionGroups=r)}},hostAttrs:["role","combobox","aria-autocomplete","none","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:19,hostBindings:function(t,a){t&1&&e.\u0275\u0275listener("keydown",function(r){return a._handleKeydown(r)})("focus",function(){return a._onFocus()})("blur",function(){return a._onBlur()}),t&2&&(e.\u0275\u0275attribute("id",a.id)("tabindex",a.tabIndex)("aria-controls",a.panelOpen?a.id+"-panel":null)("aria-expanded",a.panelOpen)("aria-label",a.ariaLabel||null)("aria-required",a.required.toString())("aria-disabled",a.disabled.toString())("aria-invalid",a.errorState)("aria-activedescendant",a._getAriaActiveDescendant()),e.\u0275\u0275classProp("mat-mdc-select-disabled",a.disabled)("mat-mdc-select-invalid",a.errorState)("mat-mdc-select-required",a.required)("mat-mdc-select-empty",a.empty)("mat-mdc-select-multiple",a.multiple))},inputs:{disabled:"disabled",disableRipple:"disableRipple",tabIndex:"tabIndex",hideSingleSelectionIndicator:"hideSingleSelectionIndicator"},exportAs:["matSelect"],features:[e.\u0275\u0275ProvidersFeature([{provide:f.MatFormFieldControl,useExisting:h},{provide:l.MAT_OPTION_PARENT_COMPONENT,useExisting:h}]),e.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:Y,decls:11,vars:11,consts:[["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],[1,"mat-mdc-select-value",3,"ngSwitch"],["class","mat-mdc-select-placeholder mat-mdc-select-min-line",4,"ngSwitchCase"],["class","mat-mdc-select-value-text",3,"ngSwitch",4,"ngSwitchCase"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayLockPosition","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayOpen","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","backdropClick","attach","detach"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text",3,"ngSwitch"],["class","mat-mdc-select-min-line",4,"ngSwitchDefault"],[4,"ngSwitchCase"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",3,"ngClass","keydown"],["panel",""]],template:function(t,a){if(t&1&&(e.\u0275\u0275projectionDef(Q),e.\u0275\u0275elementStart(0,"div",0,1),e.\u0275\u0275listener("click",function(){return a.toggle()}),e.\u0275\u0275elementStart(3,"div",2),e.\u0275\u0275template(4,j,2,1,"span",3),e.\u0275\u0275template(5,z,3,2,"span",4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"div",5)(7,"div",6),e.\u0275\u0275namespaceSVG(),e.\u0275\u0275elementStart(8,"svg",7),e.\u0275\u0275element(9,"path",8),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275template(10,H,3,9,"ng-template",9),e.\u0275\u0275listener("backdropClick",function(){return a.close()})("attach",function(){return a._onAttached()})("detach",function(){return a.close()})),t&2){const i=e.\u0275\u0275reference(1);e.\u0275\u0275attribute("aria-owns",a.panelOpen?a.id+"-panel":null),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngSwitch",a.empty),e.\u0275\u0275attribute("id",a._valueId),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngSwitchCase",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngSwitchCase",!1),e.\u0275\u0275advance(5),e.\u0275\u0275property("cdkConnectedOverlayPanelClass",a._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",a._scrollStrategy)("cdkConnectedOverlayOrigin",a._preferredOverlayOrigin||i)("cdkConnectedOverlayOpen",a.panelOpen)("cdkConnectedOverlayPositions",a._positions)("cdkConnectedOverlayWidth",a._overlayWidth)}},dependencies:[M.NgClass,M.NgSwitch,M.NgSwitchCase,M.NgSwitchDefault,_.CdkConnectedOverlay,_.CdkOverlayOrigin],styles:['.mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-width:var(--mdc-menu-max-width, calc(100vw - 32px));max-height:calc(100vh - 32px);max-height:var(--mdc-menu-max-height, calc(100vh - 32px));margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}.mat-mdc-select{display:inline-block;width:100%;outline:none}.mat-mdc-select-trigger{display:inline-flex;align-items:center;cursor:pointer;position:relative;box-sizing:border-box;width:100%}.mat-mdc-select-disabled .mat-mdc-select-trigger{-webkit-user-select:none;user-select:none;cursor:default}.mat-mdc-select-value{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-mdc-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-mdc-select-arrow-wrapper{height:24px;flex-shrink:0;display:inline-flex;align-items:center}.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper{transform:translateY(-8px)}.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper{transform:none}.mat-mdc-select-arrow{width:10px;height:5px;position:relative}.mat-mdc-select-arrow svg{fill:currentColor;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.cdk-high-contrast-active .mat-mdc-select-arrow svg{fill:CanvasText}.mat-mdc-select-disabled .cdk-high-contrast-active .mat-mdc-select-arrow svg{fill:GrayText}.mdc-menu-surface.mat-mdc-select-panel{width:100%;max-height:275px;position:static;outline:0;margin:0;padding:8px 0;list-style-type:none}.mdc-menu-surface.mat-mdc-select-panel:focus{outline:none}.cdk-high-contrast-active .mdc-menu-surface.mat-mdc-select-panel{outline:solid 1px}.cdk-overlay-pane:not(.mat-mdc-select-panel-above) .mdc-menu-surface.mat-mdc-select-panel{border-top-left-radius:0;border-top-right-radius:0;transform-origin:top center}.mat-mdc-select-panel-above .mdc-menu-surface.mat-mdc-select-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:bottom center}.mat-mdc-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable .mat-mdc-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-mdc-select-placeholder{color:rgba(0,0,0,0);-webkit-text-fill-color:rgba(0,0,0,0);transition:none;display:block}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label{max-width:calc(100% - 18px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 24px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch{max-width:calc(100% - 24px)}.mat-mdc-select-min-line:empty::before{content:" ";white-space:pre;width:1px;display:inline-block;visibility:hidden}'],encapsulation:2,data:{animation:[E.transformPanel]},changeDetection:0}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(h,[{type:e.Component,args:[{selector:"mat-select",exportAs:"matSelect",inputs:["disabled","disableRipple","tabIndex"],encapsulation:e.ViewEncapsulation.None,changeDetection:e.ChangeDetectionStrategy.OnPush,host:{role:"combobox","aria-autocomplete":"none","aria-haspopup":"listbox",class:"mat-mdc-select","[attr.id]":"id","[attr.tabindex]":"tabIndex","[attr.aria-controls]":'panelOpen ? id + "-panel" : null',"[attr.aria-expanded]":"panelOpen","[attr.aria-label]":"ariaLabel || null","[attr.aria-required]":"required.toString()","[attr.aria-disabled]":"disabled.toString()","[attr.aria-invalid]":"errorState","[attr.aria-activedescendant]":"_getAriaActiveDescendant()","[class.mat-mdc-select-disabled]":"disabled","[class.mat-mdc-select-invalid]":"errorState","[class.mat-mdc-select-required]":"required","[class.mat-mdc-select-empty]":"empty","[class.mat-mdc-select-multiple]":"multiple","(keydown)":"_handleKeydown($event)","(focus)":"_onFocus()","(blur)":"_onBlur()"},animations:[E.transformPanel],providers:[{provide:f.MatFormFieldControl,useExisting:h},{provide:l.MAT_OPTION_PARENT_COMPONENT,useExisting:h}],template:`<!--
 Note that the select trigger element specifies \`aria-owns\` pointing to the listbox overlay.
 While aria-owns is not required for the ARIA 1.2 \`role="combobox"\` interaction pattern,
 it fixes an issue with VoiceOver when the select appears inside of an \`aria-model="true"\`
 element (e.g. a dialog). Without this \`aria-owns\`, the \`aria-modal\` on a dialog prevents
 VoiceOver from "seeing" the select's listbox overlay for aria-activedescendant.
 Using \`aria-owns\` re-parents the select overlay so that it works again.
 See https://github.com/angular/components/issues/20694
-->
<div cdk-overlay-origin
     [attr.aria-owns]="panelOpen ? id + '-panel' : null"
     class="mat-mdc-select-trigger"
     (click)="toggle()"
     #fallbackOverlayOrigin="cdkOverlayOrigin"
     #trigger>
  <div class="mat-mdc-select-value" [ngSwitch]="empty" [attr.id]="_valueId">
    <span class="mat-mdc-select-placeholder mat-mdc-select-min-line" *ngSwitchCase="true">{{placeholder}}</span>
    <span class="mat-mdc-select-value-text" *ngSwitchCase="false" [ngSwitch]="!!customTrigger">
      <span class="mat-mdc-select-min-line" *ngSwitchDefault>{{triggerValue}}</span>
      <ng-content select="mat-select-trigger" *ngSwitchCase="true"></ng-content>
    </span>
  </div>

  <div class="mat-mdc-select-arrow-wrapper">
    <div class="mat-mdc-select-arrow">
      <!-- Use an inline SVG, because it works better than a CSS triangle in high contrast mode. -->
      <svg viewBox="0 0 24 24" width="24px" height="24px" focusable="false">
        <path d="M7 10l5 5 5-5z"/>
      </svg>
    </div>
  </div>
</div>

<ng-template
  cdk-connected-overlay
  cdkConnectedOverlayLockPosition
  cdkConnectedOverlayHasBackdrop
  cdkConnectedOverlayBackdropClass="cdk-overlay-transparent-backdrop"
  [cdkConnectedOverlayPanelClass]="_overlayPanelClass"
  [cdkConnectedOverlayScrollStrategy]="_scrollStrategy"
  [cdkConnectedOverlayOrigin]="_preferredOverlayOrigin || fallbackOverlayOrigin"
  [cdkConnectedOverlayOpen]="panelOpen"
  [cdkConnectedOverlayPositions]="_positions"
  [cdkConnectedOverlayWidth]="_overlayWidth"
  (backdropClick)="close()"
  (attach)="_onAttached()"
  (detach)="close()">
  <div
    #panel
    role="listbox"
    tabindex="-1"
    class="mat-mdc-select-panel mdc-menu-surface mdc-menu-surface--open {{ _getPanelTheme() }}"
    [attr.id]="id + '-panel'"
    [attr.aria-multiselectable]="multiple"
    [attr.aria-label]="ariaLabel || null"
    [attr.aria-labelledby]="_getPanelAriaLabelledby()"
    [ngClass]="panelClass"
    [@transformPanel]="'showing'"
    (@transformPanel.done)="_panelDoneAnimatingStream.next($event.toState)"
    (keydown)="_handleKeydown($event)">
    <ng-content></ng-content>
  </div>
</ng-template>
`,styles:['.mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-width:var(--mdc-menu-max-width, calc(100vw - 32px));max-height:calc(100vh - 32px);max-height:var(--mdc-menu-max-height, calc(100vh - 32px));margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}.mat-mdc-select{display:inline-block;width:100%;outline:none}.mat-mdc-select-trigger{display:inline-flex;align-items:center;cursor:pointer;position:relative;box-sizing:border-box;width:100%}.mat-mdc-select-disabled .mat-mdc-select-trigger{-webkit-user-select:none;user-select:none;cursor:default}.mat-mdc-select-value{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-mdc-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-mdc-select-arrow-wrapper{height:24px;flex-shrink:0;display:inline-flex;align-items:center}.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper{transform:translateY(-8px)}.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper{transform:none}.mat-mdc-select-arrow{width:10px;height:5px;position:relative}.mat-mdc-select-arrow svg{fill:currentColor;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.cdk-high-contrast-active .mat-mdc-select-arrow svg{fill:CanvasText}.mat-mdc-select-disabled .cdk-high-contrast-active .mat-mdc-select-arrow svg{fill:GrayText}.mdc-menu-surface.mat-mdc-select-panel{width:100%;max-height:275px;position:static;outline:0;margin:0;padding:8px 0;list-style-type:none}.mdc-menu-surface.mat-mdc-select-panel:focus{outline:none}.cdk-high-contrast-active .mdc-menu-surface.mat-mdc-select-panel{outline:solid 1px}.cdk-overlay-pane:not(.mat-mdc-select-panel-above) .mdc-menu-surface.mat-mdc-select-panel{border-top-left-radius:0;border-top-right-radius:0;transform-origin:top center}.mat-mdc-select-panel-above .mdc-menu-surface.mat-mdc-select-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:bottom center}.mat-mdc-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable .mat-mdc-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-mdc-select-placeholder{color:rgba(0,0,0,0);-webkit-text-fill-color:rgba(0,0,0,0);transition:none;display:block}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label{max-width:calc(100% - 18px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 24px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch{max-width:calc(100% - 24px)}.mat-mdc-select-min-line:empty::before{content:" ";white-space:pre;width:1px;display:inline-block;visibility:hidden}']}]}],null,{options:[{type:e.ContentChildren,args:[l.MatOption,{descendants:!0}]}],optionGroups:[{type:e.ContentChildren,args:[l.MAT_OPTGROUP,{descendants:!0}]}],customTrigger:[{type:e.ContentChild,args:[w]}],hideSingleSelectionIndicator:[{type:e.Input}]})}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class C{}C.\u0275fac=function(t){return new(t||C)},C.\u0275mod=e.\u0275\u0275defineNgModule({type:C}),C.\u0275inj=e.\u0275\u0275defineInjector({providers:[T],imports:[M.CommonModule,_.OverlayModule,l.MatOptionModule,l.MatCommonModule,x.CdkScrollableModule,f.MatFormFieldModule,l.MatOptionModule,l.MatCommonModule]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(C,[{type:e.NgModule,args:[{imports:[M.CommonModule,_.OverlayModule,l.MatOptionModule,l.MatCommonModule],exports:[x.CdkScrollableModule,f.MatFormFieldModule,h,u,l.MatOptionModule,l.MatCommonModule],declarations:[h,u],providers:[T]}]}],null,null)}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *//**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}}]);
