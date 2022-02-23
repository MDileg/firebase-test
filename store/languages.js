export const actions = {
  async changeLanguage({ state, commit }, code) {
    await this.$i18n.setLocale(code);
    this.app.store.dispatch("nav/setNav");
    this.app.store.dispatch("dropdowns/closeDropdownWithName", "language");
    // this.app.$toast.success(this.app.i18n.t('languageChanged'))
  },
};
