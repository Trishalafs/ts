var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Role = /** @class */ (function () {
    function Role(roleName) {
        this.roleName = roleName;
    }
    Role.prototype.getRole = function () {
        return "The role is ".concat(this.roleName);
    };
    return Role;
}());
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(firstName, lastName, roleName) {
        var _this = _super.call(this, roleName) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        return _this;
    }
    User.prototype.getFullName = function () {
        return "FullName: ".concat(this.firstName, " ").concat(this.lastName);
    };
    return User;
}(Role));
var role = new Role("Client Account Manager");
var user = new User("Jayashre", "Gnanavel", "Junior CAM");
console.log(role.getRole());
console.log(user.getFullName());
console.log(user.getRole());
