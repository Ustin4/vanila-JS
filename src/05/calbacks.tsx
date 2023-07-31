import React from 'react'

export const Users = () => {
    /*const deleteusers = () => {
        alert('Delete')

    }*/
    const focus = () => {
        alert('focus lost')
    }
    return <div>
        <textarea onBlur={focus}>Ustin</textarea>
        <button>delete</button>
    </div>


}
