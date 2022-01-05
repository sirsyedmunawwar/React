import React from 'react'

export default function Article(props) {
    console.log(props)
    return (
        
            <div className="leftSide">
                    {props.updater.map((item) =>
                        <>
                            <div className="leftsidediv">
                                <img className="leftsideimage" src={item.pic} />
                                <h1 className="leftSidehead">
                                    {item.head}
                                </h1>
                                <p className="leftSidedetails">
                                    {item.details}
                                </p>
                                <span className="leftSidetype">
                                    {item.type}
                                </span>
                                <span className="leftSidedate">
                                    {item.date}
                                </span>
                            </div>
                        </>)}
            </div>
        
    )
}
