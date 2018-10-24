import TodoTask from './todo.model';

/**
 * 
 * @param {number | string} id
 * @returns {Promise<TodoTask | null>} 
 */
export async function getTask(id) {
    try {
        const res = await fetch(`https://nztodo.herokuapp.com/api/task/${id}/?format=json`);
        const json = await res.json();
        return new TodoTask(json);
    } catch(err) {
        return null;
    }
}