import { createContext, Dispatch, useContext } from 'react'
import { Client } from '../../../types/client'

const initialState: Client[] = []
type State = typeof initialState

export const ACTION = {
    ADD: 'ADD' as const,
    SET: 'SET' as const,
}
type ADDAction = {
    type: typeof ACTION.ADD
    payload: Client
}
type SetAction = {
    type: typeof ACTION.SET
    payload: Client
}
type Action = ADDAction | SetAction

export function reducer(state: State, action: Action) {
    switch (action.type) {
        case ACTION.ADD: {
            return [...state, action.payload]
        }
        case ACTION.SET: {
            const id = action.payload.id
            const i = state.findIndex((c) => c.id == id)
            console.log('state', state, action.payload)

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
