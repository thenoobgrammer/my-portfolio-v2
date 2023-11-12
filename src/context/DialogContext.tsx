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
						<div className="fixed inset-0 bg-black/30 z-50" onClick={clearState} />
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
								className="w-[95%] fixed m-auto md:top-0 max-h-[85%] md:max-w-fit inset-0 overflow-hidden bg-primary shadow-lg rounded-md z-50 text-light/80"
							>
								<header className="flex items-center justify-between border-b-light/20 border-b-[1px] p-3">
									<h6 className="ml-2">{state.title}</h6>
									<button
										className="p-1 hover:bg-light/20 hover:text-accent-200 rounded-md transition-all"
										onClick={clearState}
									>
										<MdClose className="text-accent-300" size={20} />
									</button>
								</header>
								<div className="px-6 py-3 overflow-y-auto scrollbar">{state.content}</div>
							</motion.div>
						</AnimatePresence>
					</>
				)}
				{children}
			</DialogDispatchContext.Provider>
		</DialogContext.Provider>
	)
}
