import css from "./home.css"
import Hz from "./Hz"


export default function Home(props) {
    return (
        <>
            <div className="homeimages">
                <div className="verticalGallery">
                    <h1 className="titleofvg">
                        Title of Vertical Gallery
                    </h1>
                    <p className="dateofvg"> Travel / August 21 2017</p>
                </div>
                <div className="righttop">
                    <h1 className="titlert">
                        The Sound cloud You loved is doomed
                    </h1>
                    <p className="datert"> Travel / August 21 2017</p>
                </div>
                <div className="rightbottom">
                    <h1 className="titlert">
                        The Sound cloud You loved is doomed
                    </h1>
                    <p className="datert"> Travel / August 21 2017</p>
                </div>
            </div>
            <div>
                <h1 className="latest">
                The Latest
                </h1>
                <hr className="latesthr"/>
            </div>
                

            <div className="leftSide">
                    {props.articleContent.map((item) =>
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
            <div>
                <h1 className="latest">
                Latest Article
                </h1>
                <hr className="latesthr"/>
            </div>
            <div className="top">
                <div className="left">
                    <Hz/>
                    <div className="leftdiv">
                    {props.articleContent.map((any) =>
                            <>
                                
                               <div>
                                        <img className="imagediv" src={any.img} />
                                    <div className="contentdiv">
                                        <h1>{any.heading}</h1>
                                        <p>{any.description}</p>
                                        <span>{any.type1}</span>
                                        <span>{any.date1}</span>
                                    </div>
                                    </div>
                                    
                               

                            </>
                        )}
                         </div>
                 <div className="verticalGallerybottom">
                            <h1>
                                Title of Vertical Gallery
                            </h1>
                            <p> Travel / August 21 2017</p>
                 </div>

                </div>
                <div className="right" >
                    <div className="adv">

                    </div>
                    {/* <div>
                            {props.articleContent.map((item) =>
                                <>
                                    <div className="leftSide">
                                        <div>
                                            <img src={item.img} /></div>
                                        <div>
                                            <h1>{item.heading}</h1>
                                            <p>{item.description}</p>
                                            <p>{item.date}</p>
                                        </div>
                                     </div>

                                </>
                            )}
                    </div> */}
                </div>
                </div>
                <div className="bottom">
                    {props.articleContent.map((item) =>
                        <>
                            <div>
                                <h1>{item.heading}</h1>
                                <p>{item.description}</p>
                                <p>{item.date}</p>
                            </div>
                        </>
                    )}
                </div>
            <div/>
            </>
    )
        
}


