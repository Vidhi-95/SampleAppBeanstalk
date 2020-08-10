import React from 'react';
import './main.css'
const NewsList = (props) => {
   

    const output= props.datalist.map((item)=>{
        return(
            <div className="Border" key={item.id}>
                <div className="Inner-Div">
                
                <span className = "Right-Aligned">Created Date: {item.CreatedDate}</span>
                <a className= "PMID" href="url">PMID: {item.PMID} </a>
                <span className="Authors"> ( {item.Authors} )</span>
                {/* <div className="Title-Cit">
                     <div className="Title">{item.Title}</div>
                     <div className="Citation">{item.Citation}</div>
                     </div>    */}
                 <h4 className="Title">{item.Title} </h4>
                 <h5 className = "Citation">{item.Citation}</h5> 
                
                <div>
                   Abstract: {item.Abstract}
                </div>
                <h4>Drug: {item.Drug} </h4>
                <h4>Is the Drug Listed In Column A? {item.LisedInColA}</h4>
                <h4>Is the drug being used in its original formulation? {item.originalFormulation}</h4>
                <h4>Is the drug being used alone or in combination? {item.AloneOrComb}</h4>
                <div className="box">
      <div className="green">Cancer Type: {item.cancerType}</div>
      <div className="blue">Study Type: {item.studyType}</div>
      <div className="gray">Include Status: {item.IncludeStatus}</div>
      <div className="pink">Therapeutic Association: {item.therapeuticAssociation}</div>
    </div>
                </div>
            </div>
        )
    })

    return(
        <div>{output}</div>
        
    )
}

export default NewsList