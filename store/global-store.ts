import { createStore } from 'zustand/vanilla'

export type GlobalState = {
}

export type GlobalActions = {
}

export type GlobalStore = GlobalState & GlobalActions

export const initGlobalStore = (): GlobalState => {
  return {
  } // Initialize State Properties
}

export const defaultInitState: GlobalState = {
}

export const createGlobalStore = (
  initState: GlobalState = defaultInitState,
) => {
  return createStore<GlobalStore>()((set) => ({
    ...initState,
  })) 
}