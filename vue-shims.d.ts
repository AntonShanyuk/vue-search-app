declare module "*.vue" {
    import Vue from "vue";
    export default Vue;
}

declare interface ObjectConstructor {
    assign(...objects: Object[]): Object;
}