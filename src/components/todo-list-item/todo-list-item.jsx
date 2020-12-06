import React from "react";


const ListItem = ({label, important}) => {
    return <span className={important ? 'important' : null}>{label}</span>;
}

export default ListItem;