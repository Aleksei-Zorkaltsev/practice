export default {
    state: {
        route: null,
    },
    actions: {
        setStoreRoute(ctx, obj){
            ctx.commit('SET_ROUTE', obj.route);
            obj.router.beforeEach((to, from, next) => {
                ctx.commit('SET_ROUTE', to);
                next();
            });
        }
    },
    mutations: {
        SET_ROUTE(state, route){
            state.route = route
        }
    },
}
