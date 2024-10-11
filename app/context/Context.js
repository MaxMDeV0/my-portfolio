"use client"

import { createContext } from 'react';

export const SessionContext = createContext();

export const Context = ({ children, session }) => {
    return (
        <SessionContext.Provider value={session}>
            {children}
        </SessionContext.Provider>
    );
 };