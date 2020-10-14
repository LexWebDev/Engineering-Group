import defaultState from './defaultState'

export const state = () => ({
  formData: {
    name: null,
    phone: null,
    city: null,
    experience: null,
    sections: null,
    fullAnswer: null,
    lastStep: null
  }
})

export const mutations = {
  UPDATE_FULL (state, full) {
    state.formData = full
  },
  UPDATE_ANSWER (state, fAnswer) {
    state.formData.fullAnswer = fAnswer
  },
  UPDATE_LAST_STEP (state, lastStep) {
    state.formData.lastStep = lastStep
  },
  RESET_STATE (state) {
    Object.assign(state, defaultState)
  }
}

export const actions = {
  updateFull (context, full) {
    context.commit('UPDATE_FULL', full)
  },
  updateAnswer (context, fAnswer) {
    context.commit('UPDATE_ANSWER', fAnswer)
  },
  updateLastStep (context, lastStep) {
    context.commit('UPDATE_LAST_STEP', lastStep)
  },
  resetState ({ commit, dispatch }) {
    commit('RESET_STATE')
  }
}

export const getters = {
  getFormData (state) {
    return state.formData
  }
}
