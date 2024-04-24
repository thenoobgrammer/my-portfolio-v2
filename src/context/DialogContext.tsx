'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { FC, ReactNode, createContext, useContext, useReducer } from 'react'

import { MdClose } from 'react-icons/md'

declare type DialogState = {
	opened: boolean
	content: ReactNode | string
	title: ReactNode | string
}

export const DialogContext = createContext<any>(null)
export const DialogDispatchContext = createContext<any>(null)

const defaultState = {
	opened: false,
	content: <></>,
	title: '',
}

function DialogReducers(state: DialogState, action) {
	switch (action.type) {
		case 'open':
			return { ...state, ...action, opened: true, prevState: state }
		default:
			return defaultState
	}
}

export function useDialog() {
	return useContext(DialogContext)
}

export function useDialogDispatch() {
	return useContext(DialogDispatchContext)
}

export const DialogProvider: FC<any> = ({ children }) => {
	const [state, dispatch] = useReducer(DialogReducers, defaultState)

	const clearState = () => dispatch({ type: 'default', content: <></>, title: '' })

	return (
		<DialogContext.Provider value={state}>
			<DialogDispatchContext.Provider value={dispatch}>
				{state.opened && (
					<>
						<div className="fixed inset-0 z-50 h-screen w-screen bg-black/60" onClick={clearState} />
						<AnimatePresence>
							<motion.div
								initial={{ y: -80, opacity: 0 }}
								animate={{
									y: 0,
									x: 0,
									opacity: 1,
									transition: {
										type: 'tween',
										duration: 0.1,
										ease: [0.25, 0.25, 0.25, 0.4],
									},
								}}
								exit={{
									y: 280,
									opacity: 0,
									transition: {
										type: 'tween',
										duration: 2,
										ease: [0.25, 0.25, 0.25, 0.4],
									},
								}}
								className="fixed inset-0 z-50 m-auto h-[85%] w-[95%] overflow-hidden rounded-md bg-primary text-secondary shadow-lg md:max-h-[1200px] md:max-w-[1200px]"
							>
								<header className="flex items-center justify-between p-3">
									<h6 className="ml-2">{state.title}</h6>
									<button
										className="rounded-md p-1 transition-all hover:bg-light/20 hover:text-accent-200"
										onClick={clearState}
									>
										<MdClose className="text-accent-300" size={20} />
									</button>
								</header>
								{state.content}
							</motion.div>
						</AnimatePresence>
					</>
				)}
				{children}
			</DialogDispatchContext.Provider>
		</DialogContext.Provider>
	)
}
