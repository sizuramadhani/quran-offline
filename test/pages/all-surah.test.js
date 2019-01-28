/* eslint-env jest */
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Helpers from '~/test/helper'
import Component from '~/pages/all-surah.vue'

import Theme from '~/constant/theme'

import dummySurahInfo from './__mocks__/surah-info-item'

const localVue = createLocalVue()
localVue.use(Vuex)
const router = Helpers.initRouter(localVue)
const i18n = Helpers.initI18n(localVue)

const store = new Vuex.Store({
  state: {
    settingActiveTheme: Theme.LIGHT,
    allSurahList: [dummySurahInfo]
  },
  mutations: {
    setHeaderTitle () {}
  },
  actions: {
    fetchAllSurah: jest.fn().mockResolvedValue([dummySurahInfo])
  }
})

describe('pages all-surah.vue', () => {
  test('success mounting components', () => {
    const wrapper = shallowMount(Component, {
      sync: false,
      store,
      router,
      i18n,
      localVue
    })
    expect(wrapper).toBeTruthy()
  })
})
