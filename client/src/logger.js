export const logger = store => next => action => {
    console.group(action.type);
    console.log(store.getState());
    console.log(action);
    next(action);
    console.log('NEW STATE', store.getState())
    console.groupEnd()
};