import React,{useState,useEffect} from "react";

const Card3=()=>{
    const[data,setData]=useState([]);
    useEffect(()=>{
        fetch("http://www.mocky.io/v2/59ac293b100000d60bf9c239")
        .then((result)=>result.json())
        .then((resp)=>{
            console.log("Result",resp);
            setData(resp.posts);
        })
    },[])
    return(
        <>
        {data.map((item)=>(
        <div className="container mt-5 mb-5">
    <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-6">
            <div className="card">
                <div className="d-flex justify-content-between p-2 px-3">
                    <div className="d-flex flex-row align-items-center"> <img src="https://i.imgur.com/UXdKE3o.jpg" style={{width:40}} className="rounded-circle" alt="logo"/>
                        <div className="d-flex flex-column ml-2"> <span className="font-weight-bold">Jeanette Sun</span> <small className="text-primary">Collegues</small> </div>
                    </div>
                    
                    <div className="d-flex flex-row mt-1 ellipsis"> <small className="mr-2">{item.event_date}</small> <i className="fa fa-ellipsis-h" style={{marginLeft: 5}}></i> </div>
                </div> <hr/>
                <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

                <img src={item.thumbnail_image} className="img-fluid" alt="logo"/>
                <div className="p-2">
                    <hr/>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex flex-row icons d-flex align-items-center">{item.likes} Likes <i className="fa fa-heart"></i> <i className="fa fa-smile-o ml-2"></i> </div>
                        <div className="d-flex flex-row muted-color"> <span style={{marginRight:4}}>2 comments</span><span className="ml-2">{item.shares} Share</span> </div>
                    </div>
                    <hr/>
                    <div className="comments">
                        <div className="d-flex flex-row mb-2"> <img src="https://i.imgur.com/9AZ2QX1.jpg" style={{width:40}} className="rounded-image" alt="logo"/>
                            <div className="d-flex flex-column ml-2"> <span className="name">Daniel Frozer</span> <small className="comment-text">I like this alot! thanks alot</small>
                                <div className="d-flex flex-row align-items-center status"> <small>Like</small> <small>Reply</small> <small>Translate</small> <small>18 mins</small> </div>
                            </div>
                        </div>
                        <div className="d-flex flex-row mb-2"> <img src="https://i.imgur.com/1YrCKa1.jpg" style={{width:40}} className="rounded-image" alt="logo"/>
                            <div className="d-flex flex-column ml-2"> <span className="name">Elizabeth goodmen</span> <small className="comment-text">Thanks for sharing!</small>
                                <div className="d-flex flex-row align-items-center status"> <small>Like</small> <small>Reply</small> <small>Translate</small> <small>8 mins</small> </div>
                            </div>
                        </div>
                        <div className="comment-input"> <input type="text" className="form-control"/>
                            <div className="fonts"> <i className="fa fa-camera"></i> </div>
                        </div>
                        <div className="d-flex flex-row muted-color"> <span>{item.views} Views</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

        ))}
        </>
    )
}
export default Card3;