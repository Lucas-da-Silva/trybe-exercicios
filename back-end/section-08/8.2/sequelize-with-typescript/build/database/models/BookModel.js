"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const AuthorModel_1 = __importDefault(require("./AuthorModel"));
class Book extends sequelize_1.Model {
}
Book.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    authorId: {
        type: sequelize_1.INTEGER,
        allowNull: false,
    },
    genreId: {
        type: sequelize_1.INTEGER,
        allowNull: false,
    },
}, {
    underscored: true,
    sequelize: _1.default,
    modelName: 'books',
    timestamps: false,
});
AuthorModel_1.default.hasMany(Book);
Book.belongsTo(AuthorModel_1.default);
exports.default = Book;
