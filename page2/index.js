const state = {
    value:false,
};
const mutations = {
    setvalue(state, info){
        state.value = info;
    }
};
const actions = {
    setvalue(conect,item){
        conect.commit('setvalue',item)
    }
};
const getters = {
    getvalue(state){
        return state.value
    },
};
export default {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}
