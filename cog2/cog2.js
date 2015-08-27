function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
exports.version = '@VERSION';
__export(require('./core/app'));
__export(require('./core/types'));
__export(require('./gameplay/controller'));
__export(require('./gameplay/entity'));
__export(require('./gameplay/state'));
__export(require('./gameplay/world'));
__export(require('./renderer/threeMesh'));
__export(require('./renderer/threeRenderer'));
__export(require('./renderer/threeScene'));
//# sourceMappingURL=cog2.js.map