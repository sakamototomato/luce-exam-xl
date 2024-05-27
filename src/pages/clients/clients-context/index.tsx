import { createContext, Dispatch, useContext, useReducer } from 'react'
import { Client } from '../../../types/client'

const initialState: Client[] = []
type State = typeof initialState

export const ACTION = {
    Add: 'Add' as const,
    SET: 'SET' as const,
}
type AddAction = {
    type: typeof ACTION.Add
    payload: Client
}
type SetAction = {
    type: typeof ACTION.SET
    payload: Client
}
type Action = AddAction | SetAction

export function reducer(state: State, action: Action) {
    switch (action.type) {
        case ACTION.Add:
            return [...state, action.payload]
        case ACTION.SET: {
            const id = action.payload.id
            const i = state.findIndex((c) => c.id == id)
            if (i === -1) {
                return state
            }
            state[i] = { ...action.payload }
            return [...state]
        }
        default:
            throw new Error()
    }
}
export const ClientsContext = createContext<
    [typeof initialState, Dispatch<Action>]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
>([] as any)

export const useClientsContext = () => useContext(ClientsContext)
