import React from 'react';

const NewsList = (props) => {
   

    const output= props.datalist.map((item)=>{
        return(
            <div key={item.id}>
                <h4>PMID: {item.PMID}</h4>
                <h4>Title: {item.Title}</h4>
                <div>
                   Abstract: {item.Abstract}
                </div>
                <h4>Population: {item.Population}</h4>
                <h4>Intervention: {item.Intervention}</h4>
                <h4>Outcome: {item.Outcome}</h4>
                <h4>-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</h4>
            </div>
        )
    })

    return(
        <div>{output}</div>
    )
}

export default NewsList