"use strict";
var core_1 = require('@angular/core');
var OffClickDirective = (function () {
    function OffClickDirective() {
    }
    /* tslint:enable */
    // @HostListener('click', ['$event']) public onClick($event: MouseEvent): void {
    //   $event.stopPropagation();
    // }
    OffClickDirective.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { document.addEventListener('click', _this.offClickHandler); }, 0);
    };
    OffClickDirective.prototype.ngOnDestroy = function () {
        document.removeEventListener('click', this.offClickHandler);
    };
    __decorate([
        core_1.Input('offClick'), 
        __metadata('design:type', Object)
    ], OffClickDirective.prototype, "offClickHandler", void 0);
    OffClickDirective = __decorate([
        core_1.Directive({
            selector: '[offClick]'
        }), 
        __metadata('design:paramtypes', [])
    ], OffClickDirective);
    return OffClickDirective;
}());
exports.OffClickDirective = OffClickDirective;
//# sourceMappingURL=off-click.js.map