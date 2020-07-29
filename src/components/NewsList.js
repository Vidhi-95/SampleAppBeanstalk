import React from 'react';

const NewsList = (props) => {
   

    const output= props.datalist.map((item)=>{
        return(
            <div key={item.id}>
                <h3>Title: {item.title}</h3>
                <div>
                   Feed: {item.feed}
                </div>
            </div>
        )
    })

    return(
        <div>{output}</div>
    )
}

export default NewsList