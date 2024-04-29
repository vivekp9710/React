import React from 'react'
import { Provider } from 'react-redux'
import CountCom from './CountCom'
import { store } from "./app/store"
import AmountCom from './AmountCom'


export default function AppToolkit() {
    return (
        <>
            <Provider store={store}>
                {/* <CountCom /> */}
                <AmountCom />

            </Provider>
        </>
    )
}
