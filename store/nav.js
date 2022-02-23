export const state = () => ({
  nav: [],
})

export const mutations = {
  SET_NAV(state, nav) {
    state.nav = nav
  },
}

export const actions = {
  setNav({ commit }) {
    const nav = [
      { name: this.$i18n.t('aboutUs'), link: '/about-us' },
      { name: this.$i18n.t('catalog'), link: '/catalog' },
      { name: this.$i18n.t('news'), link: '/news' },
      { name: this.$i18n.t('contactUs'), link: '/contact-us' },
    ]
    commit('SET_NAV', nav)
  },
}

export const getters = {
  nav(state) {
    return state.nav
  },
}
